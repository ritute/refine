import { getXRay } from "@refinedev/devtools-internal";
import {
  type UseMutationOptions,
  type UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  pickDataProvider,
  pickNotDeprecated,
  queryKeysReplacement,
  useActiveAuthProvider,
} from "@definitions/helpers";
import {
  useCancelNotification,
  useDataProvider,
  useHandleNotification,
  useInvalidate,
  useKeys,
  useLog,
  useMeta,
  useMutationMode,
  useOnError,
  usePublish,
  useRefineContext,
  useResource,
  useTranslate,
} from "@hooks";

import type {
  BaseKey,
  BaseRecord,
  GetListResponse,
  GetManyResponse,
  GetOneResponse,
  HttpError,
  IQueryKeys,
  MetaQuery,
  MutationMode,
  PrevContext as UpdateContext,
  PreviousQuery,
  UpdateResponse,
} from "../../contexts/data/types";
import type { SuccessErrorNotification } from "../../contexts/notification/types";
import { ActionTypes } from "../../contexts/undoableQueue/types";
import {
  type UseLoadingOvertimeOptionsProps,
  type UseLoadingOvertimeReturnType,
  useLoadingOvertime,
} from "../useLoadingOvertime";

export type OptimisticUpdateMapType<TData, TVariables> = {
  list?:
    | ((
        previous: GetListResponse<TData> | null | undefined,
        values: TVariables,
        id: BaseKey,
      ) => GetListResponse<TData> | null)
    | boolean;
  many?:
    | ((
        previous: GetManyResponse<TData> | null | undefined,
        values: TVariables,
        id: BaseKey,
      ) => GetManyResponse<TData> | null)
    | boolean;
  detail?:
    | ((
        previous: GetOneResponse<TData> | null | undefined,
        values: TVariables,
        id: BaseKey,
      ) => GetOneResponse<TData> | null)
    | boolean;
};

export type UpdateParams<TData, TError, TVariables> = {
  /**
   * Resource name for API data interactions
   */
  resource?: string;
  /**
   * id for mutation function
   */
  id?: BaseKey;
  /**
   * [Determines when mutations are executed](/advanced-tutorials/mutation-mode.md)
   */
  mutationMode?: MutationMode;
  /**
   * Duration in ms to wait before executing the mutation when `mutationMode = "undoable"`
   */
  undoableTimeout?: number;
  /**
   * Provides a function to cancel the mutation when `mutationMode = "undoable"`
   */
  onCancel?: (cancelMutation: () => void) => void;
  /**
   * Values for mutation function
   */
  values?: TVariables;
  /**
   * Metadata query for dataProvider
   */
  meta?: MetaQuery;
  /**
   * Metadata query for dataProvider
   * @deprecated `metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility.
   */
  metaData?: MetaQuery;
  /**
   * If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.
   * @default "default"
   */
  dataProviderName?: string;
  /**
   *  You can use it to manage the invalidations that will occur at the end of the mutation.
   */
  invalidates?: Array<keyof IQueryKeys>;
  /**
   * You can use it to customize the optimistic update logic.
   * @default {
   *   list: true,
   *   many: true,
   *   detail: true,
   * }
   */
  optimisticUpdateMap?: OptimisticUpdateMapType<TData, TVariables>;
} & SuccessErrorNotification<
  UpdateResponse<TData>,
  TError,
  { id: BaseKey; values: TVariables }
>;

export type UseUpdateReturnType<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
> = UseMutationResult<
  UpdateResponse<TData>,
  TError,
  UpdateParams<TData, TError, TVariables>,
  UpdateContext<TData>
> &
  UseLoadingOvertimeReturnType;

export type UseUpdateProps<
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
> = {
  mutationOptions?: Omit<
    UseMutationOptions<
      UpdateResponse<TData>,
      TError,
      UpdateParams<TData, TError, TVariables>,
      UpdateContext<TData>
    >,
    "mutationFn" | "onMutate"
  >;
} & UseLoadingOvertimeOptionsProps &
  UpdateParams<TData, TError, TVariables>;

