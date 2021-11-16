(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(14),o=t.n(r),a=t(3),u=t(0),s=function(e){var n=e.persons,t=e.deleteFunction;return Object(u.jsx)("div",{children:n.map((function(e){return Object(u.jsxs)("article",{className:"person-card",children:[Object(u.jsxs)("p",{className:"person-text",children:[e.name," - ",e.number]}),Object(u.jsx)("button",{onClick:function(){return t(e)},children:"Delete"})]},e.name)}))})},i=function(e){return Object(u.jsx)("h1",{children:e.text})},l=function(e){return Object(u.jsx)("h2",{children:e.text})},f=function(e){return Object(u.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"search-form",children:[Object(u.jsx)("label",{htmlFor:e.text,children:"Search name"}),Object(u.jsx)("input",{name:e.text,onChange:e.function,placeholder:"Search for an entry",className:"search-input"})]})},j=function(e){return Object(u.jsxs)("form",{className:"create-form",children:[Object(u.jsx)("label",{htmlFor:"name",children:"Name "}),Object(u.jsx)("input",{name:"name",onChange:e.functionOne,value:e.valueOne,placeholder:"Enter a name"}),Object(u.jsx)("label",{htmlFor:"number",children:"Number "}),Object(u.jsx)("input",{name:"number",onChange:e.functionTwo,value:e.valueTwo,placeholder:"Enter a number"}),Object(u.jsx)("button",{onClick:e.functionThree,children:"Add"})]})},b=function(e){var n=e.message;return null===n.text?null:Object(u.jsx)("div",{className:n.class,children:n.text})},h=t(4),d=t.n(h),m="https://cryptic-river-73645.herokuapp.com/api/persons",x={getAll:function(){return d.a.get(m).then((function(e){return e.data}))},addPerson:function(e){d.a.post(m,e)},deletePerson:function(e){d.a.delete("".concat(m,"/").concat(e))},updatePhone:function(e,n,t){return d.a.put("".concat(m,"/").concat(e),{name:n,number:t}).then((function(e){return e.data}))}},O=(t(38),function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)([]),h=Object(a.a)(o,2),d=h[0],m=h[1],O=Object(c.useState)(""),p=Object(a.a)(O,2),v=p[0],g=p[1],w=Object(c.useState)(""),k=Object(a.a)(w,2),A=k[0],N=k[1],P=Object(c.useState)({text:null,class:""}),S=Object(a.a)(P,2),T=S[0],C=S[1];Object(c.useEffect)((function(){x.getAll().then((function(e){return r(e)})).catch((function(e){return console.log("Error: ",e.message)}))}),[]),Object(c.useEffect)((function(){return m(t)}),[t]);var E=function(){return t.find((function(e){return e.name===v}))},F=function(){var e=t.find((function(e){return e.name===v}));x.updatePhone(e.id,v,A).catch((function(){C({text:"Information of ".concat(v," has already been removed from server"),class:"error"}),setTimeout((function(){C({text:null,class:""})}),3e3)})),x.getAll().then((function(e){return r(e)}))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)(i,{text:"Phonebook"}),Object(u.jsx)(f,{text:"search",function:function(e){var n=t.filter((function(n){return n.name.toLowerCase().indexOf(e.target.value.toLowerCase())>=0}));m(n)}})]}),Object(u.jsx)(l,{text:"Add a person to phonebook"}),Object(u.jsx)(b,{message:T}),Object(u.jsx)(j,{functionOne:function(e){return g(e.target.value)},valueOne:v,functionTwo:function(e){return N(e.target.value)},valueTwo:A,functionThree:function(e){e.preventDefault(),E()?window.confirm("".concat(v," is already added to the phonebook, replace the old number with the new one?"))&&F():(x.addPerson({name:v,number:A}),x.getAll().then((function(e){return r(e)})).then((function(){C({text:"Added ".concat(v),class:"info"}),setTimeout((function(){C({text:null,class:""})}),3e3)})),g(""),N(""))}}),Object(u.jsx)(l,{text:"Persons in phonebook"}),Object(u.jsx)(s,{persons:d,deleteFunction:function(e){window.confirm("Delete ".concat(e.name,"?"))&&x.deletePerson(e.id),x.getAll().then((function(e){return r(e)}))}})]})});o.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9fac61f7.chunk.js.map