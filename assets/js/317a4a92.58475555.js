"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38851],{58860:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(37953);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,y=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>s});r(37953);var n=r(58860);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"remix-auth",title:"Authentication with remix-auth","example-tags":["remix","auth-provider"]},u=void 0,p={unversionedId:"examples/remix/remix-auth",id:"examples/remix/remix-auth",title:"Authentication with remix-auth",description:"Refine allows you to build your SSR supported web applications using Remix. With this example, you can see how to authorize with Google, Auth0 and Keycloak using remix-auth.",source:"@site/docs/examples/remix/oauth.md",sourceDirName:"examples/remix",slug:"/examples/remix/remix-auth",permalink:"/docs/examples/remix/remix-auth",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/remix/oauth.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1715930741,formattedLastUpdatedAt:"May 17, 2024",frontMatter:{id:"remix-auth",title:"Authentication with remix-auth","example-tags":["remix","auth-provider"]},sidebar:"mainSidebar",previous:{title:"Headless",permalink:"/docs/examples/remix/remix-headless"},next:{title:"Auth Provider",permalink:"/docs/authentication/auth-provider/"}},l={},s=[],m=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",e)});var f;const y={toc:s},d="wrapper";function b(e){var{components:t}=e,r=i(e,["components"]);return(0,n.yg)(d,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Refine allows you to build your ",(0,n.yg)("strong",{parentName:"p"},"SSR")," supported web applications using ",(0,n.yg)("a",{parentName:"p",href:"https://remix.run/"},"Remix"),". With this example, you can see how to authorize with Google, Auth0 and Keycloak using ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/sergiodxa/remix-auth"},"remix-auth"),"."),(0,n.yg)(m,{path:"with-remix-auth",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);