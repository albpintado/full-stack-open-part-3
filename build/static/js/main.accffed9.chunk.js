(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(14),r=n.n(o),u=n(3),a=n(0),i=function(e){var t=e.persons,n=e.deleteFunction;return Object(a.jsx)("div",{children:t.map((function(e){return Object(a.jsxs)("p",{children:[e.name," ",Object(a.jsx)("span",{children:"-"})," ",Object(a.jsxs)("span",{children:[e.number," "]}),Object(a.jsx)("button",{onClick:function(){return n(e)},children:"Delete"})]},e.name)}))})},s=function(e){return Object(a.jsx)("h2",{children:e.text})},l=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:e.text,children:"Search name "}),Object(a.jsx)("input",{name:e.text,onChange:e.function})]})},j=function(e){return Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name "}),Object(a.jsx)("input",{name:"name",onChange:e.functionOne,value:e.valueOne}),Object(a.jsx)("br",{}),Object(a.jsx)("label",{htmlFor:"number",children:"Number "}),Object(a.jsx)("input",{name:"number",onChange:e.functionTwo,value:e.valueTwo}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:e.functionThree,children:"Add"})]})},b=function(e){var t=e.message;return null===t.text?null:Object(a.jsx)("div",{className:t.class,children:t.text})},f=n(4),d=n.n(f),h="http://localhost:3001/api/persons",O={getAll:function(){return d.a.get(h).then((function(e){return e.data}))},addPerson:function(e){d.a.post(h,e)},deletePerson:function(e){d.a.delete("".concat(h,"/").concat(e))},updatePhone:function(e,t,n){return d.a.put("".concat(h,"/").concat(e),{name:t,number:n}).then((function(e){return e.data}))}},x=(n(38),function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)([]),f=Object(u.a)(r,2),d=f[0],h=f[1],x=Object(c.useState)(""),m=Object(u.a)(x,2),p=m[0],v=m[1],g=Object(c.useState)(""),w=Object(u.a)(g,2),k=w[0],A=w[1],T=Object(c.useState)({text:null,class:""}),C=Object(u.a)(T,2),P=C[0],S=C[1];Object(c.useEffect)((function(){O.getAll().then((function(e){return o(e)}))}),[]),Object(c.useEffect)((function(){return h(n)}),[n]);var F=function(){return n.find((function(e){return e.name===p}))},N=function(){var e=n.find((function(e){return e.name===p}));O.updatePhone(e.id,p,k).catch((function(){S({text:"Information of ".concat(p," has already been removed from server"),class:"error"}),setTimeout((function(){S({text:null,class:""})}),3e3)})),O.getAll().then((function(e){return o(e)}))};return Object(a.jsxs)("div",{children:[Object(a.jsx)(s,{text:"Phonebook"}),Object(a.jsx)(l,{text:"search",function:function(e){var t=n.filter((function(t){return t.name.toLowerCase().indexOf(e.target.value.toLowerCase())>=0}));h(t)}}),Object(a.jsx)(s,{text:"Add a new one"}),Object(a.jsx)(b,{message:P}),Object(a.jsx)(j,{functionOne:function(e){return v(e.target.value)},valueOne:p,functionTwo:function(e){return A(e.target.value)},valueTwo:k,functionThree:function(e){e.preventDefault(),F()?window.confirm("".concat(p," is already added to the phonebook, replace the old number with the new one?"))&&N():(O.addPerson({name:p,number:k}),O.getAll().then((function(e){return o(e)})).then((function(){S({text:"Added ".concat(p),class:"info"}),setTimeout((function(){S({text:null,class:""})}),3e3)})),v(""),A(""))}}),Object(a.jsx)(s,{text:"Numbers"}),Object(a.jsx)(i,{persons:d,deleteFunction:function(e){window.confirm("Delete ".concat(e.name,"?"))&&O.deletePerson(e.id),O.getAll().then((function(e){return o(e)}))}})]})});r.a.render(Object(a.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.accffed9.chunk.js.map