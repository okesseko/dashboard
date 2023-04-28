"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[9683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Custom page",l={unversionedId:"extensions/api/nav/custom-page",id:"extensions/api/nav/custom-page",title:"Custom page",description:"Defining a custom page for an Extension (virtualType)",source:"@site/docs/extensions/api/nav/custom-page.md",sourceDirName:"extensions/api/nav",slug:"/extensions/api/nav/custom-page",permalink:"/dashboard/extensions/api/nav/custom-page",draft:!1,tags:[],version:"current",lastUpdatedAt:1682687172,formattedLastUpdatedAt:"Apr 28, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Products",permalink:"/dashboard/extensions/api/nav/products"},next:{title:"Resource page",permalink:"/dashboard/extensions/api/nav/resource-page"}},p={},u=[{value:"Defining a custom page for an Extension (virtualType)",id:"defining-a-custom-page-for-an-extension-virtualtype",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-page"},"Custom page"),(0,r.kt)("h2",{id:"defining-a-custom-page-for-an-extension-virtualtype"},"Defining a custom page for an Extension (virtualType)"),(0,r.kt)("p",null,"As we've seen from the previous chapter, a developer can register a top-level product with the ",(0,r.kt)("inlineCode",{parentName:"p"},"product")," function. How about adding a custom page to your extension product? To do that, we can use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"virtualType")," coming from ",(0,r.kt)("inlineCode",{parentName:"p"},"$plugin.DSL"),". As an example usage of that method, one could do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { IPlugin } from '@shell/core/types';\n\n// this is the definition of a \"blank cluster\" for Rancher Dashboard\n// definition of a \"blank cluster\" in Rancher Dashboard\nconst BLANK_CLUSTER = '_';\n\n\nexport function init($plugin: IPlugin, store: any) {\n  const YOUR_PRODUCT_NAME = 'myProductName';\n  const CUSTOM_PAGE_NAME = 'page1';\n  \n  const { \n    product,\n    virtualType\n  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);\n\n  // registering a top-level product\n  product({\n    icon: 'gear',\n    inStore: 'management',\n    weight: 100,\n    to: { // this is the entry route for the Extension product, which is registered below\n      name: `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n\n  // => => => creating a custom page\n  virtualType({\n    labelKey: 'some.translation.key',\n    name:     CUSTOM_PAGE_NAME,\n    route:    {\n      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ CUSTOM_PAGE_NAME }`,\n      params: {\n        product: YOUR_PRODUCT_NAME,\n        cluster: BLANK_CLUSTER\n      }\n    }\n  });\n}\n")),(0,r.kt)("p",null,"With the route definition in the router (check the ",(0,r.kt)("a",{parentName:"p",href:"#routes-definition-for-an-extension-as-a-top-level-product"},"Extension Routing"),') chapter, you can define which Vue component will be loaded as a custom page. That will act as a "blank canvas" to render anything you want.'),(0,r.kt)("p",null,"The acceptable parameters for the ",(0,r.kt)("inlineCode",{parentName:"p"},"virtualType")," function are defined here:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Page name (should be unique)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"side-menu label for this page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"labelKey")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'Same as "label" but allows for translation. Will superseed "label"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},"[String"),(0,r.kt)("td",{parentName:"tr",align:null},"icon name (based on ",(0,r.kt)("a",{parentName:"td",href:"https://rancher.github.io/icons/"},"rancher icons"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"weight")),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"Side menu ordering (bigger number on top)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"route")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://v3.router.vuejs.org/api/#routes"},"Vue Router route config")),(0,r.kt)("td",{parentName:"tr",align:null},"Route for this custom page")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If no ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"labelKey")," is set, then the side-menu label will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field")))}c.isMDXComponent=!0}}]);