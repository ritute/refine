"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[468],{58860:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(37953);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=o,u=d["".concat(p,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},44418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});a(37953);var n=a(58860);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",slug:"react-createportal",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-12-react-createportal/social.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/react-createportal",source:"@site/blog/2023-10-12-react-createportal.md",title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",date:"2023-10-12T00:00:00.000Z",formattedDate:"October 12, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:6.205,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",slug:"react-createportal",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-12-react-createportal/social.png",hide_table_of_contents:!1},prevItem:{title:"Mojo - A New Programming Language for AI",permalink:"/blog/mojo-programming-language"},nextItem:{title:"Using React Hot Toast as a Notification Provider for CRUD apps",permalink:"/blog/react-hot-toast"},relatedPosts:[{title:"Create charts using Recharts",description:"We'll explore how to create charts in a Refine project using Recharts.",permalink:"/blog/recharts",formattedDate:"February 23, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:20.43,date:"2024-02-23T00:00:00.000Z"},{title:"Using SVGs in React",description:"Let's talk about React SVG and how it makes the process of adding and handling images on modern websites more versatile and fun.",permalink:"/blog/react-svg",formattedDate:"November 17, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:13.3,date:"2023-11-17T00:00:00.000Z"},{title:"How to use Material UI Tooltip",description:"We'll discover the Material UI Tooltip component with examples",permalink:"/blog/material-ui-tooltip-component",formattedDate:"November 29, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:8.54,date:"2022-11-29T00:00:00.000Z"}],authorPosts:[{title:"CSS Box Shadow with 25 Examples",description:"We'll explore the CSS `box-shadow` property.",permalink:"/blog/box-shadow-css",formattedDate:"February 28, 2024",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:18.315,date:"2024-02-28T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.865,date:"2022-09-29T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a Refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:12.94,date:"2023-06-01T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Complete guide to the <code>createPortal</code> API",id:"complete-guide-to-the-createportal-api",level:2},{value:"Pros of the <code>createPortal</code> API",id:"pros-of-the-createportal-api",level:2},{value:"Rendering an element in another location in the DOM",id:"rendering-an-element-in-another-location-in-the-dom",level:3},{value:"Integrating third-party packages into your project",id:"integrating-third-party-packages-into-your-project",level:3},{value:"Cons of the <code>createPortal</code> API",id:"cons-of-the-createportal-api",level:2},{value:"CSS Inherited properties",id:"css-inherited-properties",level:3},{value:"Complex portals are difficult to maintain",id:"complex-portals-are-difficult-to-maintain",level:3},{value:"Accessibility issues",id:"accessibility-issues",level:3},{value:"Mismatch between location in the DOM and event bubbling",id:"mismatch-between-location-in-the-dom-and-event-bubbling",level:3},{value:"Use cases of the <code>createPortal</code> API",id:"use-cases-of-the-createportal-api",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:d},m="wrapper";function u(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(m,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM. You can use it to flexibly render the children of a React component in another location in the DOM. Though you can render a portal in another location, it still behaves like any other React child component."),(0,n.yg)("p",null,"This behavior of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API makes it easy to create UIs such as tooltips, toasts, modals, and popups. This article will take a deep dive into the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API. We will explore its advantages, disadvantages, and possible use cases."),(0,n.yg)("p",null,"Steps we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#complete-guide-to-the-createportal-api"},"Complete guide to the ",(0,n.yg)("inlineCode",{parentName:"a"},"createPortal")," API")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#pros-of-the-createportal-api"},"Pros of the ",(0,n.yg)("inlineCode",{parentName:"a"},"createPortal")," API"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#rendering-an-element-in-another-location-in-the-dom"},"Rendering an element in another location in the DOM")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#integrating-third-party-packages-into-your-project"},"Integrating third-party packages into your project")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#cons-of-the-createportal-api"},"Cons of the ",(0,n.yg)("inlineCode",{parentName:"a"},"createPortal")," API"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#css-inherited-properties"},"CSS Inherited properties")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#complex-portals-are-difficult-to-maintain"},"Complex portals are difficult to maintain")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#accessibility-issues"},"Accessibility issues")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#mismatch-between-location-in-the-dom-and-event-bubbling"},"Mismatch between location in the DOM and event bubbling")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#use-cases-of-the-createportal-api"},"Use cases of the ",(0,n.yg)("inlineCode",{parentName:"a"},"createPortal")," API"))),(0,n.yg)("h2",{id:"complete-guide-to-the-createportal-api"},"Complete guide to the ",(0,n.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,n.yg)("p",null,"As explained above, the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM API. Therefore, before using it, you need to import it from ",(0,n.yg)("inlineCode",{parentName:"p"},"react-dom")," like so:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n')),(0,n.yg)("p",null,"Ordinarily, a React component and its children have a parent-child relationship, and all the children are nested within their parent after rendering."),(0,n.yg)("p",null,"However, with the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API, a React component can render all or some of its children in another location in the DOM rather than the parent. The code below shows its function signature."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"createPortal(children, domNode, key?)\n")),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"children")," parameter of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," function must be a React component, JSX, React Fragment, string, number, or an array of these."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"domNode")," parameter is the DOM Node in which you want to render the ",(0,n.yg)("inlineCode",{parentName:"p"},"children"),". You can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"document.getElementById")," method or any of the element-lookup methods of the ",(0,n.yg)("inlineCode",{parentName:"p"},"document")," object."),(0,n.yg)("p",null,"The last parameter is an optional key. It is a unique string or number that will be used as the portal's key."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," function returns a React Node. Therefore, you can return it from a React component or render it inside another component's JSX, as in the example below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n\nexport function PortalDemo() {\n  return (\n    <div>\n      <p>This child is placed in the parent div.</p>\n      {createPortal(\n        <p>This child is placed in the document body.</p>,\n        document.body,\n      )}\n    </div>\n  );\n}\n')),(0,n.yg)("p",null,"When you render a component using the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API, only the rendering of the component in the DOM changes. Everything else remains the same. The events generated from the portal will bubble in the React Node hierarchy not in the DOM hierarchy."),(0,n.yg)("p",null,"Though a portal is rendered in a different location in the DOM, it is still a child of the parent React Component that renders it. It re-renders whenever the props or context passed to it changes, and its parent re-renders."),(0,n.yg)("h2",{id:"pros-of-the-createportal-api"},"Pros of the ",(0,n.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,n.yg)("p",null,"There are several benefits of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API. Below are some of these benefits."),(0,n.yg)("h3",{id:"rendering-an-element-in-another-location-in-the-dom"},"Rendering an element in another location in the DOM"),(0,n.yg)("p",null,"The biggest benefit of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API is that it gives you the flexibility to render an element outside its parent in another DOM element therefore breaking out of the usual parent-child relationship between components."),(0,n.yg)("p",null,"This helps you to easily build certain UIs, such as tooltips and modals which might otherwise be difficult without portals."),(0,n.yg)("h3",{id:"integrating-third-party-packages-into-your-project"},"Integrating third-party packages into your project"),(0,n.yg)("p",null,"More often than not, you may want to integrate third-party packages that do not use React in your React application. The ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API makes it easy because you can use it to render a React component anywhere in the DOM."),(0,n.yg)("h2",{id:"cons-of-the-createportal-api"},"Cons of the ",(0,n.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,n.yg)("p",null,"As hinted above, the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API comes in handy when you're looking to render a component in a different location in the DOM. It is without doubt a very useful feature of the ",(0,n.yg)("inlineCode",{parentName:"p"},"react-dom")," package and has very many useful applications."),(0,n.yg)("p",null,"However, the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API is not without drawbacks. Let's explore its disadvantages in this section."),(0,n.yg)("h3",{id:"css-inherited-properties"},"CSS Inherited properties"),(0,n.yg)("p",null,"Though a portal is still a child of its parent React component, it doesn't inherit CSS properties applied to its parent because it's rendered in a different location in the DOM. This may result in hard-to-find bugs, especially when dealing with complex portals."),(0,n.yg)("p",null,"In the example below, I'm applying ",(0,n.yg)("inlineCode",{parentName:"p"},"color: red")," to the parent ",(0,n.yg)("inlineCode",{parentName:"p"},"div"),". Ordinarily, the nested ",(0,n.yg)("inlineCode",{parentName:"p"},"p")," elements inherit the ",(0,n.yg)("inlineCode",{parentName:"p"},"color")," property from their parent. However, the ",(0,n.yg)("inlineCode",{parentName:"p"},"p")," element rendered using ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," won't because it is rendered in a different location in the DOM."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { createPortal } from "react-dom";\n\nfunction PortalDemo() {\n  return (\n    <div style={{ color: "red" }}>\n      <p>This will be red.</p>\n\n      {createPortal(\n        <p>This won\'t be red.</p>,\n        document.getElementById("portal"),\n      )}\n    </div>\n  );\n}\n')),(0,n.yg)("p",null,"Such behavior may result in bugs that may be difficult to trace, especially when dealing with complex applications."),(0,n.yg)("h3",{id:"complex-portals-are-difficult-to-maintain"},"Complex portals are difficult to maintain"),(0,n.yg)("p",null,"Portals may become difficult to maintain if you're dealing with complex interdependent portals. Similarly, it is difficult to reason about the components and the application because of the mismatch between the location of the portal in the DOM and where it is rendered in the React component."),(0,n.yg)("h3",{id:"accessibility-issues"},"Accessibility issues"),(0,n.yg)("p",null,"As we will discuss in the next subsection, the most common use-cases of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API are for creating toasts, modals, and popups. You will need to go above and beyond to make them accessible."),(0,n.yg)("h3",{id:"mismatch-between-location-in-the-dom-and-event-bubbling"},"Mismatch between location in the DOM and event bubbling"),(0,n.yg)("p",null,"When you render an element in the DOM using ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal"),", the events bubble up the React tree, not the DOM tree. The mismatch between the location of a portal in the DOM and event bubbling may make debugging a little more difficult in complex applications."),(0,n.yg)("h2",{id:"use-cases-of-the-createportal-api"},"Use cases of the ",(0,n.yg)("inlineCode",{parentName:"h2"},"createPortal")," API"),(0,n.yg)("p",null,"As hinted above, the most common use-case of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API is for building UIs such as modals, tooltips, popups, and toasts."),(0,n.yg)("p",null,"The example below shows how to use portals to implement a basic modal in React. You can also implement tooltips, popups, and toasts pretty much similarly."),(0,n.yg)("p",null,"The example below is a basic illustration of the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API without styling."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport { createPortal } from "react-dom";\n\nfunction Modal({ onClose }) {\n  return (\n    <div className="modal">\n      <p>This is a modal.</p>\n      <button onClick={onClose}>Close</button>\n    </div>\n  );\n}\n\nfunction App() {\n  const [showModal, setShowModal] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setShowModal(true)}>Open modal.</button>\n      {showModal &&\n        createPortal(\n          <Modal onClose={() => setShowModal(false)} />,\n          document.body,\n        )}\n    </div>\n  );\n}\n\nexport default App;\n')),(0,n.yg)("p",null,"Furthermore, it is also possible to use the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API to integrate React in a static page or a non-react application because it enables rendering React components anywhere in the DOM."),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"As explained above, the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API is part of the React DOM API. It is for rendering the children of a React component in another location in the DOM."),(0,n.yg)("p",null,"Though a portal is rendered in another location, it behaves like any React child component. It re-renders when its state, props, or context changes and when the parent component re-renders."),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," function takes the ",(0,n.yg)("inlineCode",{parentName:"p"},"children"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"domNode"),", and an optional ",(0,n.yg)("inlineCode",{parentName:"p"},"key")," as arguments and returns a React Node, which you can render in another React component or JSX."),(0,n.yg)("p",null,"You can use the ",(0,n.yg)("inlineCode",{parentName:"p"},"createPortal")," API to create toasts, modals, tooltips, and popups such as cookie permissions popups. However, make sure any portal you create is accessible."))}u.isMDXComponent=!0}}]);