"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[31884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});n(67294);var o=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"An Intro to server components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",slug:"react-server-components",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-09-react-server-components/social.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/blog/react-server-components",source:"@site/blog/2023-07-09-react-server-components.md",title:"An Intro to server components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",date:"2023-07-09T00:00:00.000Z",formattedDate:"July 9, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:10.405,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"An Intro to server components in React",description:"We will discuss what React server components are as well as how to incorporate them into building applications.",slug:"react-server-components",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-07-09-react-server-components/social.png",hide_table_of_contents:!1},prevItem:{title:"A Detailed Guide on Docker Volumes",permalink:"/blog/docker-volumes"},nextItem:{title:"Beginner's Guide to React Query",permalink:"/blog/react-query-guide"},relatedPosts:[{title:"React Admin Panel Tutorial with Chakra UI and Strapi",description:"We'll build a React admin tutorial app with refine",permalink:"/blog/react-admin-tutorial",formattedDate:"March 3, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:27.17,date:"2023-03-03T00:00:00.000Z"},{title:"Error Boundaries in React -  Handling Errors Gracefully",description:"We'll see how to handle errors in React using Error Boundaries and how to use the react-error-boundary library to handle errors in React.",permalink:"/blog/react-error-boundaries",formattedDate:"November 9, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:11.66,date:"2023-11-09T00:00:00.000Z"},{title:"How to implement a date picker in React",description:"We\u2019ll show you how to implement a date picker using the \u2018react-datepicker\u2019 library and how to customize the functionality for your use case.",permalink:"/blog/react-date-picker",formattedDate:"May 3, 2023",authors:[{name:"Irakli Tchigladze",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"irakli_tchigladze"}],readingTime:12.005,date:"2023-05-03T00:00:00.000Z"}],authorPosts:[{title:"React Design Patterns",description:"We'll explore React design patterns and examine how they might improve the development of React applications.",permalink:"/blog/react-design-patterns",formattedDate:"October 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:10.365,date:"2023-10-17T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.775,date:"2023-01-17T00:00:00.000Z"},{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",permalink:"/blog/react-virtual-dom",formattedDate:"November 23, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:12.11,date:"2023-11-23T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"What are server components?",id:"what-are-server-components",level:2},{value:"Problem statement which introduced the idea of React server components",id:"problem-statement-which-introduced-the-idea-of-react-server-components",level:2},{value:"Difference between React server components and client components",id:"difference-between-react-server-components-and-client-components",level:2},{value:"Difference between React server components and server-side rendering(SSR) in React.",id:"difference-between-react-server-components-and-server-side-renderingssr-in-react",level:2},{value:"Case study of Server components.",id:"case-study-of-server-components",level:2},{value:"Using server components in a React application.",id:"using-server-components-in-a-react-application",level:3},{value:"Using server components in a Next application.",id:"using-server-components-in-a-next-application",level:3},{value:"Pros and Cons of React server components.",id:"pros-and-cons-of-react-server-components",level:2},{value:"Conclusion.",id:"conclusion",level:2}],m={toc:d};function u(e){var{components:t}=e,n=i(e,["components"]);return(0,o.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Recently, there has been a lot of hype and excitement about React server components. And this stems from the idea that React server components allow developers to outsource component-related tasks to the server. This eliminates the need to distribute bundled JavaScript and external API queries in order to hydrate the component, as well as eliminating scenarios that will lead to increased latency on the client application.\nIn this article, we'll discuss what React server components are as well as how to incorporate them into building applications."),(0,o.kt)("p",null,"Steps we'll follow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-are-server-components"},"What are server components?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#problem-statement-which-introduced-the-idea-of-react-server-components"},"Problem statement which introduced the idea of React server components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#difference-between-react-server-components-and-client-components"},"Difference between React server components and client components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#difference-between-react-server-components-and-server-side-renderingssr-in-react"},"Difference between React server components and server-side rendering(SSR) in React.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#case-study-of-server-components"},"Case study of Server components."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-server-components-in-a-react-application"},"Using server components in a React application.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-server-components-in-a-next-application"},"Using server components in a Next application.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#pros-and-cons-of-react-server-components"},"Pros and Cons of React server components."))),(0,o.kt)("h2",{id:"what-are-server-components"},"What are server components?"),(0,o.kt)("p",null,"The server component is a new feature introduced in React 18 and is the default in Next.js 13. A server component is essentially a component type that retrieves data from the server and renders it on the server. These contents are subsequently streamed into the client-side application in a format that the client-side application can render.\nServer components render in a custom format that has no standard protocol but is akin to a JSON format. The react DOM recognizes this format and renders it appropriately once it is recognized."),(0,o.kt)("h2",{id:"problem-statement-which-introduced-the-idea-of-react-server-components"},"Problem statement which introduced the idea of React server components"),(0,o.kt)("p",null,"We will create a scenario which will introduce the idea of server components."),(0,o.kt)("p",null,"We can structure the product page to be as follows: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const ProductPage = ({ productId })=> {\n    return (\n        <>\n            <ProductDetails productId={productId}>    \n                <ProductItem productId={productId} />\n                <MatchedItems productId={ productId } />\n            <ProductDetails>\n        </>\n    )\n}\n")),(0,o.kt)("p",null,"Now, there are various ways to implement a data-fetching solution for the API contents that will be rendered on this page. We could fetch the data to the components all in one go as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const ProductPage = ({ productId })=> {\n    const data = fetchContentsFromAPI();\n    return (\n        <>\n            <ProductDetails details={data.details} productId={productId}>    \n                <ProductItem item={data.product} productId={productId} />\n                <MatchedItems items={data.matchedItems} productId={productId} />\n            <ProductDetails>\n        </>\n    )\n}\n")),(0,o.kt)("p",null,"Using this method works fine and has its advantages like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It could be suitable for user experience as all the components are rendered on the client after the data is fetched.")),(0,o.kt)("p",null,"However, it may create some issues such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It creates a high level of coupling as it ties the contents of the data to the child components of the parent component. This could make these components difficult to maintain."),(0,o.kt)("li",{parentName:"ul"},"It also goes against the idea of single responsibility as the child components aren't individually responsible for their data, and are therefore dependent on the data from the parent component."),(0,o.kt)("li",{parentName:"ul"},"High load time as it fetches all the data for all the components at once.")),(0,o.kt)("p",null,"For the sake of single responsibility, we could  restructure the parent component to display the components as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const ProductDetails = ({productId, children}) => {\n    const details = fetchProductDetails(productId);\n    return (\n        <>\n            {{ children }}\n        </>\n    )\n}\n\nconst ProductItem = ({productId}) => {\n    const item = fetchProductItem(productId);\n    return (...)\n}\n\nconst MatchedItems = ({productId}) => {\n    const items = fetchMatchedItems(productId);\n    return (...)\n}\n\n\nconst ProductPage = ({ productId })=> {\n    return (\n        <>\n            <ProductDetails productId={productId}>    \n                <ProductItem productId={productId} />\n                <MatchedItems productId={productId} />\n            <ProductDetails>\n        </>\n    )\n}\n")),(0,o.kt)("p",null,"Using this method works fine and has its advantages like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Single responsibility: Each component is responsible for its own data.")),(0,o.kt)("p",null,"However, it may create some issues such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It may not be suitable for user experience as any of the child components can be rendered on the client before another based on the load time of their API calls thereby making users to see a section of the page before the other."),(0,o.kt)("li",{parentName:"ul"},"It also will create a scenario of a ",(0,o.kt)("a",{parentName:"li",href:"https://nischithbm.medium.com/web-performance-optimizing-the-network-waterfall-8a65df932df6"},"network waterfall")," because of the sequential fetching of data as ",(0,o.kt)("strong",{parentName:"li"},"ProductDetails")," component will be rendered first before the child components (",(0,o.kt)("strong",{parentName:"li"},"ProductItem"),", ",(0,o.kt)("strong",{parentName:"li"},"MatchedItems"),").")),(0,o.kt)("p",null,"These methods have their pros and cons, however, there is one limitation shared between them. The limitation is that both methods require making API calls to the server from the ",(0,o.kt)("strong",{parentName:"p"},"client")," which can create a situation of high ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/what-is/latency/"},"latency")," between the client and the server."),(0,o.kt)("p",null,"This limitation is what initially prompted the React team to introduce server components: components on the server. Because server components exist on the server, they can make API calls faster and can be rendered quickly than components rendered on the client side of the application."),(0,o.kt)("p",null,"While it was initially created to address the high latency limitation, new applications arose. Since the components resides on the server, they were permitted to have access to server infastructure which implies that they could connect to databases and make queries to them."),(0,o.kt)("h2",{id:"difference-between-react-server-components-and-client-components"},"Difference between React server components and client components"),(0,o.kt)("p",null,"A major distinction between server components and client components is that while server components render components on the server, client components render on the client."),(0,o.kt)("p",null,"Normally for a client-side react application, When a user request a web page from a server, the server responds by the page (Javascript file) to the browser. The browser downloads the data (Javascript file) and use that to construct the web page.\nFor server components, no Javascript sent to the client thus reducing JavaScript bundle sent to the client. client components on the other hand are sent to the client and adds to the bundle size of the application(a client component is a typical, traditional React component)."),(0,o.kt)("p",null,"Another distinction lies in their rendering environment which gives them different properties as explained below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A server component cannot use React hooks like ",(0,o.kt)("inlineCode",{parentName:"li"},"useState"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"useReducer"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect"),", etc. This is because a server component is rendered on the server and do not have access to hooks that can affect the ",(0,o.kt)("inlineCode",{parentName:"li"},"DOM"),"(Document Object Model) which only exists on the client. On the other hand, a client component is a normal React component which still have access to hooks."),(0,o.kt)("li",{parentName:"ul"},"A server component does not have access to browser APIs like ",(0,o.kt)("inlineCode",{parentName:"li"},"SessionStorage"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"localStorage")," etc. On the other hand, a client component is a normal React component which still have access to browser APIs."),(0,o.kt)("li",{parentName:"ul"},"A server component can use ",(0,o.kt)("inlineCode",{parentName:"li"},"async/await")," for server-only data sources such as databases, internal services, filesystems, and so on while client components cannot access server-only data sources directly.")),(0,o.kt)("h2",{id:"difference-between-react-server-components-and-server-side-renderingssr-in-react"},"Difference between React server components and server-side rendering(SSR) in React."),(0,o.kt)("p",null,"Server-side rendering (SSR) in the case of React in  refers to an application's ability to turn React components on the server into a fully rendered static HTML page for the client.\nReact Server Components, on the other hand, work with SSR via an intermediary structure(a protocol similar to that of a JSON format) to enable rendering without delivering any bundles to the client side."),(0,o.kt)("h2",{id:"case-study-of-server-components"},"Case study of Server components."),(0,o.kt)("p",null,"We will illustrate how we can use server components in both a traditional React application and a Next.js Application."),(0,o.kt)("h3",{id:"using-server-components-in-a-react-application"},"Using server components in a React application."),(0,o.kt)("p",null,"In a typical React application, a server component is like a regular React component."),(0,o.kt)("p",null,"Also note that in order to utilize ",(0,o.kt)("inlineCode",{parentName:"p"},"async/await")," in a typescript component with ",(0,o.kt)("inlineCode",{parentName:"p"},".tsx")," file, you will need to update your typescript version to 5.1.1. To read more on this visit ",(0,o.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-5-1/#decoupled-type-checking-between-jsx-elements-and-jsx-tag-types"},"here")),(0,o.kt)("p",null,"Below is an example of a server component,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="BlogPost.tsx"',title:'"BlogPost.tsx"'},"// Server Component\n\n const BlogPost = async({id, isEditing}) => {\n const post = await db.posts.get(id);\n \n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <section>{post.body}</section>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"A client component looks like a regular React component but there is an addition of a directive ",(0,o.kt)("inlineCode",{parentName:"p"},"'use client'")," on the component file. The  ",(0,o.kt)("inlineCode",{parentName:"p"},"'use client'")," directive is technically a convention that declares a boundary between a server and client component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="PostEditor.tsx"',title:'"PostEditor.tsx"'},'// A client component\n\n\'use client\'\n\nimport React, { useState } from "react";\nimport { v4 as uuidv4 } from \'uuid\';\n\nconst PostEditor = ({ blogPost }) => {\n  \n  const [post, setPost] = useState<any>({\n    id: uuidv4(),\n    title: blogPost.title,\n    content: blogPost.content,\n  })\n\n  const onChange = (type: any, value: any)=> {\n    switch(type){\n      case "title":\n        setPost({...post, title: value})\n        break;\n      case "content":\n        setPost({...post, content: value})\n        break;\n      default:\n        break\n    }\n  }\n  \n  const submitPost = ()=> {\n    // save blog post\n  };\n\n  return (\n    <div>\n      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">\n        <h1 className="my-4 text-center">Create Post</h1>\n\n        <form onSubmit={submitPost}>\n          <div className="mt-8">\n            <label className="text-white mb-2"> Title </label>\n            <input \n              type="text" placeholder="" \n              value={post.title}\n              required \n              onChange={(e)=> onChange("title", e.target.value)}\n            />\n          </div>\n\n          <div className="mt-8">\n            <label className="text-white mb-2">\n              Add your Blog content\n            </label>\n            <textarea\n              value={post.content}\n              required\n              onChange={(e)=> onChange("content", e.target.value)}\n            ></textarea>\n          </div>\n\n          <div className="flex justify-end mt-8">\n            <button\n              type="submit"\n              className="px-4 py-4 bg-[#0e9f64] c-white border-radius"\n            >\n              Create Post\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default PostEditor;\n')),(0,o.kt)("p",null,"There are certain rules to know when working with server and client components which are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server components cannot be imported into client components but client components can be imported into server components. We will illustrate how to import a client component to a server component using our previous example shown below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="BlogPost.tsx"',title:'"BlogPost.tsx"'},"// Server Component\n\nimport db from 'db'; \nimport NoteEditor from 'NoteEditor';\n\nasync function BlogPost({id, isEditing}) {\n  const post = await db.posts.get(id);\n \n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <section>{post.body}</section>\n      {isEditing \n        ? <PostEditor blogPost={post} />\n        : null\n      }\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"in the code above, we imported ",(0,o.kt)("inlineCode",{parentName:"p"},"PostEditor")," (a client component) to the server component."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A server component can be passed as a child prop to a client component when the client component is inside a server component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const ServerComponent1 = () => {\n    return (\n        <ClientComponent>\n            <ServerComponent2 />\n        </ClientComponent>\n    )\n}\n")),(0,o.kt)("h3",{id:"using-server-components-in-a-next-application"},"Using server components in a Next application."),(0,o.kt)("p",null,"A server component by default is a regular React component created in the newly introduced ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"Next 13"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/BlogPost.tsx"',title:'"app/BlogPost.tsx"'},"// Server Component\n\n const BlogPost = async({id, isEditing}) => {\n const post = await db.posts.get(id);\n \n  return (\n    <div>\n      <h1>{post.title}</h1>\n      <section>{post.body}</section>\n    </div>\n  );\n}\n\n\n")),(0,o.kt)("p",null,"A client component in ",(0,o.kt)("inlineCode",{parentName:"p"},"Next 13")," looks like a regular React component but there is an addition of a directive ",(0,o.kt)("inlineCode",{parentName:"p"},"'use client'")," to the component file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app/PostEditor.tsx"',title:'"app/PostEditor.tsx"'},'// A client component\n\n\'use client\'\n\nimport React, { useState } from "react";\nimport { v4 as uuidv4 } from \'uuid\';\n\nconst PostEditor = ({ blogPost }) => {\n  \n  const [post, setPost] = useState<any>({\n    id: uuidv4(),\n    title: blogPost.title,\n    content: blogPost.content,\n  })\n\n  const onChange = (type: any, value: any)=> {\n    switch(type){\n      case "title":\n        setPost({...post, title: value})\n        break;\n      case "content":\n        setPost({...post, content: value})\n        break;\n      default:\n        break\n    }\n  }\n  \n  const submitPost = ()=> {\n    // save blog post\n  };\n\n  return (\n    <div>\n      <div className="md:mx-auto px-6 md:px-0 mt-10 md:w-9/12">\n        <h1 className="my-4 text-center">Create Post</h1>\n\n        <form onSubmit={submitPost}>\n          <div className="mt-8">\n            <label className="text-white mb-2"> Title </label>\n            <input \n              type="text" placeholder="" \n              value={post.title}\n              required \n              onChange={(e)=> onChange("title", e.target.value)}\n            />\n          </div>\n\n          <div className="mt-8">\n            <label className="text-white mb-2">\n              Add your Blog content\n            </label>\n            <textarea\n              value={post.content}\n              required\n              onChange={(e)=> onChange("content", e.target.value)}\n            ></textarea>\n          </div>\n\n          <div className="flex justify-end mt-8">\n            <button\n              type="submit"\n              className="px-4 py-4 bg-[#0e9f64] c-white border-radius"\n            >\n              Create Post\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  );\n};\n\nexport default PostEditor;\n')),(0,o.kt)("h2",{id:"pros-and-cons-of-react-server-components"},"Pros and Cons of React server components."),(0,o.kt)("p",null,"We will go through the advantages of including server components to development as well as the disadvantages that comes with utilizing it in development."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pros:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bundle Reduction"),': Server components are "',(0,o.kt)("strong",{parentName:"li"},"zero bundle"),'" components as they do not add to the Javascript bundle size that will be rendered on the client.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access to server Infrastructure"),": With server components, there is seamless access in connecting to server infrastructure like Databases, filesystem, and many more."),(0,o.kt)("li",{parentName:"ul"},"Reduced Latency on the client as one can delegate API calls to server components which run on the server.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cons:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server components cannot access client-side features."),(0,o.kt)("li",{parentName:"ul"},"Its adoption may not be quick as server components may provide almost same benefits as a regular SSR(server-side rendered) application and many are already accustomed to SSR."),(0,o.kt)("li",{parentName:"ul"},"Since server components have access to server infrastructure, it may necessitate poor application design as it may encourage developers to evade the creation of APIs or even standalone backends to directly perform queries and connections to databases via server components.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion."),(0,o.kt)("p",null,"In this article, we covered what server components in React are as well as discussed its use and benefits. React server components enable us to combine the finest of both client-side and server-side rendered components in React applications in a new way. I hope this article convinces you to test out React server components today."))}u.isMDXComponent=!0}}]);