"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var r=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=m(a),c=l,d=u["".concat(o,".").concat(c)]||u[c]||h[c]||n;return a?r.createElement(d,i(i({ref:e},p),{},{components:a})):r.createElement(d,i({ref:e},p))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[u]="string"==typeof t?t:l,i[1]=s;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6625:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=a(7462),l=a(3366),n=(a(7294),a(3905)),i=["components"],s={author:"Tomasz Godzik",title:"Metals v0.11.1 - Aluminium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},o=void 0,m={permalink:"/metals/blog/2022/01/17/aluminium",source:"@site/blog/2022-01-17-aluminium.md",title:"Metals v0.11.1 - Aluminium",description:"Metals v0.11.1 is a bugfix release needed to fix a couple of performance",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[],readingTime:1.955,truncated:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.11.1 - Aluminium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Towards better releases",permalink:"/metals/blog/2022/02/23/towards-better-releases"},nextItem:{title:"Metals v0.11.0 - Aluminium",permalink:"/metals/blog/2022/01/12/aluminium"}},p={authorsImageUrls:[void 0]},u=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2},{value:"Merged PRs",id:"merged-prs",children:[],level:2},{value:"v0.11.1 (2022-01-17)",id:"v0111-2022-01-17",children:[],level:2}],h={toc:u};function c(t){var e=t.components,a=(0,l.Z)(t,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Metals v0.11.1 is a bugfix release needed to fix a couple of performance\nregressions caused by some of the recent changes."),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"Commits since last release"),(0,n.kt)("td",{align:"center"},"43")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Merged PRs"),(0,n.kt)("td",{align:"center"},"21")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Contributors"),(0,n.kt)("td",{align:"center"},"6")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Closed issues"),(0,n.kt)("td",{align:"center"},"3")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"New features"),(0,n.kt)("td",{align:"center"},"0")))),(0,n.kt)("p",null,"For full details: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/46?closed=1"},"https://github.com/scalameta/metals/milestone/46?closed=1")),(0,n.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,n.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,n.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,n.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reenabled test explorer as the default in Visual Studio Code (thanks\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad")," for the quick fix!)")),(0,n.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix test explorer performance issues. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad")),(0,n.kt)("li",{parentName:"ul"},"Fix performance in large files. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik")),(0,n.kt)("li",{parentName:"ul"},"fix user config for java formatting. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1")),(0,n.kt)("li",{parentName:"ul"},"Call javap with ",(0,n.kt)("inlineCode",{parentName:"li"},"-private")," flag. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/durban"},"durban")),(0,n.kt)("li",{parentName:"ul"},"Fix issues when using Metals analyze with inner classes. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/durban"},"durban"))),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.11.0..v0.11.1\nScala Steward\nTomasz Godzik\nKamil Podsiadlo\nVadim Chelyshov\nArthur McGibbon\nDaniel Urban\n")),(0,n.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,n.kt)("h2",{id:"v0111-2022-01-17"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.11.1"},"v0.11.1")," (2022-01-17)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.11.0...v0.11.1"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Revert scribe update ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3529"},"#","3529"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"refactor: Print path for which snapshot couldn't be loaded\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3525"},"#","3525"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,n.kt)("li",{parentName:"ul"},"docs: Test Explorer ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3528"},"#","3528"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix ClassFinder bug with inner classes\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3522"},"#","3522"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/durban"},"durban"),")"),(0,n.kt)("li",{parentName:"ul"},"Call javap with -private flag\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3523"},"#","3523"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/durban"},"durban"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ammonite-util to 2.5.1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3516"},"#","3516"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix test explorer performance issues\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3510"},"#","3510"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scalafix-interfaces to 0.9.34\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3521"},"#","3521"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update flyway-core to 8.4.1\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3520"},"#","3520"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update scribe, scribe-file, scribe-slf4j to 3.6.9\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3519"},"#","3519"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ujson to 1.4.4 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3518"},"#","3518"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update mill-contrib-testng to 0.10.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3517"},"#","3517"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.9.16\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3514"},"#","3514"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Update sbt-scalafix, scalafix-interfaces to 0.9.34\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3513"},"#","3513"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,n.kt)("li",{parentName:"ul"},"Use ArraySeq instead of List for Diffutils\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3512"},"#","3512"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"fix user config for java formatting\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3504"},"#","3504"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,n.kt)("li",{parentName:"ul"},"[JavaInteractiveSemanticdb]"," Fix Jdk version parsing\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3505"},"#","3505"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"JavaInteractiveSemanticDb - plugin version fix\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3499"},"#","3499"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"[Github]"," switch to the latest release in bug reports and workflows\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3502"},"#","3502"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,n.kt)("li",{parentName:"ul"},"Add release notes for Metals 0.11.0\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3493"},"#","3493"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove workaround for the wrong Java semanticdb md5 hash\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3498"},"#","3498"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}c.isMDXComponent=!0}}]);