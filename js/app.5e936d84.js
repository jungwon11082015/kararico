(function(){"use strict";var e={3399:function(e,t,n){var a=n(9242),o=n(3396);function r(e,t,n,a,r,i){const l=(0,o.up)("HeaderLayout"),s=(0,o.up)("routerView"),u=(0,o.up)("FooterLayout"),c=(0,o.up)("Wave");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(l),(0,o.Wm)(s),(0,o.Wm)(u),(0,o.Wm)(c)],64)}var i=n(9425),l=n.n(i),s=n(7139);const u=e=>((0,o.dD)("data-v-53a65d93"),e=e(),(0,o.Cn)(),e),c={class:"inner"},d={class:"title",ref:"title"},v={key:0},p={key:1},f={class:"nav",ref:"gnbTarget"},m={class:"inner"},h={class:"nav__list"},g=u((()=>(0,o._)("span",{class:"nav__item"},"Home",-1))),b=u((()=>(0,o._)("span",{class:"nav__item"},"Work",-1))),y=u((()=>(0,o._)("span",{class:"nav__item"},"Contact",-1))),_=u((()=>(0,o._)("span",{class:"nav__item"},"Blog",-1))),w=(0,o.uE)('<ul class="info_list" data-v-53a65d93><li class="sns_item" data-v-53a65d93><dt data-v-53a65d93>Social</dt><dd data-v-53a65d93><a href="javsscript:;" data-v-53a65d93>Instagram</a></dd><dd data-v-53a65d93><a href="javsscript:;" data-v-53a65d93>Facebook</a></dd><dd data-v-53a65d93><a href="javsscript:;" data-v-53a65d93>GitHub</a></dd></li><li class="sns_item" data-v-53a65d93><dt data-v-53a65d93>Email</dt><dd data-v-53a65d93><a href="javsscript:;" data-v-53a65d93>ixkfo86@gmail.com</a></dd></li></ul>',1);function C(e,t,n,a,r,i){const l=(0,o.up)("router-link"),u=(0,o.up)("routerLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",{class:(0,s.C_)(a.isOpen?"open":"")},[(0,o._)("div",c,[(0,o._)("h1",null,[(0,o.Wm)(l,{to:"/",ref:"logo"},{default:(0,o.w5)((()=>[(0,o.Uk)("R")])),_:1},512)]),(0,o._)("h2",d,"Creative Ui Developer",512),(0,o._)("button",{type:"button",class:"menu",onClick:t[0]||(t[0]=(...e)=>a.gnbChecked&&a.gnbChecked(...e))},[a.isOpen?((0,o.wg)(),(0,o.iD)("span",p,"Close")):((0,o.wg)(),(0,o.iD)("span",v,"Menu"))])])],2),(0,o._)("nav",f,[(0,o._)("div",m,[(0,o._)("ul",h,[(0,o._)("li",null,[(0,o.Wm)(u,{to:"/",onClick:a.gnbClose},{default:(0,o.w5)((()=>[g])),_:1},8,["onClick"])]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/Work",onClick:a.gnbClose},{default:(0,o.w5)((()=>[b])),_:1},8,["onClick"])]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/Contact",onClick:a.gnbClose},{default:(0,o.w5)((()=>[y])),_:1},8,["onClick"])]),(0,o._)("li",null,[(0,o.Wm)(u,{to:"/Blog",onClick:a.gnbClose},{default:(0,o.w5)((()=>[_])),_:1},8,["onClick"])])]),w])],512)],64)}var k=n(4870),O=n(477),E=n(4037),A={data(){return{}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},j={name:"Header",mixins:[A],props:{},setup(){const e=(0,k.iH)(0),t=(0,k.iH)(0),n=(0,k.iH)(!1),a=(0,k.iH)(null),r=(0,k.iH)(null);let i=0;const l=(0,k.iH)(null),s=document.body;(0,o.bv)((()=>{u()}));const u=()=>{e.value=window.scrollY,t.value=e.value/10,i=t.value,a.value.$el.style.transform="rotate("+Math.floor(t.value)+"deg)",e.value>0?O.p8.to(l.value,.05,{y:"-340%",opacity:0,ease:E.qD.easeInOut}):O.p8.to(l.value,.08,{y:0,opacity:1,ease:E.qD.easeInOut})},c=()=>{n.value=!n.value,n.value?d():v()},d=()=>{const e=O.p8.utils.toArray(".nav__item"),t=O.p8.utils.toArray(".sns_item"),o=a.value.$el.style.transform,i=parseFloat(o.match(/[-\d.]+/)[0]);n.value&&(O.p8.to(r.value,.1,{y:0,ease:E.Au.ExpoOut,onComplete:()=>{O.p8.killTweensOf(".nav__item"),setTimeout((()=>{e.forEach(((e,t)=>{O.p8.to(e,.2,{y:0,opacity:1,ease:E.qD.easeInOut,delay:.025*t})})),t.forEach(((e,t)=>{O.p8.to(e,.2,{opacity:1,ease:E.qD.easeInOut,delay:.1*t})}))}),800)}}),s.style.overflow="hidden",i>0&&(a.value.$el.style.transform="rotate(0deg)"))},v=()=>{n.value=!1;const e=O.p8.utils.toArray(".nav__item"),t=O.p8.utils.toArray(".sns_item");O.p8.to(r.value,.05,{y:"-101%",ease:E.Au.easeIn,onComplete:()=>{e.forEach((e=>{O.p8.to(e,0,{y:"-101%",opacity:0,ease:E.Au.easeInOut})})),t.forEach((e=>{O.p8.to(e,0,{opacity:0,ease:E.Au.easeInOut})}))}}),s.style.overflow="auto",a.value.$el.style.transform="rotate("+Math.floor(i)+"deg)"};return{handleScroll:u,sT:e,rotateValue:t,isOpen:n,logo:a,gnbOpen:d,gnbClose:v,gnbTarget:r,rotatePrevValue:i,title:l,gnbChecked:c}}},I=n(89);const W=(0,I.Z)(j,[["render",C],["__scopeId","data-v-53a65d93"]]);var L=W;const P=e=>((0,o.dD)("data-v-09f17600"),e=e(),(0,o.Cn)(),e),T={class:"sns_contents"},D=P((()=>(0,o._)("div",{class:"inner"},[(0,o._)("div",{class:"logo"},"RICO"),(0,o._)("span",null," @2023 RICO PORTFOLIO")],-1)));function H(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("footer",null,[(0,o._)("div",T,[(0,o.kq)("",!0)]),D])}var B={name:"Footer",props:{}};const S=(0,I.Z)(B,[["render",H],["__scopeId","data-v-09f17600"]]);var x=S;const F={id:"wave"},N=(0,o.uE)('<div class="waves" data-v-5bc71a32><div class="wave type1" data-v-5bc71a32><svg class="wave" viewBox="0 0 469.539032 263.986786" preserveAspectRatio="none" data-v-5bc71a32><path id="wave" fill="#3377DB" d="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z" data-v-5bc71a32></path></svg></div><div class="wave type2" data-v-5bc71a32></div></div>',1),R=[N];function q(e,t,n,a,r,i){return(0,o.wg)(),(0,o.iD)("aside",F,R)}var M={name:"Wave",props:{}};const V=(0,I.Z)(M,[["render",q],["__scopeId","data-v-5bc71a32"]]);var z=V,$={name:"App",components:{HeaderLayout:L,FooterLayout:x,Scrollbar:l(),Wave:z}};const Z=(0,I.Z)($,[["render",r]]);var U=Z,Y=n(678);const G=O.p8.timeline(),K=(e,t)=>{e.style.opacity=0,t.to(e,.75,{y:"100%",ease:E.Au.easeInOut})},J=(e,t,n)=>{e.style.opacity=1,t.to(e,.75,{y:0,ease:E.Au.easeInOut}),t.to(e,.75,{y:"-110%",ease:E.Au.easeInOut,onComplete:()=>{K(e,t)}})},Q=[{path:"/",name:"Main",component:()=>Promise.all([n.e(918),n.e(62)]).then(n.bind(n,3790))},{path:"/about",name:"About",component:()=>n.e(162).then(n.bind(n,2162))},{path:"/Work",name:"Work",component:()=>n.e(432).then(n.bind(n,1432))},{path:"/WorkView:id",name:"WorkView",component:()=>n.e(147).then(n.bind(n,1147)),meta:{requiresAuth:!0}},{path:"/Contact",name:"Contact",component:()=>Promise.all([n.e(918),n.e(68)]).then(n.bind(n,5068))},{path:"/Blog",name:"Blog",component:()=>n.e(27).then(n.bind(n,6027))},{path:"/BlogView",name:"BlogView",component:()=>n.e(93).then(n.bind(n,7093))}],X=(0,Y.p7)({history:(0,Y.PO)(),routes:Q,scrollBehavior(e,t,n){return n||{top:0}}});X.beforeEach(((e,t,n)=>{const a=document.getElementsByTagName("header")[0],o=document.getElementById("wave");a.classList.contains("open")||(J(o,G),setTimeout((()=>{n()}),1200))}));var ee=X;function te(e){e.mixin({mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){let e=window.innerWidth,t=window.innerHeight;document.documentElement.style.setProperty("--vw",`${e}px`),document.documentElement.style.setProperty("--vh",`${t}px`)}}})}var ne=n(5073),ae=n(1264);O.p8.registerPlugin(ne.Z);const oe=(0,a.ri)(U);oe.use(ae.ZP),oe.use(ee),oe.use(te),oe.config.globalProperties.$gsap=O.p8,oe.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var l=!0,s=0;s<a.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{27:"73f1e85b",62:"7b5b5336",68:"4ae39ea5",93:"72775379",147:"8d7b7621",162:"2faa7969",432:"cfb58b7e",918:"f873a796"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{27:"e1558e4c",62:"212b7377",68:"b2fd22d7",93:"5d0ed2a6",147:"71b248dc",432:"f689c860"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="project:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var l,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=a),e[a]=[o];var v=function(t,n){l.onerror=l.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=v.bind(null,l.onerror),l.onload=v.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode&&r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),l=n.p+i;if(t(i,l))return o();e(a,l,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={27:1,62:1,68:1,93:1,147:1,432:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),l=new Error,s=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],l=a[1],s=a[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(a);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},a=self["webpackChunkproject"]=self["webpackChunkproject"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(3399)}));a=n.O(a)})();
//# sourceMappingURL=app.5e936d84.js.map