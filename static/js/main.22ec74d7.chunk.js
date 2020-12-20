(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{11:function(e,t,a){e.exports={MovieDetails:"MovieDetails_MovieDetails__2Ozrj",ImagesContainer:"MovieDetails_ImagesContainer__Rmioi",BackgroundImage:"MovieDetails_BackgroundImage__35Rmy",PosterImage:"MovieDetails_PosterImage__1ycuo",DetailsContainer:"MovieDetails_DetailsContainer__28CTw",Details:"MovieDetails_Details__dZAjI",CastListContainer:"MovieDetails_CastListContainer__bkFp_",CastList:"MovieDetails_CastList__208gC"}},14:function(e,t,a){e.exports={MovieCard:"MovieCard_MovieCard__138og",PosterMovie:"MovieCard_PosterMovie__1Uadg",DetailsMovie:"MovieCard_DetailsMovie__22va4",BackgroundImage:"MovieCard_BackgroundImage__2Cd7T",PosterImage:"MovieCard_PosterImage__1GJtb"}},15:function(e,t,a){e.exports={MoviePageBar:"MoviePageBar_MoviePageBar__3RMye",RightButton:"MoviePageBar_RightButton__196nV",LeftButton:"MoviePageBar_LeftButton__3cgTj",ActivePage:"MoviePageBar_ActivePage__24JfT"}},24:function(e,t,a){e.exports={MovieSearch:"MovieSearch_MovieSearch__2A4rJ",LoadingBarContainer:"MovieSearch_LoadingBarContainer__2H5u6"}},25:function(e,t,a){e.exports={MovieSearchBar:"MovieSearchBar_MovieSearchBar__158-8",SearchBar:"MovieSearchBar_SearchBar__3gAUJ"}},26:function(e,t,a){e.exports={MovieFilter:"MovieFilter_MovieFilter__1KFCS",SortFilter:"MovieFilter_SortFilter__2EKqq"}},38:function(e,t,a){e.exports={Loader:"LoadBar_Loader__3z1fS",load3:"LoadBar_load3__3rXrW"}},39:function(e,t,a){e.exports={MovieList:"MovieList_MovieList__2tChs"}},47:function(e,t,a){},48:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a.n(r),c=a(17),l=a.n(c),o=(a(47),a(3)),s=(a(48),a(9)),d=a(37),u=a.n(d).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d546896be2b04fa91b3ca04ba0e6785c"}}),g="GET_MOVIE_BY_ID",v=a(11),m=a.n(v),j=a(38),p=a.n(j),h=function(){return Object(n.jsx)("div",{className:p.a.Loader,children:"Cargando..."})},b=function(){var e=Object(s.b)(),t=Object(o.h)(),a=Object(s.c)((function(e){return e.movie}));Object(r.useEffect)((function(){var a;e((a=+t.movieId,function(e){u.get("/movie/"+a,{params:{language:"es"}}).then((function(t){e({type:g,payload:t.data})})).catch((function(e){}))}))}),[e,t]);var i=[""];a.movie&&(console.log(a.movie),i=a.movie.genres.map((function(e){return e.name})));var c=Object(n.jsx)(h,{});if(!a.isLoading&&a.movie){var l,d,v,j,p,b,_,O=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});c=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:m.a.ImagesContainer,children:[Object(n.jsx)("img",{className:m.a.BackgroundImage,src:"https://image.tmdb.org/t/p/w500"+(null===(l=a.movie)||void 0===l?void 0:l.poster_path),alt:"fondo"}),Object(n.jsx)("img",{className:m.a.PosterImage,src:"https://image.tmdb.org/t/p/w500"+(null===(d=a.movie)||void 0===d?void 0:d.poster_path),alt:"poster"})]}),Object(n.jsx)("section",{className:m.a.DetailsContainer,children:Object(n.jsxs)("div",{className:m.a.Details,children:[Object(n.jsx)("h2",{children:null===(v=a.movie)||void 0===v?void 0:v.title}),Object(n.jsxs)("p",{children:[null===(j=a.movie)||void 0===j?void 0:j.vote_average,"/10"]}),Object(n.jsx)("p",{children:null===(p=a.movie)||void 0===p?void 0:p.overview}),Object(n.jsx)("h4",{children:"Fecha de salida"}),Object(n.jsx)("p",{children:null===(b=a.movie)||void 0===b?void 0:b.release_date}),Object(n.jsx)("h4",{children:"Ingresos"}),Object(n.jsx)("p",{children:O.format(a.movie.revenue)}),Object(n.jsx)("h4",{children:"Votos Promedio"}),Object(n.jsx)("p",{children:null===(_=a.movie)||void 0===_?void 0:_.vote_average}),Object(n.jsx)("h4",{children:"G\xe9neros"}),Object(n.jsx)("p",{children:i.join(" - ")})]})})]})}return Object(n.jsx)("div",{className:m.a.MovieDetails,children:c})},_=a(41),O=a(24),x=a.n(O),f=a(14),y=a.n(f),E=function(e){var t="https://image.tmdb.org/t/p/w500"+e.poster_path,a="https://image.tmdb.org/t/p/w500"+e.poster_path;return e.backdrop_path&&(t="https://image.tmdb.org/t/p/w500"+e.backdrop_path),e.poster_path||(t="https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg",a="https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw_400x400.jpg"),Object(n.jsxs)("div",{className:y.a.MovieCard,onClick:function(){return e.clicked(e.movieId)},children:[Object(n.jsxs)("div",{className:y.a.PosterMovie,children:[Object(n.jsx)("img",{className:y.a.BackgroundImage,src:t,alt:"Fondo"}),Object(n.jsx)("img",{className:y.a.PosterImage,src:a,alt:"Poster"})]}),Object(n.jsxs)("div",{className:y.a.DetailsMovie,children:[Object(n.jsx)("h3",{children:Object(n.jsx)("strong",{children:e.title})}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Year: "})," ",e.date]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Language: "})," ",e.language]})]})]})},M=a(39),C=a.n(M),w=function(e){var t=Object(o.g)(),a=null;return e.moviesList&&(a=e.moviesList.results.map((function(e){return Object(n.jsx)(E,{title:e.title,date:e.release_date,language:e.original_language,poster_path:e.poster_path,backdrop_path:e.backdrop_path,movieId:e.id,clicked:function(){return a=e.id,void t.push("/details/"+a);var a}},e.id)}))),Object(n.jsxs)("div",{className:C.a.MovieList,children:[Object(n.jsx)("h2",{children:"Lista de peliculas"}),Object(n.jsx)("div",{children:a})]})},L=a(25),B=a.n(L),P=function(e){return Object(n.jsxs)("div",{className:B.a.MovieSearchBar,children:[Object(n.jsx)("p",{children:"Buscar: "}),Object(n.jsx)("input",{className:B.a.SearchBar,type:"text",onChange:e.changed,onKeyPress:e.entered,value:e.inputValue})]})},I="GET_MOVIES",k="GET_MOVIE_SEARCH",S="GET_MOVIE_SORTED",N="CHANGE_LOADING",D=function(){return function(e){e({type:N})}},F=a(26),T=a.n(F),R=[{query:"popularity.desc",name:"Popularidad descendente"},{query:"popularity.asc",name:"Popularidad ascendente"},{query:"release_date.asc",name:"Fecha de salida ascendente"},{query:"release_date.desc",name:"Fecha de salida descendente"},{query:"original_title.asc",name:"Titulo ascendente"},{query:"original_title.desc",name:"Titulo descendente"}],q=function(e){var t=R.map((function(e){return Object(n.jsx)("option",{value:e.query,children:e.name},e.query)}));return Object(n.jsx)("div",{className:T.a.MovieFilter,children:Object(n.jsx)("div",{className:T.a.SortFilter,children:Object(n.jsx)("select",{onChange:e.sortChanged,children:t})})})},A=a(15),G=a.n(A);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var U=r.createElement("g",null,r.createElement("g",{id:"_x37__34_"},r.createElement("g",null,r.createElement("path",{d:"M317.896,396.024l304.749-276.467c27.36-27.36,27.36-71.677,0-99.037s-71.677-27.36-99.036,0L169.11,342.161 c-14.783,14.783-21.302,34.538-20.084,53.897c-1.218,19.359,5.301,39.114,20.084,53.897l354.531,321.606 c27.36,27.36,71.677,27.36,99.037,0s27.36-71.677,0-99.036L317.896,396.024z"})))),z=r.createElement("g",null),H=r.createElement("g",null),K=r.createElement("g",null),X=r.createElement("g",null),Y=r.createElement("g",null),W=r.createElement("g",null),Z=r.createElement("g",null),Q=r.createElement("g",null),$=r.createElement("g",null),ee=r.createElement("g",null),te=r.createElement("g",null),ae=r.createElement("g",null),ne=r.createElement("g",null),re=r.createElement("g",null),ie=r.createElement("g",null);function ce(e,t){var a=e.title,n=e.titleId,i=J(e,["title","titleId"]);return r.createElement("svg",V({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"792.082px",height:"792.082px",viewBox:"0 0 792.082 792.082",style:{enableBackground:"new 0 0 792.082 792.082"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,U,z,H,K,X,Y,W,Z,Q,$,ee,te,ae,ne,re,ie)}var le=r.forwardRef(ce);a.p;function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var de=r.createElement("g",null,r.createElement("g",null,r.createElement("path",{d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))),ue=r.createElement("g",null),ge=r.createElement("g",null),ve=r.createElement("g",null),me=r.createElement("g",null),je=r.createElement("g",null),pe=r.createElement("g",null),he=r.createElement("g",null),be=r.createElement("g",null),_e=r.createElement("g",null),Oe=r.createElement("g",null),xe=r.createElement("g",null),fe=r.createElement("g",null),ye=r.createElement("g",null),Ee=r.createElement("g",null),Me=r.createElement("g",null);function Ce(e,t){var a=e.title,n=e.titleId,i=se(e,["title","titleId"]);return r.createElement("svg",oe({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004",style:{enableBackground:"new 0 0 492.004 492.004"},xmlSpace:"preserve",ref:t,"aria-labelledby":n},i),a?r.createElement("title",{id:n},a):null,de,ue,ge,ve,me,je,pe,he,be,_e,Oe,xe,fe,ye,Ee,Me)}var we=r.forwardRef(Ce),Le=(a.p,function(e){var t=null;return e.maxPages&&(1===e.page&&1!==e.maxPages&&(t=Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page+1)},children:Object(n.jsx)(we,{className:G.a.RightButton})})),e.page===e.maxPages&&1!==e.maxPages&&(t=Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page-1)},children:Object(n.jsx)(le,{className:G.a.LeftButton})})),e.page>1&&e.page<e.maxPages&&(t=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page-1)},children:Object(n.jsx)(le,{className:G.a.LeftButton})}),Object(n.jsx)("div",{onClick:function(){return e.clicked(e.page+1)},children:Object(n.jsx)(we,{className:G.a.RightButton})})]}))),Object(n.jsx)("div",{className:G.a.MoviePageBar,children:t})}),Be=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.movies})),a=Object(r.useState)(""),i=Object(_.a)(a,2),c=i[0],l=i[1],d=Object(o.h)(),g=Object(o.g)();Object(r.useEffect)((function(){var t,a,n;void 0!==d.movie?e((a=d.movie,n=+d.page,function(e){u.get("/search/movie",{params:{query:a,language:"es",page:n}}).then((function(t){e({type:k,payload:t.data})})).catch((function(e){console.error(e)}))})):e((t=+d.page,function(e){u.get("/discover/movie",{params:{page:t}}).then((function(t){e({type:I,payload:t.data})})).catch((function(e){}))}))}),[e,d]);var v=Object(n.jsx)("div",{className:x.a.LoadingBarContainer,children:Object(n.jsx)(h,{})});t.isLoading||(v=Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(w,{moviesList:t.movies?t.movies:null}),Object(n.jsx)(Le,{page:+d.page,maxPages:t.movies?t.movies.total_pages:null,clicked:function(t){void 0===d.movie?(g.push("/search/"+t),e(D()),l("")):(g.push("/search/"+t+"/"+d.movie),e(D()))}})]}));var m=null;return void 0===d.movie&&(m=Object(n.jsx)(q,{sortChanged:function(t){var a;e((a=t.target.value,function(e){u.get("/discover/movie",{params:{sort_by:a}}).then((function(t){e({type:S,payload:t.data})}))})),e(D()),l("")}})),Object(n.jsxs)("div",{className:x.a.MovieSearch,children:[Object(n.jsx)(P,{changed:function(e){return function(e){l(e.target.value)}(e)},entered:function(t){"Enter"===t.key&&(g.push("/search/1/"+c),e(D()))},inputValue:c}),m,v]})};var Pe=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{path:"/details/:movieId",children:Object(n.jsx)(b,{})}),Object(n.jsx)(o.b,{path:"/search/:page/:movie?",children:Object(n.jsx)(Be,{})}),Object(n.jsx)(o.b,{path:"/",children:Object(n.jsx)(o.a,{to:"/search/1"})})]})})},Ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))},ke=a(10),Se=a(40),Ne={isLoading:!0},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;return t.type===g?{movie:t.payload,isLoading:!1}:e},Fe={isLoading:!0},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;return t.type===I||t.type===k||t.type===S?{movies:t.payload,isLoading:!1}:t.type===N?{isLoading:!e.isLoading}:e},Re=Object(ke.c)({movies:Te,movie:De}),qe=Object(ke.d)(Re,Object(ke.a)(Se.a)),Ae=a(12),Ge=Object(n.jsx)(s.a,{store:qe,children:Object(n.jsx)(Ae.a,{children:Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Pe,{})})})});l.a.render(Ge,document.getElementById("root")),Ie()}},[[71,1,2]]]);
//# sourceMappingURL=main.22ec74d7.chunk.js.map