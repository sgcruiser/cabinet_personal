(this.webpackJsonpcabinet_personal=this.webpackJsonpcabinet_personal||[]).push([[6],{117:function(e,t,a){e.exports={container:"Title_container__2bcMS",title:"Title_title__vGgTe",appear:"Title_appear__2eeAV",appearActive:"Title_appearActive__3DisA"}},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a(154),c=a(117),l=a.n(c),i=a(1);function s(e){var t=e.children,a=Object(n.createRef)(null);return Object(i.jsx)(r.a,{in:!0,appear:!0,timeout:250,classNames:l.a,nodeRef:a,children:Object(i.jsx)("div",{className:l.a.container,children:Object(i.jsx)("h1",{className:l.a.title,ref:a,children:t})})})}s.defaultProps={children:[]}},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(39);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(c.push(n.value),!t||c.length!==t);l=!0);}catch(s){i=!0,r=s}finally{try{l||null==a.return||a.return()}finally{if(i)throw r}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},132:function(e,t,a){e.exports={form:"RegisterForm_form__x6nNt",label:"RegisterForm_label__3Xnt0",text:"RegisterForm_text__2aaTY",input:"RegisterForm_input__2rNqG",container:"RegisterForm_container__2_UVN",button:"RegisterForm_button__1St03"}},155:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return f}));var n=a(0),r=a(9),c=a(10),l=a(118),i=a(2),s=a(20),o=a(119),u=a(132),b=a.n(u),m=a(1),d={name:"",email:"",password:""};function p(){var e=Object(n.useState)(d),t=Object(o.a)(e,2),a=t[0],l=t[1],u=a.name,p=a.email,j=a.password,f=Object(r.c)(c.c.getLoading),h=Object(r.b)(),_=Object(n.useCallback)((function(e){h(c.a.register(e))}),[h]),O=function(e){var t=e.target,a=t.name,n=t.value;l((function(e){return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},a,n))}))},x=function(){l(d)};return Object(m.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),_(a),x()},children:[Object(m.jsxs)("label",{className:b.a.label,children:[Object(m.jsx)("span",{className:b.a.text,children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Your name","aria-label":"Input for your name",className:b.a.input,value:u,onChange:O,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",autoComplete:"username",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:[Object(m.jsx)("span",{className:b.a.text,children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",value:p,onChange:O,className:b.a.input,placeholder:"Your e-mail","aria-label":"Input for your Email",disabled:f,autoComplete:"email",required:!0})]}),Object(m.jsxs)("label",{className:b.a.label,children:[Object(m.jsx)("span",{className:b.a.text,children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",value:j,onChange:O,className:b.a.input,placeholder:"Should be at least 7 characters","aria-label":"Input for your password",disabled:f,autoComplete:"new-password",required:!0})]}),Object(m.jsx)("div",{className:b.a.container,children:Object(m.jsx)("button",{type:"submit",className:b.a.button,disabled:f,children:"Create account"})})]})}var j=a(32);function f(){var e=Object(r.c)(c.c.getLoading);return Object(n.useEffect)((function(){document.title="Create account | Personal Cabinet"}),[]),Object(m.jsxs)("main",{children:[Object(m.jsx)(l.a,{children:"Create your account"}),Object(m.jsx)(p,{}),e&&Object(m.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=register-page.0f50053c.chunk.js.map