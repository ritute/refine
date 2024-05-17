"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99052],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},82001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});t(37953);var a=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",slug:"react-useref-hook-and-ref",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-26-react-useref/social2.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-useref-hook-and-ref",source:"@site/blog/2024-01-18-react-useref.md",title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",date:"2024-01-18T00:00:00.000Z",formattedDate:"January 18, 2024",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:11.17,hasTruncateMarker:!1,authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],frontMatter:{title:"Understanding the React useRef Hook",description:"We will explain the differences between useRef and React ref.",slug:"react-useref-hook-and-ref",authors:"joel_adewole",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-26-react-useref/social2.png",hide_table_of_contents:!1},prevItem:{title:"How to deploy Postgres on Kubernetes",permalink:"/blog/postgres-on-kubernetes"},nextItem:{title:"React useMemo Hook Guide with Examples",permalink:"/blog/react-usememo"},relatedPosts:[{title:"React Ecosystem in 2024 - Sustaining Popularity",description:"We'll look at the React ecosystem and the tools and libraries that have been created to support React.",permalink:"/blog/react-js-ecosystem-in-2024",formattedDate:"January 11, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:25.375,date:"2024-01-11T00:00:00.000Z"},{title:"Beginner's Guide to React useId Hook",description:"We'll explore the React useId hook, its use cases, and how it can improve our development process.",permalink:"/blog/react-useid",formattedDate:"May 14, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.41,date:"2024-05-14T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",description:"How to build CRUD admin panel with Material UI?",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:16.78,date:"2022-07-21T00:00:00.000Z"}],authorPosts:[{title:"A Quick Start Guide to React Suspense",description:"We will discuss how React Suspense works and common use cases",permalink:"/blog/react-suspense-guide",formattedDate:"February 5, 2024",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:8.635,date:"2024-02-05T00:00:00.000Z"},{title:"React 18 Upgrade Guide and New Features",description:"React 18 was released! Are you looking to upgrade to React 18?  Learn about the new features and changes in this comprehensive guide.",permalink:"/blog/react-18-upgrade-guide",formattedDate:"September 9, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.95,date:"2022-09-09T00:00:00.000Z"},{title:"Neumorphism with CSS - A new design trend",description:"Overview and examples for Neumorphic CSS implementations.",permalink:"/blog/neumorphic-css",formattedDate:"August 20, 2022",authors:[{name:"Joel Adewole",title:"Web Developer",url:"https://github.com/wolz-codelife",github:"https://github.com/wolz-codelife",linkedin:"https://linkedin.com/in/wolz-codelife",imageURL:"https://github.com/wolz-CODElife.png",key:"joel_adewole"}],readingTime:7.46,date:"2022-08-20T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is useRef hook?",id:"what-is-useref-hook",level:2},{value:"What is createRef function?",id:"what-is-createref-function",level:2},{value:"Using refs to Access DOM Elements in React",id:"using-refs-to-access-dom-elements-in-react",level:2},{value:"Differences between the useRef hook and the createRef function",id:"differences-between-the-useref-hook-and-the-createref-function",level:2},{value:"Best practices when working with refs",id:"best-practices-when-working-with-refs",level:2},{value:"Using the useRef hook in an Application",id:"using-the-useref-hook-in-an-application",level:2},{value:"When to use React useRef hook?",id:"when-to-use-react-useref-hook",level:2},{value:"Use-cases of refs in React",id:"use-cases-of-refs-in-react",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},f="wrapper";function h(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(f,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){o(e,n,t[n])}))}return e}({},d,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"This article was last updated on January 18, 2024 to add more usecases for React useRef hook and provide a more detailed explanation of the differences between useRef and React ref."))),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"In the early years of React, you could only declare React Components using ES6 classes. However, React class Components have their drawbacks. The use of ",(0,a.yg)("inlineCode",{parentName:"p"},"this")," and the life cycle methods in React class Components are complex and confusing to both beginners and advanced React users."),(0,a.yg)("p",null,"As a result, hooks were introduced in React version 16.8.0. With hooks, you can now use state and other features in React functional components without having to write ES6 classes."),(0,a.yg)("p",null,"React hooks only work with functional components. You can't use them with ES6 classes. In addition to the built-in hooks, you can also create custom hooks if necessary."),(0,a.yg)("p",null,"React has several built-in hooks such as ",(0,a.yg)("inlineCode",{parentName:"p"},"useState"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useReducer"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect"),". In this article, we will explore the React ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook. We will also discuss how to use refs to access DOM elements and highlight the differences between the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function and the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-useref-hook"},"What is useRef hook?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-createref-function"},"What is createRef function?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-refs-to-access-dom-elements-in-react"},"Using refs to Access DOM Elements in React")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#differences-between-the-useref-hook-and-the-createref-function"},"Differences between the useRef hook and the createRef function")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#best-practices-when-working-with-refs"},"Best practices when working with refs")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#using-the-useref-hook-in-an-application"},"Using the useRef hook in an Application")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#when-to-use-react-useref-hook"},"When to use React useRef hook?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#use-cases-of-refs-in-react"},"Use-cases of refs in React"))),(0,a.yg)("h2",{id:"what-is-useref-hook"},"What is useRef hook?"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook is one of the built-in hooks in React. You can use it to persist or preserve values between re-renders. The ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook takes an initial value of any type as argument and returns an object with a single ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"const ref = useRef(initialValue);\n")),(0,a.yg)("p",null,"React will set the ",(0,a.yg)("inlineCode",{parentName:"p"},"initialValue")," you pass to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook as the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property of the returned ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," object. As an example, if the ",(0,a.yg)("inlineCode",{parentName:"p"},"initialValue")," is the boolean value ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", then the ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," object returned by the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook will be ",(0,a.yg)("inlineCode",{parentName:"p"},"{ current: true }"),". If you don't pass an initial value, the ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property will be ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.yg)("p",null,"The returned ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," object is mutable. You can update and reference its value directly as in the example below. However, unlike react state, mutating the ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," object doesn't re-render the Component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRef } from "react";\n\nconst MyComponent = () => {\n  const ref = useRef(true);\n\n  const eventHandler = () => {\n    ref.current = !ref.current;\n  };\n\n  console.log(ref.current); // true\n\n  return <></>;\n};\n')),(0,a.yg)("p",null,"You should take note that:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The value of the ",(0,a.yg)("inlineCode",{parentName:"li"},"ref")," object remains the same between re-renders"),(0,a.yg)("li",{parentName:"ul"},"Updating the value of the ",(0,a.yg)("inlineCode",{parentName:"li"},"ref")," object doesn\u2019t trigger a re-render")),(0,a.yg)("h2",{id:"what-is-createref-function"},"What is createRef function?"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function is one of the built-in functions in React. You can use it to create refs in class Components. Unlike ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function doesn't take an argument. It returns a ref object with the ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property initially set to ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,a.yg)("p",null,"The ref object is a plain JavaScript object. Therefore, you can change its value from ",(0,a.yg)("inlineCode",{parentName:"p"},"null")," to any data type. Similar to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook, changing its value doesn't re-render a React component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'import { createRef } from "react";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.ref = createRef();\n    this.ref.current = true;\n  }\n\n  eventHandler = () => {\n    this.ref.current = !this.ref.current;\n  };\n\n  render() {\n    console.log(this.ref.current);\n    return <></>;\n  }\n}\n')),(0,a.yg)("p",null,"Unlike the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function always returns a new object. It's worth emphasizing that the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function is considered a legacy API. You can use it in legacy codebase that uses class components. For new code, use functional components and the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook."),(0,a.yg)("h2",{id:"using-refs-to-access-dom-elements-in-react"},"Using refs to Access DOM Elements in React"),(0,a.yg)("p",null,"One of the use cases of refs in React is to access DOM elements. React is declarative by design. However, sometimes you may need to access a DOM element imperatively."),(0,a.yg)("p",null,"You can use refs to access a rendered DOM element in your React Component instead of using methods such as ",(0,a.yg)("inlineCode",{parentName:"p"},"document.getElementById")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"document.querySelector"),"."),(0,a.yg)("p",null,"To access a DOM element, you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," attribute of the element's corresponding JSX as in the example below. The value of the",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," attribute should be the ref object returned by the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook in React functional components."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx="},'import { useRef } from "react";\n\nconst MyComponent = () => {\n  const inputRef = useRef(null);\n\n  return <input ref={inputRef} type="text" />;\n};\n')),(0,a.yg)("p",null,"In the code above, we created a ref object using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook and set it as the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," attribute. After constructing the DOM Node and the ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element is visible on the screen, React will set the DOM Node as the value of the ref object's ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property."),(0,a.yg)("p",null,"You can now access the ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element using the ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property of the ref object and manipulate it using any of the DOM methods like so:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRef } from "react";\n\nconst MyComponent = () => {\n  const inputRef = useRef(null);\n\n  useEffect(() => {\n    inputRef.current.focus();\n  }, []);\n\n  return <input ref={inputRef} type="text" />;\n};\n')),(0,a.yg)("p",null,"In the example above, we accessed the ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hook and invoked the ",(0,a.yg)("inlineCode",{parentName:"p"},"focus")," method. You can also access the DOM element from an event handler."),(0,a.yg)("p",null,"Similarly, if you remove the DOM node from the screen, React will set the value of the current property back to ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,a.yg)("p",null,"Because it's a hook, you can't use ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," in class components. As explained above, you use the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function to create refs in class components. In the code below, I've refactored the previous example to use ES6 class."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'import { createRef } from "react";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.inputRef = createRef();\n  }\n\n  componentDidMount() {\n    this.inputRef.current.focus();\n  }\n\n  render() {\n    return <input ref={this.inputRef} type="text" />;\n  }\n}\n')),(0,a.yg)("h2",{id:"differences-between-the-useref-hook-and-the-createref-function"},"Differences between the useRef hook and the createRef function"),(0,a.yg)("p",null,"As discussed in the previous sections, you can create refs using either the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook or the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function. However, there are differences between the two."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook is for creating refs in React functional components. On the other hand, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function is for creating refs in ES6 classes. The ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function is considered a legacy API. Only use it if you're maintaining legacy codebase that uses class components."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook takes an initial value as an argument and returns a ref object. React will set the ref object's ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property to the initial value. If you don't pass an initial value, the value of the ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property will initially be ",(0,a.yg)("inlineCode",{parentName:"p"},"undefined"),". On the other hand, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function doesn't take an argument. The ref object's ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property will initially be set to ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook will always return the same ref object when a functional component re-renders. On the other hand, the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function returns a different object on every render."),(0,a.yg)("h2",{id:"best-practices-when-working-with-refs"},"Best practices when working with refs"),(0,a.yg)("p",null,"As hinted above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook comes in handy for persisting values of any type between re-renders. Be sure to follow the best practices below while using it."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Avoid over-reliance on refs. You should use refs as an escape hatch to access DOM elements, browser APIs, and work with systems external to your React application. If you find yourself over-relying on refs, probably there is something you're doing wrong."),(0,a.yg)("li",{parentName:"ul"},"Do not access or mutate refs during render. Accessing a ref during render leads to unpredictable results.")),(0,a.yg)("p",null,"In addition to the best practices highlighted above, the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook is like any other React hook. You must follow all the rules of hooks while using it."),(0,a.yg)("p",null,"These rules include invoking ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," at the top level in React functional components. You shouldn't use hooks inside conditional statements, loops, and event handlers. However, you can mutate the ref object inside conditional statements, loops, and event handlers."),(0,a.yg)("h2",{id:"using-the-useref-hook-in-an-application"},"Using the useRef hook in an Application"),(0,a.yg)("p",null,"Since we understand how ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," works, let\u2019s learn how to use it in an actual application."),(0,a.yg)("p",null,"In this section, we shall implement a click-away event listener for a pop-up. We shall use ref to access the DOM element of the pop-up and listen for a click event originating outside the pop-up."),(0,a.yg)("p",null,"In your React application, create a folder and name it hooks. We will use it to declare custom hooks."),(0,a.yg)("p",null,"Inside the folder, create the ",(0,a.yg)("inlineCode",{parentName:"p"},"useClickAway.ts")," file. Add the following code into the file you have just created."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'import React, { useEffect } from "react";\n\nexport default function useClickAway(ref: any, callback: Function) {\n  useEffect(() => {\n    function handleClickAway(event: any) {\n      if (ref.current && !ref.current.contains(event.target)) {\n        callback();\n      }\n    }\n    document.addEventListener("mousedown", handleClickAway);\n    return () => {\n      document.removeEventListener("mousedown", handleClickAway);\n    };\n  }, [ref]);\n}\n')),(0,a.yg)("p",null,"In the code above, we created a custom hook that takes a ref object and a callback function as arguments. In the ",(0,a.yg)("inlineCode",{parentName:"p"},"useEffect")," hoo, we declared an event handler to listen for mouse clicks. In the event handler, we invoke the callback function if a mouse click is not on the element referenced by the ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property of the ref object."),(0,a.yg)("p",null,"Here is how we use the custom hook:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React, { useRef } from "react";\n\nexport default function Storefront() {\n  const targetElement = useRef(null);\n\n  const alertClickAway = () => {\n    alert("Clicked outside product 1");\n  };\n\n  useClickAway(targetElement, alertClickAway);\n\n  return (\n    <div className="gallery">\n      <div className="col" ref={targetElement}>\n        <img src="https://i.postimg.cc/G207QNV7/image.png" alt="Product 1" />\n        <p>iWatch Series 6</p>\n        <div className="btns">\n          <button>\n            <img\n              src="https://api.iconify.design/flat-color-icons:like.svg?color=%23888888"\n              alt="like"\n            />\n          </button>\n          <button>\n            <img\n              src="https://api.iconify.design/icon-park:buy.svg?color=%23888888"\n              alt="add"\n            />\n          </button>\n        </div>\n      </div>\n    </div>\n  );\n}\n')),(0,a.yg)("p",null,"In the code above, we we invoked the ",(0,a.yg)("inlineCode",{parentName:"p"},"useClickAway")," custom hook in the ",(0,a.yg)("inlineCode",{parentName:"p"},"Storefront")," component. We created a new ref object and assigned it to a ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," inside a gallery of products. We passed the ref object and a callback function to the ",(0,a.yg)("inlineCode",{parentName:"p"},"useClickAway")," custom hook. The callback function creates an alert when the user clicks outside the product item."),(0,a.yg)("p",null,"Now let\u2019s see the output:"),(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-26-react-useref/useref.gif",alt:"useRef"}),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"when-to-use-react-useref-hook"},"When to use React useRef hook?"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Accessing DOM Elements"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," is often used to directly access a DOM element in your JSX. This is useful for things like focusing on an input field upon a component mounting.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Storing Mutable Data"),": It allows you to store data that persists across renders but doesn't cause a re-render when updated, unlike ",(0,a.yg)("inlineCode",{parentName:"p"},"useState"),".")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Referencing Interval or Timeout IDs"),": Useful for keeping track of ",(0,a.yg)("inlineCode",{parentName:"p"},"setInterval")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"setTimeout")," IDs, so you can clear them (like with ",(0,a.yg)("inlineCode",{parentName:"p"},"clearInterval")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"clearTimeout"),") when needed.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Tracking Previous State or Props"),": It helps in keeping track of a component's previous state or props to compare with current values.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Implementing Custom Hooks"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," can be used within custom hooks to retain stateful values or references across renders without triggering re-renders."))),(0,a.yg)("h2",{id:"use-cases-of-refs-in-react"},"Use-cases of refs in React"),(0,a.yg)("p",null,"The following are some ref use-cases in React:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Interacting with input elements: You can use refs to access input elements and implement functionalities like focus and auto-completion."),(0,a.yg)("li",{parentName:"ul"},"Interacting with third-party UI libraries: You can use refs to interact with third-party UI libraries that might be difficult to access using standard DOM methods. For instance, if you use a third-party library to generate sliders, you can use ref to reference the sliders' DOM element without accessing the library's source code."),(0,a.yg)("li",{parentName:"ul"},"Media playback: You may also access media assets like images, audio, and videos using refs. For instance, auto-playing videos and lazy loading images when an element enters the viewport."),(0,a.yg)("li",{parentName:"ul"},"Complex animation triggering: Traditionally, CSS keyframes or timeouts are used to determine when to initiate animations. You can also use refs to observe DOM elements and determine when to start an animation.")),(0,a.yg)("p",null,"You shouldn't use refs in the following cases:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Declarative cases: As highlighted above, React is declarative by design. Do not use refs if you can write declarative code."),(0,a.yg)("li",{parentName:"ul"},"Elements affecting state: Mutating a ref doesn't re-render a component. Therefore, don't use refs when state changes need to trigger a re-render."),(0,a.yg)("li",{parentName:"ul"},"Accessing functional components: You can reference DOM elements and class components using refs because they have instances. On the other hand, functional components do not have instances. Therefore, the code below will not work.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useRef } from "react";\n\nconst FunctionalComponent = () => {\n  return <h1>Hello World</h1>;\n};\n\nconst MyComponent = () => {\n  const ref = useRef();\n\n  return <FunctionalComponent ref={ref} />;\n};\n')),(0,a.yg)("p",null,"Because the ",(0,a.yg)("inlineCode",{parentName:"p"},"FunctionalComponent")," component does not have an instance, the ref in the code above will not work. Instead, youcan convert the ",(0,a.yg)("inlineCode",{parentName:"p"},"FunctionalComponent")," into a class component or use ",(0,a.yg)("inlineCode",{parentName:"p"},"forwardRef"),"."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"In this article, we discussed how to create refs using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook and the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function. The ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook takes an initial value as argument and returns a ref object. You can update the ref object by modifying the ref object's ",(0,a.yg)("inlineCode",{parentName:"p"},"current")," property."),(0,a.yg)("p",null,"After creating a ref object using the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook, you can set it as the value of a ref attribute of an element you want to reference. The ref object's current property will reference the DOM element after rendering it on the screen. Removing the DOM element will set the current property to ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,a.yg)("p",null,"There are several uses of the ",(0,a.yg)("inlineCode",{parentName:"p"},"useRef")," hook and the ",(0,a.yg)("inlineCode",{parentName:"p"},"createRef")," function. However, you will primarily use them to persist arbitrary values between re-renders and for accessing DOM elements. You can explore more about refs and their use cases at the official ",(0,a.yg)("a",{parentName:"p",href:"https://react.dev/learn/referencing-values-with-refs"},"React documentation"),"."))}h.isMDXComponent=!0}}]);