/**
 * `useUpdate` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/reference/useMutation `useMutation`} for update mutations.
 *
 * It uses `update` method as mutation function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/api-reference/core/hooks/data/useUpdate} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-reference/core/interfaceReferences/#httperror `HttpError`}
 * @typeParam TVariables - Values for mutation function
 *
 */
export const useUpdate = <
  TData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TVariables = {},
>({
  id: idFromProps,
  resource: resourceFromProps,
  values: valuesFromProps,
  dataProviderName: dataProviderNameFromProps,
  successNotification: successNotificationFromProps,
  errorNotification: errorNotificationFromProps,
  meta: metaFromProps,
  metaData: metaDataFromProps,
  mutationMode: mutationModeFromProps,
  undoableTimeout: undoableTimeoutFromProps,
  onCancel: onCancelFromProps,
  optimisticUpdateMap: optimisticUpdateMapFromProps,
  invalidates: invalidatesFromProps,
  mutationOptions: { onSettled, onSuccess, onError, ...mutationOptions } = {},
  overtimeOptions,
}: UseUpdateProps<TData, TError, TVariables> = {}): UseUpdateReturnType<
  TData,
  TError,
  TVariables
> => {
  const { resources, select } = useResource();
  const queryClient = useQueryClient();
  const dataProvider = useDataProvider();

  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext,
  } = useMutationMode();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
  });
  const publish = usePublish();
  const { log } = useLog();
  const { notificationDispatch } = useCancelNotification();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const getMeta = useMeta();
  const {
    options: { textTransformers },
  } = useRefineContext();
  const { keys, preferLegacyKeys } = useKeys();

  const mutation = useMutation<
    UpdateResponse<TData>,
    TError,
    UpdateParams<TData, TError, TVariables>,
    UpdateContext<TData>
  >({
    mutationFn: ({
      id: idFromFn,
      values: valuesFromFn,
      resource: resourceFromFn,
      mutationMode: mutationModeFromFn,
      undoableTimeout: undoableTimeoutFromFn,
      onCancel: onCancelFromFn,
      meta: metaFromFn,
      metaData: metaDataFromFn,
      dataProviderName: dataProviderNameFromFn,
    }) => {
      // The useUpdate hook accepts values from its prop or the useUpdate().mutate function params (deprecated).
      // If not provided in the props, it uses the function params.
      const [
        preferredId,
        preferredValues,
        preferredResource,
        preferredMutationMode,
        preferredUndoableTimeout,
        preferredOnCancel,
        preferredMeta,
        preferredMetaData,
        preferredDataProviderName,
      ] = [
        pickNotDeprecated(idFromFn, idFromProps),
        pickNotDeprecated(valuesFromFn, valuesFromProps),
        pickNotDeprecated(resourceFromFn, resourceFromProps),
        pickNotDeprecated(mutationModeFromFn, mutationModeFromProps),
        pickNotDeprecated(undoableTimeoutFromFn, undoableTimeoutFromProps),
        pickNotDeprecated(onCancelFromFn, onCancelFromProps),
        pickNotDeprecated(metaFromFn, metaFromProps),
        pickNotDeprecated(metaDataFromFn, metaDataFromProps),
        pickNotDeprecated(dataProviderNameFromFn, dataProviderNameFromProps),
      ];
      if (!preferredId) {
        throw new Error(
          `[useUpdate]: The 'id' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredValues) {
        throw new Error(
          `[useUpdate]: The 'values' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredResource) {
        throw new Error(
          `[useUpdate]: The 'resource' prop is required for the 'useUpdate' hook.`,
        );
      }

      const { resource, identifier } = select(preferredResource);

      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(preferredMeta, preferredMetaData),
      });

      const mutationModePropOrContext =
        preferredMutationMode ?? mutationModeContext;

      const undoableTimeoutPropOrContext =
        preferredUndoableTimeout ?? undoableTimeoutContext;

      if (!(mutationModePropOrContext === "undoable")) {
        return dataProvider(
          pickDataProvider(identifier, preferredDataProviderName, resources),
        ).update<TData, TVariables>({
          resource: resource.name,
          id: preferredId,
          variables: preferredValues,
          meta: combinedMeta,
          metaData: combinedMeta,
        });
      }
      const updatePromise = new Promise<UpdateResponse<TData>>(
        (resolve, reject) => {
          const doMutation = () => {
            dataProvider(
              pickDataProvider(
                identifier,
                preferredDataProviderName,
                resources,
              ),
            )
              .update<TData, TVariables>({
                resource: resource.name,
                id: preferredId,
                variables: preferredValues,
                meta: combinedMeta,
                metaData: combinedMeta,
              })
              .then((result) => resolve(result))
              .catch((err) => reject(err));
          };

          const cancelMutation = () => {
            reject({ message: "mutationCancelled" });
          };

          if (preferredOnCancel) {
            preferredOnCancel(cancelMutation);
          }

          notificationDispatch({
            type: ActionTypes.ADD,
            payload: {
              id: preferredId,
              resource: identifier,
              cancelMutation: cancelMutation,
              doMutation: doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!preferredOnCancel,
            },
          });
        },
      );
      return updatePromise;
    },
    onMutate: async ({
      id: idFromFn,
      resource: resourceFromFn,
      values: valuesFromFn,
      mutationMode: mutationModeFromFn,
      dataProviderName: dataProviderNameFromFn,
      meta: metaFromFn,
      metaData: metaDataFromFn,
      optimisticUpdateMap: optimisticUpdateMapFromFn,
    }) => {
      // The useUpdate hook accepts values from its prop or the useUpdate().mutate function params (deprecated).
      // If not provided in the props, it uses the function params.
      const [
        preferredId,
        preferredResource,
        preferredValues,
        preferredMutationMode,
        preferredDataProviderName,
        preferredOptimisticUpdateMap,
      ] = [
        pickNotDeprecated(idFromFn, idFromProps),
        pickNotDeprecated(resourceFromFn, resourceFromProps),
        pickNotDeprecated(valuesFromFn, valuesFromProps),
        pickNotDeprecated(mutationModeFromFn, mutationModeFromProps),
        pickNotDeprecated(dataProviderNameFromFn, dataProviderNameFromProps),
        pickNotDeprecated(
          optimisticUpdateMapFromFn,
          optimisticUpdateMapFromProps,
        ) ?? {
          list: true,
          many: true,
          detail: true,
        },
      ];
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(
        pickNotDeprecated(metaFromProps, metaFromFn),
        pickNotDeprecated(metaDataFromProps, metaDataFromFn),
      ) ?? {};
      if (!preferredId) {
        throw new Error(
          `[useUpdate]: The 'id' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredValues) {
        throw new Error(
          `[useUpdate]: The 'values' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredResource) {
        throw new Error(
          `[useUpdate]: The 'resource' prop is required for the 'useUpdate' hook.`,
        );
      }

      const { identifier } = select(preferredResource);

      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, preferredDataProviderName, resources),
        preferredMeta,
      );

      const resourceKeys = keys()
        .data(
          pickDataProvider(identifier, preferredDataProviderName, resources),
        )
        .resource(identifier);

      const previousQueries: PreviousQuery<TData>[] =
        queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));

      const mutationModePropOrContext =
        preferredMutationMode ?? mutationModeContext;

      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        undefined,
        {
          silent: true,
        },
      );

      if (mutationModePropOrContext !== "pessimistic") {
        if (preferredOptimisticUpdateMap.list) {
          // Set the previous queries to the new ones:
          queryClient.setQueriesData(
            resourceKeys
              .action("list")
              .params(preferredMeta ?? {})
              .get(preferLegacyKeys),
            (previous?: GetListResponse<TData> | null) => {
              if (typeof preferredOptimisticUpdateMap.list === "function") {
                return preferredOptimisticUpdateMap.list(
                  previous,
                  preferredValues,
                  preferredId,
                );
              }

              if (!previous) {
                return null;
              }

              const data = previous.data.map((record: TData) => {
                if (record.id?.toString() === preferredId?.toString()) {
                  return {
                    id: preferredId,
                    ...record,
                    ...preferredValues,
                  } as unknown as TData;
                }
                return record;
              });

              return {
                ...previous,
                data,
              };
            },
          );
        }

        if (preferredOptimisticUpdateMap.many) {
          queryClient.setQueriesData(
            resourceKeys.action("many").get(preferLegacyKeys),
            (previous?: GetManyResponse<TData> | null) => {
              if (typeof preferredOptimisticUpdateMap.many === "function") {
                return preferredOptimisticUpdateMap.many(
                  previous,
                  preferredValues,
                  preferredId,
                );
              }

              if (!previous) {
                return null;
              }

              const data = previous.data.map((record: TData) => {
                if (record.id?.toString() === preferredId?.toString()) {
                  record = {
                    id: preferredId,
                    ...record,
                    ...preferredValues,
                  } as unknown as TData;
                }
                return record;
              });
              return {
                ...previous,
                data,
              };
            },
          );
        }

        if (preferredOptimisticUpdateMap.detail) {
          queryClient.setQueriesData(
            resourceKeys
              .action("one")
              .id(preferredId)
              .params(preferredMeta ?? {})
              .get(preferLegacyKeys),
            (previous?: GetOneResponse<TData> | null) => {
              if (typeof preferredOptimisticUpdateMap.detail === "function") {
                return preferredOptimisticUpdateMap.detail(
                  previous,
                  preferredValues,
                  preferredId,
                );
              }

              if (!previous) {
                return null;
              }

              return {
                ...previous,
                data: {
                  ...previous.data,
                  ...preferredValues,
                },
              };
            },
          );
        }
      }

      return {
        previousQueries,
        queryKey,
      };
    },
    onSettled: (data, error, variables, context) => {
      const {
        id: idFromFn,
        resource: resourceFromFn,
        dataProviderName: dataProviderNameFromFn,
        invalidates: invalidatesFromFn = ["list", "many", "detail"],
      } = variables;
      // The useUpdate hook accepts values from its prop or the useUpdate().mutate function params (deprecated).
      // If not provided in the props, it uses the function params.
      const [
        preferredId,
        preferredResource,
        preferredDataProviderName,
        preferredInvalidates,
      ] = [
        pickNotDeprecated(idFromFn, idFromProps),
        pickNotDeprecated(resourceFromFn, resourceFromProps),
        pickNotDeprecated(dataProviderNameFromFn, dataProviderNameFromProps),
        pickNotDeprecated(invalidatesFromFn, invalidatesFromProps) ??
          (["list", "many", "detail"] satisfies (keyof IQueryKeys)[]),
      ];
      if (!preferredId) {
        throw new Error(
          `[useUpdate]: The 'id' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredResource) {
        throw new Error(
          `[useUpdate]: The 'resource' prop is required for the 'useUpdate' hook.`,
        );
      }

      const { identifier } = select(preferredResource);

      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          preferredDataProviderName,
          resources,
        ),
        invalidates: preferredInvalidates,
        id: preferredId,
      });

      notificationDispatch({
        type: ActionTypes.REMOVE,
        payload: { id: idFromFn, resource: identifier },
      });

      onSettled?.(data, error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      const {
        id: idFromFn,
        values: valuesFromFn,
        resource: resourceFromFn,
        dataProviderName: dataProviderNameFromFn,
        meta: metaFromFn,
        metaData: metaDataFromFn,
        successNotification: successNotificationFromFn,
      } = variables;

      // The useUpdate hook accepts values from its prop or the useUpdate().mutate function params (deprecated).
      // If not provided in the props, it uses the function params.
      const [
        preferredId,
        preferredValues,
        preferredResource,
        preferredDataProviderName,
        preferredMeta,
        preferredMetaData,
        preferredSuccessNotification,
      ] = [
        pickNotDeprecated(idFromFn, idFromProps),
        pickNotDeprecated(valuesFromFn, valuesFromProps),
        pickNotDeprecated(resourceFromFn, resourceFromProps),
        pickNotDeprecated(dataProviderNameFromFn, dataProviderNameFromProps),
        pickNotDeprecated(metaFromFn, metaFromProps),
        pickNotDeprecated(metaDataFromFn, metaDataFromProps),
        pickNotDeprecated(
          successNotificationFromFn,
          successNotificationFromProps,
        ),
      ];
      if (!preferredId) {
        throw new Error(
          `[useUpdate]: The 'id' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredValues) {
        throw new Error(
          `[useUpdate]: The 'values' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredResource) {
        throw new Error(
          `[useUpdate]: The 'resource' prop is required for the 'useUpdate' hook.`,
        );
      }

      const { resource, identifier } = select(preferredResource);
      const resourceSingular = textTransformers.singular(identifier);

      const dataProviderName = pickDataProvider(
        identifier,
        preferredDataProviderName,
        resources,
      );

      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(preferredMeta, preferredMetaData),
      });

      const notificationConfig =
        typeof preferredSuccessNotification === "function"
          ? preferredSuccessNotification(
              data,
              { id: preferredId, values: preferredValues },
              identifier,
            )
          : preferredSuccessNotification;

      handleNotification(notificationConfig, {
        key: `${preferredId}-${identifier}-notification`,
        description: translate("notifications.success", "Successful"),
        message: translate(
          "notifications.editSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular,
            ),
          },
          `Successfully updated ${resourceSingular}`,
        ),
        type: "success",
      });

      publish?.({
        channel: `resources/${resource.name}`,
        type: "updated",
        payload: {
          ids: data.data?.id ? [data.data.id] : undefined,
        },
        date: new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName,
        },
      });

      let previousData: any;
      if (context) {
        const queryData = queryClient.getQueryData<UpdateResponse<TData>>(
          context.queryKey.detail(preferredId),
        );

        previousData = Object.keys(preferredValues || {}).reduce<any>(
          (acc, item) => {
            acc[item] = queryData?.data?.[item];
            return acc;
          },
          {},
        );
      }

      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log?.mutate({
        action: "update",
        resource: resource.name,
        data: preferredValues,
        previousData,
        meta: {
          id: preferredId,
          dataProviderName,
          ...rest,
        },
      });

      onSuccess?.(data, variables, context);
    },
    onError: (err: TError, variables, context) => {
      const {
        id: idFromFn,
        values: valuesFromFn,
        resource: resourceFromFn,
        errorNotification: errorNotificationFromFn,
      } = variables;

      // The useUpdate hook accepts values from its prop or the useUpdate().mutate function params (deprecated).
      // If not provided in the props, it uses the function params.
      const [
        preferredId,
        preferredValues,
        preferredResource,
        preferredErrorNotification,
      ] = [
        pickNotDeprecated(idFromFn, idFromProps),
        pickNotDeprecated(valuesFromFn, valuesFromProps),
        pickNotDeprecated(resourceFromFn, resourceFromProps),
        pickNotDeprecated(errorNotificationFromFn, errorNotificationFromProps),
      ];
      if (!preferredId) {
        throw new Error(
          `[useUpdate]: The 'id' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredValues) {
        throw new Error(
          `[useUpdate]: The 'values' prop is required for the 'useUpdate' hook.`,
        );
      }
      if (!preferredResource) {
        throw new Error(
          `[useUpdate]: The 'resource' prop is required for the 'useUpdate' hook.`,
        );
      }

      const { identifier } = select(preferredResource);

      // set back the queries to the context:
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }

      if (err.message !== "mutationCancelled") {
        checkError?.(err);

        const resourceSingular = textTransformers.singular(identifier);

        const notificationConfig =
          typeof preferredErrorNotification === "function"
            ? preferredErrorNotification(
                err,
                { id: preferredId, values: preferredValues },
                identifier,
              )
            : preferredErrorNotification;

        handleNotification(notificationConfig, {
          key: `${preferredId}-${identifier}-notification`,
          message: translate(
            "notifications.editError",
            {
              resource: translate(
                `${identifier}.${identifier}`,
                resourceSingular,
              ),
              statusCode: err.statusCode,
            },
            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`,
          ),
          description: err.message,
          type: "error",
        });
      }

      onError?.(err, variables, context);
    },
    mutationKey: keys().data().mutation("update").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions?.meta,
      ...getXRay("useUpdate", preferLegacyKeys),
    },
  });

  const { elapsedTime } = useLoadingOvertime({
    isLoading: mutation.isLoading,
    interval: overtimeOptions?.interval,
    onInterval: overtimeOptions?.onInterval,
  });

  return { ...mutation, overtime: { elapsedTime } };
};
