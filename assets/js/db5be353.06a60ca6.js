(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[6332],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1644:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),p=["components"],o={title:"\u5355\u7ec4\u4ef6\u8c03\u8bd5\u914d\u7f6e"},i=void 0,s={unversionedId:"settings/play",id:"settings/play",isDocsHomePage:!1,title:"\u5355\u7ec4\u4ef6\u8c03\u8bd5\u914d\u7f6e",description:"\u914d\u7f6e\u7ed3\u6784",source:"@site/docs/settings/play.md",sourceDirName:"settings",slug:"/settings/play",permalink:"/reskript/docs/settings/play",version:"current",frontMatter:{title:"\u5355\u7ec4\u4ef6\u8c03\u8bd5\u914d\u7f6e"},sidebar:"docs",previous:{title:"\u8c03\u8bd5\u670d\u52a1\u5668\u914d\u7f6e",permalink:"/reskript/docs/settings/dev-server"},next:{title:"\u63d2\u4ef6\u914d\u7f6e",permalink:"/reskript/docs/settings/plugins"}},c=[{value:"\u914d\u7f6e\u7ed3\u6784",id:"\u914d\u7f6e\u7ed3\u6784",children:[]},{value:"\u5168\u5c40\u914d\u7f6e",id:"\u5168\u5c40\u914d\u7f6e",children:[]},{value:"\u542f\u7528\u5e76\u53d1\u6a21\u5f0f",id:"\u542f\u7528\u5e76\u53d1\u6a21\u5f0f",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u914d\u7f6e\u7ed3\u6784"},"\u914d\u7f6e\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"reskript.config.js"),"\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"exports.play"),"\u7528\u6765\u914d\u7f6e\u8c03\u8bd5\u5355\u4e2a\u7ec4\u4ef6\u65f6\u7684\u76f8\u5173\u884c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"interface PlaySettings {\n    // \u9ed8\u8ba4\u542f\u7528React\u7684\u5e76\u53d1\u6a21\u5f0f\n    readonly defaultEnableConcurrentMode: boolean;\n    // \u6307\u5b9a\u5168\u5c40\u914d\u7f6e\u6a21\u5757\u8def\u5f84\n    readonly defaultGlobalSetup?: string;\n}\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u6240\u6709\u7684\u914d\u7f6e\u5747\u53ef\u4ee5\u7701\u7565\u3002"),(0,l.kt)("h2",{id:"\u5168\u5c40\u914d\u7f6e"},"\u5168\u5c40\u914d\u7f6e"),(0,l.kt)("p",null,"\u901a\u5e38\u4e00\u4e2a\u5e94\u7528\u91cc\uff0c\u4f1a\u6709\u4e00\u4e9b\u51e0\u4e4e\u6240\u6709\u7ec4\u4ef6\u8c03\u8bd5\u90fd\u9700\u8981\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982\u5927\u5bb6\u90fd\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"Button"),"\u7ec4\u4ef6\uff0c\u6216\u8005\u5927\u5bb6\u90fd\u9700\u8981\u4e8b\u5148\u5f15\u5165\u5168\u5c40\u7684\u6837\u5f0f",(0,l.kt)("inlineCode",{parentName:"p"},"src/styles/app.global.css"),"\u4e4b\u7c7b\u7684\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"skr play"),"\u652f\u6301\u4e00\u4e2a\u5168\u5c40\u7684\u914d\u7f6e\u6a21\u5757\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"exports.play.defaultGlobalSetup"),"\u6765\u8bbe\u5b9a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\n\nexports.play = {\n    defaultGlobalSetup: path.join(__dirname, 'src', 'config', 'play.js'),\n};\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5c5e\u6027\u5fc5\u987b\u6307\u5411\u4e00\u4e2a\u5b58\u5728\u7684\u6587\u4ef6\u540d\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u7701\u7565\u6587\u4ef6\u540e\u7f00"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u914d\u7f6e\u4e0e",(0,l.kt)("a",{parentName:"p",href:"../advanced/debug-component#%E7%BB%84%E4%BB%B6%E8%B0%83%E8%AF%95%E9%85%8D%E7%BD%AE"},"\u5355\u4e2a\u7ec4\u4ef6\u7684\u8c03\u8bd5\u914d\u7f6e"),"\u7684\u4f5c\u7528\u662f\u4e00\u6837\u7684\uff0c\u4f60\u53ef\u4ee5\u5f15\u5165\u4efb\u4f55\u6a21\u5757\uff0c\u5e76\u5141\u8bb8\u5bfc\u51fa",(0,l.kt)("inlineCode",{parentName:"p"},"provides"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Wrapper"),"\u4e24\u4e2a\u5185\u5bb9\uff0c\u8fd92\u4e2a\u5185\u5bb9\u4e0e\u5355\u4e2a\u7ec4\u4ef6\u7684\u914d\u7f6e\u7684\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5355\u7ec4\u4ef6\u914d\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"provides"),"\u5168\u4e0e\u5168\u5c40\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"provides"),"\u5408\u5e76\uff0c\u4e14\u5355\u7ec4\u4ef6\u914d\u7f6e\u8986\u76d6\u5168\u5c40\u4e2d\u540c\u540d\u7684\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u663e\u793a\u7ec4\u4ef6\u65f6\uff0c\u9996\u5148\u6e32\u67d3\u5168\u5c40\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Wrapper"),"\uff0c\u5728\u5176\u5185\u90e8\u6e32\u67d3\u5355\u7ec4\u4ef6\u914d\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Wrapper"),"\uff0c\u6700\u540e\u518d\u6e32\u67d3\u7ec4\u4ef6\u672c\u8eab\u3002")),(0,l.kt)("p",null,"\u66f4\u591a\u5355\u7ec4\u4ef6\u8c03\u8bd5\u7684\u9ad8\u7ea7\u624b\u6bb5\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"../advanced/debug-component"},"\u9ad8\u9636\u5e94\u7528 - \u8c03\u8bd5\u5355\u4e2a\u7ec4\u4ef6"),"\u7ae0\u8282\u7684\u8be6\u7ec6\u8bf4\u660e\u3002"),(0,l.kt)("p",null,"\u5f53\u4f60\u60f3\u7528\u4e0d\u540c\u7684\u5168\u5c40\u914d\u7f6e\u8c03\u8bd5\u7ec4\u4ef6\u65f6\uff0c\u4e5f\u53ef\u4ee5\u7528",(0,l.kt)("a",{parentName:"p",href:"../cli/play#%E5%8F%82%E6%95%B0"},"\u547d\u4ee4\u884c\u7684",(0,l.kt)("inlineCode",{parentName:"a"},"--setup"),"\u53c2\u6570"),"\u6765\u8986\u76d6",(0,l.kt)("inlineCode",{parentName:"p"},"defaultGlobalSetup"),"\u914d\u7f6e\uff0c\u6bd4\u5982\u53ef\u4ee5\u501f\u6b64\u8c03\u8bd5\u6697\u9ed1\u6a21\u5f0f\u4e0b\u7684\u6548\u679c\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u5e76\u53d1\u6a21\u5f0f"},"\u542f\u7528\u5e76\u53d1\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u4e86React 18.x\uff0c\u5e76\u5e0c\u671b\u5728\u8c03\u8bd5\u7ec4\u4ef6\u65f6\u8bd5\u4e00\u8bd5\u5e76\u53d1\u6a21\u5f0f\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"exports.play.defaultEnableConcurrentMode"),"\u914d\u7f6e\u6765\u6253\u5f00\u5b83\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"exports.play = {\n    defaultEnableConcurrentMode: true,\n};\n")),(0,l.kt)("p",null,"\u5f53\u6253\u5f00\u8fd9\u4e2a\u914d\u7f6e\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"skr play"),"\u751f\u6210\u7684\u4ee3\u7801\u4f1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"createRoot"),"\u4ee3\u66ff",(0,l.kt)("inlineCode",{parentName:"p"},"render"),"\uff0c\u4ee5\u6b64\u5f00\u542f\u5e76\u53d1\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u9488\u5bf9\u67d0\u4e9b\u7ec4\u4ef6\u5c1d\u8bd5\u6027\u5730\u4f7f\u7528\u5e76\u53d1\u6a21\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"../cli/play#%E5%8F%82%E6%95%B0"},"\u547d\u4ee4\u884c\u7684",(0,l.kt)("inlineCode",{parentName:"a"},"--concurrent-mode"),"\u53c2\u6570"),"\u6765\u5355\u72ec\u542f\u7528\u3002"))}d.isMDXComponent=!0}}]);