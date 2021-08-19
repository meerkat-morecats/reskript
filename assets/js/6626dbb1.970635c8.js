(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[3872],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2578:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>d});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),i=["components"],p={title:"\u6784\u5efa\u5e94\u7528"},o=void 0,s={unversionedId:"cli/build",id:"cli/build",isDocsHomePage:!1,title:"\u6784\u5efa\u5e94\u7528",description:"\u547d\u4ee4",source:"@site/docs/cli/build.md",sourceDirName:"cli",slug:"/cli/build",permalink:"/reskript/docs/cli/build",version:"current",frontMatter:{title:"\u6784\u5efa\u5e94\u7528"},sidebar:"docs",previous:{title:"\u547d\u4ee4\u884c\u4ecb\u7ecd",permalink:"/reskript/docs/cli/introduction"},next:{title:"\u672c\u5730\u8c03\u8bd5",permalink:"/reskript/docs/cli/dev"}},c=[{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u6307\u5b9a\u76ee\u6807\u7279\u6027\u96c6",id:"\u6307\u5b9a\u76ee\u6807\u7279\u6027\u96c6",children:[]},{value:"\u4ec5\u6784\u5efa\u6307\u5b9a\u5165\u53e3",id:"\u4ec5\u6784\u5efa\u6307\u5b9a\u5165\u53e3",children:[]},{value:"\u4ea7\u51fa\u5206\u6790",id:"\u4ea7\u51fa\u5206\u6790",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"skr build"),"\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"webpack"),"\u6765\u6784\u5efa\u5e94\u7528\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"--cwd [value]               \u6307\u5b9a\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u76ee\u5f55\n--mode [value]              \u8bbe\u7f6e\u6784\u5efa\u7684\u73af\u5883\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4e3adevelopment\u6216production\uff0c\u9ed8\u8ba4\u4e3aproduction\n--src-dir [value]           \u6307\u5b9a\u9879\u76ee\u6e90\u7801\u6240\u5728\u7684\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3asrc\n--build-target [value]      \u6307\u5b9a\u6784\u5efa\u7684\u76ee\u6807\u7279\u6027\u540d\u79f0\uff0c\u5982\u679c\u6709\u8fd9\u4e2a\u53c2\u6570\uff0c\u6700\u540e\u4f1a\u751f\u6210\u4e00\u4e2aindex.html\u5305\u542b\u8be5\u7279\u6027\u96c6\n--feature-only [value]      \u53ea\u6784\u5efa\u6307\u5b9a\u7684\u7279\u6027\u540d\u79f0\uff0c\u5176\u5b83\u7684\u7279\u6027\u540d\u79f0\u4e0d\u53c2\u4e0e\u6784\u5efa\n--entries-only [entries...] \u53ea\u6784\u5efa\u6307\u5b9a\u7684\u5165\u53e3\u6587\u4ef6\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u5165\u53e3\n--analyze                   \u542f\u7528\u5bf9\u6784\u5efa\u4ea7\u7269\u7684\u5206\u6790\u529f\u80fd\n--profile                   \u5728\u6784\u5efa\u4ea7\u51fa\u4e2d\u52a0\u5165\u6027\u80fd\u8ffd\u8e2a\u7684\u80fd\u529b\n--no-source-maps            \u6784\u5efa\u65f6\u4e0d\u4ea7\u51fasource map\n--clean                     \u6784\u5efa\u524d\u5220\u9664\u4e0a\u4e00\u6b21\u6784\u5efa\u7684\u4ea7\u51fa\n--cache-dir                 \u6307\u5b9a\u6784\u5efa\u7f13\u5b58\u7684\u5b58\u653e\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3anode_modules/.cache/webpack\n-h, --help                  \u663e\u793a\u5e2e\u52a9\u4fe1\u606f\n")),(0,l.kt)("p",null,"\u9664\u547d\u4ee4\u884c\u53c2\u6570\u5916\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"reskript.config.js"),"\u4e2d\u7684",(0,l.kt)("a",{parentName:"p",href:"../settings/build"},(0,l.kt)("inlineCode",{parentName:"a"},"build")),"\u914d\u7f6e\u4e5f\u4f1a\u5f71\u54cd\u6784\u5efa\u7684\u884c\u4e3a\u3002"),(0,l.kt)("h2",{id:"\u6307\u5b9a\u76ee\u6807\u7279\u6027\u96c6"},"\u6307\u5b9a\u76ee\u6807\u7279\u6027\u96c6"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u4e86",(0,l.kt)("a",{parentName:"p",href:"../settings/feature-matrix"},"\u7279\u6027\u77e9\u9635"),"\u8fd9\u4e00\u529f\u80fd\uff0c\u53ef\u4ee5\u652f\u6301\u4e00\u6b21\u6027\u6784\u5efa\u51fa\u591a\u4e2a\u7248\u672c\u3002\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\uff0c\u6784\u5efa\u7684\u6700\u7ec8\u5165\u53e3\u4f1a\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"{entryName}-{featureName}.html"),"\u7684\u5f62\u5f0f\u3002"),(0,l.kt)("p",null,"\u4f46\u6709\u4e9b\u9879\u76ee\u7684\u7ebf\u4e0a\u90e8\u7f72\u65b9\u5f0f\u662f\u56fa\u5b9a\u7684\uff0c\u4e14\u53ea\u80fd\u63a5\u53d7",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\u8fd9\u4e00\u547d\u540d\uff0c\u6b64\u65f6\u4ee3\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--build-target"),"\u53c2\u6570\u6765\u989d\u5916\u751f\u6210\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"skr build --build-target=stable\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u5728\u5b8c\u6210\u6240\u6709\u7248\u672c\u7684\u6784\u5efa\u540e\uff0c\u989d\u5916\u589e\u52a0\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),"\uff0c\u6700\u7ec8\u751f\u6210\u7684\u7ed3\u6784\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/assets\n    # \u4e00\u5806\u4f9d\u8d56\u7684\u8d44\u6e90\nindex-stable.html\nindex-insiders.html\nindex.html # \u5185\u5bb9\u548cindex-stable.html\u4e00\u6837\n")),(0,l.kt)("p",null,"\u53e6\u4e00\u79cd\u60c5\u51b5\u662f\uff0c\u4f60\u6839\u672c\u4e0d\u5e0c\u671b\u4e00\u6b21\u6027\u6784\u5efa\u591a\u4e2a\u7248\u672c\uff0c\u6216\u8005\u4f60\u6709\u4e00\u4e2a\u66f4\u9ad8\u6548\u7684\u5e76\u884c\u6267\u884c\u7684CI/CD\u670d\u52a1\uff0c\u6240\u4ee5\u4f60\u5e0c\u671b\u5e76\u884c\u5730\u5355\u72ec\u6784\u5efa\u6bcf\u4e00\u4e2a\u7248\u672c\u3002\u8fd9\u65f6\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--feature-only"),"\u6765\u63a7\u5236\uff0c\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"skr build --feature-only=stable\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u4f1a\u53ea\u6784\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},"stable"),"\u8fd9\u4e00\u7279\u6027\u96c6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"featureMatrix"),"\u4e2d\u5176\u5b83\u7684\u7279\u6027\u96c6\u5747\u4e0d\u53c2\u4e0e\u672c\u6b21\u6784\u5efa\u3002"),(0,l.kt)("h2",{id:"\u4ec5\u6784\u5efa\u6307\u5b9a\u5165\u53e3"},"\u4ec5\u6784\u5efa\u6307\u5b9a\u5165\u53e3"),(0,l.kt)("p",null,"\u5047\u8bbe\u9879\u76ee\u4e2d\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"src/entries/index.tsx"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"src/entries/foo.tsx"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"src/entries/bar.tsx"),"\u4e00\u51713\u4e2a\u5165\u53e3\uff0c\u5982\u679c\u60f3\u53ea\u6784\u5efa\u5176\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"foo"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"\u4e24\u4e2a\u5165\u53e3\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u6837\u7684\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"skr build --entries-only=foo --entries-only=bar\n")),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"--entries-only"),"\u53c2\u6570\uff0c\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u5165\u53e3\u8fdb\u884c\u6784\u5efa\u3002\u8fd9\u5728\u4e00\u4e2a\u5927\u578b\u9879\u76ee\u901a\u8fc7\u5165\u53e3\u5206\u5272\u6210\u591a\u4e2a\u53ef\u5355\u72ec\u53d1\u5e03\u7684\u5c0f\u9879\u76ee\u65f6\u80fd\u63d0\u5347\u6784\u5efa\u901f\u5ea6\u3002\u4f46\u901a\u5e38\u6765\u8bf4\u6211\u4eec\u66f4\u63a8\u8350\u4f7f\u7528monorepo\u7684\u5f62\u5f0f\u7ec4\u7ec7\u591a\u4e2a\u5b50\u6a21\u5757\u6784\u6210\u7684\u5927\u578b\u9879\u76ee\uff0c\u800c\u4e0d\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"--entries-only"),"\u53c2\u6570\u6765\u5904\u7406\u3002"),(0,l.kt)("h2",{id:"\u4ea7\u51fa\u5206\u6790"},"\u4ea7\u51fa\u5206\u6790"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u4e86\u89e3\u81ea\u5df1\u7684\u9879\u76ee\u6784\u5efa\u540e\u7684\u4ea7\u7269\u60c5\u51b5\uff0c\u53ef\u4ee5\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"--analyze"),"\u53c2\u6570\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u4e2a\u53c2\u6570\u5fc5\u987b\u4e0e",(0,l.kt)("inlineCode",{parentName:"strong"},"--build-target"),"\u4e00\u8d77\u4f7f\u7528"),"\uff0c\u6307\u5b9a\u5206\u6790\u67d0\u4e00\u4e2a\u7279\u6027\u96c6\u7684\u4ea7\u7269\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"skr build --analyze --build-target=stable\n")),(0,l.kt)("p",null,"\u5728\u52a0\u4e0a\u8fd9\u4e00\u53c2\u6570\u540e\uff0c\u6211\u4eec\u4f1a\u5bf9\u4ea7\u7269\u8fdb\u884c\u4e00\u7cfb\u5217\u7684\u5206\u6790\uff0c\u5f53\u524d\u63d0\u4f9b\u7684\u80fd\u529b\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,l.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/webpack-bundle-analyzer"},"webpack-bundle-analyzer"),"\u751f\u6210\u4e00\u4efd\u4ea7\u51fa\u7684\u5206\u6790\u89c6\u56fe\uff0c\u5e76\u6253\u5f00\u4f60\u7684\u6d4f\u89c8\u5668\u5c55\u793a\u8fd9\u4e2a\u9875\u9762\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"dist/assets"),"\u4e2d\u751f\u6210\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"li"},"stats.json"),"\uff0c\u91cc\u9762\u5305\u542b\u4e86\u6574\u4e2a\u6784\u5efa\u7684\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u6211\u4eec\u6709\u8ba1\u5212\u5728\u540e\u7eed\u589e\u52a0\u66f4\u591a\u7684\u4ea7\u51fa\u5206\u6790\uff0c\u5982\u5bf9\u521d\u59cb\u52a0\u8f7d\u5927\u5c0f\u7684\u63a7\u5236\u3001\u672a\u4f7f\u7528\u4ee3\u7801\u7684\u5206\u6790\u7b49\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u4e0d\u8981\u5728CI\u73af\u5883\u4e2d\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"strong"},"--analyze"),"\u53c2\u6570\uff0c\u5b83\u4e0d\u4f1a\u7ed9\u4f60\u5e26\u6765\u4ec0\u4e48\u4f5c\u7528\uff0c\u4f46\u4f1a\u4e25\u91cd\u62d6\u6162\u6784\u5efa\u901f\u5ea6\u3002")))}d.isMDXComponent=!0}}]);