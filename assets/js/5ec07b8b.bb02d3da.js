"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9537],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=l.createContext({}),p=function(t){var e=l.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(o,".").concat(u)]||c[u]||h[u]||r;return a?l.createElement(k,i(i({ref:e},m),{},{components:a})):l.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9100:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],s={author:"Tomasz Godzik",title:"Metals v0.9.4 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},o=void 0,p={permalink:"/metals/blog/2020/09/21/lithium",source:"@site/blog/2020-09-21-lithium.md",title:"Metals v0.9.4 - Lithium",description:"We're happy to announce the release of Metals v0.9.4, which focuses on",date:"2020-09-21T00:00:00.000Z",formattedDate:"September 21, 2020",tags:[],readingTime:5.72,truncated:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.9.4 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"sbt BSP support",permalink:"/metals/blog/2020/11/06/sbt-BSP-support"},nextItem:{title:"Metals v0.9.3 - Lithium",permalink:"/metals/blog/2020/08/19/lithium"}},m={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Analyze stacktrace command",id:"analyze-stacktrace-command",children:[{value:"Visual Studio Code",id:"visual-studio-code",children:[],level:3},{value:"coc-metals",id:"coc-metals",children:[],level:3},{value:"Other editors",id:"other-editors",children:[],level:3}],level:2},{value:"Customizable package exclusions",id:"customizable-package-exclusions",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2},{value:"Merged PRs",id:"merged-prs",children:[],level:2},{value:"v0.9.4 (2020-09-21)",id:"v094-2020-09-21",children:[],level:2}],h={toc:c};function u(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're happy to announce the release of Metals v0.9.4, which focuses on\nimprovements in Scala 3 worksheets, a couple of new features, and a number of\nsmaller improvements."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"115")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"50")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"6")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"15")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"2")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/27?closed=1"},"https://github.com/scalameta/metals/milestone/27?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scala 0.26.0 and 0.27.0-RC1 support."),(0,r.kt)("li",{parentName:"ul"},"Analyze stacktrace command"),(0,r.kt)("li",{parentName:"ul"},"Customizable package exclusions")),(0,r.kt)("h2",{id:"analyze-stacktrace-command"},"Analyze stacktrace command"),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kpbochenek"},"kpbochenek"),", Metals can now help with\nnavigating stack traces using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.analyze-stacktrace")," command. The\nonly thing it needs is the actual stack trace string to be input as a parameter\nto the command. This new functionality works differently in various editors."),(0,r.kt)("h3",{id:"visual-studio-code"},"Visual Studio Code"),(0,r.kt)("p",null,"The only thing users need to do is copy the stack trace and run the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Analyze Stacktrace")," command from the command palette. This will display a new\nweb view, where it will be possible for users to navigate the files that are\nincluded in the exception."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/WBU4hvT.gif",alt:"stacktrace-vscode"})),(0,r.kt)("h3",{id:"coc-metals"},"coc-metals"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"coc-metals"),", you just need to copy the stacktrace, whether from sbt,\nbloop-cli, or somewhere else into your register. Once you have it copied, you\ncan just execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.analyze-stacktrace"),"command. This will create\na",(0,r.kt)("inlineCode",{parentName:"p"},".metals/stracktrace.scala")," file which can be used to navigate through your\nstacktrace using code lenses. Keep in mind that you'll want to make sure you\nhave codeLens.enable set to true in your configuration. Also, since this feature\nrelies on code lenses (virtual text in Nvim), it's only supported in Nvim."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/54a9cb68547532b2ff16cb6f95fdd8268d806b41/68747470733a2f2f692e696d6775722e636f6d2f74516a694147322e676966",alt:"stacktrace-nvim"})),(0,r.kt)("h3",{id:"other-editors"},"Other editors"),(0,r.kt)("p",null,"To make it work with any other editors users need to run the command manually\nwith the stacktrace as input, similar to the example above with ",(0,r.kt)("inlineCode",{parentName:"p"},"coc-metals"),".\nThe command will generate a new file, ",(0,r.kt)("inlineCode",{parentName:"p"},".metals/stacktrace.scala"),", which can be\nused to navigate through the stacktrace using code lenses."),(0,r.kt)("h2",{id:"customizable-package-exclusions"},"Customizable package exclusions"),(0,r.kt)("p",null,"Usually, a number of packages are almost never used by the developers and could\nclutter the language server output while being of little benefit to the users.\nMetals would exclude those packages from indexing causing them to not be\nrecommended for completions, symbol searches, and code actions. Previously that\nlist was set in stone and consisted of a number of prefixes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'val defaultExclusions: List[String] = List(\n    "META-INF/", "images/", "toolbarButtonGraphics/", "jdk/", "sun/", "javax/",\n    "oracle/", "java/awt/desktop/", "org/jcp/", "org/omg/", "org/graalvm/",\n    "com/oracle/", "com/sun/", "com/apple/", "apple/"\n  )\n')),(0,r.kt)("p",null,"This list might work in most cases, but users might also want to customize the\nlist according to their preferences and domain they are working on. Starting\nwith this release it is now possible to define additional exclusions as well as\nremove some from the default list. This can be done via an additional Metals\nuser setting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"metals.excluded-packages" : [\n  "akka.actor.typed.javadsl", "--javax"\n]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--")," should only be used to remove some of the defaults if they aren't needed\nfor your project. Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ckipp01"},"ckipp01")," for\ncontributing this feature!"),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("p",null,"Some of the smaller improvements to Metals include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New recommended Maven Scala template."),(0,r.kt)("li",{parentName:"ul"},"Fix go to source and auto imports in standalone worksheet files."),(0,r.kt)("li",{parentName:"ul"},"Fix missing classes from ","_","empty package in tree view."),(0,r.kt)("li",{parentName:"ul"},"Add a command to quickly create a new worksheet with a default name.")),(0,r.kt)("p",null,"Beside all the core work on the server itself, there have also been a lot of\ngreat work done in various other Scalameta projects, which Metals relies on.\nThese projects include ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/scalameta/mdoc"},"mdoc"),", which powers\nworksheets and ",(0,r.kt)("a",{parentName:"p",href:"http://github.com/scalameta/scalameta"},"Scalameta"),", which powers\nall SemanticDB and parsing powered features. Those contributions helped to\nunlock and improve Dotty support in Metals. So special thanks to those projects\nand contributors."),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.9.3..v0.9.4\nScala Steward\nChris Kipp\nTomasz Godzik\nKrzysztof Bochenek\nEthan Atkins\nJoseph Price\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v094-2020-09-21"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.9.4"},"v0.9.4")," (2020-09-21)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.9.3...v0.9.4"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bump other reference of coursier/cache\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2087"},"#","2087"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Use built-in fetch depth and bump coursier cache\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2086"},"#","2086"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Refactor NewFileProvider\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2085"},"#","2085"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Strip out ",(0,r.kt)("inlineCode",{parentName:"li"},"[E]")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"[error]")," from stacktrace in analyzer.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2083"},"#","2083"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Bloop to 1.4.4-13-408f4d80\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2080"},"#","2080"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update mdoc version to 2.2.9\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2079"},"#","2079"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Change new-scala-file to enable quick creation of a file.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2075"},"#","2075"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-jmh to 0.4.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2071"},"#","2071"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update xnio-nio to 3.8.2.Final\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2067"},"#","2067"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.3.22\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2070"},"#","2070"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-mdoc to 2.2.8\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2069"},"#","2069"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update mdoc-interfaces to 2.2.8\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2068"},"#","2068"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update undertow-core to 2.1.4.Final\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2066"},"#","2066"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update coursier to 2.0.0-RC6-26\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2065"},"#","2065"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-scalafix to 0.9.20\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2064"},"#","2064"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.3-31-b16d7e50\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2063"},"#","2063"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix wrong definition position for worksheets\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2060"},"#","2060"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix typo in StringBloomFilter.scala\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2059"},"#","2059"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/joprice"},"joprice"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for dotty 0.27.0-RC1 and update mdoc\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2058"},"#","2058"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't search for runTest code lenses in Ammonite scripts and worksheets.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2057"},"#","2057"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Look into ammonite flakiness in tests to see if we can remove it\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2054"},"#","2054"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in new version of Ammonite\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2056"},"#","2056"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix missing classes from ",(0,r.kt)("em",{parentName:"li"},"empty")," package in treeView.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2053"},"#","2053"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove TravisCI stuff ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2055"},"#","2055"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Correct the way userConfig examples are displayed.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2045"},"#","2045"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Customizable package exclusions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2012"},"#","2012"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update interface to 0.0.25\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2038"},"#","2038"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update emacs docs to include latest lsp-metals changes\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2033"},"#","2033"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.3.21\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2042"},"#","2042"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-munit to 0.7.12\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2041"},"#","2041"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jol-core to 0.13\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2040"},"#","2040"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 6.5.5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2039"},"#","2039"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update coursier to 2.0.0-RC6-25\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2037"},"#","2037"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update file-tree-views to 2.1.5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2036"},"#","2036"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-launcher to 1.4.3-27-dfdc9971\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2035"},"#","2035"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-dotty to 0.4.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2034"},"#","2034"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix auto imports and go to sources for worksheets outside sources\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2030"},"#","2030"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add Maven template to the curated list of templates\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2028"},"#","2028"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for dotty 0.26.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2027"},"#","2027"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump memory for test forks to 2GB\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2025"},"#","2025"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt docs to better explain how to manually install Metals prior to\n0.7.6 version ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2026"},"#","2026"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add parallel tests ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1985"},"#","1985"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove old gitignore and graal stuff.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2022"},"#","2022"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Clear fingerprints when semanticdb hash matches\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2021"},"#","2021"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Change link in blog post to absolute path\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2019"},"#","2019"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Switch file watching library to swoval\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2014"},"#","2014"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eatkins"},"eatkins"),")"),(0,r.kt)("li",{parentName:"ul"},"Move releases to github actions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2015"},"#","2015"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Analyze stacktrace ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1966"},"#","1966"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix typo in vscode docs\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2010"},"#","2010"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add release notes for 0.9.3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2008"},"#","2008"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}u.isMDXComponent=!0}}]);