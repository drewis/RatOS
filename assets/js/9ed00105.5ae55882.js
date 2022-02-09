"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(3117),i=n(102),o=(n(7294),n(3905)),r=["components"],s={sidebar_label:"Initial Configuration",sidebar_position:2},l="Configuring RatOS",p={unversionedId:"configuration",id:"configuration",title:"Configuring RatOS",description:"RatOS only needs minimal configuration to work, but comes with a lot of optional functionality that you can enable manually.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Initial Configuration",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Slicer Configuration",permalink:"/docs/slicers"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Mainsail",id:"mainsail",children:[],level:2},{value:"Initial Configuration",id:"initial-configuration",children:[],level:2},{value:"Verify Stepper Directions",id:"verify-stepper-directions",children:[],level:2},{value:"Verify Endstops and Z-Probe",id:"verify-endstops-and-z-probe",children:[],level:2},{value:"Z-Offset",id:"z-offset",children:[],level:2},{value:"Updating",id:"updating",children:[{value:"Update",id:"update",children:[],level:3}],level:2},{value:"Tuning",id:"tuning",children:[],level:2}],d={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-ratos"},"Configuring RatOS"),(0,o.kt)("p",null,"RatOS only needs minimal configuration to work, but comes with a lot of optional functionality that you can enable manually."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Once you have completed the initial ",(0,o.kt)("a",{parentName:"p",href:"installation"},"setup")," and opened ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local/"},"http://RatOS.local/")," in your browser, you are almost ready to print. There's a just a few things to go over to make sure the configuration matches your particular setup."),(0,o.kt)("h2",{id:"mainsail"},"Mainsail"),(0,o.kt)("p",null,"Mainsail is the control interface for your printer. Mainsail is a web application that talks to Klipper through Moonraker (the Klipper API). Mainsail is what you'll be using to start prints, monitor progress, configure klipper and much more. Mainsail is what you see when you open ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local/"},"http://RatOS.local/"),";"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Mainsail",src:n(3495).Z,width:"1589",height:"993"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To learn more about mainsail, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mainsail.xyz/"},"read the mainsail documentation"),"."))),(0,o.kt)("h2",{id:"initial-configuration"},"Initial Configuration"),(0,o.kt)("p",null,"On the dashboard of Mainsail you'll see 3 macros in the Macros section."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Initial Config Macros",src:n(7977).Z,width:"440",height:"205"})),(0,o.kt)("p",null,"Click on the button that corresponds to your printer to install the configuration."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you accidentally clicked the wrong button you can install another printer config by copying the contents of the template found in ",(0,o.kt)("inlineCode",{parentName:"p"},"config/templates/")," and pasting it into printer.cfg."))),(0,o.kt)("p",null,"Now navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Machine")," page in Mainsail (the webinterface you just opened in your browser), there's a list of files, among them is ",(0,o.kt)("inlineCode",{parentName:"p"},"printer.cfg"),'. Right click it and choose "Edit". This is where your klipper configuration lives. As you can see, it\'s prepopulated with all you need to get your printer up and running quick and easy. ',(0,o.kt)("strong",{parentName:"p"},"Follow the instructions in the file to make sure the configuration matches your setup.")),(0,o.kt)("h2",{id:"verify-stepper-directions"},"Verify Stepper Directions"),(0,o.kt)("p",null,"!> Do NOT use RatOS with other than stock steppers. If you are using different steppers please make sure to check their rating, and configure their currents accordingly (",(0,o.kt)("a",{parentName:"p",href:"#includes-amp-overrides"},"see Includes & Overrides"),")."),(0,o.kt)("p",null,"Make sure your steppers are running in the correct direction. To do this, center all your axes by moving the carriage and bed manually, then type ",(0,o.kt)("inlineCode",{parentName:"p"},"SET_CENTER_KINEMATIC_POSITION")," in the console. You can now use the Mainsail controls to move the axes. Check that your bed moves down when Z is ",(0,o.kt)("strong",{parentName:"p"},"increased"),". By default, the Z controls in the Mainsail interface will increase Z when you click the up arrow. This will lower the bed on a CoreXY machine with a moving bed such as the V-Core 3, and raise the X gantry on a bedslinger such as the V-Minion or V-Cast. If your bed does not move down (or your x gantry doesn't raise) when you click the up arrow, change the direction of your Z steppers in printer.cfg. There's instructions on how to do that at the top of printer.cfg."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'If you want to invert the Z behavior in the Mainsail interface (ie. making the bed move down when you click the down arrow), click the cogs (settings) in the upper right part of the interface, then "control", and then enable "Invert Z Control". This will ',(0,o.kt)("strong",{parentName:"p"},"NOT")," change your stepper directions, it will only change what gcode the buttons execute."))),(0,o.kt)("h2",{id:"verify-endstops-and-z-probe"},"Verify Endstops and Z-Probe"),(0,o.kt)("p",null,"Navigate to the Machine tab. In here you can see your endstop state. Refresh the endstop state and verify that all endstops are open, and that the state changes to triggered when you manually trigger the endstops or z-probe and refresh the endstop state."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To test, debug and/or verify a BLTouch, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/BLTouch.html"},"BLTouch klipper documentation")))),(0,o.kt)("h2",{id:"z-offset"},"Z-Offset"),(0,o.kt)("p",null,'An easy way to do probe z-offset calibration is to home the printer, then put a piece of paper underneath the nozzle. Now babystep Z through the Mainsail interface (or by issuing G0 commands through the console) until the nozzle touches the paper and there\'s a bit of resistance when you pull on it. Then write "GET_POSITION" in the console and find the line that says ',(0,o.kt)("inlineCode",{parentName:"p"},"// kinematic: ...")," And use the Z coordinate from that line, multiplied by -1. So if it says ",(0,o.kt)("inlineCode",{parentName:"p"},"// kinematic: X:0.000000 Y:0.000000 Z:-0.400000")," you need to add 0.4 to your probe's z_offset in printer.cfg."),(0,o.kt)("p",null,"Alternatively you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PROBE_CALIBRATE")," command, read more in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Probe_Calibrate.html#calibrating-probe-z-offset"},"klipper probe calibration documentation")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The z-offset is the distance in Z between your probe's trigger point and your nozzle in gcode space. This is typically within 0-4mm, if you get a larger value or a negative value, something is wrong, and you should investigate further."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'in Mainsail 2.1 you can enable the Z-Offset panel outside of printing in your interface settings, and it now has a "Save" button, which means you can use those buttons to babystep until the nozzle touches the paper and just hit "Save" and you\'re done.'))),(0,o.kt)("h2",{id:"updating"},"Updating"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail, you'll see a sheet with the title \"Update Manager\", if you're familiar with Fluidd or Mainsail, you'll notice a new entry called ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS"),". This ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS")," package will update all the config files in the config folder, improvements, support for hotends, macros, extruders, new boards etc, will be coming to your printer this way in the future. ",(0,o.kt)("strong",{parentName:"p"},"Be sure to keep this up to date, especially if you update klipper"),"."),(0,o.kt)("p",null,"In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting to you in the updates, it's OK to delay updating until a later time. Klipper is a rapdily evolving project, that also means that bugs ",(0,o.kt)("em",{parentName:"p"},"do happen"),", they're usually fixed very quickly, but if you have a bunch of important prints coming up, maybe delay the updates till afterwards."),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"Now we've got that out of the way, please go ahead and update everything to the latest version."),(0,o.kt)("h2",{id:"tuning"},"Tuning"),(0,o.kt)("p",null,"When you've verified that everything works, and you have your ",(0,o.kt)("a",{parentName:"p",href:"slicers"},"slicer configured")," to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"START_PRINT")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"END_PRINT")," macros, you can now start tuning. Refer to the klipper documentation for ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Config_checks.html#calibrate-pid-settings"},"PID Tuning"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Pressure_Advance.html"},"Pressure Advance tuning"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Resonance_Compensation.html"},"manual Input Shaper calibration")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Measuring_Resonances.html"},"automatic Input Shaper calibration via an ADXL345"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/Skew_Correction.html"},"Skew Correction")," respectively."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Using an accelerometer (ADXL345)")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the wiring diagram for you board on how to connect your ADXL345, RatOS primarily uses an SPI connection on the MCU itself instead of the RPi, for ease of use. Some printers may require more than one ADXL345, and in that case a config for the ADXL345 connected to the Raspberry Pi is also available."),(0,o.kt)("p",{parentName:"div"},"If you want to use an ADXL345 for automatic input shaper calibration, all the software you need is already preinstalled on the pi, you just need to wire and map the pins for your ADXL345, and you're good to go."),(0,o.kt)("p",{parentName:"div"},"To enable resonance testing, uncomment the adxl include section at the top of printer.cfg. To verify that your ADXL is properly connected, write MEASURE_AXES_NOISE in the Fluidd console, if the values are below 100, you're good to go. To calibrate input shaper, write SHAPER_CALIBRATE in the console."),(0,o.kt)("p",{parentName:"div"},"For more information on automatic input shaper calibration, check out the official klipper documentation."))))}h.isMDXComponent=!0},7977:function(e,t,n){t.Z=n.p+"assets/images/initial-macros-3cb69f61fecd079a71c5b7f1d3f27893.png"},3495:function(e,t,n){t.Z=n.p+"assets/images/mainsail-031b979b1ec1cad5d6b607b10e8abaed.png"}}]);