(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[14],{595:function(e,t,a){},670:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));a(391);var s=a(378),n=(a(185),a(122)),r=(a(140),a(91)),c=(a(141),a(62)),i=a(123),l=a.n(i),o=(a(121),a(39)),h=a(142),u=a(40),j=a(41),p=a(43),d=a(42),b=a(0),g=a.p+"static/media/logo.c5189828.svg",y=(a(189),a(145)),O=(a(75),a(27)),f=(a(345),a(344)),x=(a(380),a(407)),m=a(7),v=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onClickFun=function(e){return function(){window.open(e)}},e.tags=[{tag:"\u77e5\u4e4e",reg:/- \u77e5\u4e4e$/},{tag:"\u5b98\u65b9",reg:/\u5b98\u65b9$/}],e.getCardNodes=function(t){return t.map((function(t){var a,s=t.title;return a=e.tags.map((function(e){return s.match(e.reg)?(s=s.replace(e.reg," "),Object(m.jsx)(x.a,{color:"blue",children:e.tag})):null})),s=Object(m.jsxs)("span",{children:[a,s]}),Object(m.jsx)(r.a,{justify:"center",style:{marginBottom:"10px"},children:Object(m.jsx)(c.a,{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:12},children:Object(m.jsx)(f.a,{title:s,hoverable:!0,onClick:e.onClickFun(t.href),headStyle:{color:"rgb(24, 144, 255)"},children:t.contain})})},t.href)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props,t=e.result,a=e.loading,s=[],n="",i=[];return t.data&&(s=t.data,n=t.moreUrl,i=this.getCardNodes(s)),Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:a?{display:"none"}:{display:"block"},children:[i,Object(m.jsx)(r.a,{justify:"center",style:{marginBottom:"10px"},children:Object(m.jsx)(c.a,{span:""!==n?"":0,children:Object(m.jsx)(O.a,{type:"link",href:n,children:"\u70b9\u51fb\u67e5\u770b\u66f4\u591a"})})})]}),Object(m.jsx)("div",{style:a?{display:"block"}:{display:"none"},children:Object(m.jsx)(r.a,{justify:"center",style:{marginBottom:"10px"},children:Object(m.jsx)(c.a,{children:Object(m.jsx)(y.a,{size:"large"})})})})]})}}]),a}(b.Component),w=a(55),S=function(e,t){return Object(w.a)("/api/search",{type:e,key:t},"POST")},k=(a(595),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={searchType:"web",showState:"normal",searchValue:"",searchResult:{},searchResultLoading:!0},e.searchTypeOptions=[{label:"\u7f51\u9875",value:"web"},{label:"\u6587\u4ef6",value:"file"}],e.onSearch=function(){"web"===e.state.searchType?window.location.href="https://www.baidu.com/s?ie=utf-8&wd="+e.state.searchValue:("normal"===e.state.showState&&e.setState({showState:"search"}),e.getSearchResult())},e.getSearchResult=Object(h.a)(l.a.mark((function t(){var a,s,n=arguments;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:e.state.searchType,e.setState({searchResultLoading:!0}),t.next=4,S(a,e.state.searchValue);case 4:0===(s=t.sent).status?e.setState({searchResult:s,searchResultLoading:!1}):(o.b.info(s.errorMessage),e.setState({searchResultLoading:!1,showState:"normal"}));case 6:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(a,[{key:"render",value:function(){var e=this,t={paddingTop:"200px"},a="",i=0;return"search"===this.state.showState&&(t={},a=0,i=24),Object(m.jsxs)("div",{style:t,children:[Object(m.jsx)(r.a,{justify:"center",style:{marginBottom:"10px"},children:Object(m.jsx)(c.a,{span:a,children:Object(m.jsx)("img",{src:g,height:"100",alt:"logo"})})}),Object(m.jsx)(r.a,{justify:"center",children:Object(m.jsx)(c.a,{xs:{span:22},sm:{span:22},md:{span:12},lg:{span:8},children:Object(m.jsx)(n.a,{className:"search-input",placeholder:"\u586b\u5199\u5185\u5bb9\uff0c\u56de\u8f66\u5373\u53ef\u641c\u7d22",onChange:function(t){return e.setState({searchValue:t.target.value})},onPressEnter:this.onSearch})})}),Object(m.jsx)(r.a,{justify:"center",style:{marginTop:"10px"},children:Object(m.jsx)(c.a,{span:a,children:Object(m.jsx)(s.a.Group,{size:"middle",value:this.state.searchType,options:this.searchTypeOptions,optionType:"button",buttonStyle:"solid"})})}),Object(m.jsx)(r.a,{justify:"center",children:Object(m.jsx)(c.a,{span:i,children:Object(m.jsx)(v,{searchType:this.state.searchType,result:this.state.searchResult,loading:this.state.searchResultLoading})})})]})}}]),a}(b.Component))}}]);
//# sourceMappingURL=14.d6a61cd7.chunk.js.map