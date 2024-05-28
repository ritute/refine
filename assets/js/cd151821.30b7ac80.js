"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76180],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>u});t(37953);var r=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={id:"url",title:"Url",swizzle:!0},s=void 0,p={unversionedId:"api-reference/mui/components/fields/url",id:"version-3.xx.xx/api-reference/mui/components/fields/url",title:"Url",description:"This field lets you embed a link. It uses Material UI ` and Link components. You can pass a URL in its value prop and you can show a text in its place by passing any children`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/url.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/url",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/url",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/url.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716893190,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"url",title:"Url",swizzle:!0},sidebar:"someSidebar",previous:{title:"Text",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/text"},next:{title:"Theme",permalink:"/docs/3.xx.xx/api-reference/mui/customization/mui-custom-theme"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},d=m("DocThumbsUpDownFeedbackWidget"),f=m("PropsTable"),y={toc:u},g="wrapper";function b(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This field lets you embed a link. It uses Material UI ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-typography/#main-content"},(0,r.yg)("inlineCode",{parentName:"a"},"<Typography>"))," and ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},(0,r.yg)("inlineCode",{parentName:"a"},"Link"))," components. You can pass a URL in its ",(0,r.yg)("inlineCode",{parentName:"p"},"value")," prop and you can show a text in its place by passing any ",(0,r.yg)("inlineCode",{parentName:"p"},"children"),"."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(d,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see how we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"<UrlField>")," with an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n  useDataGrid,\n  DataGrid,\n  GridColumns,\n  List,\n  // highlight-next-line\n  UrlField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 100, flex: 1 },\n  {\n    field: "image",\n    headerName: "Image URL",\n    renderCell: function render({ row }) {\n      // highlight-start\n      return <UrlField value={row.image[0].url} />;\n      // highlight-end\n    },\n    minWidth: 100,\n    flex: 1,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  image: IImage[];\n}\n\ninterface IImage {\n  url: string;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(d,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@pankod/refine-mui/UrlField","value-description":"URL for link to reference to",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-link/#main-content"},"Link"),"."))))}b.isMDXComponent=!0}}]);