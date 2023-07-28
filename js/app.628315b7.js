(function(){"use strict";var e={4741:function(e,t,n){var o=n(9242),a=n(3396);function r(e,t,n,o,r,i){const s=(0,a.up)("HeaderLayout"),l=(0,a.up)("routerView"),u=(0,a.up)("FooterLayout"),c=(0,a.up)("Wave");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a.Wm)(l),(0,a.Wm)(u),(0,a.Wm)(c)],64)}var i=n(9425),s=n.n(i),l=n(7139);const u=e=>((0,a.dD)("data-v-1d01615c"),e=e(),(0,a.Cn)(),e),c={class:"inner"},d={class:"title",ref:"title"},v={key:0},p={key:1},f={class:"inner"},m={class:"nav__list"},h=u((()=>(0,a._)("span",{class:"nav__item"},"Home",-1))),y=u((()=>(0,a._)("span",{class:"nav__item"},"Work",-1))),g=u((()=>(0,a._)("span",{class:"nav__item"},"Contact",-1))),b=u((()=>(0,a._)("span",{class:"nav__item"},"Blog",-1))),w=(0,a.uE)('<ul class="info_list" data-v-1d01615c><li class="sns_item" data-v-1d01615c><dt data-v-1d01615c>Social</dt><dd data-v-1d01615c><a href="javsscript:;" data-v-1d01615c>Instagram</a></dd><dd data-v-1d01615c><a href="javsscript:;" data-v-1d01615c>Facebook</a></dd><dd data-v-1d01615c><a href="javsscript:;" data-v-1d01615c>GitHub</a></dd></li><li class="sns_item" data-v-1d01615c><dt data-v-1d01615c>Email</dt><dd data-v-1d01615c><a href="javsscript:;" data-v-1d01615c>ixkfo86@gmail.com</a></dd></li></ul>',1);function _(e,t,n,o,r,i){const s=(0,a.up)("router-link"),u=(0,a.up)("routerLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("header",{class:(0,l.C_)(o.isOpen?"open":"")},[(0,a._)("div",c,[(0,a._)("h1",null,[(0,a.Wm)(s,{to:"/",ref:"logo"},{default:(0,a.w5)((()=>[(0,a.Uk)("R")])),_:1},512)]),(0,a._)("h2",d,"Creative Ui Developer",512),(0,a._)("button",{type:"button",class:"menu",onClick:t[0]||(t[0]=(...e)=>o.gnbChecked&&o.gnbChecked(...e))},[o.isOpen?((0,a.wg)(),(0,a.iD)("span",p,"Close")):((0,a.wg)(),(0,a.iD)("span",v,"Menu"))])])],2),(0,a._)("nav",{class:(0,l.C_)(["nav",e.isMobile?"mobile":""]),ref:"gnbTarget"},[(0,a._)("div",f,[(0,a._)("ul",m,[(0,a._)("li",null,[(0,a.Wm)(u,{to:"/",onClick:o.gnbClose},{default:(0,a.w5)((()=>[h])),_:1},8,["onClick"])]),(0,a._)("li",null,[(0,a.Wm)(u,{to:"/Work",onClick:o.gnbClose},{default:(0,a.w5)((()=>[y])),_:1},8,["onClick"])]),(0,a._)("li",null,[(0,a.Wm)(u,{to:"/Contact",onClick:o.gnbClose},{default:(0,a.w5)((()=>[g])),_:1},8,["onClick"])]),(0,a._)("li",null,[(0,a.Wm)(u,{to:"/Blog",onClick:o.gnbClose},{default:(0,a.w5)((()=>[b])),_:1},8,["onClick"])])]),w])],2)],64)}var C=n(4870),k=n(477),O=n(4037),E={data(){return{}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};function A(e){e.mixin({data(){return{vw:0,vh:0,isMobile:!1}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.vw=window.innerWidth,this.vh=window.innerHeight,this.vw>=961?(document.documentElement.style.setProperty("--vw",`${this.vw}px`),document.documentElement.style.setProperty("--vh",`${this.vh}px`),this.isMobile=!1):(this.vw,this.vh,document.documentElement.style.setProperty("--vw",`${this.vw}px`),document.documentElement.style.setProperty("--vh",`${this.vh}px`),this.isMobile=!0)}}})}var j={name:"Header",mixins:[E,A],props:{},setup(){const e=(0,C.iH)(0),t=(0,C.iH)(0),n=(0,C.iH)(!1),o=(0,C.iH)(null),r=(0,C.iH)(null);let i=0;const s=(0,C.iH)(null),l=document.body,u=()=>{e.value=window.scrollY,t.value=e.value/10,i=t.value,o.value.$el.style.transform="rotate("+Math.floor(t.value)+"deg)",e.value>0?k.p8.to(s.value,.05,{y:"-340%",opacity:0,ease:O.qD.easeInOut}):k.p8.to(s.value,.08,{y:0,opacity:1,ease:O.qD.easeInOut})},c=()=>{n.value=!n.value,n.value?d():v()},d=()=>{const e=k.p8.utils.toArray(".nav__item"),t=k.p8.utils.toArray(".sns_item"),a=o.value.$el.style.transform,i=parseFloat(a.match(/[-\d.]+/)[0]);n.value&&(k.p8.to(r.value,.1,{y:0,ease:O.Au.ExpoOut,onComplete:()=>{k.p8.killTweensOf(".nav__item"),setTimeout((()=>{e.forEach(((e,t)=>{k.p8.to(e,.2,{y:0,opacity:1,ease:O.qD.easeInOut,delay:.025*t})})),t.forEach(((e,t)=>{k.p8.to(e,.2,{opacity:1,ease:O.qD.easeInOut,delay:.1*t})}))}),800)}}),l.style.overflow="hidden",i>0&&(o.value.$el.style.transform="rotate(0deg)"))},v=()=>{n.value=!1;const e=k.p8.utils.toArray(".nav__item"),t=k.p8.utils.toArray(".sns_item");k.p8.to(r.value,.05,{y:"-101%",ease:O.Au.easeIn,onComplete:()=>{e.forEach((e=>{k.p8.to(e,0,{y:"-101%",opacity:0,ease:O.Au.easeInOut})})),t.forEach((e=>{k.p8.to(e,0,{opacity:0,ease:O.Au.easeInOut})}))}}),l.style.overflow="auto",o.value.$el.style.transform="rotate("+Math.floor(i)+"deg)"};return(0,a.bv)((()=>{u()})),{handleScroll:u,gnbOpen:d,gnbClose:v,gnbChecked:c,sT:e,rotateValue:t,isOpen:n,logo:o,gnbTarget:r,rotatePrevValue:i,title:s}}},I=n(89);const P=(0,I.Z)(j,[["render",_],["__scopeId","data-v-1d01615c"]]);var W=P;const L=e=>((0,a.dD)("data-v-09f17600"),e=e(),(0,a.Cn)(),e),T={class:"sns_contents"},x=L((()=>(0,a._)("div",{class:"inner"},[(0,a._)("div",{class:"logo"},"RICO"),(0,a._)("span",null," @2023 RICO PORTFOLIO")],-1)));function D(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("footer",null,[(0,a._)("div",T,[(0,a.kq)("",!0)]),x])}var H={name:"Footer",props:{}};const B=(0,I.Z)(H,[["render",D],["__scopeId","data-v-09f17600"]]);var S=B;const M={id:"wave"},F=(0,a.uE)('<div class="waves" data-v-5bc71a32><div class="wave type1" data-v-5bc71a32><svg class="wave" viewBox="0 0 469.539032 263.986786" preserveAspectRatio="none" data-v-5bc71a32><path id="wave" fill="#3377DB" d="M469.539032,263.986786H-0.000001L0,263.557617c66.11113,0.429169,351.088104,0.429169,469.539032,0.208344V263.986786z" data-v-5bc71a32></path></svg></div><div class="wave type2" data-v-5bc71a32></div></div>',1),N=[F];function R(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("aside",M,N)}var $={name:"Wave",props:{}};const q=(0,I.Z)($,[["render",R],["__scopeId","data-v-5bc71a32"]]);var V=q,z={name:"App",components:{HeaderLayout:W,FooterLayout:S,Scrollbar:s(),Wave:V}};const Z=(0,I.Z)(z,[["render",r]]);var U=Z,Y=n(678);const G=k.p8.timeline(),K=(e,t,n)=>{t.to(n,0,{opacity:1}),e.style.opacity=0,t.to(e,.75,{y:"100%",ease:O.Au.easeInOut})},J=(e,t,n,o)=>{t.to(n,0,{opacity:0}),e.style.opacity=1,t.to(e,.75,{y:0,ease:O.Au.easeInOut}),t.to(e,.75,{y:"-110%",ease:O.Au.easeInOut,onComplete:()=>{K(e,t,n)}})},Q=[{path:"/",name:"Main",component:()=>Promise.all([n.e(918),n.e(685)]).then(n.bind(n,45))},{path:"/about",name:"About",component:()=>n.e(162).then(n.bind(n,2162))},{path:"/Work",name:"Work",component:()=>n.e(977).then(n.bind(n,5977))},{path:"/WorkView:id",name:"WorkView",component:()=>n.e(147).then(n.bind(n,1147)),meta:{requiresAuth:!0}},{path:"/Contact",name:"Contact",component:()=>Promise.all([n.e(918),n.e(386)]).then(n.bind(n,8386))},{path:"/Blog",name:"Blog",component:()=>n.e(27).then(n.bind(n,6027))},{path:"/BlogView",name:"BlogView",component:()=>n.e(93).then(n.bind(n,7093))}],X=(0,Y.p7)({history:(0,Y.PO)(),routes:Q,scrollBehavior(e,t,n){return n||{top:0}}});X.beforeEach(((e,t,n)=>{const o=document.getElementsByTagName("header")[0],a=document.getElementById("wave"),r=k.p8.utils.toArray("header, nav, main, footer");o.classList.contains("open")||(J(a,G,r),setTimeout((()=>{n()}),1200))}));var ee=X,te=n(5073),ne=n(1264);k.p8.registerPlugin(te.Z);const oe=(0,o.ri)(U);oe.use(ne.ZP),oe.use(ee),oe.use(A),oe.config.globalProperties.$gsap=k.p8,oe.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{27:"73f1e85b",93:"72775379",147:"8d7b7621",162:"2faa7969",386:"80da17df",685:"82cae2f1",918:"f873a796",977:"65084e03"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{27:"e1558e4c",93:"5d0ed2a6",147:"71b248dc",386:"ad708152",685:"c310cfcb",977:"64f826ed"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="project:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var s,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[a];var v=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode&&r.parentNode.removeChild(r),a(l)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),s=n.p+i;if(t(i,s))return a();e(o,s,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={27:1,93:1,147:1,386:1,685:1,977:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),s=new Error,l=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,a[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],s=o[1],l=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var c=l(n)}for(t&&t(o);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkproject"]=self["webpackChunkproject"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4741)}));o=n.O(o)})();
//# sourceMappingURL=app.628315b7.js.map