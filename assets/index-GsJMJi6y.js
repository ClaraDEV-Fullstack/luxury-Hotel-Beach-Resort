const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-CnzWFxGj.js","assets/react-CcRDz-_R.js","assets/index-BhZx81v5.js","assets/HomePage-C97Lt_qH.css","assets/RoomsPage-BvzEvU_0.js","assets/RoomsPage-DP41PL0G.css","assets/RoomDetailPage-kbe6_SZ7.js","assets/RoomDetailPage-CKZXUr3-.css","assets/BookingPage-ocZznAME.js","assets/BookingPage-hYeP5lGT.css","assets/BookingConfirmationPage-BdrvOTpV.js","assets/BookingConfirmationPage-C8kaEdbK.css","assets/OffersPage-BiZLC1Bq.js","assets/OffersPage-DAbPFL-W.css","assets/ContactPage-CX71vFJB.js","assets/LoginPage-COyCYXyI.js","assets/LoginPage-BrNWCl00.css","assets/SignupPage-JJG2X4jm.js","assets/SignupPage-BqD7j1L3.css","assets/ProfilePage-CPaBHT8a.js","assets/ProfilePage-rzAseFmD.css","assets/NotFoundPage-BEGVFwsU.js","assets/Terms-SGFSUjO4.js","assets/Privacy-Bw737eS8.js","assets/Security-CfCBfJKh.js"])))=>i.map(i=>d[i]);
import{r as S,a as vc,u as _c,b as Tc,L as Pe,N as bc,R as $,c as wc,d as B,B as Ec}from"./react-CcRDz-_R.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();var Kr={exports:{}},rn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc=S,Ic=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),Ac=Object.prototype.hasOwnProperty,Cc=Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xc={key:!0,ref:!0,__self:!0,__source:!0};function Gr(t,e,n){var i,s={},r=null,o=null;n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ac.call(e,i)&&!xc.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:Ic,type:t,key:r,ref:o,props:s,_owner:Cc.current}}rn.Fragment=Pc;rn.jsx=Gr;rn.jsxs=Gr;Kr.exports=rn;var p=Kr.exports,Nn={},es=vc;Nn.createRoot=es.createRoot,Nn.hydrateRoot=es.hydrateRoot;const Rc="modulepreload",kc=function(t){return"/"+t},ts={},H=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=kc(c),c in ts)return;ts[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":Rc,l||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function Dc(){const[t,e]=S.useState(!1),[n,i]=S.useState(!1),s=_c(),r=Tc(),o=()=>{i(!n)},a=()=>{e(!0),s("/profile")},c=()=>{e(!1),s("/login")};return p.jsxs("nav",{className:"navbar",children:[p.jsx("div",{className:"logo",children:p.jsx(Pe,{to:"/",children:p.jsx("img",{src:"https://img.freepik.com/premium-vector/beach-house-logo-design-template_644408-300.jpg",alt:"Azure Retreats Logo",className:"logo-image"})})}),p.jsxs("div",{className:"hamburger",onClick:o,"aria-label":"Toggle menu","aria-expanded":n,children:[p.jsx("div",{className:`hamburger-line ${n?"open":""}`}),p.jsx("div",{className:`hamburger-line ${n?"open":""}`}),p.jsx("div",{className:`hamburger-line ${n?"open":""}`})]}),p.jsxs("div",{className:`nav-links ${n?"open":""}`,children:[p.jsx(Pe,{to:"/",className:`nav-link ${r.pathname==="/"?"active":""}`,onClick:()=>i(!1),children:"Home"}),p.jsx(Pe,{to:"/rooms",className:`nav-link ${r.pathname==="/rooms"?"active":""}`,onClick:()=>i(!1),children:"Rooms"}),p.jsx(Pe,{to:"/offers",className:`nav-link ${r.pathname==="/offers"?"active":""}`,onClick:()=>i(!1),children:"Offers"}),p.jsx(Pe,{to:"/contact",className:`nav-link ${r.pathname==="/contact"?"active":""}`,onClick:()=>i(!1),children:"Contact"}),t?p.jsxs(p.Fragment,{children:[p.jsx(Pe,{to:"/profile",className:`nav-link ${r.pathname==="/profile"?"active":""}`,onClick:()=>i(!1),children:"Profile"}),p.jsx("button",{className:"nav-link logout-button",onClick:c,"aria-label":"Logout",children:"Logout"})]}):p.jsxs(p.Fragment,{children:[p.jsx(Pe,{to:"/signup",className:`nav-link ${r.pathname==="/signup"?"active":""}`,onClick:()=>i(!1),children:"Sign Up"}),p.jsx("button",{className:"nav-link login-button",onClick:a,"aria-label":"Login",children:"Login"})]})]})]})}const Oc=()=>{};var ns={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Mc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),i.push(n[u],n[h],n[d],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new Lc;const d=r<<2|a>>4;if(i.push(d),l!==64){const f=a<<4&240|l>>2;if(i.push(f),h!==64){const m=l<<6&192|h;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nc=function(t){const e=qr(t);return Yr.encodeByteArray(e,!0)},Xr=function(t){return Nc(t).replace(/\./g,"")},Jr=function(t){try{return Yr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=()=>Vc().__FIREBASE_DEFAULTS__,Uc=()=>{if(typeof process>"u"||typeof ns>"u")return;const t=ns.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jr(t[1]);return e&&JSON.parse(e)},li=()=>{try{return Oc()||jc()||Uc()||Fc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bc=t=>{var e,n;return(n=(e=li())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zr=()=>{var t;return(t=li())===null||t===void 0?void 0:t.config},Qr=t=>{var e;return(e=li())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function Wc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gc(){const t=U();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qc(){try{return typeof indexedDB=="object"}catch{return!1}}function Yc(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="FirebaseError";class Ee extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Xc,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Jc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ee(s,a,i)}}function Jc(t,e){return t.replace(Zc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Zc=/\{\$([^}]+)}/g;function Qc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ye(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(is(r)&&is(o)){if(!Ye(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function is(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function rt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ot(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function el(t,e){const n=new tl(t,e);return n.subscribe.bind(n)}class tl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");nl(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=gn),s.error===void 0&&(s.error=gn),s.complete===void 0&&(s.complete=gn);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nl(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){return t&&t._delegate?t._delegate:t}class Xe{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new $c;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rl(e))try{this.getOrInitializeService({instanceIdentifier:Ce})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ce){return this.instances.has(e)}getOptions(e=Ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:sl(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ce){return this.component?this.component.multipleInstances?e:Ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sl(t){return t===Ce?void 0:t}function rl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new il(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(C||(C={}));const al={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},cl=C.INFO,ll={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},ul=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ll[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eo{constructor(e){this.name=e,this._logLevel=cl,this._logHandler=ul,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?al[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const hl=(t,e)=>e.some(n=>t instanceof n);let ss,rs;function dl(){return ss||(ss=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fl(){return rs||(rs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const to=new WeakMap,Vn=new WeakMap,no=new WeakMap,yn=new WeakMap,ui=new WeakMap;function pl(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(_e(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&to.set(n,t)}).catch(()=>{}),ui.set(e,t),e}function ml(t){if(Vn.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Vn.set(t,e)}let jn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||no.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _e(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gl(t){jn=t(jn)}function yl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(vn(this),e,...n);return no.set(i,e.sort?e.sort():[e]),_e(i)}:fl().includes(t)?function(...e){return t.apply(vn(this),e),_e(to.get(this))}:function(...e){return _e(t.apply(vn(this),e))}}function vl(t){return typeof t=="function"?yl(t):(t instanceof IDBTransaction&&ml(t),hl(t,dl())?new Proxy(t,jn):t)}function _e(t){if(t instanceof IDBRequest)return pl(t);if(yn.has(t))return yn.get(t);const e=vl(t);return e!==t&&(yn.set(t,e),ui.set(e,t)),e}const vn=t=>ui.get(t);function _l(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=_e(o);return i&&o.addEventListener("upgradeneeded",c=>{i(_e(o.result),c.oldVersion,c.newVersion,_e(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tl=["get","getKey","getAll","getAllKeys","count"],bl=["put","add","delete","clear"],_n=new Map;function os(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_n.get(e))return _n.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=bl.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Tl.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return _n.set(e,r),r}gl(t=>({...t,get:(e,n,i)=>os(e,n)||t.get(e,n,i),has:(e,n)=>!!os(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(El(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function El(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Un="@firebase/app",as="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new eo("@firebase/app"),Sl="@firebase/app-compat",Il="@firebase/analytics-compat",Pl="@firebase/analytics",Al="@firebase/app-check-compat",Cl="@firebase/app-check",xl="@firebase/auth",Rl="@firebase/auth-compat",kl="@firebase/database",Dl="@firebase/data-connect",Ol="@firebase/database-compat",Ml="@firebase/functions",Ll="@firebase/functions-compat",Nl="@firebase/installations",Vl="@firebase/installations-compat",jl="@firebase/messaging",Ul="@firebase/messaging-compat",Fl="@firebase/performance",Bl="@firebase/performance-compat",$l="@firebase/remote-config",Hl="@firebase/remote-config-compat",Wl="@firebase/storage",zl="@firebase/storage-compat",Kl="@firebase/firestore",Gl="@firebase/vertexai",ql="@firebase/firestore-compat",Yl="firebase",Xl="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]",Jl={[Un]:"fire-core",[Sl]:"fire-core-compat",[Pl]:"fire-analytics",[Il]:"fire-analytics-compat",[Cl]:"fire-app-check",[Al]:"fire-app-check-compat",[xl]:"fire-auth",[Rl]:"fire-auth-compat",[kl]:"fire-rtdb",[Dl]:"fire-data-connect",[Ol]:"fire-rtdb-compat",[Ml]:"fire-fn",[Ll]:"fire-fn-compat",[Nl]:"fire-iid",[Vl]:"fire-iid-compat",[jl]:"fire-fcm",[Ul]:"fire-fcm-compat",[Fl]:"fire-perf",[Bl]:"fire-perf-compat",[$l]:"fire-rc",[Hl]:"fire-rc-compat",[Wl]:"fire-gcs",[zl]:"fire-gcs-compat",[Kl]:"fire-fst",[ql]:"fire-fst-compat",[Gl]:"fire-vertex","fire-js":"fire-js",[Yl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Map,Zl=new Map,Bn=new Map;function cs(t,e){try{t.container.addComponent(e)}catch(n){ce.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function mt(t){const e=t.name;if(Bn.has(e))return ce.debug(`There were multiple attempts to register component ${e}.`),!1;Bn.set(e,t);for(const n of zt.values())cs(n,t);for(const n of Zl.values())cs(n,t);return!0}function io(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Y(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new Et("app","Firebase",Ql);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=Xl;function so(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Fn,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Te.create("bad-app-name",{appName:String(s)});if(n||(n=Zr()),!n)throw Te.create("no-options");const r=zt.get(s);if(r){if(Ye(n,r.options)&&Ye(i,r.config))return r;throw Te.create("duplicate-app",{appName:s})}const o=new ol(s);for(const c of Bn.values())o.addComponent(c);const a=new eu(n,i,o);return zt.set(s,a),a}function tu(t=Fn){const e=zt.get(t);if(!e&&t===Fn&&Zr())return so();if(!e)throw Te.create("no-app",{appName:t});return e}function ze(t,e,n){var i;let s=(i=Jl[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ce.warn(a.join(" "));return}mt(new Xe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="firebase-heartbeat-database",iu=1,gt="firebase-heartbeat-store";let Tn=null;function ro(){return Tn||(Tn=_l(nu,iu,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gt)}catch(n){console.warn(n)}}}}).catch(t=>{throw Te.create("idb-open",{originalErrorMessage:t.message})})),Tn}async function su(t){try{const n=(await ro()).transaction(gt),i=await n.objectStore(gt).get(oo(t));return await n.done,i}catch(e){if(e instanceof Ee)ce.warn(e.message);else{const n=Te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ce.warn(n.message)}}}async function ls(t,e){try{const i=(await ro()).transaction(gt,"readwrite");await i.objectStore(gt).put(e,oo(t)),await i.done}catch(n){if(n instanceof Ee)ce.warn(n.message);else{const i=Te.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ce.warn(i.message)}}}function oo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=1024,ou=30;class au{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lu(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=us();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>ou){const o=uu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ce.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=us(),{heartbeatsToSend:i,unsentEntries:s}=cu(this._heartbeatsCache.heartbeats),r=Xr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ce.warn(n),""}}}function us(){return new Date().toISOString().substring(0,10)}function cu(t,e=ru){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),hs(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),hs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class lu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qc()?Yc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await su(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ls(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ls(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function hs(t){return Xr(JSON.stringify({version:2,heartbeats:t})).length}function uu(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t){mt(new Xe("platform-logger",e=>new wl(e),"PRIVATE")),mt(new Xe("heartbeat",e=>new au(e),"PRIVATE")),ze(Un,as,t),ze(Un,as,"esm2017"),ze("fire-js","")}hu("");var du="firebase",fu="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(du,fu,"app");function hi(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function ao(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pu=ao,co=new Et("auth","Firebase",ao());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new eo("@firebase/auth");function mu(t,...e){Kt.logLevel<=C.WARN&&Kt.warn(`Auth (${It}): ${t}`,...e)}function jt(t,...e){Kt.logLevel<=C.ERROR&&Kt.error(`Auth (${It}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,...e){throw di(t,...e)}function J(t,...e){return di(t,...e)}function lo(t,e,n){const i=Object.assign(Object.assign({},pu()),{[e]:n});return new Et("auth","Firebase",i).create(e,{appName:t.name})}function re(t){return lo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function di(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return co.create(t,...e)}function w(t,e,...n){if(!t)throw di(e,...n)}function ne(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jt(e),new Error(e)}function le(t,e){t||ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gu(){return ds()==="http:"||ds()==="https:"}function ds(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gu()||zc()||"connection"in navigator)?navigator.onLine:!0}function vu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.shortDelay=e,this.longDelay=n,le(n>e,"Short delay should be less than long delay!"),this.isMobile=Hc()||Kc()}get(){return yu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t,e){le(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Pt(3e4,6e4);function Se(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function de(t,e,n,i,s={}){return ho(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=St(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},r);return Wc()||(l.referrerPolicy="no-referrer"),uo.fetch()(fo(t,t.config.apiHost,n,a),l)})}async function ho(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},_u),e);try{const s=new wu(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Mt(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mt(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw lo(t,u,l);X(t,u)}}catch(s){if(s instanceof Ee)throw s;X(t,"network-request-failed",{message:String(s)})}}async function At(t,e,n,i,s={}){const r=await de(t,e,n,i,s);return"mfaPendingCredential"in r&&X(t,"multi-factor-auth-required",{_serverResponse:r}),r}function fo(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?fi(t.config,s):`${t.config.apiScheme}://${s}`}function bu(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wu{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(J(this.auth,"network-request-failed")),Tu.get())})}}function Mt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=J(t,e,i);return s.customData._tokenResponse=n,s}function fs(t){return t!==void 0&&t.enterprise!==void 0}class Eu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bu(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Su(t,e){return de(t,"GET","/v2/recaptchaConfig",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(t,e){return de(t,"POST","/v1/accounts:delete",e)}async function po(t,e){return de(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Pu(t,e=!1){const n=he(t),i=await n.getIdToken(e),s=pi(i);w(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ut(bn(s.auth_time)),issuedAtTime:ut(bn(s.iat)),expirationTime:ut(bn(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bn(t){return Number(t)*1e3}function pi(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return jt("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jr(n);return s?JSON.parse(s):(jt("Failed to decode base64 JWT payload"),null)}catch(s){return jt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ps(t){const e=pi(t);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ee&&Au(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Au({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ut(this.lastLoginAt),this.creationTime=ut(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Je(t,po(n,{idToken:i}));w(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?mo(r.providerUserInfo):[],a=Ru(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Hn(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xu(t){const e=he(t);await Gt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ru(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function mo(t){return t.map(e=>{var{providerId:n}=e,i=hi(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ku(t,e){const n=await ho(t,{},async()=>{const i=St({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=fo(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uo.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Du(t,e){return de(t,"POST","/v2/accounts:revokeToken",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ps(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){w(e.length!==0,"internal-error");const n=ps(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await ku(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new Ke;return i&&(w(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(w(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ke,this.toJSON())}_performRefresh(){return ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,e){w(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ie{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=hi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Hn(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Je(this,this.stsTokenManager.getToken(this.auth,e));return w(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Pu(this,e)}reload(){return xu(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Gt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Y(this.auth.app))return Promise.reject(re(this.auth));const e=await this.getIdToken();return await Je(this,Iu(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:P,isAnonymous:E,providerData:A,stsTokenManager:O}=n;w(T&&O,e,"internal-error");const I=Ke.fromJSON(this.name,O);w(typeof T=="string",e,"internal-error"),fe(h,e.name),fe(d,e.name),w(typeof P=="boolean",e,"internal-error"),w(typeof E=="boolean",e,"internal-error"),fe(f,e.name),fe(m,e.name),fe(g,e.name),fe(v,e.name),fe(y,e.name),fe(_,e.name);const M=new ie({uid:T,auth:e,email:d,emailVerified:P,displayName:h,isAnonymous:E,photoURL:m,phoneNumber:f,tenantId:g,stsTokenManager:I,createdAt:y,lastLoginAt:_});return A&&Array.isArray(A)&&(M.providerData=A.map(F=>Object.assign({},F))),v&&(M._redirectEventId=v),M}static async _fromIdTokenResponse(e,n,i=!1){const s=new Ke;s.updateFromServerResponse(n);const r=new ie({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Gt(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];w(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?mo(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Ke;a.updateFromIdToken(i);const c=new ie({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Hn(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=new Map;function se(t){le(t instanceof Function,"Expected a class definition");let e=ms.get(t);return e?(le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ms.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}go.type="NONE";const gs=go;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e,n){return`firebase:${t}:${e}:${n}`}class Ge{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Ut(this.userKey,s.apiKey,r),this.fullPersistenceKey=Ut("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ge(se(gs),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||se(gs);const o=Ut(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ie._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Ge(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new Ge(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(To(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yo(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wo(e))return"Blackberry";if(Eo(e))return"Webos";if(vo(e))return"Safari";if((e.includes("chrome/")||_o(e))&&!e.includes("edge/"))return"Chrome";if(bo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function yo(t=U()){return/firefox\//i.test(t)}function vo(t=U()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _o(t=U()){return/crios\//i.test(t)}function To(t=U()){return/iemobile/i.test(t)}function bo(t=U()){return/android/i.test(t)}function wo(t=U()){return/blackberry/i.test(t)}function Eo(t=U()){return/webos/i.test(t)}function mi(t=U()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ou(t=U()){var e;return mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mu(){return Gc()&&document.documentMode===10}function So(t=U()){return mi(t)||bo(t)||Eo(t)||wo(t)||/windows phone/i.test(t)||To(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e=[]){let n;switch(t){case"Browser":n=ys(U());break;case"Worker":n=`${ys(U())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${It}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nu(t,e={}){return de(t,"GET","/v2/passwordPolicy",Se(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=6;class ju{constructor(e){var n,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Vu,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vs(this),this.idTokenSubscription=new vs(this),this.beforeStateQueue=new Lu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=co,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=se(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Ge.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await po(this,{idToken:e}),i=await ie._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Y(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Y(this.app))return Promise.reject(re(this));const n=e?he(e):null;return n&&w(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Y(this.app)?Promise.reject(re(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Y(this.app)?Promise.reject(re(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(se(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nu(this),n=new ju(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Du(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&se(e)||this._popupRedirectResolver;w(n,this,"argument-error"),this.redirectPersistenceManager=await Ge.create(this,[se(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Io(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Y(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mu(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Le(t){return he(t)}class vs{constructor(e){this.auth=e,this.observer=null,this.addObserver=el(n=>this.observer=n)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fu(t){on=t}function Po(t){return on.loadJS(t)}function Bu(){return on.recaptchaEnterpriseScript}function $u(){return on.gapiScript}function Hu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Wu{constructor(){this.enterprise=new zu}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zu{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ku="recaptcha-enterprise",Ao="NO_RECAPTCHA";class Gu{constructor(e){this.type=Ku,this.auth=Le(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Su(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Eu(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;fs(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(Ao)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wu().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&fs(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Bu();c.length!==0&&(c+=a),Po(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function _s(t,e,n,i=!1,s=!1){const r=new Gu(t);let o;if(s)o=Ao;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wn(t,e,n,i,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await _s(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await _s(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t,e){const n=io(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Ye(r,e??{}))return s;X(s,"already-initialized")}return n.initialize({options:e})}function Yu(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(se);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Xu(t,e,n){const i=Le(t);w(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Co(e),{host:o,port:a}=Ju(e),c=a===null?"":`:${a}`,l={url:`${r}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){w(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),w(Ye(l,i.config.emulator)&&Ye(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,Zu()}function Co(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ju(t){const e=Co(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ts(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Ts(o)}}}function Ts(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zu(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ne("not implemented")}_getIdTokenResponse(e){return ne("not implemented")}_linkToIdToken(e,n){return ne("not implemented")}_getReauthenticationResolver(e){return ne("not implemented")}}async function Qu(t,e){return de(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eh(t,e){return At(t,"POST","/v1/accounts:signInWithPassword",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t,e){return At(t,"POST","/v1/accounts:signInWithEmailLink",Se(t,e))}async function nh(t,e){return At(t,"POST","/v1/accounts:signInWithEmailLink",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends gi{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new yt(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new yt(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wn(e,n,"signInWithPassword",eh);case"emailLink":return th(e,{email:this._email,oobCode:this._password});default:X(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wn(e,i,"signUpPassword",Qu);case"emailLink":return nh(e,{idToken:n,email:this._email,oobCode:this._password});default:X(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(t,e){return At(t,"POST","/v1/accounts:signInWithIdp",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="http://localhost";class Oe extends gi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Oe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):X("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=hi(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Oe(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qe(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,qe(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qe(e,n)}buildRequest(){const e={requestUri:ih,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=St(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rh(t){const e=rt(ot(t)).link,n=e?rt(ot(e)).deep_link_id:null,i=rt(ot(t)).deep_link_id;return(i?rt(ot(i)).link:null)||i||n||e||t}class yi{constructor(e){var n,i,s,r,o,a;const c=rt(ot(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=sh((s=c.mode)!==null&&s!==void 0?s:null);w(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=rh(e);try{return new yi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.providerId=tt.PROVIDER_ID}static credential(e,n){return yt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=yi.parseLink(n);return w(i,"argument-error"),yt._fromEmailAndCode(e,i.code,i.tenantId)}}tt.PROVIDER_ID="password";tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends Ct{constructor(){super("facebook.com")}static credential(e){return Oe._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return me.credential(e.oauthAccessToken)}catch{return null}}}me.FACEBOOK_SIGN_IN_METHOD="facebook.com";me.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends Ct{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Oe._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ge.credentialFromTaggedObject(e)}static credentialFromError(e){return ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return ge.credential(n,i)}catch{return null}}}ge.GOOGLE_SIGN_IN_METHOD="google.com";ge.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Ct{constructor(){super("github.com")}static credential(e){return Oe._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com";ye.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends Ct{constructor(){super("twitter.com")}static credential(e,n){return Oe._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ve.credential(n,i)}catch{return null}}}ve.TWITTER_SIGN_IN_METHOD="twitter.com";ve.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(t,e){return At(t,"POST","/v1/accounts:signUp",Se(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await ie._fromIdTokenResponse(e,i,s),o=bs(i);return new Me({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=bs(i);return new Me({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function bs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Ee{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,qt.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new qt(e,n,i,s)}}function Ro(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qt._fromErrorAndOperation(t,r,e,i):r})}async function ah(t,e,n=!1){const i=await Je(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Me._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(t,e,n=!1){const{auth:i}=t;if(Y(i.app))return Promise.reject(re(i));const s="reauthenticate";try{const r=await Je(t,Ro(i,s,e,t),n);w(r.idToken,i,"internal-error");const o=pi(r.idToken);w(o,i,"internal-error");const{sub:a}=o;return w(t.uid===a,i,"user-mismatch"),Me._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&X(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t,e,n=!1){if(Y(t.app))return Promise.reject(re(t));const i="signIn",s=await Ro(t,i,e),r=await Me._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function lh(t,e){return ko(Le(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){const e=Le(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function by(t,e,n){if(Y(t.app))return Promise.reject(re(t));const i=Le(t),o=await Wn(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oh).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Do(t),c}),a=await Me._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function wy(t,e,n){return Y(t.app)?Promise.reject(re(t)):lh(he(t),tt.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Do(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(t,e){return de(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=he(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Je(i,uh(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function hh(t,e,n,i){return he(t).onIdTokenChanged(e,n,i)}function dh(t,e,n){return he(t).beforeAuthStateChanged(e,n)}function Sy(t,e,n,i){return he(t).onAuthStateChanged(e,n,i)}const Yt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yt,"1"),this.storage.removeItem(Yt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=1e3,ph=10;class Mo extends Oo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=So(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Mu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ph):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},fh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mo.type="LOCAL";const mh=Mo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Oo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lo.type="SESSION";const No=Lo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new an(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await gh(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}an.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=vi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return window}function vh(t){Z().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(){return typeof Z().WorkerGlobalScope<"u"&&typeof Z().importScripts=="function"}async function _h(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Th(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bh(){return Vo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="firebaseLocalStorageDb",wh=1,Xt="firebaseLocalStorage",Uo="fbase_key";class xt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cn(t,e){return t.transaction([Xt],e?"readwrite":"readonly").objectStore(Xt)}function Eh(){const t=indexedDB.deleteDatabase(jo);return new xt(t).toPromise()}function zn(){const t=indexedDB.open(jo,wh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Xt,{keyPath:Uo})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Xt)?e(i):(i.close(),await Eh(),e(await zn()))})})}async function ws(t,e,n){const i=cn(t,!0).put({[Uo]:e,value:n});return new xt(i).toPromise()}async function Sh(t,e){const n=cn(t,!1).get(e),i=await new xt(n).toPromise();return i===void 0?null:i.value}function Es(t,e){const n=cn(t,!0).delete(e);return new xt(n).toPromise()}const Ih=800,Ph=3;class Fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Ph)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=an._getInstance(bh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _h(),!this.activeServiceWorker)return;this.sender=new yh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Th()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zn();return await ws(e,Yt,"1"),await Es(e,Yt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>ws(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Sh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Es(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=cn(s,!1).getAll();return new xt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fo.type="LOCAL";const Ah=Fo;new Pt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t,e){return e?se(e):(w(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends gi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qe(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xh(t){return ko(t.auth,new _i(t),t.bypassAuthState)}function Rh(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),ch(n,new _i(t),t.bypassAuthState)}async function kh(t){const{auth:e,user:n}=t;return w(n,e,"internal-error"),ah(n,new _i(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xh;case"linkViaPopup":case"linkViaRedirect":return kh;case"reauthViaPopup":case"reauthViaRedirect":return Rh;default:X(this.auth,"internal-error")}}resolve(e){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new Pt(2e3,1e4);class Ue extends Bo{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ue.currentPopupAction&&Ue.currentPopupAction.cancel(),Ue.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){le(this.filter.length===1,"Popup operations only handle one event");const e=vi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(J(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(J(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ue.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(J(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dh.get())};e()}}Ue.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="pendingRedirect",Ft=new Map;class Mh extends Bo{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ft.get(this.auth._key());if(!e){try{const i=await Lh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ft.set(this.auth._key(),e)}return this.bypassAuthState||Ft.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lh(t,e){const n=jh(e),i=Vh(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function Nh(t,e){Ft.set(t._key(),e)}function Vh(t){return se(t._redirectPersistence)}function jh(t){return Ut(Oh,t.config.apiKey,t.name)}async function Uh(t,e,n=!1){if(Y(t.app))return Promise.reject(re(t));const i=Le(t),s=Ch(i,e),o=await new Mh(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh=10*60*1e3;class Bh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$h(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!$o(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(J(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ss(e))}saveEventToCache(e){this.cachedEventUids.add(Ss(e)),this.lastProcessedEventTime=Date.now()}}function Ss(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $o({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $h(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $o(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e={}){return de(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zh=/^https?/;async function Kh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hh(t);for(const n of e)try{if(Gh(n))return}catch{}X(t,"unauthorized-domain")}function Gh(t){const e=$n(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!zh.test(n))return!1;if(Wh.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Pt(3e4,6e4);function Is(){const t=Z().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Yh(t){return new Promise((e,n)=>{var i,s,r;function o(){Is(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Is(),n(J(t,"network-request-failed"))},timeout:qh.get()})}if(!((s=(i=Z().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Z().gapi)===null||r===void 0)&&r.load)o();else{const a=Hu("iframefcb");return Z()[a]=()=>{gapi.load?o():n(J(t,"network-request-failed"))},Po(`${$u()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Bt=null,e})}let Bt=null;function Xh(t){return Bt=Bt||Yh(t),Bt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Pt(5e3,15e3),Zh="__/auth/iframe",Qh="emulator/auth/iframe",ed={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},td=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nd(t){const e=t.config;w(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?fi(e,Qh):`https://${t.config.authDomain}/${Zh}`,i={apiKey:e.apiKey,appName:t.name,v:It},s=td.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${St(i).slice(1)}`}async function id(t){const e=await Xh(t),n=Z().gapi;return w(n,t,"internal-error"),e.open({where:document.body,url:nd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ed,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=J(t,"network-request-failed"),a=Z().setTimeout(()=>{r(o)},Jh.get());function c(){Z().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rd=500,od=600,ad="_blank",cd="http://localhost";class Ps{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ld(t,e,n,i=rd,s=od){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},sd),{width:i.toString(),height:s.toString(),top:r,left:o}),l=U().toLowerCase();n&&(a=_o(l)?ad:n),yo(l)&&(e=e||cd,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(Ou(l)&&a!=="_self")return ud(e||"",a),new Ps(null);const h=window.open(e||"",a,u);w(h,t,"popup-blocked");try{h.focus()}catch{}return new Ps(h)}function ud(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="__/auth/handler",dd="emulator/auth/handler",fd=encodeURIComponent("fac");async function As(t,e,n,i,s,r){w(t.config.authDomain,t,"auth-domain-config-required"),w(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:It,eventId:s};if(e instanceof xo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ct){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${fd}=${encodeURIComponent(c)}`:"";return`${pd(t)}?${St(a).slice(1)}${l}`}function pd({config:t}){return t.emulator?fi(t,dd):`https://${t.authDomain}/${hd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="webStorageSupport";class md{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=No,this._completeRedirectFn=Uh,this._overrideRedirectResult=Nh}async _openPopup(e,n,i,s){var r;le((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await As(e,n,i,$n(),s);return ld(e,o,vi())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await As(e,n,i,$n(),s);return vh(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(le(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await id(e),i=new Bh(e);return n.register("authEvent",s=>(w(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wn,{type:wn},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[wn];o!==void 0&&n(!!o),X(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return So()||vo()||mi()}}const gd=md;var Cs="@firebase/auth",xs="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _d(t){mt(new Xe("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Io(t)},l=new Uu(i,s,r,c);return Yu(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),mt(new Xe("auth-internal",e=>{const n=Le(e.getProvider("auth").getImmediate());return(i=>new yd(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(Cs,xs,vd(t)),ze(Cs,xs,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=5*60,bd=Qr("authIdTokenMaxAge")||Td;let Rs=null;const wd=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>bd)return;const s=n==null?void 0:n.token;Rs!==s&&(Rs=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ed(t=tu()){const e=io(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qu(t,{popupRedirectResolver:gd,persistence:[Ah,mh,No]}),i=Qr("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=wd(r.toString());dh(n,o,()=>o(n.currentUser)),hh(n,a=>o(a))}}const s=Bc("auth");return s&&Xu(n,`http://${s}`),n}function Sd(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Fu({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=J("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Sd().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_d("Browser");const Id={apiKey:"AIzaSyCaboidgtc-_fTItZc56n6o9INDlEJlEKw",authDomain:"hotelbookingapp-5071a.firebaseapp.com",projectId:"hotelbookingapp-5071a",storageBucket:"hotelbookingapp-5071a.appspot.com",messagingSenderId:"694893115320"},Pd=so(Id),Ad=Ed(Pd);function Cd({children:t}){return Ad.currentUser?t:p.jsx(bc,{to:"/login"})}const Ho=S.createContext({});function xd(t){const e=S.useRef(null);return e.current===null&&(e.current=t()),e.current}const Ti=S.createContext(null),Wo=S.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Rd(t=!0){const e=S.useContext(Ti);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:s}=e,r=S.useId();S.useEffect(()=>{t&&s(r)},[t]);const o=S.useCallback(()=>t&&i&&i(r),[r,i,t]);return!n&&i?[!1,o]:[!0]}const bi=typeof window<"u",kd=bi?S.useLayoutEffect:S.useEffect,W=t=>t;let Kn=W;function wi(t){let e;return()=>(e===void 0&&(e=t()),e)}const Ze=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},oe=t=>t*1e3,ae=t=>t/1e3,Dd={skipAnimations:!1,useManualTiming:!1};function Od(t){let e=new Set,n=new Set,i=!1,s=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(l){r.has(l)&&(c.schedule(l),t()),l(o)}const c={schedule:(l,u=!1,h=!1)=>{const f=h&&i?e:n;return u&&r.add(l),f.has(l)||f.add(l),l},cancel:l=>{n.delete(l),r.delete(l)},process:l=>{if(o=l,i){s=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,s&&(s=!1,c.process(l))}};return c}const Lt=["read","resolveKeyframes","update","preRender","render","postRender"],Md=40;function zo(t,e){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=Lt.reduce((y,_)=>(y[_]=Od(r),y),{}),{read:a,resolveKeyframes:c,update:l,preRender:u,render:h,postRender:d}=o,f=()=>{const y=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(y-s.timestamp,Md),1),s.timestamp=y,s.isProcessing=!0,a.process(s),c.process(s),l.process(s),u.process(s),h.process(s),d.process(s),s.isProcessing=!1,n&&e&&(i=!1,t(f))},m=()=>{n=!0,i=!0,s.isProcessing||t(f)};return{schedule:Lt.reduce((y,_)=>{const T=o[_];return y[_]=(P,E=!1,A=!1)=>(n||m(),T.schedule(P,E,A)),y},{}),cancel:y=>{for(let _=0;_<Lt.length;_++)o[Lt[_]].cancel(y)},state:s,steps:o}}const{schedule:x,cancel:be,state:L,steps:En}=zo(typeof requestAnimationFrame<"u"?requestAnimationFrame:W,!0),Ko=S.createContext({strict:!1}),ks={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qe={};for(const t in ks)Qe[t]={isEnabled:e=>ks[t].some(n=>!!e[n])};function Ld(t){for(const e in t)Qe[e]={...Qe[e],...t[e]}}const Nd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Jt(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Nd.has(t)}let Go=t=>!Jt(t);function Vd(t){t&&(Go=e=>e.startsWith("on")?!Jt(e):t(e))}try{Vd(require("@emotion/is-prop-valid").default)}catch{}function jd(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(Go(s)||n===!0&&Jt(s)||!e&&!Jt(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function Ud(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,s)=>s==="create"?t:(e.has(s)||e.set(s,t(s)),e.get(s))})}const ln=S.createContext({});function vt(t){return typeof t=="string"||Array.isArray(t)}function un(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Ei=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Si=["initial",...Ei];function hn(t){return un(t.animate)||Si.some(e=>vt(t[e]))}function qo(t){return!!(hn(t)||t.variants)}function Fd(t,e){if(hn(t)){const{initial:n,animate:i}=t;return{initial:n===!1||vt(n)?n:void 0,animate:vt(i)?i:void 0}}return t.inherit!==!1?e:{}}function Bd(t){const{initial:e,animate:n}=Fd(t,S.useContext(ln));return S.useMemo(()=>({initial:e,animate:n}),[Ds(e),Ds(n)])}function Ds(t){return Array.isArray(t)?t.join(" "):t}const $d=Symbol.for("motionComponentSymbol");function Fe(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Hd(t,e,n){return S.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Fe(n)&&(n.current=i))},[e])}const Ii=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Wd="framerAppearId",Yo="data-"+Ii(Wd),{schedule:Pi,cancel:Iy}=zo(queueMicrotask,!1),Xo=S.createContext({});function zd(t,e,n,i,s){var r,o;const{visualElement:a}=S.useContext(ln),c=S.useContext(Ko),l=S.useContext(Ti),u=S.useContext(Wo).reducedMotion,h=S.useRef(null);i=i||c.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:a,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const d=h.current,f=S.useContext(Xo);d&&!d.projection&&s&&(d.type==="html"||d.type==="svg")&&Kd(h.current,n,s,f);const m=S.useRef(!1);S.useInsertionEffect(()=>{d&&m.current&&d.update(n,l)});const g=n[Yo],v=S.useRef(!!g&&!(!((r=window.MotionHandoffIsComplete)===null||r===void 0)&&r.call(window,g))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,g)));return kd(()=>{d&&(m.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),Pi.render(d.render),v.current&&d.animationState&&d.animationState.animateChanges())}),S.useEffect(()=>{d&&(!v.current&&d.animationState&&d.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,g)}),v.current=!1))}),d}function Kd(t,e,n,i){const{layoutId:s,layout:r,drag:o,dragConstraints:a,layoutScroll:c,layoutRoot:l}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Jo(t.parent)),t.projection.setOptions({layoutId:s,layout:r,alwaysMeasureLayout:!!o||a&&Fe(a),visualElement:t,animationType:typeof r=="string"?r:"both",initialPromotionConfig:i,layoutScroll:c,layoutRoot:l})}function Jo(t){if(t)return t.options.allowProjection!==!1?t.projection:Jo(t.parent)}function Gd({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){var r,o;t&&Ld(t);function a(l,u){let h;const d={...S.useContext(Wo),...l,layoutId:qd(l)},{isStatic:f}=d,m=Bd(l),g=i(l,f);if(!f&&bi){Yd();const v=Xd(d);h=v.MeasureLayout,m.visualElement=zd(s,g,d,e,v.ProjectionNode)}return p.jsxs(ln.Provider,{value:m,children:[h&&m.visualElement?p.jsx(h,{visualElement:m.visualElement,...d}):null,n(s,l,Hd(g,m.visualElement,u),g,f,m.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(o=(r=s.displayName)!==null&&r!==void 0?r:s.name)!==null&&o!==void 0?o:""})`}`;const c=S.forwardRef(a);return c[$d]=s,c}function qd({layoutId:t}){const e=S.useContext(Ho).id;return e&&t!==void 0?e+"-"+t:t}function Yd(t,e){S.useContext(Ko).strict}function Xd(t){const{drag:e,layout:n}=Qe;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Jd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ai(t){return typeof t!="string"||t.includes("-")?!1:!!(Jd.indexOf(t)>-1||/[A-Z]/u.test(t))}function Os(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Ci(t,e,n,i){if(typeof e=="function"){const[s,r]=Os(i);e=e(n!==void 0?n:t.custom,s,r)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,r]=Os(i);e=e(n!==void 0?n:t.custom,s,r)}return e}const Gn=t=>Array.isArray(t),Zd=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Qd=t=>Gn(t)?t[t.length-1]||0:t,V=t=>!!(t&&t.getVelocity);function $t(t){const e=V(t)?t.get():t;return Zd(e)?e.toValue():e}function ef({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,s,r){const o={latestValues:tf(i,s,r,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Zo=t=>(e,n)=>{const i=S.useContext(ln),s=S.useContext(Ti),r=()=>ef(t,e,i,s);return n?r():xd(r)};function tf(t,e,n,i){const s={},r=i(t,{});for(const d in r)s[d]=$t(r[d]);let{initial:o,animate:a}=t;const c=hn(t),l=qo(t);e&&l&&!c&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?a:o;if(h&&typeof h!="boolean"&&!un(h)){const d=Array.isArray(h)?h:[h];for(let f=0;f<d.length;f++){const m=Ci(t,d[f]);if(m){const{transitionEnd:g,transition:v,...y}=m;for(const _ in y){let T=y[_];if(Array.isArray(T)){const P=u?T.length-1:0;T=T[P]}T!==null&&(s[_]=T)}for(const _ in g)s[_]=g[_]}}}return s}const nt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ne=new Set(nt),Qo=t=>e=>typeof e=="string"&&e.startsWith(t),ea=Qo("--"),nf=Qo("var(--"),xi=t=>nf(t)?sf.test(t.split("/*")[0].trim()):!1,sf=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ta=(t,e)=>e&&typeof t=="number"?e.transform(t):t,ue=(t,e,n)=>n>e?e:n<t?t:n,it={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},_t={...it,transform:t=>ue(0,1,t)},Nt={...it,default:1},Rt=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),pe=Rt("deg"),Q=Rt("%"),b=Rt("px"),rf=Rt("vh"),of=Rt("vw"),Ms={...Q,parse:t=>Q.parse(t)/100,transform:t=>Q.transform(t*100)},af={borderWidth:b,borderTopWidth:b,borderRightWidth:b,borderBottomWidth:b,borderLeftWidth:b,borderRadius:b,radius:b,borderTopLeftRadius:b,borderTopRightRadius:b,borderBottomRightRadius:b,borderBottomLeftRadius:b,width:b,maxWidth:b,height:b,maxHeight:b,top:b,right:b,bottom:b,left:b,padding:b,paddingTop:b,paddingRight:b,paddingBottom:b,paddingLeft:b,margin:b,marginTop:b,marginRight:b,marginBottom:b,marginLeft:b,backgroundPositionX:b,backgroundPositionY:b},cf={rotate:pe,rotateX:pe,rotateY:pe,rotateZ:pe,scale:Nt,scaleX:Nt,scaleY:Nt,scaleZ:Nt,skew:pe,skewX:pe,skewY:pe,distance:b,translateX:b,translateY:b,translateZ:b,x:b,y:b,z:b,perspective:b,transformPerspective:b,opacity:_t,originX:Ms,originY:Ms,originZ:b},Ls={...it,transform:Math.round},Ri={...af,...cf,zIndex:Ls,size:b,fillOpacity:_t,strokeOpacity:_t,numOctaves:Ls},lf={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},uf=nt.length;function hf(t,e,n){let i="",s=!0;for(let r=0;r<uf;r++){const o=nt[r],a=t[o];if(a===void 0)continue;let c=!0;if(typeof a=="number"?c=a===(o.startsWith("scale")?1:0):c=parseFloat(a)===0,!c||n){const l=ta(a,Ri[o]);if(!c){s=!1;const u=lf[o]||o;i+=`${u}(${l}) `}n&&(e[o]=l)}}return i=i.trim(),n?i=n(e,s?"":i):s&&(i="none"),i}function ki(t,e,n){const{style:i,vars:s,transformOrigin:r}=t;let o=!1,a=!1;for(const c in e){const l=e[c];if(Ne.has(c)){o=!0;continue}else if(ea(c)){s[c]=l;continue}else{const u=ta(l,Ri[c]);c.startsWith("origin")?(a=!0,r[c]=u):i[c]=u}}if(e.transform||(o||n?i.transform=hf(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:c="50%",originY:l="50%",originZ:u=0}=r;i.transformOrigin=`${c} ${l} ${u}`}}const df={offset:"stroke-dashoffset",array:"stroke-dasharray"},ff={offset:"strokeDashoffset",array:"strokeDasharray"};function pf(t,e,n=1,i=0,s=!0){t.pathLength=1;const r=s?df:ff;t[r.offset]=b.transform(-i);const o=b.transform(e),a=b.transform(n);t[r.array]=`${o} ${a}`}function Ns(t,e,n){return typeof t=="string"?t:b.transform(e+n*t)}function mf(t,e,n){const i=Ns(e,t.x,t.width),s=Ns(n,t.y,t.height);return`${i} ${s}`}function Di(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...l},u,h){if(ki(t,l,h),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f,dimensions:m}=t;d.transform&&(m&&(f.transform=d.transform),delete d.transform),m&&(s!==void 0||r!==void 0||f.transform)&&(f.transformOrigin=mf(m,s!==void 0?s:.5,r!==void 0?r:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&pf(d,o,a,c,!1)}const Oi=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),na=()=>({...Oi(),attrs:{}}),Mi=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ia(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const r in n)t.style.setProperty(r,n[r])}const sa=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ra(t,e,n,i){ia(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(sa.has(s)?s:Ii(s),e.attrs[s])}const Zt={};function gf(t){Object.assign(Zt,t)}function oa(t,{layout:e,layoutId:n}){return Ne.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Zt[t]||t==="opacity")}function Li(t,e,n){var i;const{style:s}=t,r={};for(const o in s)(V(s[o])||e.style&&V(e.style[o])||oa(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(r[o]=s[o]);return r}function aa(t,e,n){const i=Li(t,e,n);for(const s in t)if(V(t[s])||V(e[s])){const r=nt.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[r]=t[s]}return i}function yf(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Vs=["x","y","width","height","cx","cy","r"],vf={useVisualState:Zo({scrapeMotionValuesFromProps:aa,createRenderState:na,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:s})=>{if(!n)return;let r=!!t.drag;if(!r){for(const a in s)if(Ne.has(a)){r=!0;break}}if(!r)return;let o=!e;if(e)for(let a=0;a<Vs.length;a++){const c=Vs[a];t[c]!==e[c]&&(o=!0)}o&&x.read(()=>{yf(n,i),x.render(()=>{Di(i,s,Mi(n.tagName),t.transformTemplate),ra(n,i)})})}})},_f={useVisualState:Zo({scrapeMotionValuesFromProps:Li,createRenderState:Oi})};function ca(t,e,n){for(const i in e)!V(e[i])&&!oa(i,n)&&(t[i]=e[i])}function Tf({transformTemplate:t},e){return S.useMemo(()=>{const n=Oi();return ki(n,e,t),Object.assign({},n.vars,n.style)},[e])}function bf(t,e){const n=t.style||{},i={};return ca(i,n,t),Object.assign(i,Tf(t,e)),i}function wf(t,e){const n={},i=bf(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function Ef(t,e,n,i){const s=S.useMemo(()=>{const r=na();return Di(r,e,Mi(i),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){const r={};ca(r,t.style,t),s.style={...r,...s.style}}return s}function Sf(t=!1){return(n,i,s,{latestValues:r},o)=>{const c=(Ai(n)?Ef:wf)(i,r,o,n),l=jd(i,typeof n=="string",t),u=n!==S.Fragment?{...l,...c,ref:s}:{},{children:h}=i,d=S.useMemo(()=>V(h)?h.get():h,[h]);return S.createElement(n,{...u,children:d})}}function If(t,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const o={...Ai(i)?vf:_f,preloadedFeatures:t,useRender:Sf(s),createVisualElement:e,Component:i};return Gd(o)}}function la(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function dn(t,e,n){const i=t.getProps();return Ci(i,e,n!==void 0?n:i.custom,t)}const Pf=wi(()=>window.ScrollTimeline!==void 0);class Af{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(s=>{if(Pf()&&s.attachTimeline)return s.attachTimeline(e);if(typeof n=="function")return n(s)});return()=>{i.forEach((s,r)=>{s&&s(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Cf extends Af{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Ni(t,e){return t?t[e]||t.default||t:void 0}const qn=2e4;function ua(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<qn;)e+=n,i=t.next(e);return e>=qn?1/0:e}function Vi(t){return typeof t=="function"}function js(t,e){t.timeline=e,t.onfinish=null}const ji=t=>Array.isArray(t)&&typeof t[0]=="number",xf={linearEasing:void 0};function Rf(t,e){const n=wi(t);return()=>{var i;return(i=xf[e])!==null&&i!==void 0?i:n()}}const Qt=Rf(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ha=(t,e,n=10)=>{let i="";const s=Math.max(Math.round(e/n),2);for(let r=0;r<s;r++)i+=t(Ze(0,s-1,r))+", ";return`linear(${i.substring(0,i.length-2)})`};function da(t){return!!(typeof t=="function"&&Qt()||!t||typeof t=="string"&&(t in Yn||Qt())||ji(t)||Array.isArray(t)&&t.every(da))}const at=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Yn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:at([0,.65,.55,1]),circOut:at([.55,0,1,.45]),backIn:at([.31,.01,.66,-.59]),backOut:at([.33,1.53,.69,.99])};function fa(t,e){if(t)return typeof t=="function"&&Qt()?ha(t,e):ji(t)?at(t):Array.isArray(t)?t.map(n=>fa(n,e)||Yn.easeOut):Yn[t]}const q={x:!1,y:!1};function pa(){return q.x||q.y}function kf(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let s=document;const r=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}function ma(t,e){const n=kf(t),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[n,s,()=>i.abort()]}function Us(t){return e=>{e.pointerType==="touch"||pa()||t(e)}}function Df(t,e,n={}){const[i,s,r]=ma(t,n),o=Us(a=>{const{target:c}=a,l=e(a);if(typeof l!="function"||!c)return;const u=Us(h=>{l(h),c.removeEventListener("pointerleave",u)});c.addEventListener("pointerleave",u,s)});return i.forEach(a=>{a.addEventListener("pointerenter",o,s)}),r}const ga=(t,e)=>e?t===e?!0:ga(t,e.parentElement):!1,Ui=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Of=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Mf(t){return Of.has(t.tagName)||t.tabIndex!==-1}const ct=new WeakSet;function Fs(t){return e=>{e.key==="Enter"&&t(e)}}function Sn(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Lf=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Fs(()=>{if(ct.has(n))return;Sn(n,"down");const s=Fs(()=>{Sn(n,"up")}),r=()=>Sn(n,"cancel");n.addEventListener("keyup",s,e),n.addEventListener("blur",r,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Bs(t){return Ui(t)&&!pa()}function Nf(t,e,n={}){const[i,s,r]=ma(t,n),o=a=>{const c=a.currentTarget;if(!Bs(a)||ct.has(c))return;ct.add(c);const l=e(a),u=(f,m)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",d),!(!Bs(f)||!ct.has(c))&&(ct.delete(c),typeof l=="function"&&l(f,{success:m}))},h=f=>{u(f,n.useGlobalTarget||ga(c,f.target))},d=f=>{u(f,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",d,s)};return i.forEach(a=>{!Mf(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,s),a.addEventListener("focus",l=>Lf(l,s),s)}),r}function Vf(t){return t==="x"||t==="y"?q[t]?null:(q[t]=!0,()=>{q[t]=!1}):q.x||q.y?null:(q.x=q.y=!0,()=>{q.x=q.y=!1})}const ya=new Set(["width","height","top","left","right","bottom",...nt]);let Ht;function jf(){Ht=void 0}const ee={now:()=>(Ht===void 0&&ee.set(L.isProcessing||Dd.useManualTiming?L.timestamp:performance.now()),Ht),set:t=>{Ht=t,queueMicrotask(jf)}};function Fi(t,e){t.indexOf(e)===-1&&t.push(e)}function Bi(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class $i{constructor(){this.subscriptions=[]}add(e){return Fi(this.subscriptions,e),()=>Bi(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function va(t,e){return e?t*(1e3/e):0}const $s=30,Uf=t=>!isNaN(parseFloat(t));class Ff{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const r=ee.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ee.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Uf(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new $i);const i=this.events[e].add(n);return e==="change"?()=>{i(),x.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=ee.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>$s)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,$s);return va(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Tt(t,e){return new Ff(t,e)}function Bf(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Tt(n))}function $f(t,e){const n=dn(t,e);let{transitionEnd:i={},transition:s={},...r}=n||{};r={...r,...i};for(const o in r){const a=Qd(r[o]);Bf(t,o,a)}}function Hf(t){return!!(V(t)&&t.add)}function Xn(t,e){const n=t.getValue("willChange");if(Hf(n))return n.add(e)}function _a(t){return t.props[Yo]}const Ta=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Wf=1e-7,zf=12;function Kf(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=Ta(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Wf&&++a<zf);return o}function kt(t,e,n,i){if(t===e&&n===i)return W;const s=r=>Kf(r,0,1,t,n);return r=>r===0||r===1?r:Ta(s(r),e,i)}const ba=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,wa=t=>e=>1-t(1-e),Ea=kt(.33,1.53,.69,.99),Hi=wa(Ea),Sa=ba(Hi),Ia=t=>(t*=2)<1?.5*Hi(t):.5*(2-Math.pow(2,-10*(t-1))),Wi=t=>1-Math.sin(Math.acos(t)),Pa=wa(Wi),Aa=ba(Wi),Ca=t=>/^0[^.\s]+$/u.test(t);function Gf(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ca(t):!0}const ht=t=>Math.round(t*1e5)/1e5,zi=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function qf(t){return t==null}const Yf=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ki=(t,e)=>n=>!!(typeof n=="string"&&Yf.test(n)&&n.startsWith(t)||e&&!qf(n)&&Object.prototype.hasOwnProperty.call(n,e)),xa=(t,e,n)=>i=>{if(typeof i!="string")return i;const[s,r,o,a]=i.match(zi);return{[t]:parseFloat(s),[e]:parseFloat(r),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Xf=t=>ue(0,255,t),In={...it,transform:t=>Math.round(Xf(t))},ke={test:Ki("rgb","red"),parse:xa("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+In.transform(t)+", "+In.transform(e)+", "+In.transform(n)+", "+ht(_t.transform(i))+")"};function Jf(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Jn={test:Ki("#"),parse:Jf,transform:ke.transform},Be={test:Ki("hsl","hue"),parse:xa("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Q.transform(ht(e))+", "+Q.transform(ht(n))+", "+ht(_t.transform(i))+")"},N={test:t=>ke.test(t)||Jn.test(t)||Be.test(t),parse:t=>ke.test(t)?ke.parse(t):Be.test(t)?Be.parse(t):Jn.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ke.transform(t):Be.transform(t)},Zf=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Qf(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(zi))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Zf))===null||n===void 0?void 0:n.length)||0)>0}const Ra="number",ka="color",ep="var",tp="var(",Hs="${}",np=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function bt(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},s=[];let r=0;const a=e.replace(np,c=>(N.test(c)?(i.color.push(r),s.push(ka),n.push(N.parse(c))):c.startsWith(tp)?(i.var.push(r),s.push(ep),n.push(c)):(i.number.push(r),s.push(Ra),n.push(parseFloat(c))),++r,Hs)).split(Hs);return{values:n,split:a,indexes:i,types:s}}function Da(t){return bt(t).values}function Oa(t){const{split:e,types:n}=bt(t),i=e.length;return s=>{let r="";for(let o=0;o<i;o++)if(r+=e[o],s[o]!==void 0){const a=n[o];a===Ra?r+=ht(s[o]):a===ka?r+=N.transform(s[o]):r+=s[o]}return r}}const ip=t=>typeof t=="number"?0:t;function sp(t){const e=Da(t);return Oa(t)(e.map(ip))}const we={test:Qf,parse:Da,createTransformer:Oa,getAnimatableNone:sp},rp=new Set(["brightness","contrast","saturate","opacity"]);function op(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(zi)||[];if(!i)return t;const s=n.replace(i,"");let r=rp.has(e)?1:0;return i!==n&&(r*=100),e+"("+r+s+")"}const ap=/\b([a-z-]*)\(.*?\)/gu,Zn={...we,getAnimatableNone:t=>{const e=t.match(ap);return e?e.map(op).join(" "):t}},cp={...Ri,color:N,backgroundColor:N,outlineColor:N,fill:N,stroke:N,borderColor:N,borderTopColor:N,borderRightColor:N,borderBottomColor:N,borderLeftColor:N,filter:Zn,WebkitFilter:Zn},Gi=t=>cp[t];function Ma(t,e){let n=Gi(t);return n!==Zn&&(n=we),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const lp=new Set(["auto","none","0"]);function up(t,e,n){let i=0,s;for(;i<t.length&&!s;){const r=t[i];typeof r=="string"&&!lp.has(r)&&bt(r).values.length&&(s=t[i]),i++}if(s&&n)for(const r of e)t[r]=Ma(n,s)}const Ws=t=>t===it||t===b,zs=(t,e)=>parseFloat(t.split(", ")[e]),Ks=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return zs(s[1],e);{const r=i.match(/^matrix\((.+)\)$/u);return r?zs(r[1],t):0}},hp=new Set(["x","y","z"]),dp=nt.filter(t=>!hp.has(t));function fp(t){const e=[];return dp.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const et={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ks(4,13),y:Ks(5,14)};et.translateX=et.x;et.translateY=et.y;const De=new Set;let Qn=!1,ei=!1;function La(){if(ei){const t=Array.from(De).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const s=fp(i);s.length&&(n.set(i,s),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=n.get(i);s&&s.forEach(([r,o])=>{var a;(a=i.getValue(r))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ei=!1,Qn=!1,De.forEach(t=>t.complete()),De.clear()}function Na(){De.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ei=!0)})}function pp(){Na(),La()}class qi{constructor(e,n,i,s,r,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=s,this.element=r,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(De.add(this),Qn||(Qn=!0,x.read(Na),x.resolveKeyframes(La))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:s}=this;for(let r=0;r<e.length;r++)if(e[r]===null)if(r===0){const o=s==null?void 0:s.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const c=i.readValue(n,a);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=a),s&&o===void 0&&s.set(e[0])}else e[r]=e[r-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),De.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,De.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Va=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),mp=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function gp(t){const e=mp.exec(t);if(!e)return[,];const[,n,i,s]=e;return[`--${n??i}`,s]}function ja(t,e,n=1){const[i,s]=gp(t);if(!i)return;const r=window.getComputedStyle(e).getPropertyValue(i);if(r){const o=r.trim();return Va(o)?parseFloat(o):o}return xi(s)?ja(s,e,n+1):s}const Ua=t=>e=>e.test(t),yp={test:t=>t==="auto",parse:t=>t},Fa=[it,b,Q,pe,of,rf,yp],Gs=t=>Fa.find(Ua(t));class Ba extends qi{constructor(e,n,i,s,r){super(e,n,i,s,r,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<e.length;c++){let l=e[c];if(typeof l=="string"&&(l=l.trim(),xi(l))){const u=ja(l,n.current);u!==void 0&&(e[c]=u),c===e.length-1&&(this.finalKeyframe=l)}}if(this.resolveNoneKeyframes(),!ya.has(i)||e.length!==2)return;const[s,r]=e,o=Gs(s),a=Gs(r);if(o!==a)if(Ws(o)&&Ws(a))for(let c=0;c<e.length;c++){const l=e[c];typeof l=="string"&&(e[c]=parseFloat(l))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let s=0;s<e.length;s++)Gf(e[s])&&i.push(s);i.length&&up(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=et[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:s}=this;if(!n||!n.current)return;const r=n.getValue(i);r&&r.jump(this.measuredOrigin,!1);const o=s.length-1,a=s[o];s[o]=et[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([c,l])=>{n.getValue(c).set(l)}),this.resolveNoneKeyframes()}}const qs=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(we.test(t)||t==="0")&&!t.startsWith("url("));function vp(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function _p(t,e,n,i){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const r=t[t.length-1],o=qs(s,e),a=qs(r,e);return!o||!a?!1:vp(t)||(n==="spring"||Vi(n))&&i}const Tp=t=>t!==null;function fn(t,{repeat:e,repeatType:n="loop"},i){const s=t.filter(Tp),r=e&&n!=="loop"&&e%2===1?0:s.length-1;return!r||i===void 0?s[r]:i}const bp=40;class $a{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ee.now(),this.options={autoplay:e,delay:n,type:i,repeat:s,repeatDelay:r,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>bp?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&pp(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ee.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:r,delay:o,onComplete:a,onUpdate:c,isGenerator:l}=this.options;if(!l&&!_p(e,i,s,r))if(o)this.options.duration=0;else{c&&c(fn(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const R=(t,e,n)=>t+(e-t)*n;function Pn(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function wp({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,r=0,o=0;if(!e)s=r=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;s=Pn(c,a,t+1/3),r=Pn(c,a,t),o=Pn(c,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}function en(t,e){return n=>n>0?e:t}const An=(t,e,n)=>{const i=t*t,s=n*(e*e-i)+i;return s<0?0:Math.sqrt(s)},Ep=[Jn,ke,Be],Sp=t=>Ep.find(e=>e.test(t));function Ys(t){const e=Sp(t);if(!e)return!1;let n=e.parse(t);return e===Be&&(n=wp(n)),n}const Xs=(t,e)=>{const n=Ys(t),i=Ys(e);if(!n||!i)return en(t,e);const s={...n};return r=>(s.red=An(n.red,i.red,r),s.green=An(n.green,i.green,r),s.blue=An(n.blue,i.blue,r),s.alpha=R(n.alpha,i.alpha,r),ke.transform(s))},Ip=(t,e)=>n=>e(t(n)),Dt=(...t)=>t.reduce(Ip),ti=new Set(["none","hidden"]);function Pp(t,e){return ti.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function Ap(t,e){return n=>R(t,e,n)}function Yi(t){return typeof t=="number"?Ap:typeof t=="string"?xi(t)?en:N.test(t)?Xs:Rp:Array.isArray(t)?Ha:typeof t=="object"?N.test(t)?Xs:Cp:en}function Ha(t,e){const n=[...t],i=n.length,s=t.map((r,o)=>Yi(r)(r,e[o]));return r=>{for(let o=0;o<i;o++)n[o]=s[o](r);return n}}function Cp(t,e){const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=Yi(t[s])(t[s],e[s]));return s=>{for(const r in i)n[r]=i[r](s);return n}}function xp(t,e){var n;const i=[],s={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=t.indexes[o][s[o]],c=(n=t.values[a])!==null&&n!==void 0?n:0;i[r]=c,s[o]++}return i}const Rp=(t,e)=>{const n=we.createTransformer(e),i=bt(t),s=bt(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?ti.has(t)&&!s.values.length||ti.has(e)&&!i.values.length?Pp(t,e):Dt(Ha(xp(i,s),s.values),n):en(t,e)};function Wa(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?R(t,e,n):Yi(t)(t,e)}const kp=5;function za(t,e,n){const i=Math.max(e-kp,0);return va(n-t(i),e-i)}const k={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Cn=.001;function Dp({duration:t=k.duration,bounce:e=k.bounce,velocity:n=k.velocity,mass:i=k.mass}){let s,r,o=1-e;o=ue(k.minDamping,k.maxDamping,o),t=ue(k.minDuration,k.maxDuration,ae(t)),o<1?(s=l=>{const u=l*o,h=u*t,d=u-n,f=ni(l,o),m=Math.exp(-h);return Cn-d/f*m},r=l=>{const h=l*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(l,2)*t,m=Math.exp(-h),g=ni(Math.pow(l,2),o);return(-s(l)+Cn>0?-1:1)*((d-f)*m)/g}):(s=l=>{const u=Math.exp(-l*t),h=(l-n)*t+1;return-Cn+u*h},r=l=>{const u=Math.exp(-l*t),h=(n-l)*(t*t);return u*h});const a=5/t,c=Mp(s,r,a);if(t=oe(t),isNaN(c))return{stiffness:k.stiffness,damping:k.damping,duration:t};{const l=Math.pow(c,2)*i;return{stiffness:l,damping:o*2*Math.sqrt(i*l),duration:t}}}const Op=12;function Mp(t,e,n){let i=n;for(let s=1;s<Op;s++)i=i-t(i)/e(i);return i}function ni(t,e){return t*Math.sqrt(1-e*e)}const Lp=["duration","bounce"],Np=["stiffness","damping","mass"];function Js(t,e){return e.some(n=>t[n]!==void 0)}function Vp(t){let e={velocity:k.velocity,stiffness:k.stiffness,damping:k.damping,mass:k.mass,isResolvedFromDuration:!1,...t};if(!Js(t,Np)&&Js(t,Lp))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),s=i*i,r=2*ue(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:k.mass,stiffness:s,damping:r}}else{const n=Dp(t);e={...e,...n,mass:k.mass},e.isResolvedFromDuration=!0}return e}function Ka(t=k.visualDuration,e=k.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:s}=n;const r=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:r},{stiffness:c,damping:l,mass:u,duration:h,velocity:d,isResolvedFromDuration:f}=Vp({...n,velocity:-ae(n.velocity||0)}),m=d||0,g=l/(2*Math.sqrt(c*u)),v=o-r,y=ae(Math.sqrt(c/u)),_=Math.abs(v)<5;i||(i=_?k.restSpeed.granular:k.restSpeed.default),s||(s=_?k.restDelta.granular:k.restDelta.default);let T;if(g<1){const E=ni(y,g);T=A=>{const O=Math.exp(-g*y*A);return o-O*((m+g*y*v)/E*Math.sin(E*A)+v*Math.cos(E*A))}}else if(g===1)T=E=>o-Math.exp(-y*E)*(v+(m+y*v)*E);else{const E=y*Math.sqrt(g*g-1);T=A=>{const O=Math.exp(-g*y*A),I=Math.min(E*A,300);return o-O*((m+g*y*v)*Math.sinh(I)+E*v*Math.cosh(I))/E}}const P={calculatedDuration:f&&h||null,next:E=>{const A=T(E);if(f)a.done=E>=h;else{let O=0;g<1&&(O=E===0?oe(m):za(T,E,A));const I=Math.abs(O)<=i,M=Math.abs(o-A)<=s;a.done=I&&M}return a.value=a.done?o:A,a},toString:()=>{const E=Math.min(ua(P),qn),A=ha(O=>P.next(E*O).value,E,30);return E+"ms "+A}};return P}function Zs({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:c,restDelta:l=.5,restSpeed:u}){const h=t[0],d={done:!1,value:h},f=I=>a!==void 0&&I<a||c!==void 0&&I>c,m=I=>a===void 0?c:c===void 0||Math.abs(a-I)<Math.abs(c-I)?a:c;let g=n*e;const v=h+g,y=o===void 0?v:o(v);y!==v&&(g=y-h);const _=I=>-g*Math.exp(-I/i),T=I=>y+_(I),P=I=>{const M=_(I),F=T(I);d.done=Math.abs(M)<=l,d.value=d.done?y:F};let E,A;const O=I=>{f(d.value)&&(E=I,A=Ka({keyframes:[d.value,m(d.value)],velocity:za(T,I,d.value),damping:s,stiffness:r,restDelta:l,restSpeed:u}))};return O(0),{calculatedDuration:null,next:I=>{let M=!1;return!A&&E===void 0&&(M=!0,P(I),O(I)),E!==void 0&&I>=E?A.next(I-E):(!M&&P(I),d)}}}const jp=kt(.42,0,1,1),Up=kt(0,0,.58,1),Ga=kt(.42,0,.58,1),Fp=t=>Array.isArray(t)&&typeof t[0]!="number",Qs={linear:W,easeIn:jp,easeInOut:Ga,easeOut:Up,circIn:Wi,circInOut:Aa,circOut:Pa,backIn:Hi,backInOut:Sa,backOut:Ea,anticipate:Ia},er=t=>{if(ji(t)){Kn(t.length===4);const[e,n,i,s]=t;return kt(e,n,i,s)}else if(typeof t=="string")return Kn(Qs[t]!==void 0),Qs[t];return t};function Bp(t,e,n){const i=[],s=n||Wa,r=t.length-1;for(let o=0;o<r;o++){let a=s(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]||W:e;a=Dt(c,a)}i.push(a)}return i}function $p(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const r=t.length;if(Kn(r===e.length),r===1)return()=>e[0];if(r===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[r-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=Bp(e,i,s),c=a.length,l=u=>{if(o&&u<t[0])return e[0];let h=0;if(c>1)for(;h<t.length-2&&!(u<t[h+1]);h++);const d=Ze(t[h],t[h+1],u);return a[h](d)};return n?u=>l(ue(t[0],t[r-1],u)):l}function Hp(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=Ze(0,e,i);t.push(R(n,1,s))}}function Wp(t){const e=[0];return Hp(e,t.length-1),e}function zp(t,e){return t.map(n=>n*e)}function Kp(t,e){return t.map(()=>e||Ga).splice(0,t.length-1)}function tn({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=Fp(i)?i.map(er):er(i),r={done:!1,value:e[0]},o=zp(n&&n.length===e.length?n:Wp(e),t),a=$p(o,e,{ease:Array.isArray(s)?s:Kp(e,s)});return{calculatedDuration:t,next:c=>(r.value=a(c),r.done=c>=t,r)}}const Gp=t=>{const e=({timestamp:n})=>t(n);return{start:()=>x.update(e,!0),stop:()=>be(e),now:()=>L.isProcessing?L.timestamp:ee.now()}},qp={decay:Zs,inertia:Zs,tween:tn,keyframes:tn,spring:Ka},Yp=t=>t/100;class Xi extends $a{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:i,element:s,keyframes:r}=this.options,o=(s==null?void 0:s.KeyframeResolver)||qi,a=(c,l)=>this.onKeyframesResolved(c,l);this.resolver=new o(r,a,n,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:r,velocity:o=0}=this.options,a=Vi(n)?n:qp[n]||tn;let c,l;a!==tn&&typeof e[0]!="number"&&(c=Dt(Yp,Wa(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});r==="mirror"&&(l=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=ua(u));const{calculatedDuration:h}=u,d=h+s,f=d*(i+1)-s;return{generator:u,mirroredGenerator:l,mapPercentToKeyframes:c,calculatedDuration:h,resolvedDuration:d,totalDuration:f}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:I}=this.options;return{done:!0,value:I[I.length-1]}}const{finalKeyframe:s,generator:r,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:c,calculatedDuration:l,totalDuration:u,resolvedDuration:h}=i;if(this.startTime===null)return r.next(0);const{delay:d,repeat:f,repeatType:m,repeatDelay:g,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-d*(this.speed>=0?1:-1),_=this.speed>=0?y<0:y>u;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let T=this.currentTime,P=r;if(f){const I=Math.min(this.currentTime,u)/h;let M=Math.floor(I),F=I%1;!F&&I>=1&&(F=1),F===1&&M--,M=Math.min(M,f+1),!!(M%2)&&(m==="reverse"?(F=1-F,g&&(F-=g/h)):m==="mirror"&&(P=o)),T=ue(0,1,F)*h}const E=_?{done:!1,value:c[0]}:P.next(T);a&&(E.value=a(E.value));let{done:A}=E;!_&&l!==null&&(A=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return O&&s!==void 0&&(E.value=fn(c,this.options,s)),v&&v(E.value),O&&this.finish(),E}get duration(){const{resolved:e}=this;return e?ae(e.calculatedDuration):0}get time(){return ae(this.currentTime)}set time(e){e=oe(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=ae(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=Gp,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(r=>this.tick(r))),n&&n();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Xp=new Set(["opacity","clipPath","filter","transform"]);function Jp(t,e,n,{delay:i=0,duration:s=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:c}={}){const l={[e]:n};c&&(l.offset=c);const u=fa(a,s);return Array.isArray(u)&&(l.easing=u),t.animate(l,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const Zp=wi(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),nn=10,Qp=2e4;function em(t){return Vi(t.type)||t.type==="spring"||!da(t.ease)}function tm(t,e){const n=new Xi({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const s=[];let r=0;for(;!i.done&&r<Qp;)i=n.sample(r),s.push(i.value),r+=nn;return{times:void 0,keyframes:s,duration:r-nn,ease:"linear"}}const qa={anticipate:Ia,backInOut:Sa,circInOut:Aa};function nm(t){return t in qa}class tr extends $a{constructor(e){super(e);const{name:n,motionValue:i,element:s,keyframes:r}=this.options;this.resolver=new Ba(r,(o,a)=>this.onKeyframesResolved(o,a),n,i,s),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:s,ease:r,type:o,motionValue:a,name:c,startTime:l}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof r=="string"&&Qt()&&nm(r)&&(r=qa[r]),em(this.options)){const{onComplete:h,onUpdate:d,motionValue:f,element:m,...g}=this.options,v=tm(e,g);e=v.keyframes,e.length===1&&(e[1]=e[0]),i=v.duration,s=v.times,r=v.ease,o="keyframes"}const u=Jp(a.owner.current,c,e,{...this.options,duration:i,times:s,ease:r});return u.startTime=l??this.calcStartTime(),this.pendingTimeline?(js(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:h}=this.options;a.set(fn(e,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:s,type:o,ease:r,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return ae(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return ae(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=oe(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return W;const{animation:i}=n;js(i,e)}return W}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:s,type:r,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:l,onUpdate:u,onComplete:h,element:d,...f}=this.options,m=new Xi({...f,keyframes:i,duration:s,type:r,ease:o,times:a,isGenerator:!0}),g=oe(this.time);l.setWithVelocity(m.sample(g-nn).value,m.sample(g).value,nn)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:s,repeatType:r,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:l}=n.owner.getProps();return Zp()&&i&&Xp.has(i)&&!c&&!l&&!s&&r!=="mirror"&&o!==0&&a!=="inertia"}}const im={type:"spring",stiffness:500,damping:25,restSpeed:10},sm=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),rm={type:"keyframes",duration:.8},om={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},am=(t,{keyframes:e})=>e.length>2?rm:Ne.has(t)?t.startsWith("scale")?sm(e[1]):im:om;function cm({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:c,elapsed:l,...u}){return!!Object.keys(u).length}const Ji=(t,e,n,i={},s,r)=>o=>{const a=Ni(i,t)||{},c=a.delay||i.delay||0;let{elapsed:l=0}=i;l=l-oe(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-l,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:r?void 0:s};cm(a)||(u={...u,...am(t,u)}),u.duration&&(u.duration=oe(u.duration)),u.repeatDelay&&(u.repeatDelay=oe(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let h=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(h=!0)),h&&!r&&e.get()!==void 0){const d=fn(u.keyframes,a);if(d!==void 0)return x.update(()=>{u.onUpdate(d),u.onComplete()}),new Cf([])}return!r&&tr.supports(u)?new tr(u):new Xi(u)};function lm({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Ya(t,e,{delay:n=0,transitionOverride:i,type:s}={}){var r;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...c}=e;i&&(o=i);const l=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const h in c){const d=t.getValue(h,(r=t.latestValues[h])!==null&&r!==void 0?r:null),f=c[h];if(f===void 0||u&&lm(u,h))continue;const m={delay:n,...Ni(o||{},h)};let g=!1;if(window.MotionHandoffAnimation){const y=_a(t);if(y){const _=window.MotionHandoffAnimation(y,h,x);_!==null&&(m.startTime=_,g=!0)}}Xn(t,h),d.start(Ji(h,d,f,t.shouldReduceMotion&&ya.has(h)?{type:!1}:m,t,g));const v=d.animation;v&&l.push(v)}return a&&Promise.all(l).then(()=>{x.update(()=>{a&&$f(t,a)})}),l}function ii(t,e,n={}){var i;const s=dn(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(r=n.transitionOverride);const o=s?()=>Promise.all(Ya(t,s,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:d}=r;return um(t,e,u+l,h,d,n)}:()=>Promise.resolve(),{when:c}=r;if(c){const[l,u]=c==="beforeChildren"?[o,a]:[a,o];return l().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function um(t,e,n=0,i=0,s=1,r){const o=[],a=(t.variantChildren.size-1)*i,c=s===1?(l=0)=>l*i:(l=0)=>a-l*i;return Array.from(t.variantChildren).sort(hm).forEach((l,u)=>{l.notify("AnimationStart",e),o.push(ii(l,e,{...r,delay:n+c(u)}).then(()=>l.notify("AnimationComplete",e)))}),Promise.all(o)}function hm(t,e){return t.sortNodePosition(e)}function dm(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(r=>ii(t,r,n));i=Promise.all(s)}else if(typeof e=="string")i=ii(t,e,n);else{const s=typeof e=="function"?dn(t,e,n.custom):e;i=Promise.all(Ya(t,s,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const fm=Si.length;function Xa(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Xa(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<fm;n++){const i=Si[n],s=t.props[i];(vt(s)||s===!1)&&(e[i]=s)}return e}const pm=[...Ei].reverse(),mm=Ei.length;function gm(t){return e=>Promise.all(e.map(({animation:n,options:i})=>dm(t,n,i)))}function ym(t){let e=gm(t),n=nr(),i=!0;const s=c=>(l,u)=>{var h;const d=dn(t,u,c==="exit"?(h=t.presenceContext)===null||h===void 0?void 0:h.custom:void 0);if(d){const{transition:f,transitionEnd:m,...g}=d;l={...l,...g,...m}}return l};function r(c){e=c(t)}function o(c){const{props:l}=t,u=Xa(t.parent)||{},h=[],d=new Set;let f={},m=1/0;for(let v=0;v<mm;v++){const y=pm[v],_=n[y],T=l[y]!==void 0?l[y]:u[y],P=vt(T),E=y===c?_.isActive:null;E===!1&&(m=v);let A=T===u[y]&&T!==l[y]&&P;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),_.protectedKeys={...f},!_.isActive&&E===null||!T&&!_.prevProp||un(T)||typeof T=="boolean")continue;const O=vm(_.prevProp,T);let I=O||y===c&&_.isActive&&!A&&P||v>m&&P,M=!1;const F=Array.isArray(T)?T:[T];let Ve=F.reduce(s(y),{});E===!1&&(Ve={});const{prevResolvedValues:Zi={}}=_,yc={...Zi,...Ve},Qi=j=>{I=!0,d.has(j)&&(M=!0,d.delete(j)),_.needsAnimating[j]=!0;const te=t.getValue(j);te&&(te.liveStyle=!1)};for(const j in yc){const te=Ve[j],pn=Zi[j];if(f.hasOwnProperty(j))continue;let mn=!1;Gn(te)&&Gn(pn)?mn=!la(te,pn):mn=te!==pn,mn?te!=null?Qi(j):d.add(j):te!==void 0&&d.has(j)?Qi(j):_.protectedKeys[j]=!0}_.prevProp=T,_.prevResolvedValues=Ve,_.isActive&&(f={...f,...Ve}),i&&t.blockInitialAnimation&&(I=!1),I&&(!(A&&O)||M)&&h.push(...F.map(j=>({animation:j,options:{type:y}})))}if(d.size){const v={};d.forEach(y=>{const _=t.getBaseTarget(y),T=t.getValue(y);T&&(T.liveStyle=!0),v[y]=_??null}),h.push({animation:v})}let g=!!h.length;return i&&(l.initial===!1||l.initial===l.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(h):Promise.resolve()}function a(c,l){var u;if(n[c].isActive===l)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(d=>{var f;return(f=d.animationState)===null||f===void 0?void 0:f.setActive(c,l)}),n[c].isActive=l;const h=o(c);for(const d in n)n[d].protectedKeys={};return h}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>n,reset:()=>{n=nr(),i=!0}}}function vm(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!la(e,t):!1}function Ae(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nr(){return{animate:Ae(!0),whileInView:Ae(),whileHover:Ae(),whileTap:Ae(),whileDrag:Ae(),whileFocus:Ae(),exit:Ae()}}class Ie{constructor(e){this.isMounted=!1,this.node=e}update(){}}class _m extends Ie{constructor(e){super(e),e.animationState||(e.animationState=ym(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();un(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Tm=0;class bm extends Ie{constructor(){super(...arguments),this.id=Tm++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const wm={animation:{Feature:_m},exit:{Feature:bm}};function wt(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ot(t){return{point:{x:t.pageX,y:t.pageY}}}const Em=t=>e=>Ui(e)&&t(e,Ot(e));function dt(t,e,n,i){return wt(t,e,Em(n),i)}const ir=(t,e)=>Math.abs(t-e);function Sm(t,e){const n=ir(t.x,e.x),i=ir(t.y,e.y);return Math.sqrt(n**2+i**2)}class Ja{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:r=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Rn(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,f=Sm(h.offset,{x:0,y:0})>=3;if(!d&&!f)return;const{point:m}=h,{timestamp:g}=L;this.history.push({...m,timestamp:g});const{onStart:v,onMove:y}=this.handlers;d||(v&&v(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,h)},this.handlePointerMove=(h,d)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=xn(d,this.transformPagePoint),x.update(this.updatePoint,!0)},this.handlePointerUp=(h,d)=>{this.end();const{onEnd:f,onSessionEnd:m,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Rn(h.type==="pointercancel"?this.lastMoveEventInfo:xn(d,this.transformPagePoint),this.history);this.startEvent&&f&&f(h,v),m&&m(h,v)},!Ui(e))return;this.dragSnapToOrigin=r,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const o=Ot(e),a=xn(o,this.transformPagePoint),{point:c}=a,{timestamp:l}=L;this.history=[{...c,timestamp:l}];const{onSessionStart:u}=n;u&&u(e,Rn(a,this.history)),this.removeListeners=Dt(dt(this.contextWindow,"pointermove",this.handlePointerMove),dt(this.contextWindow,"pointerup",this.handlePointerUp),dt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),be(this.updatePoint)}}function xn(t,e){return e?{point:e(t.point)}:t}function sr(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Rn({point:t},e){return{point:t,delta:sr(t,Za(e)),offset:sr(t,Im(e)),velocity:Pm(e,.1)}}function Im(t){return t[0]}function Za(t){return t[t.length-1]}function Pm(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=Za(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>oe(e)));)n--;if(!i)return{x:0,y:0};const r=ae(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Qa=1e-4,Am=1-Qa,Cm=1+Qa,ec=.01,xm=0-ec,Rm=0+ec;function z(t){return t.max-t.min}function km(t,e,n){return Math.abs(t-e)<=n}function rr(t,e,n,i=.5){t.origin=i,t.originPoint=R(e.min,e.max,t.origin),t.scale=z(n)/z(e),t.translate=R(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Am&&t.scale<=Cm||isNaN(t.scale))&&(t.scale=1),(t.translate>=xm&&t.translate<=Rm||isNaN(t.translate))&&(t.translate=0)}function ft(t,e,n,i){rr(t.x,e.x,n.x,i?i.originX:void 0),rr(t.y,e.y,n.y,i?i.originY:void 0)}function or(t,e,n){t.min=n.min+e.min,t.max=t.min+z(e)}function Dm(t,e,n){or(t.x,e.x,n.x),or(t.y,e.y,n.y)}function ar(t,e,n){t.min=e.min-n.min,t.max=t.min+z(e)}function pt(t,e,n){ar(t.x,e.x,n.x),ar(t.y,e.y,n.y)}function Om(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?R(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?R(n,t,i.max):Math.min(t,n)),t}function cr(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function Mm(t,{top:e,left:n,bottom:i,right:s}){return{x:cr(t.x,n,s),y:cr(t.y,e,i)}}function lr(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Lm(t,e){return{x:lr(t.x,e.x),y:lr(t.y,e.y)}}function Nm(t,e){let n=.5;const i=z(t),s=z(e);return s>i?n=Ze(e.min,e.max-i,t.min):i>s&&(n=Ze(t.min,t.max-s,e.min)),ue(0,1,n)}function Vm(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const si=.35;function jm(t=si){return t===!1?t=0:t===!0&&(t=si),{x:ur(t,"left","right"),y:ur(t,"top","bottom")}}function ur(t,e,n){return{min:hr(t,e),max:hr(t,n)}}function hr(t,e){return typeof t=="number"?t:t[e]||0}const dr=()=>({translate:0,scale:1,origin:0,originPoint:0}),$e=()=>({x:dr(),y:dr()}),fr=()=>({min:0,max:0}),D=()=>({x:fr(),y:fr()});function G(t){return[t("x"),t("y")]}function tc({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Um({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Fm(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function kn(t){return t===void 0||t===1}function ri({scale:t,scaleX:e,scaleY:n}){return!kn(t)||!kn(e)||!kn(n)}function xe(t){return ri(t)||nc(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function nc(t){return pr(t.x)||pr(t.y)}function pr(t){return t&&t!=="0%"}function sn(t,e,n){const i=t-n,s=e*i;return n+s}function mr(t,e,n,i,s){return s!==void 0&&(t=sn(t,s,i)),sn(t,n,i)+e}function oi(t,e=0,n=1,i,s){t.min=mr(t.min,e,n,i,s),t.max=mr(t.max,e,n,i,s)}function ic(t,{x:e,y:n}){oi(t.x,e.translate,e.scale,e.originPoint),oi(t.y,n.translate,n.scale,n.originPoint)}const gr=.999999999999,yr=1.0000000000001;function Bm(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let r,o;for(let a=0;a<s;a++){r=n[a],o=r.projectionDelta;const{visualElement:c}=r.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&We(t,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,ic(t,o)),i&&xe(r.latestValues)&&We(t,r.latestValues))}e.x<yr&&e.x>gr&&(e.x=1),e.y<yr&&e.y>gr&&(e.y=1)}function He(t,e){t.min=t.min+e,t.max=t.max+e}function vr(t,e,n,i,s=.5){const r=R(t.min,t.max,s);oi(t,e,n,r,i)}function We(t,e){vr(t.x,e.x,e.scaleX,e.scale,e.originX),vr(t.y,e.y,e.scaleY,e.scale,e.originY)}function sc(t,e){return tc(Fm(t.getBoundingClientRect(),e))}function $m(t,e,n){const i=sc(t,n),{scroll:s}=e;return s&&(He(i.x,s.offset.x),He(i.y,s.offset.y)),i}const rc=({current:t})=>t?t.ownerDocument.defaultView:null,Hm=new WeakMap;class Wm{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=D(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ot(u).point)},r=(u,h)=>{const{drag:d,dragPropagation:f,onDragStart:m}=this.getProps();if(d&&!f&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vf(d),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),G(v=>{let y=this.getAxisMotionValue(v).get()||0;if(Q.test(y)){const{projection:_}=this.visualElement;if(_&&_.layout){const T=_.layout.layoutBox[v];T&&(y=z(T)*(parseFloat(y)/100))}}this.originPoint[v]=y}),m&&x.postRender(()=>m(u,h)),Xn(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:d,dragDirectionLock:f,onDirectionLock:m,onDrag:g}=this.getProps();if(!d&&!this.openDragLock)return;const{offset:v}=h;if(f&&this.currentDirection===null){this.currentDirection=zm(v),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),g&&g(u,h)},a=(u,h)=>this.stop(u,h),c=()=>G(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:l}=this.getProps();this.panSession=new Ja(e,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,contextWindow:rc(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&x.postRender(()=>r(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!Vt(e,s,this.currentDirection))return;const r=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Om(o,this.constraints[e],this.elastic[e])),r.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,r=this.constraints;n&&Fe(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=Mm(s.layoutBox,n):this.constraints=!1,this.elastic=jm(i),r!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&G(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Vm(s.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Fe(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=$m(i,s.root,this.visualElement.getTransformPagePoint());let o=Lm(s.layout.layoutBox,r);if(n){const a=n(Um(o));this.hasMutatedConstraints=!!a,a&&(o=tc(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},l=G(u=>{if(!Vt(u,n,this.currentDirection))return;let h=c&&c[u]||{};o&&(h={min:0,max:0});const d=s?200:1e6,f=s?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:f,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(l).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Xn(this.visualElement,e),i.start(Ji(e,i,0,n,this.visualElement,!1))}stopAnimation(){G(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){G(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){G(n=>{const{drag:i}=this.getProps();if(!Vt(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[n];r.set(e[n]-R(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Fe(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};G(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const c=a.get();s[o]=Nm({min:c,max:c},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),G(o=>{if(!Vt(o,e,null))return;const a=this.getAxisMotionValue(o),{min:c,max:l}=this.constraints[o];a.set(R(c,l,s[o]))})}addListeners(){if(!this.visualElement.current)return;Hm.set(this.visualElement,this);const e=this.visualElement.current,n=dt(e,"pointerdown",c=>{const{drag:l,dragListener:u=!0}=this.getProps();l&&u&&this.start(c)}),i=()=>{const{dragConstraints:c}=this.getProps();Fe(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),x.read(i);const o=wt(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:l})=>{this.isDragging&&l&&(G(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=c[u].translate,h.set(h.get()+c[u].translate))}),this.visualElement.render())});return()=>{o(),n(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=si,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function Vt(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function zm(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class Km extends Ie{constructor(e){super(e),this.removeGroupControls=W,this.removeListeners=W,this.controls=new Wm(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||W}unmount(){this.removeGroupControls(),this.removeListeners()}}const _r=t=>(e,n)=>{t&&x.postRender(()=>t(e,n))};class Gm extends Ie{constructor(){super(...arguments),this.removePointerDownListener=W}onPointerDown(e){this.session=new Ja(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:rc(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:_r(e),onStart:_r(n),onMove:i,onEnd:(r,o)=>{delete this.session,s&&x.postRender(()=>s(r,o))}}}mount(){this.removePointerDownListener=dt(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Wt={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tr(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const st={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(b.test(t))t=parseFloat(t);else return t;const n=Tr(t,e.target.x),i=Tr(t,e.target.y);return`${n}% ${i}%`}},qm={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=we.parse(t);if(s.length>5)return i;const r=we.createTransformer(t),o=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,c=n.y.scale*e.y;s[0+o]/=a,s[1+o]/=c;const l=R(a,c,.5);return typeof s[2+o]=="number"&&(s[2+o]/=l),typeof s[3+o]=="number"&&(s[3+o]/=l),r(s)}};class Ym extends S.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=e;gf(Xm),r&&(n.group&&n.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Wt.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==r&&(r?o.promote():o.relegate()||x.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Pi.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function oc(t){const[e,n]=Rd(),i=S.useContext(Ho);return p.jsx(Ym,{...t,layoutGroup:i,switchLayoutGroup:S.useContext(Xo),isPresent:e,safeToRemove:n})}const Xm={borderRadius:{...st,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomLeftRadius:st,borderBottomRightRadius:st,boxShadow:qm};function Jm(t,e,n){const i=V(t)?t:Tt(t);return i.start(Ji("",i,e,n)),i.animation}function Zm(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Qm=(t,e)=>t.depth-e.depth;class eg{constructor(){this.children=[],this.isDirty=!1}add(e){Fi(this.children,e),this.isDirty=!0}remove(e){Bi(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Qm),this.isDirty=!1,this.children.forEach(e)}}function tg(t,e){const n=ee.now(),i=({timestamp:s})=>{const r=s-n;r>=e&&(be(i),t(r-e))};return x.read(i,!0),()=>be(i)}const ac=["TopLeft","TopRight","BottomLeft","BottomRight"],ng=ac.length,br=t=>typeof t=="string"?parseFloat(t):t,wr=t=>typeof t=="number"||b.test(t);function ig(t,e,n,i,s,r){s?(t.opacity=R(0,n.opacity!==void 0?n.opacity:1,sg(i)),t.opacityExit=R(e.opacity!==void 0?e.opacity:1,0,rg(i))):r&&(t.opacity=R(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<ng;o++){const a=`border${ac[o]}Radius`;let c=Er(e,a),l=Er(n,a);if(c===void 0&&l===void 0)continue;c||(c=0),l||(l=0),c===0||l===0||wr(c)===wr(l)?(t[a]=Math.max(R(br(c),br(l),i),0),(Q.test(l)||Q.test(c))&&(t[a]+="%")):t[a]=l}(e.rotate||n.rotate)&&(t.rotate=R(e.rotate||0,n.rotate||0,i))}function Er(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const sg=cc(0,.5,Pa),rg=cc(.5,.95,W);function cc(t,e,n){return i=>i<t?0:i>e?1:n(Ze(t,e,i))}function Sr(t,e){t.min=e.min,t.max=e.max}function K(t,e){Sr(t.x,e.x),Sr(t.y,e.y)}function Ir(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Pr(t,e,n,i,s){return t-=e,t=sn(t,1/n,i),s!==void 0&&(t=sn(t,1/s,i)),t}function og(t,e=0,n=1,i=.5,s,r=t,o=t){if(Q.test(e)&&(e=parseFloat(e),e=R(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=R(r.min,r.max,i);t===r&&(a-=e),t.min=Pr(t.min,e,n,a,s),t.max=Pr(t.max,e,n,a,s)}function Ar(t,e,[n,i,s],r,o){og(t,e[n],e[i],e[s],e.scale,r,o)}const ag=["x","scaleX","originX"],cg=["y","scaleY","originY"];function Cr(t,e,n,i){Ar(t.x,e,ag,n?n.x:void 0,i?i.x:void 0),Ar(t.y,e,cg,n?n.y:void 0,i?i.y:void 0)}function xr(t){return t.translate===0&&t.scale===1}function lc(t){return xr(t.x)&&xr(t.y)}function Rr(t,e){return t.min===e.min&&t.max===e.max}function lg(t,e){return Rr(t.x,e.x)&&Rr(t.y,e.y)}function kr(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function uc(t,e){return kr(t.x,e.x)&&kr(t.y,e.y)}function Dr(t){return z(t.x)/z(t.y)}function Or(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class ug{constructor(){this.members=[]}add(e){Fi(this.members,e),e.scheduleRender()}remove(e){if(Bi(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function hg(t,e,n){let i="";const s=t.x.translate/e.x,r=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((s||r||o)&&(i=`translate3d(${s}px, ${r}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:l,rotate:u,rotateX:h,rotateY:d,skewX:f,skewY:m}=n;l&&(i=`perspective(${l}px) ${i}`),u&&(i+=`rotate(${u}deg) `),h&&(i+=`rotateX(${h}deg) `),d&&(i+=`rotateY(${d}deg) `),f&&(i+=`skewX(${f}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,c=t.y.scale*e.y;return(a!==1||c!==1)&&(i+=`scale(${a}, ${c})`),i||"none"}const Re={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},lt=typeof window<"u"&&window.MotionDebug!==void 0,Dn=["","X","Y","Z"],dg={visibility:"hidden"},Mr=1e3;let fg=0;function On(t,e,n,i){const{latestValues:s}=e;s[t]&&(n[t]=s[t],e.setStaticValue(t,0),i&&(i[t]=0))}function hc(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=_a(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:r}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",x,!(s||r))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&hc(i)}function dc({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o={},a=e==null?void 0:e()){this.id=fg++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,lt&&(Re.totalNodes=Re.resolvedTargetDeltas=Re.recalculatedProjection=0),this.nodes.forEach(gg),this.nodes.forEach(bg),this.nodes.forEach(wg),this.nodes.forEach(yg),lt&&window.MotionDebug.record(Re)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new eg)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new $i),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const c=this.eventHandlers.get(o);c&&c.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Zm(o),this.instance=o;const{layoutId:c,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(l||c)&&(this.isLayoutDirty=!0),t){let h;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=tg(d,250),Wt.hasAnimatedSinceResize&&(Wt.hasAnimatedSinceResize=!1,this.nodes.forEach(Nr))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||l)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:d,hasRelativeTargetChanged:f,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||Ag,{onLayoutAnimationStart:v,onLayoutAnimationComplete:y}=u.getProps(),_=!this.targetLayout||!uc(this.targetLayout,m)||f,T=!d&&f;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||T||d&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,T);const P={...Ni(g,"layout"),onPlay:v,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P)}else d||Nr(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,be(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Eg),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lr);return}this.isUpdating||this.nodes.forEach(_g),this.isUpdating=!1,this.nodes.forEach(Tg),this.nodes.forEach(pg),this.nodes.forEach(mg),this.clearAllSnapshots();const a=ee.now();L.delta=ue(0,1e3/60,a-L.timestamp),L.timestamp=a,L.isProcessing=!0,En.update.process(L),En.preRender.process(L),En.render.process(L),L.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vg),this.sharedNodes.forEach(Sg)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,x.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){x.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=D(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const c=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!lc(this.projectionDelta),c=this.getTransformTemplate(),l=c?c(this.latestValues,""):void 0,u=l!==this.prevTransformTemplateValue;o&&(a||xe(this.latestValues)||u)&&(s(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return o&&(c=this.removeTransform(c)),Cg(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return D();const c=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(xg))){const{scroll:u}=this.root;u&&(He(c.x,u.offset.x),He(c.y,u.offset.y))}return c}removeElementScroll(o){var a;const c=D();if(K(c,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return c;for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:h,options:d}=u;u!==this.root&&h&&d.layoutScroll&&(h.wasRoot&&K(c,o),He(c.x,h.offset.x),He(c.y,h.offset.y))}return c}applyTransform(o,a=!1){const c=D();K(c,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&We(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),xe(u.latestValues)&&We(c,u.latestValues)}return xe(this.latestValues)&&We(c,this.latestValues),c}removeTransform(o){const a=D();K(a,o);for(let c=0;c<this.path.length;c++){const l=this.path[c];if(!l.instance||!xe(l.latestValues))continue;ri(l.latestValues)&&l.updateSnapshot();const u=D(),h=l.measurePageBox();K(u,h),Cr(a,l.latestValues,l.snapshot?l.snapshot.layoutBox:void 0,u)}return xe(this.latestValues)&&Cr(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==L.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==c;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:h,layoutId:d}=this.options;if(!(!this.layout||!(h||d))){if(this.resolvedRelativeTargetAt=L.timestamp,!this.targetDelta&&!this.relativeTarget){const f=this.getClosestProjectingParent();f&&f.layout&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=D(),this.relativeTargetOrigin=D(),pt(this.relativeTargetOrigin,this.layout.layoutBox,f.layout.layoutBox),K(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=D(),this.targetWithTransforms=D()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Dm(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):K(this.target,this.layout.layoutBox),ic(this.target,this.targetDelta)):K(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const f=this.getClosestProjectingParent();f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?(this.relativeParent=f,this.forceRelativeParentToResolveTarget(),this.relativeTarget=D(),this.relativeTargetOrigin=D(),pt(this.relativeTargetOrigin,this.target,f.target),K(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}lt&&Re.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ri(this.parent.latestValues)||nc(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),c=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(l=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===L.timestamp&&(l=!1),l)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;K(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;Bm(this.layoutCorrected,this.treeScale,this.path,c),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=D());const{target:m}=a;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ir(this.prevProjectionDelta.x,this.projectionDelta.x),Ir(this.prevProjectionDelta.y,this.projectionDelta.y)),ft(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!Or(this.projectionDelta.x,this.prevProjectionDelta.x)||!Or(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),lt&&Re.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=$e(),this.projectionDelta=$e(),this.projectionDeltaWithTransform=$e()}setAnimationOrigin(o,a=!1){const c=this.snapshot,l=c?c.latestValues:{},u={...this.latestValues},h=$e();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=D(),f=c?c.source:void 0,m=this.layout?this.layout.source:void 0,g=f!==m,v=this.getStack(),y=!v||v.members.length<=1,_=!!(g&&!y&&this.options.crossfade===!0&&!this.path.some(Pg));this.animationProgress=0;let T;this.mixTargetDelta=P=>{const E=P/1e3;Vr(h.x,o.x,E),Vr(h.y,o.y,E),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pt(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ig(this.relativeTarget,this.relativeTargetOrigin,d,E),T&&lg(this.relativeTarget,T)&&(this.isProjectionDirty=!1),T||(T=D()),K(T,this.relativeTarget)),g&&(this.animationValues=u,ig(u,l,this.latestValues,E,_,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(be(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=x.update(()=>{Wt.hasAnimatedSinceResize=!0,this.currentAnimation=Jm(0,Mr,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Mr),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:c,layout:l,latestValues:u}=o;if(!(!a||!c||!l)){if(this!==o&&this.layout&&l&&fc(this.options.animationType,this.layout.layoutBox,l.layoutBox)){c=this.target||D();const h=z(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+h;const d=z(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+d}K(a,c),We(a,u),ft(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ug),this.sharedNodes.get(o).add(a);const l=a.options.initialPromotionConfig;a.promote({transition:l?l.transition:void 0,preserveFollowOpacity:l&&l.shouldPreserveFollowOpacity?l.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:c}={}){const l=this.getStack();l&&l.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const l={};c.z&&On("z",o,l,this.animationValues);for(let u=0;u<Dn.length;u++)On(`rotate${Dn[u]}`,o,l,this.animationValues),On(`skew${Dn[u]}`,o,l,this.animationValues);o.render();for(const u in l)o.setStaticValue(u,l[u]),this.animationValues&&(this.animationValues[u]=l[u]);o.scheduleRender()}getProjectionStyles(o){var a,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return dg;const l={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,l.opacity="",l.pointerEvents=$t(o==null?void 0:o.pointerEvents)||"",l.transform=u?u(this.latestValues,""):"none",l;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const g={};return this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=$t(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!xe(this.latestValues)&&(g.transform=u?u({},""):"none",this.hasProjected=!1),g}const d=h.animationValues||h.latestValues;this.applyTransformsToTarget(),l.transform=hg(this.projectionDeltaWithTransform,this.treeScale,d),u&&(l.transform=u(d,l.transform));const{x:f,y:m}=this.projectionDelta;l.transformOrigin=`${f.origin*100}% ${m.origin*100}% 0`,h.animationValues?l.opacity=h===this?(c=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:l.opacity=h===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const g in Zt){if(d[g]===void 0)continue;const{correct:v,applyTo:y}=Zt[g],_=l.transform==="none"?d[g]:v(d[g],h);if(y){const T=y.length;for(let P=0;P<T;P++)l[y[P]]=_}else l[g]=_}return this.options.layoutId&&(l.pointerEvents=h===this?$t(o==null?void 0:o.pointerEvents)||"":"none"),l}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Lr),this.root.sharedNodes.clear()}}}function pg(t){t.updateLayout()}function mg(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:r}=t.options,o=n.source!==t.layout.source;r==="size"?G(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=z(d);d.min=i[h].min,d.max=d.min+f}):fc(r,n.layoutBox,i)&&G(h=>{const d=o?n.measuredBox[h]:n.layoutBox[h],f=z(i[h]);d.max=d.min+f,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[h].max=t.relativeTarget[h].min+f)});const a=$e();ft(a,i,n.layoutBox);const c=$e();o?ft(c,t.applyTransform(s,!0),n.measuredBox):ft(c,i,n.layoutBox);const l=!lc(a);let u=!1;if(!t.resumeFrom){const h=t.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:d,layout:f}=h;if(d&&f){const m=D();pt(m,n.layoutBox,d.layoutBox);const g=D();pt(g,i,f.layoutBox),uc(m,g)||(u=!0),h.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=m,t.relativeParent=h)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:c,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function gg(t){lt&&Re.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function yg(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function vg(t){t.clearSnapshot()}function Lr(t){t.clearMeasurements()}function _g(t){t.isLayoutDirty=!1}function Tg(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Nr(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function bg(t){t.resolveTargetDelta()}function wg(t){t.calcProjection()}function Eg(t){t.resetSkewAndRotation()}function Sg(t){t.removeLeadSnapshot()}function Vr(t,e,n){t.translate=R(e.translate,0,n),t.scale=R(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function jr(t,e,n,i){t.min=R(e.min,n.min,i),t.max=R(e.max,n.max,i)}function Ig(t,e,n,i){jr(t.x,e.x,n.x,i),jr(t.y,e.y,n.y,i)}function Pg(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Ag={duration:.45,ease:[.4,0,.1,1]},Ur=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Fr=Ur("applewebkit/")&&!Ur("chrome/")?Math.round:W;function Br(t){t.min=Fr(t.min),t.max=Fr(t.max)}function Cg(t){Br(t.x),Br(t.y)}function fc(t,e,n){return t==="position"||t==="preserve-aspect"&&!km(Dr(e),Dr(n),.2)}function xg(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const Rg=dc({attachResizeListener:(t,e)=>wt(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Mn={current:void 0},pc=dc({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Mn.current){const t=new Rg({});t.mount(window),t.setOptions({layoutScroll:!0}),Mn.current=t}return Mn.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),kg={pan:{Feature:Gm},drag:{Feature:Km,ProjectionNode:pc,MeasureLayout:oc}};function $r(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,r=i[s];r&&x.postRender(()=>r(e,Ot(e)))}class Dg extends Ie{mount(){const{current:e}=this.node;e&&(this.unmount=Df(e,n=>($r(this.node,n,"Start"),i=>$r(this.node,i,"End"))))}unmount(){}}class Og extends Ie{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dt(wt(this.node.current,"focus",()=>this.onFocus()),wt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Hr(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),r=i[s];r&&x.postRender(()=>r(e,Ot(e)))}class Mg extends Ie{mount(){const{current:e}=this.node;e&&(this.unmount=Nf(e,n=>(Hr(this.node,n,"Start"),(i,{success:s})=>Hr(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const ai=new WeakMap,Ln=new WeakMap,Lg=t=>{const e=ai.get(t.target);e&&e(t)},Ng=t=>{t.forEach(Lg)};function Vg({root:t,...e}){const n=t||document;Ln.has(n)||Ln.set(n,{});const i=Ln.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(Ng,{root:t,...e})),i[s]}function jg(t,e,n){const i=Vg(e);return ai.set(t,n),i.observe(t),()=>{ai.delete(t),i.unobserve(t)}}const Ug={some:0,all:1};class Fg extends Ie{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:r}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Ug[s]},a=c=>{const{isIntersecting:l}=c;if(this.isInView===l||(this.isInView=l,r&&!l&&this.hasEnteredView))return;l&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",l);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),d=l?u:h;d&&d(c)};return jg(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Bg(e,n))&&this.startObserver()}unmount(){}}function Bg({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const $g={inView:{Feature:Fg},tap:{Feature:Mg},focus:{Feature:Og},hover:{Feature:Dg}},Hg={layout:{ProjectionNode:pc,MeasureLayout:oc}},ci={current:null},mc={current:!1};function Wg(){if(mc.current=!0,!!bi)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ci.current=t.matches;t.addListener(e),e()}else ci.current=!1}const zg=[...Fa,N,we],Kg=t=>zg.find(Ua(t)),Wr=new WeakMap;function Gg(t,e,n){for(const i in e){const s=e[i],r=n[i];if(V(s))t.addValue(i,s);else if(V(r))t.addValue(i,Tt(s,{owner:t}));else if(r!==s)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=t.getStaticValue(i);t.addValue(i,Tt(o!==void 0?o:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const zr=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qg{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=qi,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=ee.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,x.render(this.render,!1,!0))};const{latestValues:c,renderState:l,onUpdate:u}=o;this.onUpdate=u,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!r,this.isControllingVariants=hn(n),this.isVariantNode=qo(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:h,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in d){const m=d[f];c[f]!==void 0&&V(m)&&m.set(c[f],!1)}}mount(e){this.current=e,Wr.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),mc.current||Wg(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ci.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Wr.delete(this.current),this.projection&&this.projection.unmount(),be(this.notifyUpdate),be(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Ne.has(e),s=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&x.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{s(),r(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Qe){const n=Qe[e];if(!n)continue;const{isEnabled:i,Feature:s}=n;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const r=this.features[e];r.isMounted?r.update():(r.mount(),r.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):D()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<zr.length;i++){const s=zr[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r="on"+s,o=e[r];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=Gg(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Tt(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Va(s)||Ca(s))?s=parseFloat(s):!Kg(s)&&we.test(n)&&(s=Ma(e,n)),this.setBaseTarget(e,V(s)?s.get():s)),V(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const o=Ci(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(s=o[e])}if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!V(r)?r:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new $i),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class gc extends qg{constructor(){super(...arguments),this.KeyframeResolver=Ba}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;V(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Yg(t){return window.getComputedStyle(t)}class Xg extends gc{constructor(){super(...arguments),this.type="html",this.renderInstance=ia}readValueFromInstance(e,n){if(Ne.has(n)){const i=Gi(n);return i&&i.default||0}else{const i=Yg(e),s=(ea(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return sc(e,n)}build(e,n,i){ki(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Li(e,n,i)}}class Jg extends gc{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=D}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ne.has(n)){const i=Gi(n);return i&&i.default||0}return n=sa.has(n)?n:Ii(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return aa(e,n,i)}build(e,n,i){Di(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,s){ra(e,n,i,s)}mount(e){this.isSVGTag=Mi(e.tagName),super.mount(e)}}const Zg=(t,e)=>Ai(t)?new Jg(e):new Xg(e,{allowProjection:t!==S.Fragment}),Qg=If({...wm,...$g,...kg,...Hg},Zg),je=Ud(Qg);function ey(){return p.jsxs("footer",{className:"custom-footer bg-gray-900 text-white py-12",children:[p.jsx("div",{className:"spacer h-24 bg-transparent"}),p.jsxs("div",{className:"custom-footer-inner container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8",children:[p.jsxs(je.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5},className:"custom-footer-section space-y-4",children:[p.jsx("h3",{className:"custom-footer-title text-lg font-semibold text-blue-400",children:"About Azure Shores"}),p.jsx("p",{className:"custom-footer-text text-sm text-gray-400 leading-relaxed",children:"Experience luxury redefined at our exclusive beachfront resort. Immerse yourself in unparalleled comfort and service."})]}),p.jsxs(je.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.2},className:"custom-footer-section space-y-4",children:[p.jsx("h3",{className:"custom-footer-title text-lg font-semibold text-blue-400",children:"Quick Links"}),p.jsxs("ul",{className:"custom-footer-list space-y-2 text-sm text-gray-400 leading-relaxed",children:[p.jsx("li",{children:p.jsx("a",{href:"/",className:"custom-footer-link hover:text-blue-400 transition-colors",children:"Home"})}),p.jsx("li",{children:p.jsx("a",{href:"/rooms",className:"custom-footer-link hover:text-blue-400 transition-colors",children:"Rooms"})}),p.jsx("li",{children:p.jsx("a",{href:"/offers",className:"custom-footer-link hover:text-blue-400 transition-colors",children:"Offers"})}),p.jsx("li",{children:p.jsx("a",{href:"/contact",className:"custom-footer-link hover:text-blue-400 transition-colors",children:"Contact"})}),p.jsx("li",{children:p.jsx("a",{href:"/signup",className:"custom-footer-link hover:text-blue-400 transition-colors",children:"Signup"})}),p.jsx("li",{children:p.jsx("a",{href:"/login",className:"custom-footer-link hover:text-blue-400 transition-colors",children:"Login"})})]})]}),p.jsxs(je.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.4},className:"custom-footer-section space-y-4",children:[p.jsx("h3",{className:"custom-footer-title text-lg font-semibold text-blue-400",children:"Contact Us"}),p.jsxs("ul",{className:"custom-footer-list space-y-2 text-sm text-gray-400 leading-relaxed",children:[p.jsx("li",{children:"📍 123 Paradise Beach Road"}),p.jsx("li",{children:"📞 +237 683-013-896"}),p.jsx("li",{children:"📧 info@azureshores.com"})]})]}),p.jsxs(je.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.6},className:"custom-footer-section space-y-4",children:[p.jsx("h3",{className:"custom-footer-title text-lg font-semibold text-blue-400",children:"Stay Updated"}),p.jsx("p",{className:"custom-footer-text text-sm text-gray-400 mb-4 leading-relaxed",children:"Subscribe to our newsletter for exclusive offers and updates."}),p.jsxs("form",{className:"custom-footer-form space-y-4",children:[p.jsx("input",{type:"email",placeholder:"Enter your email",className:"custom-footer-input w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors text-sm"}),p.jsx("button",{type:"submit",className:"custom-footer-button w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors text-sm",children:"Subscribe"})]})]})]}),p.jsx("div",{className:"custom-footer-legal container mx-auto px-4 mt-8",style:{textAlign:"center",padding:"25px 0",borderTop:"1px solid rgba(255, 255, 255, 0.2)",background:"linear-gradient(to right, #1a1a2e, #16213e)"},children:p.jsx(je.ul,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.8},className:"custom-footer-legal-list",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px",padding:"15px 0",listStyle:"none"},children:[{label:"Terms of Service",link:"/terms"},{label:"Privacy Policy",link:"/privacy"},{label:"Security Terms",link:"/security"}].map((t,e)=>p.jsxs("li",{style:{padding:"8px 15px"},children:[" ",p.jsx("a",{href:t.link,className:"custom-footer-legal-link",style:{fontSize:"1rem",fontWeight:"500",color:"rgba(255, 255, 255, 0.8)",textDecoration:"none",position:"relative",transition:"color 0.3s ease-in-out",padding:"10px 15px",display:"inline-block"},onMouseOver:n=>n.target.style.color="#4f9cf9",onMouseOut:n=>n.target.style.color="rgba(255, 255, 255, 0.8)",children:t.label})]},e))})}),p.jsx(je.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:1},className:"custom-footer-copyright mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500",children:p.jsx("p",{children:"© 2025 Azure Shores Resort. All rights reserved."})})]})}const ty=$.lazy(()=>H(()=>import("./HomePage-CnzWFxGj.js"),__vite__mapDeps([0,1,2,3]))),ny=$.lazy(()=>H(()=>import("./RoomsPage-BvzEvU_0.js"),__vite__mapDeps([4,1,5]))),iy=$.lazy(()=>H(()=>import("./RoomDetailPage-kbe6_SZ7.js"),__vite__mapDeps([6,1,2,7]))),sy=$.lazy(()=>H(()=>import("./BookingPage-ocZznAME.js"),__vite__mapDeps([8,1,2,9]))),ry=$.lazy(()=>H(()=>import("./BookingConfirmationPage-BdrvOTpV.js"),__vite__mapDeps([10,1,2,11]))),oy=$.lazy(()=>H(()=>import("./OffersPage-BiZLC1Bq.js"),__vite__mapDeps([12,1,13]))),ay=$.lazy(()=>H(()=>import("./ContactPage-CX71vFJB.js"),__vite__mapDeps([14,1]))),cy=$.lazy(()=>H(()=>import("./LoginPage-COyCYXyI.js"),__vite__mapDeps([15,1,2,16]))),ly=$.lazy(()=>H(()=>import("./SignupPage-JJG2X4jm.js"),__vite__mapDeps([17,1,2,18]))),uy=$.lazy(()=>H(()=>import("./ProfilePage-CPaBHT8a.js"),__vite__mapDeps([19,1,2,20]))),hy=$.lazy(()=>H(()=>import("./NotFoundPage-BEGVFwsU.js"),__vite__mapDeps([21,1]))),dy=$.lazy(()=>H(()=>import("./Terms-SGFSUjO4.js"),__vite__mapDeps([22,1]))),fy=$.lazy(()=>H(()=>import("./Privacy-Bw737eS8.js"),__vite__mapDeps([23,1]))),py=$.lazy(()=>H(()=>import("./Security-CfCBfJKh.js"),__vite__mapDeps([24,1])));function my(){return p.jsxs(p.Fragment,{children:[p.jsx(Dc,{}),p.jsx(S.Suspense,{fallback:p.jsx("div",{children:"Loading..."}),children:p.jsxs(wc,{children:[p.jsx(B,{path:"/",element:p.jsx(ty,{})}),p.jsx(B,{path:"/rooms",element:p.jsx(ny,{})}),p.jsx(B,{path:"/rooms/:id",element:p.jsx(iy,{})}),p.jsx(B,{path:"/booking",element:p.jsx(sy,{})}),p.jsx(B,{path:"/booking-confirmation",element:p.jsx(ry,{})}),p.jsx(B,{path:"/offers",element:p.jsx(oy,{})}),p.jsx(B,{path:"/contact",element:p.jsx(ay,{})}),p.jsx(B,{path:"/signup",element:p.jsx(ly,{})}),p.jsx(B,{path:"/login",element:p.jsx(cy,{})}),p.jsx(B,{path:"/terms",element:p.jsx(dy,{})}),p.jsx(B,{path:"/privacy",element:p.jsx(fy,{})}),p.jsx(B,{path:"/security",element:p.jsx(py,{})}),p.jsx(B,{path:"/profile",element:p.jsx(Cd,{children:p.jsx(uy,{})})}),p.jsx(B,{path:"*",element:p.jsx(hy,{})})]})}),p.jsx(ey,{})]})}const gy=document.getElementById("root"),yy=Nn.createRoot(gy);yy.render(p.jsxs(Ec,{children:[p.jsx(my,{})," "]}));export{Ad as a,by as c,p as j,je as m,Sy as o,wy as s,Ey as u};
