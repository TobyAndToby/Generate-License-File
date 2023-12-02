"use strict";(self.webpackChunk_generate_license_file_website=self.webpackChunk_generate_license_file_website||[]).push([[986],{1912:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(5893),t=i(1151),l=i(9482);const r={title:"CLI",description:"Overview and example usages of the generate license file CLI"},a=void 0,o={id:"cli/index",title:"CLI",description:"Overview and example usages of the generate license file CLI",source:"@site/versioned_docs/version-2.0.0/cli/index.mdx",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/2.0.0/cli/",draft:!1,unlisted:!1,editUrl:"https://github.com/TobyAndToby/generate-license-file/tree/main/website/versioned_docs/version-2.0.0/cli/index.mdx",tags:[],version:"2.0.0",frontMatter:{title:"CLI",description:"Overview and example usages of the generate license file CLI"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/2.0.0/intro/getting-started"},next:{title:"Library",permalink:"/docs/2.0.0/library/"}},c={},d=[{value:"--input",id:"--input",level:2},{value:"--output",id:"--output",level:2},{value:"--overwrite",id:"--overwrite",level:2},{value:"--eol",id:"--eol",level:2},{value:"--ci",id:"--ci",level:2},{value:"--no-spinner",id:"--no-spinner",level:2},{value:"--version",id:"--version",level:2}];function h(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"generate-license-file"})," CLI will resolve all of the licenses of your third-party dependencies and write them to a file on the disk."]}),"\n",(0,s.jsx)(n.h2,{id:"--input",children:"--input"}),"\n",(0,s.jsx)(l.Z,{type:"string",isRequired:!0,aliases:["-i"]}),"\n",(0,s.jsxs)(n.p,{children:["The input parameter is required and needs be a path to the ",(0,s.jsx)(n.code,{children:"package.json"})," of the project. It can be a relative or absolute path."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --input ./myProject/package.json\n\nnpx generate-license-file --input C:/myProject/package.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the path contains a space, then wrap it in double-quotes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'npx generate-license-file --input "./my project/package.json"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the ",(0,s.jsx)(n.code,{children:"-i"})," alias."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file -i ./myProject/package.json\n"})}),"\n",(0,s.jsx)(n.h2,{id:"--output",children:"--output"}),"\n",(0,s.jsx)(l.Z,{type:"string",isRequired:!0,aliases:["-o"]}),"\n",(0,s.jsx)(n.p,{children:"The output parameter is required and needs be a path to desired output file. It can be a relative or absolute path."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --output ./third-party-licenses.txt\n\nnpx generate-license-file --output C:/third-party-licenses.txt\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the path contains a space, then wrap it in double-quotes."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'npx generate-license-file --output "./my project/third-party-licenses.txt"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the ",(0,s.jsx)(n.code,{children:"-o"})," alias."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file -o ./myProject/third-party-licenses.txt\n"})}),"\n",(0,s.jsx)(n.h2,{id:"--overwrite",children:"--overwrite"}),"\n",(0,s.jsx)(l.Z,{type:"boolean"}),"\n",(0,s.jsx)(n.p,{children:"If a file already exists at the provided output path, then the CLI won't overwrite it by default."}),"\n",(0,s.jsxs)(n.p,{children:["If you'd like the CLI to overwrite existing files then provide the ",(0,s.jsx)(n.code,{children:"--overwrite"})," flag"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --overwrite\n"})}),"\n",(0,s.jsx)(n.h2,{id:"--eol",children:"--eol"}),"\n",(0,s.jsx)(l.Z,{type:"string"}),"\n",(0,s.jsx)(n.p,{children:"By default the CLI writes files to disk using the default line endings of the current machine."}),"\n",(0,s.jsxs)(n.p,{children:["If you want the output file to use a specific line ending then you can provide either ",(0,s.jsx)(n.code,{children:"lf"})," or ",(0,s.jsx)(n.code,{children:"crlf"})," with the ",(0,s.jsx)(n.code,{children:"--eol"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --eol lf\n\nnpx generate-license-file --eol crlf\n"})}),"\n",(0,s.jsx)(n.h2,{id:"--ci",children:"--ci"}),"\n",(0,s.jsx)(l.Z,{type:"boolean"}),"\n",(0,s.jsx)(n.p,{children:"When using the the CLI locally, it will prompt you for inputs if you forget to supply one that's required."}),"\n",(0,s.jsxs)(n.p,{children:["To stop the CLI from trying to show the prompts in a CI/CD environment (and instead error/fail-fast), you can provide the ",(0,s.jsx)(n.code,{children:"--ci"})," flag."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --ci\n"})}),"\n",(0,s.jsx)(n.h2,{id:"--no-spinner",children:"--no-spinner"}),"\n",(0,s.jsx)(l.Z,{type:"boolean"}),"\n",(0,s.jsx)(n.p,{children:"The CLI shows a spinner in the terminal while it's doing it's work."}),"\n",(0,s.jsxs)(n.p,{children:["If the spinner doesn't play nicely with your local or CI/CD environments then you can pass the ",(0,s.jsx)(n.code,{children:"--no-spinner"})," flag to make it only log standard text messages."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --no-spinner\n"})}),"\n",(0,s.jsx)(n.h2,{id:"--version",children:"--version"}),"\n",(0,s.jsx)(l.Z,{type:"boolean",aliases:["-v"]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the ",(0,s.jsx)(n.code,{children:"--version"})," flag to the CLI to make it log out which version you have installed."]}),"\n",(0,s.jsx)(n.p,{children:"When this flag is given, the CLI will not do anything else, and no files will be generated."}),"\n",(0,s.jsxs)(n.p,{children:["You can also pass in the alias ",(0,s.jsx)(n.code,{children:"-v"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx generate-license-file --version\n\nnpx generate-license-file -v\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9482:(e,n,i)=>{i.d(n,{Z:()=>l});var s=i(3786),t=(i(7294),i(5893));const l=e=>{const n=(e?.aliases?.length??0)>0,i=1===e.aliases?.length?"Alias":"Aliases",s=(e.aliases??[]).map(((e,n)=>(0,t.jsxs)(t.Fragment,{children:[0!==n&&(0,t.jsx)(t.Fragment,{children:", "}),(0,t.jsx)("code",{children:e})]})));return(0,t.jsx)(r,{children:(0,t.jsxs)(a,{children:[(0,t.jsxs)(o,{children:[(0,t.jsx)("b",{children:"Type:"})," ",(0,t.jsx)("code",{children:e.type})]}),(0,t.jsxs)(o,{children:[(0,t.jsx)("b",{children:"Is required:"})," ",(0,t.jsx)("code",{children:e.isRequired?"true":"false"})]}),n&&(0,t.jsxs)(o,{children:[(0,t.jsxs)("b",{children:[i,":"]})," ",s]})]})})},r=s.Z.table`
  border: 0;
`,a=s.Z.tr`
  border: 0;
`,o=s.Z.td`
  border: 0;
`},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var s=i(7294);const t={},l=s.createContext(t);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);