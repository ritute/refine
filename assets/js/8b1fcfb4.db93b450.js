"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48077],{58860:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var a=r(37953);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),b=n,m=d["".concat(p,".").concat(b)]||d[b]||u[b]||i;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},64242:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>d});r(37953);var a=r(58860);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={title:"Airtable",source:"https://github.com/refinedev/refine/tree/master/packages/airtable",swizzle:!0},p=void 0,c={unversionedId:"data/packages/airtable/index",id:"data/packages/airtable/index",title:"Airtable",description:"Refine provides a data provider for Airtable, a spreadsheet-database hybrid, to build CRUD applications.",source:"@site/docs/data/packages/airtable/index.md",sourceDirName:"data/packages/airtable",slug:"/data/packages/airtable/",permalink:"/docs/data/packages/airtable/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/airtable/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715930741,formattedLastUpdatedAt:"May 17, 2024",frontMatter:{title:"Airtable",source:"https://github.com/refinedev/refine/tree/master/packages/airtable",swizzle:!0},sidebar:"mainSidebar",previous:{title:"useApiUrl",permalink:"/docs/data/hooks/use-api-url/"},next:{title:"Appwrite",permalink:"/docs/data/packages/appwrite/"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",t)},b=u("DocThumbsUpDownFeedbackWidget"),m=u("InstallPackagesCommand"),f=u("CodeSandboxExample"),g={toc:d},y="wrapper";function v(e){var{components:t}=e,r=o(e,["components"]);return(0,a.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},g,r),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Refine provides a data provider for ",(0,a.yg)("a",{parentName:"p",href:"https://airtable.com/"},"Airtable"),", a spreadsheet-database hybrid, to build CRUD applications."),(0,a.yg)("admonition",{title:"Good to know",type:"simple"},(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"@refinedev/airtable")," uses API Tokens to authenticate requests. Personal access tokens of Airtable is currently not supported."),(0,a.yg)("li",{parentName:"ul"},"This integration uses ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/Airtable/airtable.js"},"Airtable.js")," to handle the requests."),(0,a.yg)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,a.yg)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."))),(0,a.yg)("h2",{id:"installation"},"Installation"),(0,a.yg)(b,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(m,{args:"@refinedev/airtable",mdxType:"InstallPackagesCommand"})),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(b,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"First, we'll obtain the ",(0,a.yg)("inlineCode",{parentName:"p"},"API_TOKEN")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"BASE_ID")," from our Airtable account. Then, we'll pass these values to the ",(0,a.yg)("inlineCode",{parentName:"p"},"dataProvider")," function."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider from "@refinedev/airtable";\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={dataProvider("<API_TOKEN>", "<BASE_ID>")}\n  >\n    {/* ... */}\n  </Refine>\n);\n'))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)(b,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)(f,{path:"data-provider-airtable",mdxType:"CodeSandboxExample"})))}v.isMDXComponent=!0}}]);