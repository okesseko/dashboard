"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[200],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),c=o,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const i={},r="Forms",l={unversionedId:"code-base-works/forms-and-validation",id:"code-base-works/forms-and-validation",title:"Forms",description:"By default, all resources can be edited in YAML. A more compelling edit experience can be created by adding a resource type component in /edit/. Forms for creating and editing resources are in the edit directory as a convention.",source:"@site/docs/code-base-works/forms-and-validation.md",sourceDirName:"code-base-works",slug:"/code-base-works/forms-and-validation",permalink:"/dashboard/code-base-works/forms-and-validation",draft:!1,tags:[],version:"current",lastUpdatedAt:1680198765,formattedLastUpdatedAt:"Mar 30, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Products and Navigation",permalink:"/dashboard/code-base-works/products-and-navigation"},next:{title:"Helm Chart Apps",permalink:"/dashboard/code-base-works/helm-chart-apps"}},s={},d=[{value:"Background",id:"background",level:2},{value:"Creating a New Create/Edit Form for a Resource",id:"creating-a-new-createedit-form-for-a-resource",level:2},{value:"Field Validation",id:"field-validation",level:2},{value:"Form Validation",id:"form-validation",level:2},{value:"Custom Model Validators",id:"custom-model-validators",level:2},{value:"1. Create a new model validation function (legacy)",id:"1-create-a-new-model-validation-function-legacy",level:3},{value:"2. Export new validation function",id:"2-export-new-validation-function",level:3},{value:"3. Add <code>customValidationRules</code> to model",id:"3-add-customvalidationrules-to-model",level:3},{value:"Custom Deletion Warnings",id:"custom-deletion-warnings",level:2},{value:"Auto-focusing Form Elements",id:"auto-focusing-form-elements",level:2},{value:"Forms without CruResource",id:"forms-without-cruresource",level:2}],u={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"forms"},"Forms"),(0,o.kt)("p",null,"By default, all resources can be edited in YAML. A more compelling edit experience can be created by adding a resource type component in ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit/"),". Forms for creating and editing resources are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," directory as a convention."),(0,o.kt)("p",null,"Wrapping an edit component in ",(0,o.kt)("inlineCode",{parentName:"p"},"CruResource")," will provide generic error handling and cancel/save buttons. This customisation should also support the ",(0,o.kt)("inlineCode",{parentName:"p"},"as=config")," param, where the form is displayed and populated but is not editable."),(0,o.kt)("p",null," Common functionality for the create/edit forms is reused by importing ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateEditView")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"/mixins/create-edit-view"),". For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"registerBeforeHook")," is used across many create/edit forms to save the form data before a resource is created."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"The reusable CruResource component and its mixins were created to solve a problem particular to Kubernetes resource management. In older Rancher versions, Rancher sometimes restricted fields from being edited or added form validation in Norman, the backend API that predated Steve. Originally, Norman was designed to restrict users from editing resources in the Kubernetes cluster directly so that Norman could control how resources were configured."),(0,o.kt)("p",null,"But in modern DevOps, many users want the ability to automate their workflows with GitOps, which usually requires tracking all of the YAML files for Kubernetes resources in a Git repository, and also requires users to be able to edit resources through config files instead of only manipulating them through the UI."),(0,o.kt)("p",null,"The problem was that when Rancher exposed access to Kubernetes clusters directly, users could not only access Kubernetes resources through Norman, but they could also edit the resource\u2019s YAML config files and bypass the restrictions that Norman could impose."),(0,o.kt)("p",null,"Rancher\u2019s reusable forms are intended to be flexible enough to allow YAML files to be created and edited through the Rancher UI, while also providing form validation for those files at the same time. The reusability also allows Rancher to quickly adapt to new Kubernetes custom resources that are introduced for Helm chart apps that are not primarily developed in-house, such as the monitoring and logging applications."),(0,o.kt)("h2",{id:"creating-a-new-createedit-form-for-a-resource"},"Creating a New Create/Edit Form for a Resource"),(0,o.kt)("p",null,"This section describes the workflow for creating forms to create or edit resources in Rancher. We recommend using the CruResource component for create/edit forms because it is designed to handle resource that can also be managed through YAML config files, with process automated through GitOps."),(0,o.kt)("p",null,"You will need to create a file for the create/edit form. For normal Kubernetes resources, this file should be located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@shell/components/edit")," directory."),(0,o.kt)("p",null,"The file will need these imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import CreateEditView from '@shell/mixins/create-edit-view/impl';\n// An example types file \nimport { POD } from '@shell/config/types';\nimport { exceptionToErrorsArray } from '@shell/utils/error';\nimport CruResource from '@shell/components/CruResource.vue';\n\n")),(0,o.kt)("p",null,"The edit component takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," as a prop. For all ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit")," components, the store creates a new instance of the model to use as the ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),". This allows the component to access any prop or method on the resource model by taking it from the newly instantiated value. The value is then passed into CruResource using the",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.kt)("p",null,"The CruResource component takes a few important props, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"done"),", that you don\u2019t have to pass in manually because they are automatically made available from the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateEditView")," mixin:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"save")," method from CreateEditView cleans the data. It also populates ",(0,o.kt)("inlineCode",{parentName:"li"},"exceptionToErrorsArray"),", which controls validation errors for the form as a whole. In other words, these validation errors don\u2019t appear next to individual fields, but they each appear at the bottom of the form after the submit button is clicked, and each error includes the name of the field that has a problem."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"done")," is used to redirect the user after the form is successfully submitted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"actuallySave")," makes the asynchronous API call to create the resource and it gets the appropriate API route from the resource schema itself. So in this way, the ",(0,o.kt)("inlineCode",{parentName:"li"},"save")," method is reused across many create/edit forms, while the API route called to save the resource is still configured at the resource level. However, any method for managing a resource, including ",(0,o.kt)("inlineCode",{parentName:"li"},"save"),", can be overridden by adding methods of the same name to the resource\u2019s class model.")),(0,o.kt)("h1",{id:"forms-in-modals"},"Forms in Modals"),(0,o.kt)("p",null,"If a form element was repeated for every row in a table, it would make the UI slower. To increase performance, components such as ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionMenu")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PromptModal")," are not repeated for every row in a table, and they don't directly interact with the data from a table row. Instead, they communicate with each row indirectly through the store. All the information about the actions that should be available for a certain resource is contained in a model, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActionMenu")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"PromptModal")," components take that information about the selected resource from the store. Modals and menus are opened by telling the store that they should be opened. For example, this call to the store  ",(0,o.kt)("inlineCode",{parentName:"p"},"this.$store.commit('action-menu/togglePromptModal');")," is used to open the action menu. Then each component uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," method to get all the information it needs from the store."),(0,o.kt)("h1",{id:"validation"},"Validation"),(0,o.kt)("p",null,"In order to improve the user experience in the future, we are moving toward individual field validation errors that appear as soon as the user types or selects incorrect input. Where possible, you should add pre-submit form validation to input components such as LabeledInput and LabeledSelect. Ideally, the button to submit the form should be disabled by default until the entire form is valid, and no errors should appear next to inputs that haven\u2019t been touched."),(0,o.kt)("h2",{id:"field-validation"},"Field Validation"),(0,o.kt)("p",null,'Live validation for fields is the primary method for providing feedback to the user that a value they\'ve entered is invalid. In most cases, the preferred feedback is a simple error message next to the field. To this end, the LabeledInput and LabeledSelect components accept a "rules" parameter which allows the developer to pass in an array of functions capable of generating the validation messages appropriate to the field.'),(0,o.kt)("p",null,"Existing validation functions can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/utils/validators/formRules")," in the dashboard codebase but it is possible to create custom functions to accomplish the same purpose if need be. A form rule validator must meet the following criteria in order to be useful for this purpose:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The function must accept a single parameter which will be the value of the field to be validated. Such as: ",(0,o.kt)("inlineCode",{parentName:"li"},"const truthy = val => !val ? 'Value should be truthy' : undefined;")),(0,o.kt)("li",{parentName:"ol"},"If the validation is passed, the function returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"),"."),(0,o.kt)("li",{parentName:"ol"},"If the validation fails, the function returns a string to be rendered by the field component as an error.")),(0,o.kt)("p",null,'In addition to the "rules" parameter existing on the LabeledInput and LabeledSelect form components, an additional component called Error (found at ',(0,o.kt)("inlineCode",{parentName:"p"},"shell/components/form/Error"),") exists which can also accept a value and rules. This allows the developer to display an error message which may not be tied to a specific field or tied to a field that is somehow incapable of displaying its own validation message."),(0,o.kt)("p",null,"Should a field displaying a validation message be hidden from the user due to form navigation elements like a non-active tab, the developer should still take care to communicate that a validation error exists. To that end, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab"),' component accepts a simple parameter called "Error" which is simply a boolean value. When true, the "Error" parameter on the ',(0,o.kt)("inlineCode",{parentName:"p"},"Tab")," component will display an error icon provided the tab is not currently active (if the tab is active, the field in question should provide feedback to the user)."),(0,o.kt)("h2",{id:"form-validation"},"Form Validation"),(0,o.kt)("p",null,"While individual fields are typically responsible for displaying their own validation messages, the form itself should also contain logic to disable the save button should validation errors exist, display errors not bound to a specific field, and/or display errors returned by the API. This is mostly accomplished via a mixin called ",(0,o.kt)("inlineCode",{parentName:"p"},"form-validation")," (found at ",(0,o.kt)("inlineCode",{parentName:"p"},"shell/mixins/form-validation.js"),"). Eventually, this mixin will be embedded into the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateEditView")," mixin already used by every form but is currently separate to facilitate a safer implementation of the new Form Validation logic."),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"form-validation")," mixin, import the mixin and include it in ",(0,o.kt)("inlineCode",{parentName:"p"},"mixins")," in the component like any other mixin. Once included, ensure the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Set the "validation-passed" property on the ',(0,o.kt)("inlineCode",{parentName:"li"},"CruResource"),' component to "fvFormIsValid" (computed property provided by the mixin). This conditionally disables the "save" button on the form.'),(0,o.kt)("li",{parentName:"ol"},'Set the "errors" property on the ',(0,o.kt)("inlineCode",{parentName:"li"},"CruResource"),' component to "fvUnreportedValidationErrors" (computed property provided by the mixin) or some other value that aggregates errors not otherwise shown in the form as a fallback means of displaying error state to the user.')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"form-validation")," mixin itself includes most of the information a developer will need to use it in comments in the file itself but a high-level summary would cover the following points:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The specific rules to be validated by the form should be located in a data property for the component named ",(0,o.kt)("inlineCode",{parentName:"li"},"fvFormRuleSets")," which is an array of objects defining the specific rulesets for specific paths in the forms value to validate. The specific properties of the objects required by this array are defined in the mixin file itself as comments."),(0,o.kt)("li",{parentName:"ol"},"Additional rules to be validated by the form are also pulled directly from the resource model's ",(0,o.kt)("inlineCode",{parentName:"li"},"modelValidationRules")," property which converts the model's customValidationRules into a format useable by the ",(0,o.kt)("inlineCode",{parentName:"li"},"form-validation")," mixin. The combined ",(0,o.kt)("inlineCode",{parentName:"li"},"fvFormRuleSets")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"modelValidationRules")," can be viewed in a single array under the computed property ",(0,o.kt)("inlineCode",{parentName:"li"},"rulesets")," provided by the mixin."),(0,o.kt)("li",{parentName:"ol"},"Should you wish to inject validation rules that either use the context of the component form or you simply wish to inject a component method into your validation rules used by the mixin, you can create a computed property called ",(0,o.kt)("inlineCode",{parentName:"li"},"fvExtraRules")," which should return a simple object that contains a key for each validator function you wish to inject into the form-validation rules. See comments in the mixin file itself for additional details."),(0,o.kt)("li",{parentName:"ol"},'In order to avoid duplication of validator definitions, it is recommended to pull the function array for a field\'s "rules" property directly from the components ',(0,o.kt)("inlineCode",{parentName:"li"},"fvFormRuleSets"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"form-validation")," mixin provides two helper methods for this named ",(0,o.kt)("inlineCode",{parentName:"li"},"fvGetPathRules")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"fvGetAndReportPathRules"),", the specifics as to which one to use and when are defined in the comments in the mixin file itself.")),(0,o.kt)("p",null,"A very simple form implementing form validation might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>\nimport CreateEditView from '@shell/mixins/create-edit-view';\nimport FormValidation from '@shell/mixins/form-validation';\nimport CruResource from '@shell/components/CruResource';\nimport LabeledInput from '@shell/components/form/LabeledInput';\n\nexport default {\n  components: {\n    CruResource, LabeledInput\n  },\n\n  mixins: [CreateEditView, FormValidation],\n  data() {\n    return {\n      fvFormRuleSets: [{ path: 'value', rules: ['required'] }],\n    };\n  },\n};\n<\/script>\n<template>\n  <CruResource\n    :errors=\"fvUnreportedValidationErrors\"\n    :resource=\"value\"\n    :validation-passed=\"fvFormIsValid\"\n  >\n    <LabeledInput\n      v-model=\"value.name\"\n      label=\"Name\"\n      :rules=\"fvGetAndReportPathRules('name')\"\n    />\n  </CruResource>\n</template>\n")),(0,o.kt)("p",null,"*It is highly recommended to read through the comments in the ",(0,o.kt)("inlineCode",{parentName:"p"},"form-validation")," mixin to understand its various properties and their suggested use-cases."),(0,o.kt)("h2",{id:"custom-model-validators"},"Custom Model Validators"),(0,o.kt)("p",null,"Adding custom validation logic to forms and models requires changes to three different parts of Dashboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a new validation function to ",(0,o.kt)("inlineCode",{parentName:"li"},"utils/validators")," (legacy)"),(0,o.kt)("li",{parentName:"ol"},"Export the new validation function ",(0,o.kt)("inlineCode",{parentName:"li"},"utils/custom-validators.js")," (legacy)"),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"customValidationRules")," prop to appropriate model under ",(0,o.kt)("inlineCode",{parentName:"li"},"models"))),(0,o.kt)("h3",{id:"1-create-a-new-model-validation-function-legacy"},"1. Create a new model validation function (legacy)"),(0,o.kt)("p",null,"*Most (if not all) of these types of validation functions have been replaced by the newer simpler versions designed for field and form validation. This section of the docs remains until the legacy code may be completely removed safely."),(0,o.kt)("p",null,"Custom validators are stored under ",(0,o.kt)("inlineCode",{parentName:"p"},"utils/validators"),". Validation functions should define positional parameters of ",(0,o.kt)("inlineCode",{parentName:"p"},"value, getters, errors, validatorArgs")," with an optional fifth ",(0,o.kt)("inlineCode",{parentName:"p"},"displayKey")," parameter: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export function exampleValidator(value, getters, errors, validatorArgs, displayKey) {\n  ...\n}\n")),(0,o.kt)("p",null,"Make sure the validation function pushes a value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," collection in order to display error messages on the form:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In this example, we're making use of i18n getters to produce a localized error message. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"export function exampleValidator(value, getters, errors, validatorArgs, displayKey) {\n  ... \n\n  if (validationFails) {\n    errors.push(getters['i18n/t']('validation.setting.serverUrl.https'));\n  }\n\n  ...\n}\n")),(0,o.kt)("h3",{id:"2-export-new-validation-function"},"2. Export new validation function"),(0,o.kt)("p",null,"*Most (if not all) of these types of validation functions have been replaced by the newer simpler versions designed for field and form validation. This section of the docs remains until the legacy code may be completely removed safely."),(0,o.kt)("p",null,"In order to make a custom validator available for usage in forms and component, it will need to exposed by importing the new validator function into ",(0,o.kt)("inlineCode",{parentName:"p"},"utils/custom-validators.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"import { podAffinity } from '@shell/utils/validators/pod-affinity';\nimport { roleTemplateRules } from '@shell/utils/validators/role-template';\nimport { clusterName } from '@shell/utils/validators/cluster-name';\n+ import { exampleValidator } from '@shell/utils/validators/setting';\n")),(0,o.kt)("p",null,"and add it to the default exports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"export default {\n  containerImages,\n  cronSchedule,\n  podAffinity,\n- roleTemplateRules\n+ roleTemplateRules,\n+ exampleValidator\n};\n")),(0,o.kt)("h3",{id:"3-add-customvalidationrules-to-model"},"3. Add ",(0,o.kt)("inlineCode",{parentName:"h3"},"customValidationRules")," to model"),(0,o.kt)("p",null,"Locate the model that will make use of the custom validation function and add ",(0,o.kt)("inlineCode",{parentName:"p"},"customValidationRules")," property if one does not already exist. ",(0,o.kt)("inlineCode",{parentName:"p"},"customValidationRules")," returns a collection of validation rules to run against the model:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"customValidationRules() {\n  return [\n    {\n      path: 'value',\n      validators: [`exampleValidator`] // the validator listed here should correspond the validation function located in `shell/utils/validators/formRules`\n    }\n  ]\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"a-validation-rule-can-contain-the-following-keys"},"A validation rule can contain the following keys:"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"path")," {string}: the model property to validate"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"nullable")," {boolean}: asserts if property accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," value"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"required")," {boolean}: asserts if property requires a value"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"translationKey")," {string}: path to validation key in ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/translations")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"type")," {string}: name of built-in validation rule to assert"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"validators")," {string}: name of custom validation rule to assert")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},":${arg}")," to pass custom arguments to a validation function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"customValidationRules() {\n  return [\n    {\n      path: 'value',\n      validators: [`exampleValidator:${ this.metadata.name }`]\n    }\n  ]\n}\n")),(0,o.kt)("p",null,"Multiple custom arguments can be passed to a validator function; each argument is separated by ",(0,o.kt)("inlineCode",{parentName:"p"},":"),", for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"validators: [`exampleValidator:${ this.metadata.name }:'customString':42]\n")),(0,o.kt)("h2",{id:"custom-deletion-warnings"},"Custom Deletion Warnings"),(0,o.kt)("p",null,"To warn users about deleting a certain resource, you can customize the message that is shown to the user when they attempt to delete a resource.\nYou can add the error message to the resource class model in this format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"get warnDeletionMessage() {\n  return this.t('path.to.delete.warning');\n}\n")),(0,o.kt)("h2",{id:"auto-focusing-form-elements"},"Auto-focusing Form Elements"),(0,o.kt)("p",null,"Automatically give focus to the first field in a form with the ",(0,o.kt)("inlineCode",{parentName:"p"},"v-focus")," directive. Auto-focusing the first form element saves the user an additional click and provides a clear starting point."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'  <LabeledInput \n    v-focus\n    v-model="value" \n  />\n')),(0,o.kt)("h2",{id:"forms-without-cruresource"},"Forms without CruResource"),(0,o.kt)("p",null,"This section describes how to make create/edit forms without CruResource or the CreateEditView mixin."),(0,o.kt)("p",null,"There may be a situation where you need to make a create/edit form that doesn\u2019t automatically get the resource value passed into it because the component is located outside of the same ",(0,o.kt)("inlineCode",{parentName:"p"},"/edit")," folder as the other create/edit forms. In this case, you will need to manually create the skeleton resource from a class model and use that as the form value so that the methods passed into AsyncButton have access to enough information to save the resource."),(0,o.kt)("p",null,"There may be a situation where you need Rancher to create and edit data that is not a Kubernetes resource. But even in this situation, we recommend using the same basic architecture as is used for saving Kubernetes resources. The reason is that many users want to automate their workflows with GitOps, and they want to be able to manipulate data with both config files and with forms in the Rancher UI. This means that even if it is not currently possible to manage the resource in YAML, that ability may be added later because of the industry\u2019s overarching need for automation and GitOps. The new Rancher UI will need to be able to consistently support GitOps workflows."),(0,o.kt)("p",null,"A custom create component would typically need at least these imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import AsyncButton from '@shell/components/AsyncButton';\nimport { _CREATE } from '@shell/config/query-params';\nimport { exceptionToErrorsArray } from '@shell/utils/error';\n")),(0,o.kt)("p",null,"The AsyncButton should be used to save the resource, and it will show a loading message if the resource takes time to be saved. The below example shows a minimal usage of AsyncButton:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<AsyncButton\n  :disabled="!validationPassed"\n  :mode="mode"\n  @click="onSubmit"\n/>\n')),(0,o.kt)("p",null,"You can maintain the form validation state in ",(0,o.kt)("inlineCode",{parentName:"p"},"data()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"data() {\n    return {\n      errors:           [],\n      value:           { name: '' },\n      submitted:       false,\n      mode:            _CREATE\n    };\n  },\n")),(0,o.kt)("p",null,"You will also need to provide the resource schema so that it can be used by ",(0,o.kt)("inlineCode",{parentName:"p"},"save()")," to create the resource by calling the appropriate back end route for creating the resource."),(0,o.kt)("p",null,"When a skeleton resource is not passed into your create/edit form as a value, you can create the new resource instance with a ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," to the store as soon as the form is rendered. Then you can use it as the initial value for your form. An example of calling the store to create the initial resource value is below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"this.value = await this.$store.dispatch('cluster/create', {\n  type:     'chartInstallAction',\n  metadata: {\n    namespace: this.forceNamespace || this.$store.getters['defaultNamespace'],\n    name:      this.existing?.spec?.name || this.query.appName || '',\n  }\n});\n")),(0,o.kt)("p",null,"When the resource is saved, it should call a ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," method. This can be the ",(0,o.kt)("inlineCode",{parentName:"p"},"save"),"defined in the CreateEditView mixin, or it can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," method defined a form containing an AsyncButton. For example, this method is used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PromptChangePassword")," component and provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonCb")," callback to the AsyncButton:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"async submit(buttonCb) {\n  try {\n    await this.$refs.changePassword.save();\n    this.show(false);\n    buttonCb(true);\n  } catch (err) {\n    buttonCb(false);\n  }\n}\n")),(0,o.kt)("p",null,"The corresponding AsyncButton is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<AsyncButton\n  type="submit"\n  mode="apply"\n  class="btn bg-error ml-10"\n  :disabled="!valid"\n  value="LOGIN"\n  @click="submit"\n/>\n')),(0,o.kt)("p",null,"Whichever implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"save()")," is used, it will need to call ",(0,o.kt)("inlineCode",{parentName:"p"},"_save()")," on the resource. That ",(0,o.kt)("inlineCode",{parentName:"p"},"_save")," method is defined on the root ",(0,o.kt)("inlineCode",{parentName:"p"},"resource-class")," model, which every other model extends."),(0,o.kt)("p",null,"Note:"),(0,o.kt)("p",null,"When creating a non-standard flow for creating or editing a resource, you may want to ask Lauren to review the design and makes sure it follows the Storybook documentation for how components are meant to be used."))}m.isMDXComponent=!0}}]);