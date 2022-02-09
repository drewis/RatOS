"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[545],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),h=r,u=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1086:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],l={sidebar_label:"SKR 2 429"},s="BIGTREETECH SKR 2 w/ STM32F429",d={unversionedId:"boards/btt/skr-2-429",id:"boards/btt/skr-2-429",title:"BIGTREETECH SKR 2 w/ STM32F429",description:"This board currently cannot be flashed automatically through USB, that means all firmware updates have to be done by physically moving an sd card from and to the board for now. RatOS compiles the firmware binary for you each time klipper is updated (while the SKR 2 is connected), you can find the most recent firmware in the Mainsail Machine page under the firmware_binaries folder). Automatic flashing may be possible in the future if SDIO support is implemented in klipper. See this thread//github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510 for more info.",source:"@site/docs/boards/btt/skr-2-429.md",sourceDirName:"boards/btt",slug:"/boards/btt/skr-2-429",permalink:"/docs/boards/btt/skr-2-429",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/boards/btt/skr-2-429.md",tags:[],version:"current",frontMatter:{sidebar_label:"SKR 2 429"},sidebar:"docsSidebar",previous:{title:"Octopus Pro 446",permalink:"/docs/boards/btt/octopus-pro-446"},next:{title:"SKR Pro v1.2",permalink:"/docs/boards/btt/skr-pro-12"}},m=[{value:"Wiring",id:"wiring",children:[],level:2},{value:"Firmware installation",id:"firmware-installation",children:[],level:2},{value:"Manual firmware upgrade",id:"manual-firmware-upgrade",children:[],level:2}],p={toc:m};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bigtreetech-skr-2-w-stm32f429"},"BIGTREETECH SKR 2 w/ STM32F429"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Only Partial support")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This board currently cannot be flashed automatically through USB, that means all firmware updates have to be done by physically moving an sd card from and to the board for now. RatOS compiles the firmware binary for you each time klipper is updated (while the SKR 2 is connected), you can find the most recent firmware in the Mainsail Machine page under the ",(0,i.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder). Automatic flashing may be possible in the future if SDIO support is implemented in klipper. See this thread: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510"},"https://github.com/Klipper3d/klipper/pull/4881#issuecomment-962596510")," for more info."))),(0,i.kt)("h2",{id:"wiring"},"Wiring"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BTT Octopus Pro STM32F429 Wiring Diagram",src:a(3501).Z,width:"2324",height:"1557"}),"\n",(0,i.kt)("a",{target:"_blank",href:a(8658).Z},"Open Full Size Image")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"if you use the Ratrig endstop switches and cables, do ",(0,i.kt)("strong",{parentName:"h5"},"not")," blindly plug them in to your SKR 2 as doing this will short the board's 5V power rail.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will probably have to swap the outer two wires (red and white) on the board end of the cable but double check to make sure your cables match the wiring diagram."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Jumpers")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("img",{alt:"Jumper Symbol",src:a(8101).Z,width:"40",height:"16"})," A green square with triangles inside is where you would place a jumper,\nremove all jumpers on the board that are not marked by this symbol."))),(0,i.kt)("h2",{id:"firmware-installation"},"Firmware installation"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Use a proper cable")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure your board is connected to the Pi ",(0,i.kt)("strong",{parentName:"p"},"via the provided USB cable")," (USB-B on the SKR 2 429, USB-A on the Pi)."))),(0,i.kt)("p",null,"Download the ",(0,i.kt)("inlineCode",{parentName:"p"},"firmware-btt-skr-2-429.bin")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder found on the Machine page of ",(0,i.kt)("a",{parentName:"p",href:"http://RatOS.local/"},"Mainsail"),", copy it onto the SD card that goes into your control board and call it ",(0,i.kt)("inlineCode",{parentName:"p"},"firmware.bin"),", then insert the SD card in to the control board. Here are the steps in chronological order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"http://RatOS.local/"},"http://RatOS.local/")),(0,i.kt)("li",{parentName:"ol"},"Open Machine page"),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"firmware_binaries")," folder"),(0,i.kt)("li",{parentName:"ol"},"Download ",(0,i.kt)("inlineCode",{parentName:"li"},"firmware-btt-skr-2-429.bin")),(0,i.kt)("li",{parentName:"ol"},"Format the sd card for your board to FAT16 (sometimes just called FAT), or FAT32 with a clustersize of 8kb or 4kb."),(0,i.kt)("li",{parentName:"ol"},"Copy ",(0,i.kt)("inlineCode",{parentName:"li"},"firmware-btt-skr-2-429.bin")," onto the sd card for your board"),(0,i.kt)("li",{parentName:"ol"},"Rename ",(0,i.kt)("inlineCode",{parentName:"li"},"firmware-btt-skr-2-429.bin")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"firmware.bin")),(0,i.kt)("li",{parentName:"ol"},"Safely eject the SD card through your operating system."),(0,i.kt)("li",{parentName:"ol"},"Physically take out the sd card and insert it into your control board."),(0,i.kt)("li",{parentName:"ol"},"Power cycle your printer or control board. Remember to shut the pi down properly before you cut power to your Pi (you can do that through Mainsail using the dropdown menu in the top right corner)."),(0,i.kt)("li",{parentName:"ol"},"Verify that the firmware has been flashed.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can verify if the board flashed correctly by checking if the firmware.bin file has been changed to firmware.CUR on the SD card. If you have trouble flashing the motherboard, start unplugging your wires beginning with the endstops, sometimes faulty wiring can cause the board to not boot properly."))),(0,i.kt)("p",null,"If you're going through initial setup please continue in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation#setup"},"installation guide")),(0,i.kt)("h2",{id:"manual-firmware-upgrade"},"Manual firmware upgrade"),(0,i.kt)("p",null,"Sometimes klipper makes changes to the microcontroller code and thus your MCU need to be reflashed with new firmware. If you see an error like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Firmware version mismatch between host and guest",src:a(1240).Z,width:"849",height:"260"})),(0,i.kt)("p",null,"And the host version number is larger than the mcu version number, you need to flash your control board. If the host version is lower than the MCU number, you need to update klipper on your pi. RatOS compiles the firmware binary for you each time klipper is updated (while the SKR 2 is connected), you can find the most recent firmware in the Mainsail Machine page under the ",(0,i.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder)"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RatOS automatically compiles new firmware for your board when klipper is updated and places it in the firmware_binaries folder, you can download the binary from here and flash via SD card manually. Follow the process described above."))))}c.isMDXComponent=!0},8658:function(e,t,a){t.Z=a.p+"assets/files/skr-2-429-wiring-full-7ba0d169aa9036552b8c02240700b5aa.svg"},8101:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmx1Y2lkPSJsdWNpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE2Ij48ZyBzdHJva2U9IiM3YWI2NDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI2ZmZiIgbHVjaWQ6cGFnZS10YWItaWQ9IjBfMCIgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMiwgLTEyKSI+PHBhdGggZD0iTTQzLjg4IDI3Ljg2aC0yMy43VjIwLjJoMjMuN3Y3LjY2eiIvPjxwYXRoIGQ9Ik00My44OCAyMi4wNmwtMy44NCA0LjItNC4wOC00LjItMy45NCA0LjItMy45OC00LjItNCA0LjItMy44Ny00LjIiLz48L2c+PC9zdmc+"},3501:function(e,t,a){t.Z=a.p+"assets/images/skr-2-429-wiring-27fa38d7a5fe0e7110712638fe97a925.svg"},1240:function(e,t,a){t.Z=a.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"}}]);