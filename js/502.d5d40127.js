"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[502],{5502:function(t,e,n){n.r(e),n.d(e,{default:function(){return Md}});var i=n(3396),r=n(9242),s=n(7139);const o=t=>((0,i.dD)("data-v-c05c4806"),t=t(),(0,i.Cn)(),t),a={id:"contact"},l={class:"inner"},c=o((()=>(0,i._)("h2",null,"REQUIREMENT",-1))),u=o((()=>(0,i._)("h3",null,"어떤 프로젝트를 같이 진행해볼까요?",-1))),h={class:"form_box"},f={class:"row"},d=o((()=>(0,i._)("label",{for:"user-name"},"성함",-1))),p={key:0,class:"error"},g=o((()=>(0,i._)("label",{for:"user-name"},"이메일",-1))),m={key:0,class:"error"},y={class:"row full"},v={class:"full"},w=o((()=>(0,i._)("label",{for:"user-phone"},"연락처",-1))),E={key:0,class:"error"},_={class:"row full"},b={class:"textarea_box"},T=o((()=>(0,i._)("label",{for:"user-project"},"프로젝트 내용",-1))),I={key:0,class:"error"},A=o((()=>(0,i._)("button",{type:"submit",class:"btn-send"},"보내기",-1)));function C(t,e,n,o,C,S){return(0,i.wg)(),(0,i.iD)("section",a,[(0,i._)("div",l,[c,u,(0,i._)("div",h,[(0,i._)("form",{onSubmit:e[8]||(e[8]=(0,r.iM)(((...t)=>o.submitForm&&o.submitForm(...t)),["prevent"]))},[(0,i._)("div",f,[(0,i._)("div",null,[d,(0,i.wy)((0,i._)("input",{type:"text",id:"user-name","onUpdate:modelValue":e[0]||(e[0]=t=>o.name=t),ref:"nameInput",onInput:e[1]||(e[1]=(...t)=>o.validateName&&o.validateName(...t)),placeholder:"이름을 입력해주세요."},null,544),[[r.nr,o.name]]),o.nameError?((0,i.wg)(),(0,i.iD)("span",p,(0,s.zw)(o.nameError),1)):(0,i.kq)("",!0)]),(0,i._)("div",null,[g,(0,i.wy)((0,i._)("input",{type:"email",id:"user-email","onUpdate:modelValue":e[2]||(e[2]=t=>o.email=t),ref:"emaiInput",onInput:e[3]||(e[3]=(...t)=>o.validateEmail&&o.validateEmail(...t)),placeholder:"이메일을 입력해주세요."},null,544),[[r.nr,o.email]]),o.emailError?((0,i.wg)(),(0,i.iD)("span",m,(0,s.zw)(o.emailError),1)):(0,i.kq)("",!0)])]),(0,i._)("div",y,[(0,i._)("div",v,[w,(0,i.wy)((0,i._)("input",{type:"tel",id:"user-phone","onUpdate:modelValue":e[4]||(e[4]=t=>o.phoneNumber=t),ref:"phoneInput",onInput:e[5]||(e[5]=(...t)=>o.validatePhoneNumber&&o.validatePhoneNumber(...t)),placeholder:"연락처를 입력해주세요.",maxlength:"13"},null,544),[[r.nr,o.phoneNumber]]),o.phoneError?((0,i.wg)(),(0,i.iD)("span",E,(0,s.zw)(o.phoneError),1)):(0,i.kq)("",!0)])]),(0,i._)("div",_,[(0,i._)("div",b,[T,(0,i.wy)((0,i._)("textarea",{id:"user-project","onUpdate:modelValue":e[6]||(e[6]=t=>o.projectName=t),ref:"projectInput",onInput:e[7]||(e[7]=(...t)=>o.validateTextarea&&o.validateTextarea(...t)),placeholder:"프로젝트 내용을 입력해주세요."},"\r\n                      ",544),[[r.nr,o.projectName]]),o.projectError?((0,i.wg)(),(0,i.iD)("span",I,(0,s.zw)(o.projectError),1)):(0,i.kq)("",!0)])]),A],32)])])])}var S=n(4870);n(7658),n(1703),n(2801);
/**
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
 */
