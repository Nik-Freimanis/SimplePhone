(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8007)}])},8007:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return T}});var t,o=r(1844),i=r(4264),a=r.n(i),s=r(5784),c=r(5796),l=r.n(c),u=r(3535),f=r.n(u);let _=(0,s.forwardRef)((e,n)=>(0,o.jsx)("input",{className:f().input,ref:n,...e}));_.displayName="Input";var m=r(8949);if(!s.useState)throw Error("mobx-react-lite requires React with Hooks support");if(!m.rC)throw Error("mobx-react-lite@3 requires mobx at least version 6 to be available");var d=r(8369);function g(e){return(0,m.Gf)(e)}var p=function(){function e(e){var n=this;Object.defineProperty(this,"finalize",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"registrations",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"sweepTimeout",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sweep",{enumerable:!0,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=1e4),clearTimeout(n.sweepTimeout),n.sweepTimeout=void 0;var r=Date.now();n.registrations.forEach(function(t,o){r-t.registeredAt>=e&&(n.finalize(t.value),n.registrations.delete(o))}),n.registrations.size>0&&n.scheduleSweep()}}),Object.defineProperty(this,"finalizeAllImmediately",{enumerable:!0,configurable:!0,writable:!0,value:function(){n.sweep(0)}})}return Object.defineProperty(e.prototype,"register",{enumerable:!1,configurable:!0,writable:!0,value:function(e,n,r){this.registrations.set(r,{value:n,registeredAt:Date.now()}),this.scheduleSweep()}}),Object.defineProperty(e.prototype,"unregister",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.registrations.delete(e)}}),Object.defineProperty(e.prototype,"scheduleSweep",{enumerable:!1,configurable:!0,writable:!0,value:function(){void 0===this.sweepTimeout&&(this.sweepTimeout=setTimeout(this.sweep,1e4))}}),e}(),b=new("undefined"!=typeof FinalizationRegistry?FinalizationRegistry:p)(function(e){var n;null===(n=e.reaction)||void 0===n||n.dispose(),e.reaction=null}),h=r(1688),v=function(){};function y(e){e.reaction=new m.le("observer".concat(e.name),function(){var n;e.stateVersion=Symbol(),null===(n=e.onStoreChange)||void 0===n||n.call(e)})}var w="function"==typeof Symbol&&Symbol.for,x=w?Symbol.for("react.forward_ref"):"function"==typeof s.forwardRef&&(0,s.forwardRef)(function(e){return null}).$$typeof,j=w?Symbol.for("react.memo"):"function"==typeof s.memo&&(0,s.memo)(function(e){return null}).$$typeof,P={$$typeof:!0,render:!0,compare:!0,type:!0,displayName:!0};(t=d.unstable_batchedUpdates)||(t=function(e){e()}),(0,m.jQ)({reactionScheduler:t}),b.finalizeAllImmediately;var S=r(8824);let N=function(e,n){if(j&&e.$$typeof===j)throw Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");var r,t=null!==(r=null==n?void 0:n.forwardRef)&&void 0!==r&&r,o=e,i=e.displayName||e.name;if(x&&e.$$typeof===x&&(t=!0,"function"!=typeof(o=e.render)))throw Error("[mobx-react-lite] `render` property of ForwardRef was not a function");var a=function(e,n){return function(e,n){void 0===n&&(n="observed");var r,t,o=s.useRef(null);if(!o.current){var i={reaction:null,onStoreChange:null,stateVersion:Symbol(),name:n,subscribe:function(e){return b.unregister(i),i.onStoreChange=e,i.reaction||(y(i),i.stateVersion=Symbol()),function(){var e;i.onStoreChange=null,null===(e=i.reaction)||void 0===e||e.dispose(),i.reaction=null}},getSnapshot:function(){return i.stateVersion}};o.current=i}var a=o.current;if(a.reaction||(y(a),b.register(o,a,a)),s.useDebugValue(a.reaction,g),(0,h.useSyncExternalStore)(a.subscribe,a.getSnapshot,v),a.reaction.track(function(){try{r=e()}catch(e){t=e}}),t)throw t;return r}(function(){return o(e,n)},i)};return a.displayName=e.displayName,Object.defineProperty(a,"name",{value:e.name,writable:!0,configurable:!0}),e.contextTypes&&(a.contextTypes=e.contextTypes),t&&(a=(0,s.forwardRef)(a)),function(e,n){Object.keys(e).forEach(function(r){P[r]||Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(e,r))})}(e,a=(0,s.memo)(a)),a}(()=>{let[e,n]=(0,s.useState)({login:"",password:"",server:"",remember:!1}),[r,t]=(0,s.useState)(""),i=(0,S.FS)(),[a,c]=(0,s.useState)(!1);(0,s.useEffect)(()=>{i.errorMessage?(t(i.errorMessage),c(!1)):t("")},[i.errorMessage]);let u=r=>{let{name:t,value:o,type:i}=r.target;"checkbox"===i?n({...e,[t]:r.target.checked}):n({...e,[t]:o})},f=n=>{n.preventDefault(),c(!0),i.registerUserAgent(e)};return(0,o.jsx)("div",{className:l().loginPage,children:(0,o.jsxs)("div",{className:l().loginPage__container,children:[(0,o.jsx)("div",{className:l().loginPage__container_title,children:(0,o.jsx)("h2",{children:"Hi, Welcome!"})}),(0,o.jsx)("p",{children:"Provide your SIP Account"}),(0,o.jsx)("p",{className:l().loginPage__container_error,children:r}),(0,o.jsxs)("form",{className:l().loginPage__container_form,onSubmit:f,children:[(0,o.jsxs)("div",{className:l().loginPage__container_form_container,children:[(0,o.jsxs)("div",{className:l().loginPage__container_form_container_item,children:[(0,o.jsx)("label",{htmlFor:"login",children:"Login"}),(0,o.jsx)(_,{type:"text",id:"login",name:"login",value:e.login,onChange:u,required:!0})]}),(0,o.jsxs)("div",{className:l().loginPage__container_form_container_item,children:[(0,o.jsx)("label",{htmlFor:"password",children:"Password"}),(0,o.jsx)(_,{type:"password",id:"password",name:"password",value:e.password,onChange:u,required:!0})]}),(0,o.jsxs)("div",{className:l().loginPage__container_form_container_item,children:[(0,o.jsx)("label",{htmlFor:"server",children:"Server"}),(0,o.jsx)(_,{type:"text",id:"server",name:"server",value:e.server,onChange:u,required:!0})]}),(0,o.jsxs)("div",{className:l().loginPage__container_form_checkbox,children:[(0,o.jsx)("input",{type:"checkbox",id:"remember",name:"remember",checked:e.remember,onChange:u}),(0,o.jsx)("label",{htmlFor:"remember",children:"Remember Me"})]})]}),(0,o.jsx)("button",{type:"submit",children:"Log in"})]})]})})}),E=()=>(0,o.jsx)("div",{children:(0,o.jsx)(N,{})});var O=r(5565),R=r(7015);let k=()=>(0,o.jsx)("div",{children:"Homepage"});function T(){let e=(0,O.t)(),n=(0,S.FS)();return(0,s.useEffect)(()=>{let e=sessionStorage.getItem("userLoginInfo");if(e){let r=JSON.parse(e);n.registerUserAgent(r)}},[]),(0,o.jsxs)("div",{className:a().pageContainer,children:[e.currentRoute===R.D&&(0,o.jsx)(E,{}),e.currentRoute===R.s&&(0,o.jsx)(k,{})]})}},5796:function(e){e.exports={loginPage:"styles_loginPage__Y9mSs",loginPage__container:"styles_loginPage__container__QAwx0",loginPage__container_title:"styles_loginPage__container_title__5wRi1",loginPage__container_error:"styles_loginPage__container_error__4Zxe7",loginPage__container_form:"styles_loginPage__container_form__aBQFG",loginPage__container_form_container:"styles_loginPage__container_form_container__fNSmR",loginPage__container_form_container_item:"styles_loginPage__container_form_container_item__Hzt8s",loginPage__container_form_checkbox:"styles_loginPage__container_form_checkbox__DBTzj"}},3535:function(e){e.exports={input:"styles_input__t6iPK"}},4264:function(e){e.exports={"page-container":"styles_page-container__VehrN"}},3250:function(e,n,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(5784),o="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},i=t.useState,a=t.useEffect,s=t.useLayoutEffect,c=t.useDebugValue;function l(e){var n=e.getSnapshot;e=e.value;try{var r=n();return!o(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var r=n(),t=i({inst:{value:r,getSnapshot:n}}),o=t[0].inst,u=t[1];return s(function(){o.value=r,o.getSnapshot=n,l(o)&&u({inst:o})},[e,r,n]),a(function(){return l(o)&&u({inst:o}),e(function(){l(o)&&u({inst:o})})},[e]),c(r),r};n.useSyncExternalStore=void 0!==t.useSyncExternalStore?t.useSyncExternalStore:u},1688:function(e,n,r){"use strict";e.exports=r(3250)}},function(e){e.O(0,[888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);