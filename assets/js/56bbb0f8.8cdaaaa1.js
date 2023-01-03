"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[504],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var l=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=l.createContext({}),o=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},m=function(t){var e=o(t.components);return l.createElement(p.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),h=o(a),c=r,k=h["".concat(p,".").concat(c)]||h[c]||u[c]||i;return a?l.createElement(k,n(n({ref:e},m),{},{components:a})):l.createElement(k,n({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,n=new Array(i);n[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[h]="string"==typeof t?t:r,n[1]=s;for(var o=2;o<i;o++)n[o]=a[o];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3329:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var l=a(7462),r=a(3366),i=(a(7294),a(3905)),n=["components"],s={author:"Tomasz Godzik",title:"Metals v0.8.1 - Cobalt",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},p=void 0,o={permalink:"/metals/blog/2020/02/26/cobalt",source:"@site/blog/2020-02-26-cobalt.md",title:"Metals v0.8.1 - Cobalt",description:"We are excited to announce the release of Metals v0.8.1. This release includes a",date:"2020-02-26T00:00:00.000Z",formattedDate:"February 26, 2020",tags:[],readingTime:8.75,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.8.1 - Cobalt",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.8.3 - Cobalt",permalink:"/metals/blog/2020/03/19/cobalt"},nextItem:{title:"Metals v0.8.0 - Cobalt",permalink:"/metals/blog/2020/01/10/cobalt"}},m={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Insert missing abstract members",id:"insert-missing-abstract-members",level:2},{value:"New file provider",id:"new-file-provider",level:2},{value:"Enable rename preview for Visual Studio Code",id:"enable-rename-preview-for-visual-studio-code",level:2},{value:"Debug in Emacs",id:"debug-in-emacs",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.8.1 (2020-02-26)",id:"v081-2020-02-26",level:2}],u={toc:h};function c(t){var e=t.components,a=(0,r.Z)(t,n);return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We are excited to announce the release of Metals v0.8.1. This release includes a\nlarge number of bug fixes and some new features."),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Commits since last release"),(0,i.kt)("td",{align:"center"},"313")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Merged PRs"),(0,i.kt)("td",{align:"center"},"100")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Contributors"),(0,i.kt)("td",{align:"center"},"19")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Closed issues"),(0,i.kt)("td",{align:"center"},"52")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"New features"),(0,i.kt)("td",{align:"center"},"2")))),(0,i.kt)("p",null,"For full details: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/19?closed=1"},"https://github.com/scalameta/metals/milestone/19?closed=1")),(0,i.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,i.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,i.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,i.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/")," and\ngive Metals a try!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"insert missing abstract members"),(0,i.kt)("li",{parentName:"ul"},"new file provider"),(0,i.kt)("li",{parentName:"ul"},"enable rename preview for Visual Studio Code"),(0,i.kt)("li",{parentName:"ul"},"debug and run working in Emacs")),(0,i.kt)("h2",{id:"insert-missing-abstract-members"},"Insert missing abstract members"),(0,i.kt)("p",null,"Thanks to yet again amazing work by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tanishiking"},"tanishiking"),", we now support the quick fix code\naction for implementing abstract class members. This code action is available in\ncase of errors and works in the same way as the recent\n",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/blog/#completion-to-add-all-abstract-members"},'"Implement all members"'),"\ncompletion. It will add any missing abstract members at the top of the class\nwith the default implementation of ???."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/9353584/75405616-81047f00-5951-11ea-9972-a12e25b1746a.gif",alt:"action"})),(0,i.kt)("h2",{id:"new-file-provider"},"New file provider"),(0,i.kt)("p",null,"In the last release we added support for worksheets, which are an easy way to\nquickly evaluate some code. To create a new worksheet you need to create a file\nwith the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".worksheet.sc"),", which was not that easy to figure out. To\nfix that situation, thanks to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alekseiAlefirov"},"alekseiAlefirov"),", we now have a menu to\ncreate different types of new files including classes, traits, object, package\nobjects and of course worksheets. At this time it's only available in the Visual\nStudio Code and ",(0,i.kt)("inlineCode",{parentName:"p"},"coc-metals")," extensions."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10850363/73563467-adfe6880-445d-11ea-89f6-a9a6398034da.gif",alt:"new-file-provider"})),(0,i.kt)("p",null,"You can also just use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"Metals: New Scala File"),", which will use the\ncurrent file's directory and create the new file there. And additionally, when\nusing a relative path like ",(0,i.kt)("inlineCode",{parentName:"p"},"a/b/C")," Metals will create all needed directories and\nadd a proper package declaration to the new file."),(0,i.kt)("h2",{id:"enable-rename-preview-for-visual-studio-code"},"Enable rename preview for Visual Studio Code"),(0,i.kt)("p",null,"Rename previews were added in the last Visual Studio Code\n",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/updates/v1_42#_rename-preview"},"release"),", which\nenable users to see what will be changed when a rename is executed. Due to\noptimization and UX reasons Metals renamed symbols in closed files in the\nbackground without informing the editor. However, this also causes the previews\nto be misleading, since they might not be complete."),(0,i.kt)("p",null,"To fix that situation we now send all the files to VS Code, which then is able\nto display the preview. We do it, however, for up to 300 files, which threshold\nwas experimentally estimated. When the number of files reaches over that number,\nwe revert to the old behavior of not opening closed files. The reason for this\nis that in some cases for larger numbers of files the editor could hang and\nbecome unresponsive."),(0,i.kt)("h2",{id:"debug-in-emacs"},"Debug in Emacs"),(0,i.kt)("p",null,"In the last release run and debug support was only available for Visual Studio\nCode, but thanks to amazing work by the contributors it is now possible to use\nit in Emacs via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/emacs-lsp/lsp-mode"},"lsp-mode's")," metals\nsettings and dap-mode."),(0,i.kt)("h2",{id:"other-changes"},"Other changes"),(0,i.kt)("p",null,"This release includes mostly fixes and minor features, which is due to the large\nscope of the last one. We concentrated this last month on stability and making\nsure everything is up to scratch. Those minor changes included:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"use bloop.export-jar-classifiers property when importing the build from sbt"),(0,i.kt)("li",{parentName:"ul"},"ignore bad compiler options passed by users in order not to break completions"),(0,i.kt)("li",{parentName:"ul"},"add an override for the Bloop plugin version and promote it to LSP settings"),(0,i.kt)("li",{parentName:"ul"},"fix onTypeFormatting when used in top level multi-line strings"),(0,i.kt)("li",{parentName:"ul"},"fix issues when ",(0,i.kt)("inlineCode",{parentName:"li"},"go to implementation")," resolves local symbols"),(0,i.kt)("li",{parentName:"ul"},"change the non-fatal jar error to debug rather than log warning"),(0,i.kt)("li",{parentName:"ul"},"add support for worksheets without a build target by defaulting to Metals\nScala version"),(0,i.kt)("li",{parentName:"ul"},"rename file only if the renamed symbol is directly enclosed by a package"),(0,i.kt)("li",{parentName:"ul"},"fix exhaustive match completion on Java enums"),(0,i.kt)("li",{parentName:"ul"},"use workspace level Gradle wrapper if present for bloopInstall"),(0,i.kt)("li",{parentName:"ul"},"fix onTypeFormatting issue with multiple pipes on a line"),(0,i.kt)("li",{parentName:"ul"},"fix rename issues with backticks"),(0,i.kt)("li",{parentName:"ul"},"add documentation on how to use proxies and mirrors")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"Big thanks to everybody who contributed to this release!"),(0,i.kt)("p",null,"Again, we have some new contributors and a lot of returning ones!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.8.0..v0.8.1\nOlafur Pall Geirsson\nTomasz Godzik\nScala Steward\nChris Kipp\nGabriele Petronella\nRikito Taniguchi\nAleksei Alefirov\nJakub Koz\u0142owski\nArthur McGibbon\nCarlos Rodriguez Guette\nDanil Bykov\nJakob Odersky\nJoris\nMartin Duhem\nRuslans Tarasovs\nWin Wang\njoriscode\nKei Sunagawa\nZainab Ali\n")),(0,i.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,i.kt)("h2",{id:"v081-2020-02-26"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.8.1"},"v0.8.1")," (2020-02-26)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.8.0...v0.8.1"},"Full Changelog")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add openFilesOnRenameProvider to experimental\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1463"},"#","1463"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Add new LSP extension 'metals/pickInput' to implement the \"Create Scala file\"\ncommand ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1447"},"#","1447"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alekseiAlefirov"},"alekseiAlefirov"),")"),(0,i.kt)("li",{parentName:"ul"},"Restart the Bloop server for Pants users if it's running a known old version\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1460"},"#","1460"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Polishing touches on Pants integration\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1459"},"#","1459"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix issues discovered while testing out IntelliJ integration.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1457"},"#","1457"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"add in checkmark for debug on emacs\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1458"},"#","1458"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Make use of latest Pants and Bloop improvements\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1452"},"#","1452"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"add properties back in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1455"},"#","1455"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Record visited Scala files to make sure they are not duplicated\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1451"},"#","1451"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Move some properties to clientExperimentalCapabilities\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1414"},"#","1414"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Use proper range for references with backticks\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1430"},"#","1430"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Make sure we properly handle overflow events even if the path is null\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1435"},"#","1435"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},'Rename "link" subcommand to "switch"\n',(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1446"},"#","1446"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix typo: s/lastVisistedParentTrees/lastVisitedParentTrees/\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1444"},"#","1444"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-munit to 0.5.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1443"},"#","1443"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-munit to 0.5.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1442"},"#","1442"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Add missing config in Eglot\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1441"},"#","1441"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/carlosrogue"},"carlosrogue"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scalafmt-dynamic to 2.4.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1440"},"#","1440"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Mark most often failing tests as flaky and fix DefinitionLspSuite test\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1439"},"#","1439"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scalafmt-dynamic to 2.4.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1437"},"#","1437"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix download URL for Coursier command-line interface\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1436"},"#","1436"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/keiSunagawa"},"keiSunagawa"),")"),(0,i.kt)("li",{parentName:"ul"},"Document emacs integration with debug adapter and tree view protocol\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1438"},"#","1438"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zainab-ali"},"zainab-ali"),")"),(0,i.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.0-RC1-62-d098adda\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1434"},"#","1434"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Refactor: split Completions.scala into smaller files\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1423"},"#","1423"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.0-RC1-56-a2040035\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1429"},"#","1429"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix issue with multiple pipes in string\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1427"},"#","1427"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Return all rename file changes up to a threshold\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1405"},"#","1405"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 6.2.3\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1426"},"#","1426"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.9.8\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1425"},"#","1425"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Send stackTraces as paths rather than URIs\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1418"},"#","1418"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/danilbykov"},"danilbykov"),")"),(0,i.kt)("li",{parentName:"ul"},"Revamp the BloopPants command-line interface.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1420"},"#","1420"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Update ujson to 0.9.9 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1419"},"#","1419"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"CodeAction: insert missing abstract members\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1379"},"#","1379"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"Don't insert parentheses when importing\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1284"},"#","1284"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubukoz"},"kubukoz"),")"),(0,i.kt)("li",{parentName:"ul"},"Change config options to match coc\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1390"},"#","1390"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Use workspace level Gradle wrapper if present\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1412"},"#","1412"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Arthurm1"},"Arthurm1"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-ci-release to 1.5.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1408"},"#","1408"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update jsoup to 1.12.2 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1410"},"#","1410"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Remove check for focused document on non-supporting editors\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1407"},"#","1407"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Added Command to create new worksheet\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1339"},"#","1339"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alekseiAlefirov"},"alekseiAlefirov"),")"),(0,i.kt)("li",{parentName:"ul"},"Add in tree view protocol docs for vim\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1392"},"#","1392"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Improve logic to merge Pants targets.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1400"},"#","1400"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Update pprint to 0.5.9 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1403"},"#","1403"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 6.2.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1401"},"#","1401"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Do not accept empty string values from the lsp settings\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1397"},"#","1397"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Enable verbose sbt loggers in CI.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1399"},"#","1399"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix exhaustive match completion on Java enums\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1393"},"#","1393"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Duhemm"},"Duhemm"),")"),(0,i.kt)("li",{parentName:"ul"},"Update munit, sbt-munit to 0.4.5\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1395"},"#","1395"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Add .scalafmt.conf symbolic link when exporting Pants build.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1386"},"#","1386"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Avoid long filename for Pants output file.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1385"},"#","1385"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Update interface to 0.0.18\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1383"},"#","1383"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.3.8\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1384"},"#","1384"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Rename file only if renamed symbol is directly enclosed by a package (closes\n#1380) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1382"},"#","1382"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubukoz"},"kubukoz"),")"),(0,i.kt)("li",{parentName:"ul"},"Several improvements to Pants integration\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1375"},"#","1375"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Include ScalaBuildTarget in ScalaTarget\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1374"},"#","1374"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Upgrade bloop-launcher to nightly version of Bloop.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1371"},"#","1371"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Mark flaky tests as flaky.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1373"},"#","1373"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 6.2.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1372"},"#","1372"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Upgrade to the latest junit-interface.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1368"},"#","1368"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),") Cannot read PR 1352"),(0,i.kt)("li",{parentName:"ul"},"Add support for rambo worksheets without build target\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1364"},"#","1364"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add documentation for using proxy and mirrors\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1356"},"#","1356"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Merge pull request #1363 from olafurpg/pants-resources\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1363"},"#","1363"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),") Cannot read PR 1361"),(0,i.kt)("li",{parentName:"ul"},"Start recording test reports with sbt-munit\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1360"},"#","1360"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Update munit to 0.4.3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1358"},"#","1358"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix testAsync -> test after a logical merge conflict\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1357"},"#","1357"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Do not accept synthetic symbol with matching qualifier\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1338"},"#","1338"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Replace utest with MUnit\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1277"},"#","1277"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,i.kt)("li",{parentName:"ul"},"Update interface to 0.0.17\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1355"},"#","1355"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update jol-core to 0.10\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1351"},"#","1351"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update nuprocess to 1.2.6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1350"},"#","1350"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Several Pants fixes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1349"},"#","1349"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Copy jars from Pants export-classpath into Bloop directory.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1348"},"#","1348"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Resolve uri from path properly for setting breakpoints\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1346"},"#","1346"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update Nu Process to 1.2.5 and directory watcher to 0.9.9\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1340"},"#","1340"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 6.2.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1344"},"#","1344"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},'Updated "unsupported features"\n',(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1343"},"#","1343"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rtar"},"rtar"),")"),(0,i.kt)("li",{parentName:"ul"},"fix logic for detected if bloop-sbt is already installed\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1342"},"#","1342"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Add caching to github actions for Cousier\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1276"},"#","1276"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Mention debugging in contributing docs\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1337"},"#","1337"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kubukoz"},"kubukoz"),")"),(0,i.kt)("li",{parentName:"ul"},"Make sure the path on windows is a proper URI\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1335"},"#","1335"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Change last require in PC to warning\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1333"},"#","1333"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Change the non-fatal jar error to debug rather than log warning\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1331"},"#","1331"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix issues when go to implementation resolves local symbols\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1330"},"#","1330"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Use actual mill version in predef\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1307"},"#","1307"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jodersky"},"jodersky"),")"),(0,i.kt)("li",{parentName:"ul"},"Update recommended mappings with the latest\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1289"},"#","1289"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Add in fix for onTypeFormatting on top level multi-line strings\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1329"},"#","1329"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Update lz4-java to 1.7.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1327"},"#","1327"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Add an override for build tool plugin version and promote LSP settings\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1310"},"#","1310"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Change require to warning for the presentation compiler\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1324"},"#","1324"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix version of sbt-metals for pre 0.8.0 instructions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1323"},"#","1323"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.3.7\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1319"},"#","1319"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Typo ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1318"},"#","1318"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/joriscode"},"joriscode"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix worksheet gif for cobalt release notes to show proper extension\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1314"},"#","1314"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update versions in issue templates\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1312"},"#","1312"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Use bloop.export-jar-classifiers property\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1212"},"#","1212"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/joriscode"},"joriscode"),")"),(0,i.kt)("li",{parentName:"ul"},"Update screen-record of Scaladoc auto-completion in v0.8.0 release-note.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1309"},"#","1309"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"Update ujson to 0.9.8 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1299"},"#","1299"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Link authors' github accounts for release notes\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1295"},"#","1295"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Remove nix publishing and add a reminder to update version\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1294"},"#","1294"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add release notes for the epic version of Metals :D\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1278"},"#","1278"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}c.isMDXComponent=!0}}]);