"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[550],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,g=p["".concat(d,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5081:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={},d="Includes & Overrides",s={unversionedId:"configuration/includes-and-overrides",id:"configuration/includes-and-overrides",title:"Includes & Overrides",description:"RatOS uses a modular configuration that heavily takes advantage of the config file include and merge logic in Klipper. For this reason, the order of includes and overrides are very important, do not change the order of the configuration unless you know what you're doing.",source:"@site/docs/configuration/includes-and-overrides.md",sourceDirName:"configuration",slug:"/configuration/includes-and-overrides",permalink:"/docs/configuration/includes-and-overrides",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/configuration/includes-and-overrides.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Advanced Stepper Configuration",permalink:"/docs/configuration/advanced-stepper-configuration"},next:{title:"Configuring RatOS Macros",permalink:"/docs/configuration/macros"}},l=[],u={toc:l};function p(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"includes--overrides"},"Includes & Overrides"),(0,a.kt)("p",null,"RatOS uses a modular configuration that heavily takes advantage of the config file include and merge logic in Klipper. For this reason, the order of includes and overrides are very important, do ",(0,a.kt)("strong",{parentName:"p"},"not")," change the order of the configuration unless you know what you're doing."),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Do ",(0,a.kt)("strong",{parentName:"p"},"NOT")," edit the files inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/")," folder. These files are controlled by RatOS and will be updated when the RatOS package is updated.\n",(0,a.kt)("img",{alt:"Hands off the RatOS Managed Config Folder!",src:n(2620).Z,width:"894",height:"590"})))),(0,a.kt)("p",null,"You can override any setting in RatOS, to do so you just copy the section and the parameter you need to change, and paste it in your printer.cfg after the related config file has been loaded. Let's say we wanted to change the current the extruder motor. If we navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"config/printers/v-core-3/steppers.cfg")," we'll see this section:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"[tmc2209 extruder]\nuart_pin: e_uart_pin\nrun_current: 0.5\nhold_current: 0.400\nstealthchop_threshold: 900\n")),(0,a.kt)("p",null,"We're only interested in the ",(0,a.kt)("inlineCode",{parentName:"p"},"run_current")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"hold_current")," settings, so all we need to do is go back to printer.cfg, scroll down to the ",(0,a.kt)("inlineCode",{parentName:"p"},"USER OVERRIDES")," comment section and put in the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"### USER OVERRIDES\n# Place all your overrides here\n\n[tmc2209 extruder]\nrun_current: 0.35\nhold_current: 0.200\n")),(0,a.kt)("p",null,"This works for any section (including gcode macros) and any parameter. You only need to override the parts you're interested in. Imagine that each ",(0,a.kt)("inlineCode",{parentName:"p"},"[include]")," section is simply replaced by the contents of the included file. You can have the same section defined multiple times, they will all get merged by klipper when it reads the config, with the last parameters taking precedence. This makes for a super powerful way to build your config! Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Config_Reference.html"},"klipper config reference")," for all the cool things you can do."))}p.isMDXComponent=!0},2620:function(e,t,n){t.Z=n.p+"assets/images/config-folder-783bb1478f027bfd6ad4aab7505bc287.png"}}]);