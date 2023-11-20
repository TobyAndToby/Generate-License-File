"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(4334);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),l=n(7294),r=n(4334),o=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=f({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var k=n(2389);const b="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",h,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b)},l.createElement(y,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return l.createElement(N,(0,a.Z)({key:String(t)},e))}},1367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(4866),o=n(5162);const i={title:"Config File",description:"Overview and example usages of the generate license file CLI config file"},s=void 0,u={unversionedId:"cli/config",id:"cli/config",title:"Config File",description:"Overview and example usages of the generate license file CLI config file",source:"@site/docs/cli/config.mdx",sourceDirName:"cli",slug:"/cli/config",permalink:"/docs/next/cli/config",draft:!1,editUrl:"https://github.com/TobyAndToby/generate-license-file/tree/main/projects/website/docs/cli/config.mdx",tags:[],version:"current",frontMatter:{title:"Config File",description:"Overview and example usages of the generate license file CLI config file"},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/next/cli/"},next:{title:"Library",permalink:"/docs/next/library/"}},c={},p=[{value:"File Formats",id:"file-formats",level:2},{value:"Config Options",id:"config-options",level:2},{value:"Append",id:"append",level:3},{value:"Replace",id:"replace",level:3},{value:"Exclude",id:"exclude",level:3},{value:"File Location",id:"file-location",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The generate-license-file CLI can be configured using a config file so that you don't need to re-enter the same\nconfig options every time. The config file also allows you to specify additional more complex options that are not\navailable as CLI flags."),(0,l.kt)("h2",{id:"file-formats"},"File Formats"),(0,l.kt)("p",null,"Config files can be called either ",(0,l.kt)("inlineCode",{parentName:"p"},".glf")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".generatelicensefile")," and can be customised using the following options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"File name can optionally end with ",(0,l.kt)("inlineCode",{parentName:"li"},"rc")),(0,l.kt)("li",{parentName:"ul"},"Can be in a ",(0,l.kt)("inlineCode",{parentName:"li"},"./.config")," directory (no longer needs the ",(0,l.kt)("inlineCode",{parentName:"li"},".")," prefix on the file name)"),(0,l.kt)("li",{parentName:"ul"},"Have the following file extensions: ",(0,l.kt)("inlineCode",{parentName:"li"},".json"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"jsonc"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".json5"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".yaml"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".yml"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,l.kt)("inlineCode",{parentName:"li"},".cjs"))),(0,l.kt)("p",null,"E.g. ",(0,l.kt)("inlineCode",{parentName:"p"},".glf.json"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".glfrc.yml"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".generatelicensefile.jsonc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".config/glf.js"),", and more."),(0,l.kt)("h2",{id:"config-options"},"Config Options"),(0,l.kt)("p",null,"The file can contain all of the options that are ",(0,l.kt)("a",{parentName:"p",href:"./"},"available as CLI flags"),"."),(0,l.kt)(r.Z,{groupId:"file-formats",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "inputs": ["./package.json"],\n  "output": "./THIRD-PARTY-LICENSES.txt",\n  "overwrite": true,\n  "eol": "lf",\n  "ci": true,\n  "no-spinner": true\n}\n'))),(0,l.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"inputs:\n  - ./package.json\noutput: ./THIRD-PARTY-LICENSES.txt\noverwrite: true\neol: lf\nci: true\nno-spinner: true\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  inputs: ["./package.json"],\n  output: "./THIRD-PARTY-LICENSES.txt",\n  overwrite: true,\n  eol: "lf",\n  ci: true,\n  noSpinner: true,\n};\n')))),(0,l.kt)("admonition",{title:"Tip",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"JavaScript allows for more dynamic usages"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  ci: process.env.CI === "true",\n};\n'))),(0,l.kt)("p",null,"The more advanced features that a config file can contain allow you to edit the contents of the generated output file."),(0,l.kt)("h3",{id:"append"},"Append"),(0,l.kt)("p",null,"The append option allows you to append files to the end of the generated output file. This is useful if your project\ncontains other types of licensed material other than node_modules dependencies that you want to include like fonts or images."),(0,l.kt)(r.Z,{groupId:"file-formats",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "append": ["./extra-licenses.txt"]\n}\n'))),(0,l.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"append:\n  - ./extra-licenses.txt\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  append: ["./extra-licenses.txt"],\n};\n')))),(0,l.kt)("h3",{id:"replace"},"Replace"),(0,l.kt)("p",null,"The replace option allows you to replace the license content for a specific dependency. This is useful in situations like:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A dependency does not have its license file included in the published package"),(0,l.kt)("li",{parentName:"ul"},"The license file is not in a standard format"),(0,l.kt)("li",{parentName:"ul"},"The published package contains multiple license files and you want to pick a specific one")),(0,l.kt)(r.Z,{groupId:"file-formats",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "replace": {\n    "lodash@1.2.3": "./licenses/lodash.txt",\n    "react@1.2.3": "./node_modules/react/LICENSE"\n  }\n}\n'))),(0,l.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"replace:\n  lodash@1.2.3: ./licenses/lodash.txt\n  react@1.2.3: ./node_modules/react/LICENSE\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  replace: {\n    "lodash@1.2.3": "./licenses/lodash.txt",\n    "react@1.2.3": "./node_modules/react/LICENSE",\n  },\n};\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"When using pnpm, the way to reference a file in a node_module can look a little different"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "replace": {\n    "react@18.2.0": "node_modules/.pnpm/react@18.2.0/node_modules/react/LICENSE"\n  }\n}\n')))),(0,l.kt)("h3",{id:"exclude"},"Exclude"),(0,l.kt)("p",null,"The exclude option allows you to exclude a dependency from the generated output file. This is useful if a dependency\naccidentally lists one of it's own dev-dependencies as a normal dependency and you want to exclude that dev-dependency."),(0,l.kt)(r.Z,{groupId:"file-formats",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",label:"JSON",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exclude": ["lodash@1.2.3"]\n}\n'))),(0,l.kt)(o.Z,{value:"yaml",label:"YAML",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"exclude:\n  - lodash@1.2.3\n"))),(0,l.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  exclude: ["lodash@1.2.3"],\n};\n')))),(0,l.kt)("h2",{id:"file-location"},"File Location"),(0,l.kt)("p",null,"If you want to keep your config file in a different location to the current working directory (or a ",(0,l.kt)("inlineCode",{parentName:"p"},"./.config")," directory)\nthen you can specify the location of the config file using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," CLI flag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"generate-license-file --config ./path/to/config.json\n")))}m.isMDXComponent=!0}}]);