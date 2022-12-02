"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),l=["components"],i={author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.3 - Iron",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},s=void 0,c={permalink:"/metals/blog/2018/12/06/iron",source:"@site/blog/2018-12-06-iron.md",title:"Metals v0.3 - Iron",description:'We are excited to announce the release of Metals v0.3, codename "Iron" \ud83c\udf89 Metals',date:"2018-12-06T00:00:00.000Z",formattedDate:"December 6, 2018",tags:[],readingTime:2.265,truncated:!0,authors:[{name:"\xd3lafur P\xe1ll Geirsson",url:"https://twitter.com/olafurpg",imageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"}],frontMatter:{author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.3 - Iron",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},prevItem:{title:"Fast goto definition with low memory footprint",permalink:"/metals/blog/2018/12/12/fast-goto-definition"}},u={authorsImageUrls:[void 0]},p=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Simple installation",id:"simple-installation",children:[],level:2},{value:"Accurate diagnostics",id:"accurate-diagnostics",children:[],level:2},{value:"Goto definition",id:"goto-definition",children:[],level:2},{value:"Text editors",id:"text-editors",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2}],m={toc:p};function d(e){var t=e.components,a=(0,o.Z)(e,l);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'We are excited to announce the release of Metals v0.3, codename "Iron" \ud83c\udf89 Metals\nis a language server for Scala.'),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"simple installation"),(0,n.kt)("li",{parentName:"ul"},"accurate diagnostics"),(0,n.kt)("li",{parentName:"ul"},"goto definition"),(0,n.kt)("li",{parentName:"ul"},"text editors: Visual Studio Code, Atom, Vim and Sublime Text"),(0,n.kt)("li",{parentName:"ul"},"no completions")),(0,n.kt)("p",null,"Check out the website and give Metals a try: ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/")),(0,n.kt)("h2",{id:"simple-installation"},"Simple installation"),(0,n.kt)("p",null,"A useful IDE needs to understand your project's directory structure and library\ndependencies. Metals can now import sbt and Bloop builds with the following\nworkflow"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open a directory in your editor"),(0,n.kt)("li",{parentName:"ul"},"Click on a button to import the build"),(0,n.kt)("li",{parentName:"ul"},"Wait for the build import step to complete, this may take a while"),(0,n.kt)("li",{parentName:"ul"},"Enjoy IDE features \ud83d\udc4c"),(0,n.kt)("li",{parentName:"ul"},"When your build changes, Metals asks you to import again.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/49659280-26c58880-fa44-11e8-92e6-b3df984fbdd2.png",alt:"vscode-import-build"})),(0,n.kt)("h2",{id:"accurate-diagnostics"},"Accurate diagnostics"),(0,n.kt)("p",null,"Once your build has been imported, Metals triggers compilation on file save and\npublishes compiler errors as red squiggles in your editor. By construction, this\napproach avoids the situation where users see different errors in their editor\nand the build tool."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/49591682-666e7080-f96f-11e8-9fc0-e48bbe13187d.png",alt:"accurate-diagnostics"})),(0,n.kt)("h2",{id:"goto-definition"},"Goto definition"),(0,n.kt)("p",null,"Metals supports goto definition for project sources and Scala+Java library\ndependencies. Navigation works even when the open buffer contains syntax errors."),(0,n.kt)("p",null,"Navigation in Metals is fast and consumes little memory. For a case study\nproject, Metals indexes 800k lines of Scala code per second and the resulting\nsearch index requires 25Mb RAM per million lines of code."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/49591684-67070700-f96f-11e8-873d-90c40480528b.gif",alt:"goto-definition"})),(0,n.kt)("h2",{id:"text-editors"},"Text editors"),(0,n.kt)("p",null,"Thanks to the\n",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/"},"Language Server Protocol"),",\nMetals works multiple text editors. The following editors have been validated to\nwork with Metals and the installation steps have been documented on the Metals\nwebsite."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Overview: ",(0,n.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/docs/editors/overview.html"},"https://scalameta.org/metals/docs/editors/overview.html")),(0,n.kt)("li",{parentName:"ul"},"Visual Studio Code: ",(0,n.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/docs/editors/vscode.html"},"https://scalameta.org/metals/docs/editors/vscode.html")),(0,n.kt)("li",{parentName:"ul"},"Atom: ",(0,n.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/docs/editors/atom.html"},"https://scalameta.org/metals/docs/editors/atom.html")),(0,n.kt)("li",{parentName:"ul"},"Vim: ",(0,n.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/docs/editors/vim.html"},"https://scalameta.org/metals/docs/editors/vim.html")),(0,n.kt)("li",{parentName:"ul"},"Sublime Text: ",(0,n.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/docs/editors/sublime.html"},"https://scalameta.org/metals/docs/editors/sublime.html")),(0,n.kt)("li",{parentName:"ul"},"guide to integrate new editors:\n",(0,n.kt)("a",{parentName:"li",href:"https://scalameta.org/metals/docs/editors/new-editor.html"},"https://scalameta.org/metals/docs/editors/new-editor.html"))),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to all the contributors who contributed to this release. In\nparticular, I want to thank the following people:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Jorge Vicente Cantero (@jvican) for his great work in Bloop and helping out\nwith unblocking a lot of Metals issues on the build side. Most the heavy\nlifting in "simple installation" is provided by Bloop.'),(0,n.kt)("li",{parentName:"ul"},"Gabriele Petronella (@gabro) for his great work on the VS Code plugin and\nheroic code reviews of multiple large PRs (of which one that was +12,645\n\u22121,126!!)."),(0,n.kt)("li",{parentName:"ul"},"Alexey Alekhin (@laughedelic) for his great work on the Atom ",(0,n.kt)("inlineCode",{parentName:"li"},"ide-scala"),"\npackage."),(0,n.kt)("li",{parentName:"ul"},"Eugene Burmako (@xeno-by) for close collaboration on Scalameta and SemanticDB\nthat made the features in this release possible."),(0,n.kt)("li",{parentName:"ul"},"Justin Kaeser (@jastice) from Jetbrains for collaboration on the Build Server\nProtocol specification and bsp4j library.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"$ git shortlog -sn --no-merges v0.1.0..v0.3.1\n\xd3lafur P\xe1ll Geirsson\nGabriele Petronella\nCorey O'Connor\nPavel Logvinov\nCody Allen\n")))}d.isMDXComponent=!0}}]);