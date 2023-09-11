"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[4054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const i={},o="About Node Drivers",l={unversionedId:"extensions/usecases/node-driver/about-drivers",id:"extensions/usecases/node-driver/about-drivers",title:"About Node Drivers",description:"Custom Node Drivers can be created and registered with Rancher to allow it to provision nodes onto which RKE1/RKE2 or K3s can be installed.",source:"@site/docs/extensions/usecases/node-driver/about-drivers.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/about-drivers",permalink:"/dashboard/extensions/usecases/node-driver/about-drivers",draft:!1,tags:[],version:"current",lastUpdatedAt:1694438580,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Custom Node Driver UI",permalink:"/dashboard/extensions/usecases/node-driver/overview"},next:{title:"Cloud Credential",permalink:"/dashboard/extensions/usecases/node-driver/cloud-credential"}},s={},d=[{value:"Registering a Node Driver",id:"registering-a-node-driver",level:2},{value:"Driver binary",id:"driver-binary",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"about-node-drivers"},"About Node Drivers"),(0,n.kt)("p",null,"Custom Node Drivers can be created and registered with Rancher to allow it to provision nodes onto which RKE1/RKE2 or K3s can be installed."),(0,n.kt)("h2",{id:"registering-a-node-driver"},"Registering a Node Driver"),(0,n.kt)("p",null,"To tell Rancher about a new driver, go to:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Management -> Drivers -> Node Drivers -> Add Node Driver")),(0,n.kt)("p",null,"You should:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the URL the binary should be downloaded from. "),(0,n.kt)("li",{parentName:"ul"},"If the UI will need to communicate with an API to show options (e.g getting data from ",(0,n.kt)("inlineCode",{parentName:"li"},"api.mycloudprovider.com"),"), add it to the list of Whitelist Domains."),(0,n.kt)("li",{parentName:"ul"},"Click Create to save.")),(0,n.kt)("p",null,"Rancher will download the Node Driver binary and once activated, it will become available in the UI using all the generic driver support.  "),(0,n.kt)("p",null,"This just lists all the fields that the driver says it has and makes some guesses about likely sounding names.  The user ultimately has to figure out which ones are required or important and set those."),(0,n.kt)("p",null,"To improve the experience creating a cluster using your custom Node Driver:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For RKE1, the legacy Ember UI is used and you can create an Ember extension and provide the URL to the Javascript package for it when you add the Node Driver to Rancher"),(0,n.kt)("li",{parentName:"ul"},"For RKE2 and K3s, you can create a Rancher Extension and add that to Rancher - this is the extension mechanism documented here")),(0,n.kt)("h2",{id:"driver-binary"},"Driver binary"),(0,n.kt)("p",null,"For more advanced control, the machine driver custom resource supports several annotations:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"publicCredentialFields"),(0,n.kt)("td",{parentName:"tr",align:null},'Fields that are considered "public" information and ok to display in cleartext for detail screens')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"privateCredentialFields"),(0,n.kt)("td",{parentName:"tr",align:null},"Fields that are private information that should be stored as a secret")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"optionalCredentialFields"),(0,n.kt)("td",{parentName:"tr",align:null},"Fields that are related to the credential, but are optional for the user to fill out")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"passwordFields"),(0,n.kt)("td",{parentName:"tr",align:null},'Fields that should be displayed as type="password" bullets instead of cleartext')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"defaults"),(0,n.kt)("td",{parentName:"tr",align:null},"Default values to set which the user may override")))),(0,n.kt)("p",null,"Each has a value that is a comma-separated list of field names.  ",(0,n.kt)("inlineCode",{parentName:"p"},"defaults")," are comma-separated, then colon-separated for key and value (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"foo:bar,baz:42"),").  The annotations become information in API schemas, which the generic UI support uses to show better information."),(0,n.kt)("p",null,"The standard drivers included in Rancher and their options are defined ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/release/v2.6/pkg/data/management/machinedriver_data.go"},"here"),"."))}p.isMDXComponent=!0}}]);