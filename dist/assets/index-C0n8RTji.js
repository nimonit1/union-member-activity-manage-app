function cp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function dp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ku={exports:{}},Zl={},wu={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),pp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),kp=Symbol.for("react.memo"),wp=Symbol.for("react.lazy"),Xs=Symbol.iterator;function jp(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bu=Object.assign,Su={};function Qn(e,t,n){this.props=e,this.context=t,this.refs=Su,this.updater=n||ju}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nu(){}Nu.prototype=Qn.prototype;function Yo(e,t,n){this.props=e,this.context=t,this.refs=Su,this.updater=n||ju}var Go=Yo.prototype=new Nu;Go.constructor=Yo;bu(Go,Qn.prototype);Go.isPureReactComponent=!0;var Zs=Array.isArray,Cu=Object.prototype.hasOwnProperty,Xo={current:null},Eu={key:!0,ref:!0,__self:!0,__source:!0};function zu(e,t,n){var r,l={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Cu.call(t,r)&&!Eu.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Ar,type:e,key:o,ref:s,props:l,_owner:Xo.current}}function bp(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function Sp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qs=/\/+/g;function wi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Sp(""+e.key):t.toString(36)}function dl(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ar:case pp:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+wi(s,0):r,Zs(l)?(n="",e!=null&&(n=e.replace(qs,"$&/")+"/"),dl(l,t,n,"",function(c){return c})):l!=null&&(Zo(l)&&(l=bp(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(qs,"$&/")+"/")+e)),t.push(l)),1;if(s=0,r=r===""?".":r+":",Zs(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+wi(o,u);s+=dl(o,t,n,a,l)}else if(a=jp(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+wi(o,u++),s+=dl(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Kr(e,t,n){if(e==null)return e;var r=[],l=0;return dl(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},pl={transition:null},Cp={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Xo};function _u(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!Zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Qn;H.Fragment=fp;H.Profiler=hp;H.PureComponent=Yo;H.StrictMode=mp;H.Suspense=yp;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cp;H.act=_u;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bu({},e.props),l=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xo.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Cu.call(t,a)&&!Eu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Ar,type:e.type,key:l,ref:o,props:r,_owner:s}};H.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gp,_context:e},e.Consumer=e};H.createElement=zu;H.createFactory=function(e){var t=zu.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:xp,render:e}};H.isValidElement=Zo;H.lazy=function(e){return{$$typeof:wp,_payload:{_status:-1,_result:e},_init:Np}};H.memo=function(e,t){return{$$typeof:kp,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=pl.transition;pl.transition={};try{e()}finally{pl.transition=t}};H.unstable_act=_u;H.useCallback=function(e,t){return Ee.current.useCallback(e,t)};H.useContext=function(e){return Ee.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};H.useEffect=function(e,t){return Ee.current.useEffect(e,t)};H.useId=function(){return Ee.current.useId()};H.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Ee.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};H.useRef=function(e){return Ee.current.useRef(e)};H.useState=function(e){return Ee.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Ee.current.useTransition()};H.version="18.3.1";wu.exports=H;var w=wu.exports;const Tu=dp(w),Ep=cp({__proto__:null,default:Tu},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp=w,_p=Symbol.for("react.element"),Tp=Symbol.for("react.fragment"),Ip=Object.prototype.hasOwnProperty,Rp=zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dp={key:!0,ref:!0,__self:!0,__source:!0};function Iu(e,t,n){var r,l={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ip.call(t,r)&&!Dp.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:_p,type:e,key:o,ref:s,props:l,_owner:Rp.current}}Zl.Fragment=Tp;Zl.jsx=Iu;Zl.jsxs=Iu;ku.exports=Zl;var i=ku.exports,Ji={},Ru={exports:{}},Be={},Du={exports:{}},Pu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(y,_){var P=y.length;y.push(_);e:for(;0<P;){var U=P-1>>>1,Y=y[U];if(0<l(Y,_))y[U]=_,y[P]=Y,P=U;else break e}}function n(y){return y.length===0?null:y[0]}function r(y){if(y.length===0)return null;var _=y[0],P=y.pop();if(P!==_){y[0]=P;e:for(var U=0,Y=y.length,Te=Y>>>1;U<Te;){var Se=2*(U+1)-1,S=y[Se],D=Se+1,W=y[D];if(0>l(S,P))D<Y&&0>l(W,S)?(y[U]=W,y[D]=P,U=D):(y[U]=S,y[Se]=P,U=Se);else if(D<Y&&0>l(W,P))y[U]=W,y[D]=P,U=D;else break e}}return _}function l(y,_){var P=y.sortIndex-_.sortIndex;return P!==0?P:y.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}var a=[],c=[],p=1,h=null,g=3,C=!1,b=!1,N=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(y){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=y)r(c),_.sortIndex=_.expirationTime,t(a,_);else break;_=n(c)}}function v(y){if(N=!1,f(y),!b)if(n(a)!==null)b=!0,qe(j);else{var _=n(c);_!==null&&_e(v,_.startTime-y)}}function j(y,_){b=!1,N&&(N=!1,m(z),z=-1),C=!0;var P=g;try{for(f(_),h=n(a);h!==null&&(!(h.expirationTime>_)||y&&!L());){var U=h.callback;if(typeof U=="function"){h.callback=null,g=h.priorityLevel;var Y=U(h.expirationTime<=_);_=e.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(a)&&r(a),f(_)}else r(a);h=n(a)}if(h!==null)var Te=!0;else{var Se=n(c);Se!==null&&_e(v,Se.startTime-_),Te=!1}return Te}finally{h=null,g=P,C=!1}}var T=!1,x=null,z=-1,O=5,F=-1;function L(){return!(e.unstable_now()-F<O)}function Q(){if(x!==null){var y=e.unstable_now();F=y;var _=!0;try{_=x(!0,y)}finally{_?le():(T=!1,x=null)}}else T=!1}var le;if(typeof d=="function")le=function(){d(Q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,We=ce.port2;ce.port1.onmessage=Q,le=function(){We.postMessage(null)}}else le=function(){E(Q,0)};function qe(y){x=y,T||(T=!0,le())}function _e(y,_){z=E(function(){y(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(y){y.callback=null},e.unstable_continueExecution=function(){b||C||(b=!0,qe(j))},e.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<y?Math.floor(1e3/y):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(y){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var P=g;g=_;try{return y()}finally{g=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(y,_){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var P=g;g=y;try{return _()}finally{g=P}},e.unstable_scheduleCallback=function(y,_,P){var U=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?U+P:U):P=U,y){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=P+Y,y={id:p++,callback:_,priorityLevel:y,startTime:P,expirationTime:Y,sortIndex:-1},P>U?(y.sortIndex=P,t(c,y),n(a)===null&&y===n(c)&&(N?(m(z),z=-1):N=!0,_e(v,P-U))):(y.sortIndex=Y,t(a,y),b||C||(b=!0,qe(j))),y},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(y){var _=g;return function(){var P=g;g=_;try{return y.apply(this,arguments)}finally{g=P}}}})(Pu);Du.exports=Pu;var Pp=Du.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=w,Ue=Pp;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mu=new Set,yr={};function un(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(yr[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yi=Object.prototype.hasOwnProperty,Lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},ta={};function Op(e){return Yi.call(ta,e)?!0:Yi.call(ea,e)?!1:Lp.test(e)?ta[e]=!0:(ea[e]=!0,!1)}function Ap(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fp(e,t,n,r){if(t===null||typeof t>"u"||Ap(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,l,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var qo=/[\-:]([a-z])/g;function es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(qo,es);ye[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(qo,es);ye[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(qo,es);ye[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function ts(e,t,n,r){var l=ye.hasOwnProperty(t)?ye[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fp(t,n,l,r)&&(n=null),r||l===null?Op(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var St=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jr=Symbol.for("react.element"),xn=Symbol.for("react.portal"),yn=Symbol.for("react.fragment"),ns=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),Lu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),rs=Symbol.for("react.forward_ref"),Xi=Symbol.for("react.suspense"),Zi=Symbol.for("react.suspense_list"),ls=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),na=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=na&&e[na]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,ji;function lr(e){if(ji===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ji=t&&t[1]||""}return`
`+ji+e}var bi=!1;function Si(e,t){if(!e||bi)return"";bi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,u=o.length-1;1<=s&&0<=u&&l[s]!==o[u];)u--;for(;1<=s&&0<=u;s--,u--)if(l[s]!==o[u]){if(s!==1||u!==1)do if(s--,u--,0>u||l[s]!==o[u]){var a=`
`+l[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=u);break}}}finally{bi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function $p(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function qi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yn:return"Fragment";case xn:return"Portal";case Gi:return"Profiler";case ns:return"StrictMode";case Xi:return"Suspense";case Zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ou:return(e.displayName||"Context")+".Consumer";case Lu:return(e._context.displayName||"Context")+".Provider";case rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ls:return t=e.displayName||null,t!==null?t:qi(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return qi(e(t))}catch{}}return null}function Up(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qi(t);case 8:return t===ns?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bp(e){var t=Fu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Bp(e))}function $u(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Fu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function eo(e,t){var n=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ra(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uu(e,t){t=t.checked,t!=null&&ts(e,"checked",t,!1)}function to(e,t){Uu(e,t);var n=Wt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?no(e,t.type,n):t.hasOwnProperty("defaultValue")&&no(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function la(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function no(e,t,n){(t!=="number"||Nl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ro(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ia(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ir(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Bu(e,t){var n=Wt(t.value),r=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,Wu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vp=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){Vp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function Hu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function Qu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Hu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Wp=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function io(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var so=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ao=null,In=null,Rn=null;function sa(e){if(e=Ur(e)){if(typeof ao!="function")throw Error(I(280));var t=e.stateNode;t&&(t=ri(t),ao(e.stateNode,e.type,t))}}function Ku(e){In?Rn?Rn.push(e):Rn=[e]:In=e}function Ju(){if(In){var e=In,t=Rn;if(Rn=In=null,sa(e),t)for(e=0;e<t.length;e++)sa(t[e])}}function Yu(e,t){return e(t)}function Gu(){}var Ni=!1;function Xu(e,t,n){if(Ni)return e(t,n);Ni=!0;try{return Yu(e,t,n)}finally{Ni=!1,(In!==null||Rn!==null)&&(Gu(),Ju())}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var r=ri(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var uo=!1;if(kt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){uo=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{uo=!1}function Hp(e,t,n,r,l,o,s,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var cr=!1,Cl=null,El=!1,co=null,Qp={onError:function(e){cr=!0,Cl=e}};function Kp(e,t,n,r,l,o,s,u,a){cr=!1,Cl=null,Hp.apply(Qp,arguments)}function Jp(e,t,n,r,l,o,s,u,a){if(Kp.apply(this,arguments),cr){if(cr){var c=Cl;cr=!1,Cl=null}else throw Error(I(198));El||(El=!0,co=c)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function aa(e){if(cn(e)!==e)throw Error(I(188))}function Yp(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return aa(l),e;if(o===r)return aa(l),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,u=l.child;u;){if(u===n){s=!0,n=l,r=o;break}if(u===r){s=!0,r=l,n=o;break}u=u.sibling}if(!s){for(u=o.child;u;){if(u===n){s=!0,n=o,r=l;break}if(u===r){s=!0,r=o,n=l;break}u=u.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function qu(e){return e=Yp(e),e!==null?ec(e):null}function ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ec(e);if(t!==null)return t;e=e.sibling}return null}var tc=Ue.unstable_scheduleCallback,ua=Ue.unstable_cancelCallback,Gp=Ue.unstable_shouldYield,Xp=Ue.unstable_requestPaint,ae=Ue.unstable_now,Zp=Ue.unstable_getCurrentPriorityLevel,os=Ue.unstable_ImmediatePriority,nc=Ue.unstable_UserBlockingPriority,zl=Ue.unstable_NormalPriority,qp=Ue.unstable_LowPriority,rc=Ue.unstable_IdlePriority,ql=null,ft=null;function ef(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ql,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:rf,tf=Math.log,nf=Math.LN2;function rf(e){return e>>>=0,e===0?32:31-(tf(e)/nf|0)|0}var Xr=64,Zr=4194304;function or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _l(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var u=s&~l;u!==0?r=or(u):(o&=s,o!==0&&(r=or(o)))}else s=n&~l,s!==0?r=or(s):o!==0&&(r=or(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),l=1<<n,r|=e[n],t&=~l;return r}function lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function of(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-it(o),u=1<<s,a=l[s];a===-1?(!(u&n)||u&r)&&(l[s]=lf(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function lc(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-it(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ss(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var J=0;function ic(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var oc,as,sc,ac,uc,fo=!1,qr=[],Mt=null,Lt=null,Ot=null,jr=new Map,br=new Map,_t=[],af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(e,t){switch(e){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(t.pointerId)}}function Zn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Ur(t),t!==null&&as(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function uf(e,t,n,r,l){switch(t){case"focusin":return Mt=Zn(Mt,e,t,n,r,l),!0;case"dragenter":return Lt=Zn(Lt,e,t,n,r,l),!0;case"mouseover":return Ot=Zn(Ot,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return jr.set(o,Zn(jr.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,br.set(o,Zn(br.get(o)||null,e,t,n,r,l)),!0}return!1}function cc(e){var t=Zt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zu(n),t!==null){e.blockedOn=t,uc(e.priority,function(){sc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);so=r,n.target.dispatchEvent(r),so=null}else return t=Ur(n),t!==null&&as(t),e.blockedOn=n,!1;t.shift()}return!0}function da(e,t,n){fl(e)&&n.delete(t)}function cf(){fo=!1,Mt!==null&&fl(Mt)&&(Mt=null),Lt!==null&&fl(Lt)&&(Lt=null),Ot!==null&&fl(Ot)&&(Ot=null),jr.forEach(da),br.forEach(da)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,cf)))}function Sr(e){function t(l){return qn(l,e)}if(0<qr.length){qn(qr[0],e);for(var n=1;n<qr.length;n++){var r=qr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mt!==null&&qn(Mt,e),Lt!==null&&qn(Lt,e),Ot!==null&&qn(Ot,e),jr.forEach(t),br.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)cc(n),n.blockedOn===null&&_t.shift()}var Dn=St.ReactCurrentBatchConfig,Tl=!0;function df(e,t,n,r){var l=J,o=Dn.transition;Dn.transition=null;try{J=1,us(e,t,n,r)}finally{J=l,Dn.transition=o}}function pf(e,t,n,r){var l=J,o=Dn.transition;Dn.transition=null;try{J=4,us(e,t,n,r)}finally{J=l,Dn.transition=o}}function us(e,t,n,r){if(Tl){var l=mo(e,t,n,r);if(l===null)Li(e,t,r,Il,n),ca(e,r);else if(uf(l,e,t,n,r))r.stopPropagation();else if(ca(e,r),t&4&&-1<af.indexOf(e)){for(;l!==null;){var o=Ur(l);if(o!==null&&oc(o),o=mo(e,t,n,r),o===null&&Li(e,t,r,Il,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Li(e,t,r,null,n)}}var Il=null;function mo(e,t,n,r){if(Il=null,e=is(r),e=Zt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Il=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zp()){case os:return 1;case nc:return 4;case zl:case qp:return 16;case rc:return 536870912;default:return 16}default:return 16}}var Rt=null,cs=null,ml=null;function pc(){if(ml)return ml;var e,t=cs,n=t.length,r,l="value"in Rt?Rt.value:Rt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===l[o-r];r++);return ml=l.slice(e,1<r?1-r:void 0)}function hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function pa(){return!1}function Ve(e){function t(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?el:pa,this.isPropagationStopped=pa,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Ve(Kn),$r=re({},Kn,{view:0,detail:0}),ff=Ve($r),Ei,zi,er,ei=re({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Ei=e.screenX-er.screenX,zi=e.screenY-er.screenY):zi=Ei=0,er=e),Ei)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),fa=Ve(ei),mf=re({},ei,{dataTransfer:0}),hf=Ve(mf),gf=re({},$r,{relatedTarget:0}),_i=Ve(gf),vf=re({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=Ve(vf),yf=re({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kf=Ve(yf),wf=re({},Kn,{data:0}),ma=Ve(wf),jf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sf[e])?!!t[e]:!1}function ps(){return Nf}var Cf=re({},$r,{key:function(e){if(e.key){var t=jf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ef=Ve(Cf),zf=re({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ha=Ve(zf),_f=re({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Tf=Ve(_f),If=re({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rf=Ve(If),Df=re({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pf=Ve(Df),Mf=[9,13,27,32],fs=kt&&"CompositionEvent"in window,dr=null;kt&&"documentMode"in document&&(dr=document.documentMode);var Lf=kt&&"TextEvent"in window&&!dr,fc=kt&&(!fs||dr&&8<dr&&11>=dr),ga=" ",va=!1;function mc(e,t){switch(e){case"keyup":return Mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Of(e,t){switch(e){case"compositionend":return hc(t);case"keypress":return t.which!==32?null:(va=!0,ga);case"textInput":return e=t.data,e===ga&&va?null:e;default:return null}}function Af(e,t){if(kn)return e==="compositionend"||!fs&&mc(e,t)?(e=pc(),ml=cs=Rt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fc&&t.locale!=="ko"?null:t.data;default:return null}}var Ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ff[e.type]:t==="textarea"}function gc(e,t,n,r){Ku(r),t=Rl(t,"onChange"),0<t.length&&(n=new ds("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,Nr=null;function $f(e){Ec(e,0)}function ti(e){var t=bn(e);if($u(t))return e}function Uf(e,t){if(e==="change")return t}var vc=!1;if(kt){var Ti;if(kt){var Ii="oninput"in document;if(!Ii){var ya=document.createElement("div");ya.setAttribute("oninput","return;"),Ii=typeof ya.oninput=="function"}Ti=Ii}else Ti=!1;vc=Ti&&(!document.documentMode||9<document.documentMode)}function ka(){pr&&(pr.detachEvent("onpropertychange",xc),Nr=pr=null)}function xc(e){if(e.propertyName==="value"&&ti(Nr)){var t=[];gc(t,Nr,e,is(e)),Xu($f,t)}}function Bf(e,t,n){e==="focusin"?(ka(),pr=t,Nr=n,pr.attachEvent("onpropertychange",xc)):e==="focusout"&&ka()}function Vf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(Nr)}function Wf(e,t){if(e==="click")return ti(t)}function Hf(e,t){if(e==="input"||e==="change")return ti(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:Qf;function Cr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yi.call(t,l)||!st(e[l],t[l]))return!1}return!0}function wa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ja(e,t){var n=wa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wa(n)}}function yc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kc(){for(var e=window,t=Nl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nl(e.document)}return t}function ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kf(e){var t=kc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yc(n.ownerDocument.documentElement,n)){if(r!==null&&ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ja(n,o);var s=ja(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jf=kt&&"documentMode"in document&&11>=document.documentMode,wn=null,ho=null,fr=null,go=!1;function ba(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;go||wn==null||wn!==Nl(r)||(r=wn,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fr&&Cr(fr,r)||(fr=r,r=Rl(ho,"onSelect"),0<r.length&&(t=new ds("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Ri={},wc={};kt&&(wc=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function ni(e){if(Ri[e])return Ri[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in wc)return Ri[e]=t[n];return e}var jc=ni("animationend"),bc=ni("animationiteration"),Sc=ni("animationstart"),Nc=ni("transitionend"),Cc=new Map,Sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qt(e,t){Cc.set(e,t),un(t,[e])}for(var Di=0;Di<Sa.length;Di++){var Pi=Sa[Di],Yf=Pi.toLowerCase(),Gf=Pi[0].toUpperCase()+Pi.slice(1);Qt(Yf,"on"+Gf)}Qt(jc,"onAnimationEnd");Qt(bc,"onAnimationIteration");Qt(Sc,"onAnimationStart");Qt("dblclick","onDoubleClick");Qt("focusin","onFocus");Qt("focusout","onBlur");Qt(Nc,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xf=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Na(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jp(r,t,void 0,e),e.currentTarget=null}function Ec(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var u=r[s],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==o&&l.isPropagationStopped())break e;Na(l,u,c),o=a}else for(s=0;s<r.length;s++){if(u=r[s],a=u.instance,c=u.currentTarget,u=u.listener,a!==o&&l.isPropagationStopped())break e;Na(l,u,c),o=a}}}if(El)throw e=co,El=!1,co=null,e}function Z(e,t){var n=t[wo];n===void 0&&(n=t[wo]=new Set);var r=e+"__bubble";n.has(r)||(zc(t,e,2,!1),n.add(r))}function Mi(e,t,n){var r=0;t&&(r|=4),zc(n,e,r,t)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Er(e){if(!e[nl]){e[nl]=!0,Mu.forEach(function(n){n!=="selectionchange"&&(Xf.has(n)||Mi(n,!1,e),Mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nl]||(t[nl]=!0,Mi("selectionchange",!1,t))}}function zc(e,t,n,r){switch(dc(t)){case 1:var l=df;break;case 4:l=pf;break;default:l=us}n=l.bind(null,t,n,e),l=void 0,!uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Li(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;s=s.return}for(;u!==null;){if(s=Zt(u),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}u=u.parentNode}}r=r.return}Xu(function(){var c=o,p=is(n),h=[];e:{var g=Cc.get(e);if(g!==void 0){var C=ds,b=e;switch(e){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":C=Ef;break;case"focusin":b="focus",C=_i;break;case"focusout":b="blur",C=_i;break;case"beforeblur":case"afterblur":C=_i;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=fa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=hf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Tf;break;case jc:case bc:case Sc:C=xf;break;case Nc:C=Rf;break;case"scroll":C=ff;break;case"wheel":C=Pf;break;case"copy":case"cut":case"paste":C=kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=ha}var N=(t&4)!==0,E=!N&&e==="scroll",m=N?g!==null?g+"Capture":null:g;N=[];for(var d=c,f;d!==null;){f=d;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,m!==null&&(v=wr(d,m),v!=null&&N.push(zr(d,v,f)))),E)break;d=d.return}0<N.length&&(g=new C(g,b,null,n,p),h.push({event:g,listeners:N}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",g&&n!==so&&(b=n.relatedTarget||n.fromElement)&&(Zt(b)||b[wt]))break e;if((C||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,C?(b=n.relatedTarget||n.toElement,C=c,b=b?Zt(b):null,b!==null&&(E=cn(b),b!==E||b.tag!==5&&b.tag!==6)&&(b=null)):(C=null,b=c),C!==b)){if(N=fa,v="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(N=ha,v="onPointerLeave",m="onPointerEnter",d="pointer"),E=C==null?g:bn(C),f=b==null?g:bn(b),g=new N(v,d+"leave",C,n,p),g.target=E,g.relatedTarget=f,v=null,Zt(p)===c&&(N=new N(m,d+"enter",b,n,p),N.target=f,N.relatedTarget=E,v=N),E=v,C&&b)t:{for(N=C,m=b,d=0,f=N;f;f=hn(f))d++;for(f=0,v=m;v;v=hn(v))f++;for(;0<d-f;)N=hn(N),d--;for(;0<f-d;)m=hn(m),f--;for(;d--;){if(N===m||m!==null&&N===m.alternate)break t;N=hn(N),m=hn(m)}N=null}else N=null;C!==null&&Ca(h,g,C,N,!1),b!==null&&E!==null&&Ca(h,E,b,N,!0)}}e:{if(g=c?bn(c):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var j=Uf;else if(xa(g))if(vc)j=Hf;else{j=Vf;var T=Bf}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Wf);if(j&&(j=j(e,c))){gc(h,j,n,p);break e}T&&T(e,g,c),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&no(g,"number",g.value)}switch(T=c?bn(c):window,e){case"focusin":(xa(T)||T.contentEditable==="true")&&(wn=T,ho=c,fr=null);break;case"focusout":fr=ho=wn=null;break;case"mousedown":go=!0;break;case"contextmenu":case"mouseup":case"dragend":go=!1,ba(h,n,p);break;case"selectionchange":if(Jf)break;case"keydown":case"keyup":ba(h,n,p)}var x;if(fs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else kn?mc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(fc&&n.locale!=="ko"&&(kn||z!=="onCompositionStart"?z==="onCompositionEnd"&&kn&&(x=pc()):(Rt=p,cs="value"in Rt?Rt.value:Rt.textContent,kn=!0)),T=Rl(c,z),0<T.length&&(z=new ma(z,e,null,n,p),h.push({event:z,listeners:T}),x?z.data=x:(x=hc(n),x!==null&&(z.data=x)))),(x=Lf?Of(e,n):Af(e,n))&&(c=Rl(c,"onBeforeInput"),0<c.length&&(p=new ma("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=x))}Ec(h,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Rl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=wr(e,n),o!=null&&r.unshift(zr(e,o,l)),o=wr(e,t),o!=null&&r.push(zr(e,o,l))),e=e.return}return r}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ca(e,t,n,r,l){for(var o=t._reactName,s=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=wr(n,o),a!=null&&s.unshift(zr(n,a,u))):l||(a=wr(n,o),a!=null&&s.push(zr(n,a,u)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Zf=/\r\n?/g,qf=/\u0000|\uFFFD/g;function Ea(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(qf,"")}function rl(e,t,n){if(t=Ea(t),Ea(e)!==t&&n)throw Error(I(425))}function Dl(){}var vo=null,xo=null;function yo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ko=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,za=typeof Promise=="function"?Promise:void 0,tm=typeof queueMicrotask=="function"?queueMicrotask:typeof za<"u"?function(e){return za.resolve(null).then(e).catch(nm)}:ko;function nm(e){setTimeout(function(){throw e})}function Oi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Sr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Sr(t)}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _a(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),dt="__reactFiber$"+Jn,_r="__reactProps$"+Jn,wt="__reactContainer$"+Jn,wo="__reactEvents$"+Jn,rm="__reactListeners$"+Jn,lm="__reactHandles$"+Jn;function Zt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_a(e);e!==null;){if(n=e[dt])return n;e=_a(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[dt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function ri(e){return e[_r]||null}var jo=[],Sn=-1;function Kt(e){return{current:e}}function q(e){0>Sn||(e.current=jo[Sn],jo[Sn]=null,Sn--)}function X(e,t){Sn++,jo[Sn]=e.current,e.current=t}var Ht={},be=Kt(Ht),Me=Kt(!1),rn=Ht;function An(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Le(e){return e=e.childContextTypes,e!=null}function Pl(){q(Me),q(be)}function Ta(e,t,n){if(be.current!==Ht)throw Error(I(168));X(be,t),X(Me,n)}function _c(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(I(108,Up(e)||"Unknown",l));return re({},n,r)}function Ml(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,rn=be.current,X(be,e),X(Me,Me.current),!0}function Ia(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=_c(e,t,rn),r.__reactInternalMemoizedMergedChildContext=e,q(Me),q(be),X(be,e)):q(Me),X(Me,n)}var gt=null,li=!1,Ai=!1;function Tc(e){gt===null?gt=[e]:gt.push(e)}function im(e){li=!0,Tc(e)}function Jt(){if(!Ai&&gt!==null){Ai=!0;var e=0,t=J;try{var n=gt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}gt=null,li=!1}catch(l){throw gt!==null&&(gt=gt.slice(e+1)),tc(os,Jt),l}finally{J=t,Ai=!1}}return null}var Nn=[],Cn=0,Ll=null,Ol=0,Qe=[],Ke=0,ln=null,vt=1,xt="";function Gt(e,t){Nn[Cn++]=Ol,Nn[Cn++]=Ll,Ll=e,Ol=t}function Ic(e,t,n){Qe[Ke++]=vt,Qe[Ke++]=xt,Qe[Ke++]=ln,ln=e;var r=vt;e=xt;var l=32-it(r)-1;r&=~(1<<l),n+=1;var o=32-it(t)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,vt=1<<32-it(t)+l|n<<l|r,xt=o+e}else vt=1<<o|n<<l|r,xt=e}function hs(e){e.return!==null&&(Gt(e,1),Ic(e,1,0))}function gs(e){for(;e===Ll;)Ll=Nn[--Cn],Nn[Cn]=null,Ol=Nn[--Cn],Nn[Cn]=null;for(;e===ln;)ln=Qe[--Ke],Qe[Ke]=null,xt=Qe[--Ke],Qe[Ke]=null,vt=Qe[--Ke],Qe[Ke]=null}var $e=null,Fe=null,ee=!1,lt=null;function Rc(e,t){var n=Ye(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ra(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Fe=At(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:vt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ye(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Fe=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function So(e){if(ee){var t=Fe;if(t){var n=t;if(!Ra(e,t)){if(bo(e))throw Error(I(418));t=At(n.nextSibling);var r=$e;t&&Ra(e,t)?Rc(r,n):(e.flags=e.flags&-4097|2,ee=!1,$e=e)}}else{if(bo(e))throw Error(I(418));e.flags=e.flags&-4097|2,ee=!1,$e=e}}}function Da(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function ll(e){if(e!==$e)return!1;if(!ee)return Da(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yo(e.type,e.memoizedProps)),t&&(t=Fe)){if(bo(e))throw Dc(),Error(I(418));for(;t;)Rc(e,t),t=At(t.nextSibling)}if(Da(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=At(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=$e?At(e.stateNode.nextSibling):null;return!0}function Dc(){for(var e=Fe;e;)e=At(e.nextSibling)}function Fn(){Fe=$e=null,ee=!1}function vs(e){lt===null?lt=[e]:lt.push(e)}var om=St.ReactCurrentBatchConfig;function tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var u=l.refs;s===null?delete u[o]:u[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function il(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pa(e){var t=e._init;return t(e._payload)}function Pc(e){function t(m,d){if(e){var f=m.deletions;f===null?(m.deletions=[d],m.flags|=16):f.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function l(m,d){return m=Bt(m,d),m.index=0,m.sibling=null,m}function o(m,d,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<d?(m.flags|=2,d):f):(m.flags|=2,d)):(m.flags|=1048576,d)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,d,f,v){return d===null||d.tag!==6?(d=Hi(f,m.mode,v),d.return=m,d):(d=l(d,f),d.return=m,d)}function a(m,d,f,v){var j=f.type;return j===yn?p(m,d,f.props.children,v,f.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Et&&Pa(j)===d.type)?(v=l(d,f.props),v.ref=tr(m,d,f),v.return=m,v):(v=jl(f.type,f.key,f.props,null,m.mode,v),v.ref=tr(m,d,f),v.return=m,v)}function c(m,d,f,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=Qi(f,m.mode,v),d.return=m,d):(d=l(d,f.children||[]),d.return=m,d)}function p(m,d,f,v,j){return d===null||d.tag!==7?(d=nn(f,m.mode,v,j),d.return=m,d):(d=l(d,f),d.return=m,d)}function h(m,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Hi(""+d,m.mode,f),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Jr:return f=jl(d.type,d.key,d.props,null,m.mode,f),f.ref=tr(m,null,d),f.return=m,f;case xn:return d=Qi(d,m.mode,f),d.return=m,d;case Et:var v=d._init;return h(m,v(d._payload),f)}if(ir(d)||Gn(d))return d=nn(d,m.mode,f,null),d.return=m,d;il(m,d)}return null}function g(m,d,f,v){var j=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return j!==null?null:u(m,d,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jr:return f.key===j?a(m,d,f,v):null;case xn:return f.key===j?c(m,d,f,v):null;case Et:return j=f._init,g(m,d,j(f._payload),v)}if(ir(f)||Gn(f))return j!==null?null:p(m,d,f,v,null);il(m,f)}return null}function C(m,d,f,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(f)||null,u(d,m,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jr:return m=m.get(v.key===null?f:v.key)||null,a(d,m,v,j);case xn:return m=m.get(v.key===null?f:v.key)||null,c(d,m,v,j);case Et:var T=v._init;return C(m,d,f,T(v._payload),j)}if(ir(v)||Gn(v))return m=m.get(f)||null,p(d,m,v,j,null);il(d,v)}return null}function b(m,d,f,v){for(var j=null,T=null,x=d,z=d=0,O=null;x!==null&&z<f.length;z++){x.index>z?(O=x,x=null):O=x.sibling;var F=g(m,x,f[z],v);if(F===null){x===null&&(x=O);break}e&&x&&F.alternate===null&&t(m,x),d=o(F,d,z),T===null?j=F:T.sibling=F,T=F,x=O}if(z===f.length)return n(m,x),ee&&Gt(m,z),j;if(x===null){for(;z<f.length;z++)x=h(m,f[z],v),x!==null&&(d=o(x,d,z),T===null?j=x:T.sibling=x,T=x);return ee&&Gt(m,z),j}for(x=r(m,x);z<f.length;z++)O=C(x,m,z,f[z],v),O!==null&&(e&&O.alternate!==null&&x.delete(O.key===null?z:O.key),d=o(O,d,z),T===null?j=O:T.sibling=O,T=O);return e&&x.forEach(function(L){return t(m,L)}),ee&&Gt(m,z),j}function N(m,d,f,v){var j=Gn(f);if(typeof j!="function")throw Error(I(150));if(f=j.call(f),f==null)throw Error(I(151));for(var T=j=null,x=d,z=d=0,O=null,F=f.next();x!==null&&!F.done;z++,F=f.next()){x.index>z?(O=x,x=null):O=x.sibling;var L=g(m,x,F.value,v);if(L===null){x===null&&(x=O);break}e&&x&&L.alternate===null&&t(m,x),d=o(L,d,z),T===null?j=L:T.sibling=L,T=L,x=O}if(F.done)return n(m,x),ee&&Gt(m,z),j;if(x===null){for(;!F.done;z++,F=f.next())F=h(m,F.value,v),F!==null&&(d=o(F,d,z),T===null?j=F:T.sibling=F,T=F);return ee&&Gt(m,z),j}for(x=r(m,x);!F.done;z++,F=f.next())F=C(x,m,z,F.value,v),F!==null&&(e&&F.alternate!==null&&x.delete(F.key===null?z:F.key),d=o(F,d,z),T===null?j=F:T.sibling=F,T=F);return e&&x.forEach(function(Q){return t(m,Q)}),ee&&Gt(m,z),j}function E(m,d,f,v){if(typeof f=="object"&&f!==null&&f.type===yn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Jr:e:{for(var j=f.key,T=d;T!==null;){if(T.key===j){if(j=f.type,j===yn){if(T.tag===7){n(m,T.sibling),d=l(T,f.props.children),d.return=m,m=d;break e}}else if(T.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Et&&Pa(j)===T.type){n(m,T.sibling),d=l(T,f.props),d.ref=tr(m,T,f),d.return=m,m=d;break e}n(m,T);break}else t(m,T);T=T.sibling}f.type===yn?(d=nn(f.props.children,m.mode,v,f.key),d.return=m,m=d):(v=jl(f.type,f.key,f.props,null,m.mode,v),v.ref=tr(m,d,f),v.return=m,m=v)}return s(m);case xn:e:{for(T=f.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(m,d.sibling),d=l(d,f.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Qi(f,m.mode,v),d.return=m,m=d}return s(m);case Et:return T=f._init,E(m,d,T(f._payload),v)}if(ir(f))return b(m,d,f,v);if(Gn(f))return N(m,d,f,v);il(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(m,d.sibling),d=l(d,f),d.return=m,m=d):(n(m,d),d=Hi(f,m.mode,v),d.return=m,m=d),s(m)):n(m,d)}return E}var $n=Pc(!0),Mc=Pc(!1),Al=Kt(null),Fl=null,En=null,xs=null;function ys(){xs=En=Fl=null}function ks(e){var t=Al.current;q(Al),e._currentValue=t}function No(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pn(e,t){Fl=e,xs=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(xs!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Fl===null)throw Error(I(308));En=e,Fl.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var qt=null;function ws(e){qt===null?qt=[e]:qt.push(e)}function Lc(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,ws(t)):(n.next=l.next,l.next=n),t.interleaved=n,jt(e,r)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,jt(e,n)}return l=r.interleaved,l===null?(t.next=t,ws(r)):(t.next=l.next,l.next=t),r.interleaved=t,jt(e,n)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}function Ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $l(e,t,n,r){var l=e.updateQueue;zt=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,s===null?o=c:s.next=c,s=a;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==s&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=a))}if(o!==null){var h=l.baseState;s=0,p=c=a=null,u=o;do{var g=u.lane,C=u.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:C,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var b=e,N=u;switch(g=t,C=n,N.tag){case 1:if(b=N.payload,typeof b=="function"){h=b.call(C,h,g);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=N.payload,g=typeof b=="function"?b.call(C,h,g):b,g==null)break e;h=re({},h,g);break e;case 2:zt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[u]:g.push(u))}else C={eventTime:C,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=C,a=h):p=p.next=C,s|=g;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;g=u,u=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(p===null&&(a=h),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do s|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);sn|=s,e.lanes=s,e.memoizedState=h}}function La(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(I(191,l));l.call(r)}}}var Br={},mt=Kt(Br),Tr=Kt(Br),Ir=Kt(Br);function en(e){if(e===Br)throw Error(I(174));return e}function bs(e,t){switch(X(Ir,t),X(Tr,e),X(mt,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=lo(t,e)}q(mt),X(mt,t)}function Un(){q(mt),q(Tr),q(Ir)}function Ac(e){en(Ir.current);var t=en(mt.current),n=lo(t,e.type);t!==n&&(X(Tr,e),X(mt,n))}function Ss(e){Tr.current===e&&(q(mt),q(Tr))}var te=Kt(0);function Ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=[];function Ns(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var vl=St.ReactCurrentDispatcher,$i=St.ReactCurrentBatchConfig,on=0,ne=null,de=null,me=null,Bl=!1,mr=!1,Rr=0,sm=0;function ke(){throw Error(I(321))}function Cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function Es(e,t,n,r,l,o){if(on=o,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vl.current=e===null||e.memoizedState===null?dm:pm,e=n(r,l),mr){o=0;do{if(mr=!1,Rr=0,25<=o)throw Error(I(301));o+=1,me=de=null,t.updateQueue=null,vl.current=fm,e=n(r,l)}while(mr)}if(vl.current=Vl,t=de!==null&&de.next!==null,on=0,me=de=ne=null,Bl=!1,t)throw Error(I(300));return e}function zs(){var e=Rr!==0;return Rr=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?ne.memoizedState=me=e:me=me.next=e,me}function Ze(){if(de===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=me===null?ne.memoizedState:me.next;if(t!==null)me=t,de=e;else{if(e===null)throw Error(I(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},me===null?ne.memoizedState=me=e:me=me.next=e}return me}function Dr(e,t){return typeof t=="function"?t(e):t}function Ui(e){var t=Ze(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=de,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=s=null,a=null,c=o;do{var p=c.lane;if((on&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=h,s=r):a=a.next=h,ne.lanes|=p,sn|=p}c=c.next}while(c!==null&&c!==o);a===null?s=r:a.next=u,st(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,ne.lanes|=o,sn|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);st(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fc(){}function $c(e,t){var n=ne,r=Ze(),l=t(),o=!st(r.memoizedState,l);if(o&&(r.memoizedState=l,Pe=!0),r=r.queue,_s(Vc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Pr(9,Bc.bind(null,n,r,l,t),void 0,null),he===null)throw Error(I(349));on&30||Uc(n,t,l)}return l}function Uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bc(e,t,n,r){t.value=n,t.getSnapshot=r,Wc(t)&&Hc(e)}function Vc(e,t,n){return n(function(){Wc(t)&&Hc(e)})}function Wc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function Hc(e){var t=jt(e,1);t!==null&&ot(t,e,1,-1)}function Oa(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=cm.bind(null,ne,e),[t.memoizedState,e]}function Pr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qc(){return Ze().memoizedState}function xl(e,t,n,r){var l=ct();ne.flags|=e,l.memoizedState=Pr(1|t,n,void 0,r===void 0?null:r)}function ii(e,t,n,r){var l=Ze();r=r===void 0?null:r;var o=void 0;if(de!==null){var s=de.memoizedState;if(o=s.destroy,r!==null&&Cs(r,s.deps)){l.memoizedState=Pr(t,n,o,r);return}}ne.flags|=e,l.memoizedState=Pr(1|t,n,o,r)}function Aa(e,t){return xl(8390656,8,e,t)}function _s(e,t){return ii(2048,8,e,t)}function Kc(e,t){return ii(4,2,e,t)}function Jc(e,t){return ii(4,4,e,t)}function Yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gc(e,t,n){return n=n!=null?n.concat([e]):null,ii(4,4,Yc.bind(null,t,e),n)}function Ts(){}function Xc(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zc(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qc(e,t,n){return on&21?(st(n,t)||(n=lc(),ne.lanes|=n,sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function am(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=$i.transition;$i.transition={};try{e(!1),t()}finally{J=n,$i.transition=r}}function ed(){return Ze().memoizedState}function um(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},td(e))nd(t,n);else if(n=Lc(e,t,n,r),n!==null){var l=Ce();ot(n,e,r,l),rd(n,t,r)}}function cm(e,t,n){var r=Ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(td(e))nd(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,u=o(s,n);if(l.hasEagerState=!0,l.eagerState=u,st(u,s)){var a=t.interleaved;a===null?(l.next=l,ws(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Lc(e,t,l,r),n!==null&&(l=Ce(),ot(n,e,r,l),rd(n,t,r))}}function td(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function nd(e,t){mr=Bl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ss(e,n)}}var Vl={readContext:Xe,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},dm={readContext:Xe,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Aa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xl(4194308,4,Yc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xl(4194308,4,e,t)},useInsertionEffect:function(e,t){return xl(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=um.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:Oa,useDebugValue:Ts,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=Oa(!1),t=e[0];return e=am.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ne,l=ct();if(ee){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),he===null)throw Error(I(349));on&30||Uc(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Aa(Vc.bind(null,r,o,e),[e]),r.flags|=2048,Pr(9,Bc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ct(),t=he.identifierPrefix;if(ee){var n=xt,r=vt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pm={readContext:Xe,useCallback:Xc,useContext:Xe,useEffect:_s,useImperativeHandle:Gc,useInsertionEffect:Kc,useLayoutEffect:Jc,useMemo:Zc,useReducer:Ui,useRef:Qc,useState:function(){return Ui(Dr)},useDebugValue:Ts,useDeferredValue:function(e){var t=Ze();return qc(t,de.memoizedState,e)},useTransition:function(){var e=Ui(Dr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:$c,useId:ed,unstable_isNewReconciler:!1},fm={readContext:Xe,useCallback:Xc,useContext:Xe,useEffect:_s,useImperativeHandle:Gc,useInsertionEffect:Kc,useLayoutEffect:Jc,useMemo:Zc,useReducer:Bi,useRef:Qc,useState:function(){return Bi(Dr)},useDebugValue:Ts,useDeferredValue:function(e){var t=Ze();return de===null?t.memoizedState=e:qc(t,de.memoizedState,e)},useTransition:function(){var e=Bi(Dr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:Fc,useSyncExternalStore:$c,useId:ed,unstable_isNewReconciler:!1};function nt(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Co(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:re({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var oi={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),l=Ut(e),o=yt(r,l);o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,l),t!==null&&(ot(t,e,l,r),gl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),l=Ut(e),o=yt(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ft(e,o,l),t!==null&&(ot(t,e,l,r),gl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Ut(e),l=yt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ft(e,l,r),t!==null&&(ot(t,e,r,n),gl(t,e,r))}};function Fa(e,t,n,r,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(l,o):!0}function ld(e,t,n){var r=!1,l=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Xe(o):(l=Le(t)?rn:be.current,r=t.contextTypes,o=(r=r!=null)?An(e,l):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function Eo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},js(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=Xe(o):(o=Le(t)?rn:be.current,l.context=An(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Co(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&oi.enqueueReplaceState(l,l.state,null),$l(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Bn(e,t){try{var n="",r=t;do n+=$p(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Vi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function id(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Ao=r),zo(e,t)},n}function od(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zo(e,t),typeof r!="function"&&($t===null?$t=new Set([this]):$t.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ua(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mm;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=zm.bind(null,e,t,n),t.then(e,e))}function Ba(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Va(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Ft(n,t,1))),n.lanes|=1),e)}var hm=St.ReactCurrentOwner,Pe=!1;function Ne(e,t,n,r){t.child=e===null?Mc(t,null,n,r):$n(t,e.child,n,r)}function Wa(e,t,n,r,l){n=n.render;var o=t.ref;return Pn(t,l),r=Es(e,t,n,r,o,l),n=zs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(ee&&n&&hs(t),t.flags|=1,Ne(e,t,r,l),t.child)}function Ha(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!As(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sd(e,t,o,r,l)):(e=jl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(s,r)&&e.ref===t.ref)return bt(e,t,l)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function sd(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Cr(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,bt(e,t,l)}return _o(e,t,n,r,l)}function ad(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(_n,Ae),Ae|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(_n,Ae),Ae|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(_n,Ae),Ae|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(_n,Ae),Ae|=r;return Ne(e,t,l,n),t.child}function ud(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _o(e,t,n,r,l){var o=Le(n)?rn:be.current;return o=An(t,o),Pn(t,l),n=Es(e,t,n,r,o,l),r=zs(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(ee&&r&&hs(t),t.flags|=1,Ne(e,t,n,l),t.child)}function Qa(e,t,n,r,l){if(Le(n)){var o=!0;Ml(t)}else o=!1;if(Pn(t,l),t.stateNode===null)yl(e,t),ld(t,n,r),Eo(t,n,r,l),r=!0;else if(e===null){var s=t.stateNode,u=t.memoizedProps;s.props=u;var a=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Le(n)?rn:be.current,c=An(t,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==r||a!==c)&&$a(t,s,r,c),zt=!1;var g=t.memoizedState;s.state=g,$l(t,r,s,l),a=t.memoizedState,u!==r||g!==a||Me.current||zt?(typeof p=="function"&&(Co(t,n,p,r),a=t.memoizedState),(u=zt||Fa(t,n,u,r,g,a,c))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=c,r=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Oc(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:nt(t.type,u),s.props=c,h=t.pendingProps,g=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Xe(a):(a=Le(n)?rn:be.current,a=An(t,a));var C=n.getDerivedStateFromProps;(p=typeof C=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==h||g!==a)&&$a(t,s,r,a),zt=!1,g=t.memoizedState,s.state=g,$l(t,r,s,l);var b=t.memoizedState;u!==h||g!==b||Me.current||zt?(typeof C=="function"&&(Co(t,n,C,r),b=t.memoizedState),(c=zt||Fa(t,n,c,r,g,b,a)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),s.props=r,s.state=b,s.context=a,r=c):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return To(e,t,n,r,o,l)}function To(e,t,n,r,l,o){ud(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return l&&Ia(t,n,!1),bt(e,t,o);r=t.stateNode,hm.current=t;var u=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=$n(t,e.child,null,o),t.child=$n(t,null,u,o)):Ne(e,t,u,o),t.memoizedState=r.state,l&&Ia(t,n,!0),t.child}function cd(e){var t=e.stateNode;t.pendingContext?Ta(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ta(e,t.context,!1),bs(e,t.containerInfo)}function Ka(e,t,n,r,l){return Fn(),vs(l),t.flags|=256,Ne(e,t,n,r),t.child}var Io={dehydrated:null,treeContext:null,retryLane:0};function Ro(e){return{baseLanes:e,cachePool:null,transitions:null}}function dd(e,t,n){var r=t.pendingProps,l=te.current,o=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),X(te,l&1),e===null)return So(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ui(s,r,0,null),e=nn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ro(n),t.memoizedState=Io,e):Is(t,s));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return gm(e,t,s,r,u,l,n);if(o){o=r.fallback,s=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Bt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=Bt(u,o):(o=nn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Ro(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Io,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Is(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ol(e,t,n,r){return r!==null&&vs(r),$n(t,e.child,null,n),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gm(e,t,n,r,l,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Vi(Error(I(422))),ol(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=ui({mode:"visible",children:r.children},l,0,null),o=nn(o,l,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&$n(t,e.child,null,s),t.child.memoizedState=Ro(s),t.memoizedState=Io,o);if(!(t.mode&1))return ol(e,t,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(I(419)),r=Vi(o,r,void 0),ol(e,t,s,r)}if(u=(s&e.childLanes)!==0,Pe||u){if(r=he,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,jt(e,l),ot(r,e,l,-1))}return Os(),r=Vi(Error(I(421))),ol(e,t,s,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=_m.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,Fe=At(l.nextSibling),$e=t,ee=!0,lt=null,e!==null&&(Qe[Ke++]=vt,Qe[Ke++]=xt,Qe[Ke++]=ln,vt=e.id,xt=e.overflow,ln=t),t=Is(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),No(e.return,t,n)}function Wi(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function pd(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=te.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(te,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Ul(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Wi(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Wi(t,!0,n,null,o);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function yl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t,n){switch(t.tag){case 3:cd(t),Fn();break;case 5:Ac(t);break;case 1:Le(t.type)&&Ml(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;X(Al,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(te,te.current&1),t.flags|=128,null):n&t.child.childLanes?dd(e,t,n):(X(te,te.current&1),e=bt(e,t,n),e!==null?e.sibling:null);X(te,te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pd(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),X(te,te.current),r)break;return null;case 22:case 23:return t.lanes=0,ad(e,t,n)}return bt(e,t,n)}var fd,Do,md,hd;fd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Do=function(){};md=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,en(mt.current);var o=null;switch(n){case"input":l=eo(e,l),r=eo(e,r),o=[];break;case"select":l=re({},l,{value:void 0}),r=re({},r,{value:void 0}),o=[];break;case"textarea":l=ro(e,l),r=ro(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Dl)}io(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(s in u)u.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(s in u)!u.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&u[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Z("scroll",e),o||u===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};hd=function(e,t,n,r){n!==r&&(t.flags|=4)};function nr(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xm(e,t,n){var r=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Le(t.type)&&Pl(),we(t),null;case 3:return r=t.stateNode,Un(),q(Me),q(be),Ns(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ll(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Uo(lt),lt=null))),Do(e,t),we(t),null;case 5:Ss(t);var l=en(Ir.current);if(n=t.type,e!==null&&t.stateNode!=null)md(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return we(t),null}if(e=en(mt.current),ll(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[dt]=t,r[_r]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(l=0;l<sr.length;l++)Z(sr[l],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":ra(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":ia(r,o),Z("invalid",r)}io(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var u=o[s];s==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,u,e),l=["children",""+u]):yr.hasOwnProperty(s)&&u!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":Yr(r),la(r,o,!0);break;case"textarea":Yr(r),oa(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Dl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[dt]=t,e[_r]=r,fd(e,t,!1,!1),t.stateNode=e;e:{switch(s=oo(n,r),n){case"dialog":Z("cancel",e),Z("close",e),l=r;break;case"iframe":case"object":case"embed":Z("load",e),l=r;break;case"video":case"audio":for(l=0;l<sr.length;l++)Z(sr[l],e);l=r;break;case"source":Z("error",e),l=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),l=r;break;case"details":Z("toggle",e),l=r;break;case"input":ra(e,r),l=eo(e,r),Z("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=re({},r,{value:void 0}),Z("invalid",e);break;case"textarea":ia(e,r),l=ro(e,r),Z("invalid",e);break;default:l=r}io(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?Qu(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wu(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&kr(e,a):typeof a=="number"&&kr(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(yr.hasOwnProperty(o)?a!=null&&o==="onScroll"&&Z("scroll",e):a!=null&&ts(e,o,a,s))}switch(n){case"input":Yr(e),la(e,r,!1);break;case"textarea":Yr(e),oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Wt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)hd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=en(Ir.current),en(mt.current),ll(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(o=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return we(t),null;case 13:if(q(te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Fe!==null&&t.mode&1&&!(t.flags&128))Dc(),Fn(),t.flags|=98560,o=!1;else if(o=ll(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[dt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else lt!==null&&(Uo(lt),lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||te.current&1?pe===0&&(pe=3):Os())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Un(),Do(e,t),e===null&&Er(t.stateNode.containerInfo),we(t),null;case 10:return ks(t.type._context),we(t),null;case 17:return Le(t.type)&&Pl(),we(t),null;case 19:if(q(te),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)nr(o,!1);else{if(pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ul(e),s!==null){for(t.flags|=128,nr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(te,te.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Vn&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ul(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return we(t),null}else 2*ae()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,nr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=te.current,X(te,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ae&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function ym(e,t){switch(gs(t),t.tag){case 1:return Le(t.type)&&Pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(),q(Me),q(be),Ns(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ss(t),null;case 13:if(q(te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return q(te),null;case 4:return Un(),null;case 10:return ks(t.type._context),null;case 22:case 23:return Ls(),null;case 24:return null;default:return null}}var sl=!1,je=!1,km=typeof WeakSet=="function"?WeakSet:Set,A=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(e,t,r)}else n.current=null}function Po(e,t,n){try{n()}catch(r){ie(e,t,r)}}var Ya=!1;function wm(e,t){if(vo=Tl,e=kc(),ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,u=-1,a=-1,c=0,p=0,h=e,g=null;t:for(;;){for(var C;h!==n||l!==0&&h.nodeType!==3||(u=s+l),h!==o||r!==0&&h.nodeType!==3||(a=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(C=h.firstChild)!==null;)g=h,h=C;for(;;){if(h===e)break t;if(g===n&&++c===l&&(u=s),g===o&&++p===r&&(a=s),(C=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=C}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(xo={focusedElem:e,selectionRange:n},Tl=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var N=b.memoizedProps,E=b.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?N:nt(t.type,N),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(v){ie(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return b=Ya,Ya=!1,b}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Po(t,n,o)}l=l.next}while(l!==r)}}function si(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gd(e){var t=e.alternate;t!==null&&(e.alternate=null,gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[_r],delete t[wo],delete t[rm],delete t[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vd(e){return e.tag===5||e.tag===3||e.tag===4}function Ga(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Dl));else if(r!==4&&(e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}function Oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oo(e,t,n),e=e.sibling;e!==null;)Oo(e,t,n),e=e.sibling}var ve=null,rt=!1;function Nt(e,t,n){for(n=n.child;n!==null;)xd(e,t,n),n=n.sibling}function xd(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ql,n)}catch{}switch(n.tag){case 5:je||zn(n,t);case 6:var r=ve,l=rt;ve=null,Nt(e,t,n),ve=r,rt=l,ve!==null&&(rt?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(rt?(e=ve,n=n.stateNode,e.nodeType===8?Oi(e.parentNode,n):e.nodeType===1&&Oi(e,n),Sr(e)):Oi(ve,n.stateNode));break;case 4:r=ve,l=rt,ve=n.stateNode.containerInfo,rt=!0,Nt(e,t,n),ve=r,rt=l;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Po(n,t,s),l=l.next}while(l!==r)}Nt(e,t,n);break;case 1:if(!je&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ie(n,t,u)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,Nt(e,t,n),je=r):Nt(e,t,n);break;default:Nt(e,t,n)}}function Xa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new km),t.forEach(function(r){var l=Tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function tt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,s=t,u=s;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,rt=!1;break e;case 3:ve=u.stateNode.containerInfo,rt=!0;break e;case 4:ve=u.stateNode.containerInfo,rt=!0;break e}u=u.return}if(ve===null)throw Error(I(160));xd(o,s,l),ve=null,rt=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){ie(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yd(t,e),t=t.sibling}function yd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(tt(t,e),at(e),r&4){try{hr(3,e,e.return),si(3,e)}catch(N){ie(e,e.return,N)}try{hr(5,e,e.return)}catch(N){ie(e,e.return,N)}}break;case 1:tt(t,e),at(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if(tt(t,e),at(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var l=e.stateNode;try{kr(l,"")}catch(N){ie(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Uu(l,o),oo(u,s);var c=oo(u,o);for(s=0;s<a.length;s+=2){var p=a[s],h=a[s+1];p==="style"?Qu(l,h):p==="dangerouslySetInnerHTML"?Wu(l,h):p==="children"?kr(l,h):ts(l,p,h,c)}switch(u){case"input":to(l,o);break;case"textarea":Bu(l,o);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var C=o.value;C!=null?Tn(l,!!o.multiple,C,!1):g!==!!o.multiple&&(o.defaultValue!=null?Tn(l,!!o.multiple,o.defaultValue,!0):Tn(l,!!o.multiple,o.multiple?[]:"",!1))}l[_r]=o}catch(N){ie(e,e.return,N)}}break;case 6:if(tt(t,e),at(e),r&4){if(e.stateNode===null)throw Error(I(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(N){ie(e,e.return,N)}}break;case 3:if(tt(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sr(t.containerInfo)}catch(N){ie(e,e.return,N)}break;case 4:tt(t,e),at(e);break;case 13:tt(t,e),at(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ps=ae())),r&4&&Xa(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(je=(c=je)||p,tt(t,e),je=c):tt(t,e),at(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(A=e,p=e.child;p!==null;){for(h=A=p;A!==null;){switch(g=A,C=g.child,g.tag){case 0:case 11:case 14:case 15:hr(4,g,g.return);break;case 1:zn(g,g.return);var b=g.stateNode;if(typeof b.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(N){ie(r,n,N)}}break;case 5:zn(g,g.return);break;case 22:if(g.memoizedState!==null){qa(h);continue}}C!==null?(C.return=g,A=C):qa(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,a=h.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Hu("display",s))}catch(N){ie(e,e.return,N)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(N){ie(e,e.return,N)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:tt(t,e),at(e),r&4&&Xa(e);break;case 21:break;default:tt(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vd(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(kr(l,""),r.flags&=-33);var o=Ga(e);Oo(e,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,u=Ga(e);Lo(e,u,s);break;default:throw Error(I(161))}}catch(a){ie(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function jm(e,t,n){A=e,kd(e)}function kd(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var l=A,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||sl;if(!s){var u=l.alternate,a=u!==null&&u.memoizedState!==null||je;u=sl;var c=je;if(sl=s,(je=a)&&!c)for(A=l;A!==null;)s=A,a=s.child,s.tag===22&&s.memoizedState!==null?eu(l):a!==null?(a.return=s,A=a):eu(l);for(;o!==null;)A=o,kd(o),o=o.sibling;A=l,sl=u,je=c}Za(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,A=o):Za(e)}}function Za(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:je||si(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!je)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:nt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&La(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}La(t,s,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Sr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}je||t.flags&512&&Mo(t)}catch(g){ie(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function qa(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function eu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{si(4,t)}catch(a){ie(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ie(t,l,a)}}var o=t.return;try{Mo(t)}catch(a){ie(t,o,a)}break;case 5:var s=t.return;try{Mo(t)}catch(a){ie(t,s,a)}}}catch(a){ie(t,t.return,a)}if(t===e){A=null;break}var u=t.sibling;if(u!==null){u.return=t.return,A=u;break}A=t.return}}var bm=Math.ceil,Wl=St.ReactCurrentDispatcher,Rs=St.ReactCurrentOwner,Ge=St.ReactCurrentBatchConfig,K=0,he=null,ue=null,xe=0,Ae=0,_n=Kt(0),pe=0,Mr=null,sn=0,ai=0,Ds=0,gr=null,De=null,Ps=0,Vn=1/0,ht=null,Hl=!1,Ao=null,$t=null,al=!1,Dt=null,Ql=0,vr=0,Fo=null,kl=-1,wl=0;function Ce(){return K&6?ae():kl!==-1?kl:kl=ae()}function Ut(e){return e.mode&1?K&2&&xe!==0?xe&-xe:om.transition!==null?(wl===0&&(wl=lc()),wl):(e=J,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e):1}function ot(e,t,n,r){if(50<vr)throw vr=0,Fo=null,Error(I(185));Fr(e,n,r),(!(K&2)||e!==he)&&(e===he&&(!(K&2)&&(ai|=n),pe===4&&Tt(e,xe)),Oe(e,r),n===1&&K===0&&!(t.mode&1)&&(Vn=ae()+500,li&&Jt()))}function Oe(e,t){var n=e.callbackNode;of(e,t);var r=_l(e,e===he?xe:0);if(r===0)n!==null&&ua(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ua(n),t===1)e.tag===0?im(tu.bind(null,e)):Tc(tu.bind(null,e)),tm(function(){!(K&6)&&Jt()}),n=null;else{switch(ic(r)){case 1:n=os;break;case 4:n=nc;break;case 16:n=zl;break;case 536870912:n=rc;break;default:n=zl}n=zd(n,wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wd(e,t){if(kl=-1,wl=0,K&6)throw Error(I(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=_l(e,e===he?xe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Kl(e,r);else{t=r;var l=K;K|=2;var o=bd();(he!==e||xe!==t)&&(ht=null,Vn=ae()+500,tn(e,t));do try{Cm();break}catch(u){jd(e,u)}while(!0);ys(),Wl.current=o,K=l,ue!==null?t=0:(he=null,xe=0,t=pe)}if(t!==0){if(t===2&&(l=po(e),l!==0&&(r=l,t=$o(e,l))),t===1)throw n=Mr,tn(e,0),Tt(e,r),Oe(e,ae()),n;if(t===6)Tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Sm(l)&&(t=Kl(e,r),t===2&&(o=po(e),o!==0&&(r=o,t=$o(e,o))),t===1))throw n=Mr,tn(e,0),Tt(e,r),Oe(e,ae()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Xt(e,De,ht);break;case 3:if(Tt(e,r),(r&130023424)===r&&(t=Ps+500-ae(),10<t)){if(_l(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=ko(Xt.bind(null,e,De,ht),t);break}Xt(e,De,ht);break;case 4:if(Tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var s=31-it(r);o=1<<s,s=t[s],s>l&&(l=s),r&=~o}if(r=l,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bm(r/1960))-r,10<r){e.timeoutHandle=ko(Xt.bind(null,e,De,ht),r);break}Xt(e,De,ht);break;case 5:Xt(e,De,ht);break;default:throw Error(I(329))}}}return Oe(e,ae()),e.callbackNode===n?wd.bind(null,e):null}function $o(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(tn(e,t).flags|=256),e=Kl(e,t),e!==2&&(t=De,De=n,t!==null&&Uo(t)),e}function Uo(e){De===null?De=e:De.push.apply(De,e)}function Sm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!st(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Tt(e,t){for(t&=~Ds,t&=~ai,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function tu(e){if(K&6)throw Error(I(327));Mn();var t=_l(e,0);if(!(t&1))return Oe(e,ae()),null;var n=Kl(e,t);if(e.tag!==0&&n===2){var r=po(e);r!==0&&(t=r,n=$o(e,r))}if(n===1)throw n=Mr,tn(e,0),Tt(e,t),Oe(e,ae()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xt(e,De,ht),Oe(e,ae()),null}function Ms(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Vn=ae()+500,li&&Jt())}}function an(e){Dt!==null&&Dt.tag===0&&!(K&6)&&Mn();var t=K;K|=1;var n=Ge.transition,r=J;try{if(Ge.transition=null,J=1,e)return e()}finally{J=r,Ge.transition=n,K=t,!(K&6)&&Jt()}}function Ls(){Ae=_n.current,q(_n)}function tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pl();break;case 3:Un(),q(Me),q(be),Ns();break;case 5:Ss(r);break;case 4:Un();break;case 13:q(te);break;case 19:q(te);break;case 10:ks(r.type._context);break;case 22:case 23:Ls()}n=n.return}if(he=e,ue=e=Bt(e.current,null),xe=Ae=t,pe=0,Mr=null,Ds=ai=sn=0,De=gr=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}qt=null}return e}function jd(e,t){do{var n=ue;try{if(ys(),vl.current=Vl,Bl){for(var r=ne.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Bl=!1}if(on=0,me=de=ne=null,mr=!1,Rr=0,Rs.current=null,n===null||n.return===null){pe=1,Mr=t,ue=null;break}e:{var o=e,s=n.return,u=n,a=t;if(t=xe,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=u,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var C=Ba(s);if(C!==null){C.flags&=-257,Va(C,s,u,o,t),C.mode&1&&Ua(o,c,t),t=C,a=c;var b=t.updateQueue;if(b===null){var N=new Set;N.add(a),t.updateQueue=N}else b.add(a);break e}else{if(!(t&1)){Ua(o,c,t),Os();break e}a=Error(I(426))}}else if(ee&&u.mode&1){var E=Ba(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Va(E,s,u,o,t),vs(Bn(a,u));break e}}o=a=Bn(a,u),pe!==4&&(pe=2),gr===null?gr=[o]:gr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=id(o,a,t);Ma(o,m);break e;case 1:u=a;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&($t===null||!$t.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=od(o,u,t);Ma(o,v);break e}}o=o.return}while(o!==null)}Nd(n)}catch(j){t=j,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function bd(){var e=Wl.current;return Wl.current=Vl,e===null?Vl:e}function Os(){(pe===0||pe===3||pe===2)&&(pe=4),he===null||!(sn&268435455)&&!(ai&268435455)||Tt(he,xe)}function Kl(e,t){var n=K;K|=2;var r=bd();(he!==e||xe!==t)&&(ht=null,tn(e,t));do try{Nm();break}catch(l){jd(e,l)}while(!0);if(ys(),K=n,Wl.current=r,ue!==null)throw Error(I(261));return he=null,xe=0,pe}function Nm(){for(;ue!==null;)Sd(ue)}function Cm(){for(;ue!==null&&!Gp();)Sd(ue)}function Sd(e){var t=Ed(e.alternate,e,Ae);e.memoizedProps=e.pendingProps,t===null?Nd(e):ue=t,Rs.current=null}function Nd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ym(n,t),n!==null){n.flags&=32767,ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{pe=6,ue=null;return}}else if(n=xm(n,t,Ae),n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);pe===0&&(pe=5)}function Xt(e,t,n){var r=J,l=Ge.transition;try{Ge.transition=null,J=1,Em(e,t,n,r)}finally{Ge.transition=l,J=r}return null}function Em(e,t,n,r){do Mn();while(Dt!==null);if(K&6)throw Error(I(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sf(e,o),e===he&&(ue=he=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,zd(zl,function(){return Mn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ge.transition,Ge.transition=null;var s=J;J=1;var u=K;K|=4,Rs.current=null,wm(e,n),yd(n,e),Kf(xo),Tl=!!vo,xo=vo=null,e.current=n,jm(n),Xp(),K=u,J=s,Ge.transition=o}else e.current=n;if(al&&(al=!1,Dt=e,Ql=l),o=e.pendingLanes,o===0&&($t=null),ef(n.stateNode),Oe(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Hl)throw Hl=!1,e=Ao,Ao=null,e;return Ql&1&&e.tag!==0&&Mn(),o=e.pendingLanes,o&1?e===Fo?vr++:(vr=0,Fo=e):vr=0,Jt(),null}function Mn(){if(Dt!==null){var e=ic(Ql),t=Ge.transition,n=J;try{if(Ge.transition=null,J=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Ql=0,K&6)throw Error(I(331));var l=K;for(K|=4,A=e.current;A!==null;){var o=A,s=o.child;if(A.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(A=c;A!==null;){var p=A;switch(p.tag){case 0:case 11:case 15:hr(8,p,o)}var h=p.child;if(h!==null)h.return=p,A=h;else for(;A!==null;){p=A;var g=p.sibling,C=p.return;if(gd(p),p===c){A=null;break}if(g!==null){g.return=C,A=g;break}A=C}}}var b=o.alternate;if(b!==null){var N=b.child;if(N!==null){b.child=null;do{var E=N.sibling;N.sibling=null,N=E}while(N!==null)}}A=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,A=s;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:hr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,A=m;break e}A=o.return}}var d=e.current;for(A=d;A!==null;){s=A;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,A=f;else e:for(s=d;A!==null;){if(u=A,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:si(9,u)}}catch(j){ie(u,u.return,j)}if(u===s){A=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,A=v;break e}A=u.return}}if(K=l,Jt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ql,e)}catch{}r=!0}return r}finally{J=n,Ge.transition=t}}return!1}function nu(e,t,n){t=Bn(n,t),t=id(e,t,1),e=Ft(e,t,1),t=Ce(),e!==null&&(Fr(e,1,t),Oe(e,t))}function ie(e,t,n){if(e.tag===3)nu(e,e,n);else for(;t!==null;){if(t.tag===3){nu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($t===null||!$t.has(r))){e=Bn(n,e),e=od(t,e,1),t=Ft(t,e,1),e=Ce(),t!==null&&(Fr(t,1,e),Oe(t,e));break}}t=t.return}}function zm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(xe&n)===n&&(pe===4||pe===3&&(xe&130023424)===xe&&500>ae()-Ps?tn(e,0):Ds|=n),Oe(e,t)}function Cd(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=Ce();e=jt(e,t),e!==null&&(Fr(e,t,n),Oe(e,n))}function _m(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function Tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Cd(e,n)}var Ed;Ed=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,vm(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,ee&&t.flags&1048576&&Ic(t,Ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;yl(e,t),e=t.pendingProps;var l=An(t,be.current);Pn(t,n),l=Es(null,t,r,e,l,n);var o=zs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,Ml(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,js(t),l.updater=oi,t.stateNode=l,l._reactInternals=t,Eo(t,r,e,n),t=To(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&hs(t),Ne(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(yl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Rm(r),e=nt(r,e),l){case 0:t=_o(null,t,r,e,n);break e;case 1:t=Qa(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Ha(null,t,r,nt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),_o(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),Qa(e,t,r,l,n);case 3:e:{if(cd(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,l=o.element,Oc(e,t),$l(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=Bn(Error(I(423)),t),t=Ka(e,t,r,n,l);break e}else if(r!==l){l=Bn(Error(I(424)),t),t=Ka(e,t,r,n,l);break e}else for(Fe=At(t.stateNode.containerInfo.firstChild),$e=t,ee=!0,lt=null,n=Mc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),r===l){t=bt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return Ac(t),e===null&&So(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,yo(r,l)?s=null:o!==null&&yo(r,o)&&(t.flags|=32),ud(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&So(t),null;case 13:return dd(e,t,n);case 4:return bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),Wa(e,t,r,l,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,s=l.value,X(Al,r._currentValue),r._currentValue=s,o!==null)if(st(o.value,s)){if(o.children===l.children&&!Me.current){t=bt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){s=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=yt(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),No(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),No(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Pn(t,n),l=Xe(l),r=r(l),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,l=nt(r,t.pendingProps),l=nt(r.type,l),Ha(e,t,r,l,n);case 15:return sd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:nt(r,l),yl(e,t),t.tag=1,Le(r)?(e=!0,Ml(t)):e=!1,Pn(t,n),ld(t,r,l),Eo(t,r,l,n),To(null,t,r,!0,e,n);case 19:return pd(e,t,n);case 22:return ad(e,t,n)}throw Error(I(156,t.tag))};function zd(e,t){return tc(e,t)}function Im(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ye(e,t,n,r){return new Im(e,t,n,r)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rm(e){if(typeof e=="function")return As(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rs)return 11;if(e===ls)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=Ye(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function jl(e,t,n,r,l,o){var s=2;if(r=e,typeof e=="function")As(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case yn:return nn(n.children,l,o,t);case ns:s=8,l|=8;break;case Gi:return e=Ye(12,n,t,l|2),e.elementType=Gi,e.lanes=o,e;case Xi:return e=Ye(13,n,t,l),e.elementType=Xi,e.lanes=o,e;case Zi:return e=Ye(19,n,t,l),e.elementType=Zi,e.lanes=o,e;case Au:return ui(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lu:s=10;break e;case Ou:s=9;break e;case rs:s=11;break e;case ls:s=14;break e;case Et:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=Ye(s,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function nn(e,t,n,r){return e=Ye(7,e,r,t),e.lanes=n,e}function ui(e,t,n,r){return e=Ye(22,e,r,t),e.elementType=Au,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=Ye(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=Ye(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Fs(e,t,n,r,l,o,s,u,a){return e=new Dm(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ye(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},js(o),e}function Pm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _d(e){if(!e)return Ht;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(Le(n))return _c(e,n,t)}return t}function Td(e,t,n,r,l,o,s,u,a){return e=Fs(n,r,!0,e,l,o,s,u,a),e.context=_d(null),n=e.current,r=Ce(),l=Ut(n),o=yt(r,l),o.callback=t??null,Ft(n,o,l),e.current.lanes=l,Fr(e,l,r),Oe(e,r),e}function ci(e,t,n,r){var l=t.current,o=Ce(),s=Ut(l);return n=_d(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(l,t,s),e!==null&&(ot(e,l,s,o),gl(e,l,s)),s}function Jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){ru(e,t),(e=e.alternate)&&ru(e,t)}function Mm(){return null}var Id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Us(e){this._internalRoot=e}di.prototype.render=Us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));ci(e,t,null,null)};di.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;an(function(){ci(null,e,null,null)}),t[wt]=null}};function di(e){this._internalRoot=e}di.prototype.unstable_scheduleHydration=function(e){if(e){var t=ac();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&cc(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lu(){}function Lm(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Jl(s);o.call(c)}}var s=Td(t,r,e,0,null,!1,!1,"",lu);return e._reactRootContainer=s,e[wt]=s.current,Er(e.nodeType===8?e.parentNode:e),an(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=Jl(a);u.call(c)}}var a=Fs(e,0,!1,null,null,!1,!1,"",lu);return e._reactRootContainer=a,e[wt]=a.current,Er(e.nodeType===8?e.parentNode:e),an(function(){ci(t,a,n,r)}),a}function fi(e,t,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var u=l;l=function(){var a=Jl(s);u.call(a)}}ci(t,s,e,l)}else s=Lm(n,t,e,l,r);return Jl(s)}oc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=or(t.pendingLanes);n!==0&&(ss(t,n|1),Oe(t,ae()),!(K&6)&&(Vn=ae()+500,Jt()))}break;case 13:an(function(){var r=jt(e,1);if(r!==null){var l=Ce();ot(r,e,1,l)}}),$s(e,1)}};as=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=Ce();ot(t,e,134217728,n)}$s(e,134217728)}};sc=function(e){if(e.tag===13){var t=Ut(e),n=jt(e,t);if(n!==null){var r=Ce();ot(n,e,t,r)}$s(e,t)}};ac=function(){return J};uc=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};ao=function(e,t,n){switch(t){case"input":if(to(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=ri(r);if(!l)throw Error(I(90));$u(r),to(r,l)}}}break;case"textarea":Bu(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Yu=Ms;Gu=an;var Om={usingClientEntryPoint:!1,Events:[Ur,bn,ri,Ku,Ju,Ms]},rr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Am={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:St.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qu(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{ql=ul.inject(Am),ft=ul}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Om;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(t))throw Error(I(200));return Pm(e,t,null,n)};Be.createRoot=function(e,t){if(!Bs(e))throw Error(I(299));var n=!1,r="",l=Id;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Fs(e,1,!1,null,null,n,!1,r,l),e[wt]=t.current,Er(e.nodeType===8?e.parentNode:e),new Us(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=qu(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return an(e)};Be.hydrate=function(e,t,n){if(!pi(t))throw Error(I(200));return fi(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!Bs(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=Id;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Td(t,null,e,1,n??null,l,!1,o,s),e[wt]=t.current,Er(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new di(t)};Be.render=function(e,t,n){if(!pi(t))throw Error(I(200));return fi(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!pi(e))throw Error(I(40));return e._reactRootContainer?(an(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Be.unstable_batchedUpdates=Ms;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pi(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return fi(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rd)}catch(e){console.error(e)}}Rd(),Ru.exports=Be;var Fm=Ru.exports,iu=Fm;Ji.createRoot=iu.createRoot,Ji.hydrateRoot=iu.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lr(){return Lr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lr.apply(this,arguments)}var Pt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pt||(Pt={}));const ou="popstate";function $m(e){e===void 0&&(e={});function t(l,o){let{pathname:s="/",search:u="",hash:a=""}=dn(l.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),Bo("",{pathname:s,search:u,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(l,o){let s=l.document.querySelector("base"),u="";if(s&&s.getAttribute("href")){let a=l.location.href,c=a.indexOf("#");u=c===-1?a:a.slice(0,c)}return u+"#"+(typeof o=="string"?o:Yl(o))}function r(l,o){mi(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Bm(t,n,r,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Um(){return Math.random().toString(36).substr(2,8)}function su(e,t){return{usr:e.state,key:e.key,idx:t}}function Bo(e,t,n,r){return n===void 0&&(n=null),Lr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||Um()})}function Yl(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Bm(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,s=l.history,u=Pt.Pop,a=null,c=p();c==null&&(c=0,s.replaceState(Lr({},s.state,{idx:c}),""));function p(){return(s.state||{idx:null}).idx}function h(){u=Pt.Pop;let E=p(),m=E==null?null:E-c;c=E,a&&a({action:u,location:N.location,delta:m})}function g(E,m){u=Pt.Push;let d=Bo(N.location,E,m);n&&n(d,E),c=p()+1;let f=su(d,c),v=N.createHref(d);try{s.pushState(f,"",v)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;l.location.assign(v)}o&&a&&a({action:u,location:N.location,delta:1})}function C(E,m){u=Pt.Replace;let d=Bo(N.location,E,m);n&&n(d,E),c=p();let f=su(d,c),v=N.createHref(d);s.replaceState(f,"",v),o&&a&&a({action:u,location:N.location,delta:0})}function b(E){let m=l.location.origin!=="null"?l.location.origin:l.location.href,d=typeof E=="string"?E:Yl(E);return d=d.replace(/ $/,"%20"),oe(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let N={get action(){return u},get location(){return e(l,s)},listen(E){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(ou,h),a=E,()=>{l.removeEventListener(ou,h),a=null}},createHref(E){return t(l,E)},createURL:b,encodeLocation(E){let m=b(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:C,go(E){return s.go(E)}};return N}var au;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(au||(au={}));function Vm(e,t,n){return n===void 0&&(n="/"),Wm(e,t,n)}function Wm(e,t,n,r){let l=typeof t=="string"?dn(t):t,o=Wn(l.pathname||"/",n);if(o==null)return null;let s=Dd(e);Hm(s);let u=null;for(let a=0;u==null&&a<s.length;++a){let c=nh(o);u=eh(s[a],c)}return u}function Dd(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,s,u)=>{let a={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Vt([r,a.relativePath]),p=n.concat(a);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dd(o.children,t,p,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Zm(c,o.index),routesMeta:p})};return e.forEach((o,s)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))l(o,s);else for(let a of Pd(o.path))l(o,s,a)}),t}function Pd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let s=Pd(r.join("/")),u=[];return u.push(...s.map(a=>a===""?o:[o,a].join("/"))),l&&u.push(...s),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function Hm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qm=/^:[\w-]+$/,Km=3,Jm=2,Ym=1,Gm=10,Xm=-2,uu=e=>e==="*";function Zm(e,t){let n=e.split("/"),r=n.length;return n.some(uu)&&(r+=Xm),t&&(r+=Jm),n.filter(l=>!uu(l)).reduce((l,o)=>l+(Qm.test(o)?Km:o===""?Ym:Gm),r)}function qm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function eh(e,t,n){let{routesMeta:r}=e,l={},o="/",s=[];for(let u=0;u<r.length;++u){let a=r[u],c=u===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",h=Vo({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},p),g=a.route;if(!h)return null;Object.assign(l,h.params),s.push({params:l,pathname:Vt([o,h.pathname]),pathnameBase:sh(Vt([o,h.pathnameBase])),route:g}),h.pathnameBase!=="/"&&(o=Vt([o,h.pathnameBase]))}return s}function Vo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=th(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let o=l[0],s=o.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((c,p,h)=>{let{paramName:g,isOptional:C}=p;if(g==="*"){let N=u[h]||"";s=o.slice(0,o.length-N.length).replace(/(.)\/+$/,"$1")}const b=u[h];return C&&!b?c[g]=void 0:c[g]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function th(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,u,a)=>(r.push({paramName:u,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function nh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=e=>rh.test(e);function ih(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?dn(e):e,o;if(n)if(lh(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),mi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=cu(n.substring(1),"/"):o=cu(n,t)}else o=t;return{pathname:o,search:ah(r),hash:uh(l)}}function cu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Ki(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Md(e,t){let n=oh(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ld(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=dn(e):(l=Lr({},e),oe(!l.pathname||!l.pathname.includes("?"),Ki("?","pathname","search",l)),oe(!l.pathname||!l.pathname.includes("#"),Ki("#","pathname","hash",l)),oe(!l.search||!l.search.includes("#"),Ki("#","search","hash",l)));let o=e===""||l.pathname==="",s=o?"/":l.pathname,u;if(s==null)u=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),h-=1;l.pathname=g.join("/")}u=h>=0?t[h]:"/"}let a=ih(l,u),c=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||p)&&(a.pathname+="/"),a}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),sh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ah=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ch(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Od=["post","put","patch","delete"];new Set(Od);const dh=["get",...Od];new Set(dh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}const hi=w.createContext(null),Ad=w.createContext(null),Yt=w.createContext(null),gi=w.createContext(null),pn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Fd=w.createContext(null);function ph(e,t){let{relative:n}=t===void 0?{}:t;Vr()||oe(!1);let{basename:r,navigator:l}=w.useContext(Yt),{hash:o,pathname:s,search:u}=vi(e,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Vt([r,s])),l.createHref({pathname:a,search:u,hash:o})}function Vr(){return w.useContext(gi)!=null}function Wr(){return Vr()||oe(!1),w.useContext(gi).location}function $d(e){w.useContext(Yt).static||w.useLayoutEffect(e)}function Ud(){let{isDataRoute:e}=w.useContext(pn);return e?Nh():fh()}function fh(){Vr()||oe(!1);let e=w.useContext(hi),{basename:t,future:n,navigator:r}=w.useContext(Yt),{matches:l}=w.useContext(pn),{pathname:o}=Wr(),s=JSON.stringify(Md(l,n.v7_relativeSplatPath)),u=w.useRef(!1);return $d(()=>{u.current=!0}),w.useCallback(function(c,p){if(p===void 0&&(p={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let h=Ld(c,JSON.parse(s),o,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Vt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,s,o,e])}function vi(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Yt),{matches:l}=w.useContext(pn),{pathname:o}=Wr(),s=JSON.stringify(Md(l,r.v7_relativeSplatPath));return w.useMemo(()=>Ld(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function mh(e,t){return hh(e,t)}function hh(e,t,n,r){Vr()||oe(!1);let{navigator:l}=w.useContext(Yt),{matches:o}=w.useContext(pn),s=o[o.length-1],u=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let c=Wr(),p;if(t){var h;let E=typeof t=="string"?dn(t):t;a==="/"||(h=E.pathname)!=null&&h.startsWith(a)||oe(!1),p=E}else p=c;let g=p.pathname||"/",C=g;if(a!=="/"){let E=a.replace(/^\//,"").split("/");C="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let b=Vm(e,{pathname:C}),N=kh(b&&b.map(E=>Object.assign({},E,{params:Object.assign({},u,E.params),pathname:Vt([a,l.encodeLocation?l.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:Vt([a,l.encodeLocation?l.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&N?w.createElement(gi.Provider,{value:{location:Or({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Pt.Pop}},N):N}function gh(){let e=Sh(),t=ch(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:l},n):null,null)}const vh=w.createElement(gh,null);class xh extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(pn.Provider,{value:this.props.routeContext},w.createElement(Fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yh(e){let{routeContext:t,match:n,children:r}=e,l=w.useContext(hi);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(pn.Provider,{value:t},r)}function kh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,u=(l=n)==null?void 0:l.errors;if(u!=null){let p=s.findIndex(h=>h.route.id&&(u==null?void 0:u[h.route.id])!==void 0);p>=0||oe(!1),s=s.slice(0,Math.min(s.length,p+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=p),h.route.id){let{loaderData:g,errors:C}=n,b=h.route.loader&&g[h.route.id]===void 0&&(!C||C[h.route.id]===void 0);if(h.route.lazy||b){a=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((p,h,g)=>{let C,b=!1,N=null,E=null;n&&(C=u&&h.route.id?u[h.route.id]:void 0,N=h.route.errorElement||vh,a&&(c<0&&g===0?(Ch("route-fallback"),b=!0,E=null):c===g&&(b=!0,E=h.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,g+1)),d=()=>{let f;return C?f=N:b?f=E:h.route.Component?f=w.createElement(h.route.Component,null):h.route.element?f=h.route.element:f=p,w.createElement(yh,{match:h,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:f})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?w.createElement(xh,{location:n.location,revalidation:n.revalidation,component:N,error:C,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Bd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bd||{}),Vd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vd||{});function wh(e){let t=w.useContext(hi);return t||oe(!1),t}function jh(e){let t=w.useContext(Ad);return t||oe(!1),t}function bh(e){let t=w.useContext(pn);return t||oe(!1),t}function Wd(e){let t=bh(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Sh(){var e;let t=w.useContext(Fd),n=jh(),r=Wd();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Nh(){let{router:e}=wh(Bd.UseNavigateStable),t=Wd(Vd.UseNavigateStable),n=w.useRef(!1);return $d(()=>{n.current=!0}),w.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Or({fromRouteId:t},o)))},[e,t])}const du={};function Ch(e,t,n){du[e]||(du[e]=!0)}function Eh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function gn(e){oe(!1)}function zh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Pt.Pop,navigator:o,static:s=!1,future:u}=e;Vr()&&oe(!1);let a=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:a,navigator:o,static:s,future:Or({v7_relativeSplatPath:!1},u)}),[a,u,o,s]);typeof r=="string"&&(r=dn(r));let{pathname:p="/",search:h="",hash:g="",state:C=null,key:b="default"}=r,N=w.useMemo(()=>{let E=Wn(p,a);return E==null?null:{location:{pathname:E,search:h,hash:g,state:C,key:b},navigationType:l}},[a,p,h,g,C,b,l]);return N==null?null:w.createElement(Yt.Provider,{value:c},w.createElement(gi.Provider,{children:n,value:N}))}function _h(e){let{children:t,location:n}=e;return mh(Wo(t),n)}new Promise(()=>{});function Wo(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,l)=>{if(!w.isValidElement(r))return;let o=[...t,l];if(r.type===w.Fragment){n.push.apply(n,Wo(r.props.children,o));return}r.type!==gn&&oe(!1),!r.props.index||!r.props.children||oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Wo(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gl.apply(this,arguments)}function Hd(e,t){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Th(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ih(e,t){return e.button===0&&(!t||t==="_self")&&!Th(e)}const Rh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Dh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Ph="6";try{window.__reactRouterVersion=Ph}catch{}const Mh=w.createContext({isTransitioning:!1}),Lh="startTransition",pu=Ep[Lh];function Oh(e){let{basename:t,children:n,future:r,window:l}=e,o=w.useRef();o.current==null&&(o.current=$m({window:l,v5Compat:!0}));let s=o.current,[u,a]=w.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},p=w.useCallback(h=>{c&&pu?pu(()=>a(h)):a(h)},[a,c]);return w.useLayoutEffect(()=>s.listen(p),[s,p]),w.useEffect(()=>Eh(r),[r]),w.createElement(zh,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:s,future:r})}const Ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$h=w.forwardRef(function(t,n){let{onClick:r,relative:l,reloadDocument:o,replace:s,state:u,target:a,to:c,preventScrollReset:p,viewTransition:h}=t,g=Hd(t,Rh),{basename:C}=w.useContext(Yt),b,N=!1;if(typeof c=="string"&&Fh.test(c)&&(b=c,Ah))try{let f=new URL(window.location.href),v=c.startsWith("//")?new URL(f.protocol+c):new URL(c),j=Wn(v.pathname,C);v.origin===f.origin&&j!=null?c=j+v.search+v.hash:N=!0}catch{}let E=ph(c,{relative:l}),m=Bh(c,{replace:s,state:u,target:a,preventScrollReset:p,relative:l,viewTransition:h});function d(f){r&&r(f),f.defaultPrevented||m(f)}return w.createElement("a",Gl({},g,{href:b||E,onClick:N||o?r:d,ref:n,target:a}))}),Ho=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:l=!1,className:o="",end:s=!1,style:u,to:a,viewTransition:c,children:p}=t,h=Hd(t,Dh),g=vi(a,{relative:h.relative}),C=Wr(),b=w.useContext(Ad),{navigator:N,basename:E}=w.useContext(Yt),m=b!=null&&Vh(g)&&c===!0,d=N.encodeLocation?N.encodeLocation(g).pathname:g.pathname,f=C.pathname,v=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;l||(f=f.toLowerCase(),v=v?v.toLowerCase():null,d=d.toLowerCase()),v&&E&&(v=Wn(v,E)||v);const j=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=f===d||!s&&f.startsWith(d)&&f.charAt(j)==="/",x=v!=null&&(v===d||!s&&v.startsWith(d)&&v.charAt(d.length)==="/"),z={isActive:T,isPending:x,isTransitioning:m},O=T?r:void 0,F;typeof o=="function"?F=o(z):F=[o,T?"active":null,x?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let L=typeof u=="function"?u(z):u;return w.createElement($h,Gl({},h,{"aria-current":O,className:F,ref:n,style:L,to:a,viewTransition:c}),typeof p=="function"?p(z):p)});var Qo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Qo||(Qo={}));var fu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(fu||(fu={}));function Uh(e){let t=w.useContext(hi);return t||oe(!1),t}function Bh(e,t){let{target:n,replace:r,state:l,preventScrollReset:o,relative:s,viewTransition:u}=t===void 0?{}:t,a=Ud(),c=Wr(),p=vi(e,{relative:s});return w.useCallback(h=>{if(Ih(h,n)){h.preventDefault();let g=r!==void 0?r:Yl(c)===Yl(p);a(e,{replace:g,state:l,preventScrollReset:o,relative:s,viewTransition:u})}},[c,a,p,r,l,n,e,o,s,u])}function Vh(e,t){t===void 0&&(t={});let n=w.useContext(Mh);n==null&&oe(!1);let{basename:r}=Uh(Qo.useViewTransitionState),l=vi(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Wn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Wn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Vo(l.pathname,s)!=null||Vo(l.pathname,o)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),$=(e,t)=>{const n=w.forwardRef(({color:r="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:u="",children:a,...c},p)=>w.createElement("svg",{ref:p,...Wh,width:l,height:l,stroke:r,strokeWidth:s?Number(o)*24/Number(l):o,className:["lucide",`lucide-${Hh(e)}`,u].join(" "),...c},[...t.map(([h,g])=>w.createElement(h,g)),...Array.isArray(a)?a:[a]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=$("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=$("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=$("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=$("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=$("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=$("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=$("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=$("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=$("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=$("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=$("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=$("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=$("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=$("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=$("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=$("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=$("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=$("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=$("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=$("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=$("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=$("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=$("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=$("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=$("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=$("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=$("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=$("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=$("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=$("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=$("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=$("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=$("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=$("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=$("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=$("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=$("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=$("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=$("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=$("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=$("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=$("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=$("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=$("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=$("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=$("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=$("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=$("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=$("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=$("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=$("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Cg="541237405602-df30i3dm5eje25fl2thhhghp25erv2s6.apps.googleusercontent.com",Eg="https://www.googleapis.com/auth/drive.appdata";let cl=null,fe=null;const se={init:()=>{console.log("Google Drive Sync: Initializing version 1.0.6...");const e=sessionStorage.getItem("google_access_token");return e&&(fe=e,console.log("Google Drive Sync: Restored token from session storage.")),new Promise(t=>{const n=setInterval(()=>{window.google&&(clearInterval(n),cl=window.google.accounts.oauth2.initTokenClient({client_id:Cg,scope:Eg,callback:r=>{if(r.error!==void 0)throw r;fe=r.access_token,sessionStorage.setItem("google_access_token",fe||""),t()}}),t())},100)})},signIn:(e=!1)=>new Promise((t,n)=>{if(!cl){n(new Error("Google Drive API not initialized"));return}cl.callback=r=>{r.error?n(r):(fe=r.access_token,sessionStorage.setItem("google_access_token",fe||""),t())},cl.requestAccessToken({prompt:e?"":"consent"})}),signOut:()=>{fe?window.google.accounts.oauth2.revoke(fe,()=>{fe=null,sessionStorage.removeItem("google_access_token")}):sessionStorage.removeItem("google_access_token")},isAuthenticated:()=>fe!==null,safeParseJson:async e=>{const t=await e.text();if(!t||t.trim()==="")return{files:[]};try{return JSON.parse(t)}catch(n){return console.error("JSON parse error:",n,"Content:",t),null}},getOrCreateFile:async e=>{if(!fe)throw new Error("Not authenticated");const t=await fetch(`https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&q=name='${e}'`,{headers:{Authorization:`Bearer ${fe}`}});if(!t.ok){const o=await t.text();throw console.error("Search API Error:",o),new Error(`Search failed: ${t.status}`)}const n=await se.safeParseJson(t);if(n&&n.files&&n.files.length>0)return n.files[0].id;const r=await fetch("https://www.googleapis.com/drive/v3/files",{method:"POST",headers:{Authorization:`Bearer ${fe}`,"Content-Type":"application/json"},body:JSON.stringify({name:e,parents:["appDataFolder"]})});if(!r.ok){const o=await r.text();throw console.error("Create File API Error:",o),new Error(`Create failed: ${r.status}`)}const l=await se.safeParseJson(r);return l==null?void 0:l.id},getFileContent:async e=>{if(!fe)throw new Error("Not authenticated");const t=await fetch(`https://www.googleapis.com/drive/v3/files/${e}?alt=media`,{headers:{Authorization:`Bearer ${fe}`}});if(!t.ok){if(t.status===404)return null;const n=await t.text();throw console.error("Get Content API Error:",n),new Error(`Failed to fetch file content: ${t.status}`)}return await se.safeParseJson(t)},getFileMetadata:async e=>{if(!fe)throw new Error("Not authenticated");const t=await fetch(`https://www.googleapis.com/drive/v3/files/${e}?fields=id,name,modifiedTime`,{headers:{Authorization:`Bearer ${fe}`}});if(!t.ok)throw new Error(`Metadata fetch failed: ${t.status}`);return await se.safeParseJson(t)},updateFileContent:async(e,t)=>{if(!fe)throw new Error("Not authenticated");try{const n=await fetch(`https://www.googleapis.com/upload/drive/v3/files/${e}?uploadType=media`,{method:"PATCH",headers:{Authorization:`Bearer ${fe}`,"Content-Type":"application/json"},body:JSON.stringify(t)});if(!n.ok){const r=await n.text();throw console.error("Update Content API Error:",r,"Status:",n.status),new Error(`Update failed: ${n.status} - ${r}`)}}catch(n){throw console.error("Network error during updateFileContent:",n),n}}},Gd=9,zg=e=>{const t=e.version||0;let n={...e};return t<1&&(n=Rg(n)),t<2&&(n=Dg(n)),t<3&&(n=Pg(n)),t<4&&(n=Mg(n)),t<5&&(n=Lg(n)),t<6&&(n=Og(n)),t<7&&(n=_g(n)),t<8&&(n=Tg(n)),t<9&&(n=Ig(n)),n.version=Gd,n},_g=e=>({...e,events:(e.events||[]).map(t=>({...t,status:t.status||"todo"})),version:7}),Tg=e=>({...e,memos:(e.memos||[]).map(t=>({...t,title:t.title||""})),version:8}),Ig=e=>({...e,tasks:(e.tasks||[]).map(t=>({...t,trackResponseRate:t.trackResponseRate!==void 0?t.trackResponseRate:t.category==="union_member"})),taskDefinitions:(e.taskDefinitions||[]).map(t=>({...t,trackResponseRate:t.trackResponseRate!==void 0?t.trackResponseRate:t.category==="union_member"})),version:9}),Rg=e=>({...e,tasks:e.tasks||[],events:e.events||[],version:1}),Dg=e=>{const t=[{id:"role-leader",name:"委員長"},{id:"role-secretary",name:"書記長"},{id:"role-treasurer",name:"会計"},{id:"role-member",name:"執行委員"}],n=[{id:"def-report",title:"活動報告書の提出",description:"月次の活動報告書を作成し、提出する。",category:"administrative",priority:"medium",roleIds:["role-leader","role-secretary","role-treasurer","role-member"]},{id:"def-negotiation",title:"団体交渉の準備",description:"会社側との交渉に向けた資料作成と要求案の整理。",category:"union_member",priority:"high",roleIds:["role-leader","role-secretary"]}],r=[{id:"mtg-exec",name:"三役会議",content:"重要事項の決定",timing:"毎週火曜日",roleIds:["role-leader","role-secretary","role-treasurer"]},{id:"mtg-board",name:"執行委員会",content:"活動報告と方針確認",timing:"毎月第2木曜日",roleIds:["role-leader","role-secretary","role-treasurer","role-member"]}];return{...e,roles:e.roles||t,taskDefinitions:e.taskDefinitions||n,meetingDefinitions:e.meetingDefinitions||r,currentRoleId:e.currentRoleId||"role-member",showAllItems:e.showAllItems!==void 0?e.showAllItems:!1,version:2}},Pg=e=>({...e,travelExpenses:e.travelExpenses||[],tasks:(e.tasks||[]).map(t=>({...t,subtasks:t.subtasks||[]})),events:(e.events||[]).map(t=>({...t,memos:t.memos||[]})),version:3}),Mg=e=>({...e,tasks:(e.tasks||[]).map(t=>({...t,memos:t.memos||[]})),version:4}),Lg=e=>{const t=[];return e.tasks&&e.tasks.forEach(n=>{n.memos&&(n.memos.forEach(r=>{t.push({...r,linkedTaskId:n.id})}),delete n.memos)}),e.events&&e.events.forEach(n=>{n.memos&&(n.memos.forEach(r=>{t.push({...r,linkedEventId:n.id})}),delete n.memos)}),{...e,version:5,memos:t}},Og=e=>{const t=[{id:"tpl-meeting",title:"会議議事録",content:`【日時】
【場所】
【出席者】
【決定事項】
`},{id:"tpl-todo",title:"TODOリスト",content:`・[ ] 
・[ ] 
・[ ] `},{id:"tpl-note",title:"汎用メモ",content:`■概要：
■詳細：
`}];return{...e,version:6,memoTemplates:e.memoTemplates||t}},ut={TASKS:"union_app_tasks",EVENTS:"union_app_events",TRAVEL_EXPENSES:"union_app_travel_expenses",MEMOS:"union_app_memos",MEMO_TEMPLATES:"union_app_memo_templates"},xu="union_app_data.json",R={getTasks:()=>{const e=localStorage.getItem(ut.TASKS);return e?JSON.parse(e):[]},saveTasks:e=>{localStorage.setItem(ut.TASKS,JSON.stringify(e)),R.uploadToCloud()},getEvents:()=>{const e=localStorage.getItem(ut.EVENTS);return e?JSON.parse(e):[]},saveEvents:e=>{localStorage.setItem(ut.EVENTS,JSON.stringify(e)),R.uploadToCloud()},getTravelExpenses:()=>{const e=localStorage.getItem(ut.TRAVEL_EXPENSES);return e?JSON.parse(e):[]},saveTravelExpenses:e=>{localStorage.setItem(ut.TRAVEL_EXPENSES,JSON.stringify(e)),R.uploadToCloud()},getMemos:()=>{const e=localStorage.getItem(ut.MEMOS);return e?JSON.parse(e):[]},saveMemos:e=>{localStorage.setItem(ut.MEMOS,JSON.stringify(e)),R.uploadToCloud()},getMemoTemplates:()=>{const e=localStorage.getItem(ut.MEMO_TEMPLATES);return e?JSON.parse(e):[]},saveMemoTemplates:e=>{localStorage.setItem(ut.MEMO_TEMPLATES,JSON.stringify(e)),R.uploadToCloud()},syncWithCloud:async()=>{if(!se.isAuthenticated())return;const e=await se.getOrCreateFile(xu),t=await se.getFileContent(e);if(t){const n=zg(t);R.saveTasks(n.tasks),R.saveEvents(n.events),n.travelExpenses&&R.saveTravelExpenses(n.travelExpenses),n.memos&&R.saveMemos(n.memos),n.memoTemplates&&R.saveMemoTemplates(n.memoTemplates),n.roles&&localStorage.setItem("union_app_roles",JSON.stringify(n.roles)),n.taskDefinitions&&localStorage.setItem("union_app_task_defs",JSON.stringify(n.taskDefinitions)),n.meetingDefinitions&&localStorage.setItem("union_app_mtg_defs",JSON.stringify(n.meetingDefinitions)),n.currentRoleId&&localStorage.setItem("union_app_current_role",n.currentRoleId),localStorage.setItem("union_app_show_all",String(n.showAllItems||!1))}else await R.uploadToCloud()},getRoles:()=>JSON.parse(localStorage.getItem("union_app_roles")||"[]"),getTaskDefinitions:()=>JSON.parse(localStorage.getItem("union_app_task_defs")||"[]"),getMeetingDefinitions:()=>JSON.parse(localStorage.getItem("union_app_mtg_defs")||"[]"),setCurrentRoleId:e=>localStorage.setItem("union_app_current_role",e),getCurrentRoleId:()=>localStorage.getItem("union_app_current_role")||"",getShowAllItems:()=>localStorage.getItem("union_app_show_all")==="true",saveSettings:e=>{localStorage.setItem("union_app_roles",JSON.stringify(e.roles)),localStorage.setItem("union_app_task_defs",JSON.stringify(e.taskDefinitions)),localStorage.setItem("union_app_mtg_defs",JSON.stringify(e.meetingDefinitions)),localStorage.setItem("union_app_current_role",e.currentRoleId),localStorage.setItem("union_app_show_all",String(e.showAllItems)),R.uploadToCloud()},uploadToCloud:async()=>{if(!se.isAuthenticated())return;const e=await se.getOrCreateFile(xu),t={version:Gd,tasks:R.getTasks(),events:R.getEvents(),roles:R.getRoles(),taskDefinitions:R.getTaskDefinitions(),meetingDefinitions:R.getMeetingDefinitions(),travelExpenses:R.getTravelExpenses(),memos:R.getMemos(),memoTemplates:R.getMemoTemplates(),currentRoleId:R.getCurrentRoleId(),showAllItems:R.getShowAllItems(),lastSyncedAt:new Date().toISOString()};await se.updateFileContent(e,t)}},Xd=()=>{const[e,t]=w.useState(!1),[n,r]=w.useState(!1),[l,o]=w.useState(null);w.useEffect(()=>{(async()=>{await new Promise(b=>setTimeout(b,500));const g=se.isAuthenticated(),C=localStorage.getItem("union_app_sync_enabled")==="true";if(g)t(!0),a(!0);else if(C)try{await se.signIn(!0),t(!0),a(!0)}catch(b){console.log("Auto-reconnect failed (expired or revoked):",b),localStorage.removeItem("union_app_sync_enabled"),t(!1)}else t(!1)})();const p=setInterval(()=>{se.isAuthenticated()&&a(!1)},3*60*1e3),h=()=>{se.isAuthenticated()&&a(!1)};return window.addEventListener("focus",h),()=>{clearInterval(p),window.removeEventListener("focus",h)}},[]);const s=async()=>{try{await se.signIn(),localStorage.setItem("union_app_sync_enabled","true"),t(!0),a()}catch(c){console.error("Sign in failed:",c),alert("Googleログインに失敗しました。")}},u=()=>{se.signOut(),localStorage.removeItem("union_app_sync_enabled"),t(!1)},a=async(c=!0)=>{if(!n&&se.isAuthenticated()){r(!0);try{if(!c){const h=await se.getOrCreateFile("union_app_data.json"),g=await se.getFileMetadata(h),C=g==null?void 0:g.modifiedTime,b=localStorage.getItem("union_app_last_cloud_sync");if(C&&b&&new Date(C)<=new Date(b))return}await R.syncWithCloud();const p=new Date;o(p.toLocaleTimeString()),localStorage.setItem("union_app_last_cloud_sync",p.toISOString()),c||window.location.reload()}catch(p){if(console.error("Sync Error:",p),c){const h=p instanceof Error?p.message:JSON.stringify(p);alert(`同期に失敗しました。
詳細: ${h}`)}}finally{r(!1)}}};return e?i.jsxs("div",{className:"sync-status authenticated",children:[i.jsxs("div",{className:"status-info",children:[n?i.jsx(vu,{size:14,className:"spin"}):i.jsx(ng,{size:14,className:"success"}),i.jsxs("div",{className:"text-content",children:[i.jsx("span",{className:"label",children:"クラウド同期中"}),l&&i.jsxs("span",{className:"time",children:["最終: ",l]})]})]}),i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"icon-btn",onClick:()=>a(!0),title:"今すぐ同期",disabled:n,children:i.jsx(vu,{size:14})}),i.jsx("button",{className:"icon-btn",onClick:u,title:"ログアウト",children:i.jsx(fg,{size:14})})]}),i.jsx("style",{children:`
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
            `})]}):i.jsxs("div",{className:"sync-status",children:[i.jsxs("button",{className:"sync-btn login",onClick:s,children:[i.jsx(pg,{size:16}),i.jsx("span",{children:"クラウド同期を開始"})]}),i.jsx("style",{children:`
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
                `})]})},Ag=()=>{const e=[{name:"ダッシュボード",path:"/",icon:i.jsx(Kd,{size:20})},{name:"タスク管理",path:"/tasks",icon:i.jsx(xi,{size:20})},{name:"スケジュール",path:"/calendar",icon:i.jsx(Hn,{size:20})},{name:"メモ一覧",path:"/memos",icon:i.jsx(Yd,{size:20})}];return i.jsxs("aside",{className:"sidebar",children:[i.jsx("div",{className:"sidebar-header",children:i.jsxs("div",{className:"app-logo",children:[i.jsx("div",{className:"logo-icon",children:"U"}),i.jsx("span",{children:"役員活動管理"})]})}),i.jsx("nav",{className:"sidebar-nav",children:e.map(t=>i.jsxs(Ho,{to:t.path,className:({isActive:n})=>`nav-link ${n?"active":""}`,children:[t.icon,i.jsx("span",{children:t.name})]},t.path))}),i.jsx(Xd,{}),i.jsxs("div",{className:"sidebar-footer",children:[i.jsxs("div",{className:"user-info",children:[i.jsx(Sg,{size:18}),i.jsx("span",{children:"組合役員 A"})]}),i.jsx(Ho,{to:"/settings",className:"settings-btn",title:"設定",children:i.jsx(Vs,{size:18})})]}),i.jsx("style",{children:`
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

        .settings-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          padding: 4px;
          border-radius: 4px;
        }

        .settings-btn:hover {
          background-color: #334155;
          color: var(--text-main);
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `})]})},Fg=()=>{const e=[{name:"ダッシュ",path:"/",icon:i.jsx(Kd,{size:20})},{name:"タスク",path:"/tasks",icon:i.jsx(xi,{size:20})},{name:"予定",path:"/calendar",icon:i.jsx(Hn,{size:20})},{name:"メモ",path:"/memos",icon:i.jsx(Yd,{size:20})},{name:"設定",path:"/settings",icon:i.jsx(Vs,{size:20})}];return i.jsxs("nav",{className:"bottom-nav",children:[e.map(t=>i.jsxs(Ho,{to:t.path,className:({isActive:n})=>`bottom-nav-link ${n?"active":""}`,children:[t.icon,i.jsx("span",{children:t.name})]},t.path)),i.jsx("style",{children:`
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
            `})]})},$g=({children:e})=>i.jsxs("div",{className:"layout-container",children:[i.jsxs("header",{className:"mobile-header",children:[i.jsxs("div",{className:"app-logo-mini",children:[i.jsx("div",{className:"logo-icon-mini",children:"U"}),i.jsx("span",{children:"役員活動管理"})]}),i.jsx("div",{className:"mobile-sync-area",children:i.jsx(Xd,{})})]}),i.jsx(Ag,{}),i.jsx("main",{className:"main-content",children:e}),i.jsx(Fg,{}),i.jsx("style",{children:`
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
      `})]}),Ug=()=>{var F;const[e,t]=w.useState([]),[n,r]=w.useState([]),[l,o]=w.useState([]),[s,u]=w.useState(""),[a,c]=w.useState(!1),p=Ud();w.useEffect(()=>{t(R.getTasks()),r(R.getEvents()),o(R.getTravelExpenses()),u(R.getCurrentRoleId()),c(R.getShowAllItems())},[]);const h=R.getTaskDefinitions(),g=R.getMeetingDefinitions(),C=L=>{if(a)return!0;const Q=h.find(le=>le.title===L.title);return Q&&s&&Q.roleIds&&Q.roleIds.length>0?Q.roleIds.includes(s):!0},b=L=>{if(a)return!0;const Q=g.find(le=>le.name===L.title);return Q&&s?Q.roleIds.includes(s):!0},N=e.filter(C),E=n.filter(b),m=N.filter(L=>L.status==="completed"),d=N.filter(L=>L.trackResponseRate&&(L.responseRate||0)<50&&L.status!=="completed"),f=new Date().toLocaleDateString("sv"),v=E.filter(L=>L.date===f),j=new Date().toLocaleDateString("sv").substring(0,7),T=E.filter(L=>L.date.startsWith(j)&&L.expense).reduce((L,Q)=>{var le;return L+(((le=Q.expense)==null?void 0:le.totalAmount)||0)},0),x=l.filter(L=>L.date.startsWith(j)).reduce((L,Q)=>L+(Q.totalAmount||0),0),z=T+x,O=N.filter(L=>L.status==="completed"||!L.dueDate?!1:L.dueDate<=f);return i.jsxs("div",{className:"dashboard",children:[i.jsxs("header",{className:"page-header",children:[i.jsxs("div",{className:"header-main",children:[i.jsx("h1",{children:"ダッシュボード"}),i.jsx("p",{className:"subtitle",children:"こんにちは、今日も活動お疲れ様です。"})]}),s&&i.jsxs("div",{className:"role-tag",children:["役職: ",((F=R.getRoles().find(L=>L.id===s))==null?void 0:F.name)||s]})]}),O.length>0&&i.jsxs("div",{className:"urgent-banner",onClick:()=>p("/tasks"),children:[i.jsx("div",{className:"banner-icon",children:i.jsx(Zh,{size:20})}),i.jsxs("div",{className:"banner-content",children:[i.jsxs("span",{className:"banner-title",children:["期限間近・超過のタスクがあります (",O.length,"件)"]}),i.jsx("span",{className:"banner-desc",children:"本日が期限、または期限を過ぎている未完了タスクを確認してください。"})]}),i.jsx(It,{size:20})]}),i.jsxs("div",{className:"summary-grid",children:[i.jsxs("div",{className:"summary-card",children:[i.jsx("div",{className:"card-icon blue",children:i.jsx(xi,{size:24})}),i.jsxs("div",{className:"card-info",children:[i.jsx("span",{className:"label",children:"担当タスク"}),i.jsxs("span",{className:"value",children:[N.length," ",i.jsxs("small",{children:["/ ",m.length," 完了"]})]})]})]}),i.jsxs("div",{className:"summary-card",children:[i.jsx("div",{className:"card-icon orange",children:i.jsx(Hn,{size:24})}),i.jsxs("div",{className:"card-info",children:[i.jsx("span",{className:"label",children:"本日の予定"}),i.jsxs("span",{className:"value",children:[v.length," ",i.jsx("small",{children:"件"})]})]})]}),i.jsxs("div",{className:"summary-card",children:[i.jsx("div",{className:"card-icon green",children:i.jsx(Ws,{size:24})}),i.jsxs("div",{className:"card-info",children:[i.jsx("span",{className:"label",children:"今月の旅費"}),i.jsxs("span",{className:"value",children:["¥ ",z.toLocaleString()]})]})]})]}),i.jsxs("div",{className:"dashboard-content",children:[i.jsxs("section",{className:"alert-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx(Qh,{size:20,className:"text-danger"}),i.jsx("h2",{children:"要注意タスク (回答率低下)"})]}),d.length>0?i.jsx("div",{className:"alert-list",children:d.map(L=>i.jsxs("div",{className:"alert-item",onClick:()=>p("/tasks"),children:[i.jsx("div",{className:"alert-indicator"}),i.jsxs("div",{className:"alert-body",children:[i.jsx("span",{className:"alert-title",children:L.title}),i.jsxs("div",{className:"alert-meta",children:[i.jsx(jg,{size:14}),i.jsxs("span",{children:["回答率: ",L.responseRate,"%"]}),i.jsx("span",{className:"separator",children:"|"}),i.jsx(Xl,{size:14}),i.jsxs("span",{children:["期限: ",L.dueDate||"なし"]})]})]}),i.jsx("button",{className:"action-btn",children:"フォロー"})]},L.id))}):i.jsx("div",{className:"empty-state",children:"現在、フォローが必要な緊急タスクはありません。"})]}),i.jsxs("section",{className:"schedule-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx(Hn,{size:20}),i.jsx("h2",{children:"本日のスケジュール"})]}),i.jsxs("div",{className:"schedule-list",children:[v.length>0?v.map(L=>i.jsxs("div",{className:"event-item",children:[i.jsx("span",{className:"event-time",children:L.startTime||"--:--"}),i.jsxs("div",{className:"event-details",children:[i.jsx("span",{className:"event-title",children:L.title}),i.jsx("span",{className:"event-location",children:L.location||"場所指定なし"})]})]},L.id)):i.jsx("div",{className:"empty-state",children:"本日の予定はありません。"}),i.jsx("button",{className:"view-all-btn",onClick:()=>p("/calendar"),children:"カレンダーを見る"})]})]})]}),i.jsx("style",{children:`
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
      `})]})},Bg="UnionOfficerAppDB",Ct="Blobs",Vg=1,Wg={init(){return new Promise((e,t)=>{const n=indexedDB.open(Bg,Vg);n.onupgradeneeded=r=>{const l=r.target.result;l.objectStoreNames.contains(Ct)||l.createObjectStore(Ct)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})},async saveBlob(e,t){const n=await this.init();return new Promise((r,l)=>{const u=n.transaction(Ct,"readwrite").objectStore(Ct).put(t,e);u.onsuccess=()=>r(e),u.onerror=()=>l(u.error)})},async getBlob(e){const t=await this.init();return new Promise((n,r)=>{const s=t.transaction(Ct,"readonly").objectStore(Ct).get(e);s.onsuccess=()=>n(s.result||null),s.onerror=()=>r(s.error)})},async deleteBlob(e){const t=await this.init();return new Promise((n,r)=>{const s=t.transaction(Ct,"readwrite").objectStore(Ct).delete(e);s.onsuccess=()=>n(),s.onerror=()=>r(s.error)})}},Hs=({memos:e,onSave:t,onClose:n,initialMemoId:r,defaultLinkedEventId:l,defaultLinkedTaskId:o})=>{const[s,u]=w.useState(null),a=w.useRef(null),c=w.useRef(!0);w.useEffect(()=>{if(c.current){if(r){const x=e.find(z=>z.id===r);x&&u(x)}c.current=!1}},[r,e]);const[p,h]=w.useState(!1),g=w.useRef(null),C=w.useRef([]),[b]=w.useState(()=>R.getMemoTemplates());w.useEffect(()=>{if(s&&s.type==="text"&&a.current){const x=s.content||"",z=x.includes("<")||x.includes(">")?x:x.replace(/\n/g,"<br>");a.current.innerHTML!==z&&(a.current.innerHTML=z)}},[s==null?void 0:s.id]);const N=x=>{const z={id:Date.now().toString(),type:x,title:"",content:"",createdAt:new Date().toISOString(),linkedEventId:l,linkedTaskId:o};u(z)},E=async()=>{try{if(!s)return;let x=s.content||"";if(s.type==="text"&&a.current&&(x=a.current.innerHTML),!s.id||!s.type){console.error("Invalid memo data",s);return}let z=s.title||"";!z&&s.type==="text"&&(z=m());const O={id:s.id,type:s.type,title:z,content:x,createdAt:s.createdAt||new Date().toISOString(),linkedEventId:s.linkedEventId,linkedTaskId:s.linkedTaskId},F=e.some(Q=>Q.id===O.id);let L;F?L=e.map(Q=>Q.id===O.id?O:Q):L=[...e,O],t(L),u(O),alert("保存しました")}catch(x){console.error("Save failed:",x),alert("保存に失敗しました")}},m=()=>{const x=new Date,z=x.getFullYear(),O=(x.getMonth()+1).toString().padStart(2,"0"),F=x.getDate().toString().padStart(2,"0"),L=`${z}${O}${F}`,Q=`${z}-${O}-${F}`,ce=R.getMemos().filter(_e=>_e.createdAt.startsWith(Q));let We=0;ce.forEach(_e=>{var _;const y=(_=_e.title)==null?void 0:_.match(/^(\d{8})_(\d{2})_森$/);if(y&&y[1]===L){const P=parseInt(y[2],10);P>We&&(We=P)}});const qe=(We+1).toString().padStart(2,"0");return`${L}_${qe}_森`},d=x=>{confirm("このメモを削除しますか？")&&(t(e.filter(z=>z.id!==x)),(s==null?void 0:s.id)===x&&u(null))},f=(x,z="")=>{try{document.execCommand(x,!1,z),a.current&&u(O=>O?{...O,content:a.current.innerHTML}:null)}catch(O){console.error("Command failed:",x,O)}},v=x=>{if(a.current){const z=x.replace(/\n/g,"<br>");a.current.innerHTML+=z,u(O=>O?{...O,content:a.current.innerHTML}:null)}},j=async()=>{try{const x=await navigator.mediaDevices.getUserMedia({audio:!0}),z=new MediaRecorder(x);g.current=z,C.current=[],z.ondataavailable=O=>{O.data.size>0&&C.current.push(O.data)},z.onstop=async()=>{const O=new Blob(C.current,{type:"audio/webm"}),F=`voice-${Date.now()}`;await Wg.saveBlob(F,O),u(L=>L?{...L,content:F}:null)},z.start(),h(!0)}catch(x){console.error("録音に失敗しました:",x),alert("マイクの使用を許可してください。")}},T=()=>{var x;(x=g.current)==null||x.stop(),h(!1)};return i.jsxs("div",{className:"memo-editor-overlay",children:[i.jsxs("div",{className:"memo-editor-content",children:[i.jsxs("div",{className:"memo-header-global",children:[i.jsx("h3",{children:"個別メモ・記録"}),i.jsx("button",{className:"close-all-btn",onClick:n,children:i.jsx(Ln,{size:20})})]}),i.jsxs("div",{className:`memos-sidebar ${s?"hidden":""}`,children:[i.jsxs("div",{className:"memo-types-bar",children:[i.jsx("button",{onClick:()=>N("text"),title:"テキスト",children:i.jsx(Jo,{size:18})}),i.jsx("button",{onClick:()=>N("voice"),title:"音声",children:i.jsx(bl,{size:18})})]}),i.jsx("div",{className:"memos-list",children:e.length>0?e.map(x=>i.jsxs("div",{className:"memo-item-card",onClick:()=>x.type==="text"&&u(x),children:[i.jsxs("div",{className:"memo-meta",children:[i.jsxs("span",{className:"memo-type-icon",children:[x.type==="text"&&i.jsx(Jo,{size:14}),x.type==="voice"&&i.jsx(bl,{size:14})]}),i.jsx("span",{className:"memo-date",children:new Date(x.createdAt).toLocaleDateString()}),i.jsx("button",{className:"del-btn-tiny",onClick:z=>{z.stopPropagation(),d(x.id)},children:i.jsx(Je,{size:12})})]}),i.jsx("div",{className:"memo-item-title",children:x.title||"(無題)"})]},x.id)):i.jsx("div",{className:"empty-state",children:"メモはまだありません。"})})]}),s&&i.jsxs("div",{className:"edit-area",children:[i.jsxs("div",{className:"edit-header",children:[i.jsx("span",{children:s.type==="text"?"テキストメモ編集":"音声録音"}),i.jsx("button",{className:"close-editor-btn",onClick:()=>u(null),children:i.jsx(Ln,{size:18})})]}),i.jsxs("div",{className:"edit-body",children:[s.type==="text"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"form-group row",children:i.jsx("input",{type:"text",value:s.title||"",onChange:x=>u({...s,title:x.target.value}),placeholder:"タイトルを入力 (空なら自動生成)",className:"title-input-inline"})}),i.jsxs("div",{className:"rich-toolbar",children:[i.jsxs("div",{className:"toolbar-group",children:[i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("bold"),title:"太字",children:i.jsx(qh,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("italic"),title:"斜体",children:i.jsx(sg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("underline"),title:"下線",children:i.jsx(bg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("strikeThrough"),title:"取り消し線",children:i.jsx(yg,{size:16})})]}),i.jsxs("div",{className:"toolbar-group separator",children:[i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("insertUnorderedList"),title:"箇条書き",children:i.jsx(dg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("insertOrderedList"),title:"番号付きリスト",children:i.jsx(cg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("formatBlock","blockquote"),title:"引用",children:i.jsx(gg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("formatBlock","pre"),title:"コード",children:i.jsx(rg,{size:16})})]}),i.jsxs("div",{className:"toolbar-group separator",children:[i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("justifyLeft"),title:"左寄せ",children:i.jsx(Yh,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("justifyCenter"),title:"中央揃え",children:i.jsx(Kh,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("justifyRight"),title:"右寄せ",children:i.jsx(Gh,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("justifyFull"),title:"両端揃え",children:i.jsx(Jh,{size:16})})]}),i.jsxs("div",{className:"toolbar-group separator",children:[i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("indent"),title:"インデント",children:i.jsx(og,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("outdent"),title:"アウトデント",children:i.jsx(mg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("superscript"),title:"上付き",children:i.jsx(wg,{size:16})}),i.jsx("button",{onMouseDown:x=>x.preventDefault(),onClick:()=>f("subscript"),title:"下付き",children:i.jsx(kg,{size:16})})]}),i.jsxs("div",{className:"toolbar-group separator",children:[i.jsxs("label",{title:"文字色",className:"color-tool",children:[i.jsx(Xh,{size:16}),i.jsx("input",{type:"color",onInput:x=>f("foreColor",x.target.value)})]}),i.jsxs("label",{title:"背景色",className:"color-tool",children:[i.jsx(ig,{size:16}),i.jsx("input",{type:"color",onInput:x=>f("hiliteColor",x.target.value),defaultValue:"#ffff00"})]}),i.jsxs("select",{onChange:x=>f("fontName",x.target.value),className:"font-select",children:[i.jsx("option",{value:"sans-serif",children:"Sans Serif"}),i.jsx("option",{value:"serif",children:"Serif"}),i.jsx("option",{value:"monospace",children:"Monospace"}),i.jsx("option",{value:"cursive",children:"Cursive"})]}),i.jsxs("select",{onChange:x=>f("fontSize",x.target.value),defaultValue:"3",className:"size-select",children:[i.jsx("option",{value:"1",children:"極小"}),i.jsx("option",{value:"2",children:"小"}),i.jsx("option",{value:"3",children:"標準"}),i.jsx("option",{value:"4",children:"中"}),i.jsx("option",{value:"5",children:"大"}),i.jsx("option",{value:"6",children:"特大"})]})]})]}),b&&b.length>0&&i.jsx("div",{className:"template-selector-mini",children:i.jsx("div",{className:"template-list",children:b.map(x=>i.jsx("button",{onClick:()=>v(x.content),className:"tpl-btn-tiny",children:x.title},x.id))})}),i.jsx("div",{ref:a,className:"rich-editor-area",contentEditable:!0,onBlur:x=>{const z=x.currentTarget.innerHTML;u(O=>O?{...O,content:z}:null)},"data-placeholder":"ここにメモを入力...",suppressContentEditableWarning:!0})]}),s.type==="voice"&&i.jsxs("div",{className:"voice-area",children:[p?i.jsxs("button",{className:"recording-btn pulse",onClick:T,children:[i.jsx(xg,{size:24})," 録音停止"]}):i.jsxs("button",{className:"record-start-btn",onClick:j,children:[i.jsx(bl,{size:24})," 録音開始"]}),s.content&&i.jsx("div",{className:"ready-mark",children:"✓ 録音完了"})]})]}),i.jsx("div",{className:"edit-footer",children:i.jsxs("button",{className:"save-btn",onClick:E,children:[i.jsx(Sl,{size:16})," 保存"]})})]})]}),i.jsx("style",{children:`
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

                .voice-area { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
                .record-start-btn, .recording-btn { width: 120px; height: 120px; border-radius: 50%; border: none; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.3s; }
                .record-start-btn { background: #334155; color: white; }
                .record-start-btn:hover { background: var(--primary); }
                .recording-btn { background: var(--danger); color: white; }
                
                .pulse { animation: pulse-red 1.5s infinite; }
                @keyframes pulse-red { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
            `})]})},Hg=()=>{var _e;const[e,t]=w.useState([]),[n,r]=w.useState([]),[l,o]=w.useState(""),[s,u]=w.useState(!1),[a,c]=w.useState("union_member"),[p,h]=w.useState(null),[g,C]=w.useState(null),[b,N]=w.useState(null),[E,m]=w.useState([]),[d,f]=w.useState(!1);w.useEffect(()=>{t(R.getTasks()),m(R.getMemos()),r(R.getTaskDefinitions()),o(R.getCurrentRoleId()),u(R.getShowAllItems())},[]);const v=y=>{t(y),R.saveTasks(y)},j=(y,_)=>{const P=e.map(U=>U.id===y?{...U,status:_}:U);v(P)},T=(y,_)=>{const P=e.map(U=>U.id===y?{...U,response_rate:_,responseRate:_}:U);v(P)},x=(y,_)=>{const P=e.map(U=>{if(U.id===y){const Y=(U.subtasks||[]).map(Te=>Te.id===_?{...Te,isCompleted:!Te.isCompleted}:Te);return{...U,subtasks:Y}}return U});v(P)},z=y=>{confirm("このタスクを削除しますか？")&&v(e.filter(_=>_.id!==y))},O=(y,_)=>{const P=e.map(U=>U.id===y?{...U,dueDate:_}:U);v(P)},F=y=>{const _={...y,id:Date.now().toString(),title:`${y.title} (コピー)`,createdAt:new Date().toISOString(),status:"todo"};v([_,...e])},L=y=>{const _=n.find(U=>U.id===y);if(!_)return;const P={id:Date.now().toString(),title:_.title,description:_.description,category:_.category,status:"todo",priority:_.priority,createdAt:new Date().toISOString(),trackResponseRate:_.trackResponseRate,responseRate:_.trackResponseRate?0:void 0,subtasks:(_.subtasks||[]).map(U=>({id:`sub-${Math.random().toString(36).substr(2,9)}`,title:U.title,isCompleted:!1,order:U.order}))};v([P,...e]),c(_.category)},Q=e.filter(y=>{if(!(y.category===a))return!1;if(s)return!0;const P=n.find(U=>U.title===y.title);return P&&l&&P.roleIds.length>0?P.roleIds.includes(l):!0}),le=n.filter(y=>s||!l||y.roleIds.length===0?!0:y.roleIds.includes(l)),ce=y=>{switch(y){case"todo":return"未着手";case"in_progress":return"進行中";case"completed":return"完了";case"on_hold":return"保留"}},We=()=>{h({category:a,status:"todo",priority:"medium",title:"",description:"",dueDate:"",trackResponseRate:a==="union_member",responseRate:a==="union_member"?0:void 0})},qe=y=>{if(y.preventDefault(),!(!p||!p.title)){if(p.id){const _=e.map(P=>P.id===p.id?{...P,...p}:P);v(_)}else{const _={...p,id:Date.now().toString(),createdAt:new Date().toISOString()};v([_,...e])}h(null)}};return i.jsxs("div",{className:"task-page",children:[i.jsxs("header",{className:"page-header",children:[i.jsx("h1",{children:"タスク管理"}),i.jsxs("div",{className:"header-actions",children:[!s&&l&&i.jsxs("span",{className:"filter-status",children:[i.jsx(Qd,{size:14}),"役職フィルタ有効"]}),i.jsxs("button",{className:"primary-btn",onClick:We,children:[i.jsx(pt,{size:18}),"手動で追加"]})]})]}),i.jsxs("section",{className:`accordion-section templates-section ${d?"open":""}`,children:[i.jsxs("div",{className:"section-header",onClick:()=>f(!d),children:[i.jsx(hg,{size:20}),i.jsx("h3",{children:"クイック作成 (定型タスク)"}),d?i.jsx(vn,{size:20}):i.jsx(It,{size:20})]}),d&&i.jsxs("div",{className:"section-content template-grid",children:[le.map(y=>i.jsxs("button",{className:"template-card",onClick:()=>L(y.id),children:[i.jsxs("div",{className:`tpl-icon ${y.category}`,children:[y.category==="union_member"&&"🔴",y.category==="administrative"&&"🔵",y.category==="committee"&&"🟢"]}),i.jsxs("div",{className:"tpl-text",children:[i.jsx("span",{className:"tpl-title",children:y.title}),i.jsx("span",{className:"tpl-desc",children:y.description})]})]},y.id)),le.length===0&&i.jsx("p",{className:"empty-hint",children:"この役職の定型タスクはありません。設定から追加できます。"})]})]}),i.jsxs("nav",{className:"tab-nav",children:[i.jsx("button",{className:`tab-btn ${a==="union_member"?"active":""}`,onClick:()=>c("union_member"),children:"🔴 組合員関連タスク"}),i.jsx("button",{className:`tab-btn ${a==="administrative"?"active":""}`,onClick:()=>c("administrative"),children:"🔵 事務タスク"}),i.jsx("button",{className:`tab-btn ${a==="committee"?"active":""}`,onClick:()=>c("committee"),children:"🟢 委員タスク"})]}),i.jsx("div",{className:"task-list",children:Q.length>0?Q.map(y=>i.jsxs("div",{className:`task-card ${y.priority} ${y.status}`,children:[i.jsxs("div",{className:"task-main",children:[i.jsxs("div",{className:"task-info",children:[i.jsxs("div",{className:"task-title-row",children:[i.jsx("span",{className:"task-title",children:y.title}),i.jsx("span",{className:`priority-badge ${y.priority}`,children:y.priority==="high"?"優先：高":y.priority==="medium"?"優先：中":"優先：低"})]}),i.jsx("p",{className:"task-desc",children:y.description})]}),i.jsxs("div",{className:"task-status-control",children:[i.jsx("span",{className:"status-label",children:ce(y.status)}),i.jsx("div",{className:"status-btns",children:["todo","in_progress","completed"].map(_=>i.jsx("button",{className:`status-dot ${y.status===_?"active":""} ${_}`,onClick:()=>j(y.id,_),title:ce(_)},_))})]})]}),y.trackResponseRate&&y.status!=="completed"&&i.jsxs("div",{className:"response-rate-area",children:[i.jsxs("div",{className:"rate-header",children:[i.jsx("span",{children:"回答率の更新"}),i.jsxs("span",{className:`rate-value ${y.responseRate!==void 0&&y.responseRate<50?"warning":""}`,children:[y.responseRate||0,"%"]})]}),i.jsx("div",{className:"rate-btns",children:[0,20,40,60,80,100].map(_=>i.jsxs("button",{className:`rate-btn ${y.responseRate===_?"active":""}`,onClick:()=>T(y.id,_),children:[_,"%"]},_))})]}),y.subtasks&&y.subtasks.length>0&&i.jsxs("div",{className:"subtasks-area",children:[i.jsx("div",{className:"subtask-header",children:i.jsxs("span",{children:["サブタスク (",y.subtasks.filter(_=>_.isCompleted).length,"/",y.subtasks.length,")"]})}),i.jsx("div",{className:"subtasks-list",children:y.subtasks.sort((_,P)=>_.order-P.order).map(_=>i.jsxs("div",{className:`subtask-item ${_.isCompleted?"completed":""}`,onClick:()=>x(y.id,_.id),children:[i.jsx("div",{className:`subtask-check ${_.isCompleted?"checked":""}`,children:_.isCompleted&&i.jsx(hu,{size:10})}),i.jsx("span",{className:"subtask-title",children:_.title})]},_.id))})]}),i.jsxs("div",{className:"task-footer",children:[i.jsxs("div",{className:"task-meta",children:[i.jsx(Xl,{size:14}),g===y.id?i.jsxs("div",{className:"date-edit-group",children:[i.jsx("input",{type:"date",value:y.dueDate||"",onChange:_=>O(y.id,_.target.value),className:"date-input",autoFocus:!0}),i.jsx("button",{className:"small-done-btn",onClick:()=>C(null),children:i.jsx(hu,{size:12})})]}):i.jsxs("div",{className:"date-display",onClick:()=>C(y.id),children:[i.jsxs("span",{children:["期限: ",y.dueDate||"未設定"]}),i.jsx("button",{className:"edit-btn-tiny",title:"期限を設定",children:i.jsx(xr,{size:12})})]}),i.jsxs("button",{className:"memo-btn-tiny",onClick:()=>N(y.id),children:[i.jsx(ar,{size:12}),"メモ (",E.filter(_=>_.linkedTaskId===y.id).length,")"]})]}),i.jsxs("div",{className:"task-actions",children:[i.jsx("button",{className:"icon-btn",title:"詳細編集",onClick:()=>h(y),children:i.jsx(xr,{size:16})}),i.jsx("button",{className:"icon-btn",title:"複製",onClick:()=>F(y),children:i.jsx(lg,{size:16})}),i.jsx("button",{className:"icon-btn delete",onClick:()=>z(y.id),title:"削除",children:i.jsx(Je,{size:16})})]})]})]},y.id)):i.jsx("div",{className:"empty-state",children:"該当するタスクはありません。"})}),p&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-content",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{children:p.id?"タスクを編集":"新規タスク作成"}),i.jsx("button",{className:"close-btn",onClick:()=>h(null),children:i.jsx(Ln,{size:20})})]}),i.jsxs("form",{onSubmit:qe,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"タイトル"}),i.jsx("input",{type:"text",required:!0,value:p.title||"",onChange:y=>h({...p,title:y.target.value}),placeholder:"例：〇〇改善案の意見集約"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"説明"}),i.jsx("textarea",{rows:3,value:p.description||"",onChange:y=>h({...p,description:y.target.value}),placeholder:"詳細なメモを入力..."})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"カテゴリ"}),i.jsxs("select",{value:p.category||"union_member",onChange:y=>h({...p,category:y.target.value}),children:[i.jsx("option",{value:"union_member",children:"🔴 組合員関連"}),i.jsx("option",{value:"administrative",children:"🔵 事務タスク"}),i.jsx("option",{value:"committee",children:"🟢 委員タスク"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"優先度"}),i.jsxs("select",{value:p.priority||"medium",onChange:y=>h({...p,priority:y.target.value}),children:[i.jsx("option",{value:"high",children:"高"}),i.jsx("option",{value:"medium",children:"中"}),i.jsx("option",{value:"low",children:"低"})]})]})]}),p.category==="union_member"&&i.jsx("div",{className:"form-group checkbox-group",children:i.jsxs("label",{className:"checkbox-label",children:[i.jsx("input",{type:"checkbox",checked:p.trackResponseRate||!1,onChange:y=>h({...p,trackResponseRate:y.target.checked,responseRate:y.target.checked?p.responseRate||0:void 0})}),"回答率を記録してフォローする"]})}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"期限"}),i.jsx("input",{type:"date",value:p.dueDate||"",onChange:y=>h({...p,dueDate:y.target.value})})]}),p.trackResponseRate&&i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"現在の回答率 (%)"}),i.jsx("input",{type:"number",min:"0",max:"100",step:"10",value:p.responseRate||0,onChange:y=>h({...p,responseRate:parseInt(y.target.value)})})]})]}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",className:"cancel-btn",onClick:()=>h(null),children:"キャンセル"}),i.jsx("button",{type:"submit",className:"save-btn",children:"保存する"})]})]})]})}),b&&i.jsx(Hs,{memos:E.filter(y=>y.linkedTaskId===b),initialMemoId:(_e=E.find(y=>y.linkedTaskId===b))==null?void 0:_e.id,defaultLinkedTaskId:b,onSave:y=>{const P=[...E.filter(U=>U.linkedTaskId!==b),...y];m(P),R.saveMemos(P)},onClose:()=>N(null)}),i.jsx("style",{children:`
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
          display: flex;
          flex-direction: column;
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
          gap: 0.5rem;
          justify-content: flex-end;
        }

        .status-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid transparent;
          background-color: transparent;
          transition: all 0.2s ease;
        }

        .status-dot.todo { border-color: #475569; }
        .status-dot.in_progress { border-color: var(--warning); }
        .status-dot.completed { border-color: var(--success); }

        .status-dot.active.todo { background-color: #475569; }
        .status-dot.active.in_progress { background-color: var(--warning); }
        .status-dot.active.completed { background-color: var(--success); }

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
          .template-grid { grid-template-columns: 1fr; }
          .rate-btns { flex-wrap: wrap; gap: 0.5rem; }
          .rate-btn { flex: 1 1 30%; font-size: 0.8rem; padding: 0.6rem 0; }
          .task-title { font-size: 1rem; }
          .page-header h1 { font-size: 1.5rem; }
          .modal-content { padding: 1.5rem; border-radius: 12px; }
        }
      `})]})},yu=({routes:e,onChange:t})=>{const n=w.useMemo(()=>{const c=R.getEvents().filter(g=>g.expense&&g.expense.routes.length>0).flatMap(g=>g.expense.routes),p=[],h=new Set;for(const g of c){const C=`${g.from}-${g.to}-${g.amount}`;h.has(C)||(p.push(g),h.add(C))}return p.slice(0,3)},[e]),r=()=>{const a={id:Date.now().toString(),from:"",to:"",amount:0,isRoundTrip:!0,transportType:"public"};t([...e,a])},l=a=>{const c={...a,id:Date.now().toString()};t([...e,c])},o=(a,c)=>{t(e.map(p=>p.id===a?{...p,...c}:p))},s=a=>{t(e.filter(c=>c.id!==a))},u=e.reduce((a,c)=>a+c.amount*(c.isRoundTrip?2:1),0);return i.jsxs("div",{className:"travel-expense-form",children:[i.jsxs("div",{className:"expense-header",children:[i.jsxs("label",{children:[i.jsx(Ws,{size:14})," 旅費精算"]}),i.jsxs("span",{className:"total-badge",children:["合計: ¥",u.toLocaleString()]})]}),n.length>0&&i.jsxs("div",{className:"recent-routes",children:[i.jsx("span",{className:"recent-label",children:"履歴からコピー:"}),i.jsx("div",{className:"recent-list",children:n.map(a=>i.jsxs("button",{className:"copy-chip",onClick:()=>l(a),children:[i.jsx(Ko,{size:10})," ",a.from,"→",a.to," (¥",a.amount.toLocaleString(),")"]},a.id))})]}),i.jsx("div",{className:"routes-list",children:e.map(a=>i.jsxs("div",{className:"route-item",children:[i.jsxs("div",{className:"route-inputs",children:[i.jsx("input",{type:"text",placeholder:"出発",value:a.from,onChange:c=>o(a.id,{from:c.target.value})}),i.jsx("span",{className:"arrow",children:"→"}),i.jsx("input",{type:"text",placeholder:"到着",value:a.to,onChange:c=>o(a.id,{to:c.target.value})})]}),i.jsxs("div",{className:"route-meta",children:[i.jsxs("div",{className:"amount-box",children:[i.jsx("span",{children:"¥"}),i.jsx("input",{type:"number",value:a.amount||"",onChange:c=>o(a.id,{amount:parseInt(c.target.value)||0})})]}),i.jsxs("div",{className:"trip-toggle",children:[i.jsx("button",{className:a.isRoundTrip?"":"active",onClick:()=>o(a.id,{isRoundTrip:!1}),children:"片道"}),i.jsx("button",{className:a.isRoundTrip?"active":"",onClick:()=>o(a.id,{isRoundTrip:!0}),children:"往復"})]}),i.jsx("button",{className:"del-btn",onClick:()=>s(a.id),children:i.jsx(Je,{size:14})})]})]},a.id))}),i.jsxs("button",{className:"add-btn",onClick:r,children:[i.jsx(pt,{size:14})," 経路を追加"]}),i.jsx("style",{children:`
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
      `})]})},Qg=()=>{var Js;const[e,t]=w.useState([]),[n,r]=w.useState([]),[l,o]=w.useState([]),[s,u]=w.useState(""),[a,c]=w.useState(!1),[p,h]=w.useState(new Date),[g,C]=w.useState(new Date().toLocaleDateString("sv")),[b,N]=w.useState(null),[E,m]=w.useState({}),[d,f]=w.useState(!1),[v,j]=w.useState(null),[T,x]=w.useState([]),[z,O]=w.useState([]),[F,L]=w.useState("schedule"),[Q,le]=w.useState(null),[ce,We]=w.useState(""),[qe,_e]=w.useState([]),[y,_]=w.useState(null),[P,U]=w.useState({}),[Y,Te]=w.useState("list");w.useEffect(()=>{t(R.getEvents()),r(R.getTasks()),o(R.getMeetingDefinitions()),x(R.getTravelExpenses()),O(R.getMemos()),_e(R.getRoles());const k=R.getCurrentRoleId();u(k),We(k),c(R.getShowAllItems())},[]);const Se=k=>{t(k),R.saveEvents(k)},S=p.getFullYear(),D=p.getMonth(),W=new Date(S,D,1).getDay(),He=new Date(S,D+1,0).getDate(),Ie=()=>h(new Date(S,D-1,1)),et=()=>h(new Date(S,D+1,1)),Hr=[];for(let k=0;k<W;k++)Hr.push(null);for(let k=1;k<=He;k++)Hr.push(k);const Yn=k=>`${S}-${String(D+1).padStart(2,"0")}-${String(k).padStart(2,"0")}`,yi=k=>{confirm("この予定を削除しますか？")&&(Se(e.filter(M=>M.id!==k)),b===k&&N(null))},ki=k=>{N(k.id),m({...k})},Zd=()=>{if(!E.title||!b)return;let k=E.expense;k&&(k.totalAmount=k.routes.reduce((B,G)=>B+G.amount*(G.isRoundTrip?2:1),0));const M=e.map(B=>B.id===b?{...B,...E,expense:k}:B);Se(M),N(null),E.date&&E.category&&Ks(E.date,E.category)},Qr=k=>e.filter(M=>{if(M.date!==k)return!1;if(a||!ce)return!0;const B=l.find(G=>G.name===M.title);return B&&ce&&B.roleIds&&B.roleIds.length>0?B.roleIds.includes(ce):!0}),Qs=k=>n.filter(M=>{if(M.dueDate!==k)return!1;if(a||!ce)return!0;const G=R.getTaskDefinitions().find(ge=>ge.title===M.title);return G&&ce&&G.roleIds&&G.roleIds.length>0?G.roleIds.includes(ce):!0}),qd=()=>{const k=Qr(g),M=Qs(g),B=k.filter(V=>V.startTime&&V.endTime),G=k.filter(V=>!V.startTime||!V.endTime),ge=V=>{const[Re,fn]=V.split(":").map(Number);return Re*60+fn};return i.jsxs("div",{className:"timetable-container",children:[(G.length>0||M.length>0)&&i.jsxs("div",{className:"timetable-all-day",children:[i.jsx("span",{className:"all-day-label",children:"終日 / 時間指定なし"}),i.jsxs("div",{className:"all-day-items",children:[G.map(V=>i.jsx("div",{className:`event-item-mini ${V.category} ${V.status==="completed"?"completed":""}`,onClick:()=>{N(V.id),m({...V})},children:i.jsx("span",{className:"title",children:V.title})},V.id)),M.map(V=>i.jsx("div",{className:`task-item-mini ${V.status==="completed"?"completed":""}`,onClick:()=>{_(V.id),U({...V})},children:i.jsx("span",{className:"title",children:V.title})},V.id))]})]}),i.jsxs("div",{className:"timetable-grid",children:[i.jsx("div",{className:"time-labels",children:Array.from({length:25}).map((V,Re)=>i.jsxs("div",{className:"time-label",style:{top:`${Re*50}px`},children:[Re,":00"]},Re))}),Array.from({length:25}).map((V,Re)=>i.jsx("div",{className:"time-grid-line",style:{top:`${Re*50}px`}},Re)),B.map(V=>{const Re=ge(V.startTime),fn=ge(V.endTime),Ys=Re/60*50,mn=(fn-Re)/60*50;return i.jsxs("div",{className:`timetable-event ${V.category} ${V.status==="completed"?"completed":""}`,style:{top:`${Ys}px`,height:`${Math.max(mn,35)}px`},onClick:()=>{N(V.id),m({...V})},children:[i.jsx("span",{className:"title",children:V.title}),i.jsxs("span",{className:"time",children:[i.jsx(Xl,{size:10})," ",V.startTime," - ",V.endTime]})]},V.id)})]})]})},ep=()=>{if(!g)return;const k={id:Date.now().toString(),title:"新規予定",date:g,category:"other",status:"todo",expense:{routes:[],totalAmount:0}};Se([...e,k]),ki(k)},tp=k=>{if(!g)return;const M={id:Date.now().toString(),title:k.name,memo:k.content,date:g,category:"meeting",status:"todo",expense:{routes:[],totalAmount:0}};Se([...e,M]),f(!1),ki(M),Ks(M.date,M.category)},Ks=(k,M)=>{if(M!=="meeting"&&M!=="conference")return;const B=new Date(k);B.setDate(B.getDate()+7);const G=B.getFullYear(),ge=String(B.getMonth()+1).padStart(2,"0"),V=String(B.getDate()).padStart(2,"0"),Re=`${G}-${ge}-${V}`,fn=R.getTasks();if(!fn.some(mn=>mn.title==="旅費精算"&&mn.dueDate===Re)){const mn={id:`auto-${Date.now()}`,title:"旅費精算",description:`${k} の${M==="meeting"?"打ち合わせ":"会議"}に伴う精算`,category:"administrative",status:"todo",priority:"medium",dueDate:Re,createdAt:new Date().toISOString()},Gs=[...fn,mn];r(Gs),R.saveTasks(Gs)}},np=(k,M)=>{const G=[...z.filter(ge=>ge.linkedEventId!==k&&ge.linkedTaskId!==k),...M];O(G),R.saveMemos(G)},rp=()=>{if(!g)return;const k={id:Date.now().toString(),title:"新規移動",date:g,routes:[],totalAmount:0},M=[...T,k];x(M),R.saveTravelExpenses(M)},lp=k=>{if(confirm("この旅費データを削除しますか？")){const M=T.filter(B=>B.id!==k);x(M),R.saveTravelExpenses(M),Q===k&&le(null)}},ip=(k,M)=>{const B=M.reduce((ge,V)=>ge+V.amount*(V.isRoundTrip?2:1),0),G=T.map(ge=>ge.id===k?{...ge,routes:M,totalAmount:B}:ge);x(G),R.saveTravelExpenses(G)},op=(k,M)=>{const B=T.map(G=>G.id===k?{...G,title:M}:G);x(B),R.saveTravelExpenses(B)},sp=k=>{_(k.id),U({...k})},ap=()=>{if(!P.title||!y)return;const k=n.map(M=>M.id===y?{...M,...P}:M);r(k),R.saveTasks(k),_(null)},up=k=>{if(confirm("このタスクを削除しますか？")){const M=n.filter(B=>B.id!==k);r(M),R.saveTasks(M),y===k&&_(null)}};return i.jsxs("div",{className:"calendar-page",children:[i.jsxs("header",{className:"page-header",children:[i.jsx("h1",{children:"スケジュール管理"}),i.jsxs("div",{className:"header-actions",children:[i.jsxs("div",{className:"filter-area",children:[i.jsx(Qd,{size:16}),i.jsxs("select",{value:ce,onChange:k=>We(k.target.value),className:"role-filter-select",children:[i.jsx("option",{value:"",children:"（全表示 / フィルタ解除）"}),qe.map(k=>i.jsx("option",{value:k.id,children:k.id===s?`🚩 自分の役職 (${k.name})`:`${k.name} のみ表示`},k.id))]})]}),i.jsxs("div",{className:"month-nav",children:[i.jsx("button",{className:"icon-btn",onClick:Ie,children:i.jsx(tg,{})}),i.jsxs("span",{className:"current-month-label",children:[S,"年 ",D+1,"月"]}),i.jsx("button",{className:"icon-btn",onClick:et,children:i.jsx(It,{})})]})]})]}),i.jsxs("div",{className:"calendar-layout",children:[i.jsx("div",{className:"calendar-main",children:i.jsxs("div",{className:"calendar-grid-container",children:[i.jsx("div",{className:"calendar-header",children:["日","月","火","水","木","金","土"].map(k=>i.jsx("div",{className:"weekday-label",children:k},k))}),i.jsx("div",{className:"calendar-grid",children:Hr.map((k,M)=>{const B=k?Yn(k):"",G=k?Qr(B):[],ge=k?Qs(B):[];return i.jsx("div",{className:`calendar-day ${k===null?"empty":""} ${k&&Yn(k)===g?"selected":""} ${k&&Yn(k)===new Date().toLocaleDateString("sv")?"today":""}`,onClick:()=>k&&C(Yn(k)),children:k&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"day-number",children:k}),i.jsxs("div",{className:"day-events",children:[G.map(V=>i.jsx("div",{className:`event-dot ${V.category} ${V.status==="completed"?"completed":""}`},V.id)),ge.map(V=>i.jsx("div",{className:`task-dot ${V.status==="completed"?"completed":""}`},V.id))]})]})},M)})})]})}),i.jsx("div",{className:"calendar-side",children:g?i.jsxs("div",{className:"detail-panel",children:[i.jsxs("div",{className:"detail-tabs",children:[i.jsx("button",{className:`detail-tab-btn ${F==="schedule"?"active":""}`,onClick:()=>L("schedule"),children:"予定・タスク"}),i.jsx("button",{className:`detail-tab-btn ${F==="travel"?"active":""}`,onClick:()=>L("travel"),children:"旅費精算"})]}),F==="travel"?i.jsxs("div",{className:"travel-tab-content",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h3",{children:[g," の旅費一覧"]}),i.jsxs("button",{className:"small-primary-btn",onClick:rp,children:[i.jsx(pt,{size:16})," 追加"]})]}),i.jsxs("div",{className:"daily-travel-list",children:[T.filter(k=>k.date===g).map(k=>i.jsx("div",{className:`travel-item-card ${Q===k.id?"editing":""}`,children:Q===k.id?i.jsxs("div",{className:"travel-edit-mode",children:[i.jsxs("div",{className:"edit-header",children:[i.jsx("input",{type:"text",value:k.title,onChange:M=>op(k.id,M.target.value),placeholder:"移動の目的など",className:"travel-title-input",autoFocus:!0}),i.jsxs("button",{className:"done-btn",onClick:()=>le(null),children:[i.jsx(Sl,{size:16})," 完了"]})]}),i.jsx(yu,{routes:k.routes,onChange:M=>ip(k.id,M)})]}):i.jsxs("div",{className:"travel-display-mode",onClick:()=>le(k.id),children:[i.jsxs("div",{className:"travel-header",children:[i.jsx("strong",{children:k.title||"（無題の移動）"}),i.jsxs("span",{className:"total",children:["¥",(k.totalAmount||0).toLocaleString()]}),i.jsx("button",{className:"del-btn-tiny",onClick:M=>{M.stopPropagation(),lp(k.id)},children:i.jsx(Je,{size:12})})]}),i.jsxs("div",{className:"travel-routes",children:[k.routes.map((M,B)=>i.jsxs("div",{className:"route-tag",children:[M.from," → ",M.to]},B)),k.routes.length===0&&i.jsx("span",{className:"empty-route",children:"タップして経路を追加"})]})]})},k.id)),T.filter(k=>k.date===g).length===0&&i.jsx("p",{className:"empty-hint",children:"この日の旅費データはありません。"})]})]}):i.jsxs("div",{className:"schedule-tab-content",children:[i.jsxs("div",{className:"section-header",children:[i.jsxs("h3",{children:[g," の予定・タスク"]}),i.jsxs("div",{className:"add-actions",children:[i.jsxs("div",{className:"view-mode-toggle",children:[i.jsx("button",{className:`view-mode-btn ${Y==="list"?"active":""}`,onClick:()=>Te("list"),title:"リスト表示",children:i.jsx(ag,{size:16})}),i.jsx("button",{className:`view-mode-btn ${Y==="timetable"?"active":""}`,onClick:()=>Te("timetable"),title:"タイムテーブル表示",children:i.jsx(Hn,{size:16})})]}),i.jsxs("button",{className:"small-primary-btn",onClick:()=>f(!0),children:[i.jsx(Jd,{size:16})," 会議体"]}),i.jsxs("button",{className:"small-primary-btn",onClick:ep,children:[i.jsx(pt,{size:16})," 追加"]})]})]}),Y==="timetable"?qd():i.jsxs("div",{className:"event-list",children:[Qr(g).map(k=>{var M;return i.jsx("div",{className:"event-item-container",children:b===k.id?i.jsxs("div",{className:"event-edit-form",children:[i.jsx("input",{className:"edit-title",value:E.title||"",onChange:B=>m({...E,title:B.target.value}),placeholder:"予定タイトル"}),i.jsxs("div",{className:"edit-row",children:[i.jsx(Xl,{size:16}),i.jsx("input",{type:"time",value:E.startTime||"",onChange:B=>m({...E,startTime:B.target.value})}),i.jsx("span",{children:"〜"}),i.jsx("input",{type:"time",value:E.endTime||"",onChange:B=>m({...E,endTime:B.target.value})})]}),i.jsxs("div",{className:"edit-row",children:[i.jsx(ar,{size:16}),i.jsxs("select",{className:"edit-status",value:E.status||"todo",onChange:B=>m({...E,status:B.target.value}),children:[i.jsx("option",{value:"todo",children:"未着手"}),i.jsx("option",{value:"in_progress",children:"進行中"}),i.jsx("option",{value:"completed",children:"完了"}),i.jsx("option",{value:"on_hold",children:"保留"})]})]}),i.jsxs("div",{className:"edit-row",children:[i.jsx(Ko,{size:16}),i.jsx("input",{className:"edit-loc",value:E.location||"",onChange:B=>m({...E,location:B.target.value}),placeholder:"場所"})]}),i.jsxs("select",{className:"edit-cat",value:E.category||"other",onChange:B=>m({...E,category:B.target.value}),children:[i.jsx("option",{value:"meeting",children:"打ち合わせ"}),i.jsx("option",{value:"negotiation",children:"交渉"}),i.jsx("option",{value:"business_trip",children:"出張"}),i.jsx("option",{value:"conference",children:"会議"}),i.jsx("option",{value:"training",children:"研修"}),i.jsx("option",{value:"other",children:"その他"})]}),i.jsx(yu,{routes:((M=E.expense)==null?void 0:M.routes)||[],onChange:B=>m({...E,expense:{routes:B,totalAmount:0}})}),i.jsxs("div",{className:"edit-actions",children:[i.jsxs("button",{className:"save-btn",onClick:Zd,children:[i.jsx(Sl,{size:16})," 保存"]}),i.jsxs("button",{className:"delete-btn-action",onClick:()=>yi(k.id),children:[i.jsx(Je,{size:16})," 削除"]}),i.jsxs("button",{className:"cancel-btn",onClick:()=>N(null),children:[i.jsx(Ln,{size:16})," キャンセル"]})]})]}):i.jsxs("div",{className:`event-display-card ${k.status==="completed"?"completed":""}`,onClick:()=>ki(k),children:[i.jsxs("div",{className:"ev-header",children:[i.jsxs("div",{className:"ev-left",children:[i.jsx("span",{className:`ev-cat-tag ${k.category}`,children:k.category}),k.status==="completed"&&i.jsx("span",{className:"completed-badge",children:"完了"})]}),i.jsx("span",{className:"ev-time",children:k.startTime||""})]}),i.jsx("h4",{className:"ev-title",children:k.title}),k.location&&i.jsxs("div",{className:"ev-loc",children:[i.jsx(Ko,{size:12})," ",k.location]}),k.expense&&k.expense.totalAmount>0&&i.jsxs("div",{className:"ev-expense",children:[i.jsx(Ws,{size:12}),i.jsxs("span",{children:["旅費: ¥",k.expense.totalAmount.toLocaleString()]})]}),i.jsx("div",{className:"ev-memos-row",children:i.jsxs("button",{className:"memo-btn-tiny",onClick:B=>{B.stopPropagation(),j(k.id)},children:[i.jsx(ar,{size:12}),"メモ (",z.filter(B=>B.linkedEventId===k.id).length,")"]})}),i.jsx("div",{className:"ev-hover-hint",children:"タップで編集"})]})},k.id)}),n.filter(k=>k.dueDate===g).map(k=>i.jsx("div",{className:"event-item-container",children:y===k.id?i.jsxs("div",{className:"event-edit-form task-edit",children:[i.jsx("input",{className:"edit-title",value:P.title||"",onChange:M=>U({...P,title:M.target.value}),placeholder:"タスク名"}),i.jsxs("div",{className:"edit-row",children:[i.jsx(ar,{size:16}),i.jsxs("select",{className:"edit-status",value:P.status||"todo",onChange:M=>U({...P,status:M.target.value}),children:[i.jsx("option",{value:"todo",children:"未着手"}),i.jsx("option",{value:"in_progress",children:"進行中"}),i.jsx("option",{value:"completed",children:"完了"}),i.jsx("option",{value:"on_hold",children:"保留"})]})]}),i.jsx("textarea",{className:"edit-desc",value:P.description||"",onChange:M=>U({...P,description:M.target.value}),placeholder:"タスクの説明",rows:3}),i.jsxs("div",{className:"edit-actions",children:[i.jsxs("button",{className:"save-btn",onClick:ap,children:[i.jsx(Sl,{size:16})," 保存"]}),i.jsxs("button",{className:"delete-btn-action",onClick:()=>up(k.id),children:[i.jsx(Je,{size:16})," 削除"]}),i.jsxs("button",{className:"cancel-btn",onClick:()=>_(null),children:[i.jsx(Ln,{size:16})," キャンセル"]})]})]}):i.jsxs("div",{className:`task-display-card ${k.status}`,onClick:()=>sp(k),children:[i.jsxs("div",{className:"ev-header",children:[i.jsxs("div",{className:"ev-left",children:[i.jsx("span",{className:"task-badge",children:k.category==="union_member"?"🔴 組合員対応":"🔵 事務タスク"}),k.status==="completed"&&i.jsx("span",{className:"completed-badge",children:"完了"})]}),i.jsx("span",{className:"task-status-tag",children:k.status==="completed"?"完了":"期限日"})]}),i.jsxs("h4",{className:"ev-title",children:["【タスク】",k.title]}),i.jsx("div",{className:"ev-loc",children:k.description}),k.trackResponseRate&&i.jsxs("div",{className:"task-rate",children:["回答率: ",k.responseRate||0,"%"]}),i.jsx("div",{className:"ev-memos-row",children:i.jsxs("button",{className:"memo-btn-tiny",onClick:M=>{M.stopPropagation(),j(k.id)},children:[i.jsx(ar,{size:12}),"メモ (",z.filter(M=>M.linkedTaskId===k.id).length,")"]})}),i.jsx("div",{className:"ev-hover-hint",children:"タップで編集"})]})},k.id)),Qr(g).length===0&&n.filter(k=>k.dueDate===g).length===0&&i.jsx("div",{className:"empty-state",children:"この日の予定・タスクはありません。"})]})]})]}):i.jsx("div",{className:"empty-state-panel",children:"日付を選択してください。"})})]}),v&&i.jsx(Hs,{memos:z.filter(k=>k.linkedEventId===v||k.linkedTaskId===v),initialMemoId:(Js=z.find(k=>k.linkedEventId===v||k.linkedTaskId===v))==null?void 0:Js.id,defaultLinkedEventId:e.some(k=>k.id===v)?v:void 0,defaultLinkedTaskId:n.some(k=>k.id===v)?v:void 0,onSave:k=>{np(v,k)},onClose:()=>j(null)}),d&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-content",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{children:"会議体定義から作成"}),i.jsx("button",{className:"close-btn",onClick:()=>f(!1),children:i.jsx(Ln,{size:20})})]}),i.jsxs("div",{className:"mtg-grid",children:[l.filter(k=>{if(a)return!0;const M=ce||s;return!M||k.roleIds.includes(M)}).map(k=>i.jsxs("button",{className:"mtg-card",onClick:()=>tp(k),children:[i.jsxs("div",{className:"mtg-card-info",children:[i.jsx("strong",{children:k.name}),i.jsx("span",{className:"timing",children:k.timing}),i.jsx("p",{children:k.content})]}),i.jsx(pt,{size:20})]},k.id)),l.filter(k=>{if(a)return!0;const M=ce||s;return!M||k.roleIds.includes(M)}).length===0&&i.jsx("p",{className:"empty-hint",children:"現在選択中の役職に該当する会議体定義はありません。"})]})]})}),i.jsx("style",{children:`
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
      `})]})},Kg=()=>{const[e,t]=w.useState([]),[n,r]=w.useState([]),[l,o]=w.useState([]),[s,u]=w.useState(""),[a,c]=w.useState(!1),[p,h]=w.useState({prefs:!0,roles:!1,tasks:!1,meetings:!1,cleanup:!1}),[g,C]=w.useState(""),[b,N]=w.useState({title:"",category:"union_member",priority:"medium",roleIds:[],trackResponseRate:!0}),[E,m]=w.useState({name:"",content:"",timing:"",roleIds:[]}),[d,f]=w.useState(null),[v,j]=w.useState(null),[T,x]=w.useState(null);w.useEffect(()=>{t(R.getRoles()),r(R.getTaskDefinitions()),o(R.getMeetingDefinitions()),u(R.getCurrentRoleId()),c(R.getShowAllItems())},[]);const z=(S=e,D=n,W=l,He=s,Ie=a)=>{R.saveSettings({roles:S,taskDefinitions:D,meetingDefinitions:W,currentRoleId:He,showAllItems:Ie})},O=S=>{h(D=>({...D,[S]:!D[S]}))},F=S=>{let D={};const W={version:3,tasks:R.getTasks(),events:R.getEvents(),roles:R.getRoles(),taskDefinitions:R.getTaskDefinitions(),meetingDefinitions:R.getMeetingDefinitions(),currentRoleId:R.getCurrentRoleId(),showAllItems:R.getShowAllItems(),lastSyncedAt:localStorage.getItem("union_app_last_sync")||void 0};if(S==="settings"){const{tasks:Hr,events:Yn,...yi}=W;D=yi}else D=W;const He=new Blob([JSON.stringify(D,null,2)],{type:"application/json"}),Ie=URL.createObjectURL(He),et=document.createElement("a");et.href=Ie,et.download=`union_app_${S}_${new Date().toLocaleDateString("sv")}.json`,document.body.appendChild(et),et.click(),document.body.removeChild(et),URL.revokeObjectURL(Ie)},L=()=>{if(!g)return;const S={id:`role - ${Date.now()} `,name:g},D=[...e,S];t(D),z(D),C("")},Q=S=>{if(S.preventDefault(),!(d!=null&&d.name))return;const D=e.map(W=>W.id===d.id?d:W);t(D),z(D),f(null)},le=S=>{if(confirm("この役職を削除しますか？紐付いているタスク・会議体からも解除されます。")){const D=e.filter(Ie=>Ie.id!==S);t(D);const W=n.map(Ie=>({...Ie,roleIds:Ie.roleIds.filter(et=>et!==S)})),He=l.map(Ie=>({...Ie,roleIds:Ie.roleIds.filter(et=>et!==S)}));r(W),o(He),z(D,W,He)}},ce=()=>{if(!b.title)return;const S={id:`def - ${Date.now()} `,title:b.title||"",description:b.description||"",category:b.category||"union_member",priority:b.priority||"medium",roleIds:b.roleIds||[],trackResponseRate:b.trackResponseRate!==void 0?b.trackResponseRate:b.category==="union_member"},D=[...n,S];r(D),z(e,D),N({title:"",category:"union_member",priority:"medium",roleIds:[],trackResponseRate:!0})},We=S=>{if(S.preventDefault(),!(v!=null&&v.title))return;const D=n.map(W=>W.id===v.id?v:W);r(D),z(e,D),j(null)},qe=()=>{if(!v)return;const S=v.subtasks||[],D={id:`sub - ${Date.now()} `,title:"",order:S.length};j({...v,subtasks:[...S,D]})},_e=(S,D)=>{v&&j({...v,subtasks:(v.subtasks||[]).map(W=>W.id===S?{...W,title:D}:W)})},y=S=>{v&&j({...v,subtasks:(v.subtasks||[]).filter(D=>D.id!==S)})},_=S=>{if(confirm("この定義を削除しますか？")){const D=n.filter(W=>W.id!==S);r(D),z(e,D)}},P=()=>{if(!E.name)return;const S={id:`mtg - ${Date.now()} `,name:E.name||"",content:E.content||"",timing:E.timing||"",roleIds:E.roleIds||[]},D=[...l,S];o(D),z(e,n,D),m({name:"",content:"",timing:"",roleIds:[]})},U=S=>{if(S.preventDefault(),!(T!=null&&T.name))return;const D=l.map(W=>W.id===T.id?T:W);o(D),z(e,n,D),x(null)},Y=S=>{if(confirm("この定義を削除しますか？")){const D=l.filter(W=>W.id!==S);o(D),z(e,n,D)}},Te=()=>{window.confirm(`警告：この操作を行うと、このブラウザに保存されているすべてのデータ（タスク、予定、設定など）が削除され、ログアウトされます。

Google Drive上のデータは削除されませんが、この端末からはアクセスできなくなります。

本当によろしいですか？`)&&(se.signOut(),localStorage.clear(),sessionStorage.clear(),alert("すべてのデータを削除しました。アプリを再起動します。"),window.location.href=window.location.origin+window.location.pathname)},Se=(S,D)=>D.includes(S)?D.filter(W=>W!==S):[...D,S];return i.jsxs("div",{className:"settings-page",children:[i.jsx("header",{className:"page-header",children:i.jsx("h1",{children:"設定"})}),i.jsxs("div",{className:"settings-accordion",children:[i.jsxs("div",{className:`accordion - section ${p.prefs?"open":""} `,children:[i.jsxs("div",{className:"section-header",onClick:()=>O("prefs"),children:[i.jsx(Vs,{size:20}),i.jsx("h2",{children:"個人設定・データ管理"}),p.prefs?i.jsx(vn,{}):i.jsx(It,{})]}),p.prefs&&i.jsxs("div",{className:"section-content",children:[i.jsxs("div",{className:"setting-item",children:[i.jsx("label",{children:"現在の役職"}),i.jsxs("select",{value:s,onChange:S=>{u(S.target.value),z(e,n,l,S.target.value)},children:[i.jsx("option",{value:"",children:"役職なし / 未設定"}),e.map(S=>i.jsx("option",{value:S.id,children:S.name},S.id))]}),i.jsx("p",{className:"hint",children:"選択した役職に応じてフィルタリングされます。"})]}),i.jsx("div",{className:"setting-item checkbox",children:i.jsxs("label",{className:"toggle-label",children:[i.jsx("input",{type:"checkbox",checked:a,onChange:S=>{c(S.target.checked),z(e,n,l,s,S.target.checked)}}),"全表示モード（他役職の項目もすべて表示）"]})}),i.jsxs("div",{className:"export-area",children:[i.jsx("h3",{children:"データのエクスポート"}),i.jsxs("div",{className:"export-actions",children:[i.jsxs("button",{className:"export-btn",onClick:()=>F("settings"),children:[i.jsx(gu,{size:16})," 設定のみを保存 (JSON)"]}),i.jsxs("button",{className:"export-btn all",onClick:()=>F("all"),children:[i.jsx(gu,{size:16})," 全データを保存 (JSON)"]})]})]})]})]}),i.jsxs("div",{className:`accordion - section ${p.roles?"open":""} `,children:[i.jsxs("div",{className:"section-header",onClick:()=>O("roles"),children:[i.jsx(Ng,{size:20}),i.jsx("h2",{children:"役職の定義"}),p.roles?i.jsx(vn,{}):i.jsx(It,{})]}),p.roles&&i.jsx("div",{className:"section-content",children:i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"settings-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{minWidth:"150px"},children:"役職名"}),i.jsx("th",{style:{width:"100px"},children:"操作"})]})}),i.jsxs("tbody",{children:[e.map(S=>i.jsxs("tr",{children:[i.jsx("td",{children:S.name}),i.jsx("td",{children:i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"icon-btn",onClick:()=>f(S),children:i.jsx(xr,{size:14})}),i.jsx("button",{className:"icon-btn delete",onClick:()=>le(S.id),children:i.jsx(Je,{size:14})})]})})]},S.id)),i.jsxs("tr",{className:"adding-row",children:[i.jsx("td",{children:i.jsx("input",{value:g,onChange:S=>C(S.target.value),placeholder:"新しい役職名を入力..."})}),i.jsx("td",{children:i.jsxs("button",{className:"add-inline-btn",onClick:L,disabled:!g,children:[i.jsx(pt,{size:16})," 追加"]})})]})]})]})})})]}),i.jsxs("div",{className:`accordion - section ${p.tasks?"open":""} `,children:[i.jsxs("div",{className:"section-header",onClick:()=>O("tasks"),children:[i.jsx(eg,{size:20}),i.jsx("h2",{children:"定型タスクの定義"}),p.tasks?i.jsx(vn,{}):i.jsx(It,{})]}),p.tasks&&i.jsx("div",{className:"section-content",children:i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"settings-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{minWidth:"180px"},children:"タスク名"}),i.jsx("th",{style:{minWidth:"100px"},children:"カテゴリ"}),i.jsx("th",{style:{minWidth:"80px"},children:"優先度"}),i.jsx("th",{style:{minWidth:"120px"},children:"対象役職"}),i.jsx("th",{style:{width:"100px"},children:"操作"})]})}),i.jsxs("tbody",{children:[n.map(S=>i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:S.title}),i.jsx("div",{className:"sub-text",children:S.description})]}),i.jsxs("td",{children:[S.category==="union_member"&&"🔴 組合員",S.category==="administrative"&&"🔵 事務",S.category==="committee"&&"🟢 委員"]}),i.jsx("td",{children:i.jsx("span",{className:`prio - tag ${S.priority} `,children:S.priority})}),i.jsx("td",{children:i.jsx("div",{className:"role-mini-badges",children:S.roleIds.length>0?S.roleIds.map(D=>{var W;return i.jsx("span",{className:"mini-badge",children:((W=e.find(He=>He.id===D))==null?void 0:W.name)||D},D)}):i.jsx("span",{className:"empty-hint",children:"全員"})})}),i.jsx("td",{children:i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"icon-btn",onClick:()=>j(S),children:i.jsx(xr,{size:14})}),i.jsx("button",{className:"icon-btn delete",onClick:()=>_(S.id),children:i.jsx(Je,{size:14})})]})})]},S.id)),i.jsx("tr",{className:"adding-row complex",children:i.jsxs("td",{colSpan:5,children:[i.jsxs("div",{className:"inline-form",children:[i.jsx("input",{value:b.title,onChange:S=>N({...b,title:S.target.value}),placeholder:"新しい定型タスク名..."}),i.jsxs("select",{value:b.category,onChange:S=>N({...b,category:S.target.value,trackResponseRate:S.target.value==="union_member"}),children:[i.jsx("option",{value:"union_member",children:"🔴 組合員"}),i.jsx("option",{value:"administrative",children:"🔵 事務"}),i.jsx("option",{value:"committee",children:"🟢 委員"})]}),i.jsxs("select",{value:b.priority,onChange:S=>N({...b,priority:S.target.value}),children:[i.jsx("option",{value:"high",children:"高"}),i.jsx("option",{value:"medium",children:"中"}),i.jsx("option",{value:"low",children:"低"})]}),i.jsxs("button",{className:"add-inline-btn",onClick:ce,disabled:!b.title,children:[i.jsx(pt,{size:16})," 追加"]})]}),i.jsx("p",{className:"hint",children:"※詳細は追加後の編集から設定してください"})]})})]})]})})})]}),i.jsxs("div",{className:`accordion - section ${p.meetings?"open":""} `,children:[i.jsxs("div",{className:"section-header",onClick:()=>O("meetings"),children:[i.jsx(Jd,{size:20}),i.jsx("h2",{children:"会議体の定義"}),p.meetings?i.jsx(vn,{}):i.jsx(It,{})]}),p.meetings&&i.jsx("div",{className:"section-content",children:i.jsx("div",{className:"table-container",children:i.jsxs("table",{className:"settings-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{minWidth:"150px"},children:"会議体名"}),i.jsx("th",{style:{minWidth:"150px"},children:"時期・頻度"}),i.jsx("th",{style:{minWidth:"120px"},children:"参加役職"}),i.jsx("th",{style:{width:"100px"},children:"操作"})]})}),i.jsxs("tbody",{children:[l.map(S=>i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("strong",{children:S.name}),i.jsx("div",{className:"sub-text",children:S.content})]}),i.jsx("td",{children:i.jsx("span",{className:"timing-text",children:S.timing})}),i.jsx("td",{children:i.jsx("div",{className:"role-mini-badges",children:S.roleIds.length>0?S.roleIds.map(D=>{var W;return i.jsx("span",{className:"mini-badge",children:((W=e.find(He=>He.id===D))==null?void 0:W.name)||D},D)}):i.jsx("span",{className:"empty-hint",children:"全員"})})}),i.jsx("td",{children:i.jsxs("div",{className:"actions",children:[i.jsx("button",{className:"icon-btn",onClick:()=>x(S),children:i.jsx(xr,{size:14})}),i.jsx("button",{className:"icon-btn delete",onClick:()=>Y(S.id),children:i.jsx(Je,{size:14})})]})})]},S.id)),i.jsx("tr",{className:"adding-row complex",children:i.jsx("td",{colSpan:4,children:i.jsxs("div",{className:"inline-form",children:[i.jsx("input",{value:E.name,onChange:S=>m({...E,name:S.target.value}),placeholder:"会議体名..."}),i.jsx("input",{value:E.timing,onChange:S=>m({...E,timing:S.target.value}),placeholder:"頻度（毎月第1月曜）"}),i.jsxs("button",{className:"add-inline-btn",onClick:P,disabled:!E.name,children:[i.jsx(pt,{size:16})," 追加"]})]})})})]})]})})})]}),i.jsxs("div",{className:`accordion - section danger ${p.cleanup?"open":""} `,children:[i.jsxs("div",{className:"section-header",onClick:()=>O("cleanup"),children:[i.jsx(mu,{size:20}),i.jsx("h2",{children:"利用終了・データの消去"}),p.cleanup?i.jsx(vn,{}):i.jsx(It,{})]}),p.cleanup&&i.jsx("div",{className:"section-content",children:i.jsxs("div",{className:"danger-zone",children:[i.jsx("h3",{children:"高度なクリーンアップ"}),i.jsx("p",{children:"スマートフォンのホーム画面への移行（PWA化）や、端末の変更などで、 現在のブラウザにデータを残したくない場合に使用します。"}),i.jsxs("div",{className:"alert-box warning",children:[i.jsx(mu,{size:16}),i.jsx("span",{children:"この操作は取り消せません。Google Driveとの同期が完了していることを確認してください。"})]}),i.jsxs("button",{className:"wipe-btn",onClick:Te,children:[i.jsx(Je,{size:16}),"この端末のデータをすべて削除してログアウト"]})]})})]})]}),d&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-content mini",children:[i.jsx("h3",{children:"役職を編集"}),i.jsxs("form",{onSubmit:Q,children:[i.jsx("input",{autoFocus:!0,value:d.name,onChange:S=>f({...d,name:S.target.value}),placeholder:"役職名",required:!0}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",onClick:()=>f(null),children:"キャンセル"}),i.jsx("button",{type:"submit",className:"save-btn",children:"保存"})]})]})]})}),v&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-content",children:[i.jsx("h3",{children:"タスク定義の編集"}),i.jsxs("form",{onSubmit:We,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"タイトル"}),i.jsx("input",{value:v.title,onChange:S=>j({...v,title:S.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"説明"}),i.jsx("textarea",{value:v.description,onChange:S=>j({...v,description:S.target.value})})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"カテゴリ"}),i.jsxs("select",{value:v.category,onChange:S=>j({...v,category:S.target.value,trackResponseRate:S.target.value==="union_member"}),children:[i.jsx("option",{value:"union_member",children:"🔴 組合員関連"}),i.jsx("option",{value:"administrative",children:"🔵 事務タスク"}),i.jsx("option",{value:"committee",children:"🟢 委員タスク"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"優先度"}),i.jsxs("select",{value:v.priority,onChange:S=>j({...v,priority:S.target.value}),children:[i.jsx("option",{value:"high",children:"高"}),i.jsx("option",{value:"medium",children:"中"}),i.jsx("option",{value:"low",children:"低"})]})]})]}),v.category==="union_member"&&i.jsx("div",{className:"form-group checkbox-group",style:{marginBottom:"1.5rem"},children:i.jsxs("label",{className:"checkbox-label",style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontSize:"0.9rem"},children:[i.jsx("input",{type:"checkbox",checked:v.trackResponseRate||!1,onChange:S=>j({...v,trackResponseRate:S.target.checked})}),"回答率を記録してフォローする"]})}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"担当する役職 (複数選択可)"}),i.jsx("div",{className:"role-checkboxes",children:e.map(S=>{var D;return i.jsxs("label",{className:"role-cb-label",children:[i.jsx("input",{type:"checkbox",checked:(D=v.roleIds)==null?void 0:D.includes(S.id),onChange:()=>j({...v,roleIds:Se(S.id,v.roleIds||[])})}),S.name]},S.id)})})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:["サブタスク定義",i.jsxs("button",{type:"button",className:"add-sub-btn",onClick:qe,children:[i.jsx(pt,{size:14})," サブタスクを追加"]})]}),i.jsxs("div",{className:"subtask-defs-list",children:[(v.subtasks||[]).map((S,D)=>i.jsxs("div",{className:"subtask-def-item",children:[i.jsx("span",{className:"order-num",children:D+1}),i.jsx("input",{value:S.title,onChange:W=>_e(S.id,W.target.value),placeholder:"サブタスクのタイトル...",required:!0}),i.jsx("button",{type:"button",className:"icon-btn delete",onClick:()=>y(S.id),children:i.jsx(Je,{size:14})})]},S.id)),(v.subtasks||[]).length===0&&i.jsx("p",{className:"empty-hint",children:"サブタスクは定義されていません。"})]})]}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",onClick:()=>j(null),children:"キャンセル"}),i.jsx("button",{type:"submit",className:"save-btn",children:"保存"})]})]})]})}),T&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-content",children:[i.jsx("h3",{children:"会議体定義の編集"}),i.jsxs("form",{onSubmit:U,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"会議体名"}),i.jsx("input",{value:T.name,onChange:S=>x({...T,name:S.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"開催時期・頻度"}),i.jsx("input",{value:T.timing,onChange:S=>x({...T,timing:S.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"内容"}),i.jsx("textarea",{value:T.content,onChange:S=>x({...T,content:S.target.value})})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"参加する役職 (複数選択可)"}),i.jsx("div",{className:"role-checkboxes",children:e.map(S=>{var D;return i.jsxs("label",{className:"role-cb-label",children:[i.jsx("input",{type:"checkbox",checked:(D=T.roleIds)==null?void 0:D.includes(S.id),onChange:()=>x({...T,roleIds:Se(S.id,T.roleIds||[])})}),S.name]},S.id)})})]}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",onClick:()=>x(null),children:"キャンセル"}),i.jsx("button",{type:"submit",className:"save-btn",children:"保存"})]})]})]})}),i.jsx("style",{children:`
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
            `})]})},Jg=()=>{const[e,t]=w.useState([]),[n,r]=w.useState([]),[l,o]=w.useState([]),[s,u]=w.useState(!1),[a,c]=w.useState(""),[p,h]=w.useState(null),[g,C]=w.useState(null);w.useEffect(()=>{t(R.getMemos()),r(R.getEvents()),o(R.getTasks())},[]);const b=j=>j?j.replace(/<[^>]*>?/gm,"").replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"):"",N=j=>{t(j),R.saveMemos(j)},E=()=>{C(null),u(!1)},m=j=>{confirm("このメモを削除しますか？")&&N(e.filter(T=>T.id!==j))},d=(j,T,x)=>{const z=e.map(O=>O.id===j?{...O,linkedEventId:T,linkedTaskId:x}:O);N(z),h(null)},f=e.filter(j=>(j.title||"").toLowerCase().includes(a.toLowerCase())||j.content.toLowerCase().includes(a.toLowerCase())).sort((j,T)=>new Date(T.createdAt).getTime()-new Date(j.createdAt).getTime()),v=j=>{var T,x;return j.linkedEventId?((T=n.find(z=>z.id===j.linkedEventId))==null?void 0:T.title)||"不明なイベント":j.linkedTaskId?((x=l.find(z=>z.id===j.linkedTaskId))==null?void 0:x.title)||"不明なタスク":null};return i.jsxs("div",{className:"memo-list-page",children:[i.jsxs("header",{className:"page-header",children:[i.jsx("h1",{children:"メモ一覧"}),i.jsxs("div",{className:"header-actions",children:[i.jsxs("div",{className:"search-bar",children:[i.jsx(vg,{size:18}),i.jsx("input",{type:"text",placeholder:"タイトルや内容で検索...",value:a,onChange:j=>c(j.target.value)})]}),i.jsxs("button",{className:"primary-btn",onClick:()=>u(!0),children:[i.jsx(pt,{size:18})," 新規メモ"]})]})]}),i.jsx("div",{className:"memo-grid",children:f.map(j=>i.jsxs("div",{className:"memo-card",onClick:()=>j.type==="text"&&C(j.id),children:[i.jsxs("div",{className:"memo-card-header",children:[i.jsxs("span",{className:"memo-type",children:[j.type==="text"&&i.jsx(Jo,{size:14}),j.type==="voice"&&i.jsx(bl,{size:14}),j.type==="text"?"テキスト":"音声"]}),i.jsx("span",{className:"memo-date",children:new Date(j.createdAt).toLocaleDateString()}),i.jsx("button",{className:"delete-btn",onClick:T=>{T.stopPropagation(),m(j.id)},children:i.jsx(Je,{size:14})})]}),i.jsxs("div",{className:"memo-card-body",children:[i.jsx("h3",{className:"memo-title",children:j.title||"(無題)"}),j.type==="text"&&i.jsx("p",{className:"memo-preview",children:b(j.content)}),j.type==="voice"&&i.jsx("div",{className:"voice-badge",children:"音声メモ"})]}),i.jsx("div",{className:"memo-card-footer",children:i.jsx("div",{className:"link-status",children:v(j)&&i.jsxs("span",{className:"linked-badge",children:[i.jsx(ug,{size:12})," ",v(j)]})})})]},j.id))}),(s||g)&&i.jsx(Hs,{memos:e,initialMemoId:g,onSave:j=>N(j),onClose:E}),p&&i.jsx("div",{className:"modal-overlay",children:i.jsxs("div",{className:"modal-content link-modal",children:[i.jsx("h3",{children:"紐づけ先を選択"}),i.jsxs("div",{className:"link-targets",children:[i.jsx("h4",{children:"スケジュール"}),n.slice(0,10).map(j=>i.jsxs("button",{className:"target-btn",onClick:()=>d(p,j.id),children:[i.jsx(Hn,{size:14})," ",j.date," ",j.title]},j.id)),i.jsx("h4",{children:"タスク"}),l.slice(0,10).map(j=>i.jsxs("button",{className:"target-btn",onClick:()=>d(p,void 0,j.id),children:[i.jsx(xi,{size:14})," ",j.title]},j.id))]}),i.jsx("button",{className:"close-link-modal",onClick:()=>h(null),children:"キャンセル"})]})}),i.jsx("style",{children:`
                .memo-list-page { display: flex; flex-direction: column; gap: 2rem; max-width: 1000px; margin: 0 auto; }
                .search-bar { display: flex; align-items: center; gap: 0.5rem; background: #1e293b; padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #334155; }
                .search-bar input { background: none; border: none; color: white; outline: none; width: 250px; }
                
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
            `})]})};function Yg(){return w.useEffect(()=>{se.init()},[]),i.jsx(Oh,{children:i.jsx($g,{children:i.jsxs(_h,{children:[i.jsx(gn,{path:"/",element:i.jsx(Ug,{})}),i.jsx(gn,{path:"/tasks",element:i.jsx(Hg,{})}),i.jsx(gn,{path:"/calendar",element:i.jsx(Qg,{})}),i.jsx(gn,{path:"/memos",element:i.jsx(Jg,{})}),i.jsx(gn,{path:"/settings",element:i.jsx(Kg,{})})]})})})}Ji.createRoot(document.getElementById("root")).render(i.jsx(Tu.StrictMode,{children:i.jsx(Yg,{})}));
