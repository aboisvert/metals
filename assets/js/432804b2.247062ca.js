"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9191],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),s=["components"],o={id:"user-configuration",title:"Metals User Configuration",sidebar_label:"User Configuration"},i=void 0,p={unversionedId:"editors/user-configuration",id:"editors/user-configuration",title:"Metals User Configuration",description:"While each editor may have a different way to change the user configuration, the",source:"@site/target/docs/editors/user-configuration.md",sourceDirName:"editors",slug:"/editors/user-configuration",permalink:"/metals/docs/editors/user-configuration",draft:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/user-configuration.md",tags:[],version:"current",frontMatter:{id:"user-configuration",title:"Metals User Configuration",sidebar_label:"User Configuration"},sidebar:"docs",previous:{title:"Online IDEs",permalink:"/metals/docs/editors/online-ides"},next:{title:"Code Actions",permalink:"/metals/docs/features/codeactions"}},u={},m=[{value:"Java Home directory",id:"java-home-directory",level:3},{value:"sbt script",id:"sbt-script",level:3},{value:"Gradle script",id:"gradle-script",level:3},{value:"Maven script",id:"maven-script",level:3},{value:"Mill script",id:"mill-script",level:3},{value:"Scalafmt config path",id:"scalafmt-config-path",level:3},{value:"Scalafix config path",id:"scalafix-config-path",level:3},{value:"Ammonite JVM Properties",id:"ammonite-jvm-properties",level:3},{value:"Excluded Packages",id:"excluded-packages",level:3},{value:"Don&#39;t generate Bloop plugin file for sbt",id:"dont-generate-bloop-plugin-file-for-sbt",level:3},{value:"Version of Bloop",id:"version-of-bloop",level:3},{value:"Bloop JVM Properties",id:"bloop-jvm-properties",level:3},{value:"Should display lenses with links to super methods",id:"should-display-lenses-with-links-to-super-methods",level:3},{value:"Should display type annotations for inferred types",id:"should-display-type-annotations-for-inferred-types",level:3},{value:"Should display implicit parameter at usage sites",id:"should-display-implicit-parameter-at-usage-sites",level:3},{value:"Should display implicit conversion at usage sites",id:"should-display-implicit-conversion-at-usage-sites",level:3},{value:"Indent snippets when pasted.",id:"indent-snippets-when-pasted",level:3},{value:"Remote language server",id:"remote-language-server",level:3},{value:"Default fallback Scala version",id:"default-fallback-scala-version",level:3},{value:"Test UI used for tests and test suites",id:"test-ui-used-for-tests-and-test-suites",level:3},{value:"Eclipse Java formatter config path",id:"eclipse-java-formatter-config-path",level:3},{value:"Eclipse Java formatting profile",id:"eclipse-java-formatting-profile",level:3},{value:"Scala CLI launcher",id:"scala-cli-launcher",level:3}],d={toc:m};function c(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While each editor may have a different way to change the user configuration, the\nvalues should be more or less the same for all extensions. Below you'll find all\nthe available configuration options and what they do."),(0,r.kt)("h3",{id:"java-home-directory"},"Java Home directory"),(0,r.kt)("p",null,"The Java Home directory used for indexing JDK sources and locating the ",(0,r.kt)("inlineCode",{parentName:"p"},"java")," binary."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable with fallback to ",(0,r.kt)("inlineCode",{parentName:"p"},"user.home")," system property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "javaHome": "/Library/Java/JavaVirtualMachines/jdk1.8.0_192.jdk/Contents/Home"\n  }\n}\n')),(0,r.kt)("h3",{id:"sbt-script"},"sbt script"),(0,r.kt)("p",null,"Optional absolute path to an ",(0,r.kt)("inlineCode",{parentName:"p"},"sbt")," executable to use for running ",(0,r.kt)("inlineCode",{parentName:"p"},"sbt bloopInstall"),".\nBy default, Metals uses ",(0,r.kt)("inlineCode",{parentName:"p"},"java -jar sbt-launch.jar")," with an embedded launcher while respecting\n",(0,r.kt)("inlineCode",{parentName:"p"},".jvmopts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".sbtopts"),". Update this setting if your ",(0,r.kt)("inlineCode",{parentName:"p"},"sbt")," script requires more customizations\nlike using environment variables."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "sbtScript": "/usr/local/bin/sbt"\n  }\n}\n')),(0,r.kt)("h3",{id:"gradle-script"},"Gradle script"),(0,r.kt)("p",null,"Optional absolute path to a ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle")," executable to use for running ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle bloopInstall"),".\nBy default, Metals uses gradlew with 7.5.0 gradle version. Update this setting if your ",(0,r.kt)("inlineCode",{parentName:"p"},"gradle")," script requires more customizations\nlike using environment variables."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "gradleScript": "/usr/local/bin/gradle"\n  }\n}\n')),(0,r.kt)("h3",{id:"maven-script"},"Maven script"),(0,r.kt)("p",null,"Optional absolute path to a ",(0,r.kt)("inlineCode",{parentName:"p"},"maven")," executable to use for generating bloop config.\nBy default, Metals uses mvnw maven wrapper with 3.6.1 maven version. Update this setting if your ",(0,r.kt)("inlineCode",{parentName:"p"},"maven")," script requires more customizations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "mavenScript": "/usr/local/bin/mvn"\n  }\n}\n')),(0,r.kt)("h3",{id:"mill-script"},"Mill script"),(0,r.kt)("p",null,"Optional absolute path to a ",(0,r.kt)("inlineCode",{parentName:"p"},"mill")," executable to use for running ",(0,r.kt)("inlineCode",{parentName:"p"},"mill mill.contrib.Bloop/install"),".\nBy default, Metals uses mill wrapper script with 0.5.0 mill version. Update this setting if your ",(0,r.kt)("inlineCode",{parentName:"p"},"mill")," script requires more customizations\nlike using environment variables."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "millScript": "/usr/local/bin/mill"\n  }\n}\n')),(0,r.kt)("h3",{id:"scalafmt-config-path"},"Scalafmt config path"),(0,r.kt)("p",null,"Optional custom path to the .scalafmt.conf file.\nIt should be a path (relative or absolute - though an absolute path is recommended) and use\nforward slashes ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," for file separators (even on Windows)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "scalafmtConfigPath": "project/.scalafmt.conf"\n  }\n}\n')),(0,r.kt)("h3",{id:"scalafix-config-path"},"Scalafix config path"),(0,r.kt)("p",null,"Optional custom path to the .scalafix.conf file.\nIt should be a path (relative or absolute - though an absolute path is recommended) and use\nforward slashes ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," for file separators (even on Windows)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "scalafixConfigPath": "project/.scalafix.conf"\n  }\n}\n')),(0,r.kt)("h3",{id:"ammonite-jvm-properties"},"Ammonite JVM Properties"),(0,r.kt)("p",null,"Optional list of JVM properties to pass along to the Ammonite server.\nEach property needs to be a separate item.\\n\\nExample: ",(0,r.kt)("inlineCode",{parentName:"p"},"-Xmx1G")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-Xms100M"),'"'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "ammoniteJvmProperties": ["-Xmx1G"]\n  }\n}\n')),(0,r.kt)("h3",{id:"excluded-packages"},"Excluded Packages"),(0,r.kt)("p",null,"Packages that will be excluded from completions, imports, and symbol searches."),(0,r.kt)("p",null,"Note that this is in addition to some default packages that are already excluded.\nThe default excluded packages are listed below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"META-INF\nimages\ntoolbarButtonGraphics\njdk\nsun\noracle\njava.awt.desktop\norg.jcp\norg.omg\norg.graalvm\ncom.oracle\ncom.sun\ncom.apple\napple\ncom.sourcegraph.shaded\n")),(0,r.kt)("p",null,"If there is a need to remove one of the defaults, you are able to do so by including the\npackage in your list and prepending ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," to it."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'["--sun"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "excludedPackages": ["akka.actor.typed.javadsl"]\n  }\n}\n')),(0,r.kt)("h3",{id:"dont-generate-bloop-plugin-file-for-sbt"},"Don't generate Bloop plugin file for sbt"),(0,r.kt)("p",null,"If true, Metals will not generate ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.sbt")," files under the assumption that sbt-bloop is already manually installed in the sbt build. Build import will fail with a 'not valid command bloopInstall' error in case Bloop is not manually installed in the build when using this option."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "bloopSbtAlreadyInstalled": false\n  }\n}\n')),(0,r.kt)("h3",{id:"version-of-bloop"},"Version of Bloop"),(0,r.kt)("p",null,"This version will be used for the Bloop build tool plugin, for any supported build tool,\nwhile importing in Metals as well as for running the embedded server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": 1.5.6"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "bloopVersion": "1.4.0-RC1"\n  }\n}\n')),(0,r.kt)("h3",{id:"bloop-jvm-properties"},"Bloop JVM Properties"),(0,r.kt)("p",null,"Optional list of JVM properties to pass along to the Bloop server.\nPlease follow this guide for the format ",(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/bloop/docs/server-reference#global-settings-for-the-server%22"},'https://scalacenter.github.io/bloop/docs/server-reference#global-settings-for-the-server"')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": ",'["-Xmx1G"]',"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "bloopJvmProperties": ["-Xmx1G"]\n  }\n}\n')),(0,r.kt)("h3",{id:"should-display-lenses-with-links-to-super-methods"},"Should display lenses with links to super methods"),(0,r.kt)("p",null,"Super method lenses are visible above methods definition that override another methods. Clicking on a lens jumps to super method definition.\nDisabled lenses are not calculated for opened documents which might speed up document processing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "superMethodLensesEnabled": false\n  }\n}\n')),(0,r.kt)("h3",{id:"should-display-type-annotations-for-inferred-types"},"Should display type annotations for inferred types"),(0,r.kt)("p",null,"When this option is enabled, each method that can have inferred types has them\ndisplayed either as additional decorations if they are supported by the editor or\nshown in the hover."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "showInferredType": false\n  }\n}\n')),(0,r.kt)("h3",{id:"should-display-implicit-parameter-at-usage-sites"},"Should display implicit parameter at usage sites"),(0,r.kt)("p",null,"When this option is enabled, each method that has implicit arguments has them\ndisplayed either as additional decorations if they are supported by the editor or\nshown in the hover."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "showImplicitArguments": false\n  }\n}\n')),(0,r.kt)("h3",{id:"should-display-implicit-conversion-at-usage-sites"},"Should display implicit conversion at usage sites"),(0,r.kt)("p",null,"When this option is enabled, each place where an implicit method or class is used has it\ndisplayed either as additional decorations if they are supported by the editor or\nshown in the hover."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "showImplicitConversionsAndClasses": false\n  }\n}\n')),(0,r.kt)("h3",{id:"indent-snippets-when-pasted"},"Indent snippets when pasted."),(0,r.kt)("p",null,"When this option is enabled, when a snippet is pasted into a Scala file, Metals will\ntry to adjust the indentation to that of the current cursor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": false"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "enableIndentOnPaste": false\n  }\n}\n')),(0,r.kt)("h3",{id:"remote-language-server"},"Remote language server"),(0,r.kt)("p",null,"A URL pointing to an endpoint that implements a remote language server."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/integrations/remote-language-server"},"https://scalameta.org/metals/docs/integrations/remote-language-server")," for\ndocumentation on remote language servers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "remoteLanguageServer": "https://language-server.company.com/message"\n  }\n}\n')),(0,r.kt)("h3",{id:"default-fallback-scala-version"},"Default fallback Scala version"),(0,r.kt)("p",null,"The Scala compiler version that is used as the default or fallback in case a file\ndoesn't belong to any build target or the specified Scala version isn't supported by Metals.\nThis applies to standalone Scala files, worksheets, and Ammonite scripts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": 3.2.1"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "fallbackScalaVersion": 3.2.1\n  }\n}\n')),(0,r.kt)("h3",{id:"test-ui-used-for-tests-and-test-suites"},"Test UI used for tests and test suites"),(0,r.kt)("p",null,'Default way of handling tests and test suites.  The only valid values are\n"code lenses" and "test explorer".  See ',(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/docs/integrations/test-explorer"},"https://scalameta.org/metals/docs/integrations/test-explorer"),"\nfor information on how to work with the test explorer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": Code Lenses"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "testUserInterface": test explorer\n  }\n}\n')),(0,r.kt)("h3",{id:"eclipse-java-formatter-config-path"},"Eclipse Java formatter config path"),(0,r.kt)("p",null,"Optional custom path to the eclipse-formatter.xml file.\nIt should be a path (relative or absolute - though an absolute path is recommended) and use\nforward slashes ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," for file separators (even on Windows)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "javaFormat.eclipseConfigPath": "formatters/eclipse-formatter.xml"\n  }\n}\n')),(0,r.kt)("h3",{id:"eclipse-java-formatting-profile"},"Eclipse Java formatting profile"),(0,r.kt)("p",null,"If the Eclipse formatter file contains more than one profile, this option can be used to control which is used."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "javaFormat.eclipseProfile": "GoogleStyle"\n  }\n}\n')),(0,r.kt)("h3",{id:"scala-cli-launcher"},"Scala CLI launcher"),(0,r.kt)("p",null,"Optional absolute path to a ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli")," executable to use for running a Scala CLI BSP server.\nBy default, Metals uses the scala-cli from the PATH, or it's not found, downloads and runs Scala\nCLI on the JVM (slower than native Scala CLI). Update this if you want to use a custom Scala CLI\nlauncher, not available in PATH."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default"),": empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metals": {\n    "scalaCliLauncher": "/usr/local/bin/scala-cli"\n  }\n}\n')))}c.isMDXComponent=!0}}]);