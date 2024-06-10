"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94832],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),l=p(t),m=o,g=l["".concat(s,".").concat(m)]||l[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d[l]="string"==typeof e?e:o,a[1]=d;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},18093:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>l});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const d={id:"edit-button",title:"Edit",swizzle:!0},s=void 0,p={unversionedId:"api-reference/antd/components/buttons/edit-button",id:"version-3.xx.xx/api-reference/antd/components/buttons/edit-button",title:"Edit",description:"` uses Ant Design's  component. It uses the edit method from useNavigation` under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/edit.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/edit-button",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/edit-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/buttons/edit.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718023189,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"edit-button",title:"Edit",swizzle:!0},sidebar:"someSidebar",previous:{title:"Delete",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/delete-button"},next:{title:"Export",permalink:"/docs/3.xx.xx/api-reference/antd/components/buttons/export-button"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>recordItemId</code>",id:"recorditemid",level:3},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"<code>accessControl</code>",id:"accesscontrol",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),g=u("PropsTable"),y={toc:l},f="wrapper";function h(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(f,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<EditButton>")," uses Ant Design's ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.yg)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method from ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," under the hood. It can be useful when redirecting the app to the edit page with the record id route of resource."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport {\n  Table,\n  List,\n  useTable,\n  // highlight-next-line\n  EditButton,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps } = useTable<IPost>();\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column dataIndex="id" title="ID" />\n        <Table.Column dataIndex="title" title="Title" width="100%" />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          key="actions"\n          render={(_, record) => (\n            // highlight-next-line\n            <EditButton size="small" recordItemId={record.id} />\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n}\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"recorditemid"},(0,r.yg)("inlineCode",{parentName:"h3"},"recordItemId")),(0,r.yg)(m,{id:"recorditemid",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"recordItemId")," is used to append the record id to the end of the route path."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n// visible-block-start\nimport { EditButton } from "@pankod/refine-antd";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      resourceNameOrRouteName="posts"\n      // highlight-next-line\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        edit: () => {\n          return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n        },\n      },\n    ]}\n    DashboardPage={MyEditComponent}\n  />,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.yg)("inlineCode",{parentName:"p"},"/posts/edit/1"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"<EditButton>")," component reads the id information from the route by default."))),(0,r.yg)("h3",{id:"resourcenameorroutename"},(0,r.yg)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,r.yg)(m,{id:"resourcenameorroutename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Redirection endpoint(",(0,r.yg)("inlineCode",{parentName:"p"},"resourceNameOrRouteName/edit"),") is defined by ",(0,r.yg)("inlineCode",{parentName:"p"},"resourceNameOrRouteName")," property. By default, ",(0,r.yg)("inlineCode",{parentName:"p"},"<EditButton>")," uses ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," property of the resource object as an endpoint to redirect after clicking."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@pankod/refine-antd";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      // highlight-next-line\n      resourceNameOrRouteName="categories"\n      recordItemId="123"\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        edit: () => {\n          return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n        },\n      },\n      {\n        name: "categories",\n        list: () => {\n          return <RefineAntd.List>List page here...</RefineAntd.List>;\n        },\n        edit: () => {\n          return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n        },\n      },\n    ]}\n    DashboardPage={MyEditComponent}\n  />,\n);\n')),(0,r.yg)("p",null,"Clicking the button will trigger the ",(0,r.yg)("inlineCode",{parentName:"p"},"edit")," method of ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},(0,r.yg)("inlineCode",{parentName:"a"},"useNavigation"))," and then redirect the app to ",(0,r.yg)("inlineCode",{parentName:"p"},"/categories/edit/2"),".")),(0,r.yg)("h3",{id:"hidetext"},(0,r.yg)("inlineCode",{parentName:"h3"},"hideText")),(0,r.yg)(m,{id:"hidetext",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"It is used to show and not show the text of the button. When ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=150px disableScroll",live:!0,disableScroll:!0,previewHeight:"150px"},'const { useRouterContext } = RefineCore;\n\n// visible-block-start\nimport { EditButton } from "@pankod/refine-antd";\n\nconst MyEditComponent = () => {\n  return (\n    <EditButton\n      recordItemId="123"\n      // highlight-next-line\n      hideText={true}\n    />\n  );\n};\n\n// visible-block-end\n\nrender(\n  <RefineAntdDemo\n    initialRoutes={["/"]}\n    resources={[\n      {\n        name: "posts",\n        list: MyEditComponent,\n        edit: () => {\n          return <RefineAntd.Edit>Edit page here...</RefineAntd.Edit>;\n        },\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h3",{id:"accesscontrol"},(0,r.yg)("inlineCode",{parentName:"h3"},"accessControl")),(0,r.yg)(m,{id:"accesscontrol",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"This prop can be used to skip access control check with its ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," property or to hide the button when the user does not have the permission to access the resource with ",(0,r.yg)("inlineCode",{parentName:"p"},"hideIfUnauthorized")," property. This is relevant only when an ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider"},(0,r.yg)("inlineCode",{parentName:"a"},"accessControlProvider"))," is provided to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,r.yg)("inlineCode",{parentName:"a"},"<Refine/>"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'import { EditButton } from "@pankod/refine-antd";\n\nexport const MyListComponent = () => {\n  return (\n    <EditButton\n      // highlight-start\n      accessControl={{\n        enabled: true,\n        hideIfUnauthorized: true,\n      }}\n      // highlight-end\n    />\n  );\n};\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties-1"},"Properties"),(0,r.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(g,{module:"@pankod/refine-antd/EditButton",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),"."))))}h.isMDXComponent=!0}}]);