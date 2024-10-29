import{E as fe,j as U,D as C,p as de,e as ue,k as j,f as me,n as F,o as he,I as ve,M as ge}from"./index-BCFmv-el.js";const A=new fe,z="start",K="end";let W=!1,M=U(),N=0;M.resolve();const H=console.log.bind(console.log,"[HEAVY-ANIMATION]:");function G(e,t){W||(M=U(),A.dispatchEvent(z),W=!0,C&&H("start")),++N,C&&H("attach promise, length:",N,t);const s=[t!==void 0?de(t):void 0,e.finally(()=>{})].filter(Boolean),a=performance.now(),n=M;return Promise.race(s).then(()=>{M!==n||M.isFulfilled||(--N,C&&H("promise end, length:",N,performance.now()-a),N<=0&&ee())}),M}window.dispatchHeavyAnimationEvent=G;function ee(){M.isFulfilled||(W=!1,N=0,A.dispatchEvent(K),M.resolve(),C&&H("end"))}function xe(){ee()}function Be(){return M}function Fe(e,t,s){W&&e();const a=s?s.add(A):A.addEventListener.bind(A),n=s?s.removeManual.bind(s,A):A.removeEventListener.bind(A);return a(z,e),a(K,t),()=>{n(K,t),n(z,e)}}function _(e,t){if(!e?.parentNode)return-1;if(t)return Array.from(e.parentNode.childNodes).indexOf(e);let s=0;for(;(e=e.previousElementSibling)!==null;)++s;return s}function k(e,t){return me.isRTL&&(e=-e),`translate3d(${e}px, ${t}px, 0)`}const ye={callback:(e,t,s)=>{const a=t.getBoundingClientRect().width,n=[e,t];return s&&n.reverse(),n[0].style.filter="brightness(80%)",n[0].style.transform=k(-a*.25,0),n[1].style.transform=k(a,0),e.classList.add("active"),e.offsetWidth,e.style.transform="",e.style.filter="",()=>{t.style.transform=t.style.filter=""}},animateFirst:!1},Ee={callback:(e,t,s)=>{const a=t.getBoundingClientRect().width,n=[e,t];return s&&n.reverse(),n[0].style.transform=k(-a,0),n[1].style.transform=k(a,0),e.classList.add("active"),e.offsetWidth,e.style.transform="",()=>{t.style.transform=""}},animateFirst:!1},we={callback:(e,t,s)=>{const a=t.getBoundingClientRect().width,n=[e,t],v=["slide-right","slide-left"];return s&&(n.reverse(),v.reverse()),n[0].style.transform=k(-a,0),n[1].style.transform=k(a,0),e.classList.add("active",v[0]),t.classList.add(v[1]),e.offsetWidth,e.style.transform="",e.classList.remove(v[0]),()=>{t.style.transform="",t.classList.remove(v[1])}},animateFirst:!1},Le={navigation:ye,premiumTabs:we,tabs:Ee},Te=e=>{let{content:t,type:s,transitionTime:a,onTransitionEnd:n,onTransitionStart:v,isHeavy:h=!0,once:w=!1,withAnimationListener:I=!0,listenerSetter:S,animateFirst:L=!1}=e;const{callback:P,animateFirst:y}=Le[s]||{};t.dataset.animation=s,y!==void 0&&(L=y);const r=new Map;let i,f=null;if(I){const o=P?"transitionend":"animationend",g=l=>{ue(l),!(l.target.parentElement!==t||(r.get(l.target)?.(),l.target!==f))&&(!i&&h||(i&&(i.resolve(),i=void 0),n?.(m.prevId()),t.classList.remove("animating","backwards","disable-hover"),w&&(S?S.removeManual(t,o,g):t.removeEventListener(o,g),f=i=void 0,r.clear())))};S?S.add(t)(o,g):t.addEventListener(o,g)}function m(o,g=!0,l){l&&(f=l),o instanceof HTMLElement&&(o=_(o));const E=m.prevId();if(o===E)return!1;v?.(o);const d=t.children[o];if((!j.isAvailable("animations")||E===-1&&!L)&&(g=!1),!I){const u=t.dataset.timeout;u!==void 0&&clearTimeout(+u),delete t.dataset.timeout}if(!g){f?f.classList.remove("active","to","from"):d&&r.get(d)?.(),d&&(d.classList.remove("to","from"),d.classList.add("active")),t.classList.remove("animating","backwards","disable-hover"),f=d,n?.(o);return}I||(t.dataset.timeout=""+window.setTimeout(()=>{d.classList.remove("to"),f&&f.classList.remove("from"),t.classList.remove("animating","backwards","disable-hover"),delete t.dataset.timeout},a)),f&&(f.classList.remove("to"),f.classList.add("from")),t.classList.add("animating");const p=E<o;t.classList.toggle("backwards",!p);let D;if(d&&(P?D=P(d,f,p):d.classList.add("active"),d.classList.remove("from"),d.classList.add("to")),d){const u=d.dataset.transitionTimeout;u&&clearTimeout(+u),r.set(d,()=>{d.classList.remove("to"),r.delete(d)})}if(f){let u;const T=f,c=()=>{clearTimeout(u),T.classList.remove("active","from"),D?.(),r.delete(T)};d?(u=window.setTimeout(c,a+100),r.set(T,c)):(u=window.setTimeout(c,a),r.set(T,()=>{clearTimeout(u),r.delete(T)})),T.dataset.transitionTimeout=""+u,h&&(i||(i=U()),G(i,a*2))}f=d}return m.prevId=()=>f?_(f):-1,m.getFrom=()=>f,m.setFrom=o=>f=o,m},q=new Map;function Se(e){x(e);const t={isCancelled:!1,deferred:U()};return q.set(e,t),t.deferred.then(()=>{te(e)===t&&q.delete(e)}),t}function te(e){return q.get(e)}function x(e){const t=te(e);t&&(t.isCancelled=!0,t.deferred.resolve())}function se(e,t,s){return s||(s=Se(t)),F(()=>{s.isCancelled||(e()?se(e,t,s):s.deferred.resolve())}),s.deferred}function Me(e){F(()=>{e()&&Me(e)})}function be(e){return!!e?.isConnected}const Z=250,Ae=600,ne=1500,Ie=500;var ie=(e=>(e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Static=2]="Static",e))(ie||{});function Pe(e){if(e.margin??(e.margin=0),e.maxDistance??(e.maxDistance=ne),e.axis??(e.axis="y"),(!j.isAvailable("animations")||e.forceDuration===0)&&(e.forceDirection=2),e.forceDirection===2)return e.forceDuration=0,V(e);const t=he().then(()=>V(e));return e.axis==="y"?G(t):t}function V(e){const{element:t,container:s,getNormalSize:a,getElementPosition:n,transitionFunction:v,axis:h,margin:w,position:I,forceDirection:S,maxDistance:L,forceDuration:P}=e;if(!be(t))return x(s),Promise.resolve();const y=h==="y"?"top":"left",r=h==="y"?"bottom":"right",i=h==="y"?"height":"width",f=h==="y"?"scrollHeight":"scrollWidth",m=h==="y"?"scrollHeight":"offsetWidth",o=h==="y"?"scrollTop":"scrollLeft",g=t.getBoundingClientRect(),l=s.getBoundingClientRect?s.getBoundingClientRect():document.body.getBoundingClientRect(),E=g[y]-l[y],d=n?n({elementRect:g,containerRect:l,elementPosition:E}):E,p=t[m],D=a?a({rect:l}):l[i];let u=s[o];const T=s[f];let c;switch(I){case"start":c=d-w;break;case"end":c=g[r]-l[r]+w;break;case"nearest":case"center":if(p<D)c=d+p/2-D/2;else{if(e.fallbackToElementStartWhenCentering&&e.fallbackToElementStartWhenCentering!==t)return e.element=e.fallbackToElementStartWhenCentering,e.position="start",V(e);c=d-w}break}if(Math.abs(c-(w||0))<1)return x(s),Promise.resolve();let R;if(h==="y"&&S===void 0&&(c>L?(R=u+=c-L,c=L):c<-L&&(R=u+=c+L,c=-L)),c<0){const b=-u;c=Math.max(c,b)}else if(c>0){const b=T-(u+D);c=Math.min(c,b)}const J=u+c,X=Math.abs(c),O=P??Z+X/ne*(Ae-Z),re=Date.now(),oe=v??(X<Ie?De:pe),Q=()=>O?Math.min((Date.now()-re)/O,1):1,Y=()=>{R!==void 0&&(s[o]=R,R=void 0);const b=Q(),le=oe(b),ce=c*(1-le);return s[o]=Math.round(J-ce),b<1};if(!O||!c)return x(s),Y(),Promise.resolve();if(e.startCallback){const b=T-Math.round(J+s[h==="y"?"offsetHeight":"offsetWidth"]);e.startCallback({scrollSize:T,scrollPosition:u,distanceToEnd:b,path:c,duration:O,containerRect:l,elementRect:g,getProgress:Q})}return se(Y,s)}function pe(e){return 1-(1-e)**5}function De(e){return 1-(1-e)**3.5}function Ne(e,t){if(!e)return null;if(e.parentElement===t)return e;for(;e.parentElement;)if(e=e.parentElement,e.parentElement===t)return e;return null}function ke(e,t){const s=new Event(t,{bubbles:!0,cancelable:!0});e.dispatchEvent(s)}let $;document.addEventListener("mousedown",e=>{$=e.target,$?.closest("[cancel-mouse-down]")&&e.preventDefault()});function Re(e){if(e.isTrusted&&e.type==="click"&&e.target!==$)return!0}const B=ve?"mousedown":"click";function _e(e,t,s={}){const a=s.listenerSetter?s.listenerSetter.add(e):e.addEventListener.bind(e),n=s.listenerSetter?s.listenerSetter.removeManual.bind(s.listenerSetter,e):e.removeEventListener.bind(e);if(s.touchMouseDown=!0,s.cancelMouseDown&&e.setAttribute("cancel-mouse-down",""),B==="click"&&!s.ignoreMove){const v=t;t=h=>{Re(h)||v(h)}}return a(B,t,s),()=>n(B,t,s)}function We(e){ke(e,B)}function Oe(e,t,s,a,n=200,v,h){const w=Te({content:t,type:e||t.dataset.animation==="tabs"?"tabs":"navigation",transitionTime:n,onTransitionEnd:a,listenerSetter:h});if(!e)return w;const I=new Proxy(w,{apply:(y,r,i)=>{const f=i[1]!==void 0?i[1]:!0;let m,o;i[0]instanceof HTMLElement?(m=_(i[0]),o=i[0]):(m=+i[0],o=e.querySelector(`[data-tab="${m}"]`)||e.children[m]),S(o,m,f)}}),S=async(y,r,i=!0)=>{const f=t.children[r];if(s){const l=s(r,f,i),E=l instanceof Promise?await l:l;if(E!==void 0&&!E)return}v&&v.scrollIntoViewNew({element:y.parentElement.children[r],position:"center",forceDirection:i?void 0:ie.Static,forceDuration:n,axis:"x"}),j.isAvailable("animations")||(i=!1);const m=w.prevId();if(y.classList.contains("active")||r===m)return!1;const o=i?F:l=>l(),g=e.querySelector(P.toLowerCase()+".active");g&&o(()=>{g.classList.remove("active")}),L&&m!==-1&&i&&o(()=>{const l=y.querySelector("i"),E=y.parentElement.children[m].querySelector("i");E.classList.remove("animate"),l.classList.remove("animate");const d=E.parentElement.parentElement.offsetLeft-l.parentElement.parentElement.offsetLeft,p=E.clientWidth/l.clientWidth;l.style.transform=`translate3d(${d}px, 0, 0) scale3d(${p}, 1, 1)`,F(()=>{l.classList.add("animate"),l.style.transform="none"})}),o(()=>{y.classList.add("active")}),w(r,i)},L=!e.classList.contains("no-stripe"),P=e.firstElementChild.tagName;return _e(e,y=>{let r=y.target;if(r=Ne(r,e),!r)return!1;let i;if(r.dataset.tab){if(i=+r.dataset.tab,i===-1)return!1}else i=_(r);S(r,i)},{listenerSetter:h}),I}class Ce{constructor(){this.pageId=-1,this.pagesDiv=document.getElementById("auth-pages"),this.scrollableDiv=this.pagesDiv.querySelector(".scrollable"),this.selectTab=Oe(null,this.scrollableDiv.querySelector(".tabs-container"),null,()=>{this.page?.onShown&&this.page.onShown()})}setPage(t){if(t.isAuthPage){this.pagesDiv.style.display="";const s=_(t.pageEl);if(this.pageId===s)return;this.selectTab(s),this.pageId=s,this.scrollableDiv&&Pe({container:this.scrollableDiv,element:this.scrollableDiv.firstElementChild,position:"start"})}else this.pagesDiv.style.display="none",t.pageEl.style.display="",this.pageId=-1;this.page=t}}const ae=new Ce;ge.pagesManager=ae;class Ue{constructor(t,s,a,n,v){this.isAuthPage=s,this.onFirstMount=a,this.onMount=n,this.onShown=v,this.installed=!1,this.pageEl=document.body.querySelector("."+t)}async mount(...t){if(this.onMount){const s=this.onMount(...t);s instanceof Promise&&await s}if(!this.installed){if(this.onFirstMount)try{const s=this.onFirstMount(...t);s instanceof Promise&&await s}catch(s){console.error("PAGE MOUNT ERROR:",s)}this.installed=!0}ae.setPage(this)}}export{B as C,ie as F,Ue as P,Te as T,_e as a,se as b,Me as c,We as d,x as e,Ne as f,Be as g,Re as h,be as i,Oe as j,G as k,xe as l,Pe as m,ke as s,Fe as u,_ as w};
//# sourceMappingURL=page-Cxgmd94t.js.map
