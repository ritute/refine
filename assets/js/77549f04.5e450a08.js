"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94492],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},22080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"useTranslate"},l=void 0,c={unversionedId:"i18n/hooks/use-translate/index",id:"i18n/hooks/use-translate/index",title:"useTranslate",description:"If you need to translate the texts in your own components, Refine provides the useTranslate hook, It returns the translate method from i18nProvider under the hood.",source:"@site/docs/i18n/hooks/use-translate/index.md",sourceDirName:"i18n/hooks/use-translate",slug:"/i18n/hooks/use-translate/",permalink:"/docs/i18n/hooks/use-translate/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/i18n/hooks/use-translate/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1705923193,formattedLastUpdatedAt:"Jan 22, 2024",frontMatter:{title:"useTranslate"},sidebar:"mainSidebar",previous:{title:"useSetLocale",permalink:"/docs/i18n/hooks/use-set-locale/"},next:{title:"Next.js",permalink:"/docs/examples/i18n/i18n-nextjs"}},u={},p=[{value:"Usage",id:"usage",level:2}],f={toc:p};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you need to translate the texts in your own components, Refine provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"useTranslate")," hook, It returns the translate method from ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," under the hood."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This hook can only be used if ",(0,r.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"i18nProvider"))," is provided.")),(0,r.kt)("p",null,"You can use the features of your own i18n library for translation in your own components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useTranslate } from "@refinedev/core";\n\nexport const MyComponent = () => {\n  const translate = useTranslate();\n\n  return <button>{translate("my.translate.text")}</button>;\n};\n')))}d.isMDXComponent=!0}}]);