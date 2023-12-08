"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[361],{5780:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(3396),l=r(7139);const a={id:"skeletons"},i={key:1,class:"skeleton--card"};function o(e,t,r,o,s,c){return(0,n.wg)(),(0,n.iD)("aside",a,["list"==o.typeValue?((0,n.wg)(),(0,n.iD)("ul",{key:0,class:(0,l.C_)(["skeleton--list",o.isChange?"full":""])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.listLength,(e=>((0,n.wg)(),(0,n.iD)("li",{style:(0,l.j5)({height:o.listItemHeight+"px"})},null,4)))),256))],2)):(0,n.kq)("",!0),"card"==o.typeValue?((0,n.wg)(),(0,n.iD)("div",i)):(0,n.kq)("",!0)])}var s=r(4870),c={name:"Skeleton",props:{SkeletorType:{type:String},SkeletorLocation:{type:String},SkeletorLength:{type:Number},SkeletorHeight:{type:Number}},setup(e){const t=(0,s.iH)(""),r=(0,s.iH)(""),l=(0,s.iH)(!1),a=(0,s.iH)(0),i=(0,s.iH)(0);t.value=e.SkeletorType,r.value=e.SkeletorLocation,a.value=e.SkeletorLength,i.value=e.SkeletorHeight;const o=(0,n.Fl)((()=>i.value));return"main"==r.value&&(l.value=!0),{typeValue:t,locationValue:r,isChange:l,listLength:a,listItemHeight:i,computedListItemHeight:o}}},u=r(89);const d=(0,u.Z)(c,[["render",o],["__scopeId","data-v-c3ef226e"]]);var g=d},2361:function(e,t,r){r.r(t),r.d(t,{default:function(){return J}});var n=r(3396),l=r(7139);const a=e=>((0,n.dD)("data-v-bc3d812c"),e=e(),(0,n.Cn)(),e),i={id:"work"},o={key:0,class:"work_visual"},s=["src","alt"],c={class:"inner"},u={class:"overview"},d={class:"text_inner"},g={class:"overview_title_box"},v=a((()=>(0,n._)("em",{class:"title"},"OVERVIEW",-1))),m={class:"overview_text_box"},p={class:"mission"},w={class:"text_inner"},I=a((()=>(0,n._)("em",{class:"title"},"MISSION",-1))),_=["src"],k={class:"goals"},f={class:"text_inner"},P=a((()=>(0,n._)("em",{class:"title"},"PROJECT GOALS",-1))),y={class:"goals_list"};function x(e,t,r,a,x,h){const S=(0,n.up)("Skeletor"),j=(0,n.up)("Pagination"),D=(0,n.Q2)("dompurify-html");return(0,n.wg)(),(0,n.iD)("div",i,[a.hasFetchedData?((0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("img",{src:a.currentItem.view?.viewBigImgSrc,alt:a.currentItem.project},null,8,s)])):((0,n.wg)(),(0,n.j4)(S,{key:1,SkeletorType:"card"})),(0,n._)("div",c,[(0,n._)("section",u,[(0,n._)("div",d,[(0,n._)("div",g,[v,(0,n.wy)((0,n._)("h2",null,null,512),[[D,a.currentItem.view?.overviewTitle]])]),(0,n._)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.currentItem.view?.websiteInfo,((e,t)=>((0,n.wg)(),(0,n.iD)("dl",{key:t},[(0,n._)("dt",null,(0,l.zw)(e.title),1),(0,n._)("dd",null,(0,l.zw)(e.description),1)])))),128))])])]),(0,n._)("section",p,[(0,n._)("div",w,[I,(0,n.wy)((0,n._)("h3",null,null,512),[[D,a.currentItem.view?.middleTitle]]),(0,n._)("img",{src:a.currentItem.view?.middleBigImgSrc,alt:""},null,8,_)])]),(0,n._)("section",k,[(0,n._)("div",f,[P,(0,n._)("ol",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.currentItem.view?.defineList,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("dl",null,[(0,n._)("dt",null,"0"+(0,l.zw)(t+1),1),(0,n.wy)((0,n._)("dd",null,null,512),[[D,e.title]]),(0,n._)("dd",null,(0,l.zw)(e.description),1)])])))),128))])])])]),(0,n.Wm)(j)])}var h=r(4870),S=r(678),j=r(3901),D=r(1294),H=r(4161),C=r(2594);const b=(0,C.Q_)("workStore",{state:()=>({currentPage:1,list:[],totalPage:0}),getters:{startIndex:e=>e.currentPage-1,prevInfo:e=>e.list[e.currentPage-2],nextInfo:e=>e.list[e.currentPage],totalItem:e=>e.totalPage},actions:{setCurrentPage(e){this.currentPage=e}}}),F=e=>((0,n.dD)("data-v-508fde0d"),e=e(),(0,n.Cn)(),e),B={key:0,class:"project_info"},N=F((()=>(0,n._)("em",{class:"text"},"Prev Project",-1))),L={class:"title"},V={key:1,class:"project_info"},z=F((()=>(0,n._)("em",{class:"text"},"Next Project",-1))),T={class:"title"};function Z(e,t,r,a,i,o){const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)(["work_project",a.currentPage>1&&a.currentPage!=a.totalItems?"on":""])},[a.currentPage>1?((0,n.wg)(),(0,n.iD)("div",B,[(0,n.Wm)(s,{to:a.prevProjectUrl,onClick:a.prevPage,style:(0,l.j5)(a.prevInfoBg)},{default:(0,n.w5)((()=>[N,(0,n._)("em",L,(0,l.zw)(a.prevInfoName),1)])),_:1},8,["to","onClick","style"])])):(0,n.kq)("",!0),a.currentPage!=a.totalItems?((0,n.wg)(),(0,n.iD)("div",V,[(0,n.Wm)(s,{to:a.nextProjectUrl,onClick:a.nextPage,style:(0,l.j5)(a.nextInfoBg)},{default:(0,n.w5)((()=>[z,(0,n._)("em",T,(0,l.zw)(a.nextInfoName),1)])),_:1},8,["to","onClick","style"])])):(0,n.kq)("",!0)],2)}const q=b();var E={name:"Pagination",setup(){const e=(0,n.Fl)((()=>q.startIndex)),t=(0,n.Fl)((()=>q.currentPage)),r=(0,n.Fl)((()=>q.totalItem)),l=(0,n.Fl)((()=>q.nextInfo&&q.nextInfo.project?q.nextInfo.project:"")),a=(0,n.Fl)((()=>q.prevInfo&&q.prevInfo.project?q.prevInfo.project:"")),i=()=>{t.value>1&&q.setCurrentPage(t.value-1)},o=()=>{q.setCurrentPage(t.value+1)},s=(0,n.Fl)((()=>q.nextInfo&&q.nextInfo.view.middleBigImgSrc?{background:`url(${q.nextInfo.view.middleBigImgSrc})`}:null)),c=(0,n.Fl)((()=>q.prevInfo&&q.prevInfo.view.middleBigImgSrc?{background:`url(${q.prevInfo.view.middleBigImgSrc})`}:null)),u=(0,n.Fl)((()=>"/workView"+(t.value-1))),d=(0,n.Fl)((()=>`/workView${t.value+1}`));return{startIndex:e,currentPage:t,prevPage:i,nextPage:o,prevProjectUrl:u,nextProjectUrl:d,nextInfoName:l,prevInfoName:a,nextInfoBg:s,prevInfoBg:c,totalItems:r}}},O=r(89);const U=(0,O.Z)(E,[["render",Z],["__scopeId","data-v-508fde0d"]]);var W=U,Y=r(5780),K={name:"worksView",props:{},components:{Pagination:W,Skeletor:Y.Z},setup(e){const t=(0,S.yj)(),r=(0,h.iH)({}),l=(0,h.iH)(!1),a=(0,h.iH)(0),i=b(),o=async()=>{if(!l.value){const n=j.t,o=(0,D.iH)(n,"works.json");try{const e=await(0,D.Jt)(o),n=await H.Z.get(e);a.value=n.data[t.params.id-1].id,r.value=n.data[t.params.id-1],l.value=!0,i.currentPage=n.data[t.params.id-1].id,i.list=n.data,i.totalPage=n.data.length}catch(e){console.error("Error fetching data:",e)}}};return(0,n.YP)(t,(()=>{l.value=!1,o()})),(0,n.m0)((()=>{const e=Number(t.params.id);i.currentPage=e})),(0,n.bv)((()=>{o()})),{currentPage:a,hasFetchedData:l,currentItem:r,routeParamsId:Number(t.params.id),paginationStore:i}}};const $=(0,O.Z)(K,[["render",x],["__scopeId","data-v-bc3d812c"]]);var J=$}}]);
//# sourceMappingURL=361.36e636c7.js.map