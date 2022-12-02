"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},996:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"decoration-protocol",sidebar_label:"Decoration Protocol",title:"Decoration Protocol v0.2.0"},c=void 0,s={unversionedId:"integrations/decoration-protocol",id:"integrations/decoration-protocol",title:"Decoration Protocol v0.2.0",description:'Metals implements a Language Server Protocol extension called the "Decoration',source:"@site/target/docs/integrations/decoration-protocol.md",sourceDirName:"integrations",slug:"/integrations/decoration-protocol",permalink:"/metals/docs/integrations/decoration-protocol",editUrl:"https://github.com/scalameta/metals/edit/main/docs/integrations/decoration-protocol.md",tags:[],version:"current",frontMatter:{id:"decoration-protocol",sidebar_label:"Decoration Protocol",title:"Decoration Protocol v0.2.0"},sidebar:"docs",previous:{title:"Tree View Protocol",permalink:"/metals/docs/integrations/tree-view-protocol"},next:{title:"Debug Adapter Protocol",permalink:"/metals/docs/integrations/debug-adapter-protocol"}},d=[{value:"Base data structures",id:"base-data-structures",children:[{value:"Decoration",id:"decoration",children:[],level:3}],level:2},{value:"DecorationOptions",id:"decorationoptions",children:[],level:2},{value:"ThemableDecorationInstanceRenderOption",id:"themabledecorationinstancerenderoption",children:[],level:2},{value:"ThemableDecorationAttachmentRenderOptions",id:"themabledecorationattachmentrenderoptions",children:[],level:2},{value:"Endpoints",id:"endpoints",children:[{value:"<code>initialize</code>",id:"initialize",children:[],level:3},{value:"<code>metals/publishDecorations</code>",id:"metalspublishdecorations",children:[],level:3}],level:2},{value:"Changelog",id:"changelog",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Metals implements a Language Server Protocol extension called the "Decoration\nProtocol" to display non-editable text in the text editor.'),(0,a.kt)("h2",{id:"base-data-structures"},"Base data structures"),(0,a.kt)("p",null,"The Decoration Protocol has several base data structures that are mostly derived\nfrom the ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/references/vscode-api"},"VS Code API"),"."),(0,a.kt)("h3",{id:"decoration"},"Decoration"),(0,a.kt)("p",null,'A "decoration" represents non-editable code that is displayed in the text editor\nalongside editable code. The GIF below demonstrates an example of green\ndecorations that are formatted as comments, which contain the evaluated code.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/68091453-bacbea00-fe77-11e9-80b9-52a9bbd6d98a.gif",alt:"Example decoration"})),(0,a.kt)("p",null,"Although decorations appear as text inside the editor, they can't be edited by\nthe user. In the GIF above, observe that the decoration can optionally include a\nmessage that's displayed on mouse hover."),(0,a.kt)("h2",{id:"decorationoptions"},"DecorationOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface DecorationOptions {\n  /**\n   * The range position to place the decoration.\n   * The Range data structure is defined in the Language Server Protocol.\n   */\n  range: Range;\n  /**\n   * The text to display when the mouse hovers over the decoration.\n   * The MarkupContent data structure is defined in the LanguageServerProtocol\n   */\n  hoverMessage?: MarkupContent;\n  /** The URI of the text document to place text decorations */\n  renderOptions: ThemableDecorationInstanceRenderOption;\n}\n")),(0,a.kt)("h2",{id:"themabledecorationinstancerenderoption"},"ThemableDecorationInstanceRenderOption"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ThemableDecorationInstanceRenderOption {\n  /** The decoration to display next to the given range. */\n  after?: ThemableDecorationAttachmentRenderOptions;\n}\n")),(0,a.kt)("h2",{id:"themabledecorationattachmentrenderoptions"},"ThemableDecorationAttachmentRenderOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export interface ThemableDecorationAttachmentRenderOptions {\n  /** The text to display in the decoration */\n  contentText?: string;\n  /** The color of `contentText`. More colors may be added in the future. */\n  color?: "green";\n  /** The font style to use for displaying `contentText. More styles may be added in the future.  */\n  fontStyle?: "italic";\n}\n')),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("p",null,"The Decoration Protocol is embedded inside the Language Server Protocol and\nconsists of a single JSON-RPC notification."),(0,a.kt)("h3",{id:"initialize"},(0,a.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,a.kt)("p",null,"The Decoration Protocol is only enabled when client declares support for the\nprotocol by adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"decorationProvider: true")," field to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"initializationOptions")," during the ",(0,a.kt)("inlineCode",{parentName:"p"},"initialize")," request."),(0,a.kt)("p",null,"Depending on your editor, it may also allow for inline decorations. This is used\nfor features like showing implicit arguments and inferred types, both which are\nuser configuration settings that a user can toggle. However, in order for those\nfeatures to use decorations rather than just extra information in your hover,\nyour client also needs to declare that it's an ",(0,a.kt)("inlineCode",{parentName:"p"},"inlineDecorationsProvider"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"initializationOptions": {\n  "decorationProvider": true,\n  "inlineDecorationProvider": true\n}\n')),(0,a.kt)("h3",{id:"metalspublishdecorations"},(0,a.kt)("inlineCode",{parentName:"h3"},"metals/publishDecorations")),(0,a.kt)("p",null,"The decoration ranges did change notification is sent from the server to the\nclient to notify that decorations have changes for a given text document."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Notification"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"method: ",(0,a.kt)("inlineCode",{parentName:"li"},"metals/publishDecorations")),(0,a.kt)("li",{parentName:"ul"},"params: ",(0,a.kt)("inlineCode",{parentName:"li"},"PublishDecorationsParams")," as defined below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface PublishDecorationsParams {\n  /** The URI of the text document to place text decorations */\n  uri: string;\n\n  /**\n   * The ranges to publish for this given document.\n   * Use empty list to clear all decorations.\n   */\n  options: DecorationOptions[];\n\n  /**\n   * Used to distinguish if inline decorations from the\n   * line ones as otherwise they will get replaced. This\n   * parameter along with specific inline decorations will \n   * not be sent if the client doesn't support inline \n   * decorations.\n   */\n  inline: boolean;\n}\n")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"v0.1.0: First release with basic support for worksheets."),(0,a.kt)("li",{parentName:"ul"},"v0.2.0: ",(0,a.kt)("inlineCode",{parentName:"li"},"MarkedString")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"DecorationOptions")," changed to ",(0,a.kt)("inlineCode",{parentName:"li"},"MarkupContent")," to\nalign with LSP 3.15"),(0,a.kt)("li",{parentName:"ul"},"v0.2.1: added ",(0,a.kt)("inlineCode",{parentName:"li"},"isInline")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"PublishDecorationsParams")," to be able to\ndistinguish between worksheet evaluation and inline decorations.")))}u.isMDXComponent=!0}}]);