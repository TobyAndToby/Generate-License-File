"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[606],{876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(5893),i=t(1151),a=t(4866),o=t(5162);const l={title:"Migrate from V2 to V3"},s=void 0,u={id:"v2-to-v3",title:"Migrate from V2 to V3",description:"Breaking Changes",source:"@site/versioned_docs/version-3.0.0/v2-to-v3.mdx",sourceDirName:".",slug:"/v2-to-v3",permalink:"/docs/v2-to-v3",draft:!1,unlisted:!1,editUrl:"https://github.com/TobyAndToby/generate-license-file/tree/main/website/versioned_docs/version-3.0.0/v2-to-v3.mdx",tags:[],version:"3.0.0",frontMatter:{title:"Migrate from V2 to V3"},sidebar:"docs",previous:{title:"Webpack Plugin",permalink:"/docs/webpack-plugin"},next:{title:"Migrate from V1 to V2",permalink:"/docs/v1-to-v2"}},c={},d=[{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Improved Output Content",id:"improved-output-content",level:3},{value:"Specifying Line Endings",id:"specifying-line-endings",level:3},{value:"Warnings in the Console",id:"warnings-in-the-console",level:3},{value:"New Features to Consider",id:"new-features-to-consider",level:2},{value:"Config Files",id:"config-files",level:3}];function p(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,r.jsx)(n.h3,{id:"improved-output-content",children:"Improved Output Content"}),"\n",(0,r.jsx)(n.p,{children:"Between v2 and v3 we've re-written our core license-finding logic to be more accurate;\nthis means that your outputted file content has probably changed, but don't worry, it'll now contain more precise information."}),"\n",(0,r.jsx)(n.admonition,{title:"Actions Required",type:"tip",children:(0,r.jsx)(n.p,{children:"None!"})}),"\n",(0,r.jsx)(n.h3,{id:"specifying-line-endings",children:"Specifying Line Endings"}),"\n",(0,r.jsx)(n.p,{children:"In v2, when using the library programmatically, you could specify the line ending to use in the output as the last parameter."}),"\n",(0,r.jsx)(n.p,{children:"In v3, there are now more options you can pass in so the line ending option has moved into an options object along with the new options."}),"\n",(0,r.jsx)(n.admonition,{title:"Actions Required",type:"info",children:(0,r.jsxs)(a.Z,{groupId:"apis",children:[(0,r.jsx)(o.Z,{value:"cli",label:"CLI",children:(0,r.jsx)(n.p,{children:"None!"})}),(0,r.jsx)(o.Z,{value:"programmatic",label:"Programmatic use",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// diff-red\nawait generateLicenseFile(myInput, myOutput, "lf");\n// diff-green\nawait generateLicenseFile(myInput, myOutput, { lineEnding: "lf" });\n\n// diff-red\nawait getLicenseFileText(myInput, "lf");\n// diff-green\nawait getLicenseFileText(myInput, { lineEnding: "lf" });\n\n// diff-red\nawait getProjectLicenses(myInput, "lf");\n// diff-green\nawait getProjectLicenses(myInput, { lineEnding: "lf" });\n'})})})]})}),"\n",(0,r.jsx)(n.h3,{id:"warnings-in-the-console",children:"Warnings in the Console"}),"\n",(0,r.jsxs)(n.p,{children:["In v3, Generate License File will now log warnings in particular scenarios. While you don't ",(0,r.jsx)(n.em,{children:"need"})," to fix them, we suggest that you do so that\nyour output is as accurate as possible. Such scenarios include:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Being unable to find a license for a package"}),"\n",(0,r.jsx)(n.li,{children:"Finding multiple licenses for a package"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Actions Required",type:"info",children:(0,r.jsx)(n.p,{children:"Check your console output for warnings and fix them if you can."})}),"\n",(0,r.jsx)(n.h2,{id:"new-features-to-consider",children:"New Features to Consider"}),"\n",(0,r.jsx)(n.h3,{id:"config-files",children:"Config Files"}),"\n",(0,r.jsxs)(n.p,{children:["The v3 implementation is more flexible and allows those who use our CLI to have greater control over what it produces,\nso if you find you're unhappy with what it's producing for a particular package then see our page on ",(0,r.jsx)("a",{href:"./cli/config-file",children:"using a config file"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"In summary, you can now:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Exclude packages from the output"}),"\n",(0,r.jsx)(n.li,{children:"Replace the license for a package"}),"\n",(0,r.jsx)(n.li,{children:"Append additional text to the generated output"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(512);const i={tabItem:"tabItem_Ymn6"};var a=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(7294),i=t(512),a=t(2466),o=t(6550),l=t(469),s=t(1980),u=t(7392),c=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=f({queryString:t,groupId:i}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,c.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),v=(()=>{const e=u??g;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(5893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),i=l[t].value;i!==r&&(u(n),o(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...a,className:(0,i.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function j(e){const n=(0,m.Z)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const i={},a=r.createContext(i);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);