"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74182],{58860:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>m});var n=a(37953);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=i,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||r;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},991:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});a(37953);var n=a(58860);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",slug:"react-crm-with-refine",authors:"necati",tags:["Refine","react"],is_featured:!0,image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-02-refine-crm-overview/social.jpg",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/react-crm-with-refine",source:"@site/blog/2023-10-02-refine-crm-overview.md",title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",date:"2023-10-02T00:00:00.000Z",formattedDate:"October 2, 2023",tags:[{label:"Refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"}],readingTime:5.085,hasTruncateMarker:!1,authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],frontMatter:{title:"Building a Complete React CRM App with Refine, Ant Design and GraphQL",description:"We'll explore the key features of our CRM app, the technologies we used.",slug:"react-crm-with-refine",authors:"necati",tags:["Refine","react"],is_featured:!0,image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-02-refine-crm-overview/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Docker Swarm Mode Guide",permalink:"/blog/docker-swarm"},nextItem:{title:"Building React admin panel with NextUI and Refine",permalink:"/blog/next-ui-react-admin-panel"},relatedPosts:[{title:"How to create React draggable components with react-dnd",description:"We'll be using the react-dnd library to create draggable components in React.",permalink:"/blog/react-draggable-components-with-react-dnd",formattedDate:"March 7, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:21.145,date:"2023-03-07T00:00:00.000Z"},{title:"Building a Complete React CRUD App with Airtable",description:"We will be building a Complete React CRUD application using Refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/react-crud-app-airtable",formattedDate:"January 17, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:29.64,date:"2023-01-17T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.395,date:"2022-03-01T00:00:00.000Z"}],authorPosts:[{title:"What are Low Code Development Platforms?",description:"We'll looking into low-code platforms, when and where they can be used, and limitations you might face during the development.",permalink:"/blog/low-code",formattedDate:"March 18, 2024",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:8.97,date:"2024-03-18T00:00:00.000Z"},{title:"Announcing the Release of Refine v4!",description:"This release includes several new features that are designed to enhance the developer experience.",permalink:"/blog/refine-v4-announcement",formattedDate:"March 13, 2023",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:7.575,date:"2023-03-13T00:00:00.000Z"},{title:"refine Joins the Hacktoberfest Fun",description:"Hactoberfest is back and we are excited to be a part of it. Join us in making open source contributions.",permalink:"/blog/hacktoberfest-refine",formattedDate:"October 4, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Growth at Refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:.88,date:"2022-10-04T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"Key Features of the CRM App",id:"key-features-of-the-crm-app",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Calendar Integration",id:"calendar-integration",level:3},{value:"Scrumboard-Project Kanban",id:"scrumboard-project-kanban",level:3},{value:"Sales Pipeline",id:"sales-pipeline",level:3},{value:"Companies",id:"companies",level:3},{value:"Contacts",id:"contacts",level:3},{value:"Quotes",id:"quotes",level:3},{value:"Administration",id:"administration",level:3},{value:"Authentication &amp; Authorization",id:"authentication--authorization",level:3},{value:"Technologies Used",id:"technologies-used",level:2},{value:"1. Refine",id:"1-refine",level:3},{value:"2. Ant Design",id:"2-ant-design",level:3},{value:"3. GraphQL",id:"3-graphql",level:3},{value:"Best Practices and Ecosystem Integration",id:"best-practices-and-ecosystem-integration",level:2},{value:"Where Can You Use This CRM As A Reference Template?",id:"where-can-you-use-this-crm-as-a-reference-template",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:u},d="wrapper";function m(e){var{components:t}=e,a=o(e,["components"]);return(0,n.yg)(d,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/CRM-app/crm-general.gif",alt:"Image description"})),(0,n.yg)("p",null,"I want to introduce our newest example app \u2013 a full-fledged React CRM (Customer Relationship Management) application built using Refine, Ant Design, and GraphQL."),(0,n.yg)("p",null,"\ud83d\udc49 ",(0,n.yg)("a",{parentName:"p",href:"https://example.crm.refine.dev/"},"Live Demo")),(0,n.yg)("p",null,"\ud83d\udc49 ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/app-crm"},"You can find the source code on GitHub here")),(0,n.yg)("p",null,"This example is open-source, which means anyone can freely utilize and customize the source code as they see fit. It's not just another application; it's a comprehensive solution that boasts all the features and functionalities required for an accurate enterprise-level application."),(0,n.yg)("p",null,"Moreover, this application serves as a guiding light for all developers. Whether you're a seasoned pro or just starting, our project is a valuable resource that can be used as a reference to better understand best practices and modern development techniques."),(0,n.yg)("p",null,"A minimal CRM app tutorial from scratch was published on ",(0,n.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6a3Dz8gwjdg"},"YouTube"),". You can follow the Refine to get notified for more real use case examples!"),(0,n.yg)("p",null,"Twitter: ",(0,n.yg)("a",{parentName:"p",href:"https://twitter.com/refine_dev"},"https://twitter.com/refine_dev"),"\nGitHub: ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"https://github.com/refinedev/refine")),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"This article briefly overviews the CRM application built using Refine, an open-source React framework designed for rapidly developing web applications."),(0,n.yg)("p",null,"We'll explore the key features of our CRM app, the technologies we used, and how you can adapt this template for various business needs."),(0,n.yg)("p",null,"Step we'll cover:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#key-features-of-the-crm-app"},"Key Features of the CRM App")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#technologies-used"},"Technologies Used")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#best-practices-and-ecosystem-integration"},"Best Practices and Ecosystem Integration")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"#where-can-you-use-this-crm-as-a-reference-template"},"Where Can You Use This CRM As A Reference Template?"))),(0,n.yg)("h2",{id:"key-features-of-the-crm-app"},"Key Features of the CRM App"),(0,n.yg)("p",null,"Our CRM application is feature-rich and comes with everything you need to manage customer relationships efficiently:"),(0,n.yg)("h3",{id:"dashboard"},"Dashboard"),(0,n.yg)("p",null,"The Dashboard provides an at-a-glance overview of your CRM activities. It displays key metrics, recent customer interactions, and upcoming events, offering valuable insights to help you make informed decisions."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/halx7sfl9ctke1fu3w35.png",alt:"Image"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"calendar-integration"},"Calendar Integration"),(0,n.yg)("p",null,"Effortlessly manage appointments, meetings, and important events with the integrated Calendar feature. Stay organized and ensure you never miss a crucial interaction with your customers."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m2v8ghazuheiznefwat9.png",alt:"Image description"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"scrumboard-project-kanban"},"Scrumboard-Project Kanban"),(0,n.yg)("p",null,"Our Scrumboard or Project Kanban page streamlines project management. Visualize project progress, manage tasks, and facilitate team collaboration with ease. Move tasks through customizable boards to keep your projects on track."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0hcll7tbqx3t71i6v7a9.png",alt:"Image description"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"sales-pipeline"},"Sales Pipeline"),(0,n.yg)("p",null,"Effectively manage your sales process from lead generation to deal closure. The Sales Pipeline provides a visual representation of your sales stages, helping your team prioritize leads and track conversions."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q5uoj722wasvw2fx8z49.png",alt:"Image description"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"companies"},"Companies"),(0,n.yg)("p",null,"The Companies page allows you to organize and categorize your business contacts. Maintain detailed profiles for each company, including contact information, communication history, and associated contacts."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gjlahcc1icfthu2n31ar.png",alt:"Imag"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"contacts"},"Contacts"),(0,n.yg)("p",null,"Manage individual contacts efficiently using the Contacts page. Keep track of customer interactions, schedule follow-ups, and access critical contact information quickly."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4c0ef7tv7nktax4gt3oz.png",alt:"Imag"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"quotes"},"Quotes"),(0,n.yg)("p",null,"Create, send, and manage quotes seamlessly with the Quotes feature. Generate professional quotes for your customers, track their status, and convert them into sales."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9rqj0pzgkrure7ov5mr9.png",alt:"Image"})),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"administration"},"Administration"),(0,n.yg)("p",null,"The Administration section empowers you to configure and customize your CRM application to suit your specific business needs. Manage user roles, access permissions, and system settings effortlessly."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m5deq6ceue79kloeuryz.png",alt:"Image description"})),(0,n.yg)("br",null),(0,n.yg)("h3",{id:"authentication--authorization"},"Authentication & Authorization"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m1r04i2h0cf1jegasbte.png",alt:"Image description"})),(0,n.yg)("p",null,"This example app is a comprehensive set of features that ensures you can streamline your customer interactions, project management, and sales processes, all within a single, user-friendly platform. Whether you're managing contacts, tracking sales, or overseeing projects, our CRM app provides the tools you need for success."),(0,n.yg)("h2",{id:"technologies-used"},"Technologies Used"),(0,n.yg)("p",null,"Our CRM app's modular structure and use of open-source tools make it adaptable to various business needs. So you can build all kinds of web apps like internal tools, admin panels, or dashboards on top of it."),(0,n.yg)("p",null,"To bring our CRM app to life, we leveraged several cutting-edge technologies:"),(0,n.yg)("h3",{id:"1-refine"},"1. Refine"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"Refine")," served as the backbone of our CRM application. It offers a wide range of tools and components for easily building data-intensive applications."),(0,n.yg)("p",null,"Refine's internal hooks and components simplify the development process and eliminate repetitive tasks by providing industry-standard solutions for crucial aspects of a project, including authentication, access control, routing, networking, state management, and i18n."),(0,n.yg)("h3",{id:"2-ant-design"},"2. Ant Design"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://ant.design/"},"Ant Design"),", a popular UI library, provided the sleek and responsive user interface that our CRM app needed. Its pre-built components saved us time and effort."),(0,n.yg)("p",null,"It's consistent and polished UI components ensured a professional and user-friendly interface. Refine has a built-in integration for Ant Design."),(0,n.yg)("h3",{id:"3-graphql"},"3. GraphQL"),(0,n.yg)("p",null,"We used ",(0,n.yg)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," for effective data retrieval and updating from our server. Additionally, we integrated ",(0,n.yg)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/data/subscriptions/"},"GraphQL Subscriptions")," to manage real-time modifications."),(0,n.yg)("p",null,"For instance, on the Project Kanban page, tasks get updated automatically when cards are dragged and dropped between sections."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://refine.ams3.cdn.digitaloceanspaces.com/CRM-app/real-time.gif",alt:"Image"})),(0,n.yg)("p",null,"GraphQL's efficient data-fetching capabilities made working with large datasets a breeze. It's flexibility allowed us to tailor our queries to our exact requirements."),(0,n.yg)("p",null,"Refine has built-in data provider support for GraphQL.You can set it up during the project creation phase."),(0,n.yg)("h2",{id:"best-practices-and-ecosystem-integration"},"Best Practices and Ecosystem Integration"),(0,n.yg)("p",null,"Throughout the development process, we adhered to best practices and incorporated elements from the broader ecosystem. This ensures our CRM app is not only functional but also scalable and maintainable."),(0,n.yg)("p",null,"The group responsible for the CRM example app is the core Refine framework team. Feel free to explore the best practices within the ecosystem!"),(0,n.yg)("h2",{id:"where-can-you-use-this-crm-as-a-reference-template"},"Where Can You Use This CRM As A Reference Template?"),(0,n.yg)("p",null,"Our CRM template isn't limited to just one use case. You can adapt it for various purposes, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"B2B Applications"),": Streamline customer interactions in a business-to-business context."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Internal Tools"),": Use it as an internal tool to manage employee or departmental tasks and interactions."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"All CRUD Applications"),": The template's versatility means it can serve as the foundation for creating all sorts of CRUD applications.")),(0,n.yg)("h2",{id:"conclusion"},"Conclusion"),(0,n.yg)("p",null,"In this article, we've introduced you to our CRM application built with refine. We've highlighted its key features, the technologies we used, and the advantages of our approach. With this CRM template, you have the power to tailor your customer relationship management system to meet your unique business needs. Whether you're running a B2B operation, need an efficient internal tool, or want a versatile CRUD application, our CRM template has you covered."))}m.isMDXComponent=!0}}]);