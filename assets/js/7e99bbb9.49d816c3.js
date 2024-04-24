"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[35282],{15680:(e,r,n)=>{n.d(r,{xA:()=>p,yg:()=>m});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(n),y=o,m=l["".concat(s,".").concat(y)]||l[y]||d[y]||a;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11833:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>l});n(96540);var t=n(15680);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})),e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={id:"useResource",title:"useResource"},s=void 0,u={unversionedId:"api-reference/core/hooks/resource/useResource",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResource",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns resource object, resourceName and query params id and action`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1713940140,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{id:"useResource",title:"useResource"},sidebar:"someSidebar",previous:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"},next:{title:"useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=e=>function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.yg)("div",r)},y=d("DocThumbsUpDownFeedbackWidget"),m=d("PropsTable"),g={toc:l},f="wrapper";function b(e){var{components:r}=e,n=i(e,["components"]);return(0,t.yg)(f,a(function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}({},g,n),{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns ",(0,t.yg)("inlineCode",{parentName:"p"},"resource")," object, ",(0,t.yg)("inlineCode",{parentName:"p"},"resourceName")," and query params ",(0,t.yg)("inlineCode",{parentName:"p"},"id")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"action"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,t.yg)("h2",{id:"properties"},"Properties"),(0,t.yg)("h3",{id:"resourcenameorroutename"},(0,t.yg)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,t.yg)(y,{id:"resourcenameorroutename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"It is used to get resource object by name or route name."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resource } = useResource({\n    resourceNameOrRouteName: "posts",\n});\n'))),(0,t.yg)("h2",{id:"return-values"},"Return Values"),(0,t.yg)("h3",{id:"resources"},(0,t.yg)("inlineCode",{parentName:"h3"},"resources")),(0,t.yg)(y,{id:"resources",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"An array of resources that you defined in ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,t.yg)("h3",{id:"resource"},(0,t.yg)("inlineCode",{parentName:"h3"},"resource")),(0,t.yg)(y,{id:"resource",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Resource object.")),(0,t.yg)("h3",{id:"resourcename"},(0,t.yg)("inlineCode",{parentName:"h3"},"resourceName")),(0,t.yg)(y,{id:"resourcename",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Resource name of resource object.")),(0,t.yg)("h3",{id:"id"},(0,t.yg)("inlineCode",{parentName:"h3"},"id")),(0,t.yg)(y,{id:"id",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Query param ",(0,t.yg)("inlineCode",{parentName:"p"},"id"),".")),(0,t.yg)("h3",{id:"action"},(0,t.yg)("inlineCode",{parentName:"h3"},"action")),(0,t.yg)(y,{id:"action",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("p",null,"Query param ",(0,t.yg)("inlineCode",{parentName:"p"},"action"),".")),(0,t.yg)("h2",{id:"api-reference"},"API Reference"),(0,t.yg)("h3",{id:"properties-1"},"Properties"),(0,t.yg)(y,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)(m,{module:"@pankod/refine-core/useResource",mdxType:"PropsTable"})),(0,t.yg)("h3",{id:"return-value"},"Return value"),(0,t.yg)(y,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("table",null,(0,t.yg)("thead",{parentName:"table"},(0,t.yg)("tr",{parentName:"thead"},(0,t.yg)("th",{parentName:"tr",align:null},"Description"),(0,t.yg)("th",{parentName:"tr",align:null},"Type"))),(0,t.yg)("tbody",{parentName:"table"},(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"resources"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#interfaces"},(0,t.yg)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"resource"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"#interfaces"},(0,t.yg)("inlineCode",{parentName:"a"},"IResourceItem")))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"resourceName"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"string"))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"id"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,t.yg)("inlineCode",{parentName:"a"},"BaseKey")))),(0,t.yg)("tr",{parentName:"tbody"},(0,t.yg)("td",{parentName:"tr",align:null},"action"),(0,t.yg)("td",{parentName:"tr",align:null},(0,t.yg)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,t.yg)("inlineCode",{parentName:"td"},'"clone"')))))),(0,t.yg)("h4",{id:"interfaces"},"Interfaces"),(0,t.yg)(y,{id:"interfaces",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-ts"},"type OptionsProps<TExtends = { [key: string]: any }> = TExtends & {\n    label?: string;\n    route?: string;\n    hide?: boolean;\n    auditLog?: {\n        permissions?: AuditLogPermissions[number][] | string[];\n    };\n};\n\ninterface IResourceComponentsProps<\n    TCrudData = any,\n    TOptionsPropsExtends = { [key: string]: any },\n> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n    options?: OptionsProps<TOptionsPropsExtends>;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    create?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    edit?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    show?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    options?: OptionsProps;\n    parentName?: string;\n}\n")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"canShow")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,t.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,t.yg)("inlineCode",{parentName:"p"},"resources")," property in ",(0,t.yg)("inlineCode",{parentName:"p"},"<Refine>"),"."))))}b.isMDXComponent=!0}}]);