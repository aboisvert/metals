"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1664:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],i={id:"maven",title:"Maven"},s=void 0,u={unversionedId:"build-tools/maven",id:"build-tools/maven",title:"Maven",description:"Maven is one of the most common build tools in the JVM ecosystem and it also",source:"@site/target/docs/build-tools/maven.md",sourceDirName:"build-tools",slug:"/build-tools/maven",permalink:"/metals/docs/build-tools/maven",editUrl:"https://github.com/scalameta/metals/edit/main/docs/build-tools/maven.md",tags:[],version:"current",frontMatter:{id:"maven",title:"Maven"},sidebar:"docs",previous:{title:"Gradle",permalink:"/metals/docs/build-tools/gradle"},next:{title:"Mill",permalink:"/metals/docs/build-tools/mill"}},c=[{value:"Automatic installation",id:"automatic-installation",children:[],level:2},{value:"Manual installation",id:"manual-installation",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Maven is one of the most common build tools in the JVM ecosystem and it also\nworks with Scala through the\n",(0,l.kt)("a",{parentName:"p",href:"https://davidb.github.io/scala-maven-plugin/usage.html"},"scala-maven-plugin"),".\nThe ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/random-maven/scalor-maven-plugin"},"scalor-maven-plugin"),"\nis not currently supported and requires a new plugin for bloop to be\nimplemented."),(0,l.kt)("h2",{id:"automatic-installation"},"Automatic installation"),(0,l.kt)("p",null,'The first time you open Metals in a new Maven workspace you will be\nprompted to import the build. Select "Import Build" to start the\nautomatic installation. This will create all the needed Bloop config\nfiles. You should then be able to edit and compile your code utilizing\nall of the features.'),(0,l.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,l.kt)("p",null,"Currently, all you need to run the manual installation is:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mvn ch.epfl.scala:maven-bloop_2.13:1.5.4-78-d8126ad2:bloopInstall -DdownloadSources=true")),(0,l.kt)("p",null,'If you choose this option though you should select "Don\'t show again" when\nMetals prompts to import the build.'))}m.isMDXComponent=!0}}]);