webpackJsonp([35783957827783],{42:function(e,t,n){(function(r){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),c=(l(a),n(39)),o=l(c),s=n(13),u=l(s),i={getStarted:{background:"#fdc486",boxShadow:"7px 7px 2px #f1f1f1",color:"black",padding:"12px 24px",borderRadius:4},homeBox:function(e){return{flex:1,padding:"0 12px 24px"}},wrap:function(e){return{display:"flex",flexDirection:e?"column":"row"}},wrapOuter:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"}},d=function(e){var t=e.showHeader;return r.createElement(o.default,{query:"screen and (max-width: 700px)"},function(e){return r.createElement("div",{style:i.wrapOuter},t&&r.createElement("h2",null,"Ready?"),r.createElement("div",{css:i.wrap(e)},r.createElement("div",{css:i.homeBox(e)},r.createElement("h3",null,"Just casual"),r.createElement("p",null,"We give weekend workshops to stretch your arsenal of programming techniques."),r.createElement("div",null,r.createElement(u.default,{to:"/events",css:i.getStarted},"Join a ",r.createElement("b",null,"Lightning ⚡️ Workshop")," →"))),r.createElement("div",{css:i.homeBox(e)},r.createElement("h3",null,"“I want to learn tons.”"),r.createElement("p",null,"A 1 or 2 day conference where our experts make you smarter. This is currently being developed."),r.createElement("div",null,r.createElement(u.default,{to:"/events",css:i.getStarted},"Join an ",r.createElement("b",null,"Experts 👩🏽‍🏫 Conference")," →")))))})};t.default=d,e.exports=t.default}).call(t,n(8))},203:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),c=(r(a),n(13)),o=r(c),s=n(39),u=r(s),i=n(42),d=r(i),p=n(55),f={getStarted:{background:"#fdc486",boxShadow:"7px 7px 2px #f1f1f1",color:"black",padding:"12px 24px",borderRadius:4},h2:{fontSize:"22px"},h3:{fontSize:"24px",fontFamily:"Nunito, 'Helvetica Neue', Helvetica, Arial, sans-serif"},homeBox:function(e){return{flex:1,padding:"0 12px 24px"}},link:{color:"#ea4268"},postsWrap:{margin:"148px 0 48px 0",textAlign:"center",borderTop:"1px dashed #d6d6d6"},trainingSellWrap:{textAlign:"center"},wrap:function(e){return{display:"flex",flexDirection:e?"column":"row"}}},m=function(e){return{title:"",path:null,date:null,excerpt:"No "+e+". Please check back later."}},x=function(t){var n=t.data,r=(0,p.UnpackMarkdownEdges)(n),a=(0,p.SortPostsByDate)(r),c=(0,p.FilterPostsByDate)((0,p.FilterByPath)(a,"event/")),s=(0,p.FilterByPath)(a,"blog/"),i=c[0]||m("events"),x=i.title,h=i.path,E=(i.date,i.excerpt,s[s.length-1]||m("blog posts")),g=E.title,v=E.path;E.date,E.excerpt;return e.createElement("div",null,e.createElement(u.default,{query:"screen and (max-width: 700px)"},function(t){return e.createElement("div",null,e.createElement("div",{css:f.trainingSellWrap},e.createElement("h2",null,"Time to update yourself."),e.createElement("p",null,e.createElement("b",null,"Learn to be a better developer, with us.")),e.createElement(d.default,null)),e.createElement("div",{css:l({},f.wrap(t),f.postsWrap)},e.createElement("div",{css:f.homeBox(t)},e.createElement("h2",{css:f.h2},"Next event"),h&&e.createElement("h3",{css:f.h3},e.createElement(o.default,{css:f.link,to:h},x))),e.createElement("div",{css:f.homeBox(t)},e.createElement("h2",{css:f.h2},"Latest from our blog"),v&&e.createElement("h3",{css:f.h3},e.createElement(o.default,{css:f.link,to:v},g)))))}))};t.default=x;t.query="** extracted graphql fragment **"}).call(t,n(8))}});
//# sourceMappingURL=component---src-pages-index-js-8e18015880867d90482f.js.map