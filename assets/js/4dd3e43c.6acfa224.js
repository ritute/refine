"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96093],{58860:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"useModal"},p=void 0,s={unversionedId:"ui-integrations/ant-design/hooks/use-modal/index",id:"ui-integrations/ant-design/hooks/use-modal/index",title:"useModal",description:"The useModal hook helps you manage the Ant Design Modal component.",source:"@site/docs/ui-integrations/ant-design/hooks/use-modal/index.md",sourceDirName:"ui-integrations/ant-design/hooks/use-modal",slug:"/ui-integrations/ant-design/hooks/use-modal/",permalink:"/docs/ui-integrations/ant-design/hooks/use-modal/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/ui-integrations/ant-design/hooks/use-modal/index.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1718023189,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{title:"useModal"},sidebar:"mainSidebar",previous:{title:"useImport",permalink:"/docs/ui-integrations/ant-design/hooks/use-import/"},next:{title:"Authentication",permalink:"/docs/examples/authentication/antd"}},u={},d=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return Value",id:"return-value",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},g=c("DocThumbsUpDownFeedbackWidget"),m=c("PropsTable"),y={toc:d},h="wrapper";function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.yg)(h,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"useModal")," hook helps you manage the ",(0,r.yg)("a",{parentName:"p",href:"https://ant.design/components/modal"},"Ant Design Modal")," component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"const { show, close, modalProps } = useModal();\n")),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"close")," props to control the ",(0,r.yg)("inlineCode",{parentName:"p"},"modal")," visibility. You have to descturt ",(0,r.yg)("inlineCode",{parentName:"p"},"modalProps")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Modal/>")," component."),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(g,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Let's see an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/posts/list.tsx"',title:'"src/pages/posts/list.tsx"'},'// highlight-start\nimport { useModal } from "@refinedev/antd";\nimport { Modal, Button } from "antd";\n// highlight-end\n\nexport const PostList: React.FC = () => {\n  // highlight-next-line\n  const { show, modalProps } = useModal();\n\n  return (\n    <>\n      // highlight-start\n      <Button onClick={show}>Show Modal</Button>\n      <Modal {...modalProps}>\n        <p>Modal Content</p>\n      </Modal>\n      // highlight-end\n    </>\n  );\n};\n')),(0,r.yg)("br",null),(0,r.yg)("p",null,"Here, we show a button somewhere on the page and use ",(0,r.yg)("inlineCode",{parentName:"p"},"show")," on it's ",(0,r.yg)("inlineCode",{parentName:"p"},"onClick")," callback to trigger opening of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Modal>"),". When the user clicks on the button, the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Modal>")," appears.")),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(g,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(m,{module:"@refinedev/antd/useModal",mdxType:"PropsTable"})),(0,r.yg)("h3",{id:"return-value"},"Return Value"),(0,r.yg)(g,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"show"),(0,r.yg)("td",{parentName:"tr",align:null},"Returns the visibility state of the Modal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"() => void"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"close"),(0,r.yg)("td",{parentName:"tr",align:null},"A function that can open the modal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"() => void"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"modalProps"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify a function that can close the modal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"() => void")))))))}f.isMDXComponent=!0}}]);