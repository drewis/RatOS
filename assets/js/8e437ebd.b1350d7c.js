"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[264],{3905:function(e,t,r){r.d(t,{Zo:function(){return L},kt:function(){return y}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var M=a.createContext({}),u=function(e){var t=a.useContext(M),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},L=function(e){var t=u(e.components);return a.createElement(M.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,M=e.parentName,L=s(e,["components","mdxType","originalType","parentName"]),c=u(r),y=i,j=c["".concat(M,".").concat(y)]||c[y]||l[y]||o;return r?a.createElement(j,n(n({ref:t},L),{},{components:r})):a.createElement(j,n({ref:t},L))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=c;var s={};for(var M in t)hasOwnProperty.call(t,M)&&(s[M]=t[M]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var u=2;u<o;u++)n[u]=r[u];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6836:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return M},metadata:function(){return u},assets:function(){return L},toc:function(){return l},default:function(){return y}});var a=r(3117),i=r(102),o=(r(7294),r(3905)),n=["components"],s={slug:"ratos-v1-0-released",title:"RatOS V1.0 Released!",authors:["miklschmidt"],tags:["RatOS","Releases"]},M=void 0,u={permalink:"/blog/ratos-v1-0-released",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/blog/2021-11-14-ratos-v1-0-released.mdx",source:"@site/blog/2021-11-14-ratos-v1-0-released.mdx",title:"RatOS V1.0 Released!",description:"RatOS V1.0 is here!",date:"2021-11-14T00:00:00.000Z",formattedDate:"November 14, 2021",tags:[{label:"RatOS",permalink:"/blog/tags/rat-os"},{label:"Releases",permalink:"/blog/tags/releases"}],readingTime:2.31,truncated:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}],frontMatter:{slug:"ratos-v1-0-released",title:"RatOS V1.0 Released!",authors:["miklschmidt"],tags:["RatOS","Releases"]},prevItem:{title:"RatOS V1.1 Released!",permalink:"/blog/ratos-v1-1-released"}},L={authorsImageUrls:[void 0]},l=[{value:"RatOS V1.0 is here!",id:"ratos-v10-is-here",children:[{value:"Mainsail is here!",id:"mainsail-is-here",children:[],level:3},{value:"Automated firmware updates",id:"automated-firmware-updates",children:[],level:3},{value:"RPi as additional MCU.",id:"rpi-as-additional-mcu",children:[],level:3},{value:"More powerful macros",id:"more-powerful-macros",children:[],level:3},{value:"More flexible macros",id:"more-flexible-macros",children:[],level:3},{value:"Updating from V-CoreOS RC 2",id:"updating-from-v-coreos-rc-2",children:[],level:3},{value:"THANK YOU for your support",id:"thank-you-for-your-support",children:[],level:3}],level:2}],c={toc:l};function y(e){var t=e.components,s=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"ratos-v10-is-here"},"RatOS V1.0 is here!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RatOS",src:r(9660).Z,width:"1728",height:"443"})),(0,o.kt)("p",null,"RatOS V1.0 is finally released, it's been a long road to get here, thank you everyone who has been testing and supporting me get this release completed.\nThere's a lot of new exciting features that i'm dying to share with you all."),(0,o.kt)("h3",{id:"mainsail-is-here"},"Mainsail is here!"),(0,o.kt)("p",null,"RatOS now ships with Mainsail as the default UI. The Mainsail team has been teasing a lot of awesome features lately and now RatOS users get them too."),(0,o.kt)("h3",{id:"automated-firmware-updates"},"Automated firmware updates"),(0,o.kt)("p",null,"That's right. RatOS will now flash your board for you everytime klipper is updated.\nThis has been a high priority for me, since much of my time has been spent answering questions about the infamous version mismatch error.\nIt hasn't been very clear to beginners, what they need to do to get things working again, after having updated klipper and getting presented with an error.\nThis is now a thing of the past!"),(0,o.kt)("p",null,"Unfortunately there's an exception for the Octopus Pro 429, since there's currently no way to flash that board automatically.\nRead more about that in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-429#firmware-installation"},"Octopus Pro 429 Board Documentation")),(0,o.kt)("h3",{id:"rpi-as-additional-mcu"},"RPi as additional MCU."),(0,o.kt)("p",null,"Automated firmware updates made it possible to add the RPi as an additional mcu, it's now preconfigured and automatically updated, so you can use\nit for additional GPIO's, ADXL345 or other sensors if you need to. This also opens up for using dual ADXL345's on bed slingers."),(0,o.kt)("h3",{id:"more-powerful-macros"},"More powerful macros"),(0,o.kt)("p",null,"RatOS now ships with the gcode_shell_command.py klipper extension, this allows for macros to compile binaries, pick your printer configuration, generate input shaper graphs and more without you ever having to SSH into your pi. It's been the primary design principle of RatOS from the start that running klipper on your printer should not require knowledge of SSH or Linux, so this is another step in the right direction!"),(0,o.kt)("h3",{id:"more-flexible-macros"},"More flexible macros"),(0,o.kt)("p",null,"We've added a bunch of parameters you can configure for changing the behavior of the built-in RatOS macro's, want your START_PRINT to skip the bed mesh calibration? No problem. Want the carriage to park in the front during pauses? Easy! How about starting your print with a primeline? You've got it! Read more in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/macros"},"Macro Configuration documentation")),(0,o.kt)("h3",{id:"updating-from-v-coreos-rc-2"},"Updating from V-CoreOS RC 2"),(0,o.kt)("p",null,"If you're using V-CoreOS RC 2, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/changelog#updating-from-v-coreos-rc2"},"Update Guide")," for a smooth transition."),(0,o.kt)("h3",{id:"thank-you-for-your-support"},"THANK YOU for your support"),(0,o.kt)("p",null,"The amount of support and encouragement i've recieved from the community has been heartwarming, and totally makes the long nights worth it!\nThank you for helping and thank you for using RatOS!"),(0,o.kt)("p",null,"If you wish to donate towards a new spool of filament or a cup of coffee you can do so here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/miklschmidt"},"github.com/sponsors/miklschmidt")," or ",(0,o.kt)("a",{parentName:"p",href:"https://paypal.me/miklschmidt"},"paypal.me/miklschmidt"),". Thank you very much!"))}y.isMDXComponent=!0},9660:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FtYWRhXzEiIGRhdGEtbmFtZT0iQ2FtYWRhIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDE3MjguNDkgNDQzLjM4Ij48ZGVmcz48c3R5bGU+LmNscy0xLC5jbHMtM3tmaWxsOiNmZmY7fS5jbHMtMXtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy0ye2ZpbGw6IzVhZmYwMDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTM2LjI3LDE2Mi4yMmwxOS42NCwzMi42M3YyNy41NmMtNi43OC04LjI0LTQxLjA4LTQyLjY4LTE5LjY0LTYwLjE5TTY2LjcsNzYsOTQuNjMsODguNTMsNzksMTA2LjM0Wk0yMTAuMjEsMzU4VjM4MkgxOTYuNTNMMTc4LjI0LDM1OFpNNDEuODEsNTAuOGw1OS43LDI2LjkyaDEwOC43djI3My43aC0zN2wtMTcuNDUtMjIuOTUtNi41LTE1Ljg0LTI3LDI2LjgyTDExOS44OCwzMzdsMjgtMjcuODMtNC42Mi0xMS4yNUwxMDQuNTcsMzEzbC0xLjI3LTMuMjMsMzguNjMtMTUuMTEtNC4yLTEwLjIzSDk4LjQyVjI4MUgxMzYuM1oiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yODEuMjEsMzMwLjY0bDIxLjM2LTIwLjE2YTQwLjc0LDQwLjc0LDAsMCwwLDEyLjc4LTI5LjYzVjE3MS42QTQwLjcsNDAuNywwLDAsMCwzMDEsMTQwLjUzbC0xOS43NC0xNi43NFoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zMzcuODcsMTcxLjgxVjI3Ny4xOGwyNS43MS0yNC4yNmE0MC43NCw0MC43NCwwLDAsMCwxMi43OC0yOS42MmgwQTQwLjc0LDQwLjc0LDAsMCwwLDM2MiwxOTIuMjJaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjQ0LjI5LDkyLjUxLDIyNyw3Ny44N3YzMDMuOWwxOC45LTE3LjgzYTQwLjc0LDQwLjc0LDAsMCwwLDEyLjc4LTI5LjYzVjEyMy41OUE0MC43Niw0MC43NiwwLDAsMCwyNDQuMjksOTIuNTFaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNNjIxLjgsMzgyVjMwMy42NmMwLTI5LjMzLTExLTQwLjc5LTQ3LjY3LTQwLjc5SDUwNi4zVjM4Mkg0NDQuNDJWNzcuNjlINTk4Ljg5YzU2LjM3LDAsOTMuNSwzNy41OSw5My41LDg4LDAsMzIuNTQtMTYsNjAtNDUuMzgsNzAuNTgsMjcsOC43MSwzNy4xMywyMy44NCwzNy4xMyw1OS41OVYzODJaTTUwNi4zLDEzMC40djgxLjEzaDc5Ljc1YzMzLjkyLDAsNDYuNzUtMTcsNDYuNzUtNDAuMzMsMC0yMy44NC0xMi44My00MC44LTQ0LjQ2LTQwLjhaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNODUxLjg5LDM4MmE4OCw4OCwwLDAsMS0zLjY2LTIwLjE3QzgzNCwzNzcuNDYsODEwLjE4LDM4OCw3NzkuOTMsMzg4Yy01MS4zMywwLTc1LjE3LTI1LjIxLTc1LjE3LTYxLjg4LDAtNjUuMDgsNDMuNTUtNzIuNDIsMTAzLjU5LTgwLjY3LDI5Ljc5LTQuMTIsMzgtMTAuMDgsMzgtMjUuNjcsMC0xNC42Ni0xNC42Ni0yMy4zNy0zOC0yMy4zNy0yNywwLTM4LDEzLjI5LTQwLjc5LDMzLjQ2SDcxMi4wOWMuOTItNDYuNzYsMjYuNTktNzkuMyw5OS03OS4zLDcxLjUxLDAsOTYuMjYsMzIuMDksOTYuMjYsODguOTJWMzgyWm0tNC4xMi0xMTAuNDZjLTYsNi0xNi41LDkuMTctMzguNSwxMy4yOS0zMy45Miw2LjQyLTQ0LjkyLDE2LTQ0LjkyLDM1LjI5LDAsMTcsMTAuMDgsMjUuMjEsMjguODcsMjUuMjEsMzAuNzEsMCw1My42My0yMi40Niw1NC4wOS00OVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMDYxLjM2LDIzMy41M2g1NS40NlYyOTcuN2MwLDQ3LjY3LTI3LjUsOTAuMy05MS4yMSw5MC4zLTY2LDAtOTIuMTMtNDIuMTctOTIuMTMtOTAuNzVWOTUuNTdoNTguNjd2NjFoMTI0LjY3VjE5OC43SDk5Mi4xNXY5Mi41OWMwLDI4LjQyLDEwLjA4LDQ0LjkyLDM0LjM4LDQ0LjkyLDIzLjgzLDAsMzQuODMtMTYsMzQuODMtNDRaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNMTEzNi4wNywyMzIuNjJjMC0xMDMuMTMsNTIuNzEtMTY1LDE0Ni4yMS0xNjVzMTQ1LjMsNjEuODgsMTQ1LjMsMTY2LjM4LTUxLjc5LDE1OC41OS0xNDUuMywxNTguNTlTMTEzNi4wNywzMzUuMjksMTEzNi4wNywyMzIuNjJaTTEzNjQuNzksMjM0YzAtNzItMjkuMzQtMTEwLTgyLjUxLTExMC01My42MiwwLTgzLjQyLDM4LTgzLjQyLDExMFMxMjI5LjU3LDMzOCwxMjgyLjI4LDMzOEMxMzI4LjEyLDMzOCwxMzY0Ljc5LDMwNiwxMzY0Ljc5LDIzNFoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xNjE2LDE2Ny41M2MtMy4yLTMxLjE3LTIyLTQ2LjI5LTYwLjUtNDYuMjktMzUuNzUsMC01NC41NCwxMi44My01NC41NCwzNS43NSwwLDE5LjI1LDEzLjI5LDMwLjI1LDQ3LjIxLDM4LjUsMzQuMzcsOC4yNSw2Ny44MywxNi41LDkwLjI5LDI2LjU4LDI2LjU5LDExLjkyLDQ3LjY3LDMwLjcyLDQ3LjY3LDczLjgsMCw2Ni45Mi01MC40Miw5Ni43MS0xMjEuNDYsOTYuNzEtNzUuMTcsMC0xMjcuNDMtMzMuNDYtMTI4LjgtMTAxLjc1aDYxLjQyYy45MiwzMS4xNywyNyw1MC40Miw2Ny44NCw1MC40MiwzNy41OCwwLDU5LjEyLTE2LDU5LjEyLTQzLjA5LDAtMTcuODctOS4xNi0zMC4yNS00Ny4yMS0zOC41LTM3LjU4LTguMjUtNjEuODgtMTMuNzUtODMuNDItMjMuMzgtMzIuNTQtMTQuNjYtNTAuODgtMzYuNjYtNTAuODgtNzUuMTcsMC01NC41NCwzNy4xMy05My41LDExMS4zOS05My41LDc3LDAsMTIwLjA5LDQxLjcxLDEyMi4zOCw5OS45MloiLz48L3N2Zz4="}}]);