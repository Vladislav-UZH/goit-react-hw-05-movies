"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[333],{3363:function(n,t,e){e.d(t,{FP:function(){return p},WE:function(){return u},mv:function(){return s}});var r=e(5861),a=e(7757),i=e.n(a),c=e(3263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="76cbb606f190fc237086ec33f1fd98a3",u=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2?u[2]:void 0,n.next=4,c.Z.get("movie/".concat(t).concat(e,"?api_key=").concat(o,"&language=en-US"),r);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},1333:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a=e(5861),i=e(9439),c=e(7757),o=e.n(c),u=e(4652),s=e(168),p=e(6444).ZP.button(r||(r=(0,s.Z)(["\n  ","\n"])),(function(n){n.variant})),f=e(184),l=function(n){var t=n.type,e=void 0===t?"button":t,r=n.text,a=void 0===r?"Search":r,i=n.variant,c=void 0===i?"default":i,o=n.children;return(0,f.jsxs)(p,{type:e,variant:c,children:[a," ",o]})},v=e(2791),d=function(n){var t,e=n.searchParams,r=n.onSubmit,a=(0,v.useState)(""),c=(0,i.Z)(a,2),o=c[0],u=c[1],s=null!==(t=e.get("name"))&&void 0!==t?t:"";(0,v.useEffect)((function(){u(s)}),[s]);return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.elements.movieName.value;return r(t)},children:[(0,f.jsxs)("label",{children:["Enter name of your movie",(0,f.jsx)("input",{name:"movieName",type:"text",onChange:function(n){var t=n.target.value;u(t)},onFocus:function(n){n.target.select()},autoComplete:"true",value:o})]}),(0,f.jsx)(l,{type:"submit",variant:"default",text:"Search"})]})},h=e(3363),m=e(1087),x=function(){var n=(0,v.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],c=(0,m.lr)(),s=(0,i.Z)(c,2),p=s[0],l=s[1],x=function(n){l(n?{name:n}:{})},g=function(){var n=(0,a.Z)(o().mark((function n(t){var e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(t),e=t.toLowerCase().trim(),n.next=5,(0,h.mv)(e);case 5:a=n.sent,r(a.results),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{searchParams:p,onSubmit:g}),(0,f.jsx)(u.Z,{movies:e})]})}},8460:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(168),i=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0;\n  ","\n"])),(function(n){var t=n.size,e=t.width,r=t.height;return"width: ".concat(e,"px;\n    height: ").concat(r,"px;")})),c=e(184),o=function(n){var t=n.imgLink,e=n.alt,r=n.size,a=r.width,o=r.height,u="https://via.placeholder.com/".concat(a,"x").concat(o,"?text=Image+not+found");return(0,c.jsx)(i,{size:r,children:(0,c.jsx)("img",{src:t?"".concat("https://image.tmdb.org/t/p/w400").concat(t):u,alt:e,loading:"lazy"})})}},4652:function(n,t,e){e.d(t,{Z:function(){return b}});var r,a,i,c,o,u,s=e(8460),p=e(7689),f=e(168),l=e(1087),v=e(6444),d=v.ZP.li(r||(r=(0,f.Z)([""]))),h=(v.ZP.div(a||(a=(0,f.Z)(["\n  margin: 0;\n  width: 365px;\n  height: 450px;\n"]))),(0,v.ZP)(l.OL)(i||(i=(0,f.Z)(["\n  &:hover,\n  :focus {\n    transform: scale(1.2);\n  }\n"])))),m=v.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  /* min-height: calc(106px - 40px); */\n  padding: 20px 20px;\n  border-radius: 0 0 10px 10px;\n  background-color: #32343b;\n"]))),x=v.ZP.p(o||(o=(0,f.Z)(["\n  max-width: calc(365px - 40px);\n  font-size: 18px;\n  font-weight: 600;\n  color: #e2580a;\n"]))),g=e(184),Z=function(n){var t=n.poster,e=n.title,r=n.id,a=(0,p.TH)();return(0,g.jsx)(d,{children:(0,g.jsxs)(h,{to:"/movies/".concat(r),state:{from:a},children:[(0,g.jsx)(s.Z,{imgLink:t,alt:e,size:{width:365,height:450}}),(0,g.jsx)(m,{children:(0,g.jsxs)(x,{children:['"',e,'"']})})]})})},w=v.ZP.ul(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 40px;\n  justify-content: center;\n"]))),b=function(n){var t=n.movies;return(0,g.jsx)(w,{children:t.map((function(n){var t=n.poster_path,e=n.id,r=(n.overview,n.title);return(0,g.jsx)(Z,{id:e,poster:t,title:r},e)}))})}}}]);
//# sourceMappingURL=333.ea858ec0.chunk.js.map