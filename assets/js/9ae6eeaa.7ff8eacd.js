"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3737],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(r),f=o,h=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var m=2;m<a;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9982:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],s={author:"\xd3lafur P\xe1ll Geirsson",title:"Low-memory symbol indexing with bloom filters",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},i=void 0,m={permalink:"/metals/blog/2019/01/22/bloom-filters",source:"@site/blog/2019-01-22-bloom-filters.md",title:"Low-memory symbol indexing with bloom filters",description:"The latest Metals release introduces three new in-memory indexes to implement",date:"2019-01-22T00:00:00.000Z",formattedDate:"January 22, 2019",tags:[],readingTime:12.545,truncated:!0,authors:[{name:"\xd3lafur P\xe1ll Geirsson",url:"https://twitter.com/olafurpg",imageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"}],frontMatter:{author:"\xd3lafur P\xe1ll Geirsson",title:"Low-memory symbol indexing with bloom filters",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},prevItem:{title:"Metals v0.4.0 - Tin",permalink:"/metals/blog/2019/01/24/tin"},nextItem:{title:"Metals v0.3.2 - Iron",permalink:"/metals/blog/2018/12/14/iron"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'The latest Metals release introduces three new in-memory indexes to implement\nthe features "find symbol references" and "fuzzy symbol search". Indexes are\nimportant to provide fast response times for user requests but they come at the\nprice of higher memory usage. To keep memory usage low, Metals uses a data\nstructure called bloom filters that implements space-efficient sets. Thanks to\nbloom filters, the three new indexes added in the last release use only a few\nmegabytes of memory even for large projects with >500k lines of code.'),(0,a.kt)("p",null,"In this post, we look into how Metals uses bloom filters for fast indexing with\nsmall memory footprint. We explain what bloom filters are and how we can encode\nproblems like fuzzy searching to take advantage of the nice properties of bloom\nfilters. Finally, we evaluate these new features on a real-world project: the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/akka/akka"},"Akka")," build."))}f.isMDXComponent=!0}}]);