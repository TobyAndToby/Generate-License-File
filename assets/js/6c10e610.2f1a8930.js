"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>I});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),l=n(6550),u=n(1980),s=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,s]=m({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),v=(()=>{const e=u??p;return f({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,i]),tabValues:i}}var v=n(2389);const h="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==l&&(p(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},o,{className:(0,i.Z)("tabs__item",y,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h)},a.createElement(k,(0,r.Z)({},e,t)),a.createElement(b,(0,r.Z)({},e,t)))}function I(e){const t=(0,v.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},4971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>h,frontMatter:()=>p,metadata:()=>f,toc:()=>g});var r=n(7462),a=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// diff-red\nawait generateLicenseFile(myInput, myOutput, "windows");\n// diff-red\nawait generateLicenseFile(myInput, myOutput, "posix");\n// diff-red\n\n// diff-red\nawait getLicenseFileText(myInput, "windows");\n// diff-red\nawait getLicenseFileText(myInput, "posix");\n\n// diff-green\nawait generateLicenseFile(myInput, myOutput, "crlf");\n// diff-green\nawait generateLicenseFile(myInput, myOutput, "lf");\n// diff-green\n\n// diff-green\nawait getLicenseFileText(myInput, "crlf");\n// diff-green\nawait getLicenseFileText(myInput, "lf");\n')))}u.isMDXComponent=!0;const s={toc:[]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// diff-red\nawait generateLicenseFile("./", myOutput);\n// diff-red\n\n// diff-red\nawait getLicenseFileText("./");\n// diff-red\n\n// diff-red\nawait getProjectLicenses("./");\n\n// diff-green\nawait generateLicenseFile("./package.json", myOutput);\n// diff-green\n\n// diff-green\nawait getLicenseFileText("./package.json");\n// diff-green\n\n// diff-green\nawait getProjectLicenses("./package.json");\n')))}c.isMDXComponent=!0;const p={title:"Migrate from v1 to v2"},d=void 0,f={unversionedId:"v1-to-v2",id:"version-2.0.0/v1-to-v2",title:"Migrate from v1 to v2",description:"Breaking Changes",source:"@site/versioned_docs/version-2.0.0/v1-to-v2.mdx",sourceDirName:".",slug:"/v1-to-v2",permalink:"/docs/v1-to-v2",draft:!1,editUrl:"https://github.com/TobyAndToby/generate-license-file/tree/main/projects/website/versioned_docs/version-2.0.0/v1-to-v2.mdx",tags:[],version:"2.0.0",frontMatter:{title:"Migrate from v1 to v2"},sidebar:"docs",previous:{title:"API",permalink:"/docs/library/api"},next:{title:"Webpack Plugin",permalink:"/docs/webpack-plugin"}},m={},g=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Output file format",id:"output-file-format",level:3},{value:"Line Endings",id:"line-endings",level:4},{value:"Capitalisation of npm",id:"capitalisation-of-npm",level:4},{value:"Credit",id:"credit",level:4},{value:"End-of-line flag (EOL)",id:"end-of-line-flag-eol",level:3},{value:"Input",id:"input",level:3},{value:"New features to consider",id:"new-features-to-consider",level:2},{value:"CI Mode",id:"ci-mode",level:3}],v={toc:g};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,a.kt)("h3",{id:"output-file-format"},"Output file format"),(0,a.kt)("p",null,"Between the major versions we've made a few small formatting changes to the outputted file content."),(0,a.kt)("admonition",{title:"Actions Required",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"None!")),(0,a.kt)("h4",{id:"line-endings"},"Line Endings"),(0,a.kt)("p",null,"In v1, generate-license-file preserved the line endings ",(0,a.kt)("em",{parentName:"p"},"within")," license text. The ",(0,a.kt)("inlineCode",{parentName:"p"},"--eol")," property only applied to the text added around the licenses."),(0,a.kt)("p",null,"In v2, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--eol")," property applies to all text in the output to create a consistent file."),(0,a.kt)("h4",{id:"capitalisation-of-npm"},"Capitalisation of npm"),(0,a.kt)("p",null,'In v1, the output text wrote "npm" in capital letters.'),(0,a.kt)("p",null,"In v2, the output now ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/npm/npm/releases/tag/v5.0.0#:~:text=npm%20will%20now%20scold%20you%20if%20you%20capitalize%20its%20name.%20seriously%20it%20will%20fight%20you."},"correctly")," writes npm in lowercase."),(0,a.kt)("h4",{id:"credit"},"Credit"),(0,a.kt)("p",null,"In v1, credit to generate-license-file was only put at the bottom of the file."),(0,a.kt)("p",null,"In v2, credit is now also added at the top of the file."),(0,a.kt)("h3",{id:"end-of-line-flag-eol"},"End-of-line flag (EOL)"),(0,a.kt)("p",null,"In v1, the ",(0,a.kt)("inlineCode",{parentName:"p"},"eol")," arguement took in either ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"posix")," to set the line ending values in the output to either ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," respectively."),(0,a.kt)("p",null,"In v2, the ",(0,a.kt)("inlineCode",{parentName:"p"},"eol")," arguement now takes either ",(0,a.kt)("inlineCode",{parentName:"p"},"crlf")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lf")," for either ",(0,a.kt)("inlineCode",{parentName:"p"},"\\r\\n")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"\\n")," respectively."),(0,a.kt)("admonition",{title:"Actions Required",type:"info"},(0,a.kt)(i.Z,{groupId:"apis",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"Change ",(0,a.kt)("code",null,"--eol windows")," to ",(0,a.kt)("code",null,"--eol crlf"),"."),(0,a.kt)("p",null,"Change ",(0,a.kt)("code",null,"--eol posix")," to ",(0,a.kt)("code",null,"--eol lf"),".")),(0,a.kt)(o.Z,{value:"programmatic",label:"Programmatic use",mdxType:"TabItem"},(0,a.kt)(u,{mdxType:"EolDiff"})))),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("p",null,"In v1, the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," parameter was a path to the directory containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,a.kt)("p",null,"In v2, the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," parameter needs to be a path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file itself."),(0,a.kt)("admonition",{title:"Actions Required",type:"info"},(0,a.kt)(i.Z,{groupId:"apis",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("p",null,"Change ",(0,a.kt)("code",null,"--input ./")," to ",(0,a.kt)("code",null,"--input ./package.json"),"."),(0,a.kt)("p",null,"Change ",(0,a.kt)("code",null,"-i ./")," to ",(0,a.kt)("code",null,"-i ./package.json"),".")),(0,a.kt)(o.Z,{value:"programmatic",label:"Programmatic use",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"InputDiff"})))),(0,a.kt)("h2",{id:"new-features-to-consider"},"New features to consider"),(0,a.kt)("h3",{id:"ci-mode"},"CI Mode"),(0,a.kt)("p",null,"If you're running the generate-license-file CLI as a part of your CI/CD pipelines/processes then you'll probably want to include our new ",(0,a.kt)("inlineCode",{parentName:"p"},"--ci")," flag."),(0,a.kt)("p",null,"This flag ensures that the CLI fails with a non-zero exitcode whenever it would normally prompt the user for an input.\nThis can stop your processes from needlessly hanging until they hit your configured timeout,\nsaving you time as well as debug effort due to the messages it will log before it exits."))}h.isMDXComponent=!0}}]);