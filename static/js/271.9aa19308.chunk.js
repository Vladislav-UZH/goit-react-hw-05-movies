"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[271],{3363:function(e,n,r){r.d(n,{FP:function(){return l},WE:function(){return u},mv:function(){return o}});var t=r(5861),a=r(7757),c=r.n(a),i=r(3263);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="76cbb606f190fc237086ec33f1fd98a3",u=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day?api_key=".concat(s),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n,r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"),r);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"",t=u.length>2?u[2]:void 0,e.next=4,i.Z.get("movie/".concat(n).concat(r,"?api_key=").concat(s,"&language=en-US"),t);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},3271:function(e,n,r){r.r(n),r.d(n,{default:function(){return f}});var t=r(5861),a=r(9439),c=r(7757),i=r.n(c),s=r(1087),u=r(184),o=function(e){var n=e.to,r=e.children;return(0,u.jsx)(s.OL,{to:n,children:r})},l=r(7689),d=r(2791),v=r(707),h=function(e){var n=e.title,r=e.genres,t=e.overview,a=e.vote_average,c=e.backdrop_path;return(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{style:{width:400},children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w400/".concat(c),alt:n})}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:n}),(0,u.jsxs)("span",{children:["User score:",(0,u.jsxs)("p",{children:[function(e){var n=Number((10*e).toFixed(1));return String(n)}(a)," %"]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:t})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("ul",{children:r.map((function(e){var n=e.name,r=e.id;return(0,u.jsx)("li",{children:n},r)}))})]})]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(s.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(s.OL,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(d.Suspense,{fallback:(0,u.jsx)(v.Z,{title:"Loading.."}),children:(0,u.jsx)(l.j3,{})})]})]})},p=r(3363),f=function(){var e,n,r=(0,d.useState)(null),c=(0,a.Z)(r,2),s=c[0],v=c[1],f=(0,l.UO)().movieId,x=null!==(e=null===(n=(0,l.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",j=(0,d.useRef)(x);return(0,d.useEffect)((function(){var e=new AbortController,n={signal:e.signal},r=function(){var e=(0,t.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.FP)(f,n);case 3:r=e.sent,v(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return r(),function(){return e.abort()}}),[f]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{to:j.current,children:"Go Back"}),s&&(0,u.jsx)(h,{title:s.title,genres:s.genres,overview:s.overview,vote_average:s.vote_average,backdrop_path:s.backdrop_path})]})}}}]);
//# sourceMappingURL=271.9aa19308.chunk.js.map