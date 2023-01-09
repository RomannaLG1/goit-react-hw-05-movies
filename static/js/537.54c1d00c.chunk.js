"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{9537:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,s,c,i,o,u,p=t(5861),f=t(9439),l=t(7757),d=t.n(l),v=t(5872),x=t(2791),h=t(7689),m=t(8617),Z=t(168),g=t(1087),w=t(6444),j=(0,w.ZP)(g.rU)(r||(r=(0,Z.Z)(["\ndisplay: inline-flex;\nalign-items: center;\ngap: 4px;\npadding: 8px 0;\ncolor: black;\ntext-decoration: none;\nfont-weight: 500;\ntext-transform: uppercase;\n\n:hover {\n    color: orangered;\n}"]))),b=t(184),k=function(n){var e=n.to,t=n.children;return(0,b.jsxs)(j,{to:e,children:[(0,b.jsx)(m.kWt,{size:"24"}),t]})},y=t(9055),_=t(9126),P=w.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),U=w.ZP.img(s||(s=(0,Z.Z)(["\n  width: 195px;\n"]))),z=w.ZP.p(c||(c=(0,Z.Z)(["\n  margin-bottom: 5px;\n  font-size: 26px;\n  font-weight: 700;\n"]))),C=w.ZP.p(i||(i=(0,Z.Z)(["\n  font-size: 16px;\n  margin-bottom: 5px;\n"]))),S=w.ZP.ul(o||(o=(0,Z.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),R=w.ZP.li(u||(u=(0,Z.Z)(["\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 700;\n  &:hover {\n    color: orangered;\n  }\n"]))),B=t(9989),F=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.release_date,s=e.vote_average,c=e.overview,i=(0,h.TH)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(P,{children:[(0,b.jsx)(U,{src:"https://image.tmdb.org/t/p/w500".concat(t),alt:r}),(0,b.jsxs)(y.Z,{children:[(0,b.jsx)(z,{children:r}),(0,b.jsx)(z,{children:"".concat(a?a.slice(0,4):"")}),(0,b.jsxs)(z,{children:[(0,b.jsx)(_.RrZ,{size:"20"})," ",s?s.toFixed(0):"N/A"]}),(0,b.jsx)(C,{children:c}),(0,b.jsxs)(S,{children:[(0,b.jsx)(R,{children:(0,b.jsx)(g.rU,{to:"cast",state:i.state,children:"Cast"})}),(0,b.jsx)(R,{children:(0,b.jsx)(g.rU,{to:"reviews",state:i.state,children:"Reviews"})})]})]})]}),(0,b.jsx)(x.Suspense,{fallback:(0,b.jsx)(B.a,{}),children:(0,b.jsx)(h.j3,{})})]})},H=function(){var n,e,t=(0,h.UO)().movieId,r=(0,x.useState)({}),a=(0,f.Z)(r,2),s=a[0],c=a[1],i=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,x.useEffect)((function(){var n=function(){var n=(0,p.Z)(d().mark((function n(e){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.Mc(e);case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("error");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();n(t)}),[t]),(0,b.jsxs)("main",{children:[(0,b.jsx)(k,{to:i,children:"Back"}),(0,b.jsx)(F,{movie:s})]})}},5872:function(n,e,t){t.d(e,{Bt:function(){return f},Mc:function(){return u},SU:function(){return i},sY:function(){return o},y:function(){return p}});var r=t(5861),a=t(7757),s=t.n(a),c=t(2388);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"7653694c4941db1f3bfb7af19c86b9a8",language:"en-US",page:1};var i=function(){var n=(0,r.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week?");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?&query=".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(s().mark((function n(e){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9055:function(n,e,t){var r=t(6444),a=t(407),s=(0,r.ZP)("div")(a.$_,a.Cg,a.Dh,a.bK,a.GQ,a.eC);e.Z=s}}]);
//# sourceMappingURL=537.54c1d00c.chunk.js.map