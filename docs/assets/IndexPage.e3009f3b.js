import{c as ve,i as Se,e as j,a as x,h as k,b as He,g as te,l as Xe,d as Ue,_ as F,z as D,B as _,G as h,E as n,F as v,J as G,D as y,K as X,Q as q,L as w,M as me,H as _e,I as fe,N as $,O as ce,P as Ye,R as U,o as ae,S as Je,r as T,T as Ze,U as we,t as et,V as Y,w as M,f as J,W as ue,k as I,X as De,Y as tt,u as at,Z as lt,$ as st,a0 as it,a1 as ot,a2 as nt,a3 as ct,a4 as ut,a5 as rt,j as je,a6 as he,a7 as Me,a8 as N,a9 as Q,aa as L,ab as W,C as le,ac as dt,m as vt,q as mt,v as _t,ad as ft,ae as P,af as ht,ag as gt,ah as pt,ai as Ct,aj as bt,ak as yt,al as xt,am as $t,an as St,ao as wt}from"./index.3a5fdbb9.js";import{A as Pe}from"./aos.98540740.js";import{L as Dt}from"./logo.3a03046f.js";var kt=ve({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:l}}=te(),t=Se(Xe,j);if(t===j)return console.error("QPage needs to be a deep child of QLayout"),j;if(Se(Ue,j)===j)return console.error("QPage needs to be child of QPageContainer"),j;const r=x(()=>{const o=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const d=t.isContainer.value===!0?t.containerHeight.value:l.screen.height;return e.styleFn(o,d)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-o+"px":l.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":l.screen.height-o+"px"}}),s=x(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>k("main",{class:s.value,style:r.value},He(a.default))}});const Ie=e=>(_e("data-v-192abaec"),e=e(),fe(),e),Bt={class:"about-me full-width q-pa-xl"},At={class:"about-me__title","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"},qt=Ie(()=>n("div",{class:"section-title"},"Contact",-1)),Tt={class:"flex items-center justify-center"},Et={class:"about-me__card__item"},Lt=Ie(()=>n("span",{class:"about-me__card__item__text"},"2002.06.10",-1)),Ht={class:"about-me__card__item"},jt={class:"about-me__card__item"},Mt={class:"about-me__card__item"},Pt=D({__name:"ContactMe",setup(e){const a="contact@leteu.dev",l="+82 10-8905-7546",t="leteu#0718";function i(r){const s=document.createElement("a");switch(r){case"mail":{s.href=`mailto:${a}`;break}case"call":{s.href=`tel:${l}`;break}case"discord":{s.target="_blank",s.href=`https://discordapp.com/users/${t}`;break}}s.click(),s.remove()}return(r,s)=>(_(),h("div",Bt,[n("div",At,[qt,v(G,{color:"grey-5",class:"q-mt-lg q-mb-xl"})]),n("div",Tt,[v(me,{class:"about-me__card","data-aos":"flip-left","data-aos-easing":"linear","data-aos-duration":"500"},{default:y(()=>[v(X,{class:"q-pa-lg about-me__card__list"},{default:y(()=>[n("div",Et,[v(q,{name:"cake",class:"about-me__card__item__icon"}),Lt]),n("div",Ht,[v(q,{name:"email",class:"about-me__card__item__icon"}),n("span",{class:"about-me__card__item__text",onClick:s[0]||(s[0]=o=>i("mail"))},w(a))]),n("div",jt,[v(q,{name:"call",class:"about-me__card__item__icon"}),n("span",{class:"about-me__card__item__text",onClick:s[1]||(s[1]=o=>i("call"))},w(l))]),n("div",Mt,[v(q,{name:"mdi-discord",class:"about-me__card__item__icon"}),n("span",{class:"about-me__card__item__text",onClick:s[2]||(s[2]=o=>i("discord"))},w(t))])]),_:1})]),_:1})])]))}});var It=F(Pt,[["__scopeId","data-v-192abaec"]]);const Wt={class:"wave",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 762 52.917",preserveAspectRatio:"none"},Ft=["fill"],oe=D({__name:"WaveInfinite",props:{fill:{type:String,default:()=>"#ffffff"}},setup(e){return(a,l)=>(_(),h("svg",Wt,[n("g",null,[n("path",{fill:e.fill,d:"M0 0c22.863 0 40.637 25.93 63.5 25.93S104.137 0 127 0s40.637 25.93 63.5 25.93S231.137 0 254 0s40.637 25.93 63.5 25.93S358.137 0 381 0s40.637 25.93 63.5 25.93S485.137 0 508 0s40.637 25.93 63.5 25.93S612.137 0 635 0s40.637 25.93 63.5 25.93S739.137 0 762 0v52.917H0z"},null,8,Ft)])]))}});const Vt={class:"footer"},zt=n("div",{class:"copyright"},"Copyright 2022-2023. leteu. All rights reserved.",-1),Rt=D({__name:"FooterComponent",setup(e){return(a,l)=>(_(),h("div",Vt,[v($(oe),{fill:"#0080a3",class:"wave"}),v($(oe),{fill:"#62decc",class:"wave"}),v($(oe),{fill:"#4da89b",class:"wave"}),zt]))}});const Ot={},Nt={class:"window"},Qt=Ye('<div class="window__header row" data-v-149c9341><div class="col flex items-center justify-start q-ml-sm" data-v-149c9341><div class="dot dot__close" data-v-149c9341></div><div class="dot dot__min" data-v-149c9341></div><div class="dot dot__max" data-v-149c9341></div></div><div class="col flex justify-center items-center" data-v-149c9341>leteu / Gyuhyeon Shin / \uC2E0\uADDC\uD604</div><div class="col flex justify-end items-center" data-v-149c9341><div class="q-mr-sm" data-v-149c9341>\u2325\u23181</div></div></div>',1),Kt={class:"window__body"};function Gt(e,a){return _(),h("div",Nt,[Qt,n("div",Kt,[ce(e.$slots,"default",{},void 0,!0)])])}var Xt=F(Ot,[["render",Gt],["__scopeId","data-v-149c9341"]]);const Ut={},Yt={class:"mouse"};function Jt(e,a){return _(),h("div",Yt)}var Zt=F(Ut,[["render",Jt],["__scopeId","data-v-61345fb6"]]);const ea={},We=e=>(_e("data-v-2e314164"),e=e(),fe(),e),ta={class:"typing-text d2coding"},aa=We(()=>n("p",null,"Hello, I'm leteu.",-1)),la=We(()=>n("p",null,[U("Web "),n("span",{class:"gradient-text"},"frontend"),U(" developer.")],-1)),sa=[aa,la];function ia(e,a){return _(),h("div",ta,sa)}var oa=F(ea,[["render",ia],["__scopeId","data-v-2e314164"]]);const na={class:"main-visual height-100vh main-box relative-position column"},ca={class:"col row z-index-50"},ua={class:"col flex justify-center items-center"},ra={class:"flex justify-center items-center q-mb-lg"},da=D({__name:"MainVisual",setup(e){return ae(()=>{Pe.init()}),(a,l)=>(_(),h("div",na,[n("div",ca,[n("div",ua,[v(Xt,{class:"width-900px","data-aos":"flip-left"},{default:y(()=>[v(oa,{class:"q-pl-xl q-ml-xl text-weight-bold fs-400 q-py-xl"})]),_:1})])]),n("div",ra,[v(Zt)])]))}});var va=F(da,[["__scopeId","data-v-6074be49"]]);function re(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Je.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const ma={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function _a({showing:e,avoidEmit:a,configureAnchorEl:l}){const{props:t,proxy:i,emit:r}=te(),s=T(null);let o=null;function d(c){return s.value===null?!1:c===void 0||c.touches===void 0||c.touches.length<=1}const u={};l===void 0&&(Object.assign(u,{hide(c){i.hide(c)},toggle(c){i.toggle(c),c.qAnchorHandled=!0},toggleKey(c){Ze(c,13)===!0&&u.toggle(c)},contextClick(c){i.hide(c),we(c),et(()=>{i.show(c),c.qAnchorHandled=!0})},prevent:we,mobileTouch(c){if(u.mobileCleanup(c),d(c)!==!0)return;i.hide(c),s.value.classList.add("non-selectable");const C=c.target;Y(u,"anchor",[[C,"touchmove","mobileCleanup","passive"],[C,"touchend","mobileCleanup","passive"],[C,"touchcancel","mobileCleanup","passive"],[s.value,"contextmenu","prevent","notPassive"]]),o=setTimeout(()=>{o=null,i.show(c),c.qAnchorHandled=!0},300)},mobileCleanup(c){s.value.classList.remove("non-selectable"),o!==null&&(clearTimeout(o),o=null),e.value===!0&&c!==void 0&&re()}}),l=function(c=t.contextMenu){if(t.noParentEvent===!0||s.value===null)return;let C;c===!0?i.$q.platform.is.mobile===!0?C=[[s.value,"touchstart","mobileTouch","passive"]]:C=[[s.value,"mousedown","hide","passive"],[s.value,"contextmenu","contextClick","notPassive"]]:C=[[s.value,"click","toggle","passive"],[s.value,"keyup","toggleKey","passive"]],Y(u,"anchor",C)});function m(){ue(u,"anchor")}function g(c){for(s.value=c;s.value.classList.contains("q-anchor--skip");)s.value=s.value.parentNode;l()}function S(){if(t.target===!1||t.target===""||i.$el.parentNode===null)s.value=null;else if(t.target===!0)g(i.$el.parentNode);else{let c=t.target;if(typeof t.target=="string")try{c=document.querySelector(t.target)}catch{c=void 0}c!=null?(s.value=c.$el||c,l()):(s.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return M(()=>t.contextMenu,c=>{s.value!==null&&(m(),l(c))}),M(()=>t.target,()=>{s.value!==null&&m(),S()}),M(()=>t.noParentEvent,c=>{s.value!==null&&(c===!0?m():l())}),ae(()=>{S(),a!==!0&&t.modelValue===!0&&s.value===null&&r("update:modelValue",!1)}),J(()=>{o!==null&&clearTimeout(o),m()}),{anchorEl:s,canShow:d,anchorEvents:u}}function fa(e,a){const l=T(null);let t;function i(o,d){const u=`${d!==void 0?"add":"remove"}EventListener`,m=d!==void 0?d:t;o!==window&&o[u]("scroll",m,I.passive),window[u]("scroll",m,I.passive),t=d}function r(){l.value!==null&&(i(l.value),l.value=null)}const s=M(()=>e.noParentEvent,()=>{l.value!==null&&(r(),a())});return J(s),{localScrollTarget:l,unconfigureScrollTarget:r,changeScrollEvent:i}}const{notPassiveCapture:Z}=I,H=[];function ee(e){const a=e.target;if(a===void 0||a.nodeType===8||a.classList.contains("no-pointer-events")===!0)return;let l=De.length-1;for(;l>=0;){const t=De[l].$;if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=H.length-1;t>=0;t--){const i=H[t];if((i.anchorEl.value===null||i.anchorEl.value.contains(a)===!1)&&(a===document.body||i.innerRef.value!==null&&i.innerRef.value.contains(a)===!1))e.qClickOutside=!0,i.onClickOutside(e);else return}}function ha(e){H.push(e),H.length===1&&(document.addEventListener("mousedown",ee,Z),document.addEventListener("touchstart",ee,Z))}function ke(e){const a=H.findIndex(l=>l===e);a>-1&&(H.splice(a,1),H.length===0&&(document.removeEventListener("mousedown",ee,Z),document.removeEventListener("touchstart",ee,Z)))}let Be,Ae;function qe(e){const a=e.split(" ");return a.length!==2?!1:["top","center","bottom"].includes(a[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(a[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ga(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const de={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{de[`${e}#ltr`]=e,de[`${e}#rtl`]=e});function Te(e,a){const l=e.split(" ");return{vertical:l[0],horizontal:de[`${l[1]}#${a===!0?"rtl":"ltr"}`]}}function pa(e,a){let{top:l,left:t,right:i,bottom:r,width:s,height:o}=e.getBoundingClientRect();return a!==void 0&&(l-=a[1],t-=a[0],r+=a[1],i+=a[0],s+=a[0],o+=a[1]),{top:l,bottom:r,height:o,left:t,right:i,width:s,middle:t+(i-t)/2,center:l+(r-l)/2}}function Ca(e,a,l){let{top:t,left:i}=e.getBoundingClientRect();return t+=a.top,i+=a.left,l!==void 0&&(t+=l[1],i+=l[0]),{top:t,bottom:t+1,height:1,left:i,right:i+1,width:1,middle:i,center:t}}function ba(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Ee(e,a,l){return{top:e[l.anchorOrigin.vertical]-a[l.selfOrigin.vertical],left:e[l.anchorOrigin.horizontal]-a[l.selfOrigin.horizontal]}}function ya(e){if(tt.is.ios===!0&&window.visualViewport!==void 0){const o=document.body.style,{offsetLeft:d,offsetTop:u}=window.visualViewport;d!==Be&&(o.setProperty("--q-pe-left",d+"px"),Be=d),u!==Ae&&(o.setProperty("--q-pe-top",u+"px"),Ae=u)}const{scrollLeft:a,scrollTop:l}=e.el,t=e.absoluteOffset===void 0?pa(e.anchorEl,e.cover===!0?[0,0]:e.offset):Ca(e.anchorEl,e.absoluteOffset,e.offset);let i={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(i.minWidth=t.width+"px",e.cover===!0&&(i.minHeight=t.height+"px")),Object.assign(e.el.style,i);const r=ba(e.el);let s=Ee(t,r,e);if(e.absoluteOffset===void 0||e.offset===void 0)ne(s,t,r,e.anchorOrigin,e.selfOrigin);else{const{top:o,left:d}=s;ne(s,t,r,e.anchorOrigin,e.selfOrigin);let u=!1;if(s.top!==o){u=!0;const m=2*e.offset[1];t.center=t.top-=m,t.bottom-=m+2}if(s.left!==d){u=!0;const m=2*e.offset[0];t.middle=t.left-=m,t.right-=m+2}u===!0&&(s=Ee(t,r,e),ne(s,t,r,e.anchorOrigin,e.selfOrigin))}i={top:s.top+"px",left:s.left+"px"},s.maxHeight!==void 0&&(i.maxHeight=s.maxHeight+"px",t.height>s.maxHeight&&(i.minHeight=i.maxHeight)),s.maxWidth!==void 0&&(i.maxWidth=s.maxWidth+"px",t.width>s.maxWidth&&(i.minWidth=i.maxWidth)),Object.assign(e.el.style,i),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==a&&(e.el.scrollLeft=a)}function ne(e,a,l,t,i){const r=l.bottom,s=l.right,o=at(),d=window.innerHeight-o,u=document.body.clientWidth;if(e.top<0||e.top+r>d)if(i.vertical==="center")e.top=a[t.vertical]>d/2?Math.max(0,d-r):0,e.maxHeight=Math.min(r,d);else if(a[t.vertical]>d/2){const m=Math.min(d,t.vertical==="center"?a.center:t.vertical===i.vertical?a.bottom:a.top);e.maxHeight=Math.min(r,m),e.top=Math.max(0,m-r)}else e.top=Math.max(0,t.vertical==="center"?a.center:t.vertical===i.vertical?a.top:a.bottom),e.maxHeight=Math.min(r,d-e.top);if(e.left<0||e.left+s>u)if(e.maxWidth=Math.min(s,u),i.horizontal==="middle")e.left=a[t.horizontal]>u/2?Math.max(0,u-s):0;else if(a[t.horizontal]>u/2){const m=Math.min(u,t.horizontal==="middle"?a.middle:t.horizontal===i.horizontal?a.right:a.left);e.maxWidth=Math.min(s,m),e.left=Math.max(0,m-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?a.middle:t.horizontal===i.horizontal?a.left:a.right),e.maxWidth=Math.min(s,u-e.left)}var xa=ve({name:"QTooltip",inheritAttrs:!1,props:{...ma,...lt,...st,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:qe},self:{type:String,default:"top middle",validator:qe},offset:{type:Array,default:()=>[14,14],validator:ga},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...it],setup(e,{slots:a,emit:l,attrs:t}){let i,r;const s=te(),{proxy:{$q:o}}=s,d=T(null),u=T(!1),m=x(()=>Te(e.anchor,o.lang.rtl)),g=x(()=>Te(e.self,o.lang.rtl)),S=x(()=>e.persistent!==!0),{registerTick:c,removeTick:C}=ot(),{registerTimeout:B}=nt(),{transitionProps:f,transitionStyle:A}=ct(e),{localScrollTarget:V,changeScrollEvent:pe,unconfigureScrollTarget:z}=fa(e,xe),{anchorEl:b,canShow:K,anchorEvents:R}=_a({showing:u,configureAnchorEl:Qe}),{show:Fe,hide:se}=ut({showing:u,canShow:K,handleShow:ze,handleHide:Re,hideOnRouteChange:S,processOnMount:!0});Object.assign(R,{delayShow:Oe,delayHide:Ne});const{showPortal:Ce,hidePortal:be,renderPortal:Ve}=rt(s,d,Ge,"tooltip");if(o.platform.is.mobile===!0){const p={anchorEl:b,innerRef:d,onClickOutside(E){return se(E),E.target.classList.contains("q-dialog__backdrop")&&Me(E),!0}},ie=x(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);M(ie,E=>{(E===!0?ha:ke)(p)}),J(()=>{ke(p)})}function ze(p){Ce(),c(()=>{r=new MutationObserver(()=>O()),r.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),O(),xe()}),i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,O)),B(()=>{Ce(!0),l("show",p)},e.transitionDuration)}function Re(p){C(),be(),ye(),B(()=>{be(!0),l("hide",p)},e.transitionDuration)}function ye(){r!==void 0&&(r.disconnect(),r=void 0),i!==void 0&&(i(),i=void 0),z(),ue(R,"tooltipTemp")}function O(){const p=d.value;b.value===null||!p||ya({el:p,offset:e.offset,anchorEl:b.value,anchorOrigin:m.value,selfOrigin:g.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Oe(p){if(o.platform.is.mobile===!0){re(),document.body.classList.add("non-selectable");const ie=b.value,E=["touchmove","touchcancel","touchend","click"].map($e=>[ie,$e,"delayHide","passiveCapture"]);Y(R,"tooltipTemp",E)}B(()=>{Fe(p)},e.delay)}function Ne(p){o.platform.is.mobile===!0&&(ue(R,"tooltipTemp"),re(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),B(()=>{se(p)},e.hideDelay)}function Qe(){if(e.noParentEvent===!0||b.value===null)return;const p=o.platform.is.mobile===!0?[[b.value,"touchstart","delayShow","passive"]]:[[b.value,"mouseenter","delayShow","passive"],[b.value,"mouseleave","delayHide","passive"]];Y(R,"anchor",p)}function xe(){if(b.value!==null||e.scrollTarget!==void 0){V.value=je(b.value,e.scrollTarget);const p=e.noParentEvent===!0?O:se;pe(V.value,p)}}function Ke(){return u.value===!0?k("div",{...t,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",t.class],style:[t.style,A.value],role:"tooltip"},He(a.default)):null}function Ge(){return k(he,f.value,Ke)}return J(ye),Object.assign(s.proxy,{updatePosition:O}),Ve}}),$a="/assets/css.91742440.svg",Sa="/assets/electron.642a6457.svg",wa="/assets/flutter.705a9073.svg",Da="/assets/git.555c6d1d.svg",ka="/assets/gitlab.e6712e0d.svg",Ba="/assets/html.85e01960.svg",Aa="/assets/javascript.aa4c110a.svg",qa="/assets/postcss.2fcbba71.svg",Ta="/assets/sass.7f63089b.svg",Ea="/assets/slack.ce6ea5c2.svg",La="/assets/typescript.b28dde74.svg",Ha="/assets/vite.ce0e1348.svg",ja="/assets/vuejs.1f9dcb1d.svg",Ma="/assets/webpack.ce9910e7.svg";const Pa=D({setup(){const e=T(""),a={frontend:{name:"Front-end",value:[{name:"vuejs",image:ja},{name:"javascript",image:Aa},{name:"typescript",image:La},{name:"flutter",image:wa},{name:"electron",image:Sa}]},publish:{name:"Publish",value:[{name:"html",image:Ba},{name:"css",image:$a},{name:"sass",image:Ta},{name:"postcss",image:qa}]},devTool:{name:"Dev tools",value:[{name:"webpack",image:Ma},{name:"vite",image:Ha}]},workplace:{name:"workplace",value:[{name:"git",image:Da},{name:"gitlab",image:ka},{name:"slack",image:Ea}]},etc:{name:"etc",value:[]}};function l(i){e.value=i}function t(){e.value=""}return{hoverItem:e,hoverHexagon:l,resetHover:t,techList:a}}}),ge=e=>(_e("data-v-3f694a42"),e=e(),fe(),e),Ia={class:"tech-stack full-width q-pa-xl scroll-y"},Wa={class:"width-400px text-center q-mx-auto text-grey-5","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"},Fa=ge(()=>n("div",{class:"section-title"},"Tech Stack",-1)),Va={class:"warp text-grey-10 text-h6 row"},za=ge(()=>n("div",{class:"col flex items-center justify-start"},[n("div",{class:"dot dot__close"}),n("div",{class:"dot dot__min"}),n("div",{class:"dot dot__max"})],-1)),Ra={class:"col text-center fs-85"},Oa=ge(()=>n("div",{class:"col"},null,-1)),Na={class:"tech-container"},Qa=["data-aos-delay"],Ka=["src"];function Ga(e,a,l,t,i,r){return _(),h("div",Ia,[n("div",Wa,[Fa,v(G,{color:"grey-5",class:"q-mt-lg q-mb-xl"})]),n("div",Va,[(_(!0),h(N,null,Q(Object.entries(e.techList),([s,o],d)=>(_(),h("div",{key:`card-${d}-${s}`,class:"col-4 q-px-sm q-pb-md"},[v(me,{class:"height-100pct column border-radius-15px","data-aos":"zoom-in","data-aos-easing":"linear","data-aos-duration":"500","data-aos-delay":d*100},{default:y(()=>[v(X,{class:"row bg-blue-3 q-py-sm height-50px text-weight-bold"},{default:y(()=>[za,n("div",Ra,w(o.name),1),Oa]),_:2},1024),v(G),v(X,{class:"col bg-grey-2"},{default:y(()=>[n("div",Na,[(_(!0),h(N,null,Q(o.value,(u,m)=>(_(),h("div",{key:`tech-${s}-${m}`,class:L(`tech-box tech-box__${u.name}`),"data-aos":"zoom-in","data-aos-easing":"linear","data-aos-duration":"500","data-aos-delay":d*m*100+600},[u.image?(_(),h("img",{key:0,src:u.image,alt:""},null,8,Ka)):W("",!0),u.name?(_(),le(xa,{key:1},{default:y(()=>[U(w(u.name),1)]),_:2},1024)):W("",!0)],10,Qa))),128))])]),_:2},1024)]),_:2},1032,["data-aos-delay"])]))),128))])])}var Xa=F(Pa,[["render",Ga],["__scopeId","data-v-3f694a42"]]);function Le(e,{value:a,oldValue:l}){if(typeof a!="function"){e.scrollTarget.removeEventListener("scroll",e.scroll,I.passive);return}e.handler=a,typeof l!="function"&&e.scrollTarget.addEventListener("scroll",e.scroll,I.passive)}var Ua=dt({name:"scroll",mounted(e,a){const l={scrollTarget:je(e),scroll(){l.handler(vt(l.scrollTarget),mt(l.scrollTarget))}};Le(l,a),e.__qscroll=l},updated(e,a){e.__qscroll!==void 0&&a.oldValue!==a.value&&Le(e.__qscroll,a)},beforeUnmount(e){const a=e.__qscroll;a.scrollTarget.removeEventListener("scroll",a.scroll,I.passive),delete e.__qscroll}}),Ya="/assets/baleun.cdd04c76.png",Ja="/assets/hemp.7c77713b.png",Za="/assets/ideation.1ad7217a.png",el="/assets/nre.6d3b8297.png",tl="/assets/specheck.55351218.png";const al={class:"time-line full-width q-pa-xl column"},ll={class:"time-line__title","data-aos":"fade-down","data-aos-easing":"linear","data-aos-duration":"500"},sl=n("div",{class:"section-title"},"Timeline",-1),il={class:"relative-position col"},ol=n("div",{class:"dashed"},null,-1),nl=n("div",{class:"current__default"},null,-1),cl=["src"],ul={key:0,class:"overflow-hidden"},rl={key:0,class:"history__text"},dl=D({__name:"TimeLine",setup(e){const{height:a}=gt,l=T(0),t=T({position:"absolute",top:"100px",bottom:void 0}),i=_t({mainVisual:0,techStack:0,timeLine:0,dashed:0,timeLineTitle:0}),r=T(0),s=u=>{var b,K;const{mainVisual:m,techStack:g,timeLine:S,timeLineTitle:c,dashed:C}=i,B=m+g+c,f=m+g+S-200;if(u<B){l.value=0,t.value.position="absolute",t.value.top="100px",t.value.bottom=void 0;return}if(u>=f){l.value=1,t.value.position="absolute",t.value.top=void 0,t.value.bottom="0px";return}const A=(b=document.querySelector(".current__avatar"))==null?void 0:b.getBoundingClientRect().top,V=(K=document.querySelector(".current__default"))==null?void 0:K.getBoundingClientRect();r.value=A-V.top;const z=(A-V.bottom)/C+.008;t.value.position="fixed",t.value.top="45%",l.value=z<=0?0:z>=1?1:z};ae(()=>{i.mainVisual=a(document.querySelector(".main-visual")),i.techStack=a(document.querySelector(".tech-stack")),i.timeLine=a(document.querySelector(".time-line")),i.dashed=a(document.querySelector(".dashed")),i.timeLineTitle=a(document.querySelector(".time-line__title"))});const o={css:"#1572b6",git:"#f14e32",html:"#e34f26",javascript:"#f7df1e",typescript:"#3178c6",flutter:"#54c5f8",sass:"#cc6699",vuejs:"#41b883",reactjs:"#61DBFB",webpack:"#8dd6f9",vite:"#646cff",gitlab:"#fc6d26",electron:"#9feaf9",slack:"#36c5f0",postcss:"#dd3735"},d=[{top:150,type:"text",slot:"left",align:["end","center"],date:"2021.01.04",title:"\uC6B0\uACBD\uC815\uBCF4\uAE30\uC220 \uC785\uC0AC"},{top:250,type:"card",slot:"right",date:"2021.01 ~ 2022.05",img:Ja,title:"\uC0B0\uC5C5\uC6A9 HEMP \uC885\uD569 \uC548\uC804\uAD00\uB9AC \uD50C\uB7AB\uD3FC",desc:"\uACBD\uC0C1\uBD81\uB3C4 \uADDC\uC81C\uC790\uC720\uD2B9\uAD6C\uD601\uC2E0\uC0AC\uC5C5\uC721\uC131(R&D) - \uBE14\uB85D\uCCB4\uC778 \uAE30\uBC18 \uC0B0\uC5C5\uC6A9 HEMP \uC885\uD569 \uC548\uC804\uAD00\uB9AC \uC2E4\uC99D \uC5F0\uAD6C",tech:[{label:"Vue.js",color:o.vuejs},{label:"Javascript",color:o.javascript},{label:"Sass",color:o.sass},{label:"Webpack",color:o.webpack},{label:"Gitlab",color:o.gitlab}]},{top:600,type:"card",slot:"left",date:"2021.11 ~ 2021.12",img:el,title:"\uC2E0\uC7AC\uC0DD\uC5D0\uB108\uC9C0 \uD1B5\uD569\uAD00\uB9AC \uD50C\uB7AB\uD3FC",desc:"\uD3EC\uD56D \uD14C\uD06C\uB178\uD30C\uD06C \uC8FC\uAD00. \uC2E0\uC7AC\uC0DD\uC5D0\uB108\uC9C0 \uD1B5\uD569\uAD00\uB9AC \uD50C\uB7AB\uD3FC \uAC1C\uBC1C \uC6A9\uC5ED",tech:[{label:"Vue.js",color:o.vuejs},{label:"Typescript",color:o.typescript},{label:"Sass",color:o.sass},{label:"Webpack",color:o.webpack},{label:"Gitlab",color:o.gitlab}]},{top:1e3,type:"card",slot:"right",date:"2022.01 ~ 2022.05",img:Ya,title:"\uBC14\uB978\uC2E0\uD638",desc:"\uC5D0\uC2A4\uC2DC\uADF8\uB110 \uC8FC\uAD00. \uBC14\uB2E5 \uC2E0\uD638\uB4F1 \uD604\uD669 \uBC0F AS \uAD00\uB9AC \uD50C\uB7AB\uD3FC \uAC1C\uBC1C \uC6A9\uC5ED",tech:[{label:"Vue.js",color:o.vuejs},{label:"Typescript",color:o.typescript},{label:"Sass",color:o.sass},{label:"Webpack",color:o.webpack},{label:"Gitlab",color:o.gitlab}]},{top:1500,type:"text",slot:"left",align:["end","center"],date:"2022.05.27",title:"\uC6B0\uACBD\uC815\uBCF4\uAE30\uC220 \uD1F4\uC0AC"},{top:1550,type:"text",slot:"right",align:["center","start"],date:"2022.06.01",title:"DXWorks \uC785\uC0AC"},{top:1650,type:"card",slot:"left",date:"2022.07 ~ 2022.12",img:tl,title:"2022\uB144 \uBE14\uB85D\uCCB4\uC778 \uBBFC\uAC04 \uBD84\uC57C \uC2DC\uBC94 \uD655\uC0B0 \uC0AC\uC5C5",desc:"\uD55C\uAD6D\uC778\uD130\uB137\uC9C4\uD765\uC6D0(KISA) \uC8FC\uAD00. React native \uBC0F Hyperledger Aries\uB97C \uC774\uC6A9\uD55C DID \uC778\uC99D Android \uBC0F IOS \uC571 \uAC1C\uBC1C",tech:[{label:"React Native",color:o.reactjs},{label:"Typescript",color:o.typescript},{label:"Gitlab",color:o.gitlab}],links:[{label:"iOS",url:"https://apps.apple.com/kr/app/\uC2A4\uD399\uCCB4\uD06C/id6443617673"},{label:"Android",url:"https://play.google.com/store/apps/details?id=kr.dxworks.careerbank"}]},{top:2e3,type:"card",slot:"right",date:"2022.10 ~ 2023.01",img:Za,title:"2022\uB144 '\uC0B0\uC5C5\uD601\uC2E0\uAE30\uBC18\uAD6C\uCD95\uC0AC\uC5C5' \uC544\uC774\uB370\uC774\uC158 \uD611\uC5C5\uC2DC\uC2A4\uD15C \uAC1C\uBC1C",desc:"\uB300\uAD6C\uACBD\uBD81\uB514\uC790\uC778\uC9C4\uD765\uC6D0 \uC8FC\uAD00. \uC544\uC774\uB370\uC774\uC158 \uD611\uC5C5 \uC2DC\uC2A4\uD15C \uAC1C\uBC1C",tech:[{label:"Vue.js",color:o.vuejs},{label:"Typescript",color:o.typescript},{label:"Sass",color:o.sass},{label:"PostCSS",color:o.postcss},{label:"Vite",color:o.vite},{label:"Gitlab",color:o.gitlab}]}];return(u,m)=>ft((_(),h("div",al,[n("div",ll,[sl,v(G,{color:"grey-5",class:"q-mt-lg q-mb-xl"})]),n("div",il,[ol,nl,n("div",{class:"current__line",style:P({transform:`translateX(-50%) scaleY(${l.value})`})},null,4),n("div",{class:"current__avatar",style:P(t.value)},[n("div",null,[n("img",{src:$(Dt),alt:""},null,8,cl)])],4),(_(),h(N,null,Q(d,(g,S)=>v($(_l),{key:`history-${S}`,top:g.top,active:r.value>=g.top,"slot-align":(g==null?void 0:g.align)||void 0},{[g.slot]:y(()=>[g.type==="text"?(_(),h("div",ul,[v(he,{appear:"","enter-active-class":`animated ${g.slot==="left"?"slideInRight":"slideInLeft"}`,"leave-active-class":`animated ${g.slot==="left"?"slideOutRight":"slideOutLeft"}`},{default:y(()=>[r.value>=g.top?(_(),h("div",rl,w(`${g.date} ${g.title}`),1)):W("",!0)]),_:2},1032,["enter-active-class","leave-active-class"])])):(_(),le($(Dl),ht({key:1,active:r.value>=g.top},g),null,16,["active"]))]),_:2},1032,["top","active","slot-align"])),64))])])),[[Ua,s]])}}),vl={key:0},ml=D({__name:"HistorySpot",props:{active:{type:Boolean,default:()=>!1}},setup(e){return(a,l)=>(_(),h("div",{class:L(["history__spot",{history__spot__active:e.active}])},[e.active?(_(),h("div",vl)):W("",!0)],2))}}),_l=D({__name:"HistoryBox",props:{top:{type:Number,default:()=>0},active:{type:Boolean,default:()=>!1},slotAlign:{type:Array,default:()=>["center","center"]}},setup(e){const a=pt();return(l,t)=>(_(),h("div",{class:"history row gap-lg full-width",style:P({top:`${e.top}px`})},[v($(ml),{active:e.active},null,8,["active"]),n("div",{class:L(["col relative-position flex",`justify-${e.slotAlign[0]}`]),style:P($(a).left?void 0:{zIndex:-100})},[ce(l.$slots,"left")],6),n("div",{class:L(["col relative-position flex",`justify-${e.slotAlign[1]}`]),style:P($(a).right?void 0:{zIndex:-100})},[ce(l.$slots,"right")],6)],4))}}),fl={xs:8,sm:10,md:14,lg:20,xl:24};var hl=ve({name:"QChip",props:{...Ct,...bt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:a,emit:l}){const{proxy:{$q:t}}=te(),i=yt(e,t),r=xt(e,fl),s=x(()=>e.selected===!0||e.icon!==void 0),o=x(()=>e.selected===!0?e.iconSelected||t.iconSet.chip.selected:e.icon),d=x(()=>e.iconRemove||t.iconSet.chip.remove),u=x(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),m=x(()=>{const f=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(f?` text-${f} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),g=x(()=>{const f=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},A={...f,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||t.lang.label.remove};return{chip:f,remove:A}});function S(f){f.keyCode===13&&c(f)}function c(f){e.disable||(l("update:selected",!e.selected),l("click",f))}function C(f){(f.keyCode===void 0||f.keyCode===13)&&(Me(f),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function B(){const f=[];u.value===!0&&f.push(k("div",{class:"q-focus-helper"})),s.value===!0&&f.push(k(q,{class:"q-chip__icon q-chip__icon--left",name:o.value}));const A=e.label!==void 0?[k("div",{class:"ellipsis"},[e.label])]:void 0;return f.push(k("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},St(a.default,A))),e.iconRight&&f.push(k(q,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&f.push(k(q,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:d.value,...g.value.remove,onClick:C,onKeyup:C})),f}return()=>{if(e.modelValue===!1)return;const f={class:m.value,style:r.value};return u.value===!0&&Object.assign(f,g.value.chip,{onClick:c,onKeyup:S}),$t("div",f,B(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[wt,e.ripple]])}}});const gl={class:"history__card"},pl={key:0},Cl={class:"text-white"},bl={key:0,class:"history__card__img-box"},yl=["src","alt"],xl={class:"history__card__text__title"},$l={class:"history__card__tech col"},Sl={class:"history__card__links flex items-center gap-xs"},wl=["onClick"],Dl=D({__name:"HistoryCard",props:{active:{type:Boolean,default:()=>!1},img:{type:String,default:()=>""},imgAlt:{type:String,default:()=>""},title:{type:String,default:()=>""},desc:{type:String,default:()=>""},tech:{type:Array,default:()=>[]},date:{type:String,default:()=>""},links:{type:Array,default:()=>[]}},setup(e){const a=l=>{const t=document.createElement("a");t.target="_blank",t.href=l,t.click(),t.remove()};return(l,t)=>(_(),h("div",gl,[v(he,{appear:"","enter-active-class":"animated slideInDown","leave-active-class":"animated slideOutUp"},{default:y(()=>[e.active?(_(),h("div",pl,[n("span",Cl,w(e.date),1),v(me,{class:"history__card"},{default:y(()=>[v(X,null,{default:y(()=>[e.img?(_(),h("div",bl,[n("img",{src:e.img,alt:e.imgAlt},null,8,yl)])):W("",!0),n("div",{class:L(["history__card__text",{"q-mt-md":!!e.img&&(!!e.title||!!e.desc)}])},[n("div",xl,w(e.title),1),n("div",{class:L(["history__card__text__desc",{"mt-6":!!e.img&&!!e.title&&!!e.desc}])},w(e.desc),3)],2),n("div",{class:L(["row gap",{"q-mt-md":(!!e.img||!!e.title||!!e.desc)&&!!e.tech.length}])},[n("div",$l,[(_(!0),h(N,null,Q(e.tech,({label:i,color:r},s)=>(_(),le(hl,{key:`tech-${s}`,outline:"",label:i,style:P({color:r})},null,8,["label","style"]))),128))]),n("div",Sl,[(_(!0),h(N,null,Q(e.links,({label:i,url:r},s)=>(_(),h("div",{key:`link-${s}`,class:"cursor-pointer",onClick:o=>a(r)},[U(w(i),1),v(q,{name:"chevron_right"})],8,wl))),128))])],2)]),_:1})]),_:1})])):W("",!0)]),_:1})]))}}),ql=D({__name:"IndexPage",setup(e){return ae(()=>{Pe.init()}),(a,l)=>(_(),le(kt,{class:"row justify-evenly overflow-hidden"},{default:y(()=>[v(va),v(Xa),v($(dl)),v($(It)),v(Rt)]),_:1}))}});export{ql as default};
