"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[751],{3751:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(1087),o=n(7689),i=n(2791),p=n(5872),f=n(3372),l=n(9989),h=n(5206),v=n(1413),g=n(575),m=n(9610),d=n(2977),x=n(184),w=function(t){var e=t.count,n=t.page,r=t.onChange,a=t.navLink;return(0,x.jsx)(d.Z,{spacing:3,children:(0,x.jsx)(m.Z,{sx:{marginX:"auto"},showFirstButton:!0,showLastButton:!0,count:e,page:n,onChange:r,renderItem:function(t){return(0,x.jsx)(g.Z,(0,v.Z)({component:a,to:"/home/?page=".concat(t.page)},t))}})})},Z=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],u=e[1],v=(0,i.useState)(!1),g=(0,a.Z)(v,2),m=g[0],d=g[1],Z=(0,i.useState)(null),k=(0,a.Z)(Z,2),b=k[0],S=k[1],j=(0,i.useState)(parseInt(localStorage.getItem("page"))||1),y=(0,a.Z)(j,2),_=y[0],L=y[1],C=(0,i.useState)(0),I=(0,a.Z)(C,2),E=I[0],U=I[1],B=(0,o.TH)(),O=(0,i.useRef)(null);return(0,i.useEffect)((function(){O.current.scrollIntoView({behavior:"smooth"})}),[_]),(0,i.useEffect)((function(){window.localStorage.setItem("page",JSON.stringify(_))}),[_]),(0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,p.SU(e);case 4:n=t.sent,u(n.results),U(n.total_pages),n.total_pages<e&&L(1),d(!1),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),S(t.t0.message),d(!1);case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();t(_)}),[_,E]),(0,x.jsxs)(f.rS,{children:[b&&h.Am.error("Something wrong...Try again"),m&&(0,x.jsx)(l.a,{}),(0,x.jsx)(f.im,{ref:O,children:n&&(0,x.jsx)(f.aV,{children:n.map((function(t){var e=t.poster_path,n=t.title,r=t.id;return(0,x.jsx)(f.ck,{children:(0,x.jsxs)(s.OL,{to:"/movies/".concat(r),state:{from:B},children:[" ",(0,x.jsx)(f.Ee,{src:"https://image.tmdb.org/t/p/w500/".concat(e),alt:n})," ",(0,x.jsx)("h3",{children:n})]})},r)}))})}),E>0&&(0,x.jsx)(w,{count:E,page:_,onChange:function(t,e){return L(e)},navLink:s.OL})]})}},5872:function(t,e,n){n.d(e,{Bt:function(){return f},Mc:function(){return i},SU:function(){return s},sY:function(){return o},y:function(){return p}});var r=n(5861),a=n(4687),u=n.n(a),c=n(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7653694c4941db1f3bfb7af19c86b9a8",language:"en-US"};var s=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week?page=".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e,n){var r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?&query=".concat(e,"&page=").concat(n));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"?"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/credits?"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(e,"/reviews?"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=751.9f7bcb7e.chunk.js.map