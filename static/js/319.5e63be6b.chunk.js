"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{319:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,a,u,o=e(5861),c=e(9439),s=e(4687),i=e.n(s),p=e(5872),f=e(2791),l=e(1087),d=e(7689),h=e(3372),v=e(168),g=e(7691),x=g.ZP.div(r||(r=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),m=g.ZP.input(a||(a=(0,v.Z)(["\n  padding: 8px 32px 8px 8px;\n  width: 300px;\n  border-radius: 4px;\n  font: inherit;\n"]))),Z=g.ZP.button(u||(u=(0,v.Z)(["\nwidth: 50px;\npadding: 5px;\nbackground-color: transparent;\nborder: none;\ncursor: pointer;\nposition: absolute;\nright: 1px;\n"]))),b=e(8617),w=e(184),y=function(n){var t=n.onSubmit,e=(0,f.useState)(""),r=(0,c.Z)(e,2),a=r[0],u=r[1];return(0,w.jsx)("form",{onSubmit:function(n){n.preventDefault(),t(a),u("")},children:(0,w.jsxs)(x,{children:[(0,w.jsx)(m,{placeholder:"Enter movie...",type:"text",name:"searchQuery",value:a,onChange:function(n){u(n.currentTarget.value.trim())},required:!0,autoFocus:!0}),(0,w.jsx)(Z,{children:(0,w.jsx)(b.G4C,{size:"25"})})]})})},k=e(9989),j=e(5206),S=e(5378),q=e(1413),_=e(575),C=e(9610),L=e(2977),E=function(n){var t=n.count,e=n.page,r=n.onChange,a=n.navLink,u=n.query;return(0,w.jsx)(L.Z,{spacing:3,children:(0,w.jsx)(C.Z,{sx:{marginX:"auto"},showFirstButton:!0,showLastButton:!0,count:t,page:e,onChange:r,renderItem:function(n){return(0,w.jsx)(_.Z,(0,q.Z)({component:a,to:"/movies/?query=".concat(u,"&page=").concat(n.page)},n))}})})},B=function(n){var t=(0,f.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],u=(0,f.useState)(!1),s=(0,c.Z)(u,2),v=s[0],g=s[1],x=(0,f.useState)(null),m=(0,c.Z)(x,2),Z=m[0],b=m[1],q=(0,l.lr)(),_=(0,c.Z)(q,2),C=_[0],L=_[1],B=(0,f.useState)(1),I=(0,c.Z)(B,2),P=I[0],T=I[1],U=(0,f.useState)(0),A=(0,c.Z)(U,2),F=A[0],O=A[1],R=C.get("query"),V=(0,d.TH)(),Y=(0,f.useRef)(null);(0,f.useEffect)((function(){Y.current.scrollIntoView({behavior:"smooth"})}),[P,R]),(0,f.useEffect)((function(){if(R){var n=function(){var n=(0,o.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,p.sY(t,e);case 4:0===(r=n.sent).length&&(0,j.Am)("We don't found any films"),a(r.results),O(r.total_pages),r.total_pages<e&&T(1),g(!1),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),b(n.t0.message),g(!1);case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t,e){return n.apply(this,arguments)}}();n(R,P)}}),[R,P]);return(0,w.jsxs)(h.rS,{children:[(0,w.jsx)(y,{onSubmit:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;n?(console.log("query",n),L("query=".concat(n,"&page=").concat(t)),a([])):console.log("enter value")}}),Z&&j.Am.error("Something wrong...Try again"),v&&(0,w.jsx)(k.a,{}),(0,w.jsx)(h.im,{ref:Y,children:r&&(0,w.jsx)(h.aV,{children:r.map((function(n){var t=n.poster_path,e=n.title,r=n.id;return(0,w.jsx)(h.ck,{children:(0,w.jsxs)(l.OL,{to:"".concat(r),state:{from:V},children:[" ",(0,w.jsx)(h.Ee,{src:t?"https://image.tmdb.org/t/p/w500".concat(t):S,alt:e})," ",(0,w.jsx)("h3",{children:e})]})},r)}))})}),F>0&&(0,w.jsx)(E,{count:F,page:P,onChange:function(n,t){return T(t)},navLink:l.OL,query:R})]})}},5872:function(n,t,e){e.d(t,{Bt:function(){return f},Mc:function(){return i},SU:function(){return c},sY:function(){return s},y:function(){return p}});var r=e(5861),a=e(4687),u=e.n(a),o=e(2388);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"7653694c4941db1f3bfb7af19c86b9a8",language:"en-US"};var c=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week?page=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?&query=".concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5378:function(n,t,e){n.exports=e.p+"static/media/defaultImg.4dbc0e74031fecaf6511.png"}}]);
//# sourceMappingURL=319.5e63be6b.chunk.js.map