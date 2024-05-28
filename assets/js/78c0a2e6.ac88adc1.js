"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21415],{58860:(e,t,a)=>{a.d(t,{xA:()=>l,yg:()=>y});var n=a(37953);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,y=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(y,i(i({ref:t},l),{},{components:a})):n.createElement(y,i({ref:t},l))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74597:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>N,frontMatter:()=>s,metadata:()=>d,toc:()=>u});a(37953);var n=a(58860);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={title:"useCustom",siderbar_label:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},p=void 0,d={unversionedId:"api-reference/core/hooks/data/useCustom/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useCustom/index",title:"useCustom",description:"useCustom is an extended version of TanStack Query's useQuery. It supports all the features of useQuery and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCustom/index.md",sourceDirName:"api-reference/core/hooks/data/useCustom",slug:"/api-reference/core/hooks/data/useCustom/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustom/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useCustom/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1716893190,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{title:"useCustom",siderbar_label:"useCustom",source:"packages/core/src/hooks/data/useCustom.ts"},sidebar:"someSidebar",previous:{title:"useCreateMany",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreateMany/"},next:{title:"useCustomMutation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"}},l={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>url</code> <PropTag required />",id:"url-",level:3},{value:"<code>method</code> <PropTag required />",id:"method-",level:3},{value:"<code>config.headers</code>",id:"configheaders",level:3},{value:"<code>config.query</code>",id:"configquery",level:3},{value:"<code>config.payload</code>",id:"configpayload",level:3},{value:"<code>config.sort</code>",id:"configsort",level:3},{value:"<code>config.filters</code>",id:"configfilters",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return value",id:"return-value",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",t)},m=c("DocThumbsUpDownFeedbackWidget"),y=c("PropTag"),g=c("PropsTable"),f={toc:u},h="wrapper";function N(e){var{components:t}=e,a=i(e,["components"]);return(0,n.yg)(h,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},f,a),{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"useCustom")," is an extended version of TanStack Query's ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.yg)("inlineCode",{parentName:"a"},"useQuery")),". It supports all the features of ",(0,n.yg)("inlineCode",{parentName:"p"},"useQuery")," and adds some extra features."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"It uses the ",(0,n.yg)("inlineCode",{parentName:"li"},"custom")," method as the ",(0,n.yg)("strong",{parentName:"li"},"query function")," from the ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,n.yg)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.yg)("inlineCode",{parentName:"li"},"<Refine>"),".")),(0,n.yg)("p",null,"It is useful when you want to send a custom query request using the TanStack Query advantages."),(0,n.yg)("admonition",{title:"attention",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("inlineCode",{parentName:"p"},"useCustom")," should ",(0,n.yg)("strong",{parentName:"p"},"not")," be used when creating, updating, or deleting a resource. To do these; ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCreate/"},"useCreate"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"},"useUpdate")," or ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useDelete/"},"useDelete")," hooks should be used instead."),(0,n.yg)("p",{parentName:"admonition"},"This is because ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustom"),", unlike other data hooks, does not ",(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/latest/docs/react/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either."),(0,n.yg)("p",{parentName:"admonition"},"If you need to custom mutation request, use the ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/hooks/data/useCustomMutation/"},"useCustomMutation")," hook.")),(0,n.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.yg)(m,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustom")," hook expects a ",(0,n.yg)("inlineCode",{parentName:"p"},"url")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"method")," properties. These parameters will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.yg)("p",null,"When properties are changed, the ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustom")," hook will trigger a new request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom, useApiUrl } from "@pankod/refine-core";\n\ninterface PostUniqueCheckResponse {\n  isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n  url: `${apiUrl}/posts-unique-check`,\n  method: "get",\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n'))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"url-"},(0,n.yg)("inlineCode",{parentName:"h3"},"url")," ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"url-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the endpoint of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  url: "www.example.com/api/get-products",\n});\n'))),(0,n.yg)("h3",{id:"method-"},(0,n.yg)("inlineCode",{parentName:"h3"},"method")," ",(0,n.yg)(y,{required:!0,mdxType:"PropTag"})),(0,n.yg)(m,{id:"method-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is usually used to specify the HTTP method of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  method: "get",\n});\n'))),(0,n.yg)("h3",{id:"configheaders"},(0,n.yg)("inlineCode",{parentName:"h3"},"config.headers")),(0,n.yg)(m,{id:"configheaders",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the headers of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    headers: {\n      "x-custom-header": "foo-bar",\n    },\n  },\n});\n'))),(0,n.yg)("h3",{id:"configquery"},(0,n.yg)("inlineCode",{parentName:"h3"},"config.query")),(0,n.yg)(m,{id:"configquery",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the query parameters of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    query: {\n      title: "Foo bar",\n    },\n  },\n});\n'))),(0,n.yg)("h3",{id:"configpayload"},(0,n.yg)("inlineCode",{parentName:"h3"},"config.payload")),(0,n.yg)(m,{id:"configpayload",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to specify the payload of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    payload: {\n      title: "Foo bar",\n    },\n  },\n});\n'))),(0,n.yg)("h3",{id:"configsort"},(0,n.yg)("inlineCode",{parentName:"h3"},"config.sort")),(0,n.yg)(m,{id:"configsort",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the sort query parameters of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    sort: [\n      {\n        field: "title",\n        order: "asc",\n      },\n    ],\n  },\n});\n'))),(0,n.yg)("h3",{id:"configfilters"},(0,n.yg)("inlineCode",{parentName:"h3"},"config.filters")),(0,n.yg)(m,{id:"configfilters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"It will be passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It can be used to send the filter query parameters of the request."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  config: {\n    filters: [\n      {\n        field: "title",\n        operator: "contains",\n        value: "Foo",\n      },\n    ],\n  },\n});\n'))),(0,n.yg)("h3",{id:"queryoptions"},(0,n.yg)("inlineCode",{parentName:"h3"},"queryOptions")),(0,n.yg)(m,{id:"queryoptions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,n.yg)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,n.yg)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},"useCustom({\n  queryOptions: {\n    retry: 3,\n    enabled: false,\n  },\n});\n"))),(0,n.yg)("h3",{id:"metadata"},(0,n.yg)("inlineCode",{parentName:"h3"},"metaData")),(0,n.yg)(m,{id:"metadata",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/general-concepts/#metadata"},(0,n.yg)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,n.yg)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,n.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,n.yg)("p",null,"In the following example, ",(0,n.yg)("inlineCode",{parentName:"p"},"metaData")," is passed to the ",(0,n.yg)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  metaData: {\n    foo: "bar",\n  },\n});\n\nconst myDataProvider = {\n  //...\n  custom: async ({\n    url,\n    method,\n    sort,\n    filters,\n    payload,\n    query,\n    headers,\n    metaData,\n  }) => {\n    const foo = metaData?.foo;\n\n    console.log(foo); // "bar"\n\n    //...\n  },\n  //...\n};\n'))),(0,n.yg)("h3",{id:"dataprovidername"},(0,n.yg)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.yg)(m,{id:"dataprovidername",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("p",null,"If there is more than one ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.yg)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  dataProviderName: "second-data-provider",\n});\n'))),(0,n.yg)("h3",{id:"successnotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.yg)(m,{id:"successnotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data is fetched successfully, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustom")," can call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n});\n'))),(0,n.yg)("h3",{id:"errornotification"},(0,n.yg)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.yg)(m,{id:"errornotification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,n.yg)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.yg)("p",null,"After data fetching is failed, ",(0,n.yg)("inlineCode",{parentName:"p"},"useCustom")," will call ",(0,n.yg)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.yg)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-tsx"},'useCustom({\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,n.yg)("h2",{id:"api"},"API"),(0,n.yg)("h3",{id:"properties-1"},"Properties"),(0,n.yg)(m,{id:"properties-1",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)(g,{module:"@pankod/refine-core/useCustom",mdxType:"PropsTable"})),(0,n.yg)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.yg)(m,{id:"type-parameters",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property"),(0,n.yg)("th",{parentName:"tr",align:null},"Desription"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TData"),(0,n.yg)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.yg)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TError"),(0,n.yg)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.yg)("inlineCode",{parentName:"a"},"HttpError")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TQuery"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for query params."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TQuery")),(0,n.yg)("td",{parentName:"tr",align:null},"unknown")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"TPayload"),(0,n.yg)("td",{parentName:"tr",align:null},"Values for params."),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"TPayload")),(0,n.yg)("td",{parentName:"tr",align:null},"unknown"))))),(0,n.yg)("h3",{id:"return-value"},"Return value"),(0,n.yg)(m,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Result of the TanStack Query's useQuery"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.yg)("inlineCode",{parentName:"a"},"QueryObserverResult<CustomResponse<TData>, TError>"))))))))}N.isMDXComponent=!0}}]);