"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31525],{58860:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>y});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,y=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(y,o(o({ref:t},g),{},{components:n})):a.createElement(y,o({ref:t},g))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"Hasura",source:"https://github.com/refinedev/refine/tree/master/packages/hasura",swizzle:!0},l=void 0,p={unversionedId:"data/packages/hasura/index",id:"data/packages/hasura/index",title:"Hasura",description:"Refine provides a data provider for APIs powered with Hasura, a platform to build and deploy GraphQL APIs.",source:"@site/docs/data/packages/hasura/index.md",sourceDirName:"data/packages/hasura",slug:"/data/packages/hasura/",permalink:"/docs/data/packages/hasura/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/hasura/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718023189,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{title:"Hasura",source:"https://github.com/refinedev/refine/tree/master/packages/hasura",swizzle:!0},sidebar:"mainSidebar",previous:{title:"NestJS CRUD",permalink:"/docs/data/packages/nestjsx-crud/"},next:{title:"Community Data Providers",permalink:"/docs/data/packages/community-data-providers/"}},g={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Developer Experience",id:"developer-experience",level:3},{value:"Usage with <code>graphql-tag</code>",id:"usage-with-graphql-tag",level:3},{value:"Utility Types",id:"utility-types",level:3},{value:"GetFields",id:"getfields",level:4},{value:"GetFieldsFromList",id:"getfieldsfromlist",level:4},{value:"GetVariables",id:"getvariables",level:4},{value:"Realtime",id:"realtime",level:3},{value:"Example",id:"example",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},c=d("DocThumbsUpDownFeedbackWidget"),y=d("InstallPackagesCommand"),m=d("CodeSandboxExample"),h={toc:u},f="wrapper";function b(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Refine provides a data provider for APIs powered with ",(0,a.yg)("a",{parentName:"p",href:"https://hasura.io"},"Hasura"),", a platform to build and deploy GraphQL APIs."),(0,a.yg)("admonition",{title:"Good to know",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"This library uses ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/jasonkuhrt/graphql-request"},(0,a.yg)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests."),(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("a",{parentName:"li",href:"https://the-guild.dev/graphql/ws"},(0,a.yg)("inlineCode",{parentName:"a"},"graphql-ws@5"))," package, used to handle the realtime subscriptions is included in the package."),(0,a.yg)("li",{parentName:"ul"},"You can also use ",(0,a.yg)("a",{parentName:"li",href:"https://www.npmjs.com/package/graphql-tag"},(0,a.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," to write your queries and mutations."),(0,a.yg)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,a.yg)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."),(0,a.yg)("li",{parentName:"ul"},"To learn more about realtime features of Refine, check out the ",(0,a.yg)("a",{parentName:"li",href:"/docs/guides-concepts/realtime"},"Realtime")," guide."))),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)(c,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(y,{args:"@refinedev/hasura",mdxType:"InstallPackagesCommand"})),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/hasura";\n\n// highlight-start\nconst client = new GraphQLClient("<API_URL>", {\n  headers: {\n    "x-hasura-role": "public",\n  },\n});\n// highlight-end\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider(client)}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,a.yg)("h3",{id:"developer-experience"},"Developer Experience"),(0,a.yg)(c,{id:"developer-experience",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We suggest using ",(0,a.yg)("inlineCode",{parentName:"p"},"GraphQL Code Generator")," to generate types for your queries and mutations. You can check out the ",(0,a.yg)("a",{parentName:"p",href:"https://the-guild.dev/graphql/codegen/docs/getting-started"},"GraphQL Code Generator Documentation")," to learn more about it."),(0,a.yg)("p",null,"It simplifies the process of writing queries and mutations and provides a better developer experience with auto-completions."),(0,a.yg)("p",null,"Make sure you install GraphQL Language Service for your code editor to get the best experience."),(0,a.yg)("p",null,"VSCode: ",(0,a.yg)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql"},"https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm i -D @graphql-codegen/cli@5 @graphql-codegen/typescript@4 @graphql-codegen/import-types-preset@3\n")),(0,a.yg)("p",null,"Add a ",(0,a.yg)("inlineCode",{parentName:"p"},"graphql.config.ts")," file to the root of your project."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Show Config File"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="graphql.config.ts"',title:'"graphql.config.ts"'},'import type { IGraphQLConfig } from "graphql-config";\n\nconst config: IGraphQLConfig = {\n  schema: "https://flowing-mammal-24.hasura.app/v1/graphql",\n  extensions: {\n    codegen: {\n      // Optional, you can use this to format your generated files.\n      hooks: {\n        afterOneFileWrite: ["eslint --fix", "prettier --write"],\n      },\n      generates: {\n        "src/graphql/schema.types.ts": {\n          plugins: ["typescript"],\n          config: {\n            skipTypename: true,\n            enumsAsTypes: true,\n          },\n        },\n        "src/graphql/types.ts": {\n          preset: "import-types",\n          documents: ["src/**/*.{ts,tsx}"],\n          plugins: ["typescript-operations"],\n          config: {\n            skipTypename: true,\n            enumsAsTypes: true,\n            preResolveTypes: false,\n            useTypeImports: true,\n          },\n          presetConfig: {\n            typesPath: "./schema.types",\n          },\n        },\n      },\n    },\n  },\n};\n\nexport default config;\n'))),(0,a.yg)("p",null,"Add the following script to your ",(0,a.yg)("inlineCode",{parentName:"p"},"package.json")," file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  "scripts": {\n    "codegen": "graphql-codegen --config ./graphql.config.ts"\n  }\n}\n')),(0,a.yg)("p",null,"Now you can run the following command to generate your types."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run codegen\n")),(0,a.yg)("p",null,"It will generate the following files:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"src/graphql/schema.types.ts"),": This file contains the types for your schema."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"src/graphql/types.ts"),": This file contains the types for your queries and mutations."))),(0,a.yg)("h3",{id:"usage-with-graphql-tag"},"Usage with ",(0,a.yg)("inlineCode",{parentName:"h3"},"graphql-tag")),(0,a.yg)(c,{id:"usage-with-graphql-tag",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql-tag"},(0,a.yg)("inlineCode",{parentName:"a"},"graphql-tag"))," to write your queries and mutations."),(0,a.yg)("p",null,"Refine hooks' ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," object has optional ",(0,a.yg)("inlineCode",{parentName:"p"},"gqlQuery")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"gqlMutation")," properties, you can use them to write your queries and mutations."),(0,a.yg)("p",null,"As a best-practice, we suggest writing your queries/mutations in a separate file, next to the component that uses it."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/queries.ts"',title:'"src/pages/posts/queries.ts"'},'import gql from "graphql-tag";\n\nexport const POSTS_LIST_QUERY = gql`\n  query PostsList(\n    $offset: Int!\n    $limit: Int!\n    $order_by: [posts_order_by!]\n    $where: posts_bool_exp\n  ) {\n    posts(offset: $offset, limit: $limit, order_by: $order_by, where: $where) {\n      id\n      title\n      content\n      created_at\n      category {\n        id\n        title\n      }\n    }\n    posts_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n`;\n\nexport const POST_EDIT_MUTATION = gql`\n  mutation PostEdit($id: uuid!, $object: posts_set_input!) {\n    update_posts_by_pk(pk_columns: { id: $id }, _set: $object) {\n      id\n      title\n      content\n      category_id\n      category {\n        id\n        title\n      }\n    }\n  }\n`;\n')),(0,a.yg)("p",null,"Once you write your query, you can generate types for it with ",(0,a.yg)("inlineCode",{parentName:"p"},"GraphQL Code Generator"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm run codegen\n")),(0,a.yg)("admonition",{title:"Good to know",type:"simple"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/hasura")," also exports 3 utility types:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"GetFields: Get fields from your non-list queries and mutations."),(0,a.yg)("li",{parentName:"ul"},"GetFieldsFromList: Get fields from your offset-paginated list queries."),(0,a.yg)("li",{parentName:"ul"},"GetVariables: Get variables from your queries and mutations.")),(0,a.yg)("p",{parentName:"admonition"},"You can use these types to extract the type of selected fields of your queries/mutations."),(0,a.yg)("p",{parentName:"admonition"},"See the ",(0,a.yg)("a",{parentName:"p",href:"#utility-types"},"Utility Types")," section for more information.")),(0,a.yg)("p",null,"And then you can use it with hooks:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useList, useTable, useForm } from "@refinedev/core";\nimport { GetFields, GetFieldsFromList, GetVariables } from "@refinedev/hasura";\n\nimport { PostsListQuery, PostEditMutation } from "src/graphql/types";\nimport { POSTS_LIST_QUERY, POST_EDIT_MUTATION } from "./queries";\n\nconst { data, isLoading } = useList<GetFieldsFromList<PostsListQuery>>({\n  meta: { gqlQuery: POSTS_LIST_QUERY },\n});\n\nconst { tableProps } = useTable<GetFieldsFromList<PostsListQuery>>({\n  meta: { gqlQuery: POSTS_LIST_QUERY },\n});\n\nconst { formProps } = useForm<\n  GetFields<PostEditMutation>,\n  HttpError,\n  GetVariables<PostEditVariables>\n>({\n  meta: { gqlMutation: POST_EDIT_MUTATION },\n});\n')),(0,a.yg)("p",null,"On initial render, useForm hook, will make ",(0,a.yg)("inlineCode",{parentName:"p"},"getOne")," query to your API to get the initial values of the form. Notice, we didn't pass a separate ",(0,a.yg)("inlineCode",{parentName:"p"},"gqlQuery")," field for this. It's because ",(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/hasura")," package will automatically detect the ",(0,a.yg)("inlineCode",{parentName:"p"},"gqlMutation"),", extract selected fields from it and make a ",(0,a.yg)("inlineCode",{parentName:"p"},"getOne")," query to your API."),(0,a.yg)("p",null,"If you want to customize the ",(0,a.yg)("inlineCode",{parentName:"p"},"getOne")," query, you can also pass a ",(0,a.yg)("inlineCode",{parentName:"p"},"gqlQuery")," field to the ",(0,a.yg)("inlineCode",{parentName:"p"},"meta")," object."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const POST_EDIT_QUERY = gql`\n  query PostEdit($id: uuid!) {\n    blogPost(id: $id) {\n      id\n      title\n      status\n      category {\n        id\n        title\n      }\n      categoryId\n      content\n    }\n  }\n`;\n\nconst { formProps } = useForm<GetFields<PostEditMutation>>({\n  meta: {\n    gqlMutation: POST_EDIT_MUTATION,\n    // highlight-next-line\n    gqlQuery: POST_EDIT_QUERY,\n  },\n});\n"))),(0,a.yg)("h3",{id:"utility-types"},"Utility Types"),(0,a.yg)(c,{id:"utility-types",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/hasura")," exports 3 utility types, ",(0,a.yg)("inlineCode",{parentName:"p"},"GetFields"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"GetFieldsFromList")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"GetVariables"),"."),(0,a.yg)("p",null,"These types can be used to extract selection set from your queries mutations.")),(0,a.yg)("h4",{id:"getfields"},"GetFields"),(0,a.yg)(c,{id:"getfields",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's say we have the following queries and mutations:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-graphql"},"query PostShow($id: uuid!) {\n  posts_by_pk(id: $id) {\n    id\n  }\n}\n\nmutation PostCreate($object: posts_insert_input!) {\n  insert_posts_one(object: $object) {\n    id\n  }\n}\n")),(0,a.yg)("p",null,"While you can use this type directly, it's not very useful, because you would need to extract fields manually, by passing your query/mutation name."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import { GetFields } from "@refinedev/hasura";\nimport { PostShowQuery, PostCreateMutation } from "src/graphql/types";\n\nPostShowQuery; // { posts_by_pk: { id: string }; }\n\nGetFields<PostShowQuery>; // { id: string; }\n\nPostCreateMutation; // { insert_posts_one: { id: string; } }\n\nGetFields<PostCreateMutation>; // { id: string; }\n'))),(0,a.yg)("h4",{id:"getfieldsfromlist"},"GetFieldsFromList"),(0,a.yg)(c,{id:"getfieldsfromlist",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's say you have the following query:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-graphql"},"query PostsList(\n  $offset: Int!\n  $limit: Int!\n  $order_by: [posts_order_by!]\n  $where: posts_bool_exp\n) {\n  posts(offset: $offset, limit: $limit, order_by: $order_by, where: $where) {\n    id\n    posts_aggregate(where: $where) {\n      aggregate {\n        count\n      }\n    }\n  }\n}\n")),(0,a.yg)("p",null,"This query will generate the following type:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'export type PostsListQuery = {\n  posts: Array<\n    Pick<\n      Types.Posts,\n      "id" | "title" | "content" | "category_id" | "created_at"\n    > & {\n      category?: Types.Maybe<Pick<Types.Categories, "id" | "title">>;\n    }\n  >;\n  posts_aggregate: {\n    aggregate?: Types.Maybe<Pick<Types.Posts_Aggregate_Fields, "count">>;\n  };\n};\n')),(0,a.yg)("p",null,"As you can see, the selectionSet is under ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"posts_aggregate"),", and it's not very useful, because data provider already returns normalized result."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GetFieldsFromList")," will convert it to:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import { GetFieldsFromList } from "@refinedev/hasura";\n\ntype PostFields = GetFieldsFromList<PostsListQuery>;\n\nPostFields; // { id: string, total: number }\n'))),(0,a.yg)("h4",{id:"getvariables"},"GetVariables"),(0,a.yg)(c,{id:"getvariables",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Let's say you have the following mutation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-graphql"},"mutation PostCreate($object: posts_insert_input!) {\n  insert_posts_one(object: $object) {\n    id\n  }\n}\n")),(0,a.yg)("p",null,"This mutation will generate the following type for variables:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"export type PostCreateVariables = Types.Exact<{\n  object: Types.Posts_Insert_Input;\n}>;\n")),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GetVariables")," will convert it to:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import { GetVariables } from "@refinedev/hasura";\n\ntype PostCreateVariables = GetVariables<PostCreateVariables>;\n\nPostCreateVariables; // { title: string; content: string; }\n'))),(0,a.yg)("h3",{id:"realtime"},"Realtime"),(0,a.yg)(c,{id:"realtime",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"@refinedev/hasura")," also provides a ",(0,a.yg)("inlineCode",{parentName:"p"},"liveProvider")," to enable realtime features of Refine. These features are powered by GraphQL subscriptions and uses ",(0,a.yg)("a",{parentName:"p",href:"https://the-guild.dev/graphql/ws"},(0,a.yg)("inlineCode",{parentName:"a"},"graphql-ws"))," to handle the connections."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\n// highlight-next-line\nimport dataProvider, {\n  GraphQLClient,\n  liveProvider,\n  graphqlWS,\n} from "@refinedev/hasura";\n\nconst client = new GraphQLClient("<API_URL>", {\n  headers: {\n    "x-hasura-role": "public",\n  },\n});\n// highlight-next-line\nconst wsClient = graphqlWS.createClient({\n  url: "<WS_URL>",\n});\n\nconst App = () => (\n  <Refine\n    dataProvider={dataProvider(client)}\n    // highlight-next-line\n    liveProvider={liveProvider(wsClient)}\n    options={{ liveMode: "auto" }}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(c,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(m,{path:"data-provider-hasura",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);