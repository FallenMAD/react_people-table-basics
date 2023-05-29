(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(27),a=c(10),r=(c(36),c(37),c(2)),s=c(4),j=c(25),i=c(7),o=c(5),l=c(0),b=c(14),h=c.n(b),d=(c(38),c(3)),x=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.person;return Object(d.jsx)("td",{children:Object(d.jsx)(a.b,{to:"/people/".concat(t.slug),className:h()("f"===t.sex?"has-text-danger":""),children:t.name})})};function u(){return(e=2e3,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(l.useState)(!1),b=Object(o.a)(a,2),p=b[0],m=b[1],f=Object(l.useState)(!1),v=Object(o.a)(f,2),N=v[0],g=v[1],y=Object(r.q)().slug,w=void 0===y?"":y,k=function(e){return e.slug===w},P=function(e,t){return t.find((function(t){return t.name===e}))},S=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),g(!1),e.next=5,u();case 5:t=e.sent,n(t.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{mother:P(e.motherName,t),father:P(e.fatherName,t),motherName:e.motherName||"-",fatherName:e.fatherName||"-"})}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g(!0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){S()}),[]),Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h1",{className:"title",children:"People Page"}),Object(d.jsxs)("div",{className:"box table-container",children:[0===c.length&&!p&&Object(d.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),p&&Object(d.jsx)(x,{}),N&&Object(d.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),c.length>0&&Object(d.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Sex"}),Object(d.jsx)("th",{children:"Born"}),Object(d.jsx)("th",{children:"Died"}),Object(d.jsx)("th",{children:"Mother"}),Object(d.jsx)("th",{children:"Father"})]})}),Object(d.jsx)("tbody",{children:c.map((function(e){return Object(d.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":k(e)}),children:[Object(d.jsx)("td",{children:Object(d.jsx)(O,{person:e})}),Object(d.jsx)("td",{children:e.sex}),Object(d.jsx)("td",{children:e.born}),Object(d.jsx)("td",{children:e.died}),Object(d.jsx)("td",{children:e.mother?Object(d.jsx)(O,{person:e.mother}):e.motherName||"-"}),Object(d.jsx)("td",{children:e.father?Object(d.jsx)(O,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})]})]})},m=(c(40),function(e){var t=e.to,c=e.text;return Object(d.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},children:c})}),f=function(){return Object(d.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"navbar-brand",children:[Object(d.jsx)(m,{to:"/",text:"Home"}),Object(d.jsx)(m,{to:"/people",text:"People"})]})})})},v=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"title",children:"Home Page"})})},N=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{className:"title",children:"Page not found"})})},g=function(){return Object(d.jsxs)("div",{"data-cy":"app",children:[Object(d.jsx)(f,{}),Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(r.d,{children:[Object(d.jsx)(r.b,{path:"/",element:Object(d.jsx)(v,{})}),Object(d.jsx)(r.b,{path:"/home",element:Object(d.jsx)(r.a,{to:"/",replace:!0})}),Object(d.jsx)(r.b,{path:"*",element:Object(d.jsx)(N,{})}),Object(d.jsxs)(r.b,{path:"/people",children:[Object(d.jsx)(r.b,{index:!0,element:Object(d.jsx)(p,{})}),Object(d.jsx)(r.b,{path:":slug",element:Object(d.jsx)(p,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(d.jsx)(a.a,{children:Object(d.jsx)(g,{})}))}},[[41,1,2]]]);
//# sourceMappingURL=main.db75c609.chunk.js.map