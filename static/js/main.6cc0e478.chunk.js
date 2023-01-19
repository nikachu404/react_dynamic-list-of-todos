(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1);c(10),c(11);function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i=c(3),o=c.n(i),r=c(0),j=function(e){var t=e.todos,c=e.selectedTodo,s=e.onSelectTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()({"far fa-eye-slash":e.id===(null===c||void 0===c?void 0:c.id),"far fa-eye":e.id!==(null===c||void 0===c?void 0:c.id)})})})})})]})}))})]})},b=function(e){var t=e.filter,c=e.query,s=e.onFilterChange,a=e.onQueryChange;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return s(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),h=function(e){var t=e.selectedTodo,c=e.onCloseModal,s=t.completed,a=t.id,i=t.title,j=t.userId,b=Object(l.useState)(null),h=Object(n.a)(b,2),m=h[0],O=h[1];return Object(l.useEffect)((function(){(function(e){return d("/users/".concat(e))})(j).then(O)})),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),m?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(a)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:i}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:o()({"has-text-success":s,"has-text-danger":!s}),children:s?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===m||void 0===m?void 0:m.name),children:null===m||void 0===m?void 0:m.name})]})]})]}):Object(r.jsx)(u,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),i=Object(n.a)(a,2),o=i[0],m=i[1],O=Object(l.useState)("All"),x=Object(n.a)(O,2),f=x[0],v=x[1],p=Object(l.useState)(""),N=Object(n.a)(p,2),y=N[0],g=N[1],C=c.find((function(e){return e.id===o}));Object(l.useEffect)((function(){d("/todos").then(s)}),[]);var k=Object(l.useCallback)((function(){return m(0)}),[]),S=c.filter((function(e){var t=e.title.toLowerCase(),c=y.toLowerCase().trim(),s=t.includes(c);switch(f){case"completed":return e.completed&&s;case"active":return!e.completed&&s;default:return e&&s}}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{filter:f,query:y,onFilterChange:v,onQueryChange:g})}),Object(r.jsx)("div",{className:"block",children:c.length?Object(r.jsx)(j,{todos:S,selectedTodo:C,onSelectTodo:function(e){return m(e)}}):Object(r.jsx)(u,{})})]})})}),C&&Object(r.jsx)(h,{selectedTodo:C,onCloseModal:k})]})};a.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6cc0e478.chunk.js.map