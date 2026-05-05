function xf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cc={exports:{}},lo={},Ec={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),kf=Symbol.for("react.portal"),wf=Symbol.for("react.fragment"),jf=Symbol.for("react.strict_mode"),bf=Symbol.for("react.profiler"),Sf=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),Cf=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),zf=Symbol.for("react.memo"),_f=Symbol.for("react.lazy"),la=Symbol.iterator;function Tf(e){return e===null||typeof e!="object"?null:(e=la&&e[la]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_c=Object.assign,Tc={};function er(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||zc}er.prototype.isReactComponent={};er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=er.prototype;function ns(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||zc}var rs=ns.prototype=new Ic;rs.constructor=ns;_c(rs,er.prototype);rs.isPureReactComponent=!0;var oa=Array.isArray,Rc=Object.prototype.hasOwnProperty,ls={current:null},Dc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,n){var r,l={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Rc.call(t,r)&&!Dc.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var a=Array(c),u=0;u<c;u++)a[u]=arguments[u+2];l.children=a}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)l[r]===void 0&&(l[r]=c[r]);return{$$typeof:Hr,type:e,key:i,ref:s,props:l,_owner:ls.current}}function If(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ia=/\/+/g;function zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Rf(""+e.key):t.toString(36)}function vl(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hr:case kf:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+zo(s,0):r,oa(l)?(n="",e!=null&&(n=e.replace(ia,"$&/")+"/"),vl(l,t,n,"",function(u){return u})):l!=null&&(os(l)&&(l=If(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(ia,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",oa(e))for(var c=0;c<e.length;c++){i=e[c];var a=r+zo(i,c);s+=vl(i,t,n,a,l)}else if(a=Tf(e),typeof a=="function")for(e=a.call(e),c=0;!(i=e.next()).done;)i=i.value,a=r+zo(i,c++),s+=vl(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function qr(e,t,n){if(e==null)return e;var r=[],l=0;return vl(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Df(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},xl={transition:null},Pf={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:xl,ReactCurrentOwner:ls};function Mc(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:qr,forEach:function(e,t,n){qr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return qr(e,function(){t++}),t},toArray:function(e){return qr(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=er;J.Fragment=wf;J.Profiler=bf;J.PureComponent=ns;J.StrictMode=jf;J.Suspense=Ef;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pf;J.act=Mc;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_c({},e.props),l=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ls.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(a in t)Rc.call(t,a)&&!Dc.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&c!==void 0?c[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){c=Array(a);for(var u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:Hr,type:e.type,key:l,ref:i,props:r,_owner:s}};J.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sf,_context:e},e.Consumer=e};J.createElement=Pc;J.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Cf,render:e}};J.isValidElement=os;J.lazy=function(e){return{$$typeof:_f,_payload:{_status:-1,_result:e},_init:Df}};J.memo=function(e,t){return{$$typeof:zf,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=xl.transition;xl.transition={};try{e()}finally{xl.transition=t}};J.unstable_act=Mc;J.useCallback=function(e,t){return Pe.current.useCallback(e,t)};J.useContext=function(e){return Pe.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};J.useEffect=function(e,t){return Pe.current.useEffect(e,t)};J.useId=function(){return Pe.current.useId()};J.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Pe.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};J.useRef=function(e){return Pe.current.useRef(e)};J.useState=function(e){return Pe.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Pe.current.useTransition()};J.version="18.3.1";Ec.exports=J;var y=Ec.exports;const bt=yf(y),Mf=xf({__proto__:null,default:bt},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=y,Of=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),$f=Object.prototype.hasOwnProperty,Ff=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uf={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,n){var r,l={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)$f.call(t,r)&&!Uf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Of,type:e,key:i,ref:s,props:l,_owner:Ff.current}}lo.Fragment=Af;lo.jsx=Lc;lo.jsxs=Lc;Cc.exports=lo;var o=Cc.exports,ti={},Oc={exports:{}},Ke={},Ac={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,F){var V=M.length;M.push(F);e:for(;0<V;){var Y=V-1>>>1,q=M[Y];if(0<l(q,F))M[Y]=F,M[V]=q,V=Y;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var F=M[0],V=M.pop();if(V!==F){M[0]=V;e:for(var Y=0,q=M.length,z=q>>>1;Y<z;){var L=2*(Y+1)-1,X=M[L],Q=L+1,Te=M[Q];if(0>l(X,V))Q<q&&0>l(Te,X)?(M[Y]=Te,M[Q]=V,Y=Q):(M[Y]=X,M[L]=V,Y=L);else if(Q<q&&0>l(Te,V))M[Y]=Te,M[Q]=V,Y=Q;else break e}}return F}function l(M,F){var V=M.sortIndex-F.sortIndex;return V!==0?V:M.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var a=[],u=[],f=1,m=null,h=3,C=!1,w=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=M)r(u),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(u)}}function v(M){if(b=!1,g(M),!w)if(n(a)!==null)w=!0,lt(E);else{var F=n(u);F!==null&&Le(v,F.startTime-M)}}function E(M,F){w=!1,b&&(b=!1,p(D),D=-1),C=!0;var V=h;try{for(g(F),m=n(a);m!==null&&(!(m.expirationTime>F)||M&&!I());){var Y=m.callback;if(typeof Y=="function"){m.callback=null,h=m.priorityLevel;var q=Y(m.expirationTime<=F);F=e.unstable_now(),typeof q=="function"?m.callback=q:m===n(a)&&r(a),g(F)}else r(a);m=n(a)}if(m!==null)var z=!0;else{var L=n(u);L!==null&&Le(v,L.startTime-F),z=!1}return z}finally{m=null,h=V,C=!1}}var _=!1,j=null,D=-1,k=5,R=-1;function I(){return!(e.unstable_now()-R<k)}function G(){if(j!==null){var M=e.unstable_now();R=M;var F=!0;try{F=j(!0,M)}finally{F?H():(_=!1,j=null)}}else _=!1}var H;if(typeof d=="function")H=function(){d(G)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ft=ne.port2;ne.port1.onmessage=G,H=function(){ft.postMessage(null)}}else H=function(){S(G,0)};function lt(M){j=M,_||(_=!0,H())}function Le(M,F){D=S(function(){M(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){w||C||(w=!0,lt(E))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var V=h;h=F;try{return M()}finally{h=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,F){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var V=h;h=M;try{return F()}finally{h=V}},e.unstable_scheduleCallback=function(M,F,V){var Y=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Y+V:Y):V=Y,M){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=V+q,M={id:f++,callback:F,priorityLevel:M,startTime:V,expirationTime:q,sortIndex:-1},V>Y?(M.sortIndex=V,t(u,M),n(a)===null&&M===n(u)&&(b?(p(D),D=-1):b=!0,Le(v,V-Y))):(M.sortIndex=q,t(a,M),w||C||(w=!0,lt(E))),M},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(M){var F=h;return function(){var V=h;h=F;try{return M.apply(this,arguments)}finally{h=V}}}})($c);Ac.exports=$c;var Bf=Ac.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=y,Qe=Bf;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fc=new Set,Cr={};function xn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Fc.add(t[e])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sa={},aa={};function Hf(e){return ni.call(aa,e)?!0:ni.call(sa,e)?!1:Wf.test(e)?aa[e]=!0:(sa[e]=!0,!1)}function Qf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Kf(e,t,n,r){if(t===null||typeof t>"u"||Qf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,l,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,ss);Ne[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,ss);Ne[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,ss);Ne[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function as(e,t,n,r){var l=Ne.hasOwnProperty(t)?Ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Kf(t,n,l,r)&&(n=null),r||l===null?Hf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),En=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),cs=Symbol.for("react.strict_mode"),ri=Symbol.for("react.profiler"),Uc=Symbol.for("react.provider"),Bc=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),oi=Symbol.for("react.suspense_list"),ds=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Vc=Symbol.for("react.offscreen"),ca=Symbol.iterator;function rr(e){return e===null||typeof e!="object"?null:(e=ca&&e[ca]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,_o;function dr(e){if(_o===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_o=t&&t[1]||""}return`
`+_o+e}var To=!1;function Io(e,t){if(!e||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),i=r.stack.split(`
`),s=l.length-1,c=i.length-1;1<=s&&0<=c&&l[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(l[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||l[s]!==i[c]){var a=`
`+l[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=c);break}}}finally{To=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Jf(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Io(e.type,!1),e;case 11:return e=Io(e.type.render,!1),e;case 1:return e=Io(e.type,!0),e;default:return""}}function ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case En:return"Portal";case ri:return"Profiler";case cs:return"StrictMode";case li:return"Suspense";case oi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bc:return(e.displayName||"Context")+".Consumer";case Uc:return(e._context.displayName||"Context")+".Provider";case us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ds:return t=e.displayName||null,t!==null?t:ii(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return ii(e(t))}catch{}}return null}function Yf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ii(t);case 8:return t===cs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Xf(e){var t=Wc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tl(e){e._valueTracker||(e._valueTracker=Xf(e))}function Hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Il(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function si(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ua(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qc(e,t){t=t.checked,t!=null&&as(e,"checked",t,!1)}function ai(e,t){Qc(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&ci(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function da(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ci(e,t,n){(t!=="number"||Il(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function $n(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ui(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(fr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function Kc(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,Yc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gf=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Gf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function Xc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Xc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Zf=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fi(e,t){if(t){if(Zf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function pi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mi=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,Fn=null,Un=null;function ma(e){if(e=Jr(e)){if(typeof hi!="function")throw Error(T(280));var t=e.stateNode;t&&(t=co(t),hi(e.stateNode,e.type,t))}}function Zc(e){Fn?Un?Un.push(e):Un=[e]:Fn=e}function qc(){if(Fn){var e=Fn,t=Un;if(Un=Fn=null,ma(e),t)for(e=0;e<t.length;e++)ma(t[e])}}function eu(e,t){return e(t)}function tu(){}var Ro=!1;function nu(e,t,n){if(Ro)return e(t,n);Ro=!0;try{return eu(e,t,n)}finally{Ro=!1,(Fn!==null||Un!==null)&&(tu(),qc())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=co(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var gi=!1;if(Et)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){gi=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{gi=!1}function qf(e,t,n,r,l,i,s,c,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var vr=!1,Rl=null,Dl=!1,vi=null,ep={onError:function(e){vr=!0,Rl=e}};function tp(e,t,n,r,l,i,s,c,a){vr=!1,Rl=null,qf.apply(ep,arguments)}function np(e,t,n,r,l,i,s,c,a){if(tp.apply(this,arguments),vr){if(vr){var u=Rl;vr=!1,Rl=null}else throw Error(T(198));Dl||(Dl=!0,vi=u)}}function yn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ha(e){if(yn(e)!==e)throw Error(T(188))}function rp(e){var t=e.alternate;if(!t){if(t=yn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ha(l),e;if(i===r)return ha(l),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=l,r=i;else{for(var s=!1,c=l.child;c;){if(c===n){s=!0,n=l,r=i;break}if(c===r){s=!0,r=l,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,r=l;break}if(c===r){s=!0,r=i,n=l;break}c=c.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function lu(e){return e=rp(e),e!==null?ou(e):null}function ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ou(e);if(t!==null)return t;e=e.sibling}return null}var iu=Qe.unstable_scheduleCallback,ga=Qe.unstable_cancelCallback,lp=Qe.unstable_shouldYield,op=Qe.unstable_requestPaint,pe=Qe.unstable_now,ip=Qe.unstable_getCurrentPriorityLevel,ps=Qe.unstable_ImmediatePriority,su=Qe.unstable_UserBlockingPriority,Pl=Qe.unstable_NormalPriority,sp=Qe.unstable_LowPriority,au=Qe.unstable_IdlePriority,oo=null,xt=null;function ap(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:dp,cp=Math.log,up=Math.LN2;function dp(e){return e>>>=0,e===0?32:31-(cp(e)/up|0)|0}var rl=64,ll=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ml(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~l;c!==0?r=pr(c):(i&=s,i!==0&&(r=pr(i)))}else s=n&~l,s!==0?r=pr(s):i!==0&&(r=pr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),l=1<<n,r|=e[n],t&=~l;return r}function fp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ct(i),c=1<<s,a=l[s];a===-1?(!(c&n)||c&r)&&(l[s]=fp(c,t)):a<=t&&(e.expiredLanes|=c),i&=~c}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cu(){var e=rl;return rl<<=1,!(rl&4194240)&&(rl=64),e}function Do(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ct(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ms(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var te=0;function uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var du,hs,fu,pu,mu,yi=!1,ol=[],Vt=null,Wt=null,Ht=null,_r=new Map,Tr=new Map,Ot=[],hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":_r.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tr.delete(t.pointerId)}}function or(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Jr(t),t!==null&&hs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function gp(e,t,n,r,l){switch(t){case"focusin":return Vt=or(Vt,e,t,n,r,l),!0;case"dragenter":return Wt=or(Wt,e,t,n,r,l),!0;case"mouseover":return Ht=or(Ht,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return _r.set(i,or(_r.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Tr.set(i,or(Tr.get(i)||null,e,t,n,r,l)),!0}return!1}function hu(e){var t=sn(e.target);if(t!==null){var n=yn(t);if(n!==null){if(t=n.tag,t===13){if(t=ru(n),t!==null){e.blockedOn=t,mu(e.priority,function(){fu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ki(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mi=r,n.target.dispatchEvent(r),mi=null}else return t=Jr(n),t!==null&&hs(t),e.blockedOn=n,!1;t.shift()}return!0}function xa(e,t,n){yl(e)&&n.delete(t)}function vp(){yi=!1,Vt!==null&&yl(Vt)&&(Vt=null),Wt!==null&&yl(Wt)&&(Wt=null),Ht!==null&&yl(Ht)&&(Ht=null),_r.forEach(xa),Tr.forEach(xa)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,yi||(yi=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,vp)))}function Ir(e){function t(l){return ir(l,e)}if(0<ol.length){ir(ol[0],e);for(var n=1;n<ol.length;n++){var r=ol[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&ir(Vt,e),Wt!==null&&ir(Wt,e),Ht!==null&&ir(Ht,e),_r.forEach(t),Tr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)hu(n),n.blockedOn===null&&Ot.shift()}var Bn=It.ReactCurrentBatchConfig,Ll=!0;function xp(e,t,n,r){var l=te,i=Bn.transition;Bn.transition=null;try{te=1,gs(e,t,n,r)}finally{te=l,Bn.transition=i}}function yp(e,t,n,r){var l=te,i=Bn.transition;Bn.transition=null;try{te=4,gs(e,t,n,r)}finally{te=l,Bn.transition=i}}function gs(e,t,n,r){if(Ll){var l=ki(e,t,n,r);if(l===null)Vo(e,t,r,Ol,n),va(e,r);else if(gp(l,e,t,n,r))r.stopPropagation();else if(va(e,r),t&4&&-1<hp.indexOf(e)){for(;l!==null;){var i=Jr(l);if(i!==null&&du(i),i=ki(e,t,n,r),i===null&&Vo(e,t,r,Ol,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Ol=null;function ki(e,t,n,r){if(Ol=null,e=fs(r),e=sn(e),e!==null)if(t=yn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ol=e,null}function gu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ip()){case ps:return 1;case su:return 4;case Pl:case sp:return 16;case au:return 536870912;default:return 16}default:return 16}}var Ft=null,vs=null,kl=null;function vu(){if(kl)return kl;var e,t=vs,n=t.length,r,l="value"in Ft?Ft.value:Ft.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[i-r];r++);return kl=l.slice(e,1<r?1-r:void 0)}function wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function ya(){return!1}function Je(e){function t(n,r,l,i,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?il:ya,this.isPropagationStopped=ya,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),t}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=Je(tr),Kr=ce({},tr,{view:0,detail:0}),kp=Je(Kr),Po,Mo,sr,io=ce({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(Po=e.screenX-sr.screenX,Mo=e.screenY-sr.screenY):Mo=Po=0,sr=e),Po)},movementY:function(e){return"movementY"in e?e.movementY:Mo}}),ka=Je(io),wp=ce({},io,{dataTransfer:0}),jp=Je(wp),bp=ce({},Kr,{relatedTarget:0}),Lo=Je(bp),Sp=ce({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Np=Je(Sp),Cp=ce({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ep=Je(Cp),zp=ce({},tr,{data:0}),wa=Je(zp),_p={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ip={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ip[e])?!!t[e]:!1}function ys(){return Rp}var Dp=ce({},Kr,{key:function(e){if(e.key){var t=_p[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pp=Je(Dp),Mp=ce({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ja=Je(Mp),Lp=ce({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Op=Je(Lp),Ap=ce({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),$p=Je(Ap),Fp=ce({},io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Up=Je(Fp),Bp=[9,13,27,32],ks=Et&&"CompositionEvent"in window,xr=null;Et&&"documentMode"in document&&(xr=document.documentMode);var Vp=Et&&"TextEvent"in window&&!xr,xu=Et&&(!ks||xr&&8<xr&&11>=xr),ba=" ",Sa=!1;function yu(e,t){switch(e){case"keyup":return Bp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _n=!1;function Wp(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(Sa=!0,ba);case"textInput":return e=t.data,e===ba&&Sa?null:e;default:return null}}function Hp(e,t){if(_n)return e==="compositionend"||!ks&&yu(e,t)?(e=vu(),kl=vs=Ft=null,_n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xu&&t.locale!=="ko"?null:t.data;default:return null}}var Qp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qp[e.type]:t==="textarea"}function wu(e,t,n,r){Zc(r),t=Al(t,"onChange"),0<t.length&&(n=new xs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Rr=null;function Kp(e){Ru(e,0)}function so(e){var t=Rn(e);if(Hc(t))return e}function Jp(e,t){if(e==="change")return t}var ju=!1;if(Et){var Oo;if(Et){var Ao="oninput"in document;if(!Ao){var Ca=document.createElement("div");Ca.setAttribute("oninput","return;"),Ao=typeof Ca.oninput=="function"}Oo=Ao}else Oo=!1;ju=Oo&&(!document.documentMode||9<document.documentMode)}function Ea(){yr&&(yr.detachEvent("onpropertychange",bu),Rr=yr=null)}function bu(e){if(e.propertyName==="value"&&so(Rr)){var t=[];wu(t,Rr,e,fs(e)),nu(Kp,t)}}function Yp(e,t,n){e==="focusin"?(Ea(),yr=t,Rr=n,yr.attachEvent("onpropertychange",bu)):e==="focusout"&&Ea()}function Xp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return so(Rr)}function Gp(e,t){if(e==="click")return so(t)}function Zp(e,t){if(e==="input"||e==="change")return so(t)}function qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:qp;function Dr(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ni.call(t,l)||!dt(e[l],t[l]))return!1}return!0}function za(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _a(e,t){var n=za(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=za(n)}}function Su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nu(){for(var e=window,t=Il();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Il(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function em(e){var t=Nu(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Su(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=_a(n,i);var s=_a(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var tm=Et&&"documentMode"in document&&11>=document.documentMode,Tn=null,wi=null,kr=null,ji=!1;function Ta(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Tn==null||Tn!==Il(r)||(r=Tn,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Dr(kr,r)||(kr=r,r=Al(wi,"onSelect"),0<r.length&&(t=new xs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function sl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},$o={},Cu={};Et&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function ao(e){if($o[e])return $o[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cu)return $o[e]=t[n];return e}var Eu=ao("animationend"),zu=ao("animationiteration"),_u=ao("animationstart"),Tu=ao("transitionend"),Iu=new Map,Ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Iu.set(e,t),xn(t,[e])}for(var Fo=0;Fo<Ia.length;Fo++){var Uo=Ia[Fo],nm=Uo.toLowerCase(),rm=Uo[0].toUpperCase()+Uo.slice(1);en(nm,"on"+rm)}en(Eu,"onAnimationEnd");en(zu,"onAnimationIteration");en(_u,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Tu,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lm=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function Ra(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,np(r,t,void 0,e),e.currentTarget=null}function Ru(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],a=c.instance,u=c.currentTarget;if(c=c.listener,a!==i&&l.isPropagationStopped())break e;Ra(l,c,u),i=a}else for(s=0;s<r.length;s++){if(c=r[s],a=c.instance,u=c.currentTarget,c=c.listener,a!==i&&l.isPropagationStopped())break e;Ra(l,c,u),i=a}}}if(Dl)throw e=vi,Dl=!1,vi=null,e}function le(e,t){var n=t[Ei];n===void 0&&(n=t[Ei]=new Set);var r=e+"__bubble";n.has(r)||(Du(t,e,2,!1),n.add(r))}function Bo(e,t,n){var r=0;t&&(r|=4),Du(n,e,r,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[al]){e[al]=!0,Fc.forEach(function(n){n!=="selectionchange"&&(lm.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Bo("selectionchange",!1,t))}}function Du(e,t,n,r){switch(gu(t)){case 1:var l=xp;break;case 4:l=yp;break;default:l=gs}n=l.bind(null,t,n,e),l=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;s=s.return}for(;c!==null;){if(s=sn(c),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}c=c.parentNode}}r=r.return}nu(function(){var u=i,f=fs(n),m=[];e:{var h=Iu.get(e);if(h!==void 0){var C=xs,w=e;switch(e){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":C=Pp;break;case"focusin":w="focus",C=Lo;break;case"focusout":w="blur",C=Lo;break;case"beforeblur":case"afterblur":C=Lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=ka;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Op;break;case Eu:case zu:case _u:C=Np;break;case Tu:C=$p;break;case"scroll":C=kp;break;case"wheel":C=Up;break;case"copy":case"cut":case"paste":C=Ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ja}var b=(t&4)!==0,S=!b&&e==="scroll",p=b?h!==null?h+"Capture":null:h;b=[];for(var d=u,g;d!==null;){g=d;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=zr(d,p),v!=null&&b.push(Mr(d,v,g)))),S)break;d=d.return}0<b.length&&(h=new C(h,w,null,n,f),m.push({event:h,listeners:b}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",h&&n!==mi&&(w=n.relatedTarget||n.fromElement)&&(sn(w)||w[zt]))break e;if((C||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,C?(w=n.relatedTarget||n.toElement,C=u,w=w?sn(w):null,w!==null&&(S=yn(w),w!==S||w.tag!==5&&w.tag!==6)&&(w=null)):(C=null,w=u),C!==w)){if(b=ka,v="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(b=ja,v="onPointerLeave",p="onPointerEnter",d="pointer"),S=C==null?h:Rn(C),g=w==null?h:Rn(w),h=new b(v,d+"leave",C,n,f),h.target=S,h.relatedTarget=g,v=null,sn(f)===u&&(b=new b(p,d+"enter",w,n,f),b.target=g,b.relatedTarget=S,v=b),S=v,C&&w)t:{for(b=C,p=w,d=0,g=b;g;g=Sn(g))d++;for(g=0,v=p;v;v=Sn(v))g++;for(;0<d-g;)b=Sn(b),d--;for(;0<g-d;)p=Sn(p),g--;for(;d--;){if(b===p||p!==null&&b===p.alternate)break t;b=Sn(b),p=Sn(p)}b=null}else b=null;C!==null&&Da(m,h,C,b,!1),w!==null&&S!==null&&Da(m,S,w,b,!0)}}e:{if(h=u?Rn(u):window,C=h.nodeName&&h.nodeName.toLowerCase(),C==="select"||C==="input"&&h.type==="file")var E=Jp;else if(Na(h))if(ju)E=Zp;else{E=Xp;var _=Yp}else(C=h.nodeName)&&C.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Gp);if(E&&(E=E(e,u))){wu(m,E,n,f);break e}_&&_(e,h,u),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&ci(h,"number",h.value)}switch(_=u?Rn(u):window,e){case"focusin":(Na(_)||_.contentEditable==="true")&&(Tn=_,wi=u,kr=null);break;case"focusout":kr=wi=Tn=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,Ta(m,n,f);break;case"selectionchange":if(tm)break;case"keydown":case"keyup":Ta(m,n,f)}var j;if(ks)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else _n?yu(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(xu&&n.locale!=="ko"&&(_n||D!=="onCompositionStart"?D==="onCompositionEnd"&&_n&&(j=vu()):(Ft=f,vs="value"in Ft?Ft.value:Ft.textContent,_n=!0)),_=Al(u,D),0<_.length&&(D=new wa(D,e,null,n,f),m.push({event:D,listeners:_}),j?D.data=j:(j=ku(n),j!==null&&(D.data=j)))),(j=Vp?Wp(e,n):Hp(e,n))&&(u=Al(u,"onBeforeInput"),0<u.length&&(f=new wa("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=j))}Ru(m,t)})}function Mr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Al(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=zr(e,n),i!=null&&r.unshift(Mr(e,i,l)),i=zr(e,t),i!=null&&r.push(Mr(e,i,l))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Da(e,t,n,r,l){for(var i=t._reactName,s=[];n!==null&&n!==r;){var c=n,a=c.alternate,u=c.stateNode;if(a!==null&&a===r)break;c.tag===5&&u!==null&&(c=u,l?(a=zr(n,i),a!=null&&s.unshift(Mr(n,a,c))):l||(a=zr(n,i),a!=null&&s.push(Mr(n,a,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var om=/\r\n?/g,im=/\u0000|\uFFFD/g;function Pa(e){return(typeof e=="string"?e:""+e).replace(om,`
`).replace(im,"")}function cl(e,t,n){if(t=Pa(t),Pa(e)!==t&&n)throw Error(T(425))}function $l(){}var bi=null,Si=null;function Ni(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ci=typeof setTimeout=="function"?setTimeout:void 0,sm=typeof clearTimeout=="function"?clearTimeout:void 0,Ma=typeof Promise=="function"?Promise:void 0,am=typeof queueMicrotask=="function"?queueMicrotask:typeof Ma<"u"?function(e){return Ma.resolve(null).then(e).catch(cm)}:Ci;function cm(e){setTimeout(function(){throw e})}function Wo(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Ir(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function La(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var nr=Math.random().toString(36).slice(2),gt="__reactFiber$"+nr,Lr="__reactProps$"+nr,zt="__reactContainer$"+nr,Ei="__reactEvents$"+nr,um="__reactListeners$"+nr,dm="__reactHandles$"+nr;function sn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=La(e);e!==null;){if(n=e[gt])return n;e=La(e)}return t}e=n,n=e.parentNode}return null}function Jr(e){return e=e[gt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function co(e){return e[Lr]||null}var zi=[],Dn=-1;function tn(e){return{current:e}}function oe(e){0>Dn||(e.current=zi[Dn],zi[Dn]=null,Dn--)}function re(e,t){Dn++,zi[Dn]=e.current,e.current=t}var qt={},_e=tn(qt),$e=tn(!1),pn=qt;function Qn(e,t){var n=e.type.contextTypes;if(!n)return qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Fe(e){return e=e.childContextTypes,e!=null}function Fl(){oe($e),oe(_e)}function Oa(e,t,n){if(_e.current!==qt)throw Error(T(168));re(_e,t),re($e,n)}function Pu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(T(108,Yf(e)||"Unknown",l));return ce({},n,r)}function Ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qt,pn=_e.current,re(_e,e),re($e,$e.current),!0}function Aa(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Pu(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,oe($e),oe(_e),re(_e,e)):oe($e),re($e,n)}var jt=null,uo=!1,Ho=!1;function Mu(e){jt===null?jt=[e]:jt.push(e)}function fm(e){uo=!0,Mu(e)}function nn(){if(!Ho&&jt!==null){Ho=!0;var e=0,t=te;try{var n=jt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,uo=!1}catch(l){throw jt!==null&&(jt=jt.slice(e+1)),iu(ps,nn),l}finally{te=t,Ho=!1}}return null}var Pn=[],Mn=0,Bl=null,Vl=0,Ge=[],Ze=0,mn=null,St=1,Nt="";function ln(e,t){Pn[Mn++]=Vl,Pn[Mn++]=Bl,Bl=e,Vl=t}function Lu(e,t,n){Ge[Ze++]=St,Ge[Ze++]=Nt,Ge[Ze++]=mn,mn=e;var r=St;e=Nt;var l=32-ct(r)-1;r&=~(1<<l),n+=1;var i=32-ct(t)+l;if(30<i){var s=l-l%5;i=(r&(1<<s)-1).toString(32),r>>=s,l-=s,St=1<<32-ct(t)+l|n<<l|r,Nt=i+e}else St=1<<i|n<<l|r,Nt=e}function js(e){e.return!==null&&(ln(e,1),Lu(e,1,0))}function bs(e){for(;e===Bl;)Bl=Pn[--Mn],Pn[Mn]=null,Vl=Pn[--Mn],Pn[Mn]=null;for(;e===mn;)mn=Ge[--Ze],Ge[Ze]=null,Nt=Ge[--Ze],Ge[Ze]=null,St=Ge[--Ze],Ge[Ze]=null}var He=null,We=null,ie=!1,at=null;function Ou(e,t){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $a(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,We=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:St,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,We=null,!0):!1;default:return!1}}function _i(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ti(e){if(ie){var t=We;if(t){var n=t;if(!$a(e,t)){if(_i(e))throw Error(T(418));t=Qt(n.nextSibling);var r=He;t&&$a(e,t)?Ou(r,n):(e.flags=e.flags&-4097|2,ie=!1,He=e)}}else{if(_i(e))throw Error(T(418));e.flags=e.flags&-4097|2,ie=!1,He=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ul(e){if(e!==He)return!1;if(!ie)return Fa(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ni(e.type,e.memoizedProps)),t&&(t=We)){if(_i(e))throw Au(),Error(T(418));for(;t;)Ou(e,t),t=Qt(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=He?Qt(e.stateNode.nextSibling):null;return!0}function Au(){for(var e=We;e;)e=Qt(e.nextSibling)}function Kn(){We=He=null,ie=!1}function Ss(e){at===null?at=[e]:at.push(e)}var pm=It.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var c=l.refs;s===null?delete c[i]:c[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function dl(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ua(e){var t=e._init;return t(e._payload)}function $u(e){function t(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=Xt(p,d),p.index=0,p.sibling=null,p}function i(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function c(p,d,g,v){return d===null||d.tag!==6?(d=Zo(g,p.mode,v),d.return=p,d):(d=l(d,g),d.return=p,d)}function a(p,d,g,v){var E=g.type;return E===zn?f(p,d,g.props.children,v,g.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&Ua(E)===d.type)?(v=l(d,g.props),v.ref=ar(p,d,g),v.return=p,v):(v=zl(g.type,g.key,g.props,null,p.mode,v),v.ref=ar(p,d,g),v.return=p,v)}function u(p,d,g,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=qo(g,p.mode,v),d.return=p,d):(d=l(d,g.children||[]),d.return=p,d)}function f(p,d,g,v,E){return d===null||d.tag!==7?(d=dn(g,p.mode,v,E),d.return=p,d):(d=l(d,g),d.return=p,d)}function m(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Zo(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case el:return g=zl(d.type,d.key,d.props,null,p.mode,g),g.ref=ar(p,null,d),g.return=p,g;case En:return d=qo(d,p.mode,g),d.return=p,d;case Mt:var v=d._init;return m(p,v(d._payload),g)}if(fr(d)||rr(d))return d=dn(d,p.mode,g,null),d.return=p,d;dl(p,d)}return null}function h(p,d,g,v){var E=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:c(p,d,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case el:return g.key===E?a(p,d,g,v):null;case En:return g.key===E?u(p,d,g,v):null;case Mt:return E=g._init,h(p,d,E(g._payload),v)}if(fr(g)||rr(g))return E!==null?null:f(p,d,g,v,null);dl(p,g)}return null}function C(p,d,g,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,c(d,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return p=p.get(v.key===null?g:v.key)||null,a(d,p,v,E);case En:return p=p.get(v.key===null?g:v.key)||null,u(d,p,v,E);case Mt:var _=v._init;return C(p,d,g,_(v._payload),E)}if(fr(v)||rr(v))return p=p.get(g)||null,f(d,p,v,E,null);dl(d,v)}return null}function w(p,d,g,v){for(var E=null,_=null,j=d,D=d=0,k=null;j!==null&&D<g.length;D++){j.index>D?(k=j,j=null):k=j.sibling;var R=h(p,j,g[D],v);if(R===null){j===null&&(j=k);break}e&&j&&R.alternate===null&&t(p,j),d=i(R,d,D),_===null?E=R:_.sibling=R,_=R,j=k}if(D===g.length)return n(p,j),ie&&ln(p,D),E;if(j===null){for(;D<g.length;D++)j=m(p,g[D],v),j!==null&&(d=i(j,d,D),_===null?E=j:_.sibling=j,_=j);return ie&&ln(p,D),E}for(j=r(p,j);D<g.length;D++)k=C(j,p,D,g[D],v),k!==null&&(e&&k.alternate!==null&&j.delete(k.key===null?D:k.key),d=i(k,d,D),_===null?E=k:_.sibling=k,_=k);return e&&j.forEach(function(I){return t(p,I)}),ie&&ln(p,D),E}function b(p,d,g,v){var E=rr(g);if(typeof E!="function")throw Error(T(150));if(g=E.call(g),g==null)throw Error(T(151));for(var _=E=null,j=d,D=d=0,k=null,R=g.next();j!==null&&!R.done;D++,R=g.next()){j.index>D?(k=j,j=null):k=j.sibling;var I=h(p,j,R.value,v);if(I===null){j===null&&(j=k);break}e&&j&&I.alternate===null&&t(p,j),d=i(I,d,D),_===null?E=I:_.sibling=I,_=I,j=k}if(R.done)return n(p,j),ie&&ln(p,D),E;if(j===null){for(;!R.done;D++,R=g.next())R=m(p,R.value,v),R!==null&&(d=i(R,d,D),_===null?E=R:_.sibling=R,_=R);return ie&&ln(p,D),E}for(j=r(p,j);!R.done;D++,R=g.next())R=C(j,p,D,R.value,v),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?D:R.key),d=i(R,d,D),_===null?E=R:_.sibling=R,_=R);return e&&j.forEach(function(G){return t(p,G)}),ie&&ln(p,D),E}function S(p,d,g,v){if(typeof g=="object"&&g!==null&&g.type===zn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case el:e:{for(var E=g.key,_=d;_!==null;){if(_.key===E){if(E=g.type,E===zn){if(_.tag===7){n(p,_.sibling),d=l(_,g.props.children),d.return=p,p=d;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Mt&&Ua(E)===_.type){n(p,_.sibling),d=l(_,g.props),d.ref=ar(p,_,g),d.return=p,p=d;break e}n(p,_);break}else t(p,_);_=_.sibling}g.type===zn?(d=dn(g.props.children,p.mode,v,g.key),d.return=p,p=d):(v=zl(g.type,g.key,g.props,null,p.mode,v),v.ref=ar(p,d,g),v.return=p,p=v)}return s(p);case En:e:{for(_=g.key;d!==null;){if(d.key===_)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(p,d.sibling),d=l(d,g.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=qo(g,p.mode,v),d.return=p,p=d}return s(p);case Mt:return _=g._init,S(p,d,_(g._payload),v)}if(fr(g))return w(p,d,g,v);if(rr(g))return b(p,d,g,v);dl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,g),d.return=p,p=d):(n(p,d),d=Zo(g,p.mode,v),d.return=p,p=d),s(p)):n(p,d)}return S}var Jn=$u(!0),Fu=$u(!1),Wl=tn(null),Hl=null,Ln=null,Ns=null;function Cs(){Ns=Ln=Hl=null}function Es(e){var t=Wl.current;oe(Wl),e._currentValue=t}function Ii(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){Hl=e,Ns=Ln=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ns!==e)if(e={context:e,memoizedValue:t,next:null},Ln===null){if(Hl===null)throw Error(T(308));Ln=e,Hl.dependencies={lanes:0,firstContext:e}}else Ln=Ln.next=e;return t}var an=null;function zs(e){an===null?an=[e]:an.push(e)}function Uu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,zs(t)):(n.next=l.next,l.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,_t(e,n)}return l=r.interleaved,l===null?(t.next=t,zs(r)):(t.next=l.next,l.next=t),r.interleaved=t,_t(e,n)}function jl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ms(e,n)}}function Ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ql(e,t,n,r){var l=e.updateQueue;Lt=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var a=c,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var f=e.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==s&&(c===null?f.firstBaseUpdate=u:c.next=u,f.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;s=0,f=u=a=null,c=i;do{var h=c.lane,C=c.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:C,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,b=c;switch(h=t,C=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){m=w.call(C,m,h);break e}m=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,h=typeof w=="function"?w.call(C,m,h):w,h==null)break e;m=ce({},m,h);break e;case 2:Lt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[c]:h.push(c))}else C={eventTime:C,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(u=f=C,a=m):f=f.next=C,s|=h;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;h=c,c=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(f===null&&(a=m),l.baseState=a,l.firstBaseUpdate=u,l.lastBaseUpdate=f,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);gn|=s,e.lanes=s,e.memoizedState=m}}function Va(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(T(191,l));l.call(r)}}}var Yr={},yt=tn(Yr),Or=tn(Yr),Ar=tn(Yr);function cn(e){if(e===Yr)throw Error(T(174));return e}function Ts(e,t){switch(re(Ar,t),re(Or,e),re(yt,Yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}oe(yt),re(yt,t)}function Yn(){oe(yt),oe(Or),oe(Ar)}function Vu(e){cn(Ar.current);var t=cn(yt.current),n=di(t,e.type);t!==n&&(re(Or,e),re(yt,n))}function Is(e){Or.current===e&&(oe(yt),oe(Or))}var se=tn(0);function Kl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qo=[];function Rs(){for(var e=0;e<Qo.length;e++)Qo[e]._workInProgressVersionPrimary=null;Qo.length=0}var bl=It.ReactCurrentDispatcher,Ko=It.ReactCurrentBatchConfig,hn=0,ae=null,he=null,ye=null,Jl=!1,wr=!1,$r=0,mm=0;function Ce(){throw Error(T(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function Ps(e,t,n,r,l,i){if(hn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bl.current=e===null||e.memoizedState===null?xm:ym,e=n(r,l),wr){i=0;do{if(wr=!1,$r=0,25<=i)throw Error(T(301));i+=1,ye=he=null,t.updateQueue=null,bl.current=km,e=n(r,l)}while(wr)}if(bl.current=Yl,t=he!==null&&he.next!==null,hn=0,ye=he=ae=null,Jl=!1,t)throw Error(T(300));return e}function Ms(){var e=$r!==0;return $r=0,e}function ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ae.memoizedState=ye=e:ye=ye.next=e,ye}function rt(){if(he===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ye===null?ae.memoizedState:ye.next;if(t!==null)ye=t,he=e;else{if(e===null)throw Error(T(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?ae.memoizedState=ye=e:ye=ye.next=e}return ye}function Fr(e,t){return typeof t=="function"?t(e):t}function Jo(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=he,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var c=s=null,a=null,u=i;do{var f=u.lane;if((hn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(c=a=m,s=r):a=a.next=m,ae.lanes|=f,gn|=f}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=c,dt(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ae.lanes|=i,gn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=rt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);dt(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Wu(){}function Hu(e,t){var n=ae,r=rt(),l=t(),i=!dt(r.memoizedState,l);if(i&&(r.memoizedState=l,Ae=!0),r=r.queue,Ls(Ju.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Ur(9,Ku.bind(null,n,r,l,t),void 0,null),ke===null)throw Error(T(349));hn&30||Qu(n,t,l)}return l}function Qu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ku(e,t,n,r){t.value=n,t.getSnapshot=r,Yu(t)&&Xu(e)}function Ju(e,t,n){return n(function(){Yu(t)&&Xu(e)})}function Yu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Xu(e){var t=_t(e,1);t!==null&&ut(t,e,1,-1)}function Wa(e){var t=ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:e},t.queue=e,e=e.dispatch=vm.bind(null,ae,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gu(){return rt().memoizedState}function Sl(e,t,n,r){var l=ht();ae.flags|=e,l.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function fo(e,t,n,r){var l=rt();r=r===void 0?null:r;var i=void 0;if(he!==null){var s=he.memoizedState;if(i=s.destroy,r!==null&&Ds(r,s.deps)){l.memoizedState=Ur(t,n,i,r);return}}ae.flags|=e,l.memoizedState=Ur(1|t,n,i,r)}function Ha(e,t){return Sl(8390656,8,e,t)}function Ls(e,t){return fo(2048,8,e,t)}function Zu(e,t){return fo(4,2,e,t)}function qu(e,t){return fo(4,4,e,t)}function ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function td(e,t,n){return n=n!=null?n.concat([e]):null,fo(4,4,ed.bind(null,t,e),n)}function Os(){}function nd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ld(e,t,n){return hn&21?(dt(n,t)||(n=cu(),ae.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function hm(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Ko.transition;Ko.transition={};try{e(!1),t()}finally{te=n,Ko.transition=r}}function od(){return rt().memoizedState}function gm(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},id(e))sd(t,n);else if(n=Uu(e,t,n,r),n!==null){var l=De();ut(n,e,r,l),ad(n,t,r)}}function vm(e,t,n){var r=Yt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(id(e))sd(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,c=i(s,n);if(l.hasEagerState=!0,l.eagerState=c,dt(c,s)){var a=t.interleaved;a===null?(l.next=l,zs(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Uu(e,t,l,r),n!==null&&(l=De(),ut(n,e,r,l),ad(n,t,r))}}function id(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function sd(e,t){wr=Jl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ad(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ms(e,n)}}var Yl={readContext:nt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},xm={readContext:nt,useCallback:function(e,t){return ht().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Ha,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Sl(4194308,4,ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sl(4,2,e,t)},useMemo:function(e,t){var n=ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=gm.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=ht();return e={current:e},t.memoizedState=e},useState:Wa,useDebugValue:Os,useDeferredValue:function(e){return ht().memoizedState=e},useTransition:function(){var e=Wa(!1),t=e[0];return e=hm.bind(null,e[1]),ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,l=ht();if(ie){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ke===null)throw Error(T(349));hn&30||Qu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ha(Ju.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,Ku.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ht(),t=ke.identifierPrefix;if(ie){var n=Nt,r=St;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=mm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ym={readContext:nt,useCallback:nd,useContext:nt,useEffect:Ls,useImperativeHandle:td,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:rd,useReducer:Jo,useRef:Gu,useState:function(){return Jo(Fr)},useDebugValue:Os,useDeferredValue:function(e){var t=rt();return ld(t,he.memoizedState,e)},useTransition:function(){var e=Jo(Fr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Hu,useId:od,unstable_isNewReconciler:!1},km={readContext:nt,useCallback:nd,useContext:nt,useEffect:Ls,useImperativeHandle:td,useInsertionEffect:Zu,useLayoutEffect:qu,useMemo:rd,useReducer:Yo,useRef:Gu,useState:function(){return Yo(Fr)},useDebugValue:Os,useDeferredValue:function(e){var t=rt();return he===null?t.memoizedState=e:ld(t,he.memoizedState,e)},useTransition:function(){var e=Yo(Fr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:Wu,useSyncExternalStore:Hu,useId:od,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var po={isMounted:function(e){return(e=e._reactInternals)?yn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),l=Yt(e),i=Ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,l),t!==null&&(ut(t,e,l,r),jl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),l=Yt(e),i=Ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Kt(e,i,l),t!==null&&(ut(t,e,l,r),jl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=Yt(e),l=Ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=Kt(e,l,r),t!==null&&(ut(t,e,r,n),jl(t,e,r))}};function Qa(e,t,n,r,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,r)||!Dr(l,i):!0}function cd(e,t,n){var r=!1,l=qt,i=t.contextType;return typeof i=="object"&&i!==null?i=nt(i):(l=Fe(t)?pn:_e.current,r=t.contextTypes,i=(r=r!=null)?Qn(e,l):qt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=po,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ka(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&po.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},_s(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=nt(i):(i=Fe(t)?pn:_e.current,l.context=Qn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ri(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&po.enqueueReplaceState(l,l.state,null),Ql(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=Jf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Xo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var wm=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gl||(Gl=!0,Wi=r),Pi(e,t)},n}function dd(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Pi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pi(e,t),typeof r!="function"&&(Jt===null?Jt=new Set([this]):Jt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ja(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new wm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Mm.bind(null,e,t,n),t.then(e,e))}function Ya(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var jm=It.ReactCurrentOwner,Ae=!1;function Re(e,t,n,r){t.child=e===null?Fu(t,null,n,r):Jn(t,e.child,n,r)}function Ga(e,t,n,r,l){n=n.render;var i=t.ref;return Vn(t,l),r=Ps(e,t,n,r,i,l),n=Ms(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(ie&&n&&js(t),t.flags|=1,Re(e,t,r,l),t.child)}function Za(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Hs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,fd(e,t,i,r,l)):(e=zl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(s,r)&&e.ref===t.ref)return Tt(e,t,l)}return t.flags|=1,e=Xt(i,r),e.ref=t.ref,e.return=t,t.child=e}function fd(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Dr(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Tt(e,t,l)}return Mi(e,t,n,r,l)}function pd(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(An,Ve),Ve|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(An,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,re(An,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,re(An,Ve),Ve|=r;return Re(e,t,l,n),t.child}function md(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Mi(e,t,n,r,l){var i=Fe(n)?pn:_e.current;return i=Qn(t,i),Vn(t,l),n=Ps(e,t,n,r,i,l),r=Ms(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Tt(e,t,l)):(ie&&r&&js(t),t.flags|=1,Re(e,t,n,l),t.child)}function qa(e,t,n,r,l){if(Fe(n)){var i=!0;Ul(t)}else i=!1;if(Vn(t,l),t.stateNode===null)Nl(e,t),cd(t,n,r),Di(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Fe(n)?pn:_e.current,u=Qn(t,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||a!==u)&&Ka(t,s,r,u),Lt=!1;var h=t.memoizedState;s.state=h,Ql(t,r,s,l),a=t.memoizedState,c!==r||h!==a||$e.current||Lt?(typeof f=="function"&&(Ri(t,n,f,r),a=t.memoizedState),(c=Lt||Qa(t,n,c,r,h,a,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Bu(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:it(t.type,c),s.props=u,m=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Fe(n)?pn:_e.current,a=Qn(t,a));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==m||h!==a)&&Ka(t,s,r,a),Lt=!1,h=t.memoizedState,s.state=h,Ql(t,r,s,l);var w=t.memoizedState;c!==m||h!==w||$e.current||Lt?(typeof C=="function"&&(Ri(t,n,C,r),w=t.memoizedState),(u=Lt||Qa(t,n,u,r,h,w,a)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,i,l)}function Li(e,t,n,r,l,i){md(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Aa(t,n,!1),Tt(e,t,i);r=t.stateNode,jm.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Jn(t,e.child,null,i),t.child=Jn(t,null,c,i)):Re(e,t,c,i),t.memoizedState=r.state,l&&Aa(t,n,!0),t.child}function hd(e){var t=e.stateNode;t.pendingContext?Oa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(e,t.context,!1),Ts(e,t.containerInfo)}function ec(e,t,n,r,l){return Kn(),Ss(l),t.flags|=256,Re(e,t,n,r),t.child}var Oi={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function gd(e,t,n){var r=t.pendingProps,l=se.current,i=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),re(se,l&1),e===null)return Ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=go(s,r,0,null),e=dn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ai(n),t.memoizedState=Oi,e):As(t,s));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return bm(e,t,s,r,c,l,n);if(i){i=r.fallback,s=t.mode,l=e.child,c=l.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Xt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?i=Xt(c,i):(i=dn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ai(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Oi,r}return i=e.child,e=i.sibling,r=Xt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function As(e,t){return t=go({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fl(e,t,n,r){return r!==null&&Ss(r),Jn(t,e.child,null,n),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bm(e,t,n,r,l,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Xo(Error(T(422))),fl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=go({mode:"visible",children:r.children},l,0,null),i=dn(i,l,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Jn(t,e.child,null,s),t.child.memoizedState=Ai(s),t.memoizedState=Oi,i);if(!(t.mode&1))return fl(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(T(419)),r=Xo(i,r,void 0),fl(e,t,s,r)}if(c=(s&e.childLanes)!==0,Ae||c){if(r=ke,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,_t(e,l),ut(r,e,l,-1))}return Ws(),r=Xo(Error(T(421))),fl(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Lm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,We=Qt(l.nextSibling),He=t,ie=!0,at=null,e!==null&&(Ge[Ze++]=St,Ge[Ze++]=Nt,Ge[Ze++]=mn,St=e.id,Nt=e.overflow,mn=t),t=As(t,r.children),t.flags|=4096,t)}function tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ii(e.return,t,n)}function Go(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function vd(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,n,t);else if(e.tag===19)tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(se,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Kl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Go(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Kl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Go(t,!0,n,null,i);break;case"together":Go(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sm(e,t,n){switch(t.tag){case 3:hd(t),Kn();break;case 5:Vu(t);break;case 1:Fe(t.type)&&Ul(t);break;case 4:Ts(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;re(Wl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?gd(e,t,n):(re(se,se.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);re(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),re(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,pd(e,t,n)}return Tt(e,t,n)}var xd,$i,yd,kd;xd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$i=function(){};yd=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,cn(yt.current);var i=null;switch(n){case"input":l=si(e,l),r=si(e,r),i=[];break;case"select":l=ce({},l,{value:void 0}),r=ce({},r,{value:void 0}),i=[];break;case"textarea":l=ui(e,l),r=ui(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$l)}fi(n,r);var s;n=null;for(u in l)if(!r.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var c=l[u];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(c=l!=null?l[u]:void 0,r.hasOwnProperty(u)&&a!==c&&(a!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&c[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,c=c?c.__html:void 0,a!=null&&c!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&le("scroll",e),i||c===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function cr(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nm(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&Fl(),Ee(t),null;case 3:return r=t.stateNode,Yn(),oe($e),oe(_e),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ul(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(Ki(at),at=null))),$i(e,t),Ee(t),null;case 5:Is(t);var l=cn(Ar.current);if(n=t.type,e!==null&&t.stateNode!=null)yd(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return Ee(t),null}if(e=cn(yt.current),ul(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[gt]=t,r[Lr]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(l=0;l<mr.length;l++)le(mr[l],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":ua(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":fa(r,i),le("invalid",r)}fi(n,i),l=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&cl(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&cl(r.textContent,c,e),l=["children",""+c]):Cr.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&le("scroll",r)}switch(n){case"input":tl(r),da(r,i,!0);break;case"textarea":tl(r),pa(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$l)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[Lr]=r,xd(e,t,!1,!1),t.stateNode=e;e:{switch(s=pi(n,r),n){case"dialog":le("cancel",e),le("close",e),l=r;break;case"iframe":case"object":case"embed":le("load",e),l=r;break;case"video":case"audio":for(l=0;l<mr.length;l++)le(mr[l],e);l=r;break;case"source":le("error",e),l=r;break;case"img":case"image":case"link":le("error",e),le("load",e),l=r;break;case"details":le("toggle",e),l=r;break;case"input":ua(e,r),l=si(e,r),le("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ce({},r,{value:void 0}),le("invalid",e);break;case"textarea":fa(e,r),l=ui(e,r),le("invalid",e);break;default:l=r}fi(n,l),c=l;for(i in c)if(c.hasOwnProperty(i)){var a=c[i];i==="style"?Gc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Er(e,a):typeof a=="number"&&Er(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Cr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&le("scroll",e):a!=null&&as(e,i,a,s))}switch(n){case"input":tl(e),da(e,r,!1);break;case"textarea":tl(e),pa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$n(e,!!r.multiple,i,!1):r.defaultValue!=null&&$n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=cn(Ar.current),cn(yt.current),ul(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:cl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cl(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Ee(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&We!==null&&t.mode&1&&!(t.flags&128))Au(),Kn(),t.flags|=98560,i=!1;else if(i=ul(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[gt]=t}else Kn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else at!==null&&(Ki(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):Ws())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Yn(),$i(e,t),e===null&&Pr(t.stateNode.containerInfo),Ee(t),null;case 10:return Es(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&Fl(),Ee(t),null;case 19:if(oe(se),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)cr(i,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Kl(e),s!==null){for(t.flags|=128,cr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>Gn&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Kl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ie)return Ee(t),null}else 2*pe()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,cr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=se.current,re(se,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Vs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ve&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Cm(e,t){switch(bs(t),t.tag){case 1:return Fe(t.type)&&Fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),oe($e),oe(_e),Rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Is(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Kn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return Yn(),null;case 10:return Es(t.type._context),null;case 22:case 23:return Vs(),null;case 24:return null;default:return null}}var pl=!1,ze=!1,Em=typeof WeakSet=="function"?WeakSet:Set,A=null;function On(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){ue(e,t,r)}}var nc=!1;function zm(e,t){if(bi=Ll,e=Nu(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,c=-1,a=-1,u=0,f=0,m=e,h=null;t:for(;;){for(var C;m!==n||l!==0&&m.nodeType!==3||(c=s+l),m!==i||r!==0&&m.nodeType!==3||(a=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(C=m.firstChild)!==null;)h=m,m=C;for(;;){if(m===e)break t;if(h===n&&++u===l&&(c=s),h===i&&++f===r&&(a=s),(C=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=C}n=c===-1||a===-1?null:{start:c,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Si={focusedElem:e,selectionRange:n},Ll=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,S=w.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?b:it(t.type,b),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(v){ue(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return w=nc,nc=!1,w}function jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Fi(t,n,i)}l=l.next}while(l!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ui(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wd(e){var t=e.alternate;t!==null&&(e.alternate=null,wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Lr],delete t[Ei],delete t[um],delete t[dm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jd(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$l));else if(r!==4&&(e=e.child,e!==null))for(Bi(e,t,n),e=e.sibling;e!==null;)Bi(e,t,n),e=e.sibling}function Vi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Vi(e,t,n),e=e.sibling;e!==null;)Vi(e,t,n),e=e.sibling}var be=null,st=!1;function Dt(e,t,n){for(n=n.child;n!==null;)bd(e,t,n),n=n.sibling}function bd(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:ze||On(n,t);case 6:var r=be,l=st;be=null,Dt(e,t,n),be=r,st=l,be!==null&&(st?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(st?(e=be,n=n.stateNode,e.nodeType===8?Wo(e.parentNode,n):e.nodeType===1&&Wo(e,n),Ir(e)):Wo(be,n.stateNode));break;case 4:r=be,l=st,be=n.stateNode.containerInfo,st=!0,Dt(e,t,n),be=r,st=l;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Fi(n,t,s),l=l.next}while(l!==r)}Dt(e,t,n);break;case 1:if(!ze&&(On(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ue(n,t,c)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Dt(e,t,n),ze=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Em),t.forEach(function(r){var l=Om.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:be=c.stateNode,st=!1;break e;case 3:be=c.stateNode.containerInfo,st=!0;break e;case 4:be=c.stateNode.containerInfo,st=!0;break e}c=c.return}if(be===null)throw Error(T(160));bd(i,s,l),be=null,st=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(u){ue(l,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sd(t,e),t=t.sibling}function Sd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),pt(e),r&4){try{jr(3,e,e.return),mo(3,e)}catch(b){ue(e,e.return,b)}try{jr(5,e,e.return)}catch(b){ue(e,e.return,b)}}break;case 1:ot(t,e),pt(e),r&512&&n!==null&&On(n,n.return);break;case 5:if(ot(t,e),pt(e),r&512&&n!==null&&On(n,n.return),e.flags&32){var l=e.stateNode;try{Er(l,"")}catch(b){ue(e,e.return,b)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,c=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Qc(l,i),pi(c,s);var u=pi(c,i);for(s=0;s<a.length;s+=2){var f=a[s],m=a[s+1];f==="style"?Gc(l,m):f==="dangerouslySetInnerHTML"?Yc(l,m):f==="children"?Er(l,m):as(l,f,m,u)}switch(c){case"input":ai(l,i);break;case"textarea":Kc(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var C=i.value;C!=null?$n(l,!!i.multiple,C,!1):h!==!!i.multiple&&(i.defaultValue!=null?$n(l,!!i.multiple,i.defaultValue,!0):$n(l,!!i.multiple,i.multiple?[]:"",!1))}l[Lr]=i}catch(b){ue(e,e.return,b)}}break;case 6:if(ot(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(T(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(b){ue(e,e.return,b)}}break;case 3:if(ot(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(b){ue(e,e.return,b)}break;case 4:ot(t,e),pt(e);break;case 13:ot(t,e),pt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Us=pe())),r&4&&lc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(u=ze)||f,ot(t,e),ze=u):ot(t,e),pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(A=e,f=e.child;f!==null;){for(m=A=f;A!==null;){switch(h=A,C=h.child,h.tag){case 0:case 11:case 14:case 15:jr(4,h,h.return);break;case 1:On(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){ue(r,n,b)}}break;case 5:On(h,h.return);break;case 22:if(h.memoizedState!==null){ic(m);continue}}C!==null?(C.return=h,A=C):ic(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{l=m.stateNode,u?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=m.stateNode,a=m.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,c.style.display=Xc("display",s))}catch(b){ue(e,e.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){ue(e,e.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:ot(t,e),pt(e),r&4&&lc(e);break;case 21:break;default:ot(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jd(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Er(l,""),r.flags&=-33);var i=rc(e);Vi(e,i,l);break;case 3:case 4:var s=r.stateNode.containerInfo,c=rc(e);Bi(e,c,s);break;default:throw Error(T(161))}}catch(a){ue(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _m(e,t,n){A=e,Nd(e)}function Nd(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,i=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||pl;if(!s){var c=l.alternate,a=c!==null&&c.memoizedState!==null||ze;c=pl;var u=ze;if(pl=s,(ze=a)&&!u)for(A=l;A!==null;)s=A,a=s.child,s.tag===22&&s.memoizedState!==null?sc(l):a!==null?(a.return=s,A=a):sc(l);for(;i!==null;)A=i,Nd(i),i=i.sibling;A=l,pl=c,ze=u}oc(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,A=i):oc(e)}}function oc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Va(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Va(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ir(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}ze||t.flags&512&&Ui(t)}catch(h){ue(t,t.return,h)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function ic(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function sc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(a){ue(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ue(t,l,a)}}var i=t.return;try{Ui(t)}catch(a){ue(t,i,a)}break;case 5:var s=t.return;try{Ui(t)}catch(a){ue(t,s,a)}}}catch(a){ue(t,t.return,a)}if(t===e){A=null;break}var c=t.sibling;if(c!==null){c.return=t.return,A=c;break}A=t.return}}var Tm=Math.ceil,Xl=It.ReactCurrentDispatcher,$s=It.ReactCurrentOwner,tt=It.ReactCurrentBatchConfig,Z=0,ke=null,me=null,Se=0,Ve=0,An=tn(0),ge=0,Br=null,gn=0,ho=0,Fs=0,br=null,Oe=null,Us=0,Gn=1/0,wt=null,Gl=!1,Wi=null,Jt=null,ml=!1,Ut=null,Zl=0,Sr=0,Hi=null,Cl=-1,El=0;function De(){return Z&6?pe():Cl!==-1?Cl:Cl=pe()}function Yt(e){return e.mode&1?Z&2&&Se!==0?Se&-Se:pm.transition!==null?(El===0&&(El=cu()),El):(e=te,e!==0||(e=window.event,e=e===void 0?16:gu(e.type)),e):1}function ut(e,t,n,r){if(50<Sr)throw Sr=0,Hi=null,Error(T(185));Qr(e,n,r),(!(Z&2)||e!==ke)&&(e===ke&&(!(Z&2)&&(ho|=n),ge===4&&At(e,Se)),Ue(e,r),n===1&&Z===0&&!(t.mode&1)&&(Gn=pe()+500,uo&&nn()))}function Ue(e,t){var n=e.callbackNode;pp(e,t);var r=Ml(e,e===ke?Se:0);if(r===0)n!==null&&ga(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ga(n),t===1)e.tag===0?fm(ac.bind(null,e)):Mu(ac.bind(null,e)),am(function(){!(Z&6)&&nn()}),n=null;else{switch(uu(r)){case 1:n=ps;break;case 4:n=su;break;case 16:n=Pl;break;case 536870912:n=au;break;default:n=Pl}n=Dd(n,Cd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cd(e,t){if(Cl=-1,El=0,Z&6)throw Error(T(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Ml(e,e===ke?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ql(e,r);else{t=r;var l=Z;Z|=2;var i=zd();(ke!==e||Se!==t)&&(wt=null,Gn=pe()+500,un(e,t));do try{Dm();break}catch(c){Ed(e,c)}while(!0);Cs(),Xl.current=i,Z=l,me!==null?t=0:(ke=null,Se=0,t=ge)}if(t!==0){if(t===2&&(l=xi(e),l!==0&&(r=l,t=Qi(e,l))),t===1)throw n=Br,un(e,0),At(e,r),Ue(e,pe()),n;if(t===6)At(e,r);else{if(l=e.current.alternate,!(r&30)&&!Im(l)&&(t=ql(e,r),t===2&&(i=xi(e),i!==0&&(r=i,t=Qi(e,i))),t===1))throw n=Br,un(e,0),At(e,r),Ue(e,pe()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:on(e,Oe,wt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Us+500-pe(),10<t)){if(Ml(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ci(on.bind(null,e,Oe,wt),t);break}on(e,Oe,wt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-ct(r);i=1<<s,s=t[s],s>l&&(l=s),r&=~i}if(r=l,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tm(r/1960))-r,10<r){e.timeoutHandle=Ci(on.bind(null,e,Oe,wt),r);break}on(e,Oe,wt);break;case 5:on(e,Oe,wt);break;default:throw Error(T(329))}}}return Ue(e,pe()),e.callbackNode===n?Cd.bind(null,e):null}function Qi(e,t){var n=br;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=ql(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ki(t)),e}function Ki(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Im(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!dt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Fs,t&=~ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function ac(e){if(Z&6)throw Error(T(327));Wn();var t=Ml(e,0);if(!(t&1))return Ue(e,pe()),null;var n=ql(e,t);if(e.tag!==0&&n===2){var r=xi(e);r!==0&&(t=r,n=Qi(e,r))}if(n===1)throw n=Br,un(e,0),At(e,t),Ue(e,pe()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,on(e,Oe,wt),Ue(e,pe()),null}function Bs(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Gn=pe()+500,uo&&nn())}}function vn(e){Ut!==null&&Ut.tag===0&&!(Z&6)&&Wn();var t=Z;Z|=1;var n=tt.transition,r=te;try{if(tt.transition=null,te=1,e)return e()}finally{te=r,tt.transition=n,Z=t,!(Z&6)&&nn()}}function Vs(){Ve=An.current,oe(An)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,sm(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:Yn(),oe($e),oe(_e),Rs();break;case 5:Is(r);break;case 4:Yn();break;case 13:oe(se);break;case 19:oe(se);break;case 10:Es(r.type._context);break;case 22:case 23:Vs()}n=n.return}if(ke=e,me=e=Xt(e.current,null),Se=Ve=t,ge=0,Br=null,Fs=ho=gn=0,Oe=br=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=l,r.next=s}n.pending=r}an=null}return e}function Ed(e,t){do{var n=me;try{if(Cs(),bl.current=Yl,Jl){for(var r=ae.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jl=!1}if(hn=0,ye=he=ae=null,wr=!1,$r=0,$s.current=null,n===null||n.return===null){ge=1,Br=t,me=null;break}e:{var i=e,s=n.return,c=n,a=t;if(t=Se,c.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=c,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var C=Ya(s);if(C!==null){C.flags&=-257,Xa(C,s,c,i,t),C.mode&1&&Ja(i,u,t),t=C,a=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(a),t.updateQueue=b}else w.add(a);break e}else{if(!(t&1)){Ja(i,u,t),Ws();break e}a=Error(T(426))}}else if(ie&&c.mode&1){var S=Ya(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Xa(S,s,c,i,t),Ss(Xn(a,c));break e}}i=a=Xn(a,c),ge!==4&&(ge=2),br===null?br=[i]:br.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=ud(i,a,t);Ba(i,p);break e;case 1:c=a;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Jt===null||!Jt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=dd(i,c,t);Ba(i,v);break e}}i=i.return}while(i!==null)}Td(n)}catch(E){t=E,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function zd(){var e=Xl.current;return Xl.current=Yl,e===null?Yl:e}function Ws(){(ge===0||ge===3||ge===2)&&(ge=4),ke===null||!(gn&268435455)&&!(ho&268435455)||At(ke,Se)}function ql(e,t){var n=Z;Z|=2;var r=zd();(ke!==e||Se!==t)&&(wt=null,un(e,t));do try{Rm();break}catch(l){Ed(e,l)}while(!0);if(Cs(),Z=n,Xl.current=r,me!==null)throw Error(T(261));return ke=null,Se=0,ge}function Rm(){for(;me!==null;)_d(me)}function Dm(){for(;me!==null&&!lp();)_d(me)}function _d(e){var t=Rd(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?Td(e):me=t,$s.current=null}function Td(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Cm(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,me=null;return}}else if(n=Nm(n,t,Ve),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ge===0&&(ge=5)}function on(e,t,n){var r=te,l=tt.transition;try{tt.transition=null,te=1,Pm(e,t,n,r)}finally{tt.transition=l,te=r}return null}function Pm(e,t,n,r){do Wn();while(Ut!==null);if(Z&6)throw Error(T(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(mp(e,i),e===ke&&(me=ke=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,Dd(Pl,function(){return Wn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tt.transition,tt.transition=null;var s=te;te=1;var c=Z;Z|=4,$s.current=null,zm(e,n),Sd(n,e),em(Si),Ll=!!bi,Si=bi=null,e.current=n,_m(n),op(),Z=c,te=s,tt.transition=i}else e.current=n;if(ml&&(ml=!1,Ut=e,Zl=l),i=e.pendingLanes,i===0&&(Jt=null),ap(n.stateNode),Ue(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Gl)throw Gl=!1,e=Wi,Wi=null,e;return Zl&1&&e.tag!==0&&Wn(),i=e.pendingLanes,i&1?e===Hi?Sr++:(Sr=0,Hi=e):Sr=0,nn(),null}function Wn(){if(Ut!==null){var e=uu(Zl),t=tt.transition,n=te;try{if(tt.transition=null,te=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,Zl=0,Z&6)throw Error(T(331));var l=Z;for(Z|=4,A=e.current;A!==null;){var i=A,s=i.child;if(A.flags&16){var c=i.deletions;if(c!==null){for(var a=0;a<c.length;a++){var u=c[a];for(A=u;A!==null;){var f=A;switch(f.tag){case 0:case 11:case 15:jr(8,f,i)}var m=f.child;if(m!==null)m.return=f,A=m;else for(;A!==null;){f=A;var h=f.sibling,C=f.return;if(wd(f),f===u){A=null;break}if(h!==null){h.return=C,A=h;break}A=C}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var S=b.sibling;b.sibling=null,b=S}while(b!==null)}}A=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,A=s;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:jr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,A=p;break e}A=i.return}}var d=e.current;for(A=d;A!==null;){s=A;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,A=g;else e:for(s=d;A!==null;){if(c=A,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:mo(9,c)}}catch(E){ue(c,c.return,E)}if(c===s){A=null;break e}var v=c.sibling;if(v!==null){v.return=c.return,A=v;break e}A=c.return}}if(Z=l,nn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{te=n,tt.transition=t}}return!1}function cc(e,t,n){t=Xn(n,t),t=ud(e,t,1),e=Kt(e,t,1),t=De(),e!==null&&(Qr(e,1,t),Ue(e,t))}function ue(e,t,n){if(e.tag===3)cc(e,e,n);else for(;t!==null;){if(t.tag===3){cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jt===null||!Jt.has(r))){e=Xn(n,e),e=dd(t,e,1),t=Kt(t,e,1),e=De(),t!==null&&(Qr(t,1,e),Ue(t,e));break}}t=t.return}}function Mm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>pe()-Us?un(e,0):Fs|=n),Ue(e,t)}function Id(e,t){t===0&&(e.mode&1?(t=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):t=1);var n=De();e=_t(e,t),e!==null&&(Qr(e,t,n),Ue(e,n))}function Lm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Id(e,n)}function Om(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Id(e,n)}var Rd;Rd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,Sm(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,ie&&t.flags&1048576&&Lu(t,Vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nl(e,t),e=t.pendingProps;var l=Qn(t,_e.current);Vn(t,n),l=Ps(null,t,r,e,l,n);var i=Ms();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,Ul(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,_s(t),l.updater=po,t.stateNode=l,l._reactInternals=t,Di(t,r,e,n),t=Li(null,t,r,!0,i,n)):(t.tag=0,ie&&i&&js(t),Re(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=$m(r),e=it(r,e),l){case 0:t=Mi(null,t,r,e,n);break e;case 1:t=qa(null,t,r,e,n);break e;case 11:t=Ga(null,t,r,e,n);break e;case 14:t=Za(null,t,r,it(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),Mi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),qa(e,t,r,l,n);case 3:e:{if(hd(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Bu(e,t),Ql(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Xn(Error(T(423)),t),t=ec(e,t,r,n,l);break e}else if(r!==l){l=Xn(Error(T(424)),t),t=ec(e,t,r,n,l);break e}else for(We=Qt(t.stateNode.containerInfo.firstChild),He=t,ie=!0,at=null,n=Fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kn(),r===l){t=Tt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return Vu(t),e===null&&Ti(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,s=l.children,Ni(r,l)?s=null:i!==null&&Ni(r,i)&&(t.flags|=32),md(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&Ti(t),null;case 13:return gd(e,t,n);case 4:return Ts(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),Ga(e,t,r,l,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,s=l.value,re(Wl,r._currentValue),r._currentValue=s,i!==null)if(dt(i.value,s)){if(i.children===l.children&&!$e.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var a=c.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Ct(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ii(i.return,n,t),c.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(T(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ii(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Re(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Vn(t,n),l=nt(l),r=r(l),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,l=it(r,t.pendingProps),l=it(r.type,l),Za(e,t,r,l,n);case 15:return fd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:it(r,l),Nl(e,t),t.tag=1,Fe(r)?(e=!0,Ul(t)):e=!1,Vn(t,n),cd(t,r,l),Di(t,r,l,n),Li(null,t,r,!0,e,n);case 19:return vd(e,t,n);case 22:return pd(e,t,n)}throw Error(T(156,t.tag))};function Dd(e,t){return iu(e,t)}function Am(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,n,r){return new Am(e,t,n,r)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $m(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===ds)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=et(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,r,l,i){var s=2;if(r=e,typeof e=="function")Hs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zn:return dn(n.children,l,i,t);case cs:s=8,l|=8;break;case ri:return e=et(12,n,t,l|2),e.elementType=ri,e.lanes=i,e;case li:return e=et(13,n,t,l),e.elementType=li,e.lanes=i,e;case oi:return e=et(19,n,t,l),e.elementType=oi,e.lanes=i,e;case Vc:return go(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uc:s=10;break e;case Bc:s=9;break e;case us:s=11;break e;case ds:s=14;break e;case Mt:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=et(s,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function dn(e,t,n,r){return e=et(7,e,r,t),e.lanes=n,e}function go(e,t,n,r){return e=et(22,e,r,t),e.elementType=Vc,e.lanes=n,e.stateNode={isHidden:!1},e}function Zo(e,t,n){return e=et(6,e,null,t),e.lanes=n,e}function qo(e,t,n){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Do(0),this.expirationTimes=Do(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,l,i,s,c,a){return e=new Fm(e,t,n,c,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_s(i),e}function Um(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pd(e){if(!e)return qt;e=e._reactInternals;e:{if(yn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Fe(n))return Pu(e,n,t)}return t}function Md(e,t,n,r,l,i,s,c,a){return e=Qs(n,r,!0,e,l,i,s,c,a),e.context=Pd(null),n=e.current,r=De(),l=Yt(n),i=Ct(r,l),i.callback=t??null,Kt(n,i,l),e.current.lanes=l,Qr(e,l,r),Ue(e,r),e}function vo(e,t,n,r){var l=t.current,i=De(),s=Yt(l);return n=Pd(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(l,t,s),e!==null&&(ut(e,l,s,i),jl(e,l,s)),s}function eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ks(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function Bm(){return null}var Ld=typeof reportError=="function"?reportError:function(e){console.error(e)};function Js(e){this._internalRoot=e}xo.prototype.render=Js.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));vo(e,t,null,null)};xo.prototype.unmount=Js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){vo(null,e,null,null)}),t[zt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=pu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&hu(e)}};function Ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function dc(){}function Vm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var u=eo(s);i.call(u)}}var s=Md(t,r,e,0,null,!1,!1,"",dc);return e._reactRootContainer=s,e[zt]=s.current,Pr(e.nodeType===8?e.parentNode:e),vn(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var u=eo(a);c.call(u)}}var a=Qs(e,0,!1,null,null,!1,!1,"",dc);return e._reactRootContainer=a,e[zt]=a.current,Pr(e.nodeType===8?e.parentNode:e),vn(function(){vo(t,a,n,r)}),a}function ko(e,t,n,r,l){var i=n._reactRootContainer;if(i){var s=i;if(typeof l=="function"){var c=l;l=function(){var a=eo(s);c.call(a)}}vo(t,s,e,l)}else s=Vm(n,t,e,l,r);return eo(s)}du=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(ms(t,n|1),Ue(t,pe()),!(Z&6)&&(Gn=pe()+500,nn()))}break;case 13:vn(function(){var r=_t(e,1);if(r!==null){var l=De();ut(r,e,1,l)}}),Ks(e,1)}};hs=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=De();ut(t,e,134217728,n)}Ks(e,134217728)}};fu=function(e){if(e.tag===13){var t=Yt(e),n=_t(e,t);if(n!==null){var r=De();ut(n,e,t,r)}Ks(e,t)}};pu=function(){return te};mu=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};hi=function(e,t,n){switch(t){case"input":if(ai(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=co(r);if(!l)throw Error(T(90));Hc(r),ai(r,l)}}}break;case"textarea":Kc(e,n);break;case"select":t=n.value,t!=null&&$n(e,!!n.multiple,t,!1)}};eu=Bs;tu=vn;var Wm={usingClientEntryPoint:!1,Events:[Jr,Rn,co,Zc,qc,Bs]},ur={findFiberByHostInstance:sn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Hm={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lu(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Bm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{oo=hl.inject(Hm),xt=hl}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wm;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ys(t))throw Error(T(200));return Um(e,t,null,n)};Ke.createRoot=function(e,t){if(!Ys(e))throw Error(T(299));var n=!1,r="",l=Ld;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,l),e[zt]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Js(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=lu(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return vn(e)};Ke.hydrate=function(e,t,n){if(!yo(t))throw Error(T(200));return ko(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!Ys(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",s=Ld;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Md(t,null,e,1,n??null,l,!1,i,s),e[zt]=t.current,Pr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xo(t)};Ke.render=function(e,t,n){if(!yo(t))throw Error(T(200));return ko(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!yo(e))throw Error(T(40));return e._reactRootContainer?(vn(function(){ko(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Bs;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yo(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return ko(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Od(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Od)}catch(e){console.error(e)}}Od(),Oc.exports=Ke;var Qm=Oc.exports,fc=Qm;ti.createRoot=fc.createRoot,ti.hydrateRoot=fc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const pc="popstate";function Km(e){e===void 0&&(e={});function t(l,i){let{pathname:s="/",search:c="",hash:a=""}=kn(l.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Ji("",{pathname:s,search:c,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let s=l.document.querySelector("base"),c="";if(s&&s.getAttribute("href")){let a=l.location.href,u=a.indexOf("#");c=u===-1?a:a.slice(0,u)}return c+"#"+(typeof i=="string"?i:to(i))}function r(l,i){wo(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Ym(t,n,r,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Jm(){return Math.random().toString(36).substr(2,8)}function mc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ji(e,t,n,r){return n===void 0&&(n=null),Vr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?kn(t):t,{state:n,key:t&&t.key||r||Jm()})}function to(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ym(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,s=l.history,c=Bt.Pop,a=null,u=f();u==null&&(u=0,s.replaceState(Vr({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function m(){c=Bt.Pop;let S=f(),p=S==null?null:S-u;u=S,a&&a({action:c,location:b.location,delta:p})}function h(S,p){c=Bt.Push;let d=Ji(b.location,S,p);n&&n(d,S),u=f()+1;let g=mc(d,u),v=b.createHref(d);try{s.pushState(g,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;l.location.assign(v)}i&&a&&a({action:c,location:b.location,delta:1})}function C(S,p){c=Bt.Replace;let d=Ji(b.location,S,p);n&&n(d,S),u=f();let g=mc(d,u),v=b.createHref(d);s.replaceState(g,"",v),i&&a&&a({action:c,location:b.location,delta:0})}function w(S){let p=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof S=="string"?S:to(S);return d=d.replace(/ $/,"%20"),fe(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let b={get action(){return c},get location(){return e(l,s)},listen(S){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(pc,m),a=S,()=>{l.removeEventListener(pc,m),a=null}},createHref(S){return t(l,S)},createURL:w,encodeLocation(S){let p=w(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:C,go(S){return s.go(S)}};return b}var hc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hc||(hc={}));function Xm(e,t,n){return n===void 0&&(n="/"),Gm(e,t,n)}function Gm(e,t,n,r){let l=typeof t=="string"?kn(t):t,i=Zn(l.pathname||"/",n);if(i==null)return null;let s=Ad(e);Zm(s);let c=null;for(let a=0;c==null&&a<s.length;++a){let u=ch(i);c=sh(s[a],u)}return c}function Ad(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,s,c)=>{let a={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};a.relativePath.startsWith("/")&&(fe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Gt([r,a.relativePath]),f=n.concat(a);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ad(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:oh(u,i.index),routesMeta:f})};return e.forEach((i,s)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))l(i,s);else for(let a of $d(i.path))l(i,s,a)}),t}function $d(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let s=$d(r.join("/")),c=[];return c.push(...s.map(a=>a===""?i:[i,a].join("/"))),l&&c.push(...s),c.map(a=>e.startsWith("/")&&a===""?"/":a)}function Zm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ih(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const qm=/^:[\w-]+$/,eh=3,th=2,nh=1,rh=10,lh=-2,gc=e=>e==="*";function oh(e,t){let n=e.split("/"),r=n.length;return n.some(gc)&&(r+=lh),t&&(r+=th),n.filter(l=>!gc(l)).reduce((l,i)=>l+(qm.test(i)?eh:i===""?nh:rh),r)}function ih(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function sh(e,t,n){let{routesMeta:r}=e,l={},i="/",s=[];for(let c=0;c<r.length;++c){let a=r[c],u=c===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=Yi({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},f),h=a.route;if(!m)return null;Object.assign(l,m.params),s.push({params:l,pathname:Gt([i,m.pathname]),pathnameBase:mh(Gt([i,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(i=Gt([i,m.pathnameBase]))}return s}function Yi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ah(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],s=i.replace(/(.)\/+$/,"$1"),c=l.slice(1);return{params:r.reduce((u,f,m)=>{let{paramName:h,isOptional:C}=f;if(h==="*"){let b=c[m]||"";s=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const w=c[m];return C&&!w?u[h]=void 0:u[h]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function ah(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,a)=>(r.push({paramName:c,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function ch(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Zn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dh=e=>uh.test(e);function fh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?kn(e):e,i;if(n)if(dh(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),wo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=vc(n.substring(1),"/"):i=vc(n,t)}else i=t;return{pathname:i,search:hh(r),hash:gh(l)}}function vc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function ei(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ph(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fd(e,t){let n=ph(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ud(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=kn(e):(l=Vr({},e),fe(!l.pathname||!l.pathname.includes("?"),ei("?","pathname","search",l)),fe(!l.pathname||!l.pathname.includes("#"),ei("#","pathname","hash",l)),fe(!l.search||!l.search.includes("#"),ei("#","search","hash",l)));let i=e===""||l.pathname==="",s=i?"/":l.pathname,c;if(s==null)c=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),m-=1;l.pathname=h.join("/")}c=m>=0?t[m]:"/"}let a=fh(l,c),u=s&&s!=="/"&&s.endsWith("/"),f=(i||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const Gt=e=>e.join("/").replace(/\/\/+/g,"/"),mh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),hh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bd=["post","put","patch","delete"];new Set(Bd);const xh=["get",...Bd];new Set(xh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wr(){return Wr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wr.apply(this,arguments)}const jo=y.createContext(null),Vd=y.createContext(null),rn=y.createContext(null),bo=y.createContext(null),wn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Wd=y.createContext(null);function yh(e,t){let{relative:n}=t===void 0?{}:t;Xr()||fe(!1);let{basename:r,navigator:l}=y.useContext(rn),{hash:i,pathname:s,search:c}=So(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Gt([r,s])),l.createHref({pathname:a,search:c,hash:i})}function Xr(){return y.useContext(bo)!=null}function Gr(){return Xr()||fe(!1),y.useContext(bo).location}function Hd(e){y.useContext(rn).static||y.useLayoutEffect(e)}function Qd(){let{isDataRoute:e}=y.useContext(wn);return e?Rh():kh()}function kh(){Xr()||fe(!1);let e=y.useContext(jo),{basename:t,future:n,navigator:r}=y.useContext(rn),{matches:l}=y.useContext(wn),{pathname:i}=Gr(),s=JSON.stringify(Fd(l,n.v7_relativeSplatPath)),c=y.useRef(!1);return Hd(()=>{c.current=!0}),y.useCallback(function(u,f){if(f===void 0&&(f={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let m=Ud(u,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Gt([t,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[t,r,s,i,e])}function So(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=y.useContext(rn),{matches:l}=y.useContext(wn),{pathname:i}=Gr(),s=JSON.stringify(Fd(l,r.v7_relativeSplatPath));return y.useMemo(()=>Ud(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function wh(e,t){return jh(e,t)}function jh(e,t,n,r){Xr()||fe(!1);let{navigator:l}=y.useContext(rn),{matches:i}=y.useContext(wn),s=i[i.length-1],c=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Gr(),f;if(t){var m;let S=typeof t=="string"?kn(t):t;a==="/"||(m=S.pathname)!=null&&m.startsWith(a)||fe(!1),f=S}else f=u;let h=f.pathname||"/",C=h;if(a!=="/"){let S=a.replace(/^\//,"").split("/");C="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=Xm(e,{pathname:C}),b=Eh(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},c,S.params),pathname:Gt([a,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:Gt([a,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&b?y.createElement(bo.Provider,{value:{location:Wr({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Bt.Pop}},b):b}function bh(){let e=Ih(),t=vh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:l},n):null,null)}const Sh=y.createElement(bh,null);class Nh extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(wn.Provider,{value:this.props.routeContext},y.createElement(Wd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ch(e){let{routeContext:t,match:n,children:r}=e,l=y.useContext(jo);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(wn.Provider,{value:t},r)}function Eh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(l=n)==null?void 0:l.errors;if(c!=null){let f=s.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);f>=0||fe(!1),s=s.slice(0,Math.min(s.length,f+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=f),m.route.id){let{loaderData:h,errors:C}=n,w=m.route.loader&&h[m.route.id]===void 0&&(!C||C[m.route.id]===void 0);if(m.route.lazy||w){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,m,h)=>{let C,w=!1,b=null,S=null;n&&(C=c&&m.route.id?c[m.route.id]:void 0,b=m.route.errorElement||Sh,a&&(u<0&&h===0?(Dh("route-fallback"),w=!0,S=null):u===h&&(w=!0,S=m.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,h+1)),d=()=>{let g;return C?g=b:w?g=S:m.route.Component?g=y.createElement(m.route.Component,null):m.route.element?g=m.route.element:g=f,y.createElement(Ch,{match:m,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:g})};return n&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?y.createElement(Nh,{location:n.location,revalidation:n.revalidation,component:b,error:C,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var Kd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kd||{}),Jd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Jd||{});function zh(e){let t=y.useContext(jo);return t||fe(!1),t}function _h(e){let t=y.useContext(Vd);return t||fe(!1),t}function Th(e){let t=y.useContext(wn);return t||fe(!1),t}function Yd(e){let t=Th(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Ih(){var e;let t=y.useContext(Wd),n=_h(),r=Yd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Rh(){let{router:e}=zh(Kd.UseNavigateStable),t=Yd(Jd.UseNavigateStable),n=y.useRef(!1);return Hd(()=>{n.current=!0}),y.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Wr({fromRouteId:t},i)))},[e,t])}const xc={};function Dh(e,t,n){xc[e]||(xc[e]=!0)}function Ph(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Nn(e){fe(!1)}function Mh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Bt.Pop,navigator:i,static:s=!1,future:c}=e;Xr()&&fe(!1);let a=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:i,static:s,future:Wr({v7_relativeSplatPath:!1},c)}),[a,c,i,s]);typeof r=="string"&&(r=kn(r));let{pathname:f="/",search:m="",hash:h="",state:C=null,key:w="default"}=r,b=y.useMemo(()=>{let S=Zn(f,a);return S==null?null:{location:{pathname:S,search:m,hash:h,state:C,key:w},navigationType:l}},[a,f,m,h,C,w,l]);return b==null?null:y.createElement(rn.Provider,{value:u},y.createElement(bo.Provider,{children:n,value:b}))}function Lh(e){let{children:t,location:n}=e;return wh(Xi(t),n)}new Promise(()=>{});function Xi(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(r,l)=>{if(!y.isValidElement(r))return;let i=[...t,l];if(r.type===y.Fragment){n.push.apply(n,Xi(r.props.children,i));return}r.type!==Nn&&fe(!1),!r.props.index||!r.props.children||fe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Xi(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},no.apply(this,arguments)}function Xd(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,i;for(i=0;i<r.length;i++)l=r[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Oh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ah(e,t){return e.button===0&&(!t||t==="_self")&&!Oh(e)}const $h=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Uh="6";try{window.__reactRouterVersion=Uh}catch{}const Bh=y.createContext({isTransitioning:!1}),Vh="startTransition",yc=Mf[Vh];function Wh(e){let{basename:t,children:n,future:r,window:l}=e,i=y.useRef();i.current==null&&(i.current=Km({window:l,v5Compat:!0}));let s=i.current,[c,a]=y.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=y.useCallback(m=>{u&&yc?yc(()=>a(m)):a(m)},[a,u]);return y.useLayoutEffect(()=>s.listen(f),[s,f]),y.useEffect(()=>Ph(r),[r]),y.createElement(Mh,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}const Hh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kh=y.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:i,replace:s,state:c,target:a,to:u,preventScrollReset:f,viewTransition:m}=t,h=Xd(t,$h),{basename:C}=y.useContext(rn),w,b=!1;if(typeof u=="string"&&Qh.test(u)&&(w=u,Hh))try{let g=new URL(window.location.href),v=u.startsWith("//")?new URL(g.protocol+u):new URL(u),E=Zn(v.pathname,C);v.origin===g.origin&&E!=null?u=E+v.search+v.hash:b=!0}catch{}let S=yh(u,{relative:l}),p=Yh(u,{replace:s,state:c,target:a,preventScrollReset:f,relative:l,viewTransition:m});function d(g){r&&r(g),g.defaultPrevented||p(g)}return y.createElement("a",no({},h,{href:w||S,onClick:b||i?r:d,ref:n,target:a}))}),Gi=y.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:i="",end:s=!1,style:c,to:a,viewTransition:u,children:f}=t,m=Xd(t,Fh),h=So(a,{relative:m.relative}),C=Gr(),w=y.useContext(Vd),{navigator:b,basename:S}=y.useContext(rn),p=w!=null&&Xh(h)&&u===!0,d=b.encodeLocation?b.encodeLocation(h).pathname:h.pathname,g=C.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;l||(g=g.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&S&&(v=Zn(v,S)||v);const E=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let _=g===d||!s&&g.startsWith(d)&&g.charAt(E)==="/",j=v!=null&&(v===d||!s&&v.startsWith(d)&&v.charAt(d.length)==="/"),D={isActive:_,isPending:j,isTransitioning:p},k=_?r:void 0,R;typeof i=="function"?R=i(D):R=[i,_?"active":null,j?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let I=typeof c=="function"?c(D):c;return y.createElement(Kh,no({},m,{"aria-current":k,className:R,ref:n,style:I,to:a,viewTransition:u}),typeof f=="function"?f(D):f)});var Zi;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zi||(Zi={}));var kc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kc||(kc={}));function Jh(e){let t=y.useContext(jo);return t||fe(!1),t}function Yh(e,t){let{target:n,replace:r,state:l,preventScrollReset:i,relative:s,viewTransition:c}=t===void 0?{}:t,a=Qd(),u=Gr(),f=So(e,{relative:s});return y.useCallback(m=>{if(Ah(m,n)){m.preventDefault();let h=r!==void 0?r:to(u)===to(f);a(e,{replace:h,state:l,preventScrollReset:i,relative:s,viewTransition:c})}},[u,a,f,r,l,n,e,i,s,c])}function Xh(e,t){t===void 0&&(t={});let n=y.useContext(Bh);n==null&&fe(!1);let{basename:r}=Jh(Zi.useViewTransitionState),l=So(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yi(l.pathname,s)!=null||Yi(l.pathname,i)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$=(e,t)=>{const n=y.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:c="",children:a,...u},f)=>y.createElement("svg",{ref:f,...Gh,width:l,height:l,stroke:r,strokeWidth:s?Number(i)*24/Number(l):i,className:["lucide",`lucide-${Zh(e)}`,c].join(" "),...u},[...t.map(([m,h])=>y.createElement(m,h)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=$("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=$("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=$("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=$("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=$("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=$("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=$("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=$("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=$("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=$("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=$("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=$("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=$("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=$("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=$("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=$("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=$("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=$("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=$("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=$("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=$("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=$("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=$("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=$("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=$("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=$("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=$("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=$("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=$("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=$("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=$("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=$("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=$("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=$("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=$("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=$("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=$("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=$("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=$("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=$("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=$("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=$("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=$("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=$("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=$("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=$("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=$("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=$("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=$("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Pg="541237405602-df30i3dm5eje25fl2thhhghp25erv2s6.apps.googleusercontent.com",Mg="https://www.googleapis.com/auth/drive.appdata";let gl=null,xe=null;const de={init:()=>{console.log("Google Drive Sync: Initializing version 1.0.6...");const e=sessionStorage.getItem("google_access_token");return e&&(xe=e,console.log("Google Drive Sync: Restored token from session storage.")),new Promise(t=>{const n=setInterval(()=>{window.google&&(clearInterval(n),gl=window.google.accounts.oauth2.initTokenClient({client_id:Pg,scope:Mg,callback:r=>{if(r.error!==void 0)throw r;xe=r.access_token,sessionStorage.setItem("google_access_token",xe||""),t()}}),t())},100)})},signIn:(e=!1)=>new Promise((t,n)=>{if(!gl){n(new Error("Google Drive API not initialized"));return}gl.callback=r=>{r.error?n(r):(xe=r.access_token,sessionStorage.setItem("google_access_token",xe||""),t())},gl.requestAccessToken({prompt:e?"":"consent"})}),signOut:()=>{xe?window.google.accounts.oauth2.revoke(xe,()=>{xe=null,sessionStorage.removeItem("google_access_token")}):sessionStorage.removeItem("google_access_token")},isAuthenticated:()=>xe!==null,safeParseJson:async e=>{const t=await e.text();if(!t||t.trim()==="")return{files:[]};try{return JSON.parse(t)}catch(n){return console.error("JSON parse error:",n,"Content:",t),null}},getOrCreateFile:async e=>{if(!xe)throw new Error("Not authenticated");const t=await fetch(`https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name='${e}'`,{headers:{Authorization:`Bearer ${xe}`}});if(!t.ok){const i=await t.text();throw console.error("Search API Error:",i),new Error(`Search failed: ${t.status}`)}const n=await de.safeParseJson(t);if(n&&n.files&&n.files.length>0)return n.files[0].id;const r=await fetch("https://www.googleapis.com/drive/v3/files",{method:"POST",headers:{Authorization:`Bearer ${xe}`,"Content-Type":"application/json"},body:JSON.stringify({name:e,parents:["appDataFolder"]})});if(!r.ok){const i=await r.text();throw console.error("Create File API Error:",i),new Error(`Create failed: ${r.status}`)}const l=await de.safeParseJson(r);return l==null?void 0:l.id},getFileContent:async e=>{if(!xe)throw new Error("Not authenticated");const t=await fetch(`https://www.googleapis.com/drive/v3/files/${e}?alt=media`,{headers:{Authorization:`Bearer ${xe}`}});if(!t.ok){if(t.status===404)return null;const n=await t.text();throw console.error("Get Content API Error:",n),new Error(`Failed to fetch file content: ${t.status}`)}return await de.safeParseJson(t)},getFileMetadata:async e=>{if(!xe)throw new Error("Not authenticated");const t=await fetch(`https://www.googleapis.com/drive/v3/files/${e}?fields=id,name,modifiedTime`,{headers:{Authorization:`Bearer ${xe}`}});if(!t.ok)throw new Error(`Metadata fetch failed: ${t.status}`);return await de.safeParseJson(t)},updateFileContent:async(e,t)=>{if(!xe)throw new Error("Not authenticated");try{const n=await fetch(`https://www.googleapis.com/upload/drive/v3/files/${e}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${xe}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok){const r=await n.text();throw console.error("Update Content API Error:",r,"Status:",n.status),new Error(`Update failed: ${n.status} - ${r}`)}return await de.safeParseJson(n)}catch(n){throw console.error("Network error during updateFileContent:",n),n}}},nf=9,Lg=e=>{const t=e.version||0;let n={...e};return t<1&&(n=Fg(n)),t<2&&(n=Ug(n)),t<3&&(n=Bg(n)),t<4&&(n=Vg(n)),t<5&&(n=Wg(n)),t<6&&(n=Hg(n)),t<7&&(n=Og(n)),t<8&&(n=Ag(n)),t<9&&(n=$g(n)),n.version=nf,n},Og=e=>({...e,events:(e.events||[]).map(t=>({...t,status:t.status||"todo"})),version:7}),Ag=e=>({...e,memos:(e.memos||[]).map(t=>({...t,title:t.title||""})),version:8}),$g=e=>({...e,tasks:(e.tasks||[]).map(t=>({...t,trackResponseRate:t.trackResponseRate!==void 0?t.trackResponseRate:t.category==="union_member"})),taskDefinitions:(e.taskDefinitions||[]).map(t=>({...t,trackResponseRate:t.trackResponseRate!==void 0?t.trackResponseRate:t.category==="union_member"})),version:9}),Fg=e=>({...e,tasks:e.tasks||[],events:e.events||[],version:1}),Ug=e=>{const t=[{id:"role-leader",name:"委員長"},{id:"role-secretary",name:"書記長"},{id:"role-treasurer",name:"会計"},{id:"role-member",name:"執行委員"}],n=[{id:"def-report",title:"活動報告書の提出",description:"月次の活動報告書を作成し、提出する。",category:"administrative",priority:"medium",roleIds:["role-leader","role-secretary","role-treasurer","role-member"]},{id:"def-negotiation",title:"団体交渉の準備",description:"会社側との交渉に向けた資料作成と要求案の整理。",category:"union_member",priority:"high",roleIds:["role-leader","role-secretary"]}],r=[{id:"mtg-exec",name:"三役会議",content:"重要事項の決定",timing:"毎週火曜日",roleIds:["role-leader","role-secretary","role-treasurer"]},{id:"mtg-board",name:"執行委員会",content:"活動報告と方針確認",timing:"毎月第2木曜日",roleIds:["role-leader","role-secretary","role-treasurer","role-member"]}];return{...e,roles:e.roles||t,taskDefinitions:e.taskDefinitions||n,meetingDefinitions:e.meetingDefinitions||r,currentRoleId:e.currentRoleId||"role-member",showAllItems:e.showAllItems!==void 0?e.showAllItems:!1,version:2}},Bg=e=>({...e,travelExpenses:e.travelExpenses||[],tasks:(e.tasks||[]).map(t=>({...t,subtasks:t.subtasks||[]})),events:(e.events||[]).map(t=>({...t,memos:t.memos||[]})),version:3}),Vg=e=>({...e,tasks:(e.tasks||[]).map(t=>({...t,memos:t.memos||[]})),version:4}),Wg=e=>{const t=[];return e.tasks&&e.tasks.forEach(n=>{n.memos&&(n.memos.forEach(r=>{t.push({...r,linkedTaskId:n.id})}),delete n.memos)}),e.events&&e.events.forEach(n=>{n.memos&&(n.memos.forEach(r=>{t.push({...r,linkedEventId:n.id})}),delete n.memos)}),{...e,version:5,memos:t}},Hg=e=>{const t=[{id:"tpl-meeting",title:"会議議事録",content:`【日時】
【場所】
【出席者】
【決定事項】
`},{id:"tpl-todo",title:"TODOリスト",content:`・[ ] 
・[ ] 
・[ ] `},{id:"tpl-note",title:"汎用メモ",content:`■概要：
■詳細：
`}];return{...e,version:6,memoTemplates:e.memoTemplates||t}},mt={TASKS:"union_app_tasks",EVENTS:"union_app_events",TRAVEL_EXPENSES:"union_app_travel_expenses",MEMOS:"union_app_memos",MEMO_TEMPLATES:"union_app_memo_templates"},Sc="union_app_data.json",P={getTasks:()=>{const e=localStorage.getItem(mt.TASKS);return e?JSON.parse(e):[]},saveTasks:(e,t=!1)=>{localStorage.setItem(mt.TASKS,JSON.stringify(e)),t||P.uploadToCloud()},getEvents:()=>{const e=localStorage.getItem(mt.EVENTS);return e?JSON.parse(e):[]},saveEvents:(e,t=!1)=>{localStorage.setItem(mt.EVENTS,JSON.stringify(e)),t||P.uploadToCloud()},getTravelExpenses:()=>{const e=localStorage.getItem(mt.TRAVEL_EXPENSES);return e?JSON.parse(e):[]},saveTravelExpenses:(e,t=!1)=>{localStorage.setItem(mt.TRAVEL_EXPENSES,JSON.stringify(e)),t||P.uploadToCloud()},getMemos:()=>{const e=localStorage.getItem(mt.MEMOS);return e?JSON.parse(e):[]},saveMemos:(e,t=!1)=>{localStorage.setItem(mt.MEMOS,JSON.stringify(e)),t||P.uploadToCloud()},getMemoTemplates:()=>{const e=localStorage.getItem(mt.MEMO_TEMPLATES);return e?JSON.parse(e):[]},saveMemoTemplates:(e,t=!1)=>{localStorage.setItem(mt.MEMO_TEMPLATES,JSON.stringify(e)),t||P.uploadToCloud()},syncWithCloud:async()=>{if(!de.isAuthenticated())return;const e=await de.getOrCreateFile(Sc),t=await de.getFileContent(e);if(t){const n=Lg(t);P.saveTasks(n.tasks,!0),P.saveEvents(n.events,!0),n.travelExpenses&&P.saveTravelExpenses(n.travelExpenses,!0),n.memos&&P.saveMemos(n.memos,!0),n.memoTemplates&&P.saveMemoTemplates(n.memoTemplates,!0),n.roles&&localStorage.setItem("union_app_roles",JSON.stringify(n.roles)),n.taskDefinitions&&localStorage.setItem("union_app_task_defs",JSON.stringify(n.taskDefinitions)),n.meetingDefinitions&&localStorage.setItem("union_app_mtg_defs",JSON.stringify(n.meetingDefinitions)),n.currentRoleId&&localStorage.setItem("union_app_current_role",n.currentRoleId),localStorage.setItem("union_app_show_all",String(n.showAllItems||!1))}else await P.uploadToCloud()},getRoles:()=>JSON.parse(localStorage.getItem("union_app_roles")||"[]"),getTaskDefinitions:()=>JSON.parse(localStorage.getItem("union_app_task_defs")||"[]"),getMeetingDefinitions:()=>JSON.parse(localStorage.getItem("union_app_mtg_defs")||"[]"),setCurrentRoleId:e=>localStorage.setItem("union_app_current_role",e),getCurrentRoleId:()=>localStorage.getItem("union_app_current_role")||"",getShowAllItems:()=>localStorage.getItem("union_app_show_all")==="true",saveSettings:e=>{localStorage.setItem("union_app_roles",JSON.stringify(e.roles)),localStorage.setItem("union_app_task_defs",JSON.stringify(e.taskDefinitions)),localStorage.setItem("union_app_mtg_defs",JSON.stringify(e.meetingDefinitions)),localStorage.setItem("union_app_current_role",e.currentRoleId),localStorage.setItem("union_app_show_all",String(e.showAllItems)),P.uploadToCloud()},uploadToCloud:async()=>{if(!de.isAuthenticated())return;const e=await de.getOrCreateFile(Sc),t={version:nf,tasks:P.getTasks(),events:P.getEvents(),roles:P.getRoles(),taskDefinitions:P.getTaskDefinitions(),meetingDefinitions:P.getMeetingDefinitions(),travelExpenses:P.getTravelExpenses(),memos:P.getMemos(),memoTemplates:P.getMemoTemplates(),currentRoleId:P.getCurrentRoleId(),showAllItems:P.getShowAllItems(),lastSyncedAt:new Date().toISOString()},n=await de.updateFileContent(e,t);n&&n.modifiedTime&&localStorage.setItem("union_app_last_cloud_sync",n.modifiedTime)}},rf=()=>{const[e,t]=y.useState(!1),[n,r]=y.useState(!1),[l,i]=y.useState(null),[s,c]=y.useState(!1);y.useEffect(()=>{(async()=>{await new Promise(S=>setTimeout(S,500));const w=de.isAuthenticated(),b=localStorage.getItem("union_app_sync_enabled")==="true";if(w)t(!0),f(!1);else if(b)try{await de.signIn(!0),t(!0),f(!1)}catch(S){console.log("Auto-reconnect failed (expired or revoked):",S),localStorage.removeItem("union_app_sync_enabled"),t(!1)}else t(!1)})();const h=setInterval(()=>{de.isAuthenticated()&&f(!1)},3*60*1e3),C=()=>{de.isAuthenticated()&&f(!1)};return window.addEventListener("focus",C),()=>{clearInterval(h),window.removeEventListener("focus",C)}},[]);const a=async()=>{try{await de.signIn(),localStorage.setItem("union_app_sync_enabled","true"),t(!0),f()}catch(m){console.error("Sign in failed:",m),alert("Googleログインに失敗しました。")}},u=()=>{de.signOut(),localStorage.removeItem("union_app_sync_enabled"),t(!1)},f=async(m=!0)=>{if(!n&&de.isAuthenticated()){r(!0);try{if(!m){const C=await de.getOrCreateFile("union_app_data.json"),w=await de.getFileMetadata(C),b=w==null?void 0:w.modifiedTime,S=localStorage.getItem("union_app_last_cloud_sync");if(b&&S&&new Date(b)<=new Date(S))return}await P.syncWithCloud();const h=new Date;i(h.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),localStorage.setItem("union_app_last_cloud_sync",h.toISOString()),m?window.location.reload():c(!0)}catch(h){if(console.error("Sync Error:",h),m){const C=h instanceof Error?h.message:JSON.stringify(h);alert(`同期に失敗しました。
詳細: ${C}`)}}finally{r(!1)}}};return e?o.jsxs("div",{className:"sync-status authenticated",children:[o.jsxs("div",{className:"status-info",children:[n?o.jsx(bc,{size:14,className:"spin"}):o.jsx(cg,{size:14,className:"success"}),o.jsxs("div",{className:"text-content",children:[o.jsx("span",{className:"label",children:"クラウド同期中"}),s?o.jsx("button",{className:"update-notice-btn",onClick:()=>window.location.reload(),children:"新しいデータがあります（更新）"}):l&&o.jsxs("span",{className:"time",children:["最終: ",l]})]})]}),o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"icon-btn",onClick:()=>f(!0),title:"今すぐ同期",disabled:n,children:o.jsx(bc,{size:14})}),o.jsx("button",{className:"icon-btn",onClick:u,title:"ログアウト",children:o.jsx(wg,{size:14})})]}),o.jsx("style",{children:`
                .sync-status.authenticated {
                    padding: 0.5rem 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: rgba(255, 255, 255, 0.03);
                    border-radius: 8px;
                    margin: 0.5rem 1rem;
                }
                .mobile-header .sync-status.authenticated {
                    margin: 0;
                    padding: 0;
                    background: none;
                }
                .mobile-header .sync-status {
                    padding: 0;
                }
                .status-info { display: flex; align-items: center; gap: 0.75rem; }
                .text-content { display: flex; flex-direction: column; }
                .label { font-size: 0.7rem; font-weight: 700; color: var(--text-main); }
                .time { font-size: 0.6rem; color: var(--text-muted); }
                .success { color: var(--success); }
                .spin { animation: rotate 2s linear infinite; color: var(--primary); }
                .update-notice-btn {
                    background: var(--warning);
                    color: #000;
                    border: none;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.65rem;
                    font-weight: 800;
                    margin-top: 2px;
                    cursor: pointer;
                    animation: bounce 2s infinite;
                }
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-3px); }
                    60% { transform: translateY(-2px); }
                }
                @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                .actions { display: flex; gap: 0.25rem; }
                .icon-btn {
                    background: none;
                    border: none;
                    color: var(--text-muted);
                    padding: 4px;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .icon-btn:hover { background-color: #334155; color: var(--text-main); }
                .icon-btn:disabled { opacity: 0.5; cursor: not-allowed; }
            `})]}):o.jsxs("div",{className:"sync-status",children:[o.jsxs("button",{className:"sync-btn login",onClick:a,children:[o.jsx(kg,{size:16}),o.jsx("span",{children:"クラウド同期を開始"})]}),o.jsx("style",{children:`
                    .sync-status { padding: 0.5rem 1rem; }
                    .sync-btn {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        background-color: var(--primary);
                        color: white;
                        border: none;
                        padding: 0.5rem 0.75rem;
                        border-radius: 6px;
                        font-size: 0.75rem;
                        cursor: pointer;
                        width: 100%;
                        justify-content: center;
                    }
                    .sync-btn:hover { opacity: 0.9; }
                `})]})},Qg=()=>{const e=[{name:"ダッシュボード",path:"/",icon:o.jsx(qd,{size:20})},{name:"タスク管理",path:"/tasks",icon:o.jsx(No,{size:20})},{name:"スケジュール",path:"/calendar",icon:o.jsx(qn,{size:20})},{name:"メモ一覧",path:"/memos",icon:o.jsx(tf,{size:20})}];return o.jsxs("aside",{className:"sidebar",children:[o.jsx("div",{className:"sidebar-header",children:o.jsxs("div",{className:"app-logo",children:[o.jsx("div",{className:"logo-icon",children:"U"}),o.jsx("span",{children:"役員活動管理"})]})}),o.jsxs("nav",{className:"sidebar-nav",children:[e.map(t=>o.jsxs(Gi,{to:t.path,className:({isActive:n})=>`nav-link ${n?"active":""}`,children:[t.icon,o.jsx("span",{children:t.name})]},t.path)),o.jsxs(Gi,{to:"/settings",className:({isActive:t})=>`nav-link nav-link-settings ${t?"active":""}`,children:[o.jsx(Xs,{size:20}),o.jsx("span",{children:"設定"})]})]}),o.jsx(rf,{}),o.jsx("div",{className:"sidebar-footer",children:o.jsxs("div",{className:"user-info",children:[o.jsx(Rg,{size:18}),o.jsx("span",{children:"組合役員 A"})]})}),o.jsx("style",{children:`
        .sidebar {
          width: var(--sidebar-width);
          background-color: var(--bg-card);
          border-right: 1px solid #334155;
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid #334155;
        }

        .app-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background-color: var(--primary);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
        }

        /* 設定リンクをナビ末尾に押し下げて視覚的に分離 */
        .nav-link-settings {
          margin-top: auto;
          border-top: 1px solid #334155;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1.5rem;
          color: var(--text-muted);
          transition: all 0.2s ease;
          border-left: 3px solid transparent;
        }

        .nav-link:hover {
          background-color: #334155;
          color: var(--text-main);
        }

        .nav-link.active {
          color: var(--primary);
          background-color: #1e293b;
          border-left-color: var(--primary);
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0) 100%);
        }

        .sidebar-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #334155;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `})]})},Kg=()=>{const e=[{name:"ダッシュ",path:"/",icon:o.jsx(qd,{size:20})},{name:"タスク",path:"/tasks",icon:o.jsx(No,{size:20})},{name:"予定",path:"/calendar",icon:o.jsx(qn,{size:20})},{name:"メモ",path:"/memos",icon:o.jsx(tf,{size:20})},{name:"設定",path:"/settings",icon:o.jsx(Xs,{size:20})}];return o.jsxs("nav",{className:"bottom-nav",children:[e.map(t=>o.jsxs(Gi,{to:t.path,className:({isActive:n})=>`bottom-nav-link ${n?"active":""}`,children:[t.icon,o.jsx("span",{children:t.name})]},t.path)),o.jsx("style",{children:`
                .bottom-nav {
                    display: none;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 64px;
                    background-color: var(--bg-card);
                    border-top: 1px solid #334155;
                    padding: 0 1rem;
                    z-index: 1000;
                    backdrop-filter: blur(10px);
                }

                .bottom-nav-link {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    color: var(--text-muted);
                    text-decoration: none;
                    font-size: 0.7rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .bottom-nav-link.active {
                    color: var(--primary);
                }

                @media (max-width: 768px) {
                    .bottom-nav {
                        display: flex;
                    }
                }
            `})]})},Jg=({children:e})=>o.jsxs("div",{className:"layout-container",children:[o.jsxs("header",{className:"mobile-header",children:[o.jsxs("div",{className:"app-logo-mini",children:[o.jsx("div",{className:"logo-icon-mini",children:"U"}),o.jsx("span",{children:"役員活動管理"})]}),o.jsx("div",{className:"mobile-sync-area",children:o.jsx(rf,{})})]}),o.jsx(Qg,{}),o.jsx("main",{className:"main-content",children:e}),o.jsx(Kg,{}),o.jsx("style",{children:`
        .layout-container {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          padding: 2rem;
          margin-left: 0; /* Sidebar is fixed or flex */
          overflow-y: auto;
          transition: padding 0.3s ease;
        }

        .mobile-header {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 56px;
          background-color: var(--bg-card);
          border-bottom: 1px solid #334155;
          padding: 0 1rem;
          align-items: center;
          justify-content: space-between;
          z-index: 1000;
        }

        .app-logo-mini {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .logo-icon-mini {
          width: 24px;
          height: 24px;
          background-color: var(--primary);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
        }

        .mobile-sync-area {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 768px) {
          .mobile-header {
            display: flex;
          }
          .layout-container {
            display: block;
            padding-top: 56px; /* Space for mobile header */
          }
          .main-content {
            padding: 1rem;
            padding-bottom: 80px; /* Space for BottomNav */
          }
        }
      `})]}),Yg=()=>{var R;const[e,t]=y.useState([]),[n,r]=y.useState([]),[l,i]=y.useState([]),[s,c]=y.useState(""),[a,u]=y.useState(!1),f=Qd();y.useEffect(()=>{t(P.getTasks()),r(P.getEvents()),i(P.getTravelExpenses()),c(P.getCurrentRoleId()),u(P.getShowAllItems())},[]);const m=P.getTaskDefinitions(),h=P.getMeetingDefinitions(),C=I=>{if(a)return!0;const G=m.find(H=>H.title===I.title);return G&&s&&G.roleIds&&G.roleIds.length>0?G.roleIds.includes(s):!0},w=I=>{if(a)return!0;const G=h.find(H=>H.name===I.title);return G&&s?G.roleIds.includes(s):!0},b=e.filter(C),S=n.filter(w),p=b.filter(I=>I.status==="completed"),d=b.filter(I=>I.trackResponseRate&&(I.responseRate||0)<50&&I.status!=="completed"),g=new Date().toLocaleDateString("sv"),v=S.filter(I=>I.date===g),E=new Date().toLocaleDateString("sv").substring(0,7),_=S.filter(I=>I.date.startsWith(E)&&I.expense).reduce((I,G)=>{var H;return I+(((H=G.expense)==null?void 0:H.totalAmount)||0)},0),j=l.filter(I=>I.date.startsWith(E)).reduce((I,G)=>I+(G.totalAmount||0),0),D=_+j,k=b.filter(I=>I.status==="completed"||!I.dueDate?!1:I.dueDate<=g);return o.jsxs("div",{className:"dashboard",children:[o.jsxs("header",{className:"page-header",children:[o.jsxs("div",{className:"header-main",children:[o.jsx("h1",{children:"ダッシュボード"}),o.jsx("p",{className:"subtitle",children:"こんにちは、今日も活動お疲れ様です。"})]}),s&&o.jsxs("div",{className:"role-tag",children:["役職: ",((R=P.getRoles().find(I=>I.id===s))==null?void 0:R.name)||s]})]}),k.length>0&&o.jsxs("div",{className:"urgent-banner",onClick:()=>f("/tasks"),children:[o.jsx("div",{className:"banner-icon",children:o.jsx(lg,{size:20})}),o.jsxs("div",{className:"banner-content",children:[o.jsxs("span",{className:"banner-title",children:["期限間近・超過のタスクがあります (",k.length,"件)"]}),o.jsx("span",{className:"banner-desc",children:"本日が期限、または期限を過ぎている未完了タスクを確認してください。"})]}),o.jsx($t,{size:20})]}),o.jsxs("div",{className:"summary-grid",children:[o.jsxs("div",{className:"summary-card",children:[o.jsx("div",{className:"card-icon blue",children:o.jsx(No,{size:24})}),o.jsxs("div",{className:"card-info",children:[o.jsx("span",{className:"label",children:"担当タスク"}),o.jsxs("span",{className:"value",children:[b.length," ",o.jsxs("small",{children:["/ ",p.length," 完了"]})]})]})]}),o.jsxs("div",{className:"summary-card",children:[o.jsx("div",{className:"card-icon orange",children:o.jsx(qn,{size:24})}),o.jsxs("div",{className:"card-info",children:[o.jsx("span",{className:"label",children:"本日の予定"}),o.jsxs("span",{className:"value",children:[v.length," ",o.jsx("small",{children:"件"})]})]})]}),o.jsxs("div",{className:"summary-card",children:[o.jsx("div",{className:"card-icon green",children:o.jsx(Gs,{size:24})}),o.jsxs("div",{className:"card-info",children:[o.jsx("span",{className:"label",children:"今月の旅費"}),o.jsxs("span",{className:"value",children:["¥ ",D.toLocaleString()]})]})]})]}),o.jsxs("div",{className:"dashboard-content",children:[o.jsxs("section",{className:"alert-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx(Gd,{size:20,className:"text-danger"}),o.jsx("h2",{children:"要注意タスク (回答率低下)"})]}),d.length>0?o.jsx("div",{className:"alert-list",children:d.map(I=>o.jsxs("div",{className:"alert-item",onClick:()=>f("/tasks"),children:[o.jsx("div",{className:"alert-indicator"}),o.jsxs("div",{className:"alert-body",children:[o.jsx("span",{className:"alert-title",children:I.title}),o.jsxs("div",{className:"alert-meta",children:[o.jsx(Tg,{size:14}),o.jsxs("span",{children:["回答率: ",I.responseRate,"%"]}),o.jsx("span",{className:"separator",children:"|"}),o.jsx(ro,{size:14}),o.jsxs("span",{children:["期限: ",I.dueDate||"なし"]})]})]}),o.jsx("button",{className:"action-btn",children:"フォロー"})]},I.id))}):o.jsx("div",{className:"empty-state",children:"現在、フォローが必要な緊急タスクはありません。"})]}),o.jsxs("section",{className:"schedule-section",children:[o.jsxs("div",{className:"section-header",children:[o.jsx(qn,{size:20}),o.jsx("h2",{children:"本日のスケジュール"})]}),o.jsxs("div",{className:"schedule-list",children:[v.length>0?v.map(I=>o.jsxs("div",{className:"event-item",children:[o.jsx("span",{className:"event-time",children:I.startTime||"--:--"}),o.jsxs("div",{className:"event-details",children:[o.jsx("span",{className:"event-title",children:I.title}),o.jsx("span",{className:"event-location",children:I.location||"場所指定なし"})]})]},I.id)):o.jsx("div",{className:"empty-state",children:"本日の予定はありません。"}),o.jsx("button",{className:"view-all-btn",onClick:()=>f("/calendar"),children:"カレンダーを見る"})]})]})]}),o.jsx("style",{children:`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .page-header h1 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          color: var(--text-muted);
        }

        .summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .summary-card {
          background-color: var(--bg-card);
          padding: 1.5rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border: 1px solid #334155;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-icon.blue { background-color: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .card-icon.orange { background-color: rgba(245, 158, 11, 0.1); color: #f59e0b; }
        .card-icon.green { background-color: rgba(16, 185, 129, 0.1); color: #10b981; }

        .card-info {
          display: flex;
          flex-direction: column;
        }

        .card-info .label {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .card-info .value {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .card-info .value small {
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--text-muted);
        }

        .dashboard-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .dashboard-content {
            grid-template-columns: 1fr;
          }
        }

        section {
          background-color: var(--bg-card);
          border-radius: 12px;
          padding: 1.5rem;
          border: 1px solid #334155;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .role-tag {
          padding: 0.5rem 1rem;
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .urgent-banner {
          background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
          color: white;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
          transition: transform 0.2s ease;
        }

        .urgent-banner:hover {
          transform: translateY(-2px);
        }

        .banner-icon {
          background: rgba(255, 255, 255, 0.2);
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .banner-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .banner-title {
          font-weight: 700;
          font-size: 1rem;
        }

        .banner-desc {
          font-size: 0.8rem;
          opacity: 0.9;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #334155;
        }

        .section-header h2 {
          font-size: 1.125rem;
        }

        .alert-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .alert-item {
          display: flex;
          align-items: center;
          background-color: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          padding: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .alert-item:hover {
          transform: translateY(-2px);
          background-color: rgba(239, 68, 68, 0.08);
        }

        .alert-indicator {
          width: 4px;
          height: 40px;
          background-color: var(--danger);
          border-radius: 2px;
          margin-right: 1rem;
        }

        .alert-body {
          flex: 1;
        }

        .alert-title {
          display: block;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .alert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .separator {
          margin: 0 0.25rem;
        }

        .action-btn {
          background-color: var(--danger);
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .event-item {
          display: flex;
          gap: 1.25rem;
          padding: 0.75rem;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.03);
        }

        .event-time {
          font-weight: 700;
          color: var(--primary);
          min-width: 50px;
        }

        .event-details {
          display: flex;
          flex-direction: column;
        }

        .event-title {
          font-weight: 600;
        }

        .event-location {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .empty-state {
          text-align: center;
          padding: 2rem;
          color: var(--text-muted);
          font-style: italic;
          font-size: 0.875rem;
        }

        .view-all-btn {
          margin-top: 1rem;
          background: none;
          border: 1px solid #334155;
          color: var(--text-muted);
          padding: 0.5rem;
          border-radius: 6px;
          font-size: 0.875rem;
          transition: all 0.2s ease;
        }

        .view-all-btn:hover {
          background-color: #334155;
          color: var(--text-main);
        }

        .text-danger { color: var(--danger); }
        @media (max-width: 640px) {
          .summary-grid { grid-template-columns: 1fr; }
          .urgent-grid { grid-template-columns: 1fr; }
          .dashboard-header h1 { font-size: 1.5rem; }
          .summary-card { padding: 1rem; }
        }
      `})]})},Xg="UnionOfficerAppDB",Pt="Blobs",Gg=1,Zg={init(){return new Promise((e,t)=>{const n=indexedDB.open(Xg,Gg);n.onupgradeneeded=r=>{const l=r.target.result;l.objectStoreNames.contains(Pt)||l.createObjectStore(Pt)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})},async saveBlob(e,t){const n=await this.init();return new Promise((r,l)=>{const c=n.transaction(Pt,"readwrite").objectStore(Pt).put(t,e);c.onsuccess=()=>r(e),c.onerror=()=>l(c.error)})},async getBlob(e){const t=await this.init();return new Promise((n,r)=>{const s=t.transaction(Pt,"readonly").objectStore(Pt).get(e);s.onsuccess=()=>n(s.result||null),s.onerror=()=>r(s.error)})},async deleteBlob(e){const t=await this.init();return new Promise((n,r)=>{const s=t.transaction(Pt,"readwrite").objectStore(Pt).delete(e);s.onsuccess=()=>n(),s.onerror=()=>r(s.error)})}},Zs=({memos:e,onSave:t,onClose:n,initialMemoId:r,defaultLinkedEventId:l,defaultLinkedTaskId:i})=>{const[s,c]=y.useState(null),a=y.useRef(null),u=y.useRef(!0);y.useEffect(()=>{if(u.current){if(r){const k=e.find(R=>R.id===r);k&&c(k)}u.current=!1}},[r,e]);const[f,m]=y.useState(!1),h=y.useRef(null),C=y.useRef([]),[w,b]=y.useState(!1),[S]=y.useState(()=>P.getMemoTemplates());y.useEffect(()=>{if(s&&s.type==="text"&&a.current){const k=s.content||"",R=k.includes("<")||k.includes(">")?k:k.replace(/\n/g,"<br>");a.current.innerHTML!==R&&(a.current.innerHTML=R)}},[s==null?void 0:s.id]);const p=k=>{const R={id:Date.now().toString(),type:k,title:"",content:"",createdAt:new Date().toISOString(),linkedEventId:l,linkedTaskId:i};c(R)},d=async()=>{try{if(!s)return;let k=s.content||"";if(s.type==="text"&&a.current&&(k=a.current.innerHTML),!s.id||!s.type){console.error("Invalid memo data",s);return}let R=s.title||"";!R&&s.type==="text"&&(R=g());const I={id:s.id,type:s.type,title:R,content:k,createdAt:s.createdAt||new Date().toISOString(),linkedEventId:s.linkedEventId,linkedTaskId:s.linkedTaskId},G=e.some(ne=>ne.id===I.id);let H;G?H=e.map(ne=>ne.id===I.id?I:ne):H=[...e,I],t(H),c(I),b(!0),setTimeout(()=>b(!1),2e3)}catch(k){console.error("Save failed:",k),alert("保存に失敗しました")}},g=()=>{const k=new Date,R=k.getFullYear(),I=(k.getMonth()+1).toString().padStart(2,"0"),G=k.getDate().toString().padStart(2,"0"),H=`${R}${I}${G}`,ne=`${R}-${I}-${G}`,lt=P.getMemos().filter(F=>F.createdAt.startsWith(ne));let Le=0;lt.forEach(F=>{var Y;const V=(Y=F.title)==null?void 0:Y.match(/^(\d{8})_(\d{2})_森$/);if(V&&V[1]===H){const q=parseInt(V[2],10);q>Le&&(Le=q)}});const M=(Le+1).toString().padStart(2,"0");return`${H}_${M}_森`},v=k=>{confirm("このメモを削除しますか？")&&(t(e.filter(R=>R.id!==k)),(s==null?void 0:s.id)===k&&c(null))},E=(k,R="")=>{try{document.execCommand(k,!1,R),a.current&&c(I=>I?{...I,content:a.current.innerHTML}:null)}catch(I){console.error("Command failed:",k,I)}},_=k=>{if(a.current){const R=k.replace(/\n/g,"<br>");a.current.innerHTML+=R,c(I=>I?{...I,content:a.current.innerHTML}:null)}},j=async()=>{try{const k=await navigator.mediaDevices.getUserMedia({audio:!0}),R=new MediaRecorder(k);h.current=R,C.current=[],R.ondataavailable=I=>{I.data.size>0&&C.current.push(I.data)},R.onstop=async()=>{const I=new Blob(C.current,{type:"audio/webm"}),G=`voice-${Date.now()}`;await Zg.saveBlob(G,I),c(H=>H?{...H,content:G}:null)},R.start(),m(!0)}catch(k){console.error("録音に失敗しました:",k),alert("マイクの使用を許可してください。")}},D=()=>{var k;(k=h.current)==null||k.stop(),m(!1)};return o.jsxs("div",{className:"memo-editor-overlay",children:[o.jsxs("div",{className:"memo-editor-content",children:[o.jsxs("div",{className:"memo-header-global",children:[o.jsx("h3",{children:"個別メモ・記録"}),o.jsx("button",{className:"close-all-btn",onClick:n,children:o.jsx(fn,{size:20})})]}),o.jsxs("div",{className:`memos-sidebar ${s?"hidden":""}`,children:[o.jsxs("div",{className:"memo-types-bar",children:[o.jsx("button",{onClick:()=>p("text"),title:"テキスト",children:o.jsx(ts,{size:18})}),o.jsx("button",{onClick:()=>p("voice"),title:"音声",children:o.jsx(_l,{size:18})})]}),o.jsx("div",{className:"memos-list",children:e.length>0?e.map(k=>o.jsxs("div",{className:"memo-item-card",onClick:()=>k.type==="text"&&c(k),children:[o.jsxs("div",{className:"memo-meta",children:[o.jsxs("span",{className:"memo-type-icon",children:[k.type==="text"&&o.jsx(ts,{size:14}),k.type==="voice"&&o.jsx(_l,{size:14})]}),o.jsx("span",{className:"memo-date",children:new Date(k.createdAt).toLocaleDateString()}),o.jsx("button",{className:"del-btn-tiny",onClick:R=>{R.stopPropagation(),v(k.id)},children:o.jsx(qe,{size:12})})]}),o.jsx("div",{className:"memo-item-title",children:k.title||"(無題)"})]},k.id)):o.jsx("div",{className:"empty-state",children:"メモはまだありません。"})})]}),s&&o.jsxs("div",{className:"edit-area",children:[o.jsxs("div",{className:"edit-header",children:[o.jsx("span",{children:s.type==="text"?"テキストメモ編集":"音声録音"}),o.jsx("button",{className:"close-editor-btn",onClick:()=>c(null),children:o.jsx(fn,{size:18})})]}),o.jsxs("div",{className:"edit-body",children:[s.type==="text"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-group row",children:o.jsx("input",{type:"text",value:s.title||"",onChange:k=>c({...s,title:k.target.value}),placeholder:"タイトルを入力 (空なら自動生成)",className:"title-input-inline"})}),o.jsxs("div",{className:"rich-toolbar",children:[o.jsxs("div",{className:"toolbar-group",children:[o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("bold"),title:"太字",children:o.jsx(og,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("italic"),title:"斜体",children:o.jsx(hg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("underline"),title:"下線",children:o.jsx(Ig,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("strikeThrough"),title:"取り消し線",children:o.jsx(Eg,{size:16})})]}),o.jsxs("div",{className:"toolbar-group separator",children:[o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("insertUnorderedList"),title:"箇条書き",children:o.jsx(yg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("insertOrderedList"),title:"番号付きリスト",children:o.jsx(xg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("formatBlock","blockquote"),title:"引用",children:o.jsx(Sg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("formatBlock","pre"),title:"コード",children:o.jsx(ug,{size:16})})]}),o.jsxs("div",{className:"toolbar-group separator",children:[o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("justifyLeft"),title:"左寄せ",children:o.jsx(tg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("justifyCenter"),title:"中央揃え",children:o.jsx(qh,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("justifyRight"),title:"右寄せ",children:o.jsx(ng,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("justifyFull"),title:"両端揃え",children:o.jsx(eg,{size:16})})]}),o.jsxs("div",{className:"toolbar-group separator",children:[o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("indent"),title:"インデント",children:o.jsx(pg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("outdent"),title:"アウトデント",children:o.jsx(jg,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("superscript"),title:"上付き",children:o.jsx(_g,{size:16})}),o.jsx("button",{onMouseDown:k=>k.preventDefault(),onClick:()=>E("subscript"),title:"下付き",children:o.jsx(zg,{size:16})})]}),o.jsxs("div",{className:"toolbar-group separator",children:[o.jsxs("label",{title:"文字色",className:"color-tool",children:[o.jsx(rg,{size:16}),o.jsx("input",{type:"color",onInput:k=>E("foreColor",k.target.value)})]}),o.jsxs("label",{title:"背景色",className:"color-tool",children:[o.jsx(fg,{size:16}),o.jsx("input",{type:"color",onInput:k=>E("hiliteColor",k.target.value),defaultValue:"#ffff00"})]}),o.jsxs("select",{onChange:k=>E("fontName",k.target.value),className:"font-select",children:[o.jsx("option",{value:"sans-serif",children:"Sans Serif"}),o.jsx("option",{value:"serif",children:"Serif"}),o.jsx("option",{value:"monospace",children:"Monospace"}),o.jsx("option",{value:"cursive",children:"Cursive"})]}),o.jsxs("select",{onChange:k=>E("fontSize",k.target.value),defaultValue:"3",className:"size-select",children:[o.jsx("option",{value:"1",children:"極小"}),o.jsx("option",{value:"2",children:"小"}),o.jsx("option",{value:"3",children:"標準"}),o.jsx("option",{value:"4",children:"中"}),o.jsx("option",{value:"5",children:"大"}),o.jsx("option",{value:"6",children:"特大"})]})]})]}),S&&S.length>0&&o.jsx("div",{className:"template-selector-mini",children:o.jsx("div",{className:"template-list",children:S.map(k=>o.jsx("button",{onClick:()=>_(k.content),className:"tpl-btn-tiny",children:k.title},k.id))})}),o.jsx("div",{ref:a,className:"rich-editor-area",contentEditable:!0,onBlur:k=>{const R=k.currentTarget.innerHTML;c(I=>I?{...I,content:R}:null)},"data-placeholder":"ここにメモを入力...",suppressContentEditableWarning:!0})]}),s.type==="voice"&&o.jsxs("div",{className:"voice-area",children:[f?o.jsxs("button",{className:"recording-btn pulse",onClick:D,children:[o.jsx(Cg,{size:24})," 録音停止"]}):o.jsxs("button",{className:"record-start-btn",onClick:j,children:[o.jsx(_l,{size:24})," 録音開始"]}),s.content&&o.jsx("div",{className:"ready-mark",children:"✓ 録音完了"})]})]}),o.jsxs("div",{className:"edit-footer",children:[w&&o.jsx("div",{className:"save-toast",children:"保存しました"}),o.jsxs("button",{className:"save-btn",onClick:d,children:[o.jsx(Tl,{size:16})," 保存"]})]})]})]}),o.jsx("style",{children:`
                .memo-editor-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 2000; padding: 1rem; }
                .memo-editor-content { background: #1e293b; width: 100%; max-width: 1000px; height: 95vh; border-radius: 12px; display: grid; grid-template-columns: 280px 1fr; overflow: hidden; position: relative; border: 1px solid #334155; }
                
                @media (max-width: 768px) {
                    .memo-editor-content { grid-template-columns: 1fr; margin-top: 1rem; height: 100vh; }
                    .memos-sidebar { display: flex; }
                    .memos-sidebar.hidden { display: none; }
                }

                .memo-header-global { height: 60px; padding: 0 1.5rem; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; grid-column: 1 / -1; background: #0f172a; flex-shrink: 0; }
                .memo-header-global h3 { margin: 0; font-size: 1.1rem; color: #fff; }

                .memos-sidebar { display: flex; flex-direction: column; border-right: 1px solid #334155; overflow: hidden; background: #1e293b; }
                .memo-types-bar { display: flex; padding: 1rem; gap: 1rem; border-bottom: 1px solid #334155; justify-content: center; background: #111827; }
                .memo-types-bar button { background: #1f2937; border: 1px solid #374151; color: white; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
                .memo-types-bar button:hover { background-color: var(--primary); transform: translateY(-2px); border-color: var(--primary); }
                
                .memos-list { flex: 1; overflow-y: auto; padding: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
                .memo-item-card { background: rgba(255,255,255,0.02); border: 1px solid #334155; border-radius: 8px; padding: 0.75rem; cursor: pointer; transition: all 0.2s; }
                .memo-item-card:hover { border-color: var(--primary); background: rgba(59, 130, 246, 0.05); }
                .memo-meta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem; font-size: 0.65rem; color: var(--text-muted); }
                .memo-item-title { font-size: 0.85rem; font-weight: 600; color: #e2e8f0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

                .edit-area { flex: 1; background: #0f172a; display: flex; flex-direction: column; overflow: hidden; position: relative; }
                .edit-header { height: 50px; padding: 0 1.5rem; border-bottom: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; background: #111827; flex-shrink: 0; }
                .edit-header span { font-size: 0.85rem; font-weight: 700; color: var(--primary); }

                .edit-body { flex: 1; padding: 1rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
                .title-input-inline { background: transparent; border: none; border-bottom: 2px solid #334155; color: white; padding: 0.5rem 0; font-size: 1.25rem; font-weight: 700; width: 100%; outline: none; transition: border-color 0.2s; }
                .title-input-inline:focus { border-color: var(--primary); }

                .rich-toolbar { background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.25rem; align-items: center; position: sticky; top: 0; z-index: 10; }
                .toolbar-group { display: flex; gap: 0.15rem; }
                .toolbar-group.separator { border-left: 1px solid #475569; padding-left: 0.25rem; margin-left: 0.25rem; }
                .rich-toolbar button, .color-tool { background: transparent; border: 1px solid transparent; color: #cbd5e1; width: 32px; height: 32px; border-radius: 4px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; position: relative; }
                .rich-toolbar button:hover, .color-tool:hover { background: #334155; color: #fff; border-color: #475569; }
                .color-tool input { position: absolute; opacity: 0; inset: 0; cursor: pointer; }
                .font-select, .size-select { background: #0f172a; color: #cbd5e1; border: 1px solid #334155; border-radius: 4px; padding: 2px 4px; font-size: 0.75rem; outline: none; }

                .template-selector-mini { background: #111827; padding: 0.5rem; border-radius: 6px; border: 1px solid #334155; }
                .template-list { display: flex; flex-wrap: wrap; gap: 0.4rem; }
                .tpl-btn-tiny { background: #334155; border: 1px solid #475569; color: #94a3b8; font-size: 0.65rem; padding: 2px 8px; border-radius: 4px; cursor: pointer; }
                .tpl-btn-tiny:hover { background: var(--primary); color: #fff; }

                .rich-editor-area { flex: 1; background: #111827; border: 1px solid #334155; border-radius: 8px; padding: 1.5rem; color: #e2e8f0; font-size: 1rem; line-height: 1.6; outline: none; min-height: 400px; overflow-y: auto; position: relative; }
                .rich-editor-area:focus { border-color: var(--primary); box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1); }
                .rich-editor-area:empty:before { content: attr(data-placeholder); color: #64748b; pointer-events: none; position: absolute; }
                .rich-editor-area blockquote { border-left: 4px solid var(--primary); padding-left: 1rem; margin: 1rem 0; color: #94a3b8; font-style: italic; background: rgba(255,255,255,0.02); }
                .rich-editor-area pre { background: #000; padding: 1rem; border-radius: 6px; font-family: 'Courier New', Courier, monospace; overflow-x: auto; margin: 1rem 0; }
                .rich-editor-area ul, .rich-editor-area ol { padding-left: 2rem; margin: 1rem 0; }
                
                .edit-footer { height: 60px; padding: 0 1.5rem; border-top: 1px solid #334155; display: flex; justify-content: flex-end; align-items: center; background: #0f172a; flex-shrink: 0; }
                .save-btn { background: var(--primary); color: white; border: none; padding: 0.6rem 2.5rem; border-radius: 8px; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: all 0.2s; }
                .save-btn:hover { filter: brightness(1.1); transform: translateY(-1px); }

                .save-toast { background: var(--success); color: white; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.8rem; font-weight: 700; animation: fade-in-out 2s forwards; }
                @keyframes fade-in-out {
                    0% { opacity: 0; transform: translateX(10px); }
                    15% { opacity: 1; transform: translateX(0); }
                    85% { opacity: 1; transform: translateX(0); }
                    100% { opacity: 0; transform: translateX(-10px); }
                }

                .voice-area { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
                .record-start-btn, .recording-btn { width: 120px; height: 120px; border-radius: 50%; border: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.3s; }
                .record-start-btn { background: #334155; color: white; }
                .record-start-btn:hover { background: var(--primary); }
                .recording-btn { background: var(--danger); color: white; }
                
                .pulse { animation: pulse-red 1.5s infinite; }
                @keyframes pulse-red { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
            `})]})},Co=({isOpen:e,title:t,message:n,confirmLabel:r="削除",cancelLabel:l="キャンセル",danger:i=!0,onConfirm:s,onCancel:c})=>e?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"confirm-overlay",onClick:c,role:"presentation"}),o.jsxs("div",{className:"confirm-dialog",role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-title","aria-describedby":"confirm-message",children:[o.jsx("div",{className:"confirm-icon",children:o.jsx(qi,{size:24})}),o.jsx("h3",{id:"confirm-title",className:"confirm-title",children:t}),o.jsx("p",{id:"confirm-message",className:"confirm-message",children:n}),o.jsxs("div",{className:"confirm-actions",children:[o.jsx("button",{className:"confirm-cancel-btn",onClick:c,children:l}),o.jsx("button",{className:`confirm-ok-btn ${i?"danger":""}`,onClick:s,autoFocus:!0,children:r})]})]}),o.jsx("style",{children:`
        .confirm-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 3000;
        }

        .confirm-dialog {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3001;
          background: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 1.75rem;
          width: min(400px, calc(100vw - 2rem));
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          text-align: center;
        }

        .confirm-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .confirm-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main);
          margin: 0;
        }

        .confirm-message {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.5;
        }

        .confirm-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.5rem;
          width: 100%;
        }

        .confirm-cancel-btn {
          flex: 1;
          padding: 0.625rem;
          background: transparent;
          border: 1px solid #334155;
          border-radius: 8px;
          color: var(--text-muted);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .confirm-cancel-btn:hover {
          background: #334155;
          color: var(--text-main);
        }

        .confirm-ok-btn {
          flex: 1;
          padding: 0.625rem;
          background: var(--primary);
          border: none;
          border-radius: 8px;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .confirm-ok-btn.danger {
          background: var(--danger);
        }

        .confirm-ok-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `})]}):null;function Eo(){const[e,t]=bt.useState({isOpen:!1,title:"",message:""}),n=bt.useCallback(s=>new Promise(c=>{t({...s,isOpen:!0,resolve:c})}),[]),r=bt.useCallback(()=>{t(s=>{var c;return(c=s.resolve)==null||c.call(s,!0),{...s,isOpen:!1}})},[]),l=bt.useCallback(()=>{t(s=>{var c;return(c=s.resolve)==null||c.call(s,!1),{...s,isOpen:!1}})},[]);return{confirmDialogProps:{isOpen:e.isOpen,title:e.title,message:e.message,confirmLabel:e.confirmLabel,cancelLabel:e.cancelLabel,danger:e.danger,onConfirm:r,onCancel:l},confirm:n}}const qg=({toast:e,onDismiss:t})=>{y.useEffect(()=>{const r=setTimeout(()=>t(e.id),3e3);return()=>clearTimeout(r)},[e.id,t]);const n=e.type==="success"?o.jsx(sg,{size:16}):e.type==="error"?o.jsx(Gd,{size:16}):o.jsx(mg,{size:16});return o.jsxs("div",{className:`toast-item toast-${e.type}`,children:[n,o.jsx("span",{className:"toast-message",children:e.message}),o.jsx("button",{className:"toast-close",onClick:()=>t(e.id),"aria-label":"閉じる",children:o.jsx(fn,{size:14})})]})},lf=({toasts:e,onDismiss:t})=>e.length===0?null:o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"toast-container",role:"status","aria-live":"polite",children:e.map(n=>o.jsx(qg,{toast:n,onDismiss:t},n.id))}),o.jsx("style",{children:`
        .toast-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 9999;
        }

        .toast-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 0.875rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          min-width: 240px;
          max-width: 360px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          animation: toast-slide-in 0.2s ease;
        }

        .toast-success {
          background-color: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
        }

        .toast-error {
          background-color: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #f87171;
        }

        .toast-info {
          background-color: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #60a5fa;
        }

        .toast-message {
          flex: 1;
          color: var(--text-main);
        }

        .toast-close {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 2px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .toast-close:hover {
          color: var(--text-main);
        }

        @keyframes toast-slide-in {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .toast-container {
            bottom: 5rem;
            right: 0.75rem;
            left: 0.75rem;
          }
          .toast-item {
            min-width: unset;
            max-width: unset;
          }
        }
      `})]});function of(){const[e,t]=bt.useState([]),n=bt.useCallback((l,i="success")=>{const s=`toast-${Date.now()}-${Math.random()}`;t(c=>[...c,{id:s,type:i,message:l}])},[]),r=bt.useCallback(l=>{t(i=>i.filter(s=>s.id!==l))},[]);return{toasts:e,showToast:n,dismissToast:r}}const e0=()=>{var q;const[e,t]=y.useState([]),[n,r]=y.useState([]),[l,i]=y.useState(""),[s,c]=y.useState(!1),[a,u]=y.useState("union_member"),[f,m]=y.useState(null),[h,C]=y.useState(null),[w,b]=y.useState(null),[S,p]=y.useState([]),[d,g]=y.useState(!1),{confirmDialogProps:v,confirm:E}=Eo(),{toasts:_,showToast:j,dismissToast:D}=of();y.useEffect(()=>{t(P.getTasks()),p(P.getMemos()),r(P.getTaskDefinitions()),i(P.getCurrentRoleId()),c(P.getShowAllItems())},[]);const k=z=>{t(z),P.saveTasks(z)},R=(z,L)=>{const X=e.map(Q=>Q.id===z?{...Q,status:L}:Q);k(X)},I=(z,L)=>{const X=e.map(Q=>Q.id===z?{...Q,response_rate:L,responseRate:L}:Q);k(X)},G=(z,L)=>{const X=e.map(Q=>{if(Q.id===z){const Te=(Q.subtasks||[]).map(Be=>Be.id===L?{...Be,isCompleted:!Be.isCompleted}:Be);return{...Q,subtasks:Te}}return Q});k(X)},H=async z=>{await E({title:"タスクを削除",message:"このタスクを削除しますか？この操作は元に戻せません。",confirmLabel:"削除する"})&&(k(e.filter(X=>X.id!==z)),j("タスクを削除しました","info"))},ne=(z,L)=>{const X=e.map(Q=>Q.id===z?{...Q,dueDate:L}:Q);k(X)},ft=z=>{const L={...z,id:Date.now().toString(),title:`${z.title} (コピー)`,createdAt:new Date().toISOString(),status:"todo"};k([L,...e])},lt=z=>{const L=n.find(Q=>Q.id===z);if(!L)return;const X={id:Date.now().toString(),title:L.title,description:L.description,category:L.category,status:"todo",priority:L.priority,createdAt:new Date().toISOString(),trackResponseRate:L.trackResponseRate,responseRate:L.trackResponseRate?0:void 0,subtasks:(L.subtasks||[]).map(Q=>({id:`sub-${Math.random().toString(36).substr(2,9)}`,title:Q.title,isCompleted:!1,order:Q.order}))};k([X,...e]),u(L.category)},Le=e.filter(z=>{if(!(z.category===a))return!1;if(s)return!0;const X=n.find(Q=>Q.title===z.title);return X&&l&&X.roleIds.length>0?X.roleIds.includes(l):!0}),M=n.filter(z=>s||!l||z.roleIds.length===0?!0:z.roleIds.includes(l)),F=z=>{switch(z){case"todo":return"未着手";case"in_progress":return"進行中";case"completed":return"完了";case"on_hold":return"保留"}},V=()=>{m({category:a,status:"todo",priority:"medium",title:"",description:"",dueDate:"",trackResponseRate:a==="union_member",responseRate:a==="union_member"?0:void 0})},Y=z=>{if(z.preventDefault(),!(!f||!f.title)){if(f.id){const L=e.map(X=>X.id===f.id?{...X,...f}:X);k(L)}else{const L={...f,id:Date.now().toString(),createdAt:new Date().toISOString()};k([L,...e])}j(f.id?"タスクを更新しました":"タスクを作成しました"),m(null)}};return o.jsxs("div",{className:"task-page",children:[o.jsxs("header",{className:"page-header",children:[o.jsx("h1",{children:"タスク管理"}),o.jsxs("div",{className:"header-actions",children:[!s&&l&&o.jsxs("span",{className:"filter-status",children:[o.jsx(Zd,{size:14}),"役職フィルタ有効"]}),o.jsxs("button",{className:"primary-btn",onClick:V,children:[o.jsx(vt,{size:18}),"手動で追加"]})]})]}),o.jsxs("section",{className:`accordion-section templates-section ${d?"open":""}`,children:[o.jsxs("div",{className:"section-header",onClick:()=>g(!d),children:[o.jsx(bg,{size:20}),o.jsx("h3",{children:"クイック作成 (定型タスク)"}),d?o.jsx(Cn,{size:20}):o.jsx($t,{size:20})]}),d&&o.jsxs("div",{className:"section-content template-grid",children:[M.map(z=>o.jsxs("button",{className:"template-card",onClick:()=>lt(z.id),children:[o.jsxs("div",{className:`tpl-icon ${z.category}`,children:[z.category==="union_member"&&"🔴",z.category==="administrative"&&"🔵",z.category==="committee"&&"🟢"]}),o.jsxs("div",{className:"tpl-text",children:[o.jsx("span",{className:"tpl-title",children:z.title}),o.jsx("span",{className:"tpl-desc",children:z.description})]})]},z.id)),M.length===0&&o.jsx("p",{className:"empty-hint",children:"この役職の定型タスクはありません。設定から追加できます。"})]})]}),o.jsxs("nav",{className:"tab-nav",children:[o.jsx("button",{className:`tab-btn ${a==="union_member"?"active":""}`,onClick:()=>u("union_member"),children:"🔴 組合員関連タスク"}),o.jsx("button",{className:`tab-btn ${a==="administrative"?"active":""}`,onClick:()=>u("administrative"),children:"🔵 事務タスク"}),o.jsx("button",{className:`tab-btn ${a==="committee"?"active":""}`,onClick:()=>u("committee"),children:"🟢 委員タスク"})]}),o.jsx("div",{className:"task-list",children:Le.length>0?Le.map(z=>o.jsxs("div",{className:`task-card ${z.priority} ${z.status}`,children:[o.jsxs("div",{className:"task-main",children:[o.jsxs("div",{className:"task-info",children:[o.jsxs("div",{className:"task-title-row",children:[o.jsx("span",{className:"task-title",children:z.title}),o.jsx("span",{className:`priority-badge ${z.priority}`,children:z.priority==="high"?"優先：高":z.priority==="medium"?"優先：中":"優先：低"})]}),o.jsx("p",{className:"task-desc",children:z.description})]}),o.jsxs("div",{className:"task-status-control",children:[o.jsx("span",{className:"status-label",children:F(z.status)}),o.jsx("div",{className:"status-btns",children:["todo","in_progress","completed"].map(L=>o.jsx("button",{className:`status-dot-btn ${z.status===L?"active":""} ${L}`,onClick:()=>R(z.id,L),title:F(L),"aria-label":F(L),children:o.jsx("span",{className:"status-dot-visual"})},L))})]})]}),z.trackResponseRate&&z.status!=="completed"&&o.jsxs("div",{className:"response-rate-area",children:[o.jsxs("div",{className:"rate-header",children:[o.jsx("span",{children:"回答率の更新"}),o.jsxs("span",{className:`rate-value ${z.responseRate!==void 0&&z.responseRate<50?"warning":""}`,children:[z.responseRate||0,"%"]})]}),o.jsx("div",{className:"rate-btns",children:[0,20,40,60,80,100].map(L=>o.jsxs("button",{className:`rate-btn ${z.responseRate===L?"active":""}`,onClick:()=>I(z.id,L),children:[L,"%"]},L))})]}),z.subtasks&&z.subtasks.length>0&&o.jsxs("div",{className:"subtasks-area",children:[o.jsx("div",{className:"subtask-header",children:o.jsxs("span",{children:["サブタスク (",z.subtasks.filter(L=>L.isCompleted).length,"/",z.subtasks.length,")"]})}),o.jsx("div",{className:"subtasks-list",children:z.subtasks.sort((L,X)=>L.order-X.order).map(L=>o.jsxs("div",{className:`subtask-item ${L.isCompleted?"completed":""}`,onClick:()=>G(z.id,L.id),children:[o.jsx("div",{className:`subtask-check ${L.isCompleted?"checked":""}`,children:L.isCompleted&&o.jsx(wc,{size:10})}),o.jsx("span",{className:"subtask-title",children:L.title})]},L.id))})]}),o.jsxs("div",{className:"task-footer",children:[o.jsxs("div",{className:"task-meta",children:[o.jsx(ro,{size:14}),h===z.id?o.jsxs("div",{className:"date-edit-group",children:[o.jsx("input",{type:"date",value:z.dueDate||"",onChange:L=>ne(z.id,L.target.value),className:"date-input",autoFocus:!0}),o.jsx("button",{className:"small-done-btn",onClick:()=>C(null),children:o.jsx(wc,{size:12})})]}):o.jsxs("div",{className:"date-display",onClick:()=>C(z.id),children:[o.jsxs("span",{children:["期限: ",z.dueDate||"未設定"]}),o.jsx("button",{className:"edit-btn-tiny",title:"期限を設定",children:o.jsx(Nr,{size:12})})]}),o.jsxs("button",{className:"memo-btn-tiny",onClick:()=>b(z.id),children:[o.jsx(hr,{size:12}),"メモ (",S.filter(L=>L.linkedTaskId===z.id).length,")"]})]}),o.jsxs("div",{className:"task-actions",children:[o.jsx("button",{className:"icon-btn",title:"詳細編集",onClick:()=>m(z),children:o.jsx(Nr,{size:16})}),o.jsx("button",{className:"icon-btn",title:"複製",onClick:()=>ft(z),children:o.jsx(dg,{size:16})}),o.jsx("button",{className:"icon-btn delete",onClick:()=>H(z.id),title:"削除",children:o.jsx(qe,{size:16})})]})]})]},z.id)):o.jsx("div",{className:"empty-state",children:"該当するタスクはありません。"})}),f&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-content",children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{children:f.id?"タスクを編集":"新規タスク作成"}),o.jsx("button",{className:"close-btn",onClick:()=>m(null),children:o.jsx(fn,{size:20})})]}),o.jsxs("form",{onSubmit:Y,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"タイトル"}),o.jsx("input",{type:"text",required:!0,value:f.title||"",onChange:z=>m({...f,title:z.target.value}),placeholder:"例：〇〇改善案の意見集約"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"説明"}),o.jsx("textarea",{rows:3,value:f.description||"",onChange:z=>m({...f,description:z.target.value}),placeholder:"詳細なメモを入力..."})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"カテゴリ"}),o.jsxs("select",{value:f.category||"union_member",onChange:z=>m({...f,category:z.target.value}),children:[o.jsx("option",{value:"union_member",children:"🔴 組合員関連"}),o.jsx("option",{value:"administrative",children:"🔵 事務タスク"}),o.jsx("option",{value:"committee",children:"🟢 委員タスク"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"優先度"}),o.jsxs("select",{value:f.priority||"medium",onChange:z=>m({...f,priority:z.target.value}),children:[o.jsx("option",{value:"high",children:"高"}),o.jsx("option",{value:"medium",children:"中"}),o.jsx("option",{value:"low",children:"低"})]})]})]}),f.category==="union_member"&&o.jsx("div",{className:"form-group checkbox-group",children:o.jsxs("label",{className:"checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:f.trackResponseRate||!1,onChange:z=>m({...f,trackResponseRate:z.target.checked,responseRate:z.target.checked?f.responseRate||0:void 0})}),"回答率を記録してフォローする"]})}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"期限"}),o.jsx("input",{type:"date",value:f.dueDate||"",onChange:z=>m({...f,dueDate:z.target.value})})]}),f.trackResponseRate&&o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"現在の回答率 (%)"}),o.jsx("input",{type:"number",min:"0",max:"100",step:"10",value:f.responseRate||0,onChange:z=>m({...f,responseRate:parseInt(z.target.value)})})]})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{type:"button",className:"cancel-btn",onClick:()=>m(null),children:"キャンセル"}),o.jsx("button",{type:"submit",className:"save-btn",children:"保存する"})]})]})]})}),w&&o.jsx(Zs,{memos:S.filter(z=>z.linkedTaskId===w),initialMemoId:(q=S.find(z=>z.linkedTaskId===w))==null?void 0:q.id,defaultLinkedTaskId:w,onSave:z=>{const X=[...S.filter(Q=>Q.linkedTaskId!==w),...z];p(X),P.saveMemos(X)},onClose:()=>b(null)}),o.jsx(Co,{...v}),o.jsx(lf,{toasts:_,onDismiss:D}),o.jsx("style",{children:`
        .task-page {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        /* アコーディオン共通スタイル */
        .accordion-section {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .accordion-section .section-header {
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: background-color 0.2s;
          user-select: none;
        }

        .accordion-section .section-header:hover {
          background-color: rgba(255, 255, 255, 0.03);
        }

        .accordion-section .section-header h3 {
          flex: 1;
          margin: 0;
          font-size: 1rem;
          color: var(--text-main);
        }

        .accordion-section .section-content {
          padding: 0 1.25rem 1.25rem;
          border-top: 1px solid #334155;
          padding-top: 1.25rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .filter-status {
          font-size: 0.75rem;
          color: var(--primary);
          background-color: rgba(59, 130, 246, 0.1);
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
        }

        .header-actions .primary-btn {
          background-color: var(--primary);
          color: white;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .tpl-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          overflow: hidden;
        }

        .tpl-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.4;
        }

        .tpl-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .empty-hint {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-style: italic;
          padding: 1rem;
          text-align: center;
          width: 100%;
        }

        .template-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .template-card {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          text-align: left;
          transition: all 0.2s ease;
          width: 100%;
        }

        .template-card:hover {
          background-color: #334155;
          transform: translateY(-2px);
        }

        .tpl-icon {
          font-size: 1.25rem;
        }

        .template-card span {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .tab-nav {
          display: flex;
          gap: 1rem;
          border-bottom: 1px solid #334155;
          padding-bottom: 0.5rem;
        }

        .tab-btn {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          color: var(--text-muted);
          font-weight: 600;
          position: relative;
        }

        .tab-btn.active {
          color: var(--text-main);
        }

        .tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--primary);
        }

        .task-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .task-card {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .task-card.high { border-left: 4px solid var(--danger); }
        .task-card.medium { border-left: 4px solid var(--warning); }
        .task-card.completed { opacity: 0.6; }

        .task-main {
          display: flex;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .task-info {
          flex: 1;
        }

        .task-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .task-title {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .priority-badge {
          font-size: 0.625rem;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .priority-badge.high { background-color: rgba(239, 68, 68, 0.15); color: var(--danger); }
        .priority-badge.medium { background-color: rgba(245, 158, 11, 0.15); color: var(--warning); }
        .priority-badge.low { background-color: rgba(148, 163, 184, 0.15); color: var(--text-muted); }

        .task-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
        }

        .task-status-control {
          text-align: right;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 100px;
        }

        .status-label {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .status-btns {
          display: flex;
          gap: 0.25rem;
          justify-content: flex-end;
        }

        /* タップ領域を44px確保しつつ視覚的ドットは小さく */
        .status-dot-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .status-dot-btn:hover {
          background-color: rgba(255, 255, 255, 0.08);
        }

        .status-dot-visual {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid transparent;
          background-color: transparent;
          display: block;
          transition: all 0.2s ease;
        }

        .status-dot-btn.todo .status-dot-visual { border-color: #475569; }
        .status-dot-btn.in_progress .status-dot-visual { border-color: var(--warning); }
        .status-dot-btn.completed .status-dot-visual { border-color: var(--success); }

        .status-dot-btn.active.todo .status-dot-visual { background-color: #475569; }
        .status-dot-btn.active.in_progress .status-dot-visual { background-color: var(--warning); }
        .status-dot-btn.active.completed .status-dot-visual { background-color: var(--success); }

        /* Subtasks Area */
        .subtasks-area {
          background-color: rgba(255, 255, 255, 0.02);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .subtask-header {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }
        .subtasks-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .subtask-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          font-size: 0.85rem;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }
        .subtask-item:hover { background-color: rgba(255, 255, 255, 0.05); }
        .subtask-item.completed { color: var(--text-muted); text-decoration: line-through; opacity: 0.7; }
        .subtask-check {
          width: 14px;
          height: 14px;
          border: 1px solid #475569;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .subtask-check.checked {
          background-color: var(--success);
          border-color: var(--success);
          color: white;
        }
        .subtask-title { flex: 1; }

        .response-rate-area {
          background-color: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          border-radius: 8px;
        }

        .rate-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 0.75rem;
          color: var(--text-muted);
        }

        .rate-value.warning {
          color: var(--danger);
          font-weight: 700;
        }

        .rate-btns {
          display: flex;
          justify-content: space-between;
          gap: 0.4rem;
        }

        .rate-btn {
          flex: 1;
          background-color: #334155;
          border: none;
          color: var(--text-main);
          padding: 0.4rem 0;
          border-radius: 4px;
          font-size: 0.7rem;
          transition: all 0.1s ease;
        }

        .rate-btn:hover { background-color: #475569; }
        .rate-btn.active { background-color: var(--primary); font-weight: 700; }

        .form-group.checkbox-group {
          margin-bottom: 1rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          color: var(--text-main);
        }

        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.75rem;
          border-top: 1px solid #334155;
        }

        .task-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .task-actions {
          display: flex;
          gap: 0.5rem;
        }

        .icon-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .icon-btn:hover { background-color: #334155; color: var(--text-main); }
        .icon-btn.delete:hover { color: var(--danger); }

        .date-display {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .date-display:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }

        .edit-btn-tiny {
          background: none;
          border: none;
          color: var(--primary);
          padding: 0;
          display: flex;
          align-items: center;
          opacity: 0.6;
        }

        .memo-btn-tiny {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #334155;
          color: var(--text-muted);
          font-size: 0.65rem;
          padding: 2px 6px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .memo-btn-tiny:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--text-main);
          border-color: var(--primary);
        }

        .date-edit-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .date-input {
          background-color: #1e293b;
          border: 1px solid var(--primary);
          color: white;
          border-radius: 4px;
          padding: 2px 4px;
          font-size: 0.75rem;
          font-family: inherit;
        }

        .small-done-btn {
          background-color: var(--primary);
          color: white;
          border: none;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          background-color: var(--bg-card);
          border: 1px solid #334155;
          border-radius: 16px;
          width: 100%;
          max-width: 500px;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          font-size: 1.25rem;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group label {
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .form-group input, .form-group textarea, .form-group select {
          background-color: #0f172a;
          border: 1px solid #334155;
          color: white;
          padding: 0.75rem;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
        }

        .form-group input:focus, .form-group textarea:focus, .form-group select:focus {
          outline: none;
          border-color: var(--primary);
        }

        .modal-footer {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .modal-footer button {
          flex: 1;
          padding: 0.75rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1rem;
        }

        .modal-footer .save-btn {
          background-color: var(--primary);
          color: white;
          border: none;
        }

        .modal-footer .cancel-btn {
          background-color: transparent;
          border: 1px solid #334155;
          color: var(--text-muted);
        }

        @media (max-width: 640px) {
          .template-grid { grid-template-columns: 1fr !important; }
          .rate-btns { flex-wrap: wrap; gap: 0.5rem; }
          .rate-btn { flex: 1 1 30%; font-size: 0.8rem; padding: 0.6rem 0; }
          .task-title { font-size: 1rem; }
          .page-header h1 { font-size: 1.5rem; }
          .modal-content { padding: 1.5rem; border-radius: 12px; }
        }
      `})]})},Nc=({routes:e,onChange:t})=>{const n=y.useMemo(()=>{const u=P.getEvents().filter(h=>h.expense&&h.expense.routes.length>0).flatMap(h=>h.expense.routes),f=[],m=new Set;for(const h of u){const C=`${h.from}-${h.to}-${h.amount}`;m.has(C)||(f.push(h),m.add(C))}return f.slice(0,3)},[e]),r=()=>{const a={id:Date.now().toString(),from:"",to:"",amount:0,isRoundTrip:!0,transportType:"public"};t([...e,a])},l=a=>{const u={...a,id:Date.now().toString()};t([...e,u])},i=(a,u)=>{t(e.map(f=>f.id===a?{...f,...u}:f))},s=a=>{t(e.filter(u=>u.id!==a))},c=e.reduce((a,u)=>a+u.amount*(u.isRoundTrip?2:1),0);return o.jsxs("div",{className:"travel-expense-form",children:[o.jsxs("div",{className:"expense-header",children:[o.jsxs("label",{children:[o.jsx(Gs,{size:14})," 旅費精算"]}),o.jsxs("span",{className:"total-badge",children:["合計: ¥",c.toLocaleString()]})]}),n.length>0&&o.jsxs("div",{className:"recent-routes",children:[o.jsx("span",{className:"recent-label",children:"履歴からコピー:"}),o.jsx("div",{className:"recent-list",children:n.map(a=>o.jsxs("button",{className:"copy-chip",onClick:()=>l(a),children:[o.jsx(es,{size:10})," ",a.from,"→",a.to," (¥",a.amount.toLocaleString(),")"]},a.id))})]}),o.jsx("div",{className:"routes-list",children:e.map(a=>o.jsxs("div",{className:"route-item",children:[o.jsxs("div",{className:"route-inputs",children:[o.jsx("input",{type:"text",placeholder:"出発",value:a.from,onChange:u=>i(a.id,{from:u.target.value})}),o.jsx("span",{className:"arrow",children:"→"}),o.jsx("input",{type:"text",placeholder:"到着",value:a.to,onChange:u=>i(a.id,{to:u.target.value})})]}),o.jsxs("div",{className:"route-meta",children:[o.jsxs("div",{className:"amount-box",children:[o.jsx("span",{children:"¥"}),o.jsx("input",{type:"number",value:a.amount||"",onChange:u=>i(a.id,{amount:parseInt(u.target.value)||0})})]}),o.jsxs("div",{className:"trip-toggle",children:[o.jsx("button",{className:a.isRoundTrip?"":"active",onClick:()=>i(a.id,{isRoundTrip:!1}),children:"片道"}),o.jsx("button",{className:a.isRoundTrip?"active":"",onClick:()=>i(a.id,{isRoundTrip:!0}),children:"往復"})]}),o.jsx("button",{className:"del-btn",onClick:()=>s(a.id),children:o.jsx(qe,{size:14})})]})]},a.id))}),o.jsxs("button",{className:"add-btn",onClick:r,children:[o.jsx(vt,{size:14})," 経路を追加"]}),o.jsx("style",{children:`
        .travel-expense-form { margin-top: 1rem; border-top: 1px solid #334155; padding-top: 1rem; }
        .expense-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
        .expense-header label { font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem; font-weight: 700; }
        .total-badge { background-color: var(--success); color: white; padding: 2px 8px; border-radius: 4px; font-weight: 700; font-size: 0.85rem; }

        .recent-routes { margin-bottom: 1rem; }
        .recent-label { font-size: 0.7rem; color: var(--text-muted); display: block; margin-bottom: 0.4rem; }
        .recent-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .copy-chip { background-color: #334155; border: 1px solid #475569; color: var(--text-muted); font-size: 0.7rem; padding: 2px 8px; border-radius: 20px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; }
        .copy-chip:hover { background-color: #475569; color: var(--text-main); }

        .routes-list { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 0.75rem; }
        .route-item { background-color: rgba(255, 255, 255, 0.03); border: 1px solid #334155; border-radius: 8px; padding: 0.75rem; }
        .route-inputs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .route-inputs input { background: none; border: none; border-bottom: 1px solid #334155; color: white; flex: 1; font-size: 0.85rem; padding: 2px 0; }
        .route-inputs input:focus { border-bottom-color: var(--primary); outline: none; }
        .arrow { color: var(--text-muted); font-size: 0.8rem; }

        .route-meta { display: flex; align-items: center; gap: 1rem; }
        .amount-box { display: flex; align-items: center; gap: 4px; background-color: #1e293b; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; width: 100px; }
        .amount-box input { background: none; border: none; color: white; width: 100%; text-align: right; }
        .amount-box input:focus { outline: none; }

        .trip-toggle { display: flex; background-color: #1e293b; border-radius: 4px; overflow: hidden; }
        .trip-toggle button { background: none; border: none; color: var(--text-muted); font-size: 0.7rem; padding: 4px 10px; cursor: pointer; }
        .trip-toggle button.active { background-color: var(--primary); color: white; }
        .del-btn { margin-left: auto; color: var(--text-muted); background: none; border: none; }
        .del-btn:hover { color: var(--danger); }

        .add-btn { width: 100%; background: none; border: 1px dashed #475569; color: var(--text-muted); padding: 0.5rem; border-radius: 6px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .add-btn:hover { background-color: rgba(255, 255, 255, 0.03); color: var(--text-main); border-style: solid; }
      `})]})},t0=()=>{var na;const[e,t]=y.useState([]),[n,r]=y.useState([]),[l,i]=y.useState([]),[s,c]=y.useState(""),[a,u]=y.useState(!1),[f,m]=y.useState(new Date),[h,C]=y.useState(new Date().toLocaleDateString("sv")),[w,b]=y.useState(null),[S,p]=y.useState({}),[d,g]=y.useState(!1),[v,E]=y.useState(null),[_,j]=y.useState([]),[D,k]=y.useState([]),[R,I]=y.useState("schedule"),[G,H]=y.useState(null),[ne,ft]=y.useState(""),[lt,Le]=y.useState([]),[M,F]=y.useState(null),[V,Y]=y.useState({}),[q,z]=y.useState("list"),{confirmDialogProps:L,confirm:X}=Eo();y.useEffect(()=>{t(P.getEvents()),r(P.getTasks()),i(P.getMeetingDefinitions()),j(P.getTravelExpenses()),k(P.getMemos()),Le(P.getRoles());const x=P.getCurrentRoleId();c(x),ft(x),u(P.getShowAllItems())},[]);const Q=x=>{t(x),P.saveEvents(x)},Te=f.getFullYear(),Be=f.getMonth(),Zr=new Date(Te,Be,1).getDay(),N=new Date(Te,Be+1,0).getDate(),U=()=>m(new Date(Te,Be-1,1)),K=()=>m(new Date(Te,Be+1,1)),ve=[];for(let x=0;x<Zr;x++)ve.push(null);for(let x=1;x<=N;x++)ve.push(x);const Ye=x=>`${Te}-${String(Be+1).padStart(2,"0")}-${String(x).padStart(2,"0")}`,Ie=async x=>{await X({title:"予定を削除",message:"この予定を削除しますか？この操作は元に戻せません。",confirmLabel:"削除する"})&&(Q(e.filter(B=>B.id!==x)),w===x&&b(null))},Rt=x=>{b(x.id),p({...x})},qs=()=>{if(!S.title||!w)return;let x=S.expense;x&&(x.totalAmount=x.routes.reduce((B,ee)=>B+ee.amount*(ee.isRoundTrip?2:1),0));const O=e.map(B=>B.id===w?{...B,...S,expense:x}:B);Q(O),b(null),S.date&&S.category&&ta(S.date,S.category)},jn=x=>e.filter(O=>{if(O.date!==x)return!1;if(a||!ne)return!0;const B=l.find(ee=>ee.name===O.title);return B&&ne&&B.roleIds&&B.roleIds.length>0?B.roleIds.includes(ne):!0}),ea=x=>n.filter(O=>{if(O.dueDate!==x)return!1;if(a||!ne)return!0;const ee=P.getTaskDefinitions().find(we=>we.title===O.title);return ee&&ne&&ee.roleIds&&ee.roleIds.length>0?ee.roleIds.includes(ne):!0}),sf=()=>{const x=jn(h),O=ea(h),B=x.filter(W=>W.startTime&&W.endTime),ee=x.filter(W=>!W.startTime||!W.endTime),we=W=>{const[je,kt]=W.split(":").map(Number);return je*60+kt};return o.jsxs("div",{className:"timetable-container",children:[(ee.length>0||O.length>0)&&o.jsxs("div",{className:"timetable-all-day",children:[o.jsx("span",{className:"all-day-label",children:"終日 / 時間指定なし"}),o.jsxs("div",{className:"all-day-items",children:[ee.map(W=>o.jsx("div",{className:`event-item-mini ${W.category} ${W.status==="completed"?"completed":""}`,onClick:()=>{b(W.id),p({...W})},children:o.jsx("span",{className:"title",children:W.title})},W.id)),O.map(W=>o.jsx("div",{className:`task-item-mini ${W.status==="completed"?"completed":""}`,onClick:()=>{F(W.id),Y({...W})},children:o.jsx("span",{className:"title",children:W.title})},W.id))]})]}),o.jsxs("div",{className:"timetable-grid",children:[o.jsx("div",{className:"time-labels",children:Array.from({length:25}).map((W,je)=>o.jsxs("div",{className:"time-label",style:{top:`${je*50}px`},children:[je,":00"]},je))}),Array.from({length:25}).map((W,je)=>o.jsx("div",{className:"time-grid-line",style:{top:`${je*50}px`}},je)),B.map(W=>{const je=we(W.startTime),kt=we(W.endTime),Xe=je/60*50,bn=(kt-je)/60*50;return o.jsxs("div",{className:`timetable-event ${W.category} ${W.status==="completed"?"completed":""}`,style:{top:`${Xe}px`,height:`${Math.max(bn,35)}px`},onClick:()=>{b(W.id),p({...W})},children:[o.jsx("span",{className:"title",children:W.title}),o.jsxs("span",{className:"time",children:[o.jsx(ro,{size:10})," ",W.startTime," - ",W.endTime]})]},W.id)})]})]})},af=()=>{if(!h)return;const x={id:Date.now().toString(),title:"新規予定",date:h,category:"other",status:"todo",expense:{routes:[],totalAmount:0}};Q([...e,x]),Rt(x)},cf=x=>{if(!h)return;const O={id:Date.now().toString(),title:x.name,memo:x.content,date:h,category:"meeting",status:"todo",expense:{routes:[],totalAmount:0}};Q([...e,O]),g(!1),Rt(O),ta(O.date,O.category)},ta=(x,O)=>{if(O!=="meeting"&&O!=="conference")return;const B=new Date(x);B.setDate(B.getDate()+7);const ee=B.getFullYear(),we=String(B.getMonth()+1).padStart(2,"0"),W=String(B.getDate()).padStart(2,"0"),je=`${ee}-${we}-${W}`,kt=P.getTasks();if(!kt.some(bn=>bn.title==="旅費精算"&&bn.dueDate===je)){const bn={id:`auto-${Date.now()}`,title:"旅費精算",description:`${x} の${O==="meeting"?"打ち合わせ":"会議"}に伴う精算`,category:"administrative",status:"todo",priority:"medium",dueDate:je,createdAt:new Date().toISOString()},ra=[...kt,bn];r(ra),P.saveTasks(ra)}},uf=(x,O)=>{const ee=[...D.filter(we=>we.linkedEventId!==x&&we.linkedTaskId!==x),...O];k(ee),P.saveMemos(ee)},df=()=>{if(!h)return;const x={id:Date.now().toString(),title:"新規移動",date:h,routes:[],totalAmount:0},O=[..._,x];j(O),P.saveTravelExpenses(O)},ff=async x=>{if(await X({title:"旅費データを削除",message:"この旅費データを削除しますか？この操作は元に戻せません。",confirmLabel:"削除する"})){const B=_.filter(ee=>ee.id!==x);j(B),P.saveTravelExpenses(B),G===x&&H(null)}},pf=(x,O)=>{const B=O.reduce((we,W)=>we+W.amount*(W.isRoundTrip?2:1),0),ee=_.map(we=>we.id===x?{...we,routes:O,totalAmount:B}:we);j(ee),P.saveTravelExpenses(ee)},mf=(x,O)=>{const B=_.map(ee=>ee.id===x?{...ee,title:O}:ee);j(B),P.saveTravelExpenses(B)},hf=x=>{F(x.id),Y({...x})},gf=()=>{if(!V.title||!M)return;const x=n.map(O=>O.id===M?{...O,...V}:O);r(x),P.saveTasks(x),F(null)},vf=async x=>{if(await X({title:"タスクを削除",message:"このタスクを削除しますか？この操作は元に戻せません。",confirmLabel:"削除する"})){const B=n.filter(ee=>ee.id!==x);r(B),P.saveTasks(B),M===x&&F(null)}};return o.jsxs("div",{className:"calendar-page",children:[o.jsxs("header",{className:"page-header",children:[o.jsx("h1",{children:"スケジュール管理"}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("div",{className:"filter-area",children:[o.jsx(Zd,{size:16}),o.jsxs("select",{value:ne,onChange:x=>ft(x.target.value),className:"role-filter-select",children:[o.jsx("option",{value:"",children:"（全表示 / フィルタ解除）"}),lt.map(x=>o.jsx("option",{value:x.id,children:x.id===s?`🚩 自分の役職 (${x.name})`:`${x.name} のみ表示`},x.id))]})]}),o.jsxs("div",{className:"month-nav",children:[o.jsx("button",{className:"icon-btn",onClick:U,children:o.jsx(ag,{})}),o.jsxs("span",{className:"current-month-label",children:[Te,"年 ",Be+1,"月"]}),o.jsx("button",{className:"icon-btn",onClick:K,children:o.jsx($t,{})})]})]})]}),o.jsxs("div",{className:"calendar-layout",children:[o.jsx("div",{className:"calendar-main",children:o.jsxs("div",{className:"calendar-grid-container",children:[o.jsx("div",{className:"calendar-header",children:["日","月","火","水","木","金","土"].map(x=>o.jsx("div",{className:"weekday-label",children:x},x))}),o.jsx("div",{className:"calendar-grid",children:ve.map((x,O)=>{const B=x?Ye(x):"",ee=x?jn(B):[],we=x?ea(B):[];return o.jsx("div",{className:`calendar-day ${x===null?"empty":""} ${x&&Ye(x)===h?"selected":""} ${x&&Ye(x)===new Date().toLocaleDateString("sv")?"today":""}`,onClick:()=>x&&C(Ye(x)),children:x&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"day-number",children:x}),o.jsx("div",{className:"day-events",children:(()=>{const W=[...ee.map(Xe=>({id:Xe.id,cls:`event-dot ${Xe.category} ${Xe.status==="completed"?"completed":""}`})),...we.map(Xe=>({id:Xe.id,cls:`task-dot ${Xe.status==="completed"?"completed":""}`}))],je=W.slice(0,3),kt=W.length-je.length;return o.jsxs(o.Fragment,{children:[je.map(Xe=>o.jsx("div",{className:Xe.cls},Xe.id)),kt>0&&o.jsxs("span",{className:"day-more",children:["+",kt]})]})})()})]})},O)})})]})}),o.jsx("div",{className:"calendar-side",children:h?o.jsxs("div",{className:"detail-panel",children:[o.jsxs("div",{className:"detail-tabs",children:[o.jsx("button",{className:`detail-tab-btn ${R==="schedule"?"active":""}`,onClick:()=>I("schedule"),children:"予定・タスク"}),o.jsx("button",{className:`detail-tab-btn ${R==="travel"?"active":""}`,onClick:()=>I("travel"),children:"旅費精算"})]}),R==="travel"?o.jsxs("div",{className:"travel-tab-content",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h3",{children:[h," の旅費一覧"]}),o.jsxs("button",{className:"small-primary-btn",onClick:df,children:[o.jsx(vt,{size:16})," 追加"]})]}),o.jsxs("div",{className:"daily-travel-list",children:[_.filter(x=>x.date===h).map(x=>o.jsx("div",{className:`travel-item-card ${G===x.id?"editing":""}`,children:G===x.id?o.jsxs("div",{className:"travel-edit-mode",children:[o.jsxs("div",{className:"edit-header",children:[o.jsx("input",{type:"text",value:x.title,onChange:O=>mf(x.id,O.target.value),placeholder:"移動の目的など",className:"travel-title-input",autoFocus:!0}),o.jsxs("button",{className:"done-btn",onClick:()=>H(null),children:[o.jsx(Tl,{size:16})," 完了"]})]}),o.jsx(Nc,{routes:x.routes,onChange:O=>pf(x.id,O)})]}):o.jsxs("div",{className:"travel-display-mode",onClick:()=>H(x.id),children:[o.jsxs("div",{className:"travel-header",children:[o.jsx("strong",{children:x.title||"（無題の移動）"}),o.jsxs("span",{className:"total",children:["¥",(x.totalAmount||0).toLocaleString()]}),o.jsx("button",{className:"del-btn-tiny",onClick:O=>{O.stopPropagation(),ff(x.id)},children:o.jsx(qe,{size:12})})]}),o.jsxs("div",{className:"travel-routes",children:[x.routes.map((O,B)=>o.jsxs("div",{className:"route-tag",children:[O.from," → ",O.to]},B)),x.routes.length===0&&o.jsx("span",{className:"empty-route",children:"タップして経路を追加"})]})]})},x.id)),_.filter(x=>x.date===h).length===0&&o.jsx("p",{className:"empty-hint",children:"この日の旅費データはありません。"})]})]}):o.jsxs("div",{className:"schedule-tab-content",children:[o.jsxs("div",{className:"section-header",children:[o.jsxs("h3",{children:[h," の予定・タスク"]}),o.jsxs("div",{className:"add-actions",children:[o.jsxs("div",{className:"view-mode-toggle",children:[o.jsx("button",{className:`view-mode-btn ${q==="list"?"active":""}`,onClick:()=>z("list"),title:"リスト表示",children:o.jsx(gg,{size:16})}),o.jsx("button",{className:`view-mode-btn ${q==="timetable"?"active":""}`,onClick:()=>z("timetable"),title:"タイムテーブル表示",children:o.jsx(qn,{size:16})})]}),o.jsxs("button",{className:"small-primary-btn",onClick:()=>g(!0),children:[o.jsx(ef,{size:16})," 会議体"]}),o.jsxs("button",{className:"small-primary-btn",onClick:af,children:[o.jsx(vt,{size:16})," 追加"]})]})]}),q==="timetable"?sf():o.jsxs("div",{className:"event-list",children:[jn(h).map(x=>{var O;return o.jsx("div",{className:"event-item-container",children:w===x.id?o.jsxs("div",{className:"event-edit-form",children:[o.jsx("input",{className:"edit-title",value:S.title||"",onChange:B=>p({...S,title:B.target.value}),placeholder:"予定タイトル"}),o.jsxs("div",{className:"edit-row",children:[o.jsx(ro,{size:16}),o.jsx("input",{type:"time",value:S.startTime||"",onChange:B=>p({...S,startTime:B.target.value})}),o.jsx("span",{children:"〜"}),o.jsx("input",{type:"time",value:S.endTime||"",onChange:B=>p({...S,endTime:B.target.value})})]}),o.jsxs("div",{className:"edit-row",children:[o.jsx(hr,{size:16}),o.jsxs("select",{className:"edit-status",value:S.status||"todo",onChange:B=>p({...S,status:B.target.value}),children:[o.jsx("option",{value:"todo",children:"未着手"}),o.jsx("option",{value:"in_progress",children:"進行中"}),o.jsx("option",{value:"completed",children:"完了"}),o.jsx("option",{value:"on_hold",children:"保留"})]})]}),o.jsxs("div",{className:"edit-row",children:[o.jsx(es,{size:16}),o.jsx("input",{className:"edit-loc",value:S.location||"",onChange:B=>p({...S,location:B.target.value}),placeholder:"場所"})]}),o.jsxs("select",{className:"edit-cat",value:S.category||"other",onChange:B=>p({...S,category:B.target.value}),children:[o.jsx("option",{value:"meeting",children:"打ち合わせ"}),o.jsx("option",{value:"negotiation",children:"交渉"}),o.jsx("option",{value:"business_trip",children:"出張"}),o.jsx("option",{value:"conference",children:"会議"}),o.jsx("option",{value:"training",children:"研修"}),o.jsx("option",{value:"other",children:"その他"})]}),o.jsx(Nc,{routes:((O=S.expense)==null?void 0:O.routes)||[],onChange:B=>p({...S,expense:{routes:B,totalAmount:0}})}),o.jsxs("div",{className:"edit-actions",children:[o.jsxs("button",{className:"save-btn",onClick:qs,children:[o.jsx(Tl,{size:16})," 保存"]}),o.jsxs("button",{className:"delete-btn-action",onClick:()=>Ie(x.id),children:[o.jsx(qe,{size:16})," 削除"]}),o.jsxs("button",{className:"cancel-btn",onClick:()=>b(null),children:[o.jsx(fn,{size:16})," キャンセル"]})]})]}):o.jsxs("div",{className:`event-display-card ${x.status==="completed"?"completed":""}`,onClick:()=>Rt(x),children:[o.jsxs("div",{className:"ev-header",children:[o.jsxs("div",{className:"ev-left",children:[o.jsx("span",{className:`ev-cat-tag ${x.category}`,children:x.category}),x.status==="completed"&&o.jsx("span",{className:"completed-badge",children:"完了"})]}),o.jsx("span",{className:"ev-time",children:x.startTime||""})]}),o.jsx("h4",{className:"ev-title",children:x.title}),x.location&&o.jsxs("div",{className:"ev-loc",children:[o.jsx(es,{size:12})," ",x.location]}),x.expense&&x.expense.totalAmount>0&&o.jsxs("div",{className:"ev-expense",children:[o.jsx(Gs,{size:12}),o.jsxs("span",{children:["旅費: ¥",x.expense.totalAmount.toLocaleString()]})]}),o.jsx("div",{className:"ev-memos-row",children:o.jsxs("button",{className:"memo-btn-tiny",onClick:B=>{B.stopPropagation(),E(x.id)},children:[o.jsx(hr,{size:12}),"メモ (",D.filter(B=>B.linkedEventId===x.id).length,")"]})}),o.jsx("div",{className:"ev-hover-hint",children:"タップで編集"})]})},x.id)}),n.filter(x=>x.dueDate===h).map(x=>o.jsx("div",{className:"event-item-container",children:M===x.id?o.jsxs("div",{className:"event-edit-form task-edit",children:[o.jsx("input",{className:"edit-title",value:V.title||"",onChange:O=>Y({...V,title:O.target.value}),placeholder:"タスク名"}),o.jsxs("div",{className:"edit-row",children:[o.jsx(hr,{size:16}),o.jsxs("select",{className:"edit-status",value:V.status||"todo",onChange:O=>Y({...V,status:O.target.value}),children:[o.jsx("option",{value:"todo",children:"未着手"}),o.jsx("option",{value:"in_progress",children:"進行中"}),o.jsx("option",{value:"completed",children:"完了"}),o.jsx("option",{value:"on_hold",children:"保留"})]})]}),o.jsx("textarea",{className:"edit-desc",value:V.description||"",onChange:O=>Y({...V,description:O.target.value}),placeholder:"タスクの説明",rows:3}),o.jsxs("div",{className:"edit-actions",children:[o.jsxs("button",{className:"save-btn",onClick:gf,children:[o.jsx(Tl,{size:16})," 保存"]}),o.jsxs("button",{className:"delete-btn-action",onClick:()=>vf(x.id),children:[o.jsx(qe,{size:16})," 削除"]}),o.jsxs("button",{className:"cancel-btn",onClick:()=>F(null),children:[o.jsx(fn,{size:16})," キャンセル"]})]})]}):o.jsxs("div",{className:`task-display-card ${x.status}`,onClick:()=>hf(x),children:[o.jsxs("div",{className:"ev-header",children:[o.jsxs("div",{className:"ev-left",children:[o.jsx("span",{className:"task-badge",children:x.category==="union_member"?"🔴 組合員対応":"🔵 事務タスク"}),x.status==="completed"&&o.jsx("span",{className:"completed-badge",children:"完了"})]}),o.jsx("span",{className:"task-status-tag",children:x.status==="completed"?"完了":"期限日"})]}),o.jsxs("h4",{className:"ev-title",children:["【タスク】",x.title]}),o.jsx("div",{className:"ev-loc",children:x.description}),x.trackResponseRate&&o.jsxs("div",{className:"task-rate",children:["回答率: ",x.responseRate||0,"%"]}),o.jsx("div",{className:"ev-memos-row",children:o.jsxs("button",{className:"memo-btn-tiny",onClick:O=>{O.stopPropagation(),E(x.id)},children:[o.jsx(hr,{size:12}),"メモ (",D.filter(O=>O.linkedTaskId===x.id).length,")"]})}),o.jsx("div",{className:"ev-hover-hint",children:"タップで編集"})]})},x.id)),jn(h).length===0&&n.filter(x=>x.dueDate===h).length===0&&o.jsx("div",{className:"empty-state",children:"この日の予定・タスクはありません。"})]})]})]}):o.jsx("div",{className:"empty-state-panel",children:"日付を選択してください。"})})]}),v&&o.jsx(Zs,{memos:D.filter(x=>x.linkedEventId===v||x.linkedTaskId===v),initialMemoId:(na=D.find(x=>x.linkedEventId===v||x.linkedTaskId===v))==null?void 0:na.id,defaultLinkedEventId:e.some(x=>x.id===v)?v:void 0,defaultLinkedTaskId:n.some(x=>x.id===v)?v:void 0,onSave:x=>{uf(v,x)},onClose:()=>E(null)}),d&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-content",children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{children:"会議体定義から作成"}),o.jsx("button",{className:"close-btn",onClick:()=>g(!1),children:o.jsx(fn,{size:20})})]}),o.jsxs("div",{className:"mtg-grid",children:[l.filter(x=>{if(a)return!0;const O=ne||s;return!O||x.roleIds.includes(O)}).map(x=>o.jsxs("button",{className:"mtg-card",onClick:()=>cf(x),children:[o.jsxs("div",{className:"mtg-card-info",children:[o.jsx("strong",{children:x.name}),o.jsx("span",{className:"timing",children:x.timing}),o.jsx("p",{children:x.content})]}),o.jsx(vt,{size:20})]},x.id)),l.filter(x=>{if(a)return!0;const O=ne||s;return!O||x.roleIds.includes(O)}).length===0&&o.jsx("p",{className:"empty-hint",children:"現在選択中の役職に該当する会議体定義はありません。"})]})]})}),o.jsx("style",{children:`
        .calendar-page { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }
        .calendar-layout { display: grid; grid-template-columns: 1fr 400px; gap: 1.5rem; }
        @media (max-width: 1024px) { .calendar-layout { grid-template-columns: 1fr; } }

        .month-nav { display: flex; align-items: center; gap: 1rem; background-color: var(--bg-card); padding: 0.5rem 1rem; border-radius: 8px; border: 1px solid #334155; width: fit-content; }
        .current-month-label { font-weight: 700; font-size: 1.1rem; min-width: 120px; text-align: center; }

        .calendar-grid-container { background-color: var(--bg-card); border: 1px solid #334155; border-radius: 12px; overflow: hidden; }
        .calendar-header { display: grid; grid-template-columns: repeat(7, 1fr); background-color: #1e293b; border-bottom: 1px solid #334155; }
        .weekday-label { padding: 0.75rem; text-align: center; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
        .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); }
        .calendar-day { height: 100px; padding: 0.5rem; border-right: 1px solid #334155; border-bottom: 1px solid #334155; cursor: pointer; transition: all 0.2s; display: flex; flex-direction: column; gap: 0.5rem; }
        .calendar-day:nth-child(7n) { border-right: none; }
        .calendar-day:hover:not(.empty) { background-color: #334155; }
        .calendar-day.selected { background-color: rgba(59, 130, 246, 0.2); border: 1px solid var(--primary); z-index: 10; }
        .calendar-day.today { background-color: rgba(59, 130, 246, 0.05); }
        .calendar-day.today .day-number { color: var(--primary); font-weight: 800; }
        .calendar-day.empty { cursor: default; }
        .day-number { font-size: 0.9rem; font-weight: 600; }
        .day-events { display: flex; flex-wrap: wrap; gap: 4px; }
        .event-dot { width: 6px; height: 6px; border-radius: 50%; }
        .event-dot.meeting { background-color: var(--warning); }
        .event-dot.negotiation { background-color: var(--danger); }
        .event-dot.business_trip { background-color: var(--primary); }
        .event-dot.conference { background-color: #a855f7; } /* Purple */
        .event-dot.training { background-color: #ec4899; } /* Pink */
        .event-dot.other { background-color: var(--text-muted); }
        .event-dot.completed { background-color: #64748b !important; opacity: 0.6; }
        .task-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #10b981; border: 1px solid rgba(255,255,255,0.2); }
        .task-dot.completed { background-color: #64748b !important; opacity: 0.6; }
        /* 3件超えたときの件数ラベル */
        .day-more { font-size: 0.55rem; color: var(--text-muted); line-height: 1; white-space: nowrap; }

        .detail-panel { background-color: var(--bg-card); border: 1px solid #334155; border-radius: 12px; padding: 0; height: fit-content; position: sticky; top: 1.5rem; overflow: hidden; }
        .detail-tabs { display: flex; border-bottom: 1px solid #334155; background-color: #1e293b; }
        .detail-tab-btn { flex: 1; padding: 1rem; border: none; background: none; color: var(--text-muted); font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: all 0.2s; border-bottom: 2px solid transparent; }
        .detail-tab-btn.active { color: var(--primary); border-bottom-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .schedule-tab-content, .travel-tab-content { padding: 1.5rem; }
        
        .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
        .add-actions { display: flex; gap: 0.5rem; }
        .event-list { display: flex; flex-direction: column; gap: 1rem; }
        .ev-memo { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem; border-top: 1px solid #334155; padding-top: 0.5rem; font-style: italic; }

        .mtg-grid { display: flex; flex-direction: column; gap: 1rem; margin-top: 1.5rem; }
        .mtg-card { background-color: rgba(255, 255, 255, 0.03); border: 1px solid #334155; border-radius: 8px; padding: 1rem; display: flex; align-items: center; justify-content: space-between; text-align: left; transition: all 0.2s; }
        .mtg-card:hover { border-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .mtg-card-info { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
        .mtg-card-info strong { font-size: 1rem; color: #ffffff; }
        .mtg-card-info .timing { font-size: 0.75rem; color: var(--warning); font-weight: 600; }
        .mtg-card-info p { font-size: 0.8rem; color: var(--text-muted); margin: 0; }

        .event-display-card { background-color: rgba(255, 255, 255, 0.02); border: 1px solid #334155; border-radius: 10px; padding: 1rem; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden; }
        .event-display-card:hover { transform: translateY(-2px); border-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .ev-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .ev-cat-tag { font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; font-weight: 700; border: 1px solid #475569; }
        .ev-cat-tag.meeting { color: #60a5fa; border-color: #60a5fa; }
        .ev-cat-tag.negotiation { color: #f87171; border-color: #f87171; }
        .ev-time { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); }
        .ev-title { margin-bottom: 0.5rem; }
        .ev-loc, .ev-expense { font-size: 0.75rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.4rem; margin-top: 0.25rem; }
        .ev-expense { color: var(--success); font-weight: 600; }
        .ev-memos-row { margin-top: 0.5rem; display: flex; gap: 0.5rem; }
        .memo-btn-tiny { background: rgba(255, 255, 255, 0.05); border: 1px solid #334155; color: var(--text-muted); font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; }
        .memo-btn-tiny:hover { background-color: rgba(255, 255, 255, 0.1); color: var(--text-main); }
        .ev-hover-hint { position: absolute; bottom: 0.5rem; right: 0.5rem; font-size: 0.65rem; color: var(--primary); opacity: 0; transition: opacity 0.2s; }
        .event-display-card:hover .ev-hover-hint { opacity: 1; }
        .event-display-card.completed { opacity: 0.6; filter: grayscale(0.5); }
        .event-display-card.completed .ev-title { text-decoration: line-through; color: var(--text-muted); }
        .completed-badge { font-size: 0.65rem; background-color: #1e293b; color: var(--text-muted); border: 1px solid #475569; padding: 1px 4px; border-radius: 3px; font-weight: 700; margin-left: 0.5rem; }
        .ev-left { display: flex; align-items: center; }

        .filter-area { display: flex; align-items: center; gap: 0.5rem; background-color: var(--bg-card); padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid #334155; }
        .role-filter-select { background: none; border: none; color: var(--primary); font-size: 0.85rem; font-weight: 700; outline: none; cursor: pointer; }
        .role-filter-select option { background-color: #1e293b; color: white; }
        .edit-status { background-color: #334155; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem; flex: 1; }

        .travel-item-card { background-color: rgba(255, 255, 255, 0.02); border: 1px solid #334155; border-radius: 10px; margin-bottom: 1rem; cursor: pointer; transition: all 0.2s; }
        .travel-item-card:hover:not(.editing) { border-color: var(--primary); background-color: rgba(59, 130, 246, 0.05); }
        .travel-item-card.editing { border-color: var(--primary); background-color: #0f172a; padding: 1rem; cursor: default; }
        .travel-display-mode { padding: 1rem; }
        .travel-edit-mode { display: flex; flex-direction: column; gap: 1rem; }
        .edit-header { display: flex; justify-content: space-between; align-items: center; gap: 1rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }
        .travel-title-input { background: none; border: none; color: white; font-size: 1rem; font-weight: 700; flex: 1; outline: none; }
        .done-btn { background-color: var(--primary); color: white; border: none; padding: 0.4rem 0.8rem; border-radius: 4px; font-weight: 700; font-size: 0.8rem; display: flex; align-items: center; gap: 0.4rem; cursor: pointer; }
        
        .travel-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .travel-header strong { font-size: 0.9rem; color: #ffffff; }
        .travel-header .total { color: var(--success); font-weight: 700; font-size: 0.9rem; }
        .travel-routes { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .route-tag { font-size: 0.7rem; background-color: #334155; color: var(--text-muted); padding: 2px 8px; border-radius: 4px; }
        .empty-route { font-size: 0.75rem; color: var(--text-muted); font-style: italic; }
        .del-btn-tiny { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: 4px; }
        .del-btn-tiny:hover { color: var(--danger); background-color: rgba(239, 68, 68, 0.1); }
        .task-display-card.completed { opacity: 0.5; filter: grayscale(1); border-style: solid; }
        .task-badge { font-size: 0.65rem; color: #10b981; font-weight: 700; }
        .task-status-tag { font-size: 0.65rem; color: var(--text-muted); }
        .task-rate { font-size: 0.75rem; color: var(--primary); font-weight: 700; margin-top: 0.5rem; }

        .event-edit-form { display: flex; flex-direction: column; gap: 1rem; border: 1px solid var(--primary); border-radius: 10px; padding: 1rem; background-color: #0f172a; }
        .edit-title { background: none; border: none; border-bottom: 2px solid var(--primary); color: white; font-size: 1.1rem; font-weight: 700; padding: 4px 0; width: 100%; }
        .edit-row { display: flex; align-items: center; gap: 0.75rem; color: var(--text-muted); font-size: 0.875rem; }
        .edit-row input { background: none; border: 1px solid #334155; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.875rem; }
        .edit-loc { flex: 1; border: none !important; border-bottom: 1px solid #334155 !important; border-radius: 0 !important; }
        .edit-cat { background-color: #334155; color: white; border: none; padding: 6px; border-radius: 4px; font-size: 0.875rem; }
        .edit-desc { background-color: #334155; color: white; border: 1px solid #475569; padding: 8px; border-radius: 4px; font-size: 0.875rem; width: 100%; resize: vertical; margin-top: 0.5rem; }
        .edit-actions { display: flex; gap: 1rem; margin-top: 1rem; }
        .save-btn { flex: 1; background-color: var(--primary); color: white; border: none; padding: 0.6rem; border-radius: 6px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
        .delete-btn-action { background: none; border: 1px solid var(--danger); color: var(--danger); padding: 0.6rem; border-radius: 6px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; gap: 0.4rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .delete-btn-action:hover { background-color: var(--danger); color: white; }
        .cancel-btn { background: none; border: 1px solid #334155; color: var(--text-muted); padding: 0.6rem; border-radius: 6px; font-size: 0.8rem; }
        
        /* Timetable Styles */
        .view-mode-toggle { display: flex; background: rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 2px; }
        .view-mode-btn { background: none; border: none; color: var(--text-muted); padding: 4px 12px; border-radius: 6px; display: flex; align-items: center; gap: 4px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s; }
        .view-mode-btn.active { background-color: var(--primary); color: white; }
        
        .timetable-container { position: relative; margin-top: 1rem; border-top: 1px solid #334155; padding-top: 1rem; overflow-y: auto; max-height: 600px; background: rgba(0,0,0,0.1); border-radius: 8px; }
        .timetable-all-day { margin: 0 1rem 1rem 1rem; border-bottom: 1px dashed #334155; padding-bottom: 0.5rem; }
        .all-day-label { font-size: 0.7rem; color: var(--text-muted); margin-bottom: 0.5rem; display: block; font-weight: 700; }
        .all-day-items { display: flex; flex-direction: column; gap: 4px; }
        
        .timetable-grid { position: relative; min-height: 1200px; margin-left: 55px; border-left: 1px solid #334155; margin-right: 1rem; }
        .time-labels { position: absolute; left: -55px; top: 0; bottom: 0; width: 50px; }
        .time-label { position: absolute; left: 0; width: 100%; font-size: 0.7rem; color: var(--text-muted); transform: translateY(-50%); text-align: right; padding-right: 8px; }
        .time-grid-line { position: absolute; left: 0; right: 0; height: 1px; background-color: rgba(255, 255, 255, 0.05); }
        
        .timetable-event { position: absolute; right: 4px; border-radius: 6px; padding: 6px 10px; font-size: 0.75rem; overflow: hidden; border-left: 4px solid transparent; backdrop-filter: blur(8px); transition: all 0.2s; z-index: 10; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
        .timetable-event:hover { z-index: 20; transform: scale(1.02); box-shadow: 0 4px 15px rgba(0,0,0,0.4); border-left-width: 6px; }
        .timetable-event .title { font-weight: 700; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 2px; }
        .timetable-event .time { font-size: 0.65rem; opacity: 0.8; display: flex; align-items: center; gap: 4px; }
        
        .timetable-event.union_member { background-color: rgba(239, 68, 68, 0.2); border-left-color: #ef4444; color: #fecaca; }
        .timetable-event.administrative { background-color: rgba(59, 130, 246, 0.2); border-left-color: #3b82f6; color: #dbeafe; }
        .timetable-event.committee { background-color: rgba(34, 197, 94, 0.2); border-left-color: #22c55e; color: #dcfce7; }
        .timetable-event.completed { opacity: 0.5; text-decoration: line-through; filter: grayscale(0.5); }

        .event-item-mini, .task-item-mini { padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; cursor: pointer; border-left: 3px solid transparent; background: rgba(255,255,255,0.05); }
        .event-item-mini.union_member { border-left-color: #ef4444; background: rgba(239, 68, 68, 0.1); }
        .event-item-mini.administrative { border-left-color: #3b82f6; background: rgba(59, 130, 246, 0.1); }
        .event-item-mini.committee { border-left-color: #22c55e; background: rgba(34, 197, 94, 0.1); }
        .task-item-mini { border-left-color: var(--primary); background: rgba(59, 130, 246, 0.1); }
        .event-item-mini.completed, .task-item-mini.completed { opacity: 0.5; text-decoration: line-through; }

        @media (max-width: 768px) {
          .calendar-layout { grid-template-columns: 1fr; }
          .calendar-day { height: 80px; }
          .current-month-label { font-size: 1rem; min-width: 100px; }
          .page-header h1 { font-size: 1.5rem; }
          .detail-panel { padding: 1rem; position: static; }
        }

        @media (max-width: 480px) {
          .calendar-day { height: 60px; font-size: 0.75rem; }
          .weekday-label { padding: 0.5rem; font-size: 0.7rem; }
          .day-number { font-size: 0.8rem; }
          .timetable-grid { margin-left: 45px; }
          .time-labels { left: -45px; width: 40px; }
        }
      `}),o.jsx(Co,{...L})]})},n0=()=>{const[e,t]=y.useState([]),[n,r]=y.useState([]),[l,i]=y.useState([]),[s,c]=y.useState(""),[a,u]=y.useState(!1),[f,m]=y.useState({prefs:!0,roles:!1,tasks:!1,meetings:!1,cleanup:!1}),[h,C]=y.useState(""),[w,b]=y.useState({title:"",category:"union_member",priority:"medium",roleIds:[],trackResponseRate:!0}),[S,p]=y.useState({name:"",content:"",timing:"",roleIds:[]}),[d,g]=y.useState(null),[v,E]=y.useState(null),[_,j]=y.useState(null),{confirmDialogProps:D,confirm:k}=Eo(),{toasts:R,showToast:I,dismissToast:G}=of();y.useEffect(()=>{t(P.getRoles()),r(P.getTaskDefinitions()),i(P.getMeetingDefinitions()),c(P.getCurrentRoleId()),u(P.getShowAllItems())},[]);const H=(N=e,U=n,K=l,ve=s,Ye=a)=>{P.saveSettings({roles:N,taskDefinitions:U,meetingDefinitions:K,currentRoleId:ve,showAllItems:Ye})},ne=N=>{m(U=>({...U,[N]:!U[N]}))},ft=N=>{let U={};const K={version:3,tasks:P.getTasks(),events:P.getEvents(),roles:P.getRoles(),taskDefinitions:P.getTaskDefinitions(),meetingDefinitions:P.getMeetingDefinitions(),currentRoleId:P.getCurrentRoleId(),showAllItems:P.getShowAllItems(),lastSyncedAt:localStorage.getItem("union_app_last_sync")||void 0};if(N==="settings"){const{tasks:Rt,events:qs,...jn}=K;U=jn}else U=K;const ve=new Blob([JSON.stringify(U,null,2)],{type:"application/json"}),Ye=URL.createObjectURL(ve),Ie=document.createElement("a");Ie.href=Ye,Ie.download=`union_app_${N}_${new Date().toLocaleDateString("sv")}.json`,document.body.appendChild(Ie),Ie.click(),document.body.removeChild(Ie),URL.revokeObjectURL(Ye)},lt=()=>{if(!h)return;const N={id:`role - ${Date.now()} `,name:h},U=[...e,N];t(U),H(U),C("")},Le=N=>{if(N.preventDefault(),!(d!=null&&d.name))return;const U=e.map(K=>K.id===d.id?d:K);t(U),H(U),g(null)},M=async N=>{if(await k({title:"役職を削除",message:"この役職を削除しますか？紐付いているタスク・会議体からも解除されます。",confirmLabel:"削除する"})){const K=e.filter(Ie=>Ie.id!==N);t(K);const ve=n.map(Ie=>({...Ie,roleIds:Ie.roleIds.filter(Rt=>Rt!==N)})),Ye=l.map(Ie=>({...Ie,roleIds:Ie.roleIds.filter(Rt=>Rt!==N)}));r(ve),i(Ye),H(K,ve,Ye),I("役職を削除しました","info")}},F=()=>{if(!w.title)return;const N={id:`def - ${Date.now()} `,title:w.title||"",description:w.description||"",category:w.category||"union_member",priority:w.priority||"medium",roleIds:w.roleIds||[],trackResponseRate:w.trackResponseRate!==void 0?w.trackResponseRate:w.category==="union_member"},U=[...n,N];r(U),H(e,U),b({title:"",category:"union_member",priority:"medium",roleIds:[],trackResponseRate:!0})},V=N=>{if(N.preventDefault(),!(v!=null&&v.title))return;const U=n.map(K=>K.id===v.id?v:K);r(U),H(e,U),E(null)},Y=()=>{if(!v)return;const N=v.subtasks||[],U={id:`sub - ${Date.now()} `,title:"",order:N.length};E({...v,subtasks:[...N,U]})},q=(N,U)=>{v&&E({...v,subtasks:(v.subtasks||[]).map(K=>K.id===N?{...K,title:U}:K)})},z=N=>{v&&E({...v,subtasks:(v.subtasks||[]).filter(U=>U.id!==N)})},L=async N=>{if(await k({title:"定型タスクを削除",message:"この定義を削除しますか？",confirmLabel:"削除する"})){const K=n.filter(ve=>ve.id!==N);r(K),H(e,K),I("定型タスクを削除しました","info")}},X=()=>{if(!S.name)return;const N={id:`mtg - ${Date.now()} `,name:S.name||"",content:S.content||"",timing:S.timing||"",roleIds:S.roleIds||[]},U=[...l,N];i(U),H(e,n,U),p({name:"",content:"",timing:"",roleIds:[]})},Q=N=>{if(N.preventDefault(),!(_!=null&&_.name))return;const U=l.map(K=>K.id===_.id?_:K);i(U),H(e,n,U),j(null)},Te=async N=>{if(await k({title:"会議体定義を削除",message:"この定義を削除しますか？",confirmLabel:"削除する"})){const K=l.filter(ve=>ve.id!==N);i(K),H(e,n,K),I("会議体定義を削除しました","info")}},Be=async()=>{await k({title:"データを完全削除",message:"この操作を行うと、このブラウザに保存されているすべてのデータ（タスク、予定、設定など）が削除されログアウトされます。Google Drive上のデータは削除されません。本当によろしいですか？",confirmLabel:"すべて削除してログアウト",danger:!0})&&(de.signOut(),localStorage.clear(),sessionStorage.clear(),window.location.href=window.location.origin+window.location.pathname)},Zr=(N,U)=>U.includes(N)?U.filter(K=>K!==N):[...U,N];return o.jsxs("div",{className:"settings-page",children:[o.jsx("header",{className:"page-header",children:o.jsx("h1",{children:"設定"})}),o.jsxs("div",{className:"settings-accordion",children:[o.jsxs("div",{className:`accordion - section ${f.prefs?"open":""} `,children:[o.jsxs("div",{className:"section-header",onClick:()=>ne("prefs"),children:[o.jsx(Xs,{size:20}),o.jsx("h2",{children:"個人設定・データ管理"}),f.prefs?o.jsx(Cn,{}):o.jsx($t,{})]}),f.prefs&&o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{className:"setting-item",children:[o.jsx("label",{children:"現在の役職"}),o.jsxs("select",{value:s,onChange:N=>{c(N.target.value),H(e,n,l,N.target.value)},children:[o.jsx("option",{value:"",children:"役職なし / 未設定"}),e.map(N=>o.jsx("option",{value:N.id,children:N.name},N.id))]}),o.jsx("p",{className:"hint",children:"選択した役職に応じてフィルタリングされます。"})]}),o.jsx("div",{className:"setting-item checkbox",children:o.jsxs("label",{className:"toggle-label",children:[o.jsx("input",{type:"checkbox",checked:a,onChange:N=>{u(N.target.checked),H(e,n,l,s,N.target.checked)}}),"全表示モード（他役職の項目もすべて表示）"]})}),o.jsxs("div",{className:"export-area",children:[o.jsx("h3",{children:"データのエクスポート"}),o.jsxs("div",{className:"export-actions",children:[o.jsxs("button",{className:"export-btn",onClick:()=>ft("settings"),children:[o.jsx(jc,{size:16})," 設定のみを保存 (JSON)"]}),o.jsxs("button",{className:"export-btn all",onClick:()=>ft("all"),children:[o.jsx(jc,{size:16})," 全データを保存 (JSON)"]})]})]})]})]}),o.jsxs("div",{className:`accordion - section ${f.roles?"open":""} `,children:[o.jsxs("div",{className:"section-header",onClick:()=>ne("roles"),children:[o.jsx(Dg,{size:20}),o.jsx("h2",{children:"役職の定義"}),f.roles?o.jsx(Cn,{}):o.jsx($t,{})]}),f.roles&&o.jsx("div",{className:"section-content",children:o.jsx("div",{className:"table-container",children:o.jsxs("table",{className:"settings-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{minWidth:"150px"},children:"役職名"}),o.jsx("th",{style:{width:"100px"},children:"操作"})]})}),o.jsxs("tbody",{children:[e.map(N=>o.jsxs("tr",{children:[o.jsx("td",{children:N.name}),o.jsx("td",{children:o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"icon-btn",onClick:()=>g(N),children:o.jsx(Nr,{size:14})}),o.jsx("button",{className:"icon-btn delete",onClick:()=>M(N.id),children:o.jsx(qe,{size:14})})]})})]},N.id)),o.jsxs("tr",{className:"adding-row",children:[o.jsx("td",{children:o.jsx("input",{value:h,onChange:N=>C(N.target.value),placeholder:"新しい役職名を入力..."})}),o.jsx("td",{children:o.jsxs("button",{className:"add-inline-btn",onClick:lt,disabled:!h,children:[o.jsx(vt,{size:16})," 追加"]})})]})]})]})})})]}),o.jsxs("div",{className:`accordion - section ${f.tasks?"open":""} `,children:[o.jsxs("div",{className:"section-header",onClick:()=>ne("tasks"),children:[o.jsx(ig,{size:20}),o.jsx("h2",{children:"定型タスクの定義"}),f.tasks?o.jsx(Cn,{}):o.jsx($t,{})]}),f.tasks&&o.jsx("div",{className:"section-content",children:o.jsx("div",{className:"table-container",children:o.jsxs("table",{className:"settings-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{minWidth:"180px"},children:"タスク名"}),o.jsx("th",{style:{minWidth:"100px"},children:"カテゴリ"}),o.jsx("th",{style:{minWidth:"80px"},children:"優先度"}),o.jsx("th",{style:{minWidth:"120px"},children:"対象役職"}),o.jsx("th",{style:{width:"100px"},children:"操作"})]})}),o.jsxs("tbody",{children:[n.map(N=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("strong",{children:N.title}),o.jsx("div",{className:"sub-text",children:N.description})]}),o.jsxs("td",{children:[N.category==="union_member"&&"🔴 組合員",N.category==="administrative"&&"🔵 事務",N.category==="committee"&&"🟢 委員"]}),o.jsx("td",{children:o.jsx("span",{className:`prio - tag ${N.priority} `,children:N.priority})}),o.jsx("td",{children:o.jsx("div",{className:"role-mini-badges",children:N.roleIds.length>0?N.roleIds.map(U=>{var K;return o.jsx("span",{className:"mini-badge",children:((K=e.find(ve=>ve.id===U))==null?void 0:K.name)||U},U)}):o.jsx("span",{className:"empty-hint",children:"全員"})})}),o.jsx("td",{children:o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"icon-btn",onClick:()=>E(N),children:o.jsx(Nr,{size:14})}),o.jsx("button",{className:"icon-btn delete",onClick:()=>L(N.id),children:o.jsx(qe,{size:14})})]})})]},N.id)),o.jsx("tr",{className:"adding-row complex",children:o.jsxs("td",{colSpan:5,children:[o.jsxs("div",{className:"inline-form",children:[o.jsx("input",{value:w.title,onChange:N=>b({...w,title:N.target.value}),placeholder:"新しい定型タスク名..."}),o.jsxs("select",{value:w.category,onChange:N=>b({...w,category:N.target.value,trackResponseRate:N.target.value==="union_member"}),children:[o.jsx("option",{value:"union_member",children:"🔴 組合員"}),o.jsx("option",{value:"administrative",children:"🔵 事務"}),o.jsx("option",{value:"committee",children:"🟢 委員"})]}),o.jsxs("select",{value:w.priority,onChange:N=>b({...w,priority:N.target.value}),children:[o.jsx("option",{value:"high",children:"高"}),o.jsx("option",{value:"medium",children:"中"}),o.jsx("option",{value:"low",children:"低"})]}),o.jsxs("button",{className:"add-inline-btn",onClick:F,disabled:!w.title,children:[o.jsx(vt,{size:16})," 追加"]})]}),o.jsx("p",{className:"hint",children:"※詳細は追加後の編集から設定してください"})]})})]})]})})})]}),o.jsxs("div",{className:`accordion - section ${f.meetings?"open":""} `,children:[o.jsxs("div",{className:"section-header",onClick:()=>ne("meetings"),children:[o.jsx(ef,{size:20}),o.jsx("h2",{children:"会議体の定義"}),f.meetings?o.jsx(Cn,{}):o.jsx($t,{})]}),f.meetings&&o.jsx("div",{className:"section-content",children:o.jsx("div",{className:"table-container",children:o.jsxs("table",{className:"settings-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{minWidth:"150px"},children:"会議体名"}),o.jsx("th",{style:{minWidth:"150px"},children:"時期・頻度"}),o.jsx("th",{style:{minWidth:"120px"},children:"参加役職"}),o.jsx("th",{style:{width:"100px"},children:"操作"})]})}),o.jsxs("tbody",{children:[l.map(N=>o.jsxs("tr",{children:[o.jsxs("td",{children:[o.jsx("strong",{children:N.name}),o.jsx("div",{className:"sub-text",children:N.content})]}),o.jsx("td",{children:o.jsx("span",{className:"timing-text",children:N.timing})}),o.jsx("td",{children:o.jsx("div",{className:"role-mini-badges",children:N.roleIds.length>0?N.roleIds.map(U=>{var K;return o.jsx("span",{className:"mini-badge",children:((K=e.find(ve=>ve.id===U))==null?void 0:K.name)||U},U)}):o.jsx("span",{className:"empty-hint",children:"全員"})})}),o.jsx("td",{children:o.jsxs("div",{className:"actions",children:[o.jsx("button",{className:"icon-btn",onClick:()=>j(N),children:o.jsx(Nr,{size:14})}),o.jsx("button",{className:"icon-btn delete",onClick:()=>Te(N.id),children:o.jsx(qe,{size:14})})]})})]},N.id)),o.jsx("tr",{className:"adding-row complex",children:o.jsx("td",{colSpan:4,children:o.jsxs("div",{className:"inline-form",children:[o.jsx("input",{value:S.name,onChange:N=>p({...S,name:N.target.value}),placeholder:"会議体名..."}),o.jsx("input",{value:S.timing,onChange:N=>p({...S,timing:N.target.value}),placeholder:"頻度（毎月第1月曜）"}),o.jsxs("button",{className:"add-inline-btn",onClick:X,disabled:!S.name,children:[o.jsx(vt,{size:16})," 追加"]})]})})})]})]})})})]}),o.jsxs("div",{className:`accordion - section danger ${f.cleanup?"open":""} `,children:[o.jsxs("div",{className:"section-header",onClick:()=>ne("cleanup"),children:[o.jsx(qi,{size:20}),o.jsx("h2",{children:"利用終了・データの消去"}),f.cleanup?o.jsx(Cn,{}):o.jsx($t,{})]}),f.cleanup&&o.jsx("div",{className:"section-content",children:o.jsxs("div",{className:"danger-zone",children:[o.jsx("h3",{children:"高度なクリーンアップ"}),o.jsx("p",{children:"スマートフォンのホーム画面への移行（PWA化）や、端末の変更などで、 現在のブラウザにデータを残したくない場合に使用します。"}),o.jsxs("div",{className:"alert-box warning",children:[o.jsx(qi,{size:16}),o.jsx("span",{children:"この操作は取り消せません。Google Driveとの同期が完了していることを確認してください。"})]}),o.jsxs("button",{className:"wipe-btn",onClick:Be,children:[o.jsx(qe,{size:16}),"この端末のデータをすべて削除してログアウト"]})]})})]})]}),d&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-content mini",children:[o.jsx("h3",{children:"役職を編集"}),o.jsxs("form",{onSubmit:Le,children:[o.jsx("input",{autoFocus:!0,value:d.name,onChange:N=>g({...d,name:N.target.value}),placeholder:"役職名",required:!0}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{type:"button",onClick:()=>g(null),children:"キャンセル"}),o.jsx("button",{type:"submit",className:"save-btn",children:"保存"})]})]})]})}),v&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-content",children:[o.jsx("h3",{children:"タスク定義の編集"}),o.jsxs("form",{onSubmit:V,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"タイトル"}),o.jsx("input",{value:v.title,onChange:N=>E({...v,title:N.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"説明"}),o.jsx("textarea",{value:v.description,onChange:N=>E({...v,description:N.target.value})})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"カテゴリ"}),o.jsxs("select",{value:v.category,onChange:N=>E({...v,category:N.target.value,trackResponseRate:N.target.value==="union_member"}),children:[o.jsx("option",{value:"union_member",children:"🔴 組合員関連"}),o.jsx("option",{value:"administrative",children:"🔵 事務タスク"}),o.jsx("option",{value:"committee",children:"🟢 委員タスク"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"優先度"}),o.jsxs("select",{value:v.priority,onChange:N=>E({...v,priority:N.target.value}),children:[o.jsx("option",{value:"high",children:"高"}),o.jsx("option",{value:"medium",children:"中"}),o.jsx("option",{value:"low",children:"低"})]})]})]}),v.category==="union_member"&&o.jsx("div",{className:"form-group checkbox-group",style:{marginBottom:"1.5rem"},children:o.jsxs("label",{className:"checkbox-label",style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontSize:"0.9rem"},children:[o.jsx("input",{type:"checkbox",checked:v.trackResponseRate||!1,onChange:N=>E({...v,trackResponseRate:N.target.checked})}),"回答率を記録してフォローする"]})}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"担当する役職 (複数選択可)"}),o.jsx("div",{className:"role-checkboxes",children:e.map(N=>{var U;return o.jsxs("label",{className:"role-cb-label",children:[o.jsx("input",{type:"checkbox",checked:(U=v.roleIds)==null?void 0:U.includes(N.id),onChange:()=>E({...v,roleIds:Zr(N.id,v.roleIds||[])})}),N.name]},N.id)})})]}),o.jsxs("div",{className:"form-group",children:[o.jsxs("label",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["サブタスク定義",o.jsxs("button",{type:"button",className:"add-sub-btn",onClick:Y,children:[o.jsx(vt,{size:14})," サブタスクを追加"]})]}),o.jsxs("div",{className:"subtask-defs-list",children:[(v.subtasks||[]).map((N,U)=>o.jsxs("div",{className:"subtask-def-item",children:[o.jsx("span",{className:"order-num",children:U+1}),o.jsx("input",{value:N.title,onChange:K=>q(N.id,K.target.value),placeholder:"サブタスクのタイトル...",required:!0}),o.jsx("button",{type:"button",className:"icon-btn delete",onClick:()=>z(N.id),children:o.jsx(qe,{size:14})})]},N.id)),(v.subtasks||[]).length===0&&o.jsx("p",{className:"empty-hint",children:"サブタスクは定義されていません。"})]})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{type:"button",onClick:()=>E(null),children:"キャンセル"}),o.jsx("button",{type:"submit",className:"save-btn",children:"保存"})]})]})]})}),_&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-content",children:[o.jsx("h3",{children:"会議体定義の編集"}),o.jsxs("form",{onSubmit:Q,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"会議体名"}),o.jsx("input",{value:_.name,onChange:N=>j({..._,name:N.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"開催時期・頻度"}),o.jsx("input",{value:_.timing,onChange:N=>j({..._,timing:N.target.value}),required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"内容"}),o.jsx("textarea",{value:_.content,onChange:N=>j({..._,content:N.target.value})})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{children:"参加する役職 (複数選択可)"}),o.jsx("div",{className:"role-checkboxes",children:e.map(N=>{var U;return o.jsxs("label",{className:"role-cb-label",children:[o.jsx("input",{type:"checkbox",checked:(U=_.roleIds)==null?void 0:U.includes(N.id),onChange:()=>j({..._,roleIds:Zr(N.id,_.roleIds||[])})}),N.name]},N.id)})})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{type:"button",onClick:()=>j(null),children:"キャンセル"}),o.jsx("button",{type:"submit",className:"save-btn",children:"保存"})]})]})]})}),o.jsx("style",{children:`
                .settings-page { max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 2rem; }
                .settings-accordion { display: flex; flex-direction: column; gap: 0.75rem; }
                .accordion-section { border: 1px solid #334155; border-radius: 12px; background-color: var(--bg-card); overflow: hidden; }
                .section-header {
                    padding: 1rem 1.5rem; display: flex; align-items: center; gap: 1rem; cursor: pointer;
                    transition: background 0.2s; background-color: rgba(255, 255, 255, 0.02);
                }
                .section-header:hover { background-color: rgba(255, 255, 255, 0.05); }
                .accordion-section.section-header:hover {
                    background-color: rgba(255, 255, 255, 0.03);
                }

                .accordion-section.danger.section-header h2 {
                    color: #f87171;
                }

                .accordion-section.danger.section-header svg {
                    color: #f87171;
                }
                .section-header h2 { font-size: 1.1rem; flex: 1; margin: 0; }
                .section-content { padding: 1.5rem; border-top: 1px solid #334155; background-color: var(--bg-dark); }
                .table-container { overflow-x: auto; width: 100%; border: 1px solid #334155; border-radius: 8px; background-color: rgba(255, 255, 255, 0.01); }

                /* Settings Table */
                .settings-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; min-width: 600px; }
                .settings-table th, .settings-table td { padding: 0.75rem 1rem; border-bottom: 1px solid #334155; text-align: left; vertical-align: middle; }
                .settings-table th { color: var(--text-muted); font-weight: 600; font-size: 0.8rem; background-color: rgba(255, 255, 255, 0.03); white-space: nowrap; }
                .sub-text { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; white-space: normal; line-height: 1.4; }
                .adding-row { background-color: rgba(59, 130, 246, 0.05); }
                .adding-row td { border-bottom: none; padding-top: 1rem; }
                .adding-row.complex td { padding: 1rem; }
                
                .inline-form { display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; width: 100%; }
                .inline-form input, .inline-form select {
                    background-color: #0f172a; border: 1px solid #334155; color: white;
                    padding: 0.5rem 0.75rem; border-radius: 6px; font-size: 0.85rem; flex: 1; min-width: 140px;
                }
                .add-inline-btn {
                    background-color: var(--primary); color: white; border: none; padding: 0.5rem 1.25rem;
                    border-radius: 6px; font-weight: 600; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap;
                }
                .add-inline-btn:disabled { opacity: 0.5; cursor: not-allowed; }

                /* Responsive Adjustments */
                @media(max-width: 768px) {
                    .section-content { padding: 1rem 0.75rem; }
                    .settings-table th, .settings-table td { padding: 0.6rem 0.75rem; }
                    .inline-form { flex-direction: column; align-items: stretch; }
                    .inline-form input, .inline-form select { width: 100%; min-width: auto; }
                    .add-inline-btn { justify-content: center; }
                    .export-actions { flex-direction: column; }
                }

                /* Tags & Badges */
                .prio-tag { font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; font-weight: 700; text-transform: uppercase; }
                .prio-tag.high { background-color: rgba(239, 68, 68, 0.2); color: var(--danger); }
                .prio-tag.medium { background-color: rgba(245, 158, 11, 0.2); color: var(--warning); }
                .prio-tag.low { background-color: rgba(148, 163, 184, 0.2); color: var(--text-muted); }
                
                .role-mini-badges { display: flex; flex-wrap: wrap; gap: 4px; }
                .mini-badge { font-size: 0.65rem; background-color: #1e293b; border: 1px solid var(--primary); color: var(--primary); padding: 1px 4px; border-radius: 3px; }
                .timing-text { font-size: 0.85rem; color: var(--warning); font-weight: 600; }

                /* Personal Prefs Area */
                .setting-item { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
                .setting-item label { font-size: 0.875rem; color: var(--text-muted); font-weight: 600; }
                .setting-item.checkbox { flex-direction: row; align-items: center; margin-top: 1rem; }
                .toggle-label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; font-size: 0.9rem; }
                .hint { font-size: 0.75rem; color: var(--text-muted); font-style: italic; margin-top: 0.5rem; }

                /* Export Area */
                .export-area { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px dashed #334155; }
                .export-area h3 { font-size: 0.95rem; margin-bottom: 1rem; color: var(--text-main); }
                .export-actions { display: flex; gap: 1rem; }
                .export-btn {
                    background: none; border: 1px solid #475569; color: var(--text-main);
                    padding: 0.6rem 1rem; border-radius: 8px; font-size: 0.85rem; display: flex;
                    align-items: center; gap: 0.6rem; transition: all 0.2s;
                }
                .export-btn:hover { background-color: #334155; border-color: var(--primary); }
                .export-btn.all:hover { border-color: var(--warning); }

                .actions { display: flex; gap: 0.5rem; }
                .role-checkboxes { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 0.5rem; padding: 0.75rem; background-color: #0f172a; border-radius: 8px; }
                .role-cb-label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; cursor: pointer; padding: 4px; }

                /* Subtasks in Modal */
                .add-sub-btn { background: none; border: 1px solid var(--primary); color: var(--primary); font-size: 0.75rem; padding: 2px 8px; border-radius: 4px; display: flex; align-items: center; gap: 4px; cursor: pointer; }
                .add-sub-btn:hover { background-color: rgba(59, 130, 246, 0.1); }
                .subtask-defs-list { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem; }
                .subtask-def-item { display: flex; align-items: center; gap: 0.5rem; }
                .subtask-def-item input {
                    flex: 1;
                    padding: 0.4rem 0.6rem; font-size: 0.85rem;
                }

                /* Danger Zone Styles */
                .danger-zone { display: flex; flex-direction: column; gap: 1rem; }
                .danger-zone h3 { font-size: 1rem; color: #f87171; margin-bottom: 0.25rem; }
                .danger-zone p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; }

                .alert-box {
                    display: flex; align-items: center; gap: 0.75rem;
                    padding: 0.75rem 1rem; border-radius: 8px; font-size: 0.8rem; line-height: 1.4;
                }
                .alert-box.warning {
                    background-color: rgba(245, 158, 11, 0.1); color: #fbbf24;
                    border: 1px solid rgba(245, 158, 11, 0.2);
                }

                .wipe-btn {
                    background-color: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid #ef4444;
                    padding: 0.75rem 1rem; border-radius: 8px; font-weight: 600;
                    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
                    cursor: pointer; transition: all 0.2s; margin-top: 0.5rem;
                }
                .wipe-btn:hover { background-color: #ef4444; color: white; }
                .order-num { font-size: 0.75rem; color: var(--text-muted); width: 20px; text-align: center; }
            `}),o.jsx(Co,{...D}),o.jsx(lf,{toasts:R,onDismiss:G})]})},r0=()=>{const[e,t]=y.useState([]),[n,r]=y.useState([]),[l,i]=y.useState([]),[s,c]=y.useState(!1),[a,u]=y.useState(""),[f,m]=y.useState(null),[h,C]=y.useState(null),{confirmDialogProps:w,confirm:b}=Eo();y.useEffect(()=>{t(P.getMemos()),r(P.getEvents()),i(P.getTasks())},[]);const S=j=>j?j.replace(/<[^>]*>?/gm,"").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"):"",p=j=>{t(j),P.saveMemos(j)},d=()=>{C(null),c(!1)},g=async j=>{await b({title:"メモを削除",message:"このメモを削除しますか？この操作は元に戻せません。",confirmLabel:"削除する"})&&p(e.filter(k=>k.id!==j))},v=(j,D,k)=>{const R=e.map(I=>I.id===j?{...I,linkedEventId:D,linkedTaskId:k}:I);p(R),m(null)},E=e.filter(j=>(j.title||"").toLowerCase().includes(a.toLowerCase())||j.content.toLowerCase().includes(a.toLowerCase())).sort((j,D)=>new Date(D.createdAt).getTime()-new Date(j.createdAt).getTime()),_=j=>{var D,k;return j.linkedEventId?((D=n.find(R=>R.id===j.linkedEventId))==null?void 0:D.title)||"不明なイベント":j.linkedTaskId?((k=l.find(R=>R.id===j.linkedTaskId))==null?void 0:k.title)||"不明なタスク":null};return o.jsxs("div",{className:"memo-list-page",children:[o.jsxs("header",{className:"page-header",children:[o.jsx("h1",{children:"メモ一覧"}),o.jsxs("div",{className:"header-actions",children:[o.jsxs("div",{className:"search-bar",children:[o.jsx(Ng,{size:18}),o.jsx("input",{type:"text",placeholder:"タイトルや内容で検索...",value:a,onChange:j=>u(j.target.value)})]}),o.jsxs("button",{className:"primary-btn",onClick:()=>c(!0),children:[o.jsx(vt,{size:18})," 新規メモ"]})]})]}),o.jsx("div",{className:"memo-grid",children:E.map(j=>o.jsxs("div",{className:"memo-card",onClick:()=>j.type==="text"&&C(j.id),children:[o.jsxs("div",{className:"memo-card-header",children:[o.jsxs("span",{className:"memo-type",children:[j.type==="text"&&o.jsx(ts,{size:14}),j.type==="voice"&&o.jsx(_l,{size:14}),j.type==="text"?"テキスト":"音声"]}),o.jsx("span",{className:"memo-date",children:new Date(j.createdAt).toLocaleDateString()}),o.jsx("button",{className:"delete-btn",onClick:D=>{D.stopPropagation(),g(j.id)},children:o.jsx(qe,{size:14})})]}),o.jsxs("div",{className:"memo-card-body",children:[o.jsx("h3",{className:"memo-title",children:j.title||"(無題)"}),j.type==="text"&&o.jsx("p",{className:"memo-preview",children:S(j.content)}),j.type==="voice"&&o.jsx("div",{className:"voice-badge",children:"音声メモ"})]}),o.jsx("div",{className:"memo-card-footer",children:o.jsx("div",{className:"link-status",children:_(j)&&o.jsxs("span",{className:"linked-badge",children:[o.jsx(vg,{size:12})," ",_(j)]})})})]},j.id))}),(s||h)&&o.jsx(Zs,{memos:e,initialMemoId:h,onSave:j=>p(j),onClose:d}),f&&o.jsx("div",{className:"modal-overlay",children:o.jsxs("div",{className:"modal-content link-modal",children:[o.jsx("h3",{children:"紐づけ先を選択"}),o.jsxs("div",{className:"link-targets",children:[o.jsx("h4",{children:"スケジュール"}),n.slice(0,10).map(j=>o.jsxs("button",{className:"target-btn",onClick:()=>v(f,j.id),children:[o.jsx(qn,{size:14})," ",j.date," ",j.title]},j.id)),o.jsx("h4",{children:"タスク"}),l.slice(0,10).map(j=>o.jsxs("button",{className:"target-btn",onClick:()=>v(f,void 0,j.id),children:[o.jsx(No,{size:14})," ",j.title]},j.id))]}),o.jsx("button",{className:"close-link-modal",onClick:()=>m(null),children:"キャンセル"})]})}),o.jsx("style",{children:`
                .memo-list-page { display: flex; flex-direction: column; gap: 2rem; max-width: 1000px; margin: 0 auto; }
                .search-bar { display: flex; align-items: center; gap: 0.5rem; background: #1e293b; padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #334155; flex: 1; max-width: 320px; }
                .search-bar input { background: none; border: none; color: white; outline: none; flex: 1; min-width: 0; }
                
                .memo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; }
                .memo-card { background: var(--bg-card); border: 1px solid #334155; border-radius: 12px; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; cursor: pointer; transition: all 0.2s; }
                .memo-card:hover { border-color: var(--primary); transform: translateY(-2px); }
                
                .memo-card-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; color: var(--text-muted); }
                .memo-type { display: flex; align-items: center; gap: 0.4rem; }
                
                .memo-card-body { flex: 1; overflow: hidden; }
                .memo-title { margin: 0; font-size: 1rem; font-weight: 700; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                .memo-preview { margin: 0.25rem 0 0; font-size: 0.8rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4; }
                .voice-badge { font-size: 0.7rem; color: var(--primary); font-weight: 600; margin-top: 0.25rem; }
                
                .delete-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 4px; border-radius: 4px; }
                .delete-btn:hover { color: var(--danger); background: rgba(239, 68, 68, 0.1); }

                .linked-badge { background: rgba(59,130,246,0.1); color: var(--primary); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.7rem; display: flex; align-items: center; gap: 0.4rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                
                .link-modal { max-width: 400px; max-height: 80vh; overflow-y: auto; }
                .link-targets { display: flex; flex-direction: column; gap: 0.5rem; margin: 1rem 0; }
                .target-btn { text-align: left; padding: 0.75rem; background: #1e293b; border: 1px solid #334155; border-radius: 8px; color: white; display: flex; align-items: center; gap: 0.75rem; }
                .target-btn:hover { background: #334155; }
            `}),o.jsx(Co,{...w})]})};function l0(){return y.useEffect(()=>{de.init()},[]),o.jsx(Wh,{children:o.jsx(Jg,{children:o.jsxs(Lh,{children:[o.jsx(Nn,{path:"/",element:o.jsx(Yg,{})}),o.jsx(Nn,{path:"/tasks",element:o.jsx(e0,{})}),o.jsx(Nn,{path:"/calendar",element:o.jsx(t0,{})}),o.jsx(Nn,{path:"/memos",element:o.jsx(r0,{})}),o.jsx(Nn,{path:"/settings",element:o.jsx(n0,{})})]})})})}ti.createRoot(document.getElementById("root")).render(o.jsx(bt.StrictMode,{children:o.jsx(l0,{})}));
