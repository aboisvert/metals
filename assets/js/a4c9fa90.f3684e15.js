"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7602],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1295:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=o(7462),a=o(3366),r=(o(7294),o(3905)),i=["components"],s={author:"Chris Kipp",title:"sbt BSP support",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"},l=void 0,p={permalink:"/metals/blog/2020/11/06/sbt-BSP-support",source:"@site/blog/2020-11-06-sbt-BSP-support.md",title:"sbt BSP support",description:"If you've been following the [sbt",date:"2020-11-06T00:00:00.000Z",formattedDate:"November 6, 2020",tags:[],readingTime:5.9,truncated:!1,authors:[{name:"Chris Kipp",url:"https://twitter.com/ckipp01",imageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"}],frontMatter:{author:"Chris Kipp",title:"sbt BSP support",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"},prevItem:{title:"Metals v0.9.5 - Lithium",permalink:"/metals/blog/2020/11/10/lithium"},nextItem:{title:"Metals v0.9.4 - Lithium",permalink:"/metals/blog/2020/09/21/lithium"}},u={authorsImageUrls:[void 0]},c=[{value:"What is BSP?",id:"what-is-bsp",children:[],level:2},{value:"What does sbt BSP support mean for Metals?",id:"what-does-sbt-bsp-support-mean-for-metals",children:[],level:2},{value:"What&#39;s the difference between Bloop and sbt BSP?",id:"whats-the-difference-between-bloop-and-sbt-bsp",children:[],level:2},{value:"How do I try it out?",id:"how-do-i-try-it-out",children:[{value:"No <code>.bsp/sbt.json</code> exists",id:"no-bspsbtjson-exists",children:[],level:3},{value:"<code>metals.generate-bsp-config</code>",id:"metalsgenerate-bsp-config",children:[],level:3},{value:"<code>.bsp/sbt.json</code> already exists",id:"bspsbtjson-already-exists",children:[],level:3},{value:"<code>metals.bsp-switch</code>",id:"metalsbsp-switch",children:[],level:3},{value:"Switching back to Bloop",id:"switching-back-to-bloop",children:[],level:3},{value:"Doctor reset",id:"doctor-reset",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],h={toc:c};function d(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you've been following the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sbt/sbt/releases"},"sbt\nreleases"),", 1.4.x introduced some great new\nfeatures, one of those being BSP support. This effort was initiated by community\nmembers and proposed to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/advisoryboard/blob/master/proposals/023-bsp.md"},"Scala Center Advisory\nBoard"),".\nThen thanks to the work of ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/adrienpi2"},"Adrien Piquerez")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/eed3si9n"},"Eugene Yokota")," BSP support became a reality in\n1.4.0. You can read more about the reason behind the work and some of the\ndetails of the implementation in this blog post: ",(0,r.kt)("a",{parentName:"p",href:"https://www.scala-lang.org/blog/2020/10/27/bsp-in-sbt.html"},"BSP Support in sbt\n1.4"),"."),(0,r.kt)("p",null,"The Metals team is also happy to announce that as of the 0.9.5 release, the\nprocess to use other BSP servers like sbt is now much smoother. In some ways,\nBSP is an implementation detail abstracted away from a user, and you may not\ndirectly interact at all with your build server, even though it's pivotal for\nthe Metals experience. Therefore, we'd like to answer some common questions\nabout what this means to you as a user, explain some of the default choices\nMetals makes for you, and show you how to explore the sbt BSP server."),(0,r.kt)("h2",{id:"what-is-bsp"},"What is BSP?"),(0,r.kt)("p",null,"First off, you may be wondering what BSP is. The ",(0,r.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/"},"Build Server\nProtocol")," (BSP) is a ",(0,r.kt)("em",{parentName:"p"},"Protocol for IDEs and\nbuild tools to communicate about compilation, running, testing, debugging, and\nmuch more.")," If you're familiar with the ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/"},"Language Server\nProtocol")," (LSP), BSP is\ncomplementary to LSP and inspired by it. Where LSP allows your editor to\nabstract over various programming languages by a shared way to communicate to a\nlanguage server, BSP allows IDE's to abstract over various build servers. A\ntypical example of this can be illustrated like so:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/0RRUDlU.png",alt:"LSP BSP example"})),(0,r.kt)("p",null,"You have your editor (Emacs) communicating with Metals via LSP, and then Metals\ncommunicating with a BSP server (Bloop) via BSP. This communication over BSP can\nbe about compiling your code, running your code, defining sources in your\nworkspace, etc. You can read all about the various communication types ",(0,r.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/docs/specification#actual-protocol"},"here in\nthe\nprotocol"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/"},"Bloop")," was the first server to implement\nBSP, and it's the default build server for all build tools that Metals supports\nat the moment. When you open a fresh project, you're prompted to import your\nbuild, and this import process is running a form of \"Bloop Install\" to write\nyour build definition to ",(0,r.kt)("inlineCode",{parentName:"p"},".bloop/")," for Bloop to read and use. Then as you\ncontinue to edit, diagnostics and other information are flowing back and forth\nfrom Metals to Bloop. Hopefully this gives you a brief picture of what BSP is,\nand how it's used in Metals."),(0,r.kt)("h2",{id:"what-does-sbt-bsp-support-mean-for-metals"},"What does sbt BSP support mean for Metals?"),(0,r.kt)("p",null,'Another question you may have is "what does sbt BSP support mean for Metals"?\nThis means a couple different things. Up until this point, if you wanted to use\nsbt BSP, you needed to clear your ',(0,r.kt)("inlineCode",{parentName:"p"},".metals/")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".bloop")," directories, and then\nstart sbt with a specific flag before connecting to it. None of this is\nnecessary anymore. In order for ",(0,r.kt)("a",{parentName:"p",href:"https://build-server-protocol.github.io/docs/server-discovery.html"},"BSP\ndiscovery"),"\nto happen, you need a ",(0,r.kt)("inlineCode",{parentName:"p"},".bsp/*json")," file with instructions on how to\nstart/connect to the build server. A new command has been added to Metals (which\nwe'll go over down below) that can generate this file for you if it doesn't\nexist, and then you will be automatically connected to sbt. If this file already\nexist, then we provide a simple way for you to \"switch\" build servers and for\nyour choice to be remembered. We also automatically include an sbt plugin to\nensure the correct semantic information is produced by the compiler. So to\nsummarize, Metals now has the ability to generate the necessary ",(0,r.kt)("inlineCode",{parentName:"p"},".bsp/sbt.json"),"\nfile if it doesn't exist, and to also switch back and forth from using Bloop or\nsbt as your build server."),(0,r.kt)("h2",{id:"whats-the-difference-between-bloop-and-sbt-bsp"},"What's the difference between Bloop and sbt BSP?"),(0,r.kt)("p",null,"At this point you may be asking, \"what's the difference?\". For an average user,\nthere may not be a ton of difference, however I'd like to outline a couple\nthings that may be relevant to you."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bloop supports the ",(0,r.kt)("a",{parentName:"li",href:"https://microsoft.github.io/debug-adapter-protocol/"},"Debug Adapter\nProtocol")," (DAP) and sbt\ndoesn't. So you'll notice when using sbt as a build server, you won't have\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"run")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"debug")," code lenses directly in your editor like you do with\nBloop."),(0,r.kt)("li",{parentName:"ul"},"Bloop writes all the necessary information about your build it needs to disk\nwhereas sbt loads it into memory. If you're a user that works for long\nperiods of time on a single project, then this may not matter to you at all.\nHowever, if you jump in and out of projects, without having sbt shell\nrunning, then you will pay the cost of loading up your build every time."),(0,r.kt)("li",{parentName:"ul"},"Bloop offers sbt file support that enables completions and hover, whereas\nthis is not yet available in the sbt BSP implementation."),(0,r.kt)("li",{parentName:"ul"},"sbt gives you access to the full task graph, so for example if you're using\n",(0,r.kt)("inlineCode",{parentName:"li"},"BuildInfo"),", and you compile with Bloop, your ",(0,r.kt)("inlineCode",{parentName:"li"},"BuildInfo")," won't get\ngenerated. However, sources will get generated when using sbt server. This\ncan help avoid any potential inconsistencies. ")),(0,r.kt)("p",null,"While there are some more differences, these are probably the main ones you'll\nnotice as a user. These are both great tools, and you'll have to explore more to\nsee what is the best fit for you. For now, Metals defaults to using Bloop mainly\nbecause we believe it provides a richer feature set and because pretty much all\nof our testing includes Bloop as a build server."),(0,r.kt)("h2",{id:"how-do-i-try-it-out"},"How do I try it out?"),(0,r.kt)("p",null,"Now to the good stuff. There are two main ways that you can start using sbt\nserver in Metals."),(0,r.kt)("h3",{id:"no-bspsbtjson-exists"},"No ",(0,r.kt)("inlineCode",{parentName:"h3"},".bsp/sbt.json")," exists"),(0,r.kt)("p",null,"If no ",(0,r.kt)("inlineCode",{parentName:"p"},".bsp/sbt.json")," exists yet, you can generate it with the new\n",(0,r.kt)("inlineCode",{parentName:"p"},"metals.generate-bsp-config")," command. At any time you can execute this command\nand Metals will ensure that you're on the minimum required sbt version (1.4.1),\ngenerate the ",(0,r.kt)("inlineCode",{parentName:"p"},".bsp/sbt.json")," file for you, include the necessary plugin, and\nthen auto-connect to the sbt build server. For example in VS Code this looks\nlike this:"),(0,r.kt)("h3",{id:"metalsgenerate-bsp-config"},(0,r.kt)("inlineCode",{parentName:"h3"},"metals.generate-bsp-config")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/kBNbtzI.gif",alt:"generate-bsp-config"})),(0,r.kt)("h3",{id:"bspsbtjson-already-exists"},(0,r.kt)("inlineCode",{parentName:"h3"},".bsp/sbt.json")," already exists"),(0,r.kt)("p",null,"If you've ran sbt on your project already, your ",(0,r.kt)("inlineCode",{parentName:"p"},".bsp/sbt.json")," file will\nalready exist. In this case, you can simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.bsp-switch")," command\nand choose sbt. For example, using ",(0,r.kt)("inlineCode",{parentName:"p"},"coc-metals"),", it looks like this:"),(0,r.kt)("h3",{id:"metalsbsp-switch"},(0,r.kt)("inlineCode",{parentName:"h3"},"metals.bsp-switch")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/6tY2ofL.gif",alt:"bsp-switch"})),(0,r.kt)("h3",{id:"switching-back-to-bloop"},"Switching back to Bloop"),(0,r.kt)("p",null,"After you do a ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.bsp-switch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"metals-generate-bsp-config"),", your choice\nwill be remembered. So the next time that you open your workspace, you will\nautomatically connect to the last build server you had chosen. If you'd like to\ngo back to your previous build server, you can simply use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"metals.bsp-switch")," command again to choose your previous server. For editors\nthat have an html doctor, you can also reset your build server choice in the\nDoctor."),(0,r.kt)("h3",{id:"doctor-reset"},"Doctor reset"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/YEGfEGB.png",alt:"Doctor"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"We hope you enjoy this easier way to use sbt server with Metals. If you're\ncurious about the implementation details, much of the work was done in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/pull/2154"},"this\npr"),". As always please don't\nhesitate to ask questions on our various channels, submit issues, or create new\nfeature requests."))}d.isMDXComponent=!0}}]);