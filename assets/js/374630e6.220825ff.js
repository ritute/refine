"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Create",swizzle:!0},p=void 0,c={unversionedId:"ui-integrations/chakra-ui/components/buttons/create-button/index",id:"ui-integrations/chakra-ui/components/buttons/create-button/index",title:"Create",description:"` uses Chakra UI's  component. It uses the create method from useNavigation` under the hood. It can be useful to redirect the app to the create page route of resource.",source:"@site/docs/ui-integrations/chakra-ui/components/buttons/create-button/index.md",sourceDirName:"ui-integrations/chakra-ui/components/buttons/create-button",slug:"/ui-integrations/chakra-ui/components/buttons/create-button/",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/create-button/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/chakra-ui/components/buttons/create-button/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1710860711,formattedLastUpdatedAt:"Mar 19, 2024",frontMatter:{title:"Create",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Clone",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/clone-button/"},next:{title:"Delete",permalink:"/docs/ui-integrations/chakra-ui/components/buttons/delete-button/"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"resource",id:"resource",level:3},{value:"meta",id:"meta",level:3},{value:"hideText",id:"hidetext",level:3},{value:"accessControl",id:"accesscontrol",level:3},{value:"<del>resourceNameOrRouteName</del> <PropTag deprecated />",id:"resourcenameorroutename-",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),h=d("PropTag"),f=d("PropsTable"),k={toc:u};function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: sharedRouterProvider } = LegacyRefineReactRouterV6;\nconst { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n  legacyRouterProvider: sharedRouterProvider,\n  dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n  Layout: RefineChakra.Layout,\n  Sider: () => null,\n  catchAll: <RefineChakra.ErrorComponent />,\n});\n\nconst Wrapper = ({ children }) => {\n  return (\n    <ChakraUI.ChakraProvider theme={RefineChakra.refineTheme}>\n      {children}\n    </ChakraUI.ChakraProvider>\n  );\n};\n\nconst CreatePage = () => {\n  const { list } = RefineCore.useNavigation();\n  const params = RefineCore.useRouterContext().useParams();\n\n  return (\n    <ChakraUI.VStack alignItems="flex-start">\n      <ChakraUI.Text as="i" color="gray.700" fontSize="sm">\n        URL Parameters:\n      </ChakraUI.Text>\n      <ChakraUI.Code>{JSON.stringify(params)}</ChakraUI.Code>\n\n      <ChakraUI.Button\n        size="sm"\n        onClick={() => list("posts")}\n        colorScheme="green"\n      >\n        Go back\n      </ChakraUI.Button>\n    </ChakraUI.VStack>\n  );\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CreateButton>")," uses Chakra UI's ",(0,r.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/button/usage"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful to redirect the app to the create page route of resource."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,r.kt)("strong",{parentName:"a"},"Refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=420px hideCode",live:!0,url:"http://localhost:3000",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport {\n  List,\n  // highlight-next-line\n  CreateButton,\n} from "@refinedev/chakra-ui";\nimport {\n  TableContainer,\n  Table,\n  Thead,\n  Tr,\n  Th,\n  Tbody,\n  Td,\n} from "@chakra-ui/react";\nimport { useTable } from "@refinedev/react-table";\nimport { ColumnDef, flexRender } from "@tanstack/react-table";\n\nconst PostList: React.FC = () => {\n  const columns = React.useMemo<ColumnDef<IPost>[]>(\n    () => [\n      {\n        id: "id",\n        header: "ID",\n        accessorKey: "id",\n      },\n      {\n        id: "title",\n        header: "Title",\n        accessorKey: "title",\n      },\n    ],\n    [],\n  );\n\n  const { getHeaderGroups, getRowModel } = useTable({\n    columns,\n  });\n\n  return (\n    // highlight-next-line\n    <List headerButtons={<CreateButton />}>\n      <TableContainer>\n        <Table variant="simple" whiteSpace="pre-line">\n          <Thead>\n            {getHeaderGroups().map((headerGroup) => (\n              <Tr key={headerGroup.id}>\n                {headerGroup.headers.map((header) => {\n                  return (\n                    <Th key={header.id}>\n                      {!header.isPlaceholder &&\n                        flexRender(\n                          header.column.columnDef.header,\n                          header.getContext(),\n                        )}\n                    </Th>\n                  );\n                })}\n              </Tr>\n            ))}\n          </Thead>\n          <Tbody>\n            {getRowModel().rows.map((row) => {\n              return (\n                <Tr key={row.id}>\n                  {row.getVisibleCells().map((cell) => {\n                    return (\n                      <Td key={cell.id}>\n                        {flexRender(\n                          cell.column.columnDef.cell,\n                          cell.getContext(),\n                        )}\n                      </Td>\n                    );\n                  })}\n                </Tr>\n              );\n            })}\n          </Tbody>\n        </Table>\n      </TableContainer>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      notificationProvider={RefineChakra.notificationProvider()}\n      resources={[\n        {\n          name: "posts",\n          list: PostList,\n          create: CreatePage,\n        },\n      ]}\n    />\n  );\n};\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"resource"},"resource"),(0,r.kt)(m,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is used to redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," action path of the given resource name. By default, the app redirects to the inferred resource's ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," action path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/chakra-ui";\n\nconst MyCreateComponent = () => {\n  return <CreateButton colorScheme="black" resource="categories" />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyCreateComponent,\n        },\n        {\n          name: "categories",\n          create: CreatePage,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n')),(0,r.kt)("p",null,"Clicking the button will trigger the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," action path of the resource, filling the necessary parameters in the route."),(0,r.kt)("p",null,"If you have multiple resources with the same name, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"identifier")," instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource. It will only be used as the main matching key for the resource, data provider methods will still work with the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the resource defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component#identifier"},(0,r.kt)("inlineCode",{parentName:"a"},"identifier")," of the ",(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>")," component documentation ","\u2192")))),(0,r.kt)("h3",{id:"meta"},"meta"),(0,r.kt)(m,{id:"meta",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"It is used to pass additional parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method of ",(0,r.kt)("a",{parentName:"p",href:"/docs/routing/hooks/use-navigation"},(0,r.kt)("inlineCode",{parentName:"a"},"useNavigation")),". By default, existing parameters in the route are used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method. You can pass additional parameters or override the existing ones using the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," prop."),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," action route is defined by the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/:authorId/create"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," prop can be used as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const MyComponent = () => {\n  return <CreateButton meta={{ authorId: "10" }} />;\n};\n'))),(0,r.kt)("h3",{id:"hidetext"},"hideText"),(0,r.kt)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hideText")," is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=200px",live:!0,url:"http://localhost:3000",previewHeight:"200px"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\n\n// visible-block-start\nimport { CreateButton } from "@refinedev/chakra-ui";\n\nconst MyCreateComponent = () => {\n  return <CreateButton colorScheme="black" hideText />;\n};\n// visible-block-end\n\nconst App = () => {\n  return (\n    <Refine\n      resources={[\n        {\n          name: "posts",\n          list: MyCreateComponent,\n          create: CreatePage,\n        },\n      ]}\n    />\n  );\n};\n\nrender(\n  <Wrapper>\n    <App />\n  </Wrapper>,\n);\n'))),(0,r.kt)("h3",{id:"accesscontrol"},"accessControl"),(0,r.kt)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControl")," prop can be used to skip the access control check with its ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.kt)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.kt)("a",{parentName:"p",href:"/docs/core/refine-component"},(0,r.kt)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { CreateButton } from "@refinedev/chakra-ui";\n\nexport const MyListComponent = () => {\n  return (\n    <CreateButton accessControl={{ enabled: true, hideIfUnauthorized: true }} />\n  );\n};\n'))),(0,r.kt)("h3",{id:"resourcenameorroutename-"},(0,r.kt)("del",{parentName:"h3"},"resourceNameOrRouteName")," ",(0,r.kt)(h,{deprecated:!0,mdxType:"PropTag"})),(0,r.kt)(m,{id:"resourcenameorroutename-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," prop instead.")),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.kt)(f,{module:"@refinedev/chakra-ui/CloneButton",mdxType:"PropsTable"})))}b.isMDXComponent=!0}}]);