"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{5872:function(t,n,e){e.d(n,{Bt:function(){return f},Mc:function(){return o},SU:function(){return s},sY:function(){return i},y:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),c=e(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7653694c4941db1f3bfb7af19c86b9a8",language:"en-US",page:1};var s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week?");case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie?&query=".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9055:function(t,n,e){var r=e(6444),a=e(407),u=(0,r.ZP)("div")(a.$_,a.Cg,a.Dh,a.bK,a.GQ,a.eC);n.Z=u},4219:function(t,n,e){e.r(n),e.d(n,{default:function(){return k}});var r,a,u,c=e(5861),s=e(9439),i=e(7757),o=e.n(i),p=e(7689),f=e(2791),d=e(5872),l=e(9055),v=e(168),h=e(6444),m=h.ZP.ul(r||(r=(0,v.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  display: grid;\n  padding: 60px 0;\n    grid-template-columns: repeat(6, 195px);\n    gap: 15px;\n"]))),g=h.ZP.li(a||(a=(0,v.Z)(["\njustify-self: center;\n"]))),x=h.ZP.img(u||(u=(0,v.Z)(["\n width: 195px;\n      height: 374px;\n      object-fit: cover;\n"]))),Z=e(7596),w=e(5378),b=e(184),k=function(){var t=(0,p.UO)().movieId,n=(0,f.useState)([]),e=(0,s.Z)(n,2),r=e[0],a=e[1];return(0,f.useEffect)((function(){var n=function(){var t=(0,c.Z)(o().mark((function t(n){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.y(n);case 3:0===(e=t.sent).length&&(0,Z.Am)("We don't found any cast"),a(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}();n(t)}),[t]),(0,b.jsx)(l.Z,{as:"section",children:(0,b.jsx)(m,{children:r.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.character;return(0,b.jsxs)(g,{children:[(0,b.jsx)(x,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):w,alt:r}),(0,b.jsx)("p",{children:r}),(0,b.jsx)("p",{children:a})]},n)}))})})}},5378:function(t,n,e){t.exports=e.p+"static/media/defaultImg.e549f5f3dbb0a0fea043.png"}}]);
//# sourceMappingURL=219.9e664a3e.chunk.js.map