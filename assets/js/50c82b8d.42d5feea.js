"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,c]=m({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),h=(()=>{const e=s??p;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var h=n(2389);const b="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==o&&(p(t),s(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:d},l,{className:(0,i.Z)("tabs__item",y,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(4866),l=n(5162);const o={title:"Library",description:"Overview and example usages of the generate license file library API"},s=void 0,c={unversionedId:"library/index",id:"version-1.3.0/library/index",title:"Library",description:"Overview and example usages of the generate license file library API",source:"@site/versioned_docs/version-1.3.0/library/index.mdx",sourceDirName:"library",slug:"/library/",permalink:"/docs/1.3.0/library/",draft:!1,editUrl:"https://github.com/TobyAndToby/generate-license-file/tree/main/projects/website/versioned_docs/version-1.3.0/library/index.mdx",tags:[],version:"1.3.0",frontMatter:{title:"Library",description:"Overview and example usages of the generate license file library API"},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/1.3.0/cli"},next:{title:"API",permalink:"/docs/1.3.0/library/api"}},u={},p=[{value:"Generate and write a license file to disk",id:"generate-and-write-a-license-file-to-disk",level:2},{value:"Get the license file content without writing it to disk",id:"get-the-license-file-content-without-writing-it-to-disk",level:2},{value:"Get an array of the identified licenses and each of the packages it pertains to",id:"get-an-array-of-the-identified-licenses-and-each-of-the-packages-it-pertains-to",level:2}],d={toc:p};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Our library APIs allow you to interact with generate license file's functionality in code.\nThis page outlines a summary of primary use cases for the methods we expose. If you're looking for\na detailed spec on the method signatures and types, please read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.3.0/library/api"},"API spec")," page."),(0,a.kt)("h2",{id:"generate-and-write-a-license-file-to-disk"},"Generate and write a license file to disk"),(0,a.kt)("p",null,"To programatically run the generate license file program you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateLicenseFile")," method.\nLike the CLI, this method requires a path to a package.json, an output file path, and can be given\nan optional line ending paramter. It will produce the same result as running the command via the CLI."),(0,a.kt)(i.Z,{groupId:"library-page",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { generateLicenseFile } from "generate-license-file";\n\n// Generate the license file and write it to disk.\nawait generateLicenseFile("./package.json", "./third-party-licenses.txt");\n'))),(0,a.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const glf = require("generate-license-file");\n\n// Generate the license file and write it to disk.\nglf\n  .generateLicenseFile("./package.json", "./third-party-licenses.txt")\n  .then(() => {})\n  .catch(error => {});\n')))),(0,a.kt)("h2",{id:"get-the-license-file-content-without-writing-it-to-disk"},"Get the license file content without writing it to disk"),(0,a.kt)("p",null,"If you want to get the content of the expected license file output ",(0,a.kt)("em",{parentName:"p"},"without")," automatically writing it\nto disk, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getLicenseFileText")," method. It requires a path to the project's package.json, and can\noptionally take a line ending."),(0,a.kt)(i.Z,{groupId:"library-page",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { getLicenseFileText } from "generate-license-file";\n\n// Generate the license file content and return it as a string.\nconst licenseFileText: string = await getLicenseFileText("./package.json");\n\nconsole.log(licenseFileText);\n'))),(0,a.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const glf = require("generate-license-file");\n\n// Generate the license file content and return it as a string.\nglf\n  .getLicenseFileText("./package.json")\n  .then(licenseText => {\n    console.log(licenseText);\n  })\n  .catch(error => {});\n')))),(0,a.kt)("h2",{id:"get-an-array-of-the-identified-licenses-and-each-of-the-packages-it-pertains-to"},"Get an array of the identified licenses and each of the packages it pertains to"),(0,a.kt)("p",null,"To get an array of objects each containing the details of an identified license and the dependencies\nit pertains to, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getProjectLicenses")," method. This is useful if you wanted to manually re-format the\nlicense data into a nicely-formatted page on a website, rather than a plaintext file. For example,\nas used by: ",(0,a.kt)("a",{parentName:"p",href:"https://what-version-of-node.js.org/third-party"},"https://what-version-of-node.js.org/third-party"),"."),(0,a.kt)("p",null,"This function just requires a path to the project's package.json."),(0,a.kt)(i.Z,{groupId:"library-page",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { getProjectLicenses, ILicense } from "generate-license-file";\n\n// Get an array of licenses for the current project\'s production dependencies.\nconst licenses: ILicense[] = await getProjectLicenses("./package.json");\n'))),(0,a.kt)(l.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const generateLicenseFile = require("generate-license-file");\n\n// Get an array of licenses for the current project\'s production dependencies.\ngenerateLicenseFile\n  .getProjectLicenses("./package.json")\n  .then(licenses => {\n    console.log(licenses);\n  })\n  .catch(error => {});\n')))))}f.isMDXComponent=!0}}]);