(function(e){function t(t){for(var o,r,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(o=!1)}o&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c={app:0},a=[];function i(e){return u.p+"js/"+({about:"about",contact:"contact",home:"home",shop:"shop"}[e]||e)+"."+{about:"534feca2",contact:"9443e265",home:"c5ee743e",shop:"04a67b51"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,contact:1,home:1,shop:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",contact:"contact",home:"home",shop:"shop"}[e]||e)+"."+{about:"a81ffcf6",contact:"6baa79d9",home:"b1f351d0",shop:"ccfe0b4a"}[e]+".css",c=u.p+o,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===o||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[e],b.parentNode.removeChild(b),n(a)},b.href=c;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){r[e]=0})));var o=c[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}c[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2137:function(e,t,n){"use strict";n("cadb")},"34b7":function(e,t,n){},"580a":function(e,t,n){"use strict";n("a301")},a301:function(e,t,n){},cadb:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,a){var i=Object(o["v"])("navigation"),u=Object(o["v"])("router-view");return Object(o["p"])(),Object(o["d"])("div",{class:["v-app",{"is-black":e.isBlack}]},[Object(o["g"])(i),Object(o["g"])(u)],2)}var c=Object(o["z"])("data-v-143f3348");Object(o["s"])("data-v-143f3348");var a={class:"v-nav"},i=Object(o["g"])("div",{class:"v-nav__left"},[Object(o["g"])("h1",{class:"v-nav__title h-ui-button"},"Hervé")],-1),u={key:0,class:"v-nav__navigation"},s={class:"v-nav__list"},l=Object(o["f"])("Home"),f=Object(o["f"])("Shop"),b=Object(o["f"])("About"),g=Object(o["f"])("Contact"),p={class:"v-nav__right"},d=Object(o["g"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 59.7 38.7","xml:space":"preserve"},[Object(o["g"])("g",null,[Object(o["g"])("line",{class:"st1",x1:"59.7",y1:"1.5",x2:"0",y2:"1.5"}),Object(o["g"])("line",{class:"st1",x1:"59.7",y1:"19.3",x2:"0",y2:"19.3"}),Object(o["g"])("line",{class:"st1",x1:"59.7",y1:"37.2",x2:"0",y2:"37.2"})])],-1),h=Object(o["g"])("div",{class:"v-nav__toggle-menu"},null,-1);Object(o["q"])();var v=c((function(e,t,n,r,v,m){var O=Object(o["v"])("router-link");return Object(o["p"])(),Object(o["d"])("section",a,[i,e.isOpen?(Object(o["p"])(),Object(o["d"])("div",u,[Object(o["g"])("ul",s,[Object(o["g"])("li",null,[Object(o["g"])(O,{class:"h-ui-button",to:"/"},{default:c((function(){return[l]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(O,{class:"h-ui-button",to:"/shop"},{default:c((function(){return[f]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(O,{class:"h-ui-button",to:"/about"},{default:c((function(){return[b]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(O,{class:"h-ui-button",to:"/contact"},{default:c((function(){return[g]})),_:1})])])])):Object(o["e"])("",!0),Object(o["g"])("div",p,[Object(o["g"])("div",{onClick:t[1]||(t[1]=function(){return e.toggleSiteLang&&e.toggleSiteLang.apply(e,arguments)}),class:"v-nav__item h-ui-button"},"Fr/En"),Object(o["g"])("div",{onClick:t[2]||(t[2]=function(){return e.toggleTheme&&e.toggleTheme.apply(e,arguments)}),class:"v-nav__item h-ui-button"},"œuil"),Object(o["g"])("div",{class:"h-ui-button v-nav__toggle-icon",onClick:t[3]||(t[3]=function(){return e.toggleMenu&&e.toggleMenu.apply(e,arguments)})},[d,h])])])})),m=n("5502"),O=Object(o["h"])({name:"navigation",props:{data:{}},data:function(){return{isOpen:!1,store:Object(m["b"])()}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen},toggleSiteLang:function(){this.store.commit("toggleSiteLang")},toggleTheme:function(){this.store.commit("toggleSiteTheme")}}});n("580a");O.render=v,O.__scopeId="data-v-143f3348";var j=O,y=Object(o["h"])({components:{Navigation:j},data:function(){return{store:Object(m["b"])()}},computed:{isBlack:function(){return this.store.state.isBlack}}});n("2137");y.render=r;var _=y,w=n("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("a4d3"),n("e01a"),n("d3b7"),Symbol("state");var k=Object(m["a"])({state:{isBlack:!0,isFr:!0},mutations:{toggleSiteTheme:function(e){e.isBlack=!e.isBlack},toggleSiteLang:function(e){e.isFr=!e.isFr}},actions:{},modules:{}}),x=(n("34b7"),n("3ca3"),n("ddb0"),n("6c02")),S=[{path:"/",name:"Home",component:function(){return n.e("home").then(n.bind(null,"bb51"))}},{path:"/shop",name:"Shop",component:function(){return n.e("shop").then(n.bind(null,"0fa5"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}}],C=Object(x["a"])({history:Object(x["b"])("/"),routes:S}),T=C;Object(o["c"])(_).use(T).use(k).mount("#app")}});
//# sourceMappingURL=app.41a8de37.js.map