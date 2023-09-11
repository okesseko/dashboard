"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[2761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,l(l({ref:t},h),{},{components:n})):a.createElement(g,l({ref:t},h))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Publishing an Extension",o={unversionedId:"extensions/publishing",id:"extensions/publishing",title:"Publishing an Extension",description:"There are currently two options for building and publishing a extensions:",source:"@site/docs/extensions/publishing.md",sourceDirName:"extensions",slug:"/extensions/publishing",permalink:"/dashboard/extensions/publishing",draft:!1,tags:[],version:"current",lastUpdatedAt:1694438580,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Using yarn link",permalink:"/dashboard/extensions/advanced/yarn-link"},next:{title:"Usecases/Examples",permalink:"/dashboard/extensions/usecases/overview"}},s={},p=[{value:"Publish Script Usage",id:"publish-script-usage",level:2},{value:"Manually Publishing the Extension Helm Charts",id:"manually-publishing-the-extension-helm-charts",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running the Publish Script",id:"running-the-publish-script",level:3},{value:"Manually Publishing an Extension Catalog Image",id:"manually-publishing-an-extension-catalog-image",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Running the Publish Script",id:"running-the-publish-script-1",level:3},{value:"Additional Release Configuration",id:"additional-release-configuration",level:2},{value:"Triggering a Github Workflow on Tagged Release",id:"triggering-a-github-workflow-on-tagged-release",level:3},{value:"Requirements",id:"requirements",level:4},{value:"Workflow Configuration",id:"workflow-configuration",level:4},{value:"Extension Charts Workflow Example",id:"extension-charts-workflow-example",level:4},{value:"Extension Catalog Image Workflow Example",id:"extension-catalog-image-workflow-example",level:4},{value:"Sequence of Events",id:"sequence-of-events",level:4}],h={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publishing-an-extension"},"Publishing an Extension"),(0,i.kt)("p",null,"There are currently two options for building and publishing a extensions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Building the Helm charts and necessary assets of an extension that can be committed into a Github or Helm repository."),(0,i.kt)("li",{parentName:"ol"},"Building an ",(0,i.kt)("a",{parentName:"li",href:"./advanced/air-gapped-environments"},"Extension Catalog Image")," that can be pushed or mirrored into a container registry.")),(0,i.kt)("p",null,"As discussed in the ",(0,i.kt)("a",{parentName:"p",href:"./extensions-getting-started#creating-a-release"},"Getting Started")," section, we have established a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/tree/master/shell/creators/pkg/files/.github/workflows"},"workflow")," using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/reusing-workflows"},"Github reusable workflows"),", that automatically handles the build and publication of both the Helm charts and ECI into the Extension's GitHub repository. However, this workflow can be omitted for a more hands-on approach to publishing Extensions."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: An explanation on the workflow files can be found in the ",(0,i.kt)("a",{parentName:"p",href:"#additional-release-configuration"},"Additional Release Configuration")," section.")),(0,i.kt)("h2",{id:"publish-script-usage"},"Publish Script Usage"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Usage"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"Usage: yarn publish-pkgs [<options>] [plugins]\n options:\n  -s <repo>    Specify destination GitHub repository (org/name) - defaults to the git origin\n  -b <branch>  Specify destination GitHub branch\n  -t <tag>     Specify the Github release tag to build when a release has been tagged and published\n  -f           Force building the chart even if it already exists\n  -c           Build as a container image rather than publishing to Github\n  -p           Push container images on build\n  -r <name>    Specify destination container registry for built images\n  -o <name>    Specify destination container registry organization for built images\n  -i <prefix>  Specify prefix for the built container image (default: 'ui-extension-')\n")),(0,i.kt)("h2",{id:"manually-publishing-the-extension-helm-charts"},"Manually Publishing the Extension Helm Charts"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Currently, we only support publishing Extension Helm charts into a ",(0,i.kt)("strong",{parentName:"p"},"public")," Github repository, if you inted to deploy an extension from a private repository/registry, we recommend utilizing the ",(0,i.kt)("a",{parentName:"p",href:"#manually-publishing-an-extension-catalog-image"},"Extension Catalog Image")," method.")),(0,i.kt)("p",null,"Building the Extension into Helm charts with the necessary assets can be accomplished with the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script declared in the extension's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),".\nRunning this script will bundle each extension package as a node.js app, create Helm charts with metadata needed by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/ui-plugin-operator"},(0,i.kt)("inlineCode",{parentName:"a"},"ui-plugin-operator")),", and a ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_repo_index/"},"Helm repo index")," to populate the Extension marketplace for installation."),(0,i.kt)("p",null,"After the Helm assets have been built, you will need to commit them into a publicly accessible Github repository. This repository will then need to be added into the Cluster Repositories list within a Rancher instance, that will then populate the Extension marketplace with the charts built from the previous step."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This has been tested on Linux and MacOS machines")),(0,i.kt)("p",null,"This method requires a few tools to be installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"nodejs")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"12.0.0")," < ",(0,i.kt)("inlineCode",{parentName:"li"},"17.0.0")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"yarn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikefarah/yq/#install"},"yq")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"4.0.0")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"3.0.0")," )")),(0,i.kt)("h3",{id:"running-the-publish-script"},"Running the Publish Script"),(0,i.kt)("p",null,"To start the build, run the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script with two options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-s")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<repository>")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the destination GitHub repository (org/name) - defaults to the git origin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-b")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<branch>")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies destination GitHub branch - defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"main"))))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'yarn publish-pkgs -s "my-organization/my-extension-repo" -b "production"\n')),(0,i.kt)("p",null,"After running the script, a number of directories will be created:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assets")," - Contains the packaged Extension charts for each package from ",(0,i.kt)("inlineCode",{parentName:"li"},"./charts/*")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"./assets/my-pkg/my-pkg-0.1.0.tgz"),"), used by the ",(0,i.kt)("inlineCode",{parentName:"li"},"index.yaml")," to obtain the Chart info."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"charts")," - The Extension Charts, includes the ",(0,i.kt)("inlineCode",{parentName:"li"},"Chart.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," among other files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extensions")," - Contains the minified javascript bundle for the node.js app, targeted by the ",(0,i.kt)("inlineCode",{parentName:"li"},".spec.plugin.endpoint")," which is used by the ",(0,i.kt)("inlineCode",{parentName:"li"},"ui-plugin-operator")," to load and cache the minified javascript."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.yaml")," - The Helm repo index file used by Helm to gather Chart information - this contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"urls")," property that targets the ",(0,i.kt)("inlineCode",{parentName:"li"},"assets/*")," for each package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tmp")," - Contains all of the directories and ",(0,i.kt)("inlineCode",{parentName:"li"},"index.yaml")," mentioned which allows for simple aggregation when pushing charts to a repository.")),(0,i.kt)("p",null,"These files will need to be pushed into a publically available Github repository, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"git add ./tmp/*\ngit commit -m 'Adding extension charts'\ngit push origin production\n")),(0,i.kt)("p",null,'Once the files are accessible on Github, add the repository within the Rancher "local" cluster - The charts will then be available on the Extensions page, under the "Available" tab.'),(0,i.kt)("h2",{id:"manually-publishing-an-extension-catalog-image"},"Manually Publishing an Extension Catalog Image"),(0,i.kt)("p",null,"Publishing an ECI into the registry of your choice can also be accomplished with the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script declared in the extension's ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". This script will build a Docker image for each extension package, as well as a Helm chart that can be used to deploy the images. Given the option, the script can automatically push the built images and chart into a specified registry."),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"Publishing an ECI has a few requirements, namely:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Extension needs to be bundled into the ECI"),(0,i.kt)("li",{parentName:"ul"},"A registry to house the ECI"),(0,i.kt)("li",{parentName:"ul"},"Access to this registry within the Cluster")),(0,i.kt)("p",null,"This method also requires a few tools to be installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.gnu.org/software/make/"},"make")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"go")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"nodejs")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"12.0.0")," < ",(0,i.kt)("inlineCode",{parentName:"li"},"17.0.0")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"yarn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mikefarah/yq/#install"},"yq")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"4.0.0")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," ( >= ",(0,i.kt)("inlineCode",{parentName:"li"},"3.0.0")," )")),(0,i.kt)("h3",{id:"running-the-publish-script-1"},"Running the Publish Script"),(0,i.kt)("p",null,"You can simply run the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script with three options:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Argument"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-c")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the container build")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-r")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<registry>")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the registry where the image will be housed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-o")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<organization>")),(0,i.kt)("td",{parentName:"tr",align:null},"specifies the organization namespace for the registry")))),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"yarn publish-pkgs -c -r <REGISTRY> -o <ORGANIZATION>\n")),(0,i.kt)("p",null,"Running any of the commands above will only build your images - in order to publish the images to your registry you must either push them manually or use the script with the `-p`` option. This will automatically push your images to the designated registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"yarn publish-pkgs -c -p -r <REGISTRY> -o <ORGANIZATION>\n")),(0,i.kt)("h2",{id:"additional-release-configuration"},"Additional Release Configuration"),(0,i.kt)("p",null,"Depending on your use case, there are multiple options on building and creating releases. When building an extension within a Github repository, you have the option of utilizing an action that triggers ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/dashboard/tree/master/shell/creators/pkg/files/.github/workflows"},"prebuilt workflows"),". When added to your extension, the ",(0,i.kt)("inlineCode",{parentName:"p"},"./github/workflows")," directory will contain the files: ",(0,i.kt)("inlineCode",{parentName:"p"},"build-extension-charts.yml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"build-extension-catalog.yml"),". These workflows accomplish two seperate actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build-extension-charts")," - Builds the Helm charts and necessary assets that are then published to the specified branch (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages"),").",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The versioning of these builds is determined by the Extension Package ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," property found in ",(0,i.kt)("inlineCode",{parentName:"li"},"./pkg/<package-name>/package.json")),(0,i.kt)("li",{parentName:"ul"},"Find the resuable workflow file ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/dashboard/blob/master/.github/workflows/build-extension-charts.yml"},"here")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build-extension-catalog")," - Builds and publishes the ",(0,i.kt)("a",{parentName:"li",href:"./advanced/air-gapped-environments"},"Extension Catalog Image")," (ECI) into the specified registry (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"ghcr.io"),"), for use with private repositories or air-gapped builds.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An ECI contains the Helm charts and assets within the image, and is determined by the main Extension ",(0,i.kt)("inlineCode",{parentName:"li"},"version")," property found in ",(0,i.kt)("inlineCode",{parentName:"li"},"./package.json")),(0,i.kt)("li",{parentName:"ul"},"Find the reusable workflow file ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/dashboard/blob/master/.github/workflows/build-extension-catalog.yml"},"here"))))),(0,i.kt)("p",null,"By default, both of these actions are triggered by pushing into the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch. This may not be your disired flow, and so you can modify the workflow file to fit your needs."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Addition configuration information on the workflows can be found in the ",(0,i.kt)("a",{parentName:"p",href:"/dashboard/extensions/advanced/workflow-configuration"},"Workflow Configuration")," section. ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: For more information on events that trigger workflows, follow the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"Github Documentation"),".")),(0,i.kt)("h3",{id:"triggering-a-github-workflow-on-tagged-release"},"Triggering a Github Workflow on Tagged Release"),(0,i.kt)("p",null,"The workflow ",(0,i.kt)("inlineCode",{parentName:"p"},"build-extension-charts")," will create tagged releases whenever a build is published, this is accomplished by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/helm/chart-releaser-action"},(0,i.kt)("inlineCode",{parentName:"a"},"helm/chart-releaser-action")),". Instead of having the workflow run before a release is tagged, you can modify the workflow file to be triggered by a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release"},"tagged release"),". This allows you to push code to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch and create pre-releases without worrying about the automated builds kicking off."),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"When creating a Tagged Release, the tag name ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"MUST"))," match the proper Extension name depending on the type of build. As it was mentioned above, the Extension Charts (published in the specified branch) and ECI (published in the specified registry) are determined by different versions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Proper Tagged Release naming scheme:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Extension Charts")),": The name ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"MUST"))," match the Extension Package name (determined by the package directory name) followed by the version.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"my-extension-package-0.1.1")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"Extension Catalog Image")),": The name ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"MUST"))," match the main Extension name (determined by the ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," property in ",(0,i.kt)("inlineCode",{parentName:"li"},"./package.json"),") followed by the version",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"my-extension-0.1.0"))))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"workflow-configuration"},"Workflow Configuration"),(0,i.kt)("p",null,"To configure the workflows you will need to modify two sections, namely the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on"},(0,i.kt)("inlineCode",{parentName:"a"},"on"))," stanza and the ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," property in both jobs."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Adding the Tagged Release event:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"on:\n  release:\n    types: [released]\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: A ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," event has multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"types")," to specify, ",(0,i.kt)("inlineCode",{parentName:"p"},"released")," will cause the workflow to only be triggered when a release is published and not considered a pre-release. More info can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#release"},"Github documentation"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modify the ",(0,i.kt)("inlineCode",{parentName:"strong"},"with")," property with the tag")),(0,i.kt)("p",null,"With a ",(0,i.kt)("inlineCode",{parentName:"p"},"release")," event type configured, you will need to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"with")," property within each of the workflow jobs by adding the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"tagged_release: ${{ github.ref_name }}"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  with:\n    tagged_release: ${{ github.ref_name }}\n")),(0,i.kt)("p",null,"This will provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"publish-pkgs")," script within the resuable workflow with the released tag name and ensure only the specified build is accomplished."),(0,i.kt)("h4",{id:"extension-charts-workflow-example"},"Extension Charts Workflow Example"),(0,i.kt)("p",null,"An example of modifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"build-extensions.yml")," workflow file to build when a tag is released:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .github/workflows/build-extension-charts.yml\nname: Build and Release Extension Charts\n\non:\n  release:\n    types: [released]\n...\njobs:\n  build-extension-artifact:\n    ...\n    with:\n      target_branch: gh-pages\n      tagged_release: ${{ github.ref_name }}\n")),(0,i.kt)("h4",{id:"extension-catalog-image-workflow-example"},"Extension Catalog Image Workflow Example"),(0,i.kt)("p",null,"The same steps apply for the ",(0,i.kt)("inlineCode",{parentName:"p"},"build-extension-catalog")," job as ",(0,i.kt)("inlineCode",{parentName:"p"},"${{ github.ref_name }}")," will use the commit ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," name, the release tag in this case, which triggered the action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# .github/workflows/build-extension-catalog.yml\nname: Build and release Extension Catalog Image to registry\n\non:\n  release:\n    types: [released]\n\nenv:\n  REGISTRY: ghcr.io\n\njobs:\n  ...\n  build-extension-catalog:\n    ...\n    with:\n      registry_target: ghcr.io\n      registry_user: ${{ github.actor }}\n      tagged_release: ${{ github.ref_name }}\n")),(0,i.kt)("h4",{id:"sequence-of-events"},"Sequence of Events"),(0,i.kt)("p",null,"Once the modifications have been made to the workflow files, all that is required for a build to be initiated is to create a Release tag with the desired extension to be built. This will then trigger both of the workflows, the ",(0,i.kt)("inlineCode",{parentName:"p"},"parse-ext-name")," script will determine if the provided tag name matches either the main Extension name or one of the Extension packages names."),(0,i.kt)("p",null,"If the Tagged Release does not match the main Extension name, the ECI build will be canceled. Alternatively, if the Tagged Release name does not match an Extension package name, it will be skipped."))}d.isMDXComponent=!0}}]);