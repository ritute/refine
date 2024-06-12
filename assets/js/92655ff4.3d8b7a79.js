"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52146],{58860:(e,r,t)=>{t.d(r,{xA:()=>m,yg:()=>y});var o=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,y=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return t?o.createElement(y,c(c({ref:r},m),{},{components:t})):o.createElement(y,c({ref:r},m))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92410:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>l});t(37953);var o=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"useForm",title:"useForm","example-tags":["form","headless","react-hook-form"]},s=void 0,p={unversionedId:"examples/form/react-hook-form/useForm",id:"version-3.xx.xx/examples/form/react-hook-form/useForm",title:"useForm",description:"refine allows you to use all the features of React Hook Form library with @pankod/refine-react-hook-form adapter. Using this package, you can create your own headless forms and use all the features provided by React Hook Form in your refine project in a compatible way. For more information, you can view the live example or review the source code.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/react-hook-form/useForm.md",sourceDirName:"examples/form/react-hook-form",slug:"/examples/form/react-hook-form/useForm",permalink:"/docs/3.xx.xx/examples/form/react-hook-form/useForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/react-hook-form/useForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1718174797,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"useForm",title:"useForm","example-tags":["form","headless","react-hook-form"]},sidebar:"someSidebar",previous:{title:"useStepsForm",permalink:"/docs/3.xx.xx/examples/form/mui/useStepsForm"},next:{title:"useModalForm",permalink:"/docs/3.xx.xx/examples/form/react-hook-form/useModalForm"}},m={},l=[],u=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const y={toc:l},d="wrapper";function b(e){var{components:r}=e,t=c(e,["components"]);return(0,o.yg)(d,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},y,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"refine")," allows you to use all the features of ",(0,o.yg)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form")," library with ",(0,o.yg)("inlineCode",{parentName:"p"},"@pankod/refine-react-hook-form")," adapter. Using this package, you can create your own ",(0,o.yg)("strong",{parentName:"p"},"headless")," forms and use all the features provided by React Hook Form in your ",(0,o.yg)("strong",{parentName:"p"},"refine")," project in a compatible way. For more information, you can view the live example or review the source code."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/react-hook-form/useForm"},"Refer to the useForm documentation for more information. \u2192")),(0,o.yg)(u,{path:"form-react-hook-form-use-form",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);