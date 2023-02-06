"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[801],{3363:function(n,e,t){t.d(e,{FP:function(){return l},WE:function(){return u},mv:function(){return s}});var r=t(5861),a=t(7757),i=t.n(a),o=t(3263);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="76cbb606f190fc237086ec33f1fd98a3",u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c),e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2?u[2]:void 0,n.next=4,o.Z.get("movie/".concat(e).concat(t,"?api_key=").concat(c,"&language=en-US"),r);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2801:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,c=t(5861),u=t(9439),s=t(7757),l=t.n(s),p=t(7013),f=t(4652),d=t(168),x=t(6444),h=x.ZP.button(r||(r=(0,d.Z)(["\n  ","\n"])),(function(n){n.variant})),m=t(184),v=function(n){var e=n.type,t=void 0===e?"button":e,r=n.text,a=void 0===r?"Search":r,i=n.variant,o=void 0===i?"default":i,c=n.children;return(0,m.jsxs)(h,{type:t,variant:o,children:[a," ",c]})},g=t(2791),Z=t(3216),b=x.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n\n  gap: 15px;\n  padding: 50px 15px;\n  background-color: ",";\n"])),Z.J.mainElementBg),w=x.ZP.label(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),y=x.ZP.input(o||(o=(0,d.Z)(["\n  padding: 5px 10px;\n  height: 35px;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  color: ",";\n  background-color: ",";\n  &:focus {\n    outline: 1px solid ",";\n  }\n"])),Z.J.subTextColor,Z.J.subElementBg,Z.J.orange),j=function(n){var e,t=n.searchParams,r=n.onSubmit,a=(0,g.useState)(""),i=(0,u.Z)(a,2),o=i[0],c=i[1],s=null!==(e=t.get("name"))&&void 0!==e?e:"";(0,g.useEffect)((function(){c(s)}),[s]);return(0,m.jsxs)(b,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget.elements.movieName.value;return r(e)},children:[(0,m.jsxs)(w,{children:["Enter name of your movie",(0,m.jsx)(y,{name:"movieName",type:"text",placeholder:"Enter the movie name",onChange:function(n){var e=n.target.value;c(e)},onFocus:function(n){n.target.select()},autoComplete:"true",value:o})]}),(0,m.jsx)(v,{type:"submit",variant:"default",text:"Search"})]})},k=t(3363),P=t(1087),S=function(){var n=(0,g.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,g.useState)(!1),i=(0,u.Z)(a,2),o=i[0],s=i[1],d=(0,P.lr)(),x=(0,u.Z)(d,2),h=x[0],v=x[1],Z=function(n){v(n?{name:n}:{})},b=function(){var n=(0,c.Z)(l().mark((function n(e){var t,a;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,s(!0),e){n.next=4;break}return n.abrupt("return");case 4:return Z(e),t=e.toLowerCase().trim(),n.next=8,(0,k.mv)(t);case 8:a=n.sent,r(a.results),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0);case 15:return n.prev=15,s(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(e){return n.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{searchParams:h,onSubmit:b}),o?(0,m.jsx)(p.Z,{}):(0,m.jsx)(f.Z,{movies:t})]})}},8460:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),i=t(6444).ZP.div(r||(r=(0,a.Z)(["\n  margin: 0;\n  /* width: 100%; */\n  ","\n"])),(function(n){var e=n.size,t=e.width,r=e.height;return"\n    min-width: ".concat(t,"px;\n    width: ").concat(t,"px;\n    height: ").concat(r,"px;")})),o=t(184),c=function(n){var e=n.imgLink,t=n.alt,r=n.size,a=r.width,c=r.height,u="https://via.placeholder.com/".concat(a,"x").concat(c,"?text=Image+not+found");return(0,o.jsx)(i,{size:r,children:(0,o.jsx)("img",{src:e?"".concat("https://image.tmdb.org/t/p/w400").concat(e):u,alt:t,loading:"lazy"})})}},4652:function(n,e,t){t.d(e,{Z:function(){return w}});var r,a,i,o,c,u,s=t(8460),l=t(7689),p=t(168),f=t(1087),d=t(6444),x=d.ZP.li(r||(r=(0,p.Z)([""]))),h=(d.ZP.div(a||(a=(0,p.Z)(["\n  margin: 0;\n  width: 365px;\n  height: 450px;\n"]))),(0,d.ZP)(f.OL)(i||(i=(0,p.Z)(["\n  &:hover,\n  :focus {\n    transform: scale(1.2);\n  }\n"])))),m=d.ZP.div(o||(o=(0,p.Z)(["\n  display: flex;\n  /* justify-content: center; */\n  align-items: center;\n  /* min-height: calc(106px - 40px); */\n  padding: 20px 20px;\n  border-radius: 0 0 10px 10px;\n  background-color: #32343b;\n"]))),v=d.ZP.p(c||(c=(0,p.Z)(["\n  max-width: calc(365px - 40px);\n  font-size: 18px;\n  font-weight: 600;\n  color: #e2580a;\n"]))),g=t(184),Z=function(n){var e=n.poster,t=n.title,r=n.id,a=(0,l.TH)();return(0,g.jsx)(x,{children:(0,g.jsxs)(h,{to:"/movies/".concat(r),state:{from:a},children:[(0,g.jsx)(s.Z,{imgLink:e,alt:t,size:{width:365,height:450}}),(0,g.jsx)(m,{children:(0,g.jsxs)(v,{children:['"',t,'"']})})]})})},b=d.ZP.ul(u||(u=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 20px;\n  row-gap: 40px;\n  justify-content: center;\n"]))),w=function(n){var e=n.movies;return(0,g.jsx)(b,{children:e.map((function(n){var e=n.poster_path,t=n.id,r=(n.overview,n.title);return(0,g.jsx)(Z,{id:t,poster:e,title:r},t)}))})}},3216:function(n,e,t){t.d(e,{J:function(){return r}});var r={bodyBgColor:"#22232b",mainElementBg:"#32343b",subElementBg:"#50535C",orange:"#e2580a",text:"#DBD7D7",subTextColor:"#ffffff",globalAnim:"cubic-bezier(.06,.57,.52,.97) 300ms"}}}]);
//# sourceMappingURL=801.7ec7cad5.chunk.js.map