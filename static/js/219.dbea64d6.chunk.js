"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{5872:function(t,n,e){e.d(n,{Bt:function(){return f},Mc:function(){return o},SU:function(){return i},sY:function(){return s},y:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(2388);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"7653694c4941db1f3bfb7af19c86b9a8",language:"en-US"};var i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/week?page=".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?&query=".concat(n,"&page=").concat(e));case 2:return r=t.sent,a=r.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9055:function(t,n,e){var r=e(7691),a=e(407),c=(0,r.ZP)("div")(a.$_,a.Cg,a.Dh,a.bK,a.GQ,a.eC);n.Z=c},4219:function(t,n,e){e.r(n),e.d(n,{default:function(){return j}});var r,a,c,u,i=e(5861),s=e(9439),o=e(4687),p=e.n(o),f=e(7689),d=e(2791),v=e(5872),h=e(9055),l=e(168),m=e(7691),g=m.ZP.ul(r||(r=(0,l.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: grid;\n  padding: 60px 0;\n    grid-template-columns: repeat(6, 195px);\n    gap: 15px;\n"]))),x=m.ZP.li(a||(a=(0,l.Z)(["\njustify-self: center;\n"]))),Z=m.ZP.img(c||(c=(0,l.Z)(["\n width: 195px;\n      height: 374px;\n      object-fit: cover;\n"]))),w=m.ZP.p(u||(u=(0,l.Z)(["\nfont-size: 16px;\n"]))),b=e(5206),k=e(5378),y=e(184),j=function(){var t=(0,f.UO)().movieId,n=(0,d.useState)([]),e=(0,s.Z)(n,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){var n=function(){var t=(0,i.Z)(p().mark((function t(n){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.y(n);case 3:0===(e=t.sent).length&&(0,b.Am)("We don't found any cast"),a(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}();n(t)}),[t]),(0,y.jsx)(h.Z,{as:"section",children:(0,y.jsx)(g,{children:r.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.character;return(0,y.jsxs)(x,{children:[(0,y.jsx)(Z,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):k,alt:r,width:"195"}),(0,y.jsx)(w,{children:r}),(0,y.jsx)(w,{children:a})]},n)}))})})}},5378:function(t,n,e){t.exports=e.p+"static/media/defaultImg.4dbc0e74031fecaf6511.png"}}]);
//# sourceMappingURL=219.dbea64d6.chunk.js.map