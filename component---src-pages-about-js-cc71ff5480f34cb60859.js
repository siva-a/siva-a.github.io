(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(144),o=a(151),s=a(149);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"About",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"Coming soon"),r.a.createElement(i.Link,{to:"/index/"},"Go to Home"))}},144:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(143),c=a.n(s);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return s.withPrefix}),a.d(e,"navigate",function(){return s.navigate}),a.d(e,"push",function(){return s.push}),a.d(e,"replace",function(){return s.replace}),a.d(e,"navigateTo",function(){return s.navigateTo});var u=a(145),l=a.n(u);a.d(e,"PageRenderer",function(){return l.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(t,e,a){var n;t.exports=(n=a(147))&&n.default||n},146:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},147:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(52),c=a(2),u=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},148:function(t,e,a){},149:function(t,e,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(152),u=a.n(c),l=a(144);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="1025518380"},150:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},151:function(t,e,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(144),u=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var l=u,d=(a(148),function(t){var e=t.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:s.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-about-js-cc71ff5480f34cb60859.js.map