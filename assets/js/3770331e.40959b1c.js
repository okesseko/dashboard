"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(a),u=r,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7173:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},o="Machine Drivers",l={unversionedId:"code-base-works/machine-drivers",id:"code-base-works/machine-drivers",title:"Machine Drivers",description:"A machine driver consists of:",source:"@site/docs/code-base-works/machine-drivers.md",sourceDirName:"code-base-works",slug:"/code-base-works/machine-drivers",permalink:"/dashboard/code-base-works/machine-drivers",draft:!1,tags:[],version:"current",lastUpdatedAt:1693555371,formattedLastUpdatedAt:"Sep 1, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Nuxt Plugins",permalink:"/dashboard/code-base-works/nuxt-plugins"},next:{title:"Performance",permalink:"/dashboard/code-base-works/performance"}},s={},d=[{value:"Driver binary",id:"driver-binary",level:2},{value:"Cloud Credential",id:"cloud-credential",level:2},{value:"Machine Config",id:"machine-config",level:2},{value:"Model",id:"model",level:2},{value:"API Calls",id:"api-calls",level:2},{value:"Store",id:"store",level:2}],p={toc:d},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"machine-drivers"},"Machine Drivers"),(0,r.kt)("p",null,"A machine driver consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The actual driver run inside the server container.  This can be built-in to ",(0,r.kt)("inlineCode",{parentName:"li"},"rancher-machine")," or loaded as an external binary."),(0,r.kt)("li",{parentName:"ul"},"A component to create & edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"cloud-credential")," for the provider, which stores the user's auth information to talk to the provider API."),(0,r.kt)("li",{parentName:"ul"},"A component to create & edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"machine-config"),", which describes the size, location, and other options for a particular machine to be deployed to the provider."),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"model")," to override properties of a generic ",(0,r.kt)("inlineCode",{parentName:"li"},"machine-template")," object with details specific to this provider."),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"store")," to facilitate communication with the provider's API and caching of information retrieved from it.")),(0,r.kt)("h2",{id:"driver-binary"},"Driver binary"),(0,r.kt)("p",null,"To tell Rancher about a new driver, go to Cluster Management -> Drivers -> Node Drivers -> Add Node Driver.  Set the URL the binary should be downloaded from.  If the UI will need to communicate with an API to show options (e.g getting data from ",(0,r.kt)("inlineCode",{parentName:"p"},"api.mycloudprovider.com"),"), add it to the list of Whitelist Domains.  Click Create to save.  The driver is downloaded and loaded and becomes available in the UI using all the generic driver support.  This just lists all the fields that the driver says it has and makes some guesses about likely sounding names.  The user ultimately has to figure out which ones are required or important and set those.  To improve on that, continue reading."),(0,r.kt)("p",null,"For more advanced control, the machine driver custom resource supports several annotations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"publicCredentialFields"),(0,r.kt)("td",{parentName:"tr",align:null},'Fields that are considered "public" information and ok to display in cleartext for detail screens')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"privateCredentialFields"),(0,r.kt)("td",{parentName:"tr",align:null},"Fields that are private information that should be stored as a secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"optionalCredentialFields"),(0,r.kt)("td",{parentName:"tr",align:null},"Fields that are related to the credential, but are optional for the user to fill out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"passwordFields"),(0,r.kt)("td",{parentName:"tr",align:null},'Fields that should be displayed as type="password" bullets instead of cleartext')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaults"),(0,r.kt)("td",{parentName:"tr",align:null},"Default values to set which the user may override")))),(0,r.kt)("p",null,"Each has a value that is a comma-separated list of field names.  ",(0,r.kt)("inlineCode",{parentName:"p"},"defaults")," are comma-separated, then colon-separated for key and value (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"foo:bar,baz:42"),").  The annotations become information in API schemas, which the generic UI support uses to show better information."),(0,r.kt)("p",null,"The standard drivers included in Rancher and their options are defined ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/release/v2.6/pkg/data/management/machinedriver_data.go"},"here"),"."),(0,r.kt)("h2",{id:"cloud-credential"},"Cloud Credential"),(0,r.kt)("p",null,"Cloud Credentials store the username & password, or other similar information, needed to talk to a particular provider.  There is typically a 1-to-1 mapping of cloud credentials to drivers.  If one provider (e.g. Amazon) has both a ",(0,r.kt)("em",{parentName:"p"},"Machine")," driver for RKE (using EC2) and a ",(0,r.kt)("em",{parentName:"p"},"Cluster")," driver for Kontainer Engine (using EKS) then you can and should use a single shared type of credential (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"aws"),") for both."),(0,r.kt)("p",null,"The cloud credential component lives in the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-credential")," directory in the repo.  The file should be named the same as the driver, in all lowercase (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"cloud-credential/digitalocean.vue"),")."),(0,r.kt)("p",null,"If there is a reason to rename it or map multiple drivers to the same credential, configure that in ",(0,r.kt)("inlineCode",{parentName:"p"},"shell/store/plugins.js"),".  There is also other info in there about how guesses are taken on what each field is for and how it should be displayed.  These can be customized for your driver by importing and calling ",(0,r.kt)("inlineCode",{parentName:"p"},"configureCredential()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mapDriver()"),"."),(0,r.kt)("p",null,"Create a component which displays each field that is relevant to authentication and lets the user configure them.  Only the actual auth fields themselves, the rest of configuring the name, description, save buttons, etc is handled outside of the credential component."),(0,r.kt)("p",null,"Your component should emit a ",(0,r.kt)("inlineCode",{parentName:"p"},"validationChanged")," event every time a value changes.  It should also (but doesn't ",(0,r.kt)("em",{parentName:"p"},"have to")," implement a ",(0,r.kt)("inlineCode",{parentName:"p"},"test()")," method.  This may be asynchronous, and should make an API call or similar to see if the provided credentials work.  Return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if they're ok and ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," otherwise.  When provided, this is called before saving and the user won't be able to save until their input causes you return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"machine-config"},"Machine Config"),(0,r.kt)("p",null,"Similar to the Cloud Credential component, the Machine Config component should display just controls for the fields on the driver that are relevant to the configuration of the machine to be created.  The machine pool name, saving, etc is handled outside of your component.  You probably want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch()")," to load some info from the provider's API (e.g. list of regions or instance types)."),(0,r.kt)("p",null,"It should live in the top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"machine-config")," directory, again named the same as the driver and lowercase (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"machine-config/digitalocean.vue"),")."),(0,r.kt)("p",null,"The selected cloud credential ID is available as a ",(0,r.kt)("inlineCode",{parentName:"p"},"credentialId")," prop.  You will always know that ID, and can use it to make API calls (see ","[#api-calls]"," below), but ",(0,r.kt)("strong",{parentName:"p"},"must not")," rely on being able to actually retrieve the cloud credential model corresponding to it.  Users with lesser permissions may be able to edit a cluster, but not have permission to see the credential being used to manage it."),(0,r.kt)("h2",{id:"model"},"Model"),(0,r.kt)("p",null,"Each cluster has one or more Machine Templates, which specify to create a particular number of machines using a specified Machine Config + Cloud Credential.  Basic information about the template is shown later on detail screens, such as the machine size and location.  This is done by providing a model class for your driver's template and overriding methods."),(0,r.kt)("p",null,"Your model should be called ",(0,r.kt)("inlineCode",{parentName:"p"},"models/rke-machine.cattle.io.[your driver in lowercase]template.js")," (corresponding to the schema that shows up once the driver is installed).  It should extend the generic MachineTemplate and override methods as appropriate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import MachineTemplate from './rke-machine.cattle.io.machinetemplate';\n\nexport default class MyDriverMachineTemplate extends MachineTemplate {\n  get provider() {\n    return 'mydriver';\n  }\n\n  get providerLocation() {\n    return this.spec.template.spec.zone;\n  }\n\n  get providerSize() {\n    return this.spec.template.spec.instanceType;\n  }\n}\n")),(0,r.kt)("h2",{id:"api-calls"},"API Calls"),(0,r.kt)("p",null,"Rancher includes a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/release/v2.6/pkg/httpproxy/proxy.go"},"proxy")," that can be used to make requests to third-party domains (like a cloud provider's API) without requiring that the other end supports CORS or other browser shenanigans.  Send requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"/meta/proxy/example.com/whatever/path/you/want")," and the request will be made from the Rancher server and proxied back to you."),(0,r.kt)("p",null,"TLS and port 443 are assumed.  Add a port after the hostname to change the port (",(0,r.kt)("inlineCode",{parentName:"p"},"example.com:1234"),").  For plain HTTP, first stop and consider the chain of life decisions which have led you to this point. Then if you still think you need that, use ",(0,r.kt)("inlineCode",{parentName:"p"},"/meta/proxy/http:/example.com:1234")," (note one slash after ",(0,r.kt)("inlineCode",{parentName:"p"},"http:"),", not two).  The hostname must be included in the whitelist defined in global settings, or in the configuration for an active node driver.  If if isn't your request will be denied.  (This prevents a malicious (non-admin) user from abusing the Rancher server as an arbitrary HTTP proxy or reach internal IPs/names that the server can reach directly but the user can't from the outside.)"),(0,r.kt)("p",null,"The rest of the path and query string are sent to the target host as you'd expect."),(0,r.kt)("p",null,"Normal headers are copied from your request and sent to the target.  There are some exceptions for sensitive fields like the user's rancher cookies or saved basic auth creds which will not be copied.  If you send an ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-Cookie-Header"),", its value will be sent as the normal ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie")," to the target.  If you send ",(0,r.kt)("inlineCode",{parentName:"p"},"X-API-Auth-Header"),", that will be sent out as the normal ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization"),"."),(0,r.kt)("p",null,"But normally you want to make a request using a Cloud Credential as the authorization, without knowing what the secret values in that credential are.  You ask for this by sending an ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-CattleAuth-Header")," header.  The value of the header specifies what credential Id to use, and a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/release/v2.6/pkg/httpproxy/sign.go"},"signer")," which describes how that credential should be injected into the request.  Common options include ",(0,r.kt)("inlineCode",{parentName:"p"},"awsv4")," (Amazon's complicated HMAC signatures), ",(0,r.kt)("inlineCode",{parentName:"p"},"bearer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"basic"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"digest"),".  For example if you send ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-CattleAuth-Header: Basic credId=someCredentialId usernameField=user passwordField=pass"),", Rancher will retrieve the credential with id ",(0,r.kt)("inlineCode",{parentName:"p"},"someCredentialId"),", read the values of the ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pass")," fields from it and add the header ",(0,r.kt)("inlineCode",{parentName:"p"},'Authorization: Basic <base64(user + ":" + pass)>')," to the proxied request for you."),(0,r.kt)("h2",{id:"store"},"Store"),(0,r.kt)("p",null,"If you have several different API calls to make or expensive information that can be cached after it's retrieved once, consider making a ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," with getters and actions to handle making your API calls and managing the caching.  Most of the standard built-in drivers have these."),(0,r.kt)("p",null,"For more complicated providers (e.g. AWS) you can also consider importing their Javascript SDK and using their client to make calls.  But unless there is an extension point to manipulate the request before they send it, you'll probably have to monkey patch their client to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-CattleAuth-Header")," injected and the request sent through the proxy instead of direct to them.  The SDK should also be dynamically ",(0,r.kt)("inlineCode",{parentName:"p"},"import('\u2026')"),"ed as needed at runtime so it's not loaded all the time.  Regular ",(0,r.kt)("inlineCode",{parentName:"p"},"import \u2026 as \u2026;")," at the top of the file will become part of the basic app bundle js that's always loaded and has to be downloaded before the page can render.  ",(0,r.kt)("inlineCode",{parentName:"p"},"store/aws.js")," has examples of all of this."))}c.isMDXComponent=!0}}]);