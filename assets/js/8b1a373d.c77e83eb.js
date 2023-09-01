"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[9823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},i="Machine Config",l={unversionedId:"extensions/usecases/node-driver/machine-config",id:"extensions/usecases/node-driver/machine-config",title:"Machine Config",description:"Similar to the Cloud Credential component, the Machine Config component should display the controls for the fields of the node driver that are relevant to the configuration of the machine to be created.  The machine pool name, saving, etc is handled outside of the component. You can use fetch() to load data from the provider's API (e.g. list of regions or instance types) as needed.",source:"@site/docs/extensions/usecases/node-driver/machine-config.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/machine-config",permalink:"/dashboard/extensions/usecases/node-driver/machine-config",draft:!1,tags:[],version:"current",lastUpdatedAt:1693555371,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Cloud Credential",permalink:"/dashboard/extensions/usecases/node-driver/cloud-credential"},next:{title:"Advanced",permalink:"/dashboard/extensions/usecases/node-driver/advanced"}},s={},c=[],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"machine-config"},"Machine Config"),(0,r.kt)("p",null,"Similar to the Cloud Credential component, the Machine Config component should display the controls for the fields of the node driver that are relevant to the configuration of the machine to be created.  The machine pool name, saving, etc is handled outside of the component. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," to load data from the provider's API (e.g. list of regions or instance types) as needed."),(0,r.kt)("p",null,"A machine config component for a given driver will be automatically registered when placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"machine-config")," folder and named with the name of the driver (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"openstack.vue"),")."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Your extension's entry file must call ",(0,r.kt)("inlineCode",{parentName:"p"},"importTypes")," for the automatic registration to work")),(0,r.kt)("p",null,"The selected cloud credential ID is available as a ",(0,r.kt)("inlineCode",{parentName:"p"},"credentialId")," prop.  You will always know that ID, and can use it to make API calls, but ",(0,r.kt)("strong",{parentName:"p"},"should not")," rely on being able to actually retrieve the cloud credential model corresponding to it.  Users with lesser permissions may be able to edit a cluster, but not have permission to see the credential being used to manage it."),(0,r.kt)("p",null,"Your component can emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"validationChanged")," event every time a value changes to report validation status of the machine configuration."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property of the component will be bound to the machine configuration resource. The fields available on that resource are determined by the corresponding node driver."),(0,r.kt)("p",null,"Other properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"busy")," - Boolean to indicate if the controls should be disabled while the UI is busy (typically during a save operation)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")," - String mode - can be ",(0,r.kt)("inlineCode",{parentName:"li"},"view"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"edit")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"create"),". Controls should be disabled when in view mode. Controls should be populated from existing values for the view and edit modes.")),(0,r.kt)("p",null,"Example Machine Config UI:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example Machine Config UI!",src:n(1263).Z,width:"1054",height:"671"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The UI provided by the custom component is shown in the blue box. The full Machine Pool Ui is shown to give context.")))}u.isMDXComponent=!0},1263:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/openstack-machine-config-4ca28a2bffe44849e4db14fa2e78d6fc.png"}}]);