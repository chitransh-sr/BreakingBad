(this.webpackJsonpbreakingbadcharacter=this.webpackJsonpbreakingbadcharacter||[]).push([[0],{41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),s=c(14),n=c.n(s),i=c(5),j=c.n(i),b=c(15),o=c(3),d=c(16),l=c.n(d),u=c.p+"static/media/logo.e6ecab44.png",h=c(0),O=function(){return Object(h.jsx)("header",{className:"center",children:Object(h.jsx)("img",{src:u,alt:""})})},x=function(){return Object(h.jsxs)("footer",{className:"center",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["\xa9Created By ",Object(h.jsx)("a",{href:"https://chitransh-sr.github.io/portfolio-react/",children:"Chitransh Srivastava"})]})]})},m=function(e){var t=e.item;return Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-inner",children:[Object(h.jsx)("div",{className:"card-front",children:Object(h.jsx)("img",{src:t.img,alt:""})}),Object(h.jsxs)("div",{className:"card-back",children:[Object(h.jsx)("h1",{children:t.name}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},f=c.p+"static/media/load.18724024.gif",p=function(){return Object(h.jsx)("img",{src:f,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},g=function(e){var t=e.items;return e.isLoading?Object(h.jsx)(p,{}):Object(h.jsx)("section",{className:"cards",children:t.map((function(e){return Object(h.jsx)(m,{item:e})}))})},v=function(e){var t=e.getQuery,c=Object(r.useState)(""),a=Object(o.a)(c,2),s=a[0],n=a[1];return Object(h.jsx)("section",{className:"search",children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Search characters",value:s,onChange:function(e){return c=e.target.value,n(c),void t(c);var c},autoFocus:!0})})})},N=(c(41),function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(r.useState)(!0),n=Object(o.a)(s,2),i=n[0],d=n[1],u=Object(r.useState)(""),m=Object(o.a)(u,2),f=m[0],p=m[1];return Object(r.useEffect)((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,l()("https://www.breakingbadapi.com/api/characters?name=".concat(f));case 3:t=e.sent,console.log(t.data),a(t.data),d(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{}),Object(h.jsx)(v,{getQuery:function(e){return p(e)}}),Object(h.jsx)(g,{isLoading:i,items:c}),Object(h.jsx)(x,{})]})});n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.7b6062e6.chunk.js.map