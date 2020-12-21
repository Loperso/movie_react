(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{11:function(e,t,a){e.exports={MovieDetails:"MovieDetails_MovieDetails__2HMxt",ImagesContainer:"MovieDetails_ImagesContainer__4GIrb",BackgroundImage:"MovieDetails_BackgroundImage__-6tdA",PosterImage:"MovieDetails_PosterImage__36OBQ",DetailsContainer:"MovieDetails_DetailsContainer__1Nr9R",Details:"MovieDetails_Details__314vF"}},14:function(e,t,a){e.exports={MovieCard:"MovieCard_MovieCard__SXtNj",PosterMovie:"MovieCard_PosterMovie__oabL5",DetailsMovie:"MovieCard_DetailsMovie__3_kVy",BackgroundImage:"MovieCard_BackgroundImage__Z0SKh",PosterImage:"MovieCard_PosterImage__31M-W"}},15:function(e,t,a){e.exports={MoviePageBar:"MoviePageBar_MoviePageBar__3ztJG",RightButton:"MoviePageBar_RightButton__114No",LeftButton:"MoviePageBar_LeftButton__1fTmv",ActivePage:"MoviePageBar_ActivePage__18lcp"}},24:function(e,t,a){e.exports={MovieSearch:"MovieSearch_MovieSearch__2x6yg",LoadingBarContainer:"MovieSearch_LoadingBarContainer__2GlJL"}},25:function(e,t,a){e.exports={MovieList:"MovieList_MovieList__1ybFc"}},26:function(e,t,a){e.exports={MovieSearchBar:"MovieSearchBar_MovieSearchBar__Qyp9f",SearchBar:"MovieSearchBar_SearchBar__2tRje"}},27:function(e,t,a){e.exports={MovieFilter:"MovieFilter_MovieFilter__2PNKt",SortFilter:"MovieFilter_SortFilter__1MDup"}},39:function(e,t,a){e.exports={Loader:"LoadBar_Loader__1aU6n",load3:"LoadBar_load3__3A954"}},47:function(e,t,a){},48:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a.n(r),c=a(17),l=a.n(c),o=(a(47),a(3)),s=(a(48),a(9)),d=a(38),u=a.n(d).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d546896be2b04fa91b3ca04ba0e6785c"}}),v="GET_MOVIE_BY_ID",g=a(11),m=a.n(g),j=a(39),p=a.n(j),h=function(){return Object(n.jsx)("div",{className:p.a.Loader,children:"Cargando..."})},b=function(){var e=Object(s.b)(),t=Object(o.h)(),a=Object(s.c)((function(e){return e.movie}));Object(r.useEffect)((function(){var a;e((a=+t.movieId,function(e){u.get("/movie/"+a,{params:{language:"es"}}).then((function(t){e({type:v,payload:t.data})})).catch((function(e){console.error(e)}))}))}),[e,t]);var i=[""];a.movie&&(i=a.movie.genres.map((function(e){return e.name})));var c=Object(n.jsx)(h,{});if(!a.isLoading&&a.movie){var l,d,g,j,p,b,O,_=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});c=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:m.a.ImagesContainer,children:[Object(n.jsx)("img",{className:m.a.BackgroundImage,src:"https://image.tmdb.org/t/p/w500"+(null===(l=a.movie)||void 0===l?void 0:l.poster_path),alt:"fondo"}),Object(n.jsx)("img",{className:m.a.PosterImage,src:"https://image.tmdb.org/t/p/w500"+(null===(d=a.movie)||void 0===d?void 0:d.poster_path),alt:"poster"})]}),Object(n.jsx)("section",{className:m.a.DetailsContainer,children:Object(n.jsxs)("div",{className:m.a.Details,children:[Object(n.jsx)("h2",{children:null===(g=a.movie)||void 0===g?void 0:g.title}),Object(n.jsxs)("p",{children:[null===(j=a.movie)||void 0===j?void 0:j.vote_average,"/10"]}),Object(n.jsx)("p",{children:null===(p=a.movie)||void 0===p?void 0:p.overview}),Object(n.jsx)("h4",{children:"Fecha de salida"}),Object(n.jsx)("p",{children:null===(b=a.movie)||void 0===b?void 0:b.release_date}),Object(n.jsx)("h4",{children:"Ingresos"}),Object(n.jsx)("p",{children:_.format(a.movie.revenue)}),Object(n.jsx)("h4",{children:"Votos Promedio"}),Object(n.jsx)("p",{children:null===(O=a.movie)||void 0===O?void 0:O.vote_average}),Object(n.jsx)("h4",{children:"G\xe9neros"}),Object(n.jsx)("p",{children:i.join(" - ")})]})})]})}return Object(n.jsx)("div",{className:m.a.MovieDetails,children:c})},O=a(41),_=a(24),x=a.n(_),f=a(14),y=a.n(f),M=function(e){var t="https://image.tmdb.org/t/p/w500"+e.poster_path,a="https://image.tmdb.org/t/p/w500"+e.poster_path;return e.backdrop_path&&(t="https://image.tmdb.org/t/p/w500"+e.backdrop_path),e.poster_path||(t="https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg",a="https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg"),Object(n.jsxs)("div",{className:y.a.MovieCard,onClick:function(){return e.clicked(e.movieId)},children:[Object(n.jsxs)("div",{className:y.a.PosterMovie,children:[Object(n.jsx)("img",{className:y.a.BackgroundImage,src:t,alt:"Fondo"}),Object(n.jsx)("img",{className:y.a.PosterImage,src:a,alt:"Poster"})]}),Object(n.jsxs)("div",{className:y.a.DetailsMovie,children:[Object(n.jsx)("h3",{children:Object(n.jsx)("strong",{children:e.title})}),Object(n.jsx)("p",{children:e.date})]})]})},E=a(25),w=a.n(E),B=function(e){var t=Object(o.g)(),a=null;return e.moviesList&&(a=e.moviesList.results.map((function(e){return Object(n.jsx)(M,{title:e.title,date:e.release_date,language:e.original_language,poster_path:e.poster_path,backdrop_path:e.backdrop_path,movieId:e.id,clicked:function(){return a=e.id,void t.push("/details/"+a);var a}},e.id)}))),Object(n.jsxs)("div",{className:w.a.MovieList,children:[Object(n.jsx)("h2",{children:"Lista de peliculas"}),Object(n.jsx)("div",{className:w.a.MovieListContainer,children:a})]})},L=a(26),P=a.n(L),k=function(e){return Object(n.jsxs)("div",{className:P.a.MovieSearchBar,children:[Object(n.jsx)("p",{children:"Buscar: "}),Object(n.jsx)("input",{className:P.a.SearchBar,type:"text",onChange:e.changed,onKeyPress:e.entered,value:e.inputValue})]})},I="GET_MOVIES",N="GET_MOVIE_SEARCH",C="GET_MOVIE_SORTED",S="CHANGE_LOADING",D=function(){return function(e){e({type:S})}},F=a(27),R=a.n(F),A=[{query:"popularity.desc",name:"Popularidad descendente"},{query:"popularity.asc",name:"Popularidad ascendente"},{query:"release_date.asc",name:"Fecha de salida ascendente"},{query:"release_date.desc",name:"Fecha de salida descendente"},{query:"original_title.asc",name:"Titulo ascendente"},{query:"original_title.desc",name:"Titulo descendente"}],G=function(e){var t=A.map((function(e){return Object(n.jsx)("option",{value:e.query,children:e.name},e.query)}));return Object(n.jsx)("div",{className:R.a.MovieFilter,children:Object(n.jsx)("div",{className:R.a.SortFilter,children:Object(n.jsx)("select",{onChange:e.sortChanged,children:t})})})},q=a(15),T=a.n(q);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var U=r.createElement("g",null,r.createElement("g",{id:"_x37__34_"},r.createElement("g",null,r.createElement("path",{d:"M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161 c-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606 c27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z"})))),z=r.createElement("g",null),H=r.createElement("g",null),K=r.createElement("g",null),X=r.createElement("g",null),Q=r.createElement("g",null),W=r.createElement("g",null),Y=r.createElement("g",null),Z=r.createElement("g",null),$=r.createElement("g",null),ee=r.createElement("g",null),te=r.createElement("g",null),ae=r.createElement("g",null),ne=r.createElement("g",null),re=r.createElement("g",null),ie=r.createElement("g",null);function ce(e,t){var a=e.title,n=e.titleId,i=J(e,["title","titleId"]);return r.createElement("svg",V({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"792.082px",height:"792.082px",viewBox:"0 0 792.082 792.082",style:{enableBackground:"new 0 0 792.082 792.082"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,U,z,H,K,X,Q,W,Y,Z,$,ee,te,ae,ne,re,ie)}var le=r.forwardRef(ce);a.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))),ue=r.createElement("g",null),ve=r.createElement("g",null),ge=r.createElement("g",null),me=r.createElement("g",null),je=r.createElement("g",null),pe=r.createElement("g",null),he=r.createElement("g",null),be=r.createElement("g",null),Oe=r.createElement("g",null),_e=r.createElement("g",null),xe=r.createElement("g",null),fe=r.createElement("g",null),ye=r.createElement("g",null),Me=r.createElement("g",null),Ee=r.createElement("g",null);function we(e,t){var a=e.title,n=e.titleId,i=se(e,["title","titleId"]);return r.createElement("svg",oe({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004",style:{enableBackground:"new 0 0 492.004 492.004"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,de,ue,ve,ge,me,je,pe,he,be,Oe,_e,xe,fe,ye,Me,Ee)}var Be=r.forwardRef(we),Le=(a.p,function(e){var t=null;return e.maxPages&&(1===e.page&&1!==e.maxPages&&(t=Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page+1)},children:Object(n.jsx)(Be,{className:T.a.RightButton})})),e.page===e.maxPages&&1!==e.maxPages&&(t=Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page-1)},children:Object(n.jsx)(le,{className:T.a.LeftButton})})),e.page>1&&e.page<e.maxPages&&(t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page-1)},children:Object(n.jsx)(le,{className:T.a.LeftButton})}),Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page+1)},children:Object(n.jsx)(Be,{className:T.a.RightButton})})]}))),Object(n.jsx)("div",{className:T.a.MoviePageBar,children:t})}),Pe=function(){return Object(n.jsx)("h2",{children:"No se encontraron coincidencias"})},ke=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.movies})),a=Object(r.useState)(""),i=Object(O.a)(a,2),c=i[0],l=i[1],d=Object(o.h)(),v=Object(o.g)();Object(r.useEffect)((function(){var t,a,n;void 0!==d.movie?e((a=d.movie,n=+d.page,function(e){u.get("/search/movie",{params:{query:a,language:"es",page:n}}).then((function(t){e({type:N,payload:t.data})})).catch((function(e){console.error(e)}))})):e((t=+d.page,function(e){u.get("/discover/movie",{params:{page:t,language:"es"}}).then((function(t){e({type:I,payload:t.data})})).catch((function(e){console.error(e)}))}))}),[e,d]);var g,m=Object(n.jsx)("div",{className:x.a.LoadingBarContainer,children:Object(n.jsx)(h,{})});t.isLoading||(m=0!==(null===(g=t.movies)||void 0===g?void 0:g.results.length)?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,{moviesList:t.movies?t.movies:null}),Object(n.jsx)(Le,{page:+d.page,maxPages:t.movies?t.movies.total_pages:null,clicked:function(t){void 0===d.movie?(v.push("/search/"+t),e(D()),l("")):(v.push("/search/"+t+"/"+d.movie),e(D()))}})]}):Object(n.jsx)(Pe,{}));var j=null;return void 0===d.movie&&(j=Object(n.jsx)(G,{sortChanged:function(t){var a;e((a=t.target.value,function(e){u.get("/discover/movie",{params:{sort_by:a,language:"es"}}).then((function(t){e({type:C,payload:t.data})})).catch((function(e){console.error(e)}))})),e(D()),l("")}})),Object(n.jsxs)("div",{className:x.a.MovieSearch,children:[Object(n.jsx)(k,{changed:function(e){return function(e){l(e.target.value)}(e)},entered:function(t){"Enter"===t.key&&(v.push("/search/1/"+c),e(D()))},inputValue:c}),j,m]})};var Ie=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/details/:movieId",children:Object(n.jsx)(b,{})}),Object(n.jsx)(o.b,{path:"/search/:page/:movie?",children:Object(n.jsx)(ke,{})}),Object(n.jsx)(o.b,{path:"/",children:Object(n.jsx)(o.a,{to:"/search/1"})})]})})},Ne=a(10),Ce=a(40),Se={isLoading:!0},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;return t.type===v?{movie:t.payload,isLoading:!1}:e},Fe={isLoading:!0},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;return t.type===I||t.type===N||t.type===C?{movies:t.payload,isLoading:!1}:t.type===S?{isLoading:!e.isLoading}:e},Ae=Object(Ne.c)({movies:Re,movie:De}),Ge=Object(Ne.d)(Ae,Object(Ne.a)(Ce.a)),qe=a(12),Te=Object(n.jsx)(s.a,{store:Ge,children:Object(n.jsx)(qe.a,{children:Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Ie,{})})})});l.a.render(Te,document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fd597aec.chunk.js.map