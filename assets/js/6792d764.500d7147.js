"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45550],{58860:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>b});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return t?r.createElement(b,c(c({ref:n},l),{},{components:t})):r.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>p});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={},s=void 0,u={unversionedId:"notification/hooks/use-notification/basic-usage-live-preview",id:"notification/hooks/use-notification/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/notification/hooks/use-notification/basic-usage-live-preview.md",sourceDirName:"notification/hooks/use-notification",slug:"/notification/hooks/use-notification/basic-usage-live-preview",permalink:"/docs/notification/hooks/use-notification/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/notification/hooks/use-notification/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1718174797,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{}},l={},p=[],f={toc:p},m="wrapper";function b(e){var{components:n}=e,t=c(e,["components"]);return(0,r.yg)(m,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=200px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"200px",hideCode:!0},'setInitialRoutes(["/"]);\n// visible-block-start\nimport { useNotification } from "@refinedev/core";\nimport { Button, Stack } from "@mui/material";\n\nconst ExamplePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n  return (\n    <Stack spacing={2} direction="row">\n      <Button\n        color="success"\n        variant="outlined"\n        size="small"\n        onClick={() =>\n          open?.({\n            type: "success",\n            message: "Success",\n            description: "Success description",\n          })\n        }\n      >\n        Success\n      </Button>\n      <Button\n        color="error"\n        variant="outlined"\n        size="small"\n        onClick={() =>\n          open?.({\n            type: "error",\n            message: "Error",\n            description: "Error description",\n          })\n        }\n      >\n        Error\n      </Button>\n\n      <Button\n        color="secondary"\n        variant="outlined"\n        size="small"\n        onClick={() =>\n          open?.({\n            type: "progress",\n            message: "Progress",\n            undoableTimeout: 5,\n            cancelMutation: () => {\n              alert("cancelMutation");\n            },\n          })\n        }\n      >\n        Progress\n      </Button>\n    </Stack>\n  );\n};\n// visible-block-end\nsetRefineProps({\n  DashboardPage: () => <ExamplePage />,\n  resources: [\n    {\n      name: "post",\n      create: () => {},\n    },\n  ],\n});\nrender(<RefineMuiDemo />);\n')))}b.isMDXComponent=!0}}]);