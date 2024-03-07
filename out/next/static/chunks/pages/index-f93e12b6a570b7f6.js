(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1599)}])},1599:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(1844),l=t(4264),i=t.n(l),s=t(5784),o=t(5796),a=t.n(o),_=t(5020),c=t.n(_);let u=(0,s.forwardRef)((e,n)=>(0,r.jsx)("input",{className:c().input,ref:n,...e}));u.displayName="Input";var d=t(6670),m=t(3128),g=t(3967),h=t.n(g),x=t(3045),f=t.n(x);let j=e=>{let{variant:n="fillSmall",onClick:t,disabled:l,loading:i=!1,type:o="button",children:a,..._}=e,[c,u]=(0,s.useState)(!1),d=async e=>{void 0!==t&&(u(!0),await t(e),u(!1))};return(0,r.jsx)("button",{..._,type:o,className:h()(_.className,f().button,"fillSmall"===n&&f().button_fillSmall,"outlineSmall"===n&&f().button_outlineSmall,"fillBig"===n&&f().button_fillBig,"fillCallGreen"===n&&f().button_fillCallGreen,(i||c)&&f().button_loading),onClick:d,disabled:i||c||l,children:a})},b=(0,d.Pi)(()=>{let[e,n]=(0,s.useState)({login:"",password:"",server:"",remember:!1}),[t,l]=(0,s.useState)(""),[i,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>{m.Z.errorMessage?(l(m.Z.errorMessage),o(!1)):l("")},[m.Z.errorMessage]);let _=t=>{let{name:r,value:l,type:i}=t.target;"checkbox"===i?n({...e,[r]:t.target.checked}):n({...e,[r]:l})},c=n=>{n.preventDefault(),o(!0),m.Z.registerUserAgent(e)};return(0,r.jsx)("div",{className:a().loginPage,children:(0,r.jsxs)("div",{className:a().loginPage__container,children:[(0,r.jsx)("div",{className:a().loginPage__container_title,children:(0,r.jsx)("h2",{children:"Welcome!"})}),(0,r.jsx)("p",{children:"Provide your SIP Account"}),(0,r.jsx)("p",{className:a().loginPage__container_error,children:t}),(0,r.jsxs)("form",{className:a().loginPage__container_form,onSubmit:c,children:[(0,r.jsxs)("div",{className:a().loginPage__container_form_container,children:[(0,r.jsxs)("div",{className:a().loginPage__container_form_container_item,children:[(0,r.jsx)("label",{htmlFor:"login",children:"Login"}),(0,r.jsx)(u,{type:"text",id:"login",name:"login",value:e.login,onChange:_,required:!0})]}),(0,r.jsxs)("div",{className:a().loginPage__container_form_container_item,children:[(0,r.jsx)("label",{htmlFor:"password",children:"Password"}),(0,r.jsx)(u,{type:"password",id:"password",name:"password",value:e.password,onChange:_,required:!0})]}),(0,r.jsxs)("div",{className:a().loginPage__container_form_container_item,children:[(0,r.jsx)("label",{htmlFor:"server",children:"Server"}),(0,r.jsx)(u,{type:"text",id:"server",name:"server",value:e.server,onChange:_,required:!0})]}),(0,r.jsxs)("div",{className:a().loginPage__container_form_checkbox,children:[(0,r.jsx)("input",{type:"checkbox",id:"remember",name:"remember",checked:e.remember,onChange:_}),(0,r.jsx)("label",{htmlFor:"remember",children:"Remember Me"})]})]}),(0,r.jsx)(j,{type:"submit",children:"Log in"})]})]})})}),p=()=>(0,r.jsx)("div",{children:(0,r.jsx)(b,{})});var v=t(5565),y=t(7015),N=t(4338);let P=e=>"".concat(String(Math.floor(e/60)).padStart(2,"0"),":").concat(String(Math.floor(e%60)).padStart(2,"0"));var S=t(5157),C=t.n(S);let Z=e=>{let{user:n,duration:t,date:l,type:i,onClick:s}=e;return(0,r.jsxs)("button",{onClick:s,className:C()["card-button"],children:[(0,r.jsxs)("div",{className:C()["login-duration-container"],children:[(0,r.jsx)("p",{className:C().user,children:n}),(0,r.jsx)("p",{className:C().type,children:i===N.r.INCOMING?"входящий":"исходящий"}),(0,r.jsxs)("p",{className:C().duration,children:["Длительность: ",P(t)]})]}),(0,r.jsx)("p",{children:l.toLocaleString("ru-RU").slice(0,-3)})]})};var w=t(9380),k=t.n(w);let E=(0,d.Pi)(()=>(0,r.jsxs)("div",{className:k()["history-container"],children:[(0,r.jsx)("h2",{className:k().title,children:"История звонков"}),(0,r.jsx)("div",{className:k()["cards-container"],children:m.Z.getCallHistory().map(e=>(0,r.jsx)(Z,{...e,onClick:()=>m.Z.call(e.user)},e.date.getTime()))})]}));var M=t(1567),R=t.n(M),B=t(7555),q=t.n(B);t(9612);let G=(0,d.Pi)(()=>{var e;let[n,t]=(0,s.useState)(""),l=e=>{e.preventDefault(),m.Z.clearError(),m.Z.call(n)};return(0,r.jsxs)("div",{className:R().container,children:[(0,r.jsx)("p",{className:R().error,children:m.Z.errorMessage}),(0,r.jsxs)("p",{className:R()["my-number"],children:["My number:"," ",(0,r.jsx)("strong",{children:null===m.Z||void 0===m.Z?void 0:null===(e=m.Z.userAgent)||void 0===e?void 0:e.get("authorization_user")})]}),(0,r.jsxs)("form",{className:R().form,onSubmit:l,children:[(0,r.jsx)("div",{className:R()["form-items-container"],children:(0,r.jsx)("div",{className:R()["form-item"],children:(0,r.jsx)(q(),{value:n,onChange:t,placeholder:"Enter phone number",inputProps:{name:"phone",required:!0,autoFocus:!0}})})}),(0,r.jsx)(j,{variant:"fillCallGreen",type:"submit",children:"Call"})]})]})}),I=()=>(0,r.jsxs)("div",{children:[(0,r.jsx)(G,{}),(0,r.jsx)(E,{})]}),L=(0,d.Pi)(()=>{let e=m.Z.callStatus.duration;return(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:m.Z.callStatus.user}),(0,r.jsxs)("p",{children:["Статус: ",m.Z.agentStatus]}),(0,r.jsx)("p",{children:P(e)}),(0,r.jsx)("button",{onClick:()=>m.Z.terminateCall(),children:"Сбросить"})]})}),z=()=>(0,r.jsx)("div",{children:(0,r.jsx)(L,{})}),F=(0,d.Pi)(()=>(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["Звонок от ",m.Z.callStatus.user]}),(0,r.jsx)("button",{onClick:()=>m.Z.acceptIncomingCall(),children:"Ответить"}),(0,r.jsx)("button",{onClick:()=>m.Z.terminateCall(),children:"Сбросить"})]})),J=()=>(0,r.jsx)("div",{children:(0,r.jsx)(F,{})});function O(){let e=(0,v.t)();return(0,s.useEffect)(()=>{let e=sessionStorage.getItem("userLoginInfo");if(e){let n=JSON.parse(e);m.Z.registerUserAgent(n)}},[]),(0,r.jsxs)("div",{className:i().pageContainer,children:[e.currentRoute===y.DV&&(0,r.jsx)(p,{}),e.currentRoute===y.s6&&(0,r.jsx)(I,{}),e.currentRoute===y.u6&&(0,r.jsx)(z,{}),e.currentRoute===y.Ll&&(0,r.jsx)(J,{})]})}},5796:function(e){e.exports={loginPage:"styles_loginPage__Y9mSs",loginPage__container:"styles_loginPage__container__QAwx0",loginPage__container_title:"styles_loginPage__container_title__5wRi1",loginPage__container_error:"styles_loginPage__container_error__4Zxe7",loginPage__container_form:"styles_loginPage__container_form__aBQFG",loginPage__container_form_container:"styles_loginPage__container_form_container__fNSmR",loginPage__container_form_container_item:"styles_loginPage__container_form_container_item__Hzt8s",loginPage__container_form_checkbox:"styles_loginPage__container_form_checkbox__DBTzj"}},3045:function(e){e.exports={button:"button_button__VJoXE",button_fillSmall:"button_button_fillSmall__qrz5_",button_outlineSmall:"button_button_outlineSmall__MB3pY",button_fillBig:"button_button_fillBig__DwmNp",button_fillCallGreen:"button_button_fillCallGreen__Rq_2H",button_loading:"button_button_loading__2h90r"}},5020:function(e){e.exports={input:"styles_input__u_0jv"}},4264:function(e){e.exports={"page-container":"styles_page-container__VehrN"}},5157:function(e){e.exports={"card-button":"styles_card-button__3BMya","login-duration-container":"styles_login-duration-container__LBmuG",user:"styles_user__Ur5MH",duration:"styles_duration__imJoK",type:"styles_type__PzJbO"}},9380:function(e){e.exports={"history-container":"styles_history-container__8Egn_",title:"styles_title__xT77H","cards-container":"styles_cards-container__hmaoT"}},1567:function(e){e.exports={container:"styles_container__OEtiS",error:"styles_error__gbPYY","my-number":"styles_my-number__Vw1cz",form:"styles_form__dxQJL","form-items-container":"styles_form-items-container___Nmnq","form-item":"styles_form-item__Qqf6r",button:"styles_button__QJQ7_"}}},function(e){e.O(0,[182,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);