const D=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},N=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(1023&l))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,c=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(h=64)),i.push(n[c],n[u],n[h],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,l=a?n[t.charAt(r)]:64;++r;const c=r<t.length,u=c?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==l||null==u)throw new R;const h=e<<2|o>>4;if(i.push(h),64!==l){const t=o<<4&240|l>>2;if(i.push(t),64!==u){const t=l<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O=function(t){const e=D(t);return k.encodeByteArray(e,!0)},P=function(t){return O(t).replace(/\./g,"")},L=function(t){try{return k.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function x(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const M=()=>x().__FIREBASE_DEFAULTS__,V=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_API_KEY:'"AIzaSyDTV5FH25uhufL7TyVnKqK9LRS5Yn26cE4",',VUE_APP_APP_ID:'"1:1017734536453:web:6a744311c6fb4abf6a2b6c",',VUE_APP_APP_MEASUREMENTID:'"G-YNK4MYE5H9",',VUE_APP_AUTH_DOMAIN:'"protfilo2023.firebaseapp.com",',VUE_APP_DATABASE_URL:'"https://protfilo2023-default-rtdb.firebaseio.com",',VUE_APP_MESSAGING_SENDER_ID:'"1017734536453",',VUE_APP_PROJECT_ID:'"protfilo2023",',VUE_APP_STORAGE_BUCKET:'"protfilo2023.appspot.com",',BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},U=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&L(t[1]);return e&&JSON.parse(e)},F=()=>{try{return M()||V()||U()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},B=t=>{var e,n;return null===(n=null===(e=F())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},j=t=>{const e=B(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},$=()=>{var t;return null===(t=F())||void 0===t?void 0:t.config};
/**
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
 */
class H{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function z(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[P(JSON.stringify(n)),P(JSON.stringify(o)),a].join(".")}
/**
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
 */function K(){try{return"object"===typeof indexedDB}catch(t){return!1}}function q(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
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
 */
const G="FirebaseError";class Q extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=G,Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,W.prototype.create)}}class W{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?X(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new Q(i,o,n);return a}}function X(t,e){return t.replace(Y,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const Y=/\{\$([^}]+)}/g;
/**
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
 */function J(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(Z(n)&&Z(s)){if(!J(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Z(t){return null!==t&&"object"===typeof t}
/**
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
 */
/**
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
 */
function tt(t){return t&&t._delegate?t._delegate:t}class et{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const nt="[DEFAULT]";
/**
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
 */class it{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new H;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(st(t))try{this.getOrInitializeService({instanceIdentifier:nt})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=nt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=nt){return this.instances.has(t)}getOptions(t=nt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:rt(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=nt){return this.component?this.component.multipleInstances?t:nt:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function rt(t){return t===nt?void 0:t}function st(t){return"EAGER"===t.instantiationMode}
/**
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
 */class ot{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new it(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const at=[];var lt;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(lt||(lt={}));const ct={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},ut=lt.INFO,ht={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},ft=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=ht[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class dt{constructor(t){this.name=t,this._logLevel=ut,this._logHandler=ft,this._userLogHandler=null,at.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?ct[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const pt=(t,e)=>e.some((e=>t instanceof e));let gt,mt;function yt(){return gt||(gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vt(){return mt||(mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wt=new WeakMap,Et=new WeakMap,_t=new WeakMap,bt=new WeakMap,Tt=new WeakMap;function It(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(kt(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&wt.set(e,t)})).catch((()=>{})),Tt.set(e,t),e}function At(t){if(Et.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));Et.set(t,e)}let Ct={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Et.get(t);if("objectStoreNames"===e)return t.objectStoreNames||_t.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function St(t){Ct=t(Ct)}function Dt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?vt().includes(t)?function(...e){return t.apply(Rt(this),e),kt(wt.get(this))}:function(...e){return kt(t.apply(Rt(this),e))}:function(e,...n){const i=t.call(Rt(this),e,...n);return _t.set(i,e.sort?e.sort():[e]),kt(i)}}function Nt(t){return"function"===typeof t?Dt(t):(t instanceof IDBTransaction&&At(t),pt(t,yt())?new Proxy(t,Ct):t)}function kt(t){if(t instanceof IDBRequest)return It(t);if(bt.has(t))return bt.get(t);const e=Nt(t);return e!==t&&(bt.set(t,e),Tt.set(e,t)),e}const Rt=t=>Tt.get(t);function Ot(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=kt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(kt(o.result),t.oldVersion,t.newVersion,kt(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Pt=["get","getKey","getAll","getAllKeys","count"],Lt=["put","add","delete","clear"],xt=new Map;function Mt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(xt.get(e))return xt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Lt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Pt.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return xt.set(e,s),s}St((t=>({...t,get:(e,n,i)=>Mt(e,n)||t.get(e,n,i),has:(e,n)=>!!Mt(e,n)||t.has(e,n)})));
/**
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
 */
class Vt{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(Ut(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function Ut(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const Ft="@firebase/app",Bt="0.9.15",jt=new dt("@firebase/app"),$t="@firebase/app-compat",Ht="@firebase/analytics-compat",zt="@firebase/analytics",Kt="@firebase/app-check-compat",qt="@firebase/app-check",Gt="@firebase/auth",Qt="@firebase/auth-compat",Wt="@firebase/database",Xt="@firebase/database-compat",Yt="@firebase/functions",Jt="@firebase/functions-compat",Zt="@firebase/installations",te="@firebase/installations-compat",ee="@firebase/messaging",ne="@firebase/messaging-compat",ie="@firebase/performance",re="@firebase/performance-compat",se="@firebase/remote-config",oe="@firebase/remote-config-compat",ae="@firebase/storage",le="@firebase/storage-compat",ce="@firebase/firestore",ue="@firebase/firestore-compat",he="firebase",fe="10.1.0",de="[DEFAULT]",pe={[Ft]:"fire-core",[$t]:"fire-core-compat",[zt]:"fire-analytics",[Ht]:"fire-analytics-compat",[qt]:"fire-app-check",[Kt]:"fire-app-check-compat",[Gt]:"fire-auth",[Qt]:"fire-auth-compat",[Wt]:"fire-rtdb",[Xt]:"fire-rtdb-compat",[Yt]:"fire-fn",[Jt]:"fire-fn-compat",[Zt]:"fire-iid",[te]:"fire-iid-compat",[ee]:"fire-fcm",[ne]:"fire-fcm-compat",[ie]:"fire-perf",[re]:"fire-perf-compat",[se]:"fire-rc",[oe]:"fire-rc-compat",[ae]:"fire-gcs",[le]:"fire-gcs-compat",[ce]:"fire-fst",[ue]:"fire-fst-compat","fire-js":"fire-js",[he]:"fire-js-all"},ge=new Map,me=new Map;function ye(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ve(t){const e=t.name;if(me.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;me.set(e,t);for(const n of ge.values())ye(n,t);return!0}function we(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const Ee={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_e=new W("app","Firebase",Ee);
/**
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
 */
class be{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new et("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _e.create("app-deleted",{appName:this._name})}}
/**
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
 */const Te=fe;function Ie(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:de,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!==typeof r||!r)throw _e.create("bad-app-name",{appName:String(r)});if(n||(n=$()),!n)throw _e.create("no-options");const s=ge.get(r);if(s){if(J(n,s.options)&&J(i,s.config))return s;throw _e.create("duplicate-app",{appName:r})}const o=new ot(r);for(const l of me.values())o.addComponent(l);const a=new be(n,i,o);return ge.set(r,a),a}function Ae(t=de){const e=ge.get(t);if(!e&&t===de&&$())return Ie();if(!e)throw _e.create("no-app",{appName:t});return e}function Ce(t,e,n){var i;let r=null!==(i=pe[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void jt.warn(t.join(" "))}ve(new et(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
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
 */
const Se="firebase-heartbeat-database",De=1,Ne="firebase-heartbeat-store";let ke=null;function Re(){return ke||(ke=Ot(Se,De,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ne)}}}).catch((t=>{throw _e.create("idb-open",{originalErrorMessage:t.message})}))),ke}async function Oe(t){try{const e=await Re(),n=await e.transaction(Ne).objectStore(Ne).get(Le(t));return n}catch(e){if(e instanceof Q)jt.warn(e.message);else{const t=_e.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});jt.warn(t.message)}}}async function Pe(t,e){try{const n=await Re(),i=n.transaction(Ne,"readwrite"),r=i.objectStore(Ne);await r.put(e,Le(t)),await i.done}catch(n){if(n instanceof Q)jt.warn(n.message);else{const t=_e.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});jt.warn(t.message)}}}function Le(t){return`${t.name}!${t.options.appId}`}
/**
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
 */const xe=1024,Me=2592e6;class Ve{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Be(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Ue();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Me})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ue(),{heartbeatsToSend:e,unsentEntries:n}=Fe(this._heartbeatsCache.heartbeats),i=P(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ue(){const t=new Date;return t.toISOString().substring(0,10)}function Fe(t,e=xe){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),je(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),je(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Be{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!K()&&q().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Oe(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Pe(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function je(t){return P(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */function $e(t){ve(new et("platform-logger",(t=>new Vt(t)),"PRIVATE")),ve(new et("heartbeat",(t=>new Ve(t)),"PRIVATE")),Ce(Ft,Bt,t),Ce(Ft,Bt,"esm2017"),Ce("fire-js","")}$e("");var He="firebase",ze="10.1.0";
/**
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
 */
Ce(He,ze,"app");n(8675),n(3408),n(4590),n(3462),n(1439),n(7585),n(5315);var Ke,qe="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},Ge={},Qe=Qe||{},We=qe||self;function Xe(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function Ye(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function Je(t){return Object.prototype.hasOwnProperty.call(t,Ze)&&t[Ze]||(t[Ze]=++tn)}var Ze="closure_uid_"+(1e9*Math.random()>>>0),tn=0;function en(t,e,n){return t.call.apply(t.bind,arguments)}function nn(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function rn(t,e,n){return rn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?en:nn,rn.apply(null,arguments)}function sn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function on(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function an(){this.s=this.s,this.o=this.o}var ln=0;an.prototype.s=!1,an.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==ln)||Je(this)},an.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const cn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function un(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function hn(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(Xe(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function fn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}fn.prototype.h=function(){this.defaultPrevented=!0};var dn=function(){if(!We.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{We.addEventListener("test",(()=>{}),e),We.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function pn(t){return/^[\s\xa0]*$/.test(t)}function gn(){var t=We.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return-1!=gn().indexOf(t)}function yn(t){return yn[" "](t),t}function vn(t,e){var n=ro;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}yn[" "]=function(){};var wn,En,_n=mn("Opera"),bn=mn("Trident")||mn("MSIE"),Tn=mn("Edge"),In=Tn||bn,An=mn("Gecko")&&!(-1!=gn().toLowerCase().indexOf("webkit")&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),Cn=-1!=gn().toLowerCase().indexOf("webkit")&&!mn("Edge");function Sn(){var t=We.document;return t?t.documentMode:void 0}t:{var Dn="",Nn=function(){var t=gn();return An?/rv:([^\);]+)(\)|;)/.exec(t):Tn?/Edge\/([\d\.]+)/.exec(t):bn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Cn?/WebKit\/(\S+)/.exec(t):_n?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Nn&&(Dn=Nn?Nn[1]:""),bn){var kn=Sn();if(null!=kn&&kn>parseFloat(Dn)){wn=String(kn);break t}}wn=Dn}if(We.document&&bn){var Rn=Sn();En=Rn||(parseInt(wn,10)||void 0)}else En=void 0;var On=En;function Pn(t,e){if(fn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(An){t:{try{yn(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Ln[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pn.$.h.call(this)}}on(Pn,fn);var Ln={2:"touch",3:"pen",4:"mouse"};Pn.prototype.h=function(){Pn.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),Mn=0;function Vn(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Mn,this.fa=this.ia=!1}function Un(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Fn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Bn(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function jn(t){const e={};for(const n in t)e[n]=t[n];return e}const $n="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hn(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<$n.length;e++)n=$n[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function zn(t){this.src=t,this.g={},this.h=0}function Kn(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=cn(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Un(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function qn(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}zn.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qn(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Vn(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};var Gn="closure_lm_"+(1e6*Math.random()|0),Qn={};function Wn(t,e,n,i,r){if(i&&i.once)return Jn(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Wn(t,e[s],n,i,r);return null}return n=si(n),t&&t[xn]?t.O(e,n,Ye(i)?!!i.capture:!!i,r):Xn(t,e,n,!1,i,r)}function Xn(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Ye(r)?!!r.capture:!!r,a=ii(t);if(a||(t[Gn]=a=new zn(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Yn(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)dn||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(ei(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function Yn(){function t(n){return e.call(t.src,t.listener,n)}const e=ni;return t}function Jn(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jn(t,e[s],n,i,r);return null}return n=si(n),t&&t[xn]?t.P(e,n,Ye(i)?!!i.capture:!!i,r):Xn(t,e,n,!0,i,r)}function Zn(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Zn(t,e[s],n,i,r);else i=Ye(i)?!!i.capture:!!i,n=si(n),t&&t[xn]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qn(s,n,i,r),-1<n&&(Un(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=ii(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qn(e,n,i,r)),(n=-1<t?e[t]:null)&&ti(n))}function ti(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[xn])Kn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(ei(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=ii(e))?(Kn(n,t),0==n.h&&(n.src=null,e[Gn]=null)):Un(t)}}}function ei(t){return t in Qn?Qn[t]:Qn[t]="on"+t}function ni(t,e){if(t.fa)t=!0;else{e=new Pn(e,this);var n=t.listener,i=t.la||t.src;t.ia&&ti(t),t=n.call(i,e)}return t}function ii(t){return t=t[Gn],t instanceof zn?t:null}var ri="__closure_events_fn_"+(1e9*Math.random()>>>0);function si(t){return"function"===typeof t?t:(t[ri]||(t[ri]=function(e){return t.handleEvent(e)}),t[ri])}function oi(){an.call(this),this.i=new zn(this),this.S=this,this.J=null}function ai(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"===typeof e)e=new fn(e,t);else if(e instanceof fn)e.target=e.target||t;else{var r=e;e=new fn(i,t),Hn(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=li(o,i,!0,e)&&r}if(o=e.g=t,r=li(o,i,!0,e)&&r,r=li(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=li(o,i,!1,e)&&r}function li(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Kn(t.i,o),r=!1!==a.call(l,i)&&r}}return r&&!i.defaultPrevented}on(oi,an),oi.prototype[xn]=!0,oi.prototype.removeEventListener=function(t,e,n,i){Zn(this,t,e,n,i)},oi.prototype.N=function(){if(oi.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Un(n[i]);delete e.g[t],e.h--}}this.J=null},oi.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},oi.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var ci=We.JSON.stringify;class ui{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function hi(){var t=wi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fi{constructor(){this.h=this.g=null}add(t,e){const n=di.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var di=new ui((()=>new pi),(t=>t.reset()));class pi{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function gi(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function mi(t){We.setTimeout((()=>{throw t}),0)}let yi,vi=!1,wi=new fi,Ei=()=>{const t=We.Promise.resolve(void 0);yi=()=>{t.then(_i)}};var _i=()=>{for(var t;t=hi();){try{t.h.call(t.g)}catch(n){mi(n)}var e=di;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}vi=!1};function bi(t,e){oi.call(this),this.h=t||1,this.g=e||We,this.j=rn(this.qb,this),this.l=Date.now()}function Ti(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function Ii(t,e,n){if("function"===typeof t)n&&(t=rn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=rn(t.handleEvent,t)}return 2147483647<Number(e)?-1:We.setTimeout(t,e||0)}function Ai(t){t.g=Ii((()=>{t.g=null,t.i&&(t.i=!1,Ai(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}on(bi,oi),Ke=bi.prototype,Ke.ga=!1,Ke.T=null,Ke.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ai(this,"tick"),this.ga&&(Ti(this),this.start()))}},Ke.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ke.N=function(){bi.$.N.call(this),Ti(this),delete this.g};class Ci extends an{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ai(this)}N(){super.N(),this.g&&(We.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(t){an.call(this),this.h=t,this.g={}}on(Si,an);var Di=[];function Ni(t,e,n,i){Array.isArray(n)||(n&&(Di[0]=n.toString()),n=Di);for(var r=0;r<n.length;r++){var s=Wn(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ki(t){Fn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ti(t)}),t),t.g={}}function Ri(){this.g=!0}function Oi(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Pi(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Li(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Mi(t,n)+(i?" "+i:"")}))}function xi(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Mi(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return ci(n)}catch(a){return e}}Si.prototype.N=function(){Si.$.N.call(this),ki(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ri.prototype.Ea=function(){this.g=!1},Ri.prototype.info=function(){};var Vi={},Ui=null;function Fi(){return Ui=Ui||new oi}function Bi(t){fn.call(this,Vi.Ta,t)}function ji(t){const e=Fi();ai(e,new Bi(e))}function $i(t,e){fn.call(this,Vi.STAT_EVENT,t),this.stat=e}function Hi(t){const e=Fi();ai(e,new $i(e,t))}function zi(t,e){fn.call(this,Vi.Ua,t),this.size=e}function Ki(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return We.setTimeout((function(){t()}),e)}Vi.Ta="serverreachability",on(Bi,fn),Vi.STAT_EVENT="statevent",on($i,fn),Vi.Ua="timingevent",on(zi,fn);var qi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qi(){}function Wi(t){return t.h||(t.h=t.i())}function Xi(){}Qi.prototype.h=null;var Yi,Ji={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Zi(){fn.call(this,"d")}function tr(){fn.call(this,"c")}function er(){}function nr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Si(this),this.P=rr,t=In?125:void 0,this.V=new bi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ir}function ir(){this.i=null,this.g="",this.h=!1}on(Zi,fn),on(tr,fn),on(er,Qi),er.prototype.g=function(){return new XMLHttpRequest},er.prototype.i=function(){return{}},Yi=new er;var rr=45e3,sr={},or={};function ar(t,e,n){t.L=1,t.v=Nr(Ir(e)),t.s=n,t.S=!0,lr(t,null)}function lr(t,e){t.G=Date.now(),fr(t),t.A=Ir(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),$r(n.i,"t",i),t.C=0,n=t.l.J,t.h=new ir,t.g=Gs(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Ci(rn(t.Pa,t,t.g),t.O)),Ni(t.U,t.g,"readystatechange",t.nb),e=t.I?jn(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ji(),Oi(t.j,t.u,t.A,t.m,t.W,t.s)}function cr(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function ur(t,e,n){let i,r=!0;for(;!t.J&&t.C<n.length;){if(i=hr(t,n),i==or){4==e&&(t.o=4,Hi(14),r=!1),Li(t.j,t.m,null,"[Incomplete Response]");break}if(i==sr){t.o=4,Hi(15),Li(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Li(t.j,t.m,i,null),yr(t,i)}cr(t)&&i!=or&&i!=sr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Hi(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fs(e),e.M=!0,Hi(11))):(Li(t.j,t.m,n,"[Invalid Chunked Response]"),mr(t),gr(t))}function hr(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?or:(n=Number(e.substring(n,i)),isNaN(n)?sr:(i+=1,i+n>e.length?or:(e=e.slice(i,i+n),t.C=i+n,e)))}function fr(t){t.Y=Date.now()+t.P,dr(t,t.P)}function dr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ki(rn(t.lb,t),e)}function pr(t){t.B&&(We.clearTimeout(t.B),t.B=null)}function gr(t){0==t.l.H||t.J||$s(t.l,t)}function mr(t){pr(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ti(t.V),ki(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function yr(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||Xr(n.i,t)))if(!t.K&&Xr(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;js(n),ks(n)}Us(n),Hi(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Ki(rn(n.ib,n),6e3));if(1>=Wr(n.i)&&n.oa){try{n.oa()}catch(c){}n.oa=void 0}}else zs(n,11)}else if((t.K||n.g==t)&&js(n),!pn(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.K=c[1],n.pa=c[2];const e=c[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=c[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Yr(s,s.h),s.h=null))}if(i.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Dr(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=qs(i,i.J?i.pa:null,i.Y),o.K){Jr(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&(pr(a),fr(a)),i.g=o}else Vs(i);0<n.j.length&&Os(n)}else"stop"!=c[0]&&"close"!=c[0]||zs(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?zs(n,7):Ns(n):"noop"!=c[0]&&n.h&&n.h.Aa(c),n.A=0)}ji(4)}catch(c){}}function vr(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(Xe(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function wr(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(Xe(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Er(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Xe(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=wr(t),i=vr(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}Ke=nr.prototype,Ke.setTimeout=function(t){this.P=t},Ke.nb=function(t){t=t.target;const e=this.M;e&&3==bs(t)?e.l():this.Pa(t)},Ke.Pa=function(t){try{if(t==this.g)t:{const u=bs(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(3!=u||In||this.g&&(this.h.h||this.g.ja()||Ts(this.g)))){this.J||4!=u||7==e||ji(8==e||0>=h?3:2),pr(this);var n=this.g.da();this.ca=n;e:if(cr(this)){var i=Ts(this.g);t="";var r=i.length,s=4==bs(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){mr(this),gr(this);var o="";break e}this.h.i=new We.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Pi(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Hi(12),mr(this),gr(this);break t}Li(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yr(this,n)}this.S?(ur(this,u,o),In&&this.i&&3==u&&(Ni(this.U,this.V,"tick",this.mb),this.V.start())):(Li(this.j,this.m,o,null),yr(this,o)),4==u&&mr(this),this.i&&!this.J&&(4==u?$s(this.l,this):(this.i=!1,fr(this)))}else Is(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Hi(12)):(this.o=0,Hi(13)),mr(this),gr(this)}}}catch(u){}},Ke.mb=function(){if(this.g){var t=bs(this.g),e=this.g.ja();this.C<e.length&&(pr(this),ur(this,t,e),this.i&&4!=t&&fr(this))}},Ke.cancel=function(){this.J=!0,mr(this)},Ke.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xi(this.j,this.A),2!=this.L&&(ji(),Hi(17)),mr(this),this.o=2,gr(this)):dr(this,this.Y-t)};var _r=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function br(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Tr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tr){this.h=t.h,Ar(this,t.j),this.s=t.s,this.g=t.g,Cr(this,t.m),this.l=t.l;var e=t.i,n=new Ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sr(this,n),this.o=t.o}else t&&(e=String(t).match(_r))?(this.h=!1,Ar(this,e[1]||"",!0),this.s=kr(e[2]||""),this.g=kr(e[3]||"",!0),Cr(this,e[4]),this.l=kr(e[5]||"",!0),Sr(this,e[6]||"",!0),this.o=kr(e[7]||"")):(this.h=!1,this.i=new Ur(null,this.h))}function Ir(t){return new Tr(t)}function Ar(t,e,n){t.j=n?kr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cr(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sr(t,e,n){e instanceof Ur?(t.i=e,zr(t.i,t.h)):(n||(e=Rr(e,Mr)),t.i=new Ur(e,t.h))}function Dr(t,e,n){t.i.set(e,n)}function Nr(t){return Dr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rr(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Or),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Or(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rr(e,Pr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Rr(e,Pr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Rr(n,"/"==n.charAt(0)?xr:Lr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rr(n,Vr)),t.join("")};var Pr=/[#\/\?@]/g,Lr=/[#\?:]/g,xr=/[#\?]/g,Mr=/[#\?@]/g,Vr=/#/g;function Ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&br(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Br(t,e){Fr(t),e=Hr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jr(t,e){return Fr(t),e=Hr(t,e),t.g.has(e)}function $r(t,e,n){Br(t,e),0<n.length&&(t.i=null,t.g.set(Hr(t,e),un(n)),t.h+=n.length)}function Hr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zr(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Br(this,e),$r(this,n,t))}),t)),t.j=e}Ke=Ur.prototype,Ke.add=function(t,e){Fr(this),this.i=null,t=Hr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ke.forEach=function(t,e){Fr(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Ke.ta=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Ke.Z=function(t){Fr(this);let e=[];if("string"===typeof t)jr(this,t)&&(e=e.concat(this.g.get(Hr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ke.set=function(t,e){return Fr(this),this.i=null,t=Hr(this,t),jr(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ke.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},Ke.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var Kr=class{constructor(t,e){this.g=t,this.map=e}};function qr(t){this.l=t||Gr,We.PerformanceNavigationTiming?(t=We.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(We.g&&We.g.Ka&&We.g.Ka()&&We.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Gr=10;function Qr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Wr(t){return t.h?1:t.g?t.g.size:0}function Xr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Yr(t,e){t.g?t.g.add(e):t.h=e}function Jr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Zr(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return un(t.i)}qr.prototype.cancel=function(){if(this.i=Zr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ts=class{stringify(t){return We.JSON.stringify(t,void 0)}parse(t){return We.JSON.parse(t,void 0)}};function es(){this.g=new ts}function ns(t,e,n){const i=n||"";try{Er(t,(function(t,n){let r=t;Ye(t)&&(r=ci(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function is(t,e){const n=new Ri;if(We.Image){const i=new Image;i.onload=sn(rs,n,i,"TestLoadImage: loaded",!0,e),i.onerror=sn(rs,n,i,"TestLoadImage: error",!1,e),i.onabort=sn(rs,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=sn(rs,n,i,"TestLoadImage: timeout",!1,e),We.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function rs(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function ss(t){this.l=t.fc||null,this.j=t.ob||!1}function os(t,e){oi.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=as,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}on(ss,Qi),ss.prototype.g=function(){return new os(this.l,this.j)},ss.prototype.i=function(t){return function(){return t}}({}),on(os,oi);var as=0;function ls(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function cs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,us(t)}function us(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Ke=os.prototype,Ke.open=function(t,e){if(this.readyState!=as)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,us(this)},Ke.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||We).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Ke.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,cs(this)),this.readyState=as},Ke.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof We.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ls(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Ke.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?cs(this):us(this),3==this.readyState&&ls(this)}},Ke.Za=function(t){this.g&&(this.response=this.responseText=t,cs(this))},Ke.Ya=function(t){this.g&&(this.response=t,cs(this))},Ke.ka=function(){this.g&&cs(this)},Ke.setRequestHeader=function(t,e){this.v.append(t,e)},Ke.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ke.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(os.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var hs=We.JSON.parse;function fs(t){oi.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=ds,this.L=this.M=!1}on(fs,oi);var ds="",ps=/^https?$/i,gs=["POST","PUT"];function ms(t){return bn&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function ys(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vs(t),Es(t)}function vs(t){t.F||(t.F=!0,ai(t,"complete"),ai(t,"error"))}function ws(t){if(t.h&&"undefined"!=typeof Qe&&(!t.C[1]||4!=bs(t)||2!=t.da()))if(t.v&&4==bs(t))Ii(t.La,0,t);else if(ai(t,"readystatechange"),4==bs(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.I).match(_r)[1]||null;!r&&We.self&&We.self.location&&(r=We.self.location.protocol.slice(0,-1)),i=!ps.test(r?r.toLowerCase():"")}n=i}if(n)ai(t,"complete"),ai(t,"success");else{t.m=6;try{var s=2<bs(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",vs(t)}}finally{Es(t)}}}function Es(t,e){if(t.g){_s(t);const i=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ai(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function _s(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(We.clearTimeout(t.A),t.A=null)}function bs(t){return t.g?t.g.readyState:0}function Ts(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case ds:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Lo){return null}}function Is(t){const e={};t=(t.g&&2<=bs(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(pn(t[i]))continue;var n=gi(t[i]);const r=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}Bn(e,(function(t){return t.join(", ")}))}function As(t){let e="";return Fn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Cs(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=As(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Dr(t,e,n))}function Ss(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ds(t){this.Ga=0,this.j=[],this.l=new Ri,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ss("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ss("baseRetryDelayMs",5e3,t),this.hb=Ss("retryDelaySeedMs",1e4,t),this.eb=Ss("forwardChannelMaxRetries",2,t),this.xa=Ss("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new qr(t&&t.concurrentRequestLimit),this.Ja=new es,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Ns(t){if(Rs(t),3==t.H){var e=t.W++,n=Ir(t.I);if(Dr(n,"SID",t.K),Dr(n,"RID",e),Dr(n,"TYPE","terminate"),xs(t,n),e=new nr(t,t.l,e),e.L=2,e.v=Nr(Ir(n)),n=!1,We.navigator&&We.navigator.sendBeacon)try{n=We.navigator.sendBeacon(e.v.toString(),"")}catch(i){}!n&&We.Image&&((new Image).src=e.v,n=!0),n||(e.g=Gs(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fr(e)}Ks(t)}function ks(t){t.g&&(Fs(t),t.g.cancel(),t.g=null)}function Rs(t){ks(t),t.u&&(We.clearTimeout(t.u),t.u=null),js(t),t.i.cancel(),t.m&&("number"===typeof t.m&&We.clearTimeout(t.m),t.m=null)}function Os(t){if(!Qr(t.i)&&!t.m){t.m=!0;var e=t.Na;yi||Ei(),vi||(yi(),vi=!0),wi.add(e,t),t.C=0}}function Ps(t,e){return!(Wr(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=Ki(rn(t.Na,t,e),Hs(t,t.C)),t.C++,!0))}function Ls(t,e){var n;n=e?e.m:t.W++;const i=Ir(t.I);Dr(i,"SID",t.K),Dr(i,"RID",n),Dr(i,"AID",t.V),xs(t,i),t.o&&t.s&&Cs(i,t.o,t.s),n=new nr(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Ms(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Yr(t.i,n),ar(n,i,e)}function xs(t,e){t.na&&Fn(t.na,(function(t,n){Dr(e,n,t)})),t.h&&Er({},(function(t,n){Dr(e,n,t)}))}function Ms(t,e,n){n=Math.min(t.j.length,n);var i=t.h?rn(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].g;const l=r[a].map;if(n-=e,0>n)e=Math.max(0,r[a].g-100),o=!1;else try{ns(l,t,"req"+n+"_")}catch(s){i&&i(l)}}if(o){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Vs(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;yi||Ei(),vi||(yi(),vi=!0),wi.add(e,t),t.A=0}}function Us(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=Ki(rn(t.Ma,t),Hs(t,t.A)),t.A++,!0)}function Fs(t){null!=t.B&&(We.clearTimeout(t.B),t.B=null)}function Bs(t){t.g=new nr(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Ir(t.wa);Dr(e,"RID","rpc"),Dr(e,"SID",t.K),Dr(e,"AID",t.V),Dr(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Dr(e,"TO",t.qa),Dr(e,"TYPE","xmlhttp"),xs(t,e),t.o&&t.s&&Cs(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Nr(Ir(e)),n.s=null,n.S=!0,lr(n,t)}function js(t){null!=t.v&&(We.clearTimeout(t.v),t.v=null)}function $s(t,e){var n=null;if(t.g==e){js(t),Fs(t),t.g=null;var i=2}else{if(!Xr(t.i,e))return;n=e.F,Jr(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=Fi(),ai(i,new zi(i,n)),Os(t)}else Vs(t);else if(r=e.o,3==r||0==r&&0<e.ca||!(1==i&&Ps(t,e)||2==i&&Us(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:zs(t,5);break;case 4:zs(t,10);break;case 3:zs(t,6);break;default:zs(t,2)}}function Hs(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zs(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=rn(t.pb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),We.location&&"http"==We.location.protocol||Ar(n,"https"),Nr(n)),is(n.toString(),i)}else Hi(2);t.H=0,t.h&&t.h.za(e),Ks(t),Rs(t)}function Ks(t){if(t.H=0,t.ma=[],t.h){const e=Zr(t.i);0==e.length&&0==t.j.length||(hn(t.ma,e),hn(t.ma,t.j),t.i.i.length=0,un(t.j),t.j.length=0),t.h.ya()}}function qs(t,e,n){var i=n instanceof Tr?Ir(n):new Tr(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Cr(i,i.m);else{var r=We.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Tr(null);i&&Ar(s,i),e&&(s.g=e),r&&Cr(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Dr(i,n,e),Dr(i,"VER",t.ra),xs(t,i),i}function Gs(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new fs(new ss({ob:!0})):new fs(t.va),e.Oa(t.J),e}function Qs(){}function Ws(){if(bn&&!(10<=Number(On)))throw Error("Environmental error: no available transport.")}function Xs(t,e){oi.call(this),this.g=new Ds(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!pn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!pn(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}function Ys(t){Zi.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Js(){tr.call(this),this.status=1}function Zs(t){this.g=t}function to(){this.blockSize=-1}function eo(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function no(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function io(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}Ke=fs.prototype,Ke.Oa=function(t){this.M=t},Ke.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yi.g(),this.C=this.u?Wi(this.u):Wi(Yi),this.g.onreadystatechange=rn(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void ys(this,s)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=We.FormData&&t instanceof We.FormData,!(0<=cn(gs,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_s(this),0<this.B&&((this.L=ms(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rn(this.ua,this)):this.A=Ii(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ys(this,s)}},Ke.ua=function(){"undefined"!=typeof Qe&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ai(this,"timeout"),this.abort(8))},Ke.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ai(this,"complete"),ai(this,"abort"),Es(this))},Ke.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Es(this,!0)),fs.$.N.call(this)},Ke.La=function(){this.s||(this.G||this.v||this.l?ws(this):this.kb())},Ke.kb=function(){ws(this)},Ke.isActive=function(){return!!this.g},Ke.da=function(){try{return 2<bs(this)?this.g.status:-1}catch(t){return-1}},Ke.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ke.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),hs(e)}},Ke.Ia=function(){return this.m},Ke.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},Ke=Ds.prototype,Ke.ra=8,Ke.H=1,Ke.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new nr(this,this.l,t);let s=this.s;if(this.U&&(s?(s=jn(s),Hn(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ms(this,r,e),n=Ir(this.I),Dr(n,"RID",t),Dr(n,"CVER",22),this.F&&Dr(n,"X-HTTP-Session-Id",this.F),xs(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(As(s)))+"&"+e:this.o&&Cs(n,this.o,s)),Yr(this.i,r),this.bb&&Dr(n,"TYPE","init"),this.P?(Dr(n,"$req",e),Dr(n,"SID","null"),r.aa=!0,ar(r,n,null)):ar(r,n,e),this.H=2}}else 3==this.H&&(t?Ls(this,t):0==this.j.length||Qr(this.i)||Ls(this))},Ke.Ma=function(){if(this.u=null,Bs(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ki(rn(this.jb,this),t)}},Ke.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Hi(10),ks(this),Bs(this))},Ke.ib=function(){null!=this.v&&(this.v=null,ks(this),Us(this),Hi(19))},Ke.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Hi(2)):(this.l.info("Failed to ping google.com"),Hi(1))},Ke.isActive=function(){return!!this.h&&this.h.isActive(this)},Ke=Qs.prototype,Ke.Ba=function(){},Ke.Aa=function(){},Ke.za=function(){},Ke.ya=function(){},Ke.isActive=function(){return!0},Ke.Va=function(){},Ws.prototype.g=function(t,e){return new Xs(t,e)},on(Xs,oi),Xs.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Hi(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qs(t,null,t.Y),Os(t)},Xs.prototype.close=function(){Ns(this.g)},Xs.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ci(t),t=n);e.j.push(new Kr(e.fb++,t)),3==e.H&&Os(e)},Xs.prototype.N=function(){this.g.h=null,delete this.j,Ns(this.g),delete this.g,Xs.$.N.call(this)},on(Ys,Zi),on(Js,tr),on(Zs,Qs),Zs.prototype.Ba=function(){ai(this.g,"a")},Zs.prototype.Aa=function(t){ai(this.g,new Ys(t))},Zs.prototype.za=function(t){ai(this.g,new Js)},Zs.prototype.ya=function(){ai(this.g,"b")},on(eo,to),eo.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},eo.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)no(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){no(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){no(this,i),r=0;break}}this.h=r,this.i+=e},eo.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var ro={};function so(t){return-128<=t&&128>t?vn(t,(function(t){return new io([0|t],0>t?-1:0)})):new io([0|t],0>t?-1:0)}function oo(t){if(isNaN(t)||!isFinite(t))return co;if(0>t)return go(oo(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=lo;return new io(e,0)}function ao(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return go(ao(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=oo(Math.pow(e,8)),i=co,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=oo(Math.pow(e,s)),i=i.R(s).add(oo(o))):(i=i.R(n),i=i.add(oo(o)))}return i}var lo=4294967296,co=so(0),uo=so(1),ho=so(16777216);function fo(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function po(t){return-1==t.h}function go(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new io(n,~t.h).add(uo)}function mo(t,e){return t.add(go(e))}function yo(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function vo(t,e){this.g=t,this.h=e}function wo(t,e){if(fo(e))throw Error("division by zero");if(fo(t))return new vo(co,co);if(po(t))return e=wo(go(t),e),new vo(go(e.g),go(e.h));if(po(e))return e=wo(t,go(e)),new vo(go(e.g),e.h);if(30<t.g.length){if(po(t)||po(e))throw Error("slowDivide_ only works with positive integers.");for(var n=uo,i=e;0>=i.X(t);)n=Eo(n),i=Eo(i);var r=_o(n,1),s=_o(i,1);for(i=_o(i,2),n=_o(n,2);!fo(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=_o(i,1),n=_o(n,1)}return e=mo(t,r.R(e)),new vo(r,e)}for(r=co;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=oo(n),o=s.R(e);po(o)||0<o.X(t);)n-=i,s=oo(n),o=s.R(e);fo(s)&&(s=uo),r=r.add(s),t=mo(t,o)}return new vo(r,t)}function Eo(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new io(n,t.h)}function _o(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new io(r,t.h)}Ke=io.prototype,Ke.ea=function(){if(po(this))return-go(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:lo+i)*e,e*=lo}return t},Ke.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fo(this))return"0";if(po(this))return"-"+go(this).toString(t);for(var e=oo(Math.pow(t,6)),n=this,i="";;){var r=wo(n,e).g;n=mo(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,fo(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},Ke.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Ke.X=function(t){return t=mo(this,t),po(t)?-1:fo(t)?0:1},Ke.abs=function(){return po(this)?go(this):this},Ke.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new io(n,-2147483648&n[n.length-1]?-1:0)},Ke.R=function(t){if(fo(this)||fo(t))return co;if(po(this))return po(t)?go(this).R(go(t)):go(go(this).R(t));if(po(t))return go(this.R(go(t)));if(0>this.X(ho)&&0>t.X(ho))return oo(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,l=65535&t.D(r);n[2*i+2*r]+=o*l,yo(n,2*i+2*r),n[2*i+2*r+1]+=s*l,yo(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,yo(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,yo(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new io(n,0)},Ke.gb=function(t){return wo(this,t).h},Ke.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new io(n,this.h&t.h)},Ke.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new io(n,this.h|t.h)},Ke.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new io(n,this.h^t.h)},Ws.prototype.createWebChannel=Ws.prototype.g,Xs.prototype.send=Xs.prototype.u,Xs.prototype.open=Xs.prototype.m,Xs.prototype.close=Xs.prototype.close,qi.NO_ERROR=0,qi.TIMEOUT=8,qi.HTTP_ERROR=6,Gi.COMPLETE="complete",Xi.EventType=Ji,Ji.OPEN="a",Ji.CLOSE="b",Ji.ERROR="c",Ji.MESSAGE="d",oi.prototype.listen=oi.prototype.O,fs.prototype.listenOnce=fs.prototype.P,fs.prototype.getLastError=fs.prototype.Sa,fs.prototype.getLastErrorCode=fs.prototype.Ia,fs.prototype.getStatus=fs.prototype.da,fs.prototype.getResponseJson=fs.prototype.Wa,fs.prototype.getResponseText=fs.prototype.ja,fs.prototype.send=fs.prototype.ha,fs.prototype.setWithCredentials=fs.prototype.Oa,eo.prototype.digest=eo.prototype.l,eo.prototype.reset=eo.prototype.reset,eo.prototype.update=eo.prototype.j,io.prototype.add=io.prototype.add,io.prototype.multiply=io.prototype.R,io.prototype.modulo=io.prototype.gb,io.prototype.compare=io.prototype.X,io.prototype.toNumber=io.prototype.ea,io.prototype.toString=io.prototype.toString,io.prototype.getBits=io.prototype.D,io.fromNumber=oo,io.fromString=ao;var bo=Ge.createWebChannelTransport=function(){return new Ws},To=Ge.getStatEventTarget=function(){return Fi()},Io=Ge.ErrorCode=qi,Ao=Ge.EventType=Gi,Co=Ge.Event=Vi,So=Ge.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Do=Ge.FetchXmlHttpFactory=ss,No=Ge.WebChannel=Xi,ko=Ge.XhrIo=fs,Ro=(Ge.Md5=eo,Ge.Integer=io);const Oo="@firebase/firestore";
/**
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
 */class Po{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Po.UNAUTHENTICATED=new Po(null),Po.GOOGLE_CREDENTIALS=new Po("google-credentials-uid"),Po.FIRST_PARTY=new Po("first-party-uid"),Po.MOCK_USER=new Po("mock-user");
/**
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
 */
let Lo="10.1.0";
/**
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
 */const xo=new dt("@firebase/firestore");function Mo(){return xo.logLevel}function Vo(t,...e){if(xo.logLevel<=lt.DEBUG){const n=e.map(Bo);xo.debug(`Firestore (${Lo}): ${t}`,...n)}}function Uo(t,...e){if(xo.logLevel<=lt.ERROR){const n=e.map(Bo);xo.error(`Firestore (${Lo}): ${t}`,...n)}}function Fo(t,...e){if(xo.logLevel<=lt.WARN){const n=e.map(Bo);xo.warn(`Firestore (${Lo}): ${t}`,...n)}}function Bo(t){if("string"==typeof t)return t;try{
/**
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
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function jo(t="Unexpected state"){const e=`FIRESTORE (${Lo}) INTERNAL ASSERTION FAILED: `+t;throw Uo(e),new Error(e)}function $o(t,e){t||jo()}function Ho(t,e){return t}
/**
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
 */const zo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ko extends Q{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class qo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Go{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Qo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Po.UNAUTHENTICATED)))}shutdown(){}}class Wo{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Xo{constructor(t){this.t=t,this.currentUser=Po.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new qo;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qo,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Vo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Vo("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qo)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Vo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?($o("string"==typeof e.accessToken),new Go(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $o(null===t||"string"==typeof t),new Po(t)}}class Yo{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Po.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Jo{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Yo(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Po.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ta{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Vo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Vo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Vo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Vo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?($o("string"==typeof t.token),this.R=t.token,new Zo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function ea(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
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
 */class na{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ea(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function ia(t,e){return t<e?-1:t>e?1:0}function ra(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
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
 */
class sa{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ko(zo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return sa.fromMillis(Date.now())}static fromDate(t){return sa.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new sa(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ia(this.nanoseconds,t.nanoseconds):ia(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class oa{constructor(t){this.timestamp=t}static fromTimestamp(t){return new oa(t)}static min(){return new oa(new sa(0,0))}static max(){return new oa(new sa(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class aa{constructor(t,e,n){void 0===e?e=0:e>t.length&&jo(),void 0===n?n=t.length-e:n>t.length-e&&jo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===aa.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof aa?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class la extends aa{construct(t,e,n){return new la(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ko(zo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new la(e)}static emptyPath(){return new la([])}}const ca=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ua extends aa{construct(t,e,n){return new ua(t,e,n)}static isValidIdentifier(t){return ca.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ua.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ua(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Ko(zo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ko(zo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ko(zo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Ko(zo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ua(e)}static emptyPath(){return new ua([])}}
/**
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
 */class ha{constructor(t){this.path=t}static fromPath(t){return new ha(la.fromString(t))}static fromName(t){return new ha(la.fromString(t).popFirst(5))}static empty(){return new ha(la.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===la.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return la.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ha(new la(t.slice()))}}
/**
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
 */class fa{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}fa.UNKNOWN_ID=-1;function da(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=oa.fromTimestamp(1e9===i?new sa(n+1,0):new sa(n,i));return new ga(r,ha.empty(),e)}function pa(t){return new ga(t.readTime,t.key,-1)}class ga{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ga(oa.min(),ha.empty(),-1)}static max(){return new ga(oa.max(),ha.empty(),-1)}}function ma(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ha.comparator(t.documentKey,e.documentKey),0!==n?n:ia(t.largestBatchId,e.largestBatchId))}
/**
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
 */const ya="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class va{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */async function wa(t){if(t.code!==zo.FAILED_PRECONDITION||t.message!==ya)throw t;Vo("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Ea{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&jo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ea(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ea?e:Ea.resolve(e)}catch(t){return Ea.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ea.reject(e)}static resolve(t){return new Ea(((e,n)=>{e(t)}))}static reject(t){return new Ea(((e,n)=>{n(t)}))}static waitFor(t){return new Ea(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Ea.resolve(!1);for(const n of t)e=e.next((t=>t?Ea.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Ea(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new Ea(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
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
 */function _a(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class ba{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function Ta(t){return null==t}function Ia(t){return 0===t&&1/t==-1/0}function Aa(t){return"number"==typeof t&&Number.isInteger(t)&&!Ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */ba.ae=-1;const Ca=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Sa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Da=Sa;
/**
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
 */
/**
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
 */
function Na(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ka(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ra(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Oa{constructor(t,e){this.comparator=t,this.root=e||La.EMPTY}insert(t,e){return new Oa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,La.BLACK,null,null))}remove(t){return new Oa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,La.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pa(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pa(this.root,t,this.comparator,!0)}}class Pa{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class La{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:La.RED,this.left=null!=i?i:La.EMPTY,this.right=null!=r?r:La.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new La(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return La.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return La.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,La.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,La.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw jo();if(this.right.isRed())throw jo();const t=this.left.check();if(t!==this.right.check())throw jo();return t+(this.isRed()?0:1)}}La.EMPTY=null,La.RED=!0,La.BLACK=!1,La.EMPTY=new class{constructor(){this.size=0}get key(){throw jo()}get value(){throw jo()}get color(){throw jo()}get left(){throw jo()}get right(){throw jo()}copy(t,e,n,i,r){return this}insert(t,e,n){return new La(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class xa{constructor(t){this.comparator=t,this.data=new Oa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ma(this.data.getIterator())}getIteratorFrom(t){return new Ma(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof xa))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new xa(this.comparator);return e.data=t,e}}class Ma{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Va{constructor(t){this.fields=t,t.sort(ua.comparator)}static empty(){return new Va([])}unionWith(t){let e=new xa(ua.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Va(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ra(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Ua extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Fa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ua("Invalid base64 string: "+t):t}}(t);return new Fa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Fa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ia(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Fa.EMPTY_BYTE_STRING=new Fa("");const Ba=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ja(t){if($o(!!t),"string"==typeof t){let e=0;const n=Ba.exec(t);if($o(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:$a(t.seconds),nanos:$a(t.nanos)}}function $a(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ha(t){return"string"==typeof t?Fa.fromBase64String(t):Fa.fromUint8Array(t)}
/**
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
 */function za(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ka(t){const e=t.mapValue.fields.__previous_value__;return za(e)?Ka(e):e}function qa(t){const e=ja(t.mapValue.fields.__local_write_time__.timestampValue);return new sa(e.seconds,e.nanos)}
/**
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
 */class Ga{constructor(t,e,n,i,r,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Qa{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Qa&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const Wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xa(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?za(t)?4:al(t)?9007199254740991:10:jo()}function Ya(t,e){if(t===e)return!0;const n=Xa(t);if(n!==Xa(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qa(t).isEqual(qa(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ja(t.timestampValue),i=ja(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ha(t.bytesValue).isEqual(Ha(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return $a(t.geoPointValue.latitude)===$a(e.geoPointValue.latitude)&&$a(t.geoPointValue.longitude)===$a(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return $a(t.integerValue)===$a(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=$a(t.doubleValue),i=$a(e.doubleValue);return n===i?Ia(n)===Ia(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],Ya);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Na(n)!==Na(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Ya(n[r],i[r])))return!1;return!0}(t,e);default:return jo()}}function Ja(t,e){return void 0!==(t.values||[]).find((t=>Ya(t,e)))}function Za(t,e){if(t===e)return 0;const n=Xa(t),i=Xa(e);if(n!==i)return ia(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ia(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=$a(t.integerValue||t.doubleValue),i=$a(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return tl(t.timestampValue,e.timestampValue);case 4:return tl(qa(t),qa(e));case 5:return ia(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ha(t),i=Ha(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=ia(n[r],i[r]);if(0!==t)return t}return ia(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ia($a(t.latitude),$a(e.latitude));return 0!==n?n:ia($a(t.longitude),$a(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Za(n[r],i[r]);if(t)return t}return ia(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Wa.mapValue&&e===Wa.mapValue)return 0;if(t===Wa.mapValue)return 1;if(e===Wa.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=ia(i[o],s[o]);if(0!==t)return t;const e=Za(n[i[o]],r[s[o]]);if(0!==e)return e}return ia(i.length,s.length)}(t.mapValue,e.mapValue);default:throw jo()}}function tl(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ia(t,e);const n=ja(t),i=ja(e),r=ia(n.seconds,i.seconds);return 0!==r?r:ia(n.nanos,i.nanos)}function el(t){return nl(t)}function nl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ja(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ha(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ha.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=nl(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${nl(t.fields[r])}`;return n+"}"}(t.mapValue):jo()}function il(t){return!!t&&"integerValue"in t}function rl(t){return!!t&&"arrayValue"in t}function sl(t){return!!t&&"mapValue"in t}function ol(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ka(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ol(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ol(t.arrayValue.values[n]);return e}return Object.assign({},t)}function al(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class ll{constructor(t){this.value=t}static empty(){return new ll({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!sl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ol(e)}setAll(t){let e=ua.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ol(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());sl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ya(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];sl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ka(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new ll(ol(this.value))}}function cl(t){const e=[];return ka(t.fields,((t,n)=>{const i=new ua([t]);if(sl(n)){const t=cl(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Va(e)
/**
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
 */}class ul{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ul(t,0,oa.min(),oa.min(),oa.min(),ll.empty(),0)}static newFoundDocument(t,e,n,i){return new ul(t,1,e,oa.min(),n,i,0)}static newNoDocument(t,e){return new ul(t,2,e,oa.min(),oa.min(),ll.empty(),0)}static newUnknownDocument(t,e){return new ul(t,3,e,oa.min(),oa.min(),ll.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(oa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ll.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ll.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oa.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ul&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ul(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class hl{constructor(t,e){this.position=t,this.inclusive=e}}function fl(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?ha.comparator(ha.fromName(o.referenceValue),n.key):Za(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function dl(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ya(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class pl{constructor(t,e="asc"){this.field=t,this.dir=e}}function gl(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class ml{}class yl extends ml{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Al(t,e,n):"array-contains"===e?new Nl(t,n):"in"===e?new kl(t,n):"not-in"===e?new Rl(t,n):"array-contains-any"===e?new Ol(t,n):new yl(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Cl(t,n):new Sl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Za(e,this.value)):null!==e&&Xa(this.value)===Xa(e)&&this.matchesComparison(Za(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return jo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vl extends ml{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new vl(t,e)}matches(t){return wl(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function wl(t){return"and"===t.op}function El(t){return _l(t)&&wl(t)}function _l(t){for(const e of t.filters)if(e instanceof vl)return!1;return!0}function bl(t){if(t instanceof yl)return t.field.canonicalString()+t.op.toString()+el(t.value);if(El(t))return t.filters.map((t=>bl(t))).join(",");{const e=t.filters.map((t=>bl(t))).join(",");return`${t.op}(${e})`}}function Tl(t,e){return t instanceof yl?function(t,e){return e instanceof yl&&t.op===e.op&&t.field.isEqual(e.field)&&Ya(t.value,e.value)}(t,e):t instanceof vl?function(t,e){return e instanceof vl&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Tl(n,e.filters[i])),!0)}(t,e):void jo()}function Il(t){return t instanceof yl?function(t){return`${t.field.canonicalString()} ${t.op} ${el(t.value)}`}(t):t instanceof vl?function(t){return t.op.toString()+" {"+t.getFilters().map(Il).join(" ,")+"}"}(t):"Filter"}class Al extends yl{constructor(t,e,n){super(t,e,n),this.key=ha.fromName(n.referenceValue)}matches(t){const e=ha.comparator(t.key,this.key);return this.matchesComparison(e)}}class Cl extends yl{constructor(t,e){super(t,"in",e),this.keys=Dl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Sl extends yl{constructor(t,e){super(t,"not-in",e),this.keys=Dl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Dl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ha.fromName(t.referenceValue)))}class Nl extends yl{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return rl(e)&&Ja(e.arrayValue,this.value)}}class kl extends yl{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ja(this.value.arrayValue,e)}}class Rl extends yl{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ja(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ja(this.value.arrayValue,e)}}class Ol extends yl{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!rl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ja(this.value.arrayValue,t)))}}
/**
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
 */class Pl{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.he=null}}function Ll(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Pl(t,e,n,i,r,s,o)}function xl(t){const e=Ho(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>bl(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>el(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>el(t))).join(",")),e.he=t}return e.he}function Ml(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!gl(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dl(t.startAt,e.startAt)&&dl(t.endAt,e.endAt)}
/**
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
 */
class Vl{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Ul(t,e,n,i,r,s,o,a){return new Vl(t,e,n,i,r,s,o,a)}function Fl(t){return new Vl(t)}function Bl(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function jl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $l(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Hl(t){return null!==t.collectionGroup}function zl(t){const e=Ho(t);if(null===e.Pe){e.Pe=[];const t=$l(e),n=jl(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new pl(t)),e.Pe.push(new pl(ua.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new pl(ua.keyField(),t))}}}return e.Pe}function Kl(t){const e=Ho(t);if(!e.Ie)if("F"===e.limitType)e.Ie=Ll(e.path,e.collectionGroup,zl(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of zl(e)){const e="desc"===r.dir?"asc":"desc";t.push(new pl(r.field,e))}const n=e.endAt?new hl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new hl(e.startAt.position,e.startAt.inclusive):null;e.Ie=Ll(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.Ie}function ql(t,e,n){return new Vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return Ml(Kl(t),Kl(e))&&t.limitType===e.limitType}function Ql(t){return`${xl(Kl(t))}|lt:${t.limitType}`}function Wl(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Il(t))).join(", ")}]`),Ta(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>el(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>el(t))).join(",")),`Target(${e})`}(Kl(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ha.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of zl(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=fl(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,zl(t),e))&&!(t.endAt&&!function(t,e,n){const i=fl(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,zl(t),e))}(t,e)}function Yl(t){return(e,n)=>{let i=!1;for(const r of zl(t)){const t=Jl(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Jl(t,e,n){const i=t.field.isKeyField()?ha.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Za(i,r):jo()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return jo()}}
/**
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
 */class Zl{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ka(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return Ra(this.inner)}size(){return this.innerSize}}
/**
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
 */const tc=new Oa(ha.comparator);function ec(){return tc}const nc=new Oa(ha.comparator);function ic(...t){let e=nc;for(const n of t)e=e.insert(n.key,n);return e}function rc(t){let e=nc;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function sc(){return ac()}function oc(){return ac()}function ac(){return new Zl((t=>t.toString()),((t,e)=>t.isEqual(e)))}const lc=new Oa(ha.comparator),cc=new xa(ha.comparator);function uc(...t){let e=cc;for(const n of t)e=e.add(n);return e}const hc=new xa(ia);function fc(){return hc}
/**
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
 */function dc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ia(e)?"-0":e}}function pc(t){return{integerValue:""+t}}function gc(t,e){return Aa(e)?pc(e):dc(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class mc{constructor(){this._=void 0}}function yc(t,e,n){return t instanceof Ec?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&za(e)&&(e=Ka(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof _c?bc(t,e):t instanceof Tc?Ic(t,e):function(t,e){const n=wc(t,e),i=Cc(n)+Cc(t.Te);return il(n)&&il(t.Te)?pc(i):dc(t.serializer,i)}(t,e)}function vc(t,e,n){return t instanceof _c?bc(t,e):t instanceof Tc?Ic(t,e):n}function wc(t,e){return t instanceof Ac?function(t){return il(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Ec extends mc{}class _c extends mc{constructor(t){super(),this.elements=t}}function bc(t,e){const n=Sc(e);for(const i of t.elements)n.some((t=>Ya(t,i)))||n.push(i);return{arrayValue:{values:n}}}class Tc extends mc{constructor(t){super(),this.elements=t}}function Ic(t,e){let n=Sc(e);for(const i of t.elements)n=n.filter((t=>!Ya(t,i)));return{arrayValue:{values:n}}}class Ac extends mc{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Cc(t){return $a(t.integerValue||t.doubleValue)}function Sc(t){return rl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */function Dc(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof _c&&e instanceof _c||t instanceof Tc&&e instanceof Tc?ra(t.elements,e.elements,Ya):t instanceof Ac&&e instanceof Ac?Ya(t.Te,e.Te):t instanceof Ec&&e instanceof Ec}(t.transform,e.transform)}class Nc{constructor(t,e){this.version=t,this.transformResults=e}}class kc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kc}static exists(t){return new kc(void 0,t)}static updateTime(t){return new kc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Rc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Oc{}function Pc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Hc(t.key,kc.none()):new Uc(t.key,t.data,kc.none());{const n=t.data,i=ll.empty();let r=new xa(ua.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Fc(t.key,i,new Va(r.toArray()),kc.none())}}function Lc(t,e,n){t instanceof Uc?function(t,e,n){const i=t.value.clone(),r=jc(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Fc?function(t,e,n){if(!Rc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=jc(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Bc(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function xc(t,e,n,i){return t instanceof Uc?function(t,e,n,i){if(!Rc(t.precondition,e))return n;const r=t.value.clone(),s=$c(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Fc?function(t,e,n,i){if(!Rc(t.precondition,e))return n;const r=$c(t.fieldTransforms,i,e),s=e.data;return s.setAll(Bc(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Rc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Mc(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=wc(i.transform,t||null);null!=r&&(null===n&&(n=ll.empty()),n.set(i.field,r))}return n||null}function Vc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ra(t,e,((t,e)=>Dc(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Uc extends Oc{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fc extends Oc{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Bc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function jc(t,e,n){const i=new Map;$o(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,vc(o,a,n[r]))}return i}function $c(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,yc(t,s,e))}return i}class Hc extends Oc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zc extends Oc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class Kc{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Lc(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=xc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=xc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=oc();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Pc(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(oa.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),uc())}isEqual(t){return this.batchId===t.batchId&&ra(this.mutations,t.mutations,((t,e)=>Vc(t,e)))&&ra(this.baseMutations,t.baseMutations,((t,e)=>Vc(t,e)))}}class qc{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){$o(t.mutations.length===n.length);let i=function(){return lc}();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new qc(t,e,n,i)}}
/**
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
 */class Gc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
var Qc,Wc;function Xc(t){switch(t){default:return jo();case zo.CANCELLED:case zo.UNKNOWN:case zo.DEADLINE_EXCEEDED:case zo.RESOURCE_EXHAUSTED:case zo.INTERNAL:case zo.UNAVAILABLE:case zo.UNAUTHENTICATED:return!1;case zo.INVALID_ARGUMENT:case zo.NOT_FOUND:case zo.ALREADY_EXISTS:case zo.PERMISSION_DENIED:case zo.FAILED_PRECONDITION:case zo.ABORTED:case zo.OUT_OF_RANGE:case zo.UNIMPLEMENTED:case zo.DATA_LOSS:return!0}}function Yc(t){if(void 0===t)return Uo("GRPC error has no .code"),zo.UNKNOWN;switch(t){case Qc.OK:return zo.OK;case Qc.CANCELLED:return zo.CANCELLED;case Qc.UNKNOWN:return zo.UNKNOWN;case Qc.DEADLINE_EXCEEDED:return zo.DEADLINE_EXCEEDED;case Qc.RESOURCE_EXHAUSTED:return zo.RESOURCE_EXHAUSTED;case Qc.INTERNAL:return zo.INTERNAL;case Qc.UNAVAILABLE:return zo.UNAVAILABLE;case Qc.UNAUTHENTICATED:return zo.UNAUTHENTICATED;case Qc.INVALID_ARGUMENT:return zo.INVALID_ARGUMENT;case Qc.NOT_FOUND:return zo.NOT_FOUND;case Qc.ALREADY_EXISTS:return zo.ALREADY_EXISTS;case Qc.PERMISSION_DENIED:return zo.PERMISSION_DENIED;case Qc.FAILED_PRECONDITION:return zo.FAILED_PRECONDITION;case Qc.ABORTED:return zo.ABORTED;case Qc.OUT_OF_RANGE:return zo.OUT_OF_RANGE;case Qc.UNIMPLEMENTED:return zo.UNIMPLEMENTED;case Qc.DATA_LOSS:return zo.DATA_LOSS;default:return jo()}}(Wc=Qc||(Qc={}))[Wc.OK=0]="OK",Wc[Wc.CANCELLED=1]="CANCELLED",Wc[Wc.UNKNOWN=2]="UNKNOWN",Wc[Wc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wc[Wc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wc[Wc.NOT_FOUND=5]="NOT_FOUND",Wc[Wc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wc[Wc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wc[Wc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wc[Wc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wc[Wc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wc[Wc.ABORTED=10]="ABORTED",Wc[Wc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wc[Wc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wc[Wc.INTERNAL=13]="INTERNAL",Wc[Wc.UNAVAILABLE=14]="UNAVAILABLE",Wc[Wc.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new Ro([4294967295,4294967295],0);(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();class Jc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Zc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tu(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eu(t,e){return Zc(t,e.toTimestamp())}function nu(t){return $o(!!t),oa.fromTimestamp(function(t){const e=ja(t);return new sa(e.seconds,e.nanos)}(t))}function iu(t,e){return function(t){return new la(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ru(t){const e=la.fromString(t);return $o(mu(e)),e}function su(t,e){return iu(t.databaseId,e.path)}function ou(t){const e=ru(t);return 4===e.length?la.emptyPath():lu(e)}function au(t){return new la(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lu(t){return $o(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function cu(t,e,n){return{name:su(t,e),fields:n.value.mapValue.fields}}function uu(t,e){let n;if(e instanceof Uc)n={update:cu(t,e.key,e.value)};else if(e instanceof Hc)n={delete:su(t,e.key)};else if(e instanceof Fc)n={update:cu(t,e.key,e.data),updateMask:gu(e.fieldMask)};else{if(!(e instanceof zc))return jo();n={verify:su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ec)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _c)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Tc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ac)return{fieldPath:e.field.canonicalString(),increment:n.Te};throw jo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:eu(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:jo()}(t,e.precondition)),n}function hu(t,e){return t&&t.length>0?($o(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?nu(t.updateTime):nu(e);return n.isEqual(oa.min())&&(n=nu(e)),new Nc(n,t.transformResults||[])}(t,e)))):[]}function fu(t){let e=ou(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){$o(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=du(t);return e instanceof vl&&El(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new pl(pu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ta(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new hl(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new hl(n,e)}(n.endAt)),Ul(e,r,o,s,a,"F",l,c)}function du(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=pu(t.unaryFilter.field);return yl.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=pu(t.unaryFilter.field);return yl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pu(t.unaryFilter.field);return yl.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=pu(t.unaryFilter.field);return yl.create(r,"!=",{nullValue:"NULL_VALUE"});default:return jo()}}(t):void 0!==t.fieldFilter?function(t){return yl.create(pu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return jo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return vl.create(t.compositeFilter.filters.map((t=>du(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return jo()}}(t.compositeFilter.op))}(t):jo()}function pu(t){return ua.fromServerFormat(t.fieldPath)}function gu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function mu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */
/**
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
 */class yu{constructor(t){this.ct=t}}function vu(t){const e=fu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ql(e,e.limit,"L"):e}
/**
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
 */class wu{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt($a(t.integerValue));else if("doubleValue"in t){const n=$a(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),Ia(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(Ha(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?al(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):jo()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const i of Object.keys(n))this.Rt(i,e),this.It(n[i],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const i of n)this.It(i,e)}gt(t,e){this.Et(e,37),ha.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}wu.bt=new wu;
/**
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
 */
class Eu{constructor(){this.sn=new _u}addToCollectionParentIndex(t,e){return this.sn.add(e),Ea.resolve()}getCollectionParents(t,e){return Ea.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return Ea.resolve()}deleteFieldIndex(t,e){return Ea.resolve()}getDocumentsMatchingTarget(t,e){return Ea.resolve(null)}getIndexType(t,e){return Ea.resolve(0)}getFieldIndexes(t,e){return Ea.resolve([])}getNextCollectionGroupToUpdate(t){return Ea.resolve(null)}getMinOffset(t,e){return Ea.resolve(ga.min())}getMinOffsetFromCollectionGroup(t,e){return Ea.resolve(ga.min())}updateCollectionGroup(t,e,n){return Ea.resolve()}updateIndexEntries(t,e){return Ea.resolve()}}class _u{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new xa(la.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new xa(la.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class bu{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new bu(t,bu.DEFAULT_COLLECTION_PERCENTILE,bu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */bu.DEFAULT_COLLECTION_PERCENTILE=10,bu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bu.DEFAULT=new bu(41943040,bu.DEFAULT_COLLECTION_PERCENTILE,bu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bu.DISABLED=new bu(-1,0,0);
/**
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
 */
class Tu{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Tu(0)}static On(){return new Tu(-1)}}
/**
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
 */
/**
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
 */
class Iu{constructor(){this.changes=new Zl((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ul.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ea.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Au{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class Cu{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&xc(n.mutation,t,Va.empty(),sa.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,uc()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=uc()){const i=sc();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=ic();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=sc();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,uc())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=ec();const s=ac(),o=function(){return ac()}();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Fc)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),xc(o.mutation,e,o.mutation.getFieldMask(),sa.now())):s.set(e.key,Va.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Au(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ac();let i=new Oa(((t,e)=>t-e)),r=uc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Va.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||uc()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=oc();l.forEach((t=>{if(!r.has(t)){const i=Pc(e.get(t),n.get(t));null!==i&&c.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Ea.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ha.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):Ea.resolve(sc());let o=-1,a=r;return s.next((e=>Ea.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ea.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,uc()))).next((t=>({batchId:o,changes:rc(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ha(e)).next((t=>{let e=ic();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=ic();return this.indexManager.getCollectionParents(t,i).next((s=>Ea.forEach(s,(s=>{const o=function(t,e){return new Vl(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,ul.newInvalidDocument(i)))}));let n=ic();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&xc(s.mutation,r,Va.empty(),sa.now()),Xl(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class Su{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return Ea.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(t){return{id:t.id,version:t.version,createTime:nu(t.createTime)}}(e)),Ea.resolve()}getNamedQuery(t,e){return Ea.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(t){return{name:t.name,query:vu(t.bundledQuery),readTime:nu(t.readTime)}}(e)),Ea.resolve()}}
/**
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
 */class Du{constructor(){this.overlays=new Oa(ha.comparator),this.cr=new Map}getOverlay(t,e){return Ea.resolve(this.overlays.get(e))}getOverlays(t,e){const n=sc();return Ea.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),Ea.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.cr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),Ea.resolve()}getOverlaysForCollection(t,e,n){const i=sc(),r=e.length+1,s=new ha(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Ea.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Oa(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=sc(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=sc(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return Ea.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.cr.get(i.largestBatchId).delete(n.key);this.cr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Gc(e,n));let r=this.cr.get(e);void 0===r&&(r=uc(),this.cr.set(e,r)),this.cr.set(e,r.add(n.key))}}
/**
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
 */class Nu{constructor(){this.lr=new xa(ku.hr),this.Pr=new xa(ku.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new ku(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new ku(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new ha(new la([])),n=new ku(e,t),i=new ku(e,t+1),r=[];return this.Pr.forEachInRange([n,i],(t=>{this.Er(t),r.push(t.key)})),r}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new ha(new la([])),n=new ku(e,t),i=new ku(e,t+1);let r=uc();return this.Pr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new ku(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ku{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return ha.comparator(t.key,e.key)||ia(t.mr,e.mr)}static Ir(t,e){return ia(t.mr,e.mr)||ha.comparator(t.key,e.key)}}
/**
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
 */class Ru{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new xa(ku.hr)}checkEmpty(t){return Ea.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Kc(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.pr=this.pr.add(new ku(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ea.resolve(s)}lookupMutationBatch(t,e){return Ea.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.wr(n),r=i<0?0:i;return Ea.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ea.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return Ea.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ku(e,0),i=new ku(e,Number.POSITIVE_INFINITY),r=[];return this.pr.forEachInRange([n,i],(t=>{const e=this.yr(t.mr);r.push(e)})),Ea.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new xa(ia);return e.forEach((t=>{const e=new ku(t,0),i=new ku(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,i],(t=>{n=n.add(t.mr)}))})),Ea.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;ha.isDocumentKey(r)||(r=r.child(""));const s=new ku(new ha(r),0);let o=new xa(ia);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.mr)),!0)}),s),Ea.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){$o(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return Ea.forEach(e.mutations,(i=>{const r=new ku(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new ku(e,0),i=this.pr.firstAfterOrEqual(n);return Ea.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ea.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class Ou{constructor(t){this.Dr=t,this.docs=function(){return new Oa(ha.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ea.resolve(n?n.document.mutableCopy():ul.newInvalidDocument(e))}getEntries(t,e){let n=ec();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ul.newInvalidDocument(t))})),Ea.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=ec();const s=e.path,o=new ha(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||ma(pa(o),n)<=0||(i.has(o.key)||Xl(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Ea.resolve(r)}getAllFromCollectionGroup(t,e,n,i){jo()}vr(t,e){return Ea.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Pu(this)}getSize(t){return Ea.resolve(this.size)}}class Pu extends Iu{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(n)})),Ea.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
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
 */class Lu{constructor(t){this.persistence=t,this.Cr=new Zl((t=>xl(t)),Ml),this.lastRemoteSnapshotVersion=oa.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Nu,this.targetCount=0,this.Or=Tu.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),Ea.resolve()}getLastRemoteSnapshotVersion(t){return Ea.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ea.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),Ea.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),Ea.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Tu(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,Ea.resolve()}updateTargetData(t,e){return this.Ln(e),Ea.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,Ea.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Ea.waitFor(r).next((()=>i))}getTargetCount(t){return Ea.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return Ea.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),Ea.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Ea.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),Ea.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return Ea.resolve(n)}containsKey(t,e){return Ea.resolve(this.Mr.containsKey(e))}}
/**
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
 */class xu{constructor(t,e){this.Nr={},this.overlays={},this.Br=new ba(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new Lu(this),this.indexManager=new Eu,this.remoteDocumentCache=function(t){return new Ou(t)}((t=>this.referenceDelegate.qr(t))),this.serializer=new yu(e),this.Qr=new Su(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Du,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new Ru(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){Vo("MemoryPersistence","Starting transaction:",t);const i=new Mu(this.Br.next());return this.referenceDelegate.Kr(),n(i).next((t=>this.referenceDelegate.$r(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ur(t,e){return Ea.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class Mu extends va{constructor(t){super(),this.currentSequenceNumber=t}}class Vu{constructor(t){this.persistence=t,this.Wr=new Nu,this.Gr=null}static zr(t){return new Vu(t)}get jr(){if(this.Gr)return this.Gr;throw jo()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),Ea.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),Ea.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),Ea.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ea.forEach(this.jr,(n=>{const i=ha.fromPath(n);return this.Hr(t,i).next((t=>{t||e.removeEntry(i,oa.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return Ea.or([()=>Ea.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
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
 */
class Uu{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=i}static qi(t,e){let n=uc(),i=uc();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Uu(t,e.fromCache,n,i)}}
/**
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
 */class Fu{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.$i(t,e).next((r=>r||this.Ui(t,e,i,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(Bl(e))return Ea.resolve(null);let n=Kl(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=ql(e,null,"F"),n=Kl(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=uc(...i);return this.Ki.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Gi(e,i);return this.zi(e,s,r,n.readTime)?this.$i(t,ql(e,null,"F")):this.ji(t,s,e,n)}))))})))))}Ui(t,e,n,i){return Bl(e)||i.isEqual(oa.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((r=>{const s=this.Gi(e,r);return this.zi(e,s,n,i)?this.Wi(t,e):(Mo()<=lt.DEBUG&&Vo("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wl(e)),this.ji(t,s,e,da(i,-1)))}))}Gi(t,e){let n=new xa(Yl(t));return e.forEach(((e,i)=>{Xl(t,i)&&(n=n.add(i))})),n}zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Wi(t,e){return Mo()<=lt.DEBUG&&Vo("QueryEngine","Using full collection scan to execute query:",Wl(e)),this.Ki.getDocumentsMatchingQuery(t,e,ga.min())}ji(t,e,n,i){return this.Ki.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class Bu{constructor(t,e,n,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new Oa(ia),this.Yi=new Zl((t=>xl(t)),Ml),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Cu(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function ju(t,e,n,i){return new Bu(t,e,n,i)}async function $u(t,e){const n=Ho(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=uc();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Hu(t,e){const n=Ho(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.Xi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Ea.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);$o(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=uc();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function zu(t){const e=Ho(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function Ku(t,e){const n=Ho(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class qu{constructor(){this.activeTargetIds=fc()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gu{constructor(){this.Hs=new qu,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new qu,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Qu{Ys(t){}shutdown(){}}
/**
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
 */class Wu{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Vo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){Vo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Xu=null;function Yu(){return null===Xu?Xu=function(){return 268435456+Math.round(2147483648*Math.random())}():Xu++,"0x"+Xu.toString(16)
/**
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
 */}const Ju={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Zu{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
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
 */const th="WebChannelConnection";class eh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${i}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Ro(){return!1}Vo(t,e,n,i,r){const s=Yu(),o=this.mo(t,e);Vo("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,i,r),this.po(t,o,a,n).then((e=>(Vo("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Fo("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,i,r,s){return this.Vo(t,e,n,i,r)}fo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Lo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=Ju[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,i){const r=Yu();return new Promise(((s,o)=>{const a=new ko;a.setWithCredentials(!0),a.listenOnce(Ao.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Io.NO_ERROR:const e=a.getResponseJson();Vo(th,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case Io.TIMEOUT:Vo(th,`RPC '${t}' ${r} timed out`),o(new Ko(zo.DEADLINE_EXCEEDED,"Request time out"));break;case Io.HTTP_ERROR:const n=a.getStatus();if(Vo(th,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(zo).indexOf(e)>=0?e:zo.UNKNOWN}(e.status);o(new Ko(t,e.message))}else o(new Ko(zo.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ko(zo.UNAVAILABLE,"Connection failed."));break;default:jo()}}finally{Vo(th,`RPC '${t}' ${r} completed.`)}}));const l=JSON.stringify(i);Vo(th,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",l,n,15)}))}wo(t,e,n){const i=Yu(),r=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=bo(),o=To(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new Do({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Vo(th,`Creating RPC '${t}' stream ${i}: ${c}`,a);const u=s.createWebChannel(c,a);let h=!1,f=!1;const d=new Zu({so:e=>{f?Vo(th,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(h||(Vo(th,`Opening RPC '${t}' stream ${i} transport.`),u.open(),h=!0),Vo(th,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},oo:()=>u.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,No.EventType.OPEN,(()=>{f||Vo(th,`RPC '${t}' stream ${i} transport opened.`)})),p(u,No.EventType.CLOSE,(()=>{f||(f=!0,Vo(th,`RPC '${t}' stream ${i} transport closed`),d.Po())})),p(u,No.EventType.ERROR,(e=>{f||(f=!0,Fo(th,`RPC '${t}' stream ${i} transport errored:`,e),d.Po(new Ko(zo.UNAVAILABLE,"The operation could not be completed")))})),p(u,No.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];$o(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Vo(th,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Qc[t];if(void 0!==e)return Yc(e)}(e),r=o.message;void 0===n&&(n=zo.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Po(new Ko(n,r)),u.close()}else Vo(th,`RPC '${t}' stream ${i} received:`,r),d.Io(r)}})),p(o,Co.STAT_EVENT,(e=>{e.stat===So.PROXY?Vo(th,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===So.NOPROXY&&Vo(th,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.ho()}),0),d}}
/**
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
 */
/**
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
 */function nh(){return"undefined"!=typeof document?document:null}
/**
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
 */function ih(t){return new Jc(t,!0)}
/**
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
 */class rh{constructor(t,e,n=1e3,i=1.5,r=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=i,this.Do=r,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-n);i>0&&Vo("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
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
 */class sh{constructor(t,e,n,i,r,s,o,a){this.ii=t,this.Bo=n,this.Lo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new rh(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===zo.RESOURCE_EXHAUSTED?(Uo(e.toString()),Uo("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===zo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new Ko(zo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return Vo("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(Vo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oh extends sh{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if($o(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=hu(t.writeResults,t.commitTime),n=nu(t.commitTime);return this.listener.u_(n,e)}return $o(!t.writeResults||0===t.writeResults.length),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=au(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>uu(this.serializer,t)))};this.Ho(e)}}
/**
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
 */class ah extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new Ko(zo.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.Vo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ko(zo.UNKNOWN,t.toString())}))}yo(t,e,n,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.yo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===zo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ko(zo.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class lh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Uo(e),this.d_=!1):Vo("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
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
 */class ch{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=r,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{fh(this)&&(Vo("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Ho(t);e.y_.add(4),await hh(e),e.b_.set("Unknown"),e.y_.delete(4),await uh(e)}(this))}))})),this.b_=new lh(n,i)}}async function uh(t){if(fh(t))for(const e of t.w_)await e(!0)}async function hh(t){for(const e of t.w_)await e(!1)}function fh(t){return 0===Ho(t).y_.size}async function dh(t,e,n){if(!_a(e))throw e;t.y_.add(1),await hh(t),t.b_.set("Offline"),n||(n=()=>zu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Vo("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await uh(t)}))}function ph(t,e){return e().catch((n=>dh(t,n,e)))}async function gh(t){const e=Ho(t),n=Ch(e);let i=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;mh(e);)try{const t=await Ku(e.localStore,i);if(null===t){0===e.g_.length&&n.zo();break}i=t.batchId,yh(e,t)}catch(t){await dh(e,t)}vh(e)&&wh(e)}function mh(t){return fh(t)&&t.g_.length<10}function yh(t,e){t.g_.push(e);const n=Ch(t);n.Uo()&&n.__&&n.a_(e.mutations)}function vh(t){return fh(t)&&!Ch(t).$o()&&t.g_.length>0}function wh(t){Ch(t).start()}async function Eh(t){Ch(t).l_()}async function _h(t){const e=Ch(t);for(const n of t.g_)e.a_(n.mutations)}async function bh(t,e,n){const i=t.g_.shift(),r=qc.from(i,e,n);await ph(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await gh(t)}async function Th(t,e){e&&Ch(t).__&&await async function(t,e){if(function(t){return Xc(t)&&t!==zo.ABORTED}(e.code)){const n=t.g_.shift();Ch(t).Go(),await ph(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await gh(t)}}(t,e),vh(t)&&wh(t)}async function Ih(t,e){const n=Ho(t);n.asyncQueue.verifyOperationInProgress(),Vo("RemoteStore","RemoteStore received new credentials");const i=fh(n);n.y_.add(3),await hh(n),i&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await uh(n)}async function Ah(t,e){const n=Ho(t);e?(n.y_.delete(2),await uh(n)):e||(n.y_.add(2),await hh(n),n.b_.set("Unknown"))}function Ch(t){return t.C_||(t.C_=function(t,e,n){const i=Ho(t);return i.P_(),new oh(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{_o:Eh.bind(null,t),uo:Th.bind(null,t),c_:_h.bind(null,t),u_:bh.bind(null,t)}),t.w_.push((async e=>{e?(t.C_.Go(),await gh(t)):(await t.C_.stop(),t.g_.length>0&&(Vo("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))}))),t.C_
/**
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
 */}class Sh{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new qo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Sh(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ko(zo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dh(t,e){if(Uo("AsyncQueue",`${e}: ${t}`),_a(t))return new Ko(zo.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class Nh{constructor(){this.queries=new Zl((t=>Ql(t)),Gl),this.onlineState="Unknown",this.O_=new Set}}function kh(t){t.O_.forEach((t=>{t.next()}))}class Rh{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new Zl((t=>Ql(t)),Gl),this.da=new Map,this.Aa=new Set,this.Ra=new Oa(ha.comparator),this.Va=new Map,this.ma=new Nu,this.fa={},this.ga=new Map,this.pa=Tu.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Oh(t,e,n){const i=Bh(t);try{const t=await function(t,e){const n=Ho(t),i=sa.now(),r=e.reduce(((t,e)=>t.add(e.key)),uc());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ec(),l=uc();return n.Xi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Mc(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Fc(t.key,e,cl(e.value.mapValue),kc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:rc(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.fa[t.currentUser.toKey()];i||(i=new Oa(ia)),i=i.insert(e,n),t.fa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Uh(i,t.changes),await gh(i.remoteStore)}catch(t){const e=Dh(t,"Failed to persist write");n.reject(e)}}function Ph(t,e,n){const i=Ho(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Ea.forEach(((n,i)=>{const r=i.view.N_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Ho(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.N_(e)&&(i=!0)})),i&&kh(n)}(i.eventManager,e),t.length&&i.Ta.r_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Lh(t,e){const n=Ho(t),i=e.batch.batchId;try{const t=await Hu(n.localStore,e);Vh(n,i,null),Mh(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Uh(n,t)}catch(t){await wa(t)}}async function xh(t,e,n){const i=Ho(t);try{const t=await function(t,e){const n=Ho(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>($o(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Vh(i,e,n),Mh(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Uh(i,t)}catch(n){await wa(n)}}function Mh(t,e){(t.ga.get(e)||[]).forEach((t=>{t.resolve()})),t.ga.delete(e)}function Vh(t,e,n){const i=Ho(t);let r=i.fa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.fa[i.currentUser.toKey()]=r}}async function Uh(t,e,n){const i=Ho(t),r=[],s=[],o=[];i.Ea.isEmpty()||(i.Ea.forEach(((t,a)=>{o.push(i.wa(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=Uu.qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Ta.r_(r),await async function(t,e){const n=Ho(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ea.forEach(e,(e=>Ea.forEach(e.Li,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Ea.forEach(e.ki,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!_a(t))throw t;Vo("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,r)}}}(i.localStore,s))}async function Fh(t,e){const n=Ho(t);if(!n.currentUser.isEqual(e)){Vo("SyncEngine","User change. New user:",e.toKey());const t=await $u(n.localStore,e);n.currentUser=e,function(t,e){t.ga.forEach((t=>{t.forEach((t=>{t.reject(new Ko(zo.CANCELLED,e))}))})),t.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Uh(n,t.ts)}}function Bh(t){const e=Ho(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xh.bind(null,e),e}class jh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ih(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return ju(this.persistence,new Fu,t.initialUser,this.serializer)}createPersistence(t){return new xu(Vu.zr,this.serializer)}createSharedClientState(t){return new Gu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $h{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ph(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fh.bind(null,this.syncEngine),await Ah(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Nh}()}createDatastore(t){const e=ih(t.databaseInfo.databaseId),n=function(t){return new eh(t)}(t.databaseInfo);return function(t,e,n,i){return new ah(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new ch(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>Ph(this.syncEngine,t,0)),function(){return Wu.v()?new Wu:new Qu}())}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Rh(t,e,n,i,r,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Ho(t);Vo("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await hh(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
class Hh{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Po.UNAUTHENTICATED,this.clientId=na.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Vo("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Vo("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ko(zo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Dh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function zh(t,e){t.asyncQueue.verifyOperationInProgress(),Vo("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await $u(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gh(t);Vo("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Ih(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ih(e.remoteStore,n))),t._onlineComponents=e}function qh(t){return"FirebaseError"===t.name?t.code===zo.FAILED_PRECONDITION||t.code===zo.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Gh(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Vo("FirestoreClient","Using user provided OfflineComponentProvider");try{await zh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qh(n))throw n;Fo("Error using user provided cache. Falling back to memory cache: "+n),await zh(t,new jh)}}else Vo("FirestoreClient","Using default OfflineComponentProvider"),await zh(t,new jh);return t._offlineComponents}async function Qh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Vo("FirestoreClient","Using user provided OnlineComponentProvider"),await Kh(t,t._uninitializedComponentsProvider._online)):(Vo("FirestoreClient","Using default OnlineComponentProvider"),await Kh(t,new $h))),t._onlineComponents}function Wh(t){return Qh(t).then((t=>t.syncEngine))}
/**
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
 */
function Xh(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const Yh=new Map;
/**
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
 */function Jh(t,e,n){if(!n)throw new Ko(zo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zh(t,e,n,i){if(!0===e&&!0===i)throw new Ko(zo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function tf(t){if(!ha.isDocumentKey(t))throw new Ko(zo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ef(t){if(ha.isDocumentKey(t))throw new Ko(zo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":jo()}function rf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ko(zo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nf(t);throw new Ko(zo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class sf{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Ko(zo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ko(zo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Zh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xh(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Ko(zo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Ko(zo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Ko(zo.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class of{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ko(zo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ko(zo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Qo;switch(t.type){case"firstParty":return new Jo(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ko(zo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Yh.get(t);e&&(Vo("ComponentProvider","Removing Datastore"),Yh.delete(t),e.terminate())}(this),Promise.resolve()}}function af(t,e,n,i={}){var r;const s=(t=rf(t,of))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Po.MOCK_USER;else{e=z(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Ko(zo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Po(s)}t._authCredentials=new Wo(new Go(e,n))}}
/**
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
 */class lf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new lf(this.firestore,t,this._query)}}class cf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new cf(this.firestore,t,this._key)}}class uf extends lf{constructor(t,e,n){super(t,e,Fl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new cf(this.firestore,null,new ha(t))}withConverter(t){return new uf(this.firestore,t,this._path)}}function hf(t,e,...n){if(t=tt(t),Jh("collection","path",e),t instanceof of){const i=la.fromString(e,...n);return ef(i),new uf(t,null,i)}{if(!(t instanceof cf||t instanceof uf))throw new Ko(zo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(la.fromString(e,...n));return ef(i),new uf(t.firestore,null,i)}}function ff(t,e,...n){if(t=tt(t),1===arguments.length&&(e=na.V()),Jh("doc","path",e),t instanceof of){const i=la.fromString(e,...n);return tf(i),new cf(t,null,new ha(i))}{if(!(t instanceof cf||t instanceof uf))throw new Ko(zo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(la.fromString(e,...n));return tf(i),new cf(t.firestore,t instanceof uf?t.converter:null,new ha(i))}}
/**
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
 */
class df{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new rh(this,"async_queue_retry"),this.Xa=()=>{const t=nh();t&&Vo("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=nh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=nh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new qo;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!_a(t))throw t;Vo("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw Uo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=Sh.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(i),i}eu(){this.Ha&&jo()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class pf extends of{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=function(){return new df}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yf(this),this._firestoreClient.terminate()}}function gf(t,e){const n="object"==typeof t?t:Ae(),i="string"==typeof t?t:e||"(default)",r=we(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=j("firestore");t&&af(r,...t)}return r}function mf(t){return t._firestoreClient||yf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yf(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Ga(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Xh(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Hh(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
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
 */
class vf{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vf(Fa.fromBase64String(t))}catch(t){throw new Ko(zo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new vf(Fa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
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
 */class wf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ko(zo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ua(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
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
 */
class Ef{constructor(t){this._methodName=t}}
/**
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
 */class _f{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ko(zo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ko(zo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ia(this._lat,t._lat)||ia(this._long,t._long)}}
/**
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
 */const bf=/^__.*__$/;class Tf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Fc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Uc(t,this.data,e,this.fieldTransforms)}}function If(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw jo()}}class Af{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.au(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Af(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.Pu(t),i}Iu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.cu({path:n,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return Mf(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(0===t.length)throw this.Eu("Document fields must not be empty");if(If(this.uu)&&bf.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Cf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ih(t)}Ru(t,e,n,i=!1){return new Af({uu:t,methodName:e,Au:n,path:ua.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sf(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new Cf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Df(t,e,n,i,r,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,r);Of("Data must be an object, but it was:",o,i);const a=kf(i,o);let l,c;if(s.merge)l=new Va(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Pf(e,i,n);if(!o.contains(r))throw new Ko(zo.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Vf(t,r)||t.push(r)}l=new Va(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new Tf(new ll(a),l,c)}function Nf(t,e){if(Rf(t=tt(t)))return Of("Unsupported field value:",e,t),kf(t,e);if(t instanceof Ef)return function(t,e){if(!If(e.uu))throw e.Eu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Eu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&4!==e.uu)throw e.Eu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Nf(r,e.Tu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=tt(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return gc(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=sa.fromDate(t);return{timestampValue:Zc(e.serializer,n)}}if(t instanceof sa){const n=new sa(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Zc(e.serializer,n)}}if(t instanceof _f)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof vf)return{bytesValue:tu(e.serializer,t._byteString)};if(t instanceof cf){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Eu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:iu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Eu(`Unsupported field value: ${nf(t)}`)}(t,e)}function kf(t,e){const n={};return Ra(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ka(t,((t,i)=>{const r=Nf(i,e.lu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Rf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof sa||t instanceof _f||t instanceof vf||t instanceof cf||t instanceof Ef)}function Of(t,e,n){if(!Rf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=nf(n);throw"an object"===i?e.Eu(t+" a custom object"):e.Eu(t+" "+i)}}function Pf(t,e,n){if((e=tt(e))instanceof wf)return e._internalPath;if("string"==typeof e)return xf(t,e);throw Mf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Lf=new RegExp("[~\\*/\\[\\]]");function xf(t,e,n){if(e.search(Lf)>=0)throw Mf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wf(...e.split("."))._internalPath}catch(on){throw Mf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mf(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Ko(zo.INVALID_ARGUMENT,a+t+l)}function Vf(t,e){return t.some((t=>t.isEqual(e)))}
/**
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
 */
/**
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
 */
function Uf(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function Ff(t,e){const n=rf(t.firestore,pf),i=ff(t),r=Uf(t.converter,e);return Bf(n,[Df(Sf(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,kc.exists(!1))]).then((()=>i))}function Bf(t,e){return function(t,e){const n=new qo;return t.asyncQueue.enqueueAndForget((async()=>Oh(await Wh(t),e,n))),n.promise}(mf(t),e)}!function(t,e=!0){!function(t){Lo=t}(Te),ve(new et("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new pf(new Xo(t.getProvider("auth-internal")),new ta(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ko(zo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Ce(Oo,"4.1.0",t),Ce(Oo,"4.1.0","esm2017")}();
/**
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
 */
const jf="firebasestorage.googleapis.com",$f="storageBucket",Hf=12e4,zf=6e5;
/**
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
 */
class Kf extends Q{constructor(t,e,n=0){super(Qf(t),`Firebase Storage: ${e} (${Qf(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Kf.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Qf(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var qf,Gf;function Qf(t){return"storage/"+t}function Wf(){const t="An unknown error occurred, please check the error payload for server response.";return new Kf(qf.UNKNOWN,t)}function Xf(){return new Kf(qf.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Yf(){return new Kf(qf.CANCELED,"User canceled the upload/download.")}function Jf(t){return new Kf(qf.INVALID_URL,"Invalid URL '"+t+"'.")}function Zf(t){return new Kf(qf.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function td(t){return new Kf(qf.INVALID_ARGUMENT,t)}function ed(){return new Kf(qf.APP_DELETED,"The Firebase app was deleted.")}function nd(t){return new Kf(qf.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(qf||(qf={}));
/**
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
 */
class id{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=id.makeFromUrl(t,e)}catch(i){return new id(t,"")}if(""===n.path)return n;throw Zf(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),a={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const c="v[A-Za-z0-9_]+",u=e.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",f=new RegExp(`^https?://${u}/${c}/b/${i}/o${h}`,"i"),d={bucket:1,path:3},p=e===jf?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",m=new RegExp(`^https?://${p}/${i}/${g}`,"i"),y={bucket:1,path:2},v=[{regex:o,indices:a,postModify:r},{regex:f,indices:d,postModify:l},{regex:m,indices:y,postModify:l}];for(let w=0;w<v.length;w++){const e=v[w],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new id(t,r),e.postModify(n);break}}if(null==n)throw Jf(t);return n}}class rd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
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
 */function sd(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function h(e){r=setTimeout((()=>{r=null,t(d,l())}),e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(c)return void f();if(t)return f(),void u.call(null,t,...e);const n=l()||o;if(n)return f(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function g(t){p||(p=!0,f(),c||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}function od(t){t(!1)}
/**
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
 */function ad(t){return void 0!==t}function ld(t,e,n,i){if(i<e)throw td(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw td(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
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
 */function cd(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
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
 */
/**
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
 */
function ud(t,e){const n=t>=500&&t<600,i=[408,429],r=-1!==i.indexOf(t),s=-1!==e.indexOf(t);return n||r||s}
/**
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(Gf||(Gf={}));class hd{constructor(t,e,n,i,r,s,o,a,l,c,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new fd(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Gf.NO_ERROR,r=n.getStatus();if(!e||ud(r,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===Gf.ABORT;return void t(!1,new fd(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new fd(s,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());ad(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=Wf();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?ed():Yf();i(t)}else{const t=Xf();i(t)}};this.canceled_?e(!1,new fd(!1,null,!0)):this.backoffId_=sd(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&od(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class fd{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function dd(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function pd(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function gd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function md(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function yd(t,e,n,i,r,s,o=!0){const a=cd(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return gd(c,e),dd(c,n),pd(c,s),md(c,i),new hd(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}
/**
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
 */
/**
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
 */
function vd(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function wd(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
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
 */
/**
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
 */
class Ed{constructor(t,e){this._service=t,this._location=e instanceof id?e:id.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ed(t,e)}get root(){const t=new id(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return wd(this._location.path)}get storage(){return this._service}get parent(){const t=vd(this._location.path);if(null===t)return null;const e=new id(this._location.bucket,t);return new Ed(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw nd(t)}}function _d(t,e){const n=null===e||void 0===e?void 0:e[$f];return null==n?null:id.makeFromBucketSpec(n,t)}function bd(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:z(r,t.app.options.projectId))}class Td{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=jf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Hf,this._maxUploadRetryTime=zf,this._requests=new Set,this._bucket=null!=i?id.makeFromBucketSpec(i,this._host):_d(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=id.makeFromBucketSpec(this._url,t):this._bucket=_d(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){ld("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){ld("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ed(this,t)}_makeRequest(t,e,n,i,r=!0){if(this._deleted)return new rd(ed());{const s=yd(t,this._appId,n,i,e,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Id="@firebase/storage",Ad="0.11.2",Cd="storage";function Sd(t=Ae(),e){t=tt(t);const n=we(t,Cd),i=n.getImmediate({identifier:e}),r=j("storage");return r&&Dd(i,...r),i}function Dd(t,e,n,i={}){bd(t,e,n,i)}
/**
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
 */function Nd(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Td(n,i,r,e,Te)}function kd(){ve(new et(Cd,Nd,"PUBLIC").setMultipleInstances(!0)),Ce(Id,Ad,""),Ce(Id,Ad,"esm2017")}kd();const Rd={apiKey:"AIzaSyDTV5FH25uhufL7TyVnKqK9LRS5Yn26cE4",authDomain:"protfilo2023.firebaseapp.com",databaseURL:"https://protfilo2023-default-rtdb.firebaseio.com",projectId:"protfilo2023",storageBucket:"protfilo2023.appspot.com",messagingSenderId:"1017734536453",appId:"1:1017734536453:web:6a744311c6fb4abf6a2b6c",measurementId:"G-YNK4MYE5H9"};Ie(Rd);const Od=gf();Sd();var Pd={name:"contact",props:{},components:{},setup(){const t=(0,S.iH)(""),e=(0,S.iH)(""),n=(0,S.iH)(""),r=(0,S.iH)(""),s=(0,S.iH)(""),o=(0,S.iH)(""),a=(0,S.iH)(""),l=(0,S.iH)(""),c=(0,S.iH)(null),u=(0,S.iH)(null),h=(0,S.iH)(null),f=(0,S.iH)(null),d=()=>{t.value.length<0?s.value="성함을 입력해주세요.":s.value=""},p=()=>{const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;e.value.length<0?o.value="이메일 입력해주세요.":!t.test(e.value)&&e.value.length>0?o.value="유효한 이메일 주소를 입력해주세요.":o.value=""},g=()=>{const t=/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/,e=n.value.replace(/[^\d]/g,"");"02"==e.substr(0,2)?e.length<=5?n.value=e.substr(0,2)+"-"+e.substr(2,3):e.length>5&&e.length<=9?n.value=e.substr(0,2)+"-"+e.substr(2,3)+"-"+e.substr(5):e.length>9&&(n.value=e.substr(0,2)+"-"+e.substr(2,4)+"-"+e.substr(6)):e.length<8?n.value=e:8==e.length?n.value=e.substr(0,4)+"-"+e.substr(4):9==e.length||10==e.length?n.value=e.substr(0,3)+"-"+e.substr(3,3)+"-"+e.substr(6):e.length>10&&(n.value=e.substr(0,3)+"-"+e.substr(3,4)+"-"+e.substr(7)),n.value.length<0?a.value="휴대폰 번호를 입력해주세요.":!t.test(n.value)&&n.value.length>0?a.value="유효하지 않은 전화 번호. 11자리 숫자를 입력하세요.":a.value=""},m=()=>{""===r.value.trim()&&r.value.length<0?l.value="프로젝트 내용을 입력해주세요.":l.value=""},y=async i=>{i.preventDefault();try{if(t.value&&e.value&&n.value&&r.value){const i=hf(Od,"formData"),c={name:t.value,email:e.value,phoneNumber:n.value,projectName:r.value};await Ff(i,c);alert("프로젝트 의뢰를 완료했습니다. 감사합니다."),t.value="",e.value="",n.value="",r.value="",s.value="",o.value="",a.value="",l.value=""}else 0==t.value.length?(s.value="성함을 입력해주세요.",c.value.focus(),alert("성함을 입력해주세요")):0==e.value.length?(o.value="이메일 입력해주세요.",alert("이메일 입력해주세요. "),u.value.focus()):0==n.value.length?(a.value="휴대폰번호를 입력해주세요",h.value.focus(),console.log(h.value),alert("휴대폰번호를 입력해주세요.")):0==r.value.length&&(l.value="프로젝트 내용을 입력해주세요.",console.log(f,f.value),f.value.focus(),alert("프로젝트 내용을 입력해주세요."))}catch(d){console.error("error",d)}};return(0,i.YP)(t,(()=>{d()})),(0,i.YP)(e,(()=>{p()})),(0,i.YP)(n,(()=>{g()})),(0,i.YP)(r,(()=>{m()})),(0,i.bv)((()=>{})),{name:t,email:e,phoneNumber:n,nameError:s,emailError:o,phoneError:a,projectError:l,projectName:r,nameInput:c,emaiInput:u,phoneInput:h,projectInput:f,submitForm:y,validateName:d,validateEmail:p,validatePhoneNumber:g,validateTextarea:m}}},Ld=n(89);const xd=(0,Ld.Z)(Pd,[["render",C],["__scopeId","data-v-c05c4806"]]);var Md=xd}}]);
//# sourceMappingURL=502.d5d40127.js.map