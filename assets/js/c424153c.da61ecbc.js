"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2994],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=l.createContext({}),s=function(t){var e=l.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return l.createElement(p.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||h[c]||r;return a?l.createElement(k,i(i({ref:e},m),{},{components:a})):l.createElement(k,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7239:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],o={author:"Tomasz Godzik",title:"Metals v0.8.4 - Cobalt",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},p=void 0,s={permalink:"/metals/blog/2020/04/10/cobalt",source:"@site/blog/2020-04-10-cobalt.md",title:"Metals v0.8.4 - Cobalt",description:"We are happy to announce the release of Metals v0.8.4, which will most likely be",date:"2020-04-10T00:00:00.000Z",formattedDate:"April 10, 2020",tags:[],readingTime:6.755,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.8.4 - Cobalt",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},prevItem:{title:"Metals v0.5.0 (Redirect)",permalink:"/metals/blog/2020/04/12/mercury"},nextItem:{title:"Metals v0.8.3 - Cobalt",permalink:"/metals/blog/2020/03/19/cobalt"}},m={authorsImageUrls:[void 0]},u=[{value:"TL;DR",id:"tldr",level:2},{value:"Navigating to parent method",id:"navigating-to-parent-method",level:2},{value:"Support for &#39;launch.json&#39;",id:"support-for-launchjson",level:2},{value:"New &#39;Create new symbol...&#39; code action",id:"new-create-new-symbol-code-action",level:2},{value:"Miscellaneous improvements",id:"miscellaneous-improvements",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.8.4 (2020-04-10)",id:"v084-2020-04-10",level:2}],h={toc:u};function c(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are happy to announce the release of Metals v0.8.4, which will most likely be\nthe last 0.8.x version."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"174")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"55")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"9")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"13")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"3")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/22?closed=1"},"https://github.com/scalameta/metals/milestone/22?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"navigating to parent method"),(0,r.kt)("li",{parentName:"ul"},"support for ",(0,r.kt)("inlineCode",{parentName:"li"},"launch.json")),(0,r.kt)("li",{parentName:"ul"},'new "Create new symbol" code action'),(0,r.kt)("li",{parentName:"ul"},"miscellaneous improvements")),(0,r.kt)("h2",{id:"navigating-to-parent-method"},"Navigating to parent method"),(0,r.kt)("p",null,"Metals will now calculate if any definition of a method in the current file\noverrides another method, in which case it will show a new lens next to the\nmethod's position. Once clicked, the user will be able to go to the super\nmethod. Lenses also link to methods in external dependencies and are displayed\nin files from libraries. For this new feature to work make sure that you enable\ncode lenses in your client."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10478402/76293237-fad12c80-62b0-11ea-9952-d8b536ffd374.png",alt:"Screenshot 2020-03-10 at 09 24 41"})),(0,r.kt)("p",null,"If they are found to be disturbing your workflow they can be easily disabled via\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.superMethodLensesEnabled")," configuration option - they are enabled by\ndefault. For example in Visual Studio Code:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10478402/76293133-cbbabb00-62b0-11ea-84be-06c992af768b.png",alt:"Screenshot 2020-03-09 at 16 24 21"})),(0,r.kt)("p",null,"These new lenses should be quick to calculate but if you notice significant\nslowdown you can also disable them, since when disabled they are not only not\ndisplayed but also not calculated at all."),(0,r.kt)("p",null,"There is also an exposed server command ",(0,r.kt)("inlineCode",{parentName:"p"},"goto-super-method")," that can be mapped\nand used through shortcut in Visual Studio Code."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10478402/76294356-fd348600-62b2-11ea-880e-7074df2928a6.png",alt:"Screenshot 2020-03-10 at 09 38 49"})),(0,r.kt)("p",null,"It is possible to also navigate the whole inheritance hierachy at once using the\nnew ",(0,r.kt)("inlineCode",{parentName:"p"},"super-method-hierarchy")," command."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10478402/76294832-de82bf00-62b3-11ea-847d-bc1d94136671.gif",alt:"super-hierarchy"})),(0,r.kt)("p",null,"This new command can be invoked on a method definition. It calculates super\nmethod hierarchy and if more than one position is found it displays a quickPick\nwindow (same as the new scala file feature) which displays all super methods and\nallows a user to select one and jump to its definition."),(0,r.kt)("p",null,"As an example in Visual Studio Code it can be bound to a shortcut this way:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10478402/76295136-5d77f780-62b4-11ea-87bc-1d25c3e6d586.png",alt:"Screenshot 2020-03-10 at 09 48 55"})),(0,r.kt)("p",null,"Thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kpbochenek"},"kpbochenek")," from VirtusLab for this\nnew feature!"),(0,r.kt)("h2",{id:"support-for-launchjson"},"Support for 'launch.json'"),(0,r.kt)("p",null,"Previously, it was only possible to launch main classes or tests via code lenses\nthat would appear above a particular class. Now, we add a way for a user to be\nable specify the name of the the class or test to run. We will then\nautomatically try to detect the build target, which that class/test belongs to\nand run it. In this release, we also add a way to specify the main class\narguments."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10850363/78788713-73103800-79ac-11ea-94b3-2e2d898992e4.gif",alt:"launch_debug3"})),(0,r.kt)("p",null,"While this will be primarily useful for the Visual Studio Code Metals extension,\nit will also make it easier for other editors that support the Debug Adapter\nProtocol. To obtain the uri needed for starting a debug session users can now\nexecute the ",(0,r.kt)("inlineCode",{parentName:"p"},"debug-adapter-start")," command with params:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for main class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mainClass": "com.foo.App",\n  "buildTarget": "foo",\n  "args": ["bar"]\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"for test class")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testClass": "com.foo.FooSuite",\n  "buildTarget": "foo"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"buildTarget")," is an optional parameter, which might be useful if there are\nidentically named classes in different modules. A uri will be returned that can\nbe used by the DAP client."),(0,r.kt)("p",null,"More information about adding support for debugging is available\n",(0,r.kt)("a",{parentName:"p",href:"/metals/docs/integrations/debug-adapter-protocol"},"here"),"."),(0,r.kt)("p",null,"This awesome new feature was contributed by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alekseiAlefirov"},"alekseiAlefirov")," from VirtusLab."),(0,r.kt)("h2",{id:"new-create-new-symbol-code-action"},"New 'Create new symbol...' code action"),(0,r.kt)("p",null,'Previously we would propose to import a symbol (if available) in response to\n"missing symbol" errors. Now, thanks to ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/gabro"},"gabro"),", we\nalso propose to create a new class, case class, trait or object."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/691940/77632315-1cd3db80-6f4e-11ea-9283-a2b522cedf1d.gif",alt:"2020-03-23 17 49 31"})),(0,r.kt)("p",null,"This might be useful when sketching out a domain model and should improve user\nexperience for fast prototyping."),(0,r.kt)("h2",{id:"miscellaneous-improvements"},"Miscellaneous improvements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"package")," is no longer added on imports from package objects"),(0,r.kt)("li",{parentName:"ul"},"if user right clicks on a file in Visual Studio Code the option for\n",(0,r.kt)("inlineCode",{parentName:"li"},"New Scala file")," also shows now the same as for directories"),(0,r.kt)("li",{parentName:"ul"},"a multiline string can now be formatted exclusively when using\n",(0,r.kt)("inlineCode",{parentName:"li"},"format selection")," on that string"),(0,r.kt)("li",{parentName:"ul"},"added in ",(0,r.kt)("inlineCode",{parentName:"li"},"...")," to signify truncation in worksheets"),(0,r.kt)("li",{parentName:"ul"},"fixed hover on Scala App trait and several other cases that showed up on Scala\nPlay projects"),(0,r.kt)("li",{parentName:"ul"},"messages about upgrading Scala versions are now more valid to the user"),(0,r.kt)("li",{parentName:"ul"},"references in a file are sorted before showing them"),(0,r.kt)("li",{parentName:"ul"},"better cursor position when creating new files using the ",(0,r.kt)("inlineCode",{parentName:"li"},"New Scala file"),"\ncommand"),(0,r.kt)("li",{parentName:"ul"},'added "case class" option in NewFilesProvider')),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.8.3..v0.8.4\nOlafur Pall Geirsson\nChris Kipp\nAleksei Alefirov\nGabriele Petronella\nTomasz Godzik\nKrzysztof Bochenek\nAlexandre Archambault\nScala Steward\nMartin Duhem\nTomasz Pasternak\n\u0141ukasz Wawrzyk\nMeriam Lachkar\nduianto\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v084-2020-04-10"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.8.4"},"v0.8.4")," (2020-04-10)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.8.3...v0.8.4"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upgrade to latest Bloop.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1595"},"#","1595"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"package")," added artificially on imports from package objects\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1593"},"#","1593"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Create a new file next to an existing one if user selected a file\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1592"},"#","1592"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix bug around resetting presentation compilers.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1590"},"#","1590"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"fix indentation for multiline string when using format selection\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1585"},"#","1585"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mlachkar"},"mlachkar"),")"),(0,r.kt)("li",{parentName:"ul"},"Add disabled X-detectExternalProjectFiles flag\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1589"},"#","1589"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukaszwawrzyk"},"lukaszwawrzyk"),")"),(0,r.kt)("li",{parentName:"ul"},"Add VersionedDocsModifier\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1584"},"#","1584"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove .bloop symbolic link during Pants export\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1587"},"#","1587"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Small changes to Pants integration\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1583"},"#","1583"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"'StartDebugAdapter' command now accepts user's parameters (launch.json)\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1466"},"#","1466"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/alekseiAlefirov"},"alekseiAlefirov"),")"),(0,r.kt)("li",{parentName:"ul"},"Convert recursive Pants globs into directory entries.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1581"},"#","1581"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Project root again ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1580"},"#","1580"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tpasternak"},"tpasternak"),")"),(0,r.kt)("li",{parentName:"ul"},"Small tweaks to Pants export\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1579"},"#","1579"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Support ",(0,r.kt)("inlineCode",{parentName:"li"},"extra_jvm_options")," from Pants\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1578"},"#","1578"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Duhemm"},"Duhemm"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in ... to signifigy truncation in worksheets\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1576"},"#","1576"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Small clean-ups ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1531"},"#","1531"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/alexarchambault"},"alexarchambault"),")"),(0,r.kt)("li",{parentName:"ul"},'Fix typo, double "the" ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1573"},"#","1573"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/duianto"},"duianto"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix: don't show super lenses on synthetic methods e.g. toString\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1572"},"#","1572"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,r.kt)("li",{parentName:"ul"},"Forward compiler options in Pants export.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1571"},"#","1571"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure we detect scala App trait when using hover.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1568"},"#","1568"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"More fixes for the Pants integration\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1570"},"#","1570"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix recommendations for Scala versions and add better messages.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1549"},"#","1549"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update nuprocess to 2.0.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1564"},"#","1564"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove deprecations ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1561"},"#","1561"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update lsp4j-debug ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1556"},"#","1556"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix name of scala-steward file\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1567"},"#","1567"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-frontend, ... to 1.4.0-RC1-162-888454e1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1562"},"#","1562"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-native-packager to 1.7.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1566"},"#","1566"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-native-packager to 1.6.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1563"},"#","1563"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in the scala steward conf file\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1558"},"#","1558"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove scalacheck ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1559"},"#","1559"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in new url for Chris\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1560"},"#","1560"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update coursier dependencies\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1557"},"#","1557"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"A few more dependency updates\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1555"},"#","1555"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add FlakyWindows tags to the hover suite\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1551"},"#","1551"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Dependency updates ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1554"},"#","1554"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support to query remote language server as fallback.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1547"},"#","1547"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Sort references before returning them\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1526"},"#","1526"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Several small polishing touches for Pants integration\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1552"},"#","1552"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Remove Pants targets of type 'target'\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1550"},"#","1550"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Specify cursor position when creating new files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1546"},"#","1546"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"Change go to parent lenses to true by default\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1541"},"#","1541"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update mdoc dependencies\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1544"},"#","1544"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update scalameta dependency\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1545"},"#","1545"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-munit plugin\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1543"},"#","1543"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},'Allow multiple "Create new symbol" actions on a range\n',(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1540"},"#","1540"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"Update to latest munit ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1534"},"#","1534"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Goto super method in hierarchy of inheritance\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1487"},"#","1487"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,r.kt)("li",{parentName:"ul"},"Add one more version to list of known old Bloop versions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1533"},"#","1533"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Export ",(0,r.kt)("inlineCode",{parentName:"li"},"tags")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"BloopPants"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1532"},"#","1532"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Duhemm"},"Duhemm"),")"),(0,r.kt)("li",{parentName:"ul"},"Add \"Create new symbol '\\$name'...\" code action\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1528"},"#","1528"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},'Add "case class" option in NewFilesProvider\n',(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1525"},"#","1525"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,r.kt)("li",{parentName:"ul"},"Update lsp4j to enable more 3.15 support\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1522"},"#","1522"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Minor polish for Pants integration\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1521"},"#","1521"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't run bloop install when opening intellij\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1519"},"#","1519"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/lukaszwawrzyk"},"lukaszwawrzyk"),")"),(0,r.kt)("li",{parentName:"ul"},"Prepare for a new release\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1518"},"#","1518"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")")))}c.isMDXComponent=!0}}]);