"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[58176],{58860:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(37953);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>c,toc:()=>d});r(37953);var n=r(58860);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={id:"appwrite",title:"Appwrite","example-tags":["data-provider"]},l=void 0,c={unversionedId:"examples/data-provider/appwrite",id:"examples/data-provider/appwrite",title:"Appwrite",description:"Connect your Appwrite database with Refine Appwrite Data Provider and take advantage of the features that allow you to list, filter or create data in it. Refine also supports Realt-time updates from Appwrite Database! This example will show you how the Refine Appwrite Data Provider works and is used.",source:"@site/docs/examples/data-provider/appwrite.md",sourceDirName:"examples/data-provider",slug:"/examples/data-provider/appwrite",permalink:"/docs/examples/data-provider/appwrite",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/data-provider/appwrite.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716893190,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"appwrite",title:"Appwrite","example-tags":["data-provider"]},sidebar:"mainSidebar",previous:{title:"Airtable",permalink:"/docs/examples/data-provider/airtable"},next:{title:"Directus",permalink:"/docs/examples/data-provider/directus"}},s={},d=[],u=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var f;const m={toc:d},y="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(y,o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Connect your ",(0,n.yg)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," database with ",(0,n.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refine Appwrite Data Provider")," and take advantage of the features that allow you to list, filter or create data in it. Refine also supports Realt-time updates from Appwrite Database! This example will show you how the Refine Appwrite Data Provider works and is used."),(0,n.yg)("admonition",{title:"Demo Credentials",type:"note"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"Username"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"demo@refine.dev"),(0,n.yg)("br",{parentName:"p"}),"\n",(0,n.yg)("strong",{parentName:"p"},"Password"),": ",(0,n.yg)("inlineCode",{parentName:"p"},"demodemo"))),(0,n.yg)(u,{path:"data-provider-appwrite",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);