(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1454],{23346:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(59496);var i=function(t=!1,e){const[n,i]=(0,r.useState)(t);return[n,(0,r.useMemo)((()=>{const n=void 0===e?!t:e;return{toggle:()=>i((e=>e===t?n:t)),set:t=>i(t),setLeft:()=>i(t),setRight:()=>i(n)}}),[])]};function o(t=!1){const[e,{toggle:n,set:o}]=i(t);return[e,(0,r.useMemo)((()=>({toggle:n,set:t=>o(!!t),setTrue:()=>o(!0),setFalse:()=>o(!1)})),[])]}},16394:function(t,e,n){"use strict";var r=n(66292),i=n.n(r),o=n(59496),s=n(99203),a=n(16675),c=n(60777),u=n(82460);e.Z=function(t,e){var n;u.Z&&((0,c.mf)(t)||console.error("useDebounceFn expected parameter is a function, got "+typeof t));const r=(0,s.Z)(t),h=null!==(n=null===e||void 0===e?void 0:e.wait)&&void 0!==n?n:1e3,f=(0,o.useMemo)((()=>i()(((...t)=>r.current(...t)),h,e)),[]);return(0,a.Z)((()=>{f.cancel()})),{run:f,cancel:f.cancel,flush:f.flush}}},17800:function(t,e,n){"use strict";var r=n(59496),i=n(16675);e.Z=function(t){const e=(0,r.useRef)(0),[n,o]=(0,r.useState)(t),s=(0,r.useCallback)((t=>{cancelAnimationFrame(e.current),e.current=requestAnimationFrame((()=>{o(t)}))}),[]);return(0,i.Z)((()=>{cancelAnimationFrame(e.current)})),[n,s]}},87134:function(t,e,n){"use strict";n.d(e,{Z:function(){return W}});var r=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,o="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),s="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!==typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&c()}function a(){s(o)}function c(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,e);i=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),h=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},l=w(0,0,0,0);function d(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=f(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,s=i.top+i.bottom,a=d(r.width),c=d(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==e&&(a-=v(r,"left","right")+o),Math.round(c+s)!==n&&(c-=v(r,"top","bottom")+s)),!function(t){return t===f(t).document.documentElement}(t)){var u=Math.round(a+o)-e,h=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(h)&&(c-=h)}return w(i.left,i.top,a,c)}var m="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"===typeof t.getBBox};function y(t){return i?m(t)?function(t){var e=t.getBBox();return w(0,0,e.width,e.height)}(t):p(t):l}function w(t,e,n,r){return{x:t,y:e,width:n,height:r}}var b=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=y(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return h(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}(e);h(this,{target:t,contentRect:n})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new b(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),E="undefined"!==typeof WeakMap?new WeakMap:new r,T=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(e,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){T.prototype[t]=function(){var e;return(e=E.get(this))[t].apply(e,arguments)}}));var O="undefined"!==typeof o.ResizeObserver?o.ResizeObserver:T,M=n(17800),x=n(13572),k=n(77432),A=n(58760),I=n(59496);var C=(0,n(63413).Z)(I.useLayoutEffect);var P=k.Z?C:A.Z;var W=function(t){const[e,n]=(0,M.Z)((()=>{const e=(0,x.n)(t);return e?{width:e.clientWidth,height:e.clientHeight}:void 0}));return P((()=>{const e=(0,x.n)(t);if(!e)return;const r=new O((t=>{t.forEach((t=>{const{clientWidth:e,clientHeight:r}=t.target;n({width:e,height:r})}))}));return r.observe(e),()=>{r.disconnect()}}),[],t),e}},63413:function(t,e,n){"use strict";var r=n(59496),i=n(16675),o=n(94913),s=n(13572);e.Z=t=>(e,n,a)=>{const c=(0,r.useRef)(!1),u=(0,r.useRef)([]),h=(0,r.useRef)([]),f=(0,r.useRef)();t((()=>{var t;const r=(Array.isArray(a)?a:[a]).map((t=>(0,s.n)(t)));if(!c.current)return c.current=!0,u.current=r,h.current=n,void(f.current=e());r.length===u.current.length&&(0,o.Z)(r,u.current)&&(0,o.Z)(n,h.current)||(null===(t=f.current)||void 0===t||t.call(f),u.current=r,h.current=n,f.current=e())})),(0,i.Z)((()=>{var t;null===(t=f.current)||void 0===t||t.call(f),c.current=!1}))}},13572:function(t,e,n){"use strict";n.d(e,{n:function(){return o}});var r=n(60777),i=n(77432);function o(t,e){if(!i.Z)return;if(!t)return e;let n;return n=(0,r.mf)(t)?t():"current"in t?t.current:t,n}},58760:function(t,e,n){"use strict";var r=n(59496);const i=(0,n(63413).Z)(r.useEffect);e.Z=i},37772:function(t,e,n){"use strict";function r(t){var e,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}e.Z=function(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(i&&(i+=" "),i+=e);return i}},44290:function(t,e,n){var r=n(75697);t.exports=function(t,e){return r(e,(function(e){return t[e]}))}},57958:function(t){t.exports=function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}},82691:function(t,e,n){var r=n(87473),i=n(81887),o=n(30353),s=n(24669),a=n(47428),c=n(61563),u=n(92963),h=n(73806),f=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(a(t)&&(s(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||h(t)||o(t)))return!t.length;var e=i(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(u(t))return!r(t).length;for(var n in t)if(f.call(t,n))return!1;return!0}},61262:function(t,e,n){var r=n(74396),i=n(47165),o=n(81887),s=n(47428),a=n(56549),c=n(57958),u=n(7523),h=n(79967),f=n(30078),l=n(61017),d=r?r.iterator:void 0;t.exports=function(t){if(!t)return[];if(s(t))return a(t)?f(t):i(t);if(d&&t[d])return c(t[d]());var e=o(t);return("[object Map]"==e?u:"[object Set]"==e?h:l)(t)}},61017:function(t,e,n){var r=n(44290),i=n(50579);t.exports=function(t){return null==t?[]:r(t,i(t))}},38940:function(t,e,n){"use strict";n.d(e,{F:function(){return s},o:function(){return a}});var r=n(84757),i=n(53641),o=n(74507),s=function(t){return t?(0,r.Q6)(t):t};function a(t,e){if(!e)return(0,i.V)(t);var n="".concat(t,".[").concat((0,o.NC)(e,{size:32}).slice(2),"]");return(0,i.V)(n)}},32217:function(t,e,n){"use strict";n.d(e,{C:function(){return i},I:function(){return o}});var r=function(t,e){if(e=Symbol[t])return e;throw Error("Symbol."+t+" is not defined")},i=function(t,e,n){return new Promise((function(r,i){var o=function(t){try{a(n.next(t))}catch(e){i(e)}},s=function(t){try{a(n.throw(t))}catch(e){i(e)}},a=function(t){return t.done?r(t.value):Promise.resolve(t.value).then(o,s)};a((n=n.apply(t,e)).next())}))},o=function(t,e,n){return(e=t[r("asyncIterator")])?e.call(t):(t=t[r("iterator")](),e={},(n=function(n,r){return(r=t[n])&&(e[n]=function(e){return new Promise((function(n,i,o){return e=r.call(t,e),o=e.done,Promise.resolve(e.value).then((function(t){return n({value:t,done:o})}),i)}))})})("next"),n("return"),e)}},52449:function(t,e,n){"use strict";n.d(e,{Z:function(){return D}});var r=n(11312);class i extends Error{constructor(t){super(t),this.name="TimeoutError"}}class o extends Error{constructor(t){super(),this.name="AbortError",this.message=t}}const s=t=>void 0===globalThis.DOMException?new o(t):new DOMException(t),a=t=>{const e=void 0===t.reason?s("This operation was aborted."):t.reason;return e instanceof Error?e:s(e)};var c,u=function(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)};class h{constructor(){c.set(this,[])}enqueue(t,e){const n={priority:(e={priority:0,...e}).priority,run:t};if(this.size&&u(this,c,"f")[this.size-1].priority>=e.priority)return void u(this,c,"f").push(n);const r=function(t,e,n){let r=0,i=t.length;for(;i>0;){const o=Math.trunc(i/2);let s=r+o;n(t[s],e)<=0?(r=++s,i-=o+1):i=o}return r}(u(this,c,"f"),n,((t,e)=>e.priority-t.priority));u(this,c,"f").splice(r,0,n)}dequeue(){const t=u(this,c,"f").shift();return null===t||void 0===t?void 0:t.run}filter(t){return u(this,c,"f").filter((e=>e.priority===t.priority)).map((t=>t.run))}get size(){return u(this,c,"f").length}}c=new WeakMap;var f,l,d,v,p,m,y,w,b,_,g,E,T,O,M,x,k,A,I,C,P,W,S,z,Z,R,j=function(t,e,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(t,n):i?i.value=n:e.set(t,n),n},N=function(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)};class F extends Error{}class D extends r{constructor(t){var e,n,r,i;if(super(),f.add(this),l.set(this,void 0),d.set(this,void 0),v.set(this,0),p.set(this,void 0),m.set(this,void 0),y.set(this,0),w.set(this,void 0),b.set(this,void 0),_.set(this,void 0),g.set(this,void 0),E.set(this,0),T.set(this,void 0),O.set(this,void 0),M.set(this,void 0),Object.defineProperty(this,"timeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),!("number"===typeof(t={carryoverConcurrencyCount:!1,intervalCap:Number.POSITIVE_INFINITY,interval:0,concurrency:Number.POSITIVE_INFINITY,autoStart:!0,queueClass:h,...t}).intervalCap&&t.intervalCap>=1))throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${null!==(n=null===(e=t.intervalCap)||void 0===e?void 0:e.toString())&&void 0!==n?n:""}\` (${typeof t.intervalCap})`);if(void 0===t.interval||!(Number.isFinite(t.interval)&&t.interval>=0))throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${null!==(i=null===(r=t.interval)||void 0===r?void 0:r.toString())&&void 0!==i?i:""}\` (${typeof t.interval})`);j(this,l,t.carryoverConcurrencyCount,"f"),j(this,d,t.intervalCap===Number.POSITIVE_INFINITY||0===t.interval,"f"),j(this,p,t.intervalCap,"f"),j(this,m,t.interval,"f"),j(this,_,new t.queueClass,"f"),j(this,g,t.queueClass,"f"),this.concurrency=t.concurrency,this.timeout=t.timeout,j(this,M,!0===t.throwOnTimeout,"f"),j(this,O,!1===t.autoStart,"f")}get concurrency(){return N(this,T,"f")}set concurrency(t){if(!("number"===typeof t&&t>=1))throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${t}\` (${typeof t})`);j(this,T,t,"f"),N(this,f,"m",z).call(this)}async add(t,e={}){return e={timeout:this.timeout,throwOnTimeout:N(this,M,"f"),...e},new Promise(((n,r)=>{N(this,_,"f").enqueue((async()=>{var o,s,c;j(this,E,(s=N(this,E,"f"),++s),"f"),j(this,v,(c=N(this,v,"f"),++c),"f");try{if(null===(o=e.signal)||void 0===o?void 0:o.aborted)throw new F("The task was aborted.");let r=t({signal:e.signal});e.timeout&&(r=function(t,e,n,r){let o;const s=new Promise(((s,c)=>{if("number"!==typeof e||1!==Math.sign(e))throw new TypeError(`Expected \`milliseconds\` to be a positive number, got \`${e}\``);if(e!==Number.POSITIVE_INFINITY){if((r={customTimers:{setTimeout:setTimeout,clearTimeout:clearTimeout},...r}).signal){const{signal:t}=r;t.aborted&&c(a(t)),t.addEventListener("abort",(()=>{c(a(t))}))}o=r.customTimers.setTimeout.call(void 0,(()=>{if("function"===typeof n){try{s(n())}catch(o){c(o)}return}const r=n instanceof Error?n:new i("string"===typeof n?n:`Promise timed out after ${e} milliseconds`);"function"===typeof t.cancel&&t.cancel(),c(r)}),e),(async()=>{try{s(await t)}catch(e){c(e)}finally{r.customTimers.clearTimeout.call(void 0,o)}})()}else s(t)}));return s.clear=()=>{clearTimeout(o),o=void 0},s}(Promise.resolve(r),e.timeout)),e.signal&&(r=Promise.race([r,N(this,f,"m",Z).call(this,e.signal)]));const s=await r;n(s),this.emit("completed",s)}catch(u){if(u instanceof i&&!e.throwOnTimeout)return void n();r(u),this.emit("error",u)}finally{N(this,f,"m",A).call(this)}}),e),this.emit("add"),N(this,f,"m",P).call(this)}))}async addAll(t,e){return Promise.all(t.map((async t=>this.add(t,e))))}start(){return N(this,O,"f")?(j(this,O,!1,"f"),N(this,f,"m",z).call(this),this):this}pause(){j(this,O,!0,"f")}clear(){j(this,_,new(N(this,g,"f")),"f")}async onEmpty(){0!==N(this,_,"f").size&&await N(this,f,"m",R).call(this,"empty")}async onSizeLessThan(t){N(this,_,"f").size<t||await N(this,f,"m",R).call(this,"next",(()=>N(this,_,"f").size<t))}async onIdle(){0===N(this,E,"f")&&0===N(this,_,"f").size||await N(this,f,"m",R).call(this,"idle")}get size(){return N(this,_,"f").size}sizeBy(t){return N(this,_,"f").filter(t).length}get pending(){return N(this,E,"f")}get isPaused(){return N(this,O,"f")}}l=new WeakMap,d=new WeakMap,v=new WeakMap,p=new WeakMap,m=new WeakMap,y=new WeakMap,w=new WeakMap,b=new WeakMap,_=new WeakMap,g=new WeakMap,E=new WeakMap,T=new WeakMap,O=new WeakMap,M=new WeakMap,f=new WeakSet,x=function(){return N(this,d,"f")||N(this,v,"f")<N(this,p,"f")},k=function(){return N(this,E,"f")<N(this,T,"f")},A=function(){var t;j(this,E,(t=N(this,E,"f"),--t),"f"),N(this,f,"m",P).call(this),this.emit("next")},I=function(){N(this,f,"m",S).call(this),N(this,f,"m",W).call(this),j(this,b,void 0,"f")},C=function(){const t=Date.now();if(void 0===N(this,w,"f")){const e=N(this,y,"f")-t;if(!(e<0))return void 0===N(this,b,"f")&&j(this,b,setTimeout((()=>{N(this,f,"m",I).call(this)}),e),"f"),!0;j(this,v,N(this,l,"f")?N(this,E,"f"):0,"f")}return!1},P=function(){if(0===N(this,_,"f").size)return N(this,w,"f")&&clearInterval(N(this,w,"f")),j(this,w,void 0,"f"),this.emit("empty"),0===N(this,E,"f")&&this.emit("idle"),!1;if(!N(this,O,"f")){const t=!N(this,f,"a",C);if(N(this,f,"a",x)&&N(this,f,"a",k)){const e=N(this,_,"f").dequeue();return!!e&&(this.emit("active"),e(),t&&N(this,f,"m",W).call(this),!0)}}return!1},W=function(){N(this,d,"f")||void 0!==N(this,w,"f")||(j(this,w,setInterval((()=>{N(this,f,"m",S).call(this)}),N(this,m,"f")),"f"),j(this,y,Date.now()+N(this,m,"f"),"f"))},S=function(){0===N(this,v,"f")&&0===N(this,E,"f")&&N(this,w,"f")&&(clearInterval(N(this,w,"f")),j(this,w,void 0,"f")),j(this,v,N(this,l,"f")?N(this,E,"f"):0,"f"),N(this,f,"m",z).call(this)},z=function(){for(;N(this,f,"m",P).call(this););},Z=async function(t){return new Promise(((e,n)=>{t.addEventListener("abort",(()=>{n(new F("The task was aborted."))}),{once:!0})}))},R=async function(t,e){return new Promise((n=>{const r=()=>{e&&!e()||(this.off(t,r),n())};this.on(t,r)}))}}}]);