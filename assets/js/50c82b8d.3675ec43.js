"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[136],{7568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(5893),r=n(1151),i=n(4866),s=n(5162);const l={title:"Library",description:"Overview and example usages of the generate license file library API"},o=void 0,c={id:"library/index",title:"Library",description:"Overview and example usages of the generate license file library API",source:"@site/versioned_docs/version-1.3.0/library/index.mdx",sourceDirName:"library",slug:"/library/",permalink:"/docs/1.3.0/library/",draft:!1,unlisted:!1,editUrl:"https://github.com/TobyAndToby/generate-license-file/tree/main/website/versioned_docs/version-1.3.0/library/index.mdx",tags:[],version:"1.3.0",frontMatter:{title:"Library",description:"Overview and example usages of the generate license file library API"},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/1.3.0/cli"},next:{title:"API",permalink:"/docs/1.3.0/library/api"}},u={},d=[{value:"Generate and write a license file to disk",id:"generate-and-write-a-license-file-to-disk",level:2},{value:"Get the license file content without writing it to disk",id:"get-the-license-file-content-without-writing-it-to-disk",level:2},{value:"Get an array of the identified licenses and each of the packages it pertains to",id:"get-an-array-of-the-identified-licenses-and-each-of-the-packages-it-pertains-to",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Our library APIs allow you to interact with generate license file's functionality in code.\nThis page outlines a summary of primary use cases for the methods we expose. If you're looking for\na detailed spec on the method signatures and types, please read the ",(0,a.jsx)(t.a,{href:"/docs/1.3.0/library/api",children:"API spec"})," page."]}),"\n",(0,a.jsx)(t.h2,{id:"generate-and-write-a-license-file-to-disk",children:"Generate and write a license file to disk"}),"\n",(0,a.jsxs)(t.p,{children:["To programatically run the generate license file program you can use the ",(0,a.jsx)(t.code,{children:"generateLicenseFile"})," method.\nLike the CLI, this method requires a path to a package.json, an output file path, and can be given\nan optional line ending paramter. It will produce the same result as running the command via the CLI."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"library-page",children:[(0,a.jsx)(s.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { generateLicenseFile } from "generate-license-file";\n\n// Generate the license file and write it to disk.\nawait generateLicenseFile("./package.json", "./third-party-licenses.txt");\n'})})}),(0,a.jsx)(s.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const glf = require("generate-license-file");\n\n// Generate the license file and write it to disk.\nglf\n  .generateLicenseFile("./package.json", "./third-party-licenses.txt")\n  .then(() => {})\n  .catch(error => {});\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"get-the-license-file-content-without-writing-it-to-disk",children:"Get the license file content without writing it to disk"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to get the content of the expected license file output ",(0,a.jsx)(t.em,{children:"without"})," automatically writing it\nto disk, you can use the ",(0,a.jsx)(t.code,{children:"getLicenseFileText"})," method. It requires a path to the project's package.json, and can\noptionally take a line ending."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"library-page",children:[(0,a.jsx)(s.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { getLicenseFileText } from "generate-license-file";\n\n// Generate the license file content and return it as a string.\nconst licenseFileText: string = await getLicenseFileText("./package.json");\n\nconsole.log(licenseFileText);\n'})})}),(0,a.jsx)(s.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const glf = require("generate-license-file");\n\n// Generate the license file content and return it as a string.\nglf\n  .getLicenseFileText("./package.json")\n  .then(licenseText => {\n    console.log(licenseText);\n  })\n  .catch(error => {});\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"get-an-array-of-the-identified-licenses-and-each-of-the-packages-it-pertains-to",children:"Get an array of the identified licenses and each of the packages it pertains to"}),"\n",(0,a.jsxs)(t.p,{children:["To get an array of objects each containing the details of an identified license and the dependencies\nit pertains to, use the ",(0,a.jsx)(t.code,{children:"getProjectLicenses"})," method. This is useful if you wanted to manually re-format the\nlicense data into a nicely-formatted page on a website, rather than a plaintext file. For example,\nas used by: ",(0,a.jsx)(t.a,{href:"https://what-version-of-node.js.org/third-party",children:"https://what-version-of-node.js.org/third-party"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This function just requires a path to the project's package.json."}),"\n",(0,a.jsxs)(i.Z,{groupId:"library-page",children:[(0,a.jsx)(s.Z,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { getProjectLicenses, ILicense } from "generate-license-file";\n\n// Get an array of licenses for the current project\'s production dependencies.\nconst licenses: ILicense[] = await getProjectLicenses("./package.json");\n'})})}),(0,a.jsx)(s.Z,{value:"js",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'const generateLicenseFile = require("generate-license-file");\n\n// Get an array of licenses for the current project\'s production dependencies.\ngenerateLicenseFile\n  .getProjectLicenses("./package.json")\n  .then(licenses => {\n    console.log(licenses);\n  })\n  .catch(error => {});\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(512);const r={tabItem:"tabItem_Ymn6"};var i=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7294),r=n(512),i=n(2466),s=n(6550),l=n(469),o=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(7294);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);