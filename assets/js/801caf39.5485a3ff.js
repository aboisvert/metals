"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5561],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=l.createContext({}),p=function(t){var e=l.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,d=c["".concat(o,".").concat(u)]||c[u]||h[u]||i;return a?l.createElement(d,r(r({ref:e},m),{},{components:a})):l.createElement(d,r({ref:e},m))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:n,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6049:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var l=a(7462),n=a(3366),i=(a(7294),a(3905)),r=["components"],s={author:"Tomasz Godzik",title:"Metals v0.10.3 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},o=void 0,p={permalink:"/metals/blog/2021/05/17/tungsten",source:"@site/blog/2021-05-17-tungsten.md",title:"Metals v0.10.3 - Tungsten",description:"We're happy to announce the release of Metals v0.10.3, which brings support for",date:"2021-05-17T00:00:00.000Z",formattedDate:"May 17, 2021",tags:[],readingTime:4.73,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.10.3 - Tungsten",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.10.4 - Tungsten",permalink:"/metals/blog/2021/05/31/tungsten"},nextItem:{title:"Metals v0.10.2 - Tungsten",permalink:"/metals/blog/2021/04/20/tungsten"}},m={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Extract class code action",id:"extract-class-code-action",level:2},{value:"Rename file as class",id:"rename-file-as-class",level:2},{value:"Scala 3 Auto imports in completions and code actions",id:"scala-3-auto-imports-in-completions-and-code-actions",level:2},{value:"Support same names in different build targets",id:"support-same-names-in-different-build-targets",level:3},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.10.3 (2021-05-17)",id:"v0103-2021-05-17",level:2}],h={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,r);return(0,i.kt)("wrapper",(0,l.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're happy to announce the release of Metals v0.10.3, which brings support for\nthe long awaited Scala 3.0.0 version together with some important improvements."),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Commits since last release"),(0,i.kt)("td",{align:"center"},"104")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Merged PRs"),(0,i.kt)("td",{align:"center"},"49")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Contributors"),(0,i.kt)("td",{align:"center"},"6")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Closed issues"),(0,i.kt)("td",{align:"center"},"12")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"New features"),(0,i.kt)("td",{align:"center"},"6")))),(0,i.kt)("p",null,"For full details: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/38?closed=1"},"https://github.com/scalameta/metals/milestone/38?closed=1")),(0,i.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text and Eclipse. Metals is developed at the\n",(0,i.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,i.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,i.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Scala 3.0.0 support!"),(0,i.kt)("li",{parentName:"ul"},"Scala 2.13.6 along with ",(0,i.kt)("inlineCode",{parentName:"li"},"-Xsource:3")," support."),(0,i.kt)("li",{parentName:"ul"},"Extract class code action."),(0,i.kt)("li",{parentName:"ul"},"Rename file as class."),(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Auto imports in completions and code actions."),(0,i.kt)("li",{parentName:"ul"},"Support same names in different build targets.")),(0,i.kt)("h2",{id:"extract-class-code-action"},"Extract class code action"),(0,i.kt)("p",null,"Due to the great work by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Giggiux"},"@Giggiux")," Metals now\nprovides a new ",(0,i.kt)("inlineCode",{parentName:"p"},"Extract to file")," code action, which is available when there are\nmultiple definitions in the source file. This works for classes, traits, enums,\nand objects. The code action will not show if the definition we are extracting\nis or extends a ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed")," definition."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/dKKkLcL.gif",alt:"gif1"})),(0,i.kt)("p",null,"The extraction happens via a code action on the definition's name, it will also\nextract any relevant package definition, imports, and, if available, the\ncompanion."),(0,i.kt)("h2",{id:"rename-file-as-class"},"Rename file as class"),(0,i.kt)("p",null,"It is also now possible when there is only a single definition in a file that\ndoesn't have the same name as the definition, to quickly rename the file\naccording to its content."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/pUADnMn.gif",alt:"gif2"})),(0,i.kt)("h2",{id:"scala-3-auto-imports-in-completions-and-code-actions"},"[Scala 3]"," Auto imports in completions and code actions"),(0,i.kt)("p",null,"Previously, the experience of writing Scala 3 code might be spoiled because\nthese usual features weren't implemented for Scala 3 in Metals. We are happy to\nsay that there is no more need to write imports by hand and remember the exact\npath to the symbol. Now, completions in Scala 3 sources provide symbols from the\nworkspace and libraries and their application automatically adds the necessary\nimport. Code action ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoImport")," also started working."),(0,i.kt)("p",null,"Enjoy writing Scala 3!"),(0,i.kt)("p",null,"This required some huge amounts of effort and is working thanks to\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dos65"},"dos65"),")."),(0,i.kt)("h3",{id:"support-same-names-in-different-build-targets"},"Support same names in different build targets"),(0,i.kt)("p",null,"This change fixes navigation issues that previously happened in case of having\nclashing names across libraries and projects. An additional thing you might\nnotice with this change is the presence of library names in ",(0,i.kt)("inlineCode",{parentName:"p"},".metals/readonly"),"\ndirectory. Previously, for example, if jump into ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," the file was extracted\ninto ",(0,i.kt)("inlineCode",{parentName:"p"},"./metals/readonly/scala/Predef.scala"),"."),(0,i.kt)("p",null,"Now it will be\n",(0,i.kt)("inlineCode",{parentName:"p"},"./metals/readonly/dependencies/scala-library-$scalaVersion-sources.jar/scala/Predef.scala")),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Support names with dots for "Implement all members" code action.'),(0,i.kt)("li",{parentName:"ul"},"Fix invalid auto imports with wrong prefix."),(0,i.kt)("li",{parentName:"ul"},'Fix flaky "Organize imports" behaviour.')),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.10.2..v0.10.3\nTomasz Godzik\nLuigi Frunzio\nVadim Chelyshov\nChris Kipp\nAmaal Ali\nEvgeny Kurnevsky\n")),(0,i.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,i.kt)("h2",{id:"v0103-2021-05-17"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.10.3"},"v0.10.3")," (2021-05-17)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.10.2...v0.10.3"},"Full Changelog")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add support for Scala 2.13.6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2805"},"#","2805"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"[Scala3]"," Completions - fix ",(0,i.kt)("inlineCode",{parentName:"li"},"Renamed")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"specifyOwner")," Autoimports\napplication ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2804"},"#","2804"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix field ordering in completions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2803"},"#","2803"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"[Scala3]"," Completions - do not backtick NamedArg completion values\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2802"},"#","2802"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Forward dialect to ScalaMtags to avoid parsing fallback\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2799"},"#","2799"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Ignore NoSuchFileException since it only comes from badly configured jar\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2797"},"#","2797"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"SemanticdbDefinition - use correct dialect\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2780"},"#","2780"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-jmh to 0.4.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2794"},"#","2794"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Remove most soft keywords from being backticked.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2796"},"#","2796"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update requests to 0.6.9\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2786"},"#","2786"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update geny to 0.6.10 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2784"},"#","2784"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update ujson to 1.3.13 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2787"},"#","2787"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update mill-contrib-testng to 0.9.7\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2785"},"#","2785"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update interface to 1.0.4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2788"},"#","2788"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 7.9.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2789"},"#","2789"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.5.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2791"},"#","2791"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.4.17\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2793"},"#","2793"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scala-java8-compat to 1.0.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2790"},"#","2790"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update mdoc, sbt-mdoc to 2.2.21\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2792"},"#","2792"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Delete unused ",(0,i.kt)("inlineCode",{parentName:"li"},"Scala3ToplevelMtags"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2782"},"#","2782"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Add support for Scala 3.0.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2779"},"#","2779"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Scala3 - AutoImports and completions from workspace\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2728"},"#","2728"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Code action to move classes to their own files if requirements are met\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2723"},"#","2723"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Giggiux"},"Giggiux"),")"),(0,i.kt)("li",{parentName:"ul"},"Properly adjust folding range end on windows\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2774"},"#","2774"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Surface error to user when they pass in an invalid envFile.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2770"},"#","2770"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix failing tests: SbtBloopSuite + FoldingRangeSuite (Windows)\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2767"},"#","2767"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Update link to Mill's new website\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2772"},"#","2772"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/amaalali"},"amaalali"),")"),(0,i.kt)("li",{parentName:"ul"},"Update Scalameta to 4.4.15\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2765"},"#","2765"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scalafmt-dynamic to 2.7.5\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2761"},"#","2761"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update mdoc, sbt-mdoc to 2.2.20\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2759"},"#","2759"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.5.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2758"},"#","2758"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 7.8.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2757"},"#","2757"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scribe, scribe-file, scribe-slf4j to 3.5.4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2756"},"#","2756"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update ujson to 1.3.12 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2755"},"#","2755"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update requests to 0.6.8\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2754"},"#","2754"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update pprint to 0.6.5 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2753"},"#","2753"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update geny to 0.6.9 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2752"},"#","2752"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"[Scalafix]"," Report problems with invalid path and fix flaky behaviour\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2749"},"#","2749"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Toplevel Mtags: use single indexer implementation\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2745"},"#","2745"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix wrong import when working with akka\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2739"},"#","2739"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"SymbolIndex: multiply symbol locations\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2668"},"#","2668"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Update emacs documentation.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2733"},"#","2733"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kurnevsky"},"kurnevsky"),")"),(0,i.kt)("li",{parentName:"ul"},"Add extra check before auto-connecting to server.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2737"},"#","2737"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Support 3.16.0 lsp specification with compatibility for non ",(0,i.kt)("inlineCode",{parentName:"li"},"array"),"/`\u2026\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2735"},"#","2735"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Giggiux"},"Giggiux"),")"),(0,i.kt)("li",{parentName:"ul"},"Add in the parentUri when offering the newSymbol code action.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2734"},"#","2734"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ImplementAsbtractMembers")," - support names with dots\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2732"},"#","2732"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Remove munit sbt plugin to fix CI\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2731"},"#","2731"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Remove test reports ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2730"},"#","2730"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add release notes for Metals 0.10.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2729"},"#","2729"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}u.isMDXComponent=!0}}]);