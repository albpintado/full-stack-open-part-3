(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(19),c=t.n(a),o=t(10),u=t(5),s=t(4),i=t.n(s),l="http://localhost:3001/api/persons",m={getAll:function(){return i.a.get(l).then((function(e){return e.data}))},addPerson:function(e){i.a.post(l,e)},deletePerson:function(e){i.a.delete("".concat(l,"/").concat(e))},updatePhone:function(e,n,t){return i.a.put("".concat(l,"/").concat(e),{name:n,number:t}).then((function(e){return e.data}))}},b=t(0),j=function(e){return Object(b.jsx)("h1",{children:e.text})},d=function(e){var n=e.type,t=e.setFilterQuery;return Object(b.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},className:"search-form",children:[Object(b.jsx)("label",{htmlFor:n,children:"Search name"}),Object(b.jsx)("input",{name:n,onChange:function(e){var n=e.target.value;t(n)},placeholder:"Search for an entry",className:"search-input"})]})},f=function(e){var n=e.setFilterQuery;return Object(b.jsxs)("header",{children:[Object(b.jsx)(j,{text:"Phonebook"}),Object(b.jsx)(d,{type:"search",setFilterQuery:n})]})},h=function(e){var n=e.message;return null===n.text?"":Object(b.jsx)("div",{className:n.class,children:n.text})},O=t(7),x=t(9),p=function(e){return Object(b.jsx)("h2",{children:e.text})},v=function(e){var n=e.name,t=e.onChange,r=e.value,a=e.placeholder;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{htmlFor:n,children:"Name "}),Object(b.jsx)("input",{name:n,onChange:t,value:r,placeholder:a})]})},g=function(e){var n=e.newPerson,t=e.setNewPerson,r=e.onSubmit,a=function(e){var r=e.target.name,a=e.target.value;t(Object(x.a)(Object(x.a)({},n),{},Object(O.a)({},r,a)))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{text:"Add a person to phonebook"}),Object(b.jsxs)("form",{className:"create-form",onSubmit:r,children:[Object(b.jsx)(v,{name:"name",onChange:a,value:n.name,placeholder:"Enter a name"}),Object(b.jsx)(v,{name:"number",onChange:a,value:n.number,placeholder:"Enter a number"}),Object(b.jsx)("button",{children:"Add"})]})]})},w=function(e){var n=e.persons,t=e.deleteFunction;return Object(b.jsxs)("section",{children:[Object(b.jsx)(p,{text:"Persons in phonebook"}),n.map((function(e){return Object(b.jsxs)("article",{className:"person-card",children:[Object(b.jsxs)("p",{className:"person-text",children:[e.name," - ",e.number]}),Object(b.jsx)("button",{onClick:function(){return t(e)},children:"Delete"})]},e.name)}))]})},P=(t(43),function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),s=Object(u.a)(c,2),i=s[0],l=s[1],j=t.filter((function(e){return function(e,n){return e.name.toLowerCase().includes(n.toLowerCase())}(e,i)})),d=Object(r.useState)({name:"",number:""}),O=Object(u.a)(d,2),x=O[0],p=O[1],v=Object(r.useState)({text:null,class:""}),P=Object(u.a)(v,2),y=P[0],F=P[1];Object(r.useEffect)((function(){m.getAll().then((function(e){return a(e)})).catch((function(e){return console.log("Error: ",e.message)}))}),[]);var S=function(){""!==x.name&&""!==x.number?(m.addPerson({name:x.name,number:x.number}),a([].concat(Object(o.a)(t),[{name:x.name,number:x.number}])),N("Added ".concat(x.name),"info"),p({name:"",number:""})):N("Please, fill the two inputs before add the entry","error")},k=function(){var e=t.find((function(e){return e.name===x.name})),n=t.findIndex((function(n){return n.name===e.name}));m.updatePhone(e.id,x.name,x.number),N("Information of ".concat(x.name," has been updated from server"),"info");var r=Object(o.a)(t);r[n].number=x.number,a(r)},N=function(e,n){F({text:e,class:n}),setTimeout((function(){F({text:null,class:""})}),3e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{setFilterQuery:l}),Object(b.jsx)(h,{message:y}),Object(b.jsx)(g,{newPerson:x,setNewPerson:p,onSubmit:function(e){e.preventDefault(),t.find((function(e){return e.name===x.name}))?function(e){return window.confirm("".concat(e.name," is already added to the phonebook, replace the old number with the new one?"))}(x)&&k():S()}}),Object(b.jsx)(w,{persons:j,deleteFunction:function(e){if(window.confirm("Delete ".concat(e.name,"?"))){m.deletePerson(e.id);var n=t.filter((function(n){return n.id!==e.id}));a(n),N("Information of ".concat(e.name," has already been removed from server"),"error")}}})]})});c.a.render(Object(b.jsx)(P,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.73d2b75d.chunk.js.map