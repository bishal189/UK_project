import{b as t,be as e,B as n,b4 as o,b5 as i,aa as s,K as a,b1 as r,i as c,bf as u,g as l,b6 as d,b7 as m,bg as b,bc as h,bh as f,bb as g,a$ as p,bd as v,H as w,J as A,a5 as y,a6 as I,b0 as _}from"./chunk.common_13449db8.esm.js";function C(){return t(this,void 0,void 0,(function*(){try{if(e(window.location.pathname).endsWith("/account"))return void function(){const t=s("analytics_trace_id");if(t){new o({elementName:"shop-login-button",flowVersion:i.SignIn,analyticsTraceId:t}).trackClassicCustomerAccountsAccountPageImpression()}const e=a(b);if(e){const t=JSON.parse(decodeURIComponent(JSON.parse(`"${e.replace(/"/g,'\\"')}"`))),n=null==t?void 0:t.analytics_trace_id,s=null==t?void 0:t.email;if(!n)throw new S("Missing analytics trace ID in Sign in with Shop cookie");if(!r(s))throw new S("Tried to show Login with Shop on customer account page with an invalid email",n);const a=document.createElement("shop-login-button");a.setAttribute("client-id",""),a.setAttribute("action","default"),a.setAttribute("version","2"),a.setAttribute("flow-version",i.SignIn),a.setAttribute("analytics-context",c.ClassicCustomerAccounts),a.setAttribute("analytics-trace-id",n),a.setAttribute("hide-button","true"),a.setAttribute("email-verification-required","true"),document.body.appendChild(a),a.requestShow(s),u(b,"/account");new o({elementName:"shop-login-button",analyticsTraceId:n,flowVersion:i.SignIn}).trackClassicCustomerAccountsAccountPageImpression()}}();!function(){const t=l(),e=new o({elementName:"shop-login-button",flowVersion:i.SignIn,analyticsTraceId:t}),s=new WeakMap;let a=null;const r=d({onVisible:w,onFallback:t=>{t.addEventListener("focus",u,{once:!0}),e.trackShopPayLoginWithSdkErrorEvents({apiKey:"",errorCode:"fallback_to_focus_event",errorMessage:"Fallback to focus event for classic customer accounts"})}});function u(t){w(t.target)}function b(t,e){var n,o;const i=null===(n=t.elements.namedItem("checkout_url"))||void 0===n?void 0:n.value,s=null===(o=t.elements.namedItem("return_url"))||void 0===o?void 0:o.value,a=new URLSearchParams(Object.assign(Object.assign({analytics_trace_id:e},i&&{checkout_url:i}),s&&{return_url:s}));return`${window.location.origin}/account/redirect?${a.toString()}`}function w(o){var r;const u=o.form;if(!u)return void n.notify(new Error("Email form missing for classic customer accounts"));s.has(o)&&(n.notify(new Error("Input listener already exists for input")),null===(r=s.get(o))||void 0===r||r.destroy(),s.delete(o));const l=document.createElement("input");l.type="hidden",l.name="login_with_shop[analytics_trace_id]",l.value=t,u.appendChild(l),a||(a=function(t){let e,n=!1;e=document.querySelector("shop-login-button:not([action])"),e||(e=document.createElement("shop-login-button"),e.setAttribute("hide-button","true"),n=!0);e.setAttribute("client-id",""),e.setAttribute("action","default"),e.setAttribute("version","2"),e.setAttribute("flow-version",i.SignIn),e.setAttribute("analytics-context",c.ClassicCustomerAccounts),e.setAttribute("analytics-trace-id",t),e.setAttribute("email-verification-required","true"),e.setAttribute("disable-sign-up","true"),e.setAttribute("auto-open","true"),e.setAttribute("consent-challenge",""),Object.entries(p()).forEach((([t,n])=>{e.setAttribute(t,n)})),n&&document.body.appendChild(e);return e}(t),e.trackClassicCustomerAccountsLoginPageImpression(),a.addEventListener("completed",(()=>{const e=b(u,t);window.location.assign(e)})),a.addEventListener("modalclosed",(()=>{f(v,"true")}))),a.email=o.value,s.set(o,new g(o,(t=>{a.email=t})))}m({selector:h,onElementFound:t=>r.observe(t)})}()}catch(t){if(t instanceof Error&&n.notify(t),t instanceof S){new o({elementName:"shop-login-button",flowVersion:i.SignIn,analyticsTraceId:t.analyticsTraceId}).trackShopPayLoginWithSdkErrorEvents({apiKey:"",errorCode:t.code,errorMessage:t.message})}}}))}class S extends Error{constructor(t,e=l()){super(t),this.analyticsTraceId=e,this.name="InitCustomerAccountsError",this.code="init_customer_accounts_error"}}w()&&(A({bundle:"initCustomerAccounts",bundleLocale:"en"}),y(),I(),_("initCustomerAccounts",C));
//# sourceMappingURL=client.init-customer-accounts_c3f73791.en.esm.js.map
