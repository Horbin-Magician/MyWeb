(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[4],{141:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return b}));var r=n(55),a=n(134),c=n.n(a),s=function(e,t){return t=c()(t),Object(r.a)("/api/login",{username:e,password:t},"POST")},i=function(){return Object(r.a)("/api/user",{type:"get"},"POST")},o=function(e,t,n){return t=c()(t),Object(r.a)("/api/user",{type:"update",username:e,password:t,authority:n},"POST")},u=function(e){return Object(r.a)("/api/user",{type:"del",username:e},"POST")},l=function(){return Object(r.a)("/api/authority",{type:"get"},"POST")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Object(r.a)("/api/authority",{type:"update",name:e,menus:t},"POST")},b=function(e){return Object(r.a)("/api/authority",{type:"del",name:e},"POST")}},297:function(e,t,n){},301:function(e,t,n){},312:function(e,t,n){"use strict";n.r(t);n(193);var r=n(14),a=n(0),c=n(23),s=n.n(c),i=n(184),o=n.n(i),u=(n(121),n(39)),l=n(40),j=n(41),b=n(43),h=n(42),d=n(53),p=n(22),O=(n(191),n(178)),m=(n(139),n(91)),f=(n(140),n(62)),x=(n(192),n(152)),g=(n(75),n(27)),y=(n(138),n(90)),v=(n(188),n(58)),w=n(316),S=n(314),k=n(317),P=n(318),I=n(319),z=(n(187),n(77)),C=(n(185),n(122)),T=n(123),U=n.n(T),L=n(142),N=n(315),_=n(54),A=n(7),E=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onFinish=function(){var t=Object(L.a)(U.a.mark((function t(n){var r,a,c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.username,a=n.password,t.next=3,Object(_.d)(r,a);case 3:(c=t.sent)&&"0"===c.status&&e.props.switchShow();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(n,[{key:"render",value:function(){return Object(A.jsx)(y.a,{title:"\u7528\u6237\u767b\u5f55",visible:this.props.showLogin,onCancel:this.props.switchShow,footer:null,children:Object(A.jsxs)(z.a,{name:"normal_login",footer:null,initialValues:{},onFinish:this.onFinish,children:[Object(A.jsx)(z.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"},{min:4,message:"\u7528\u6237\u540d\u6700\u5c114\u4f4d"},{max:12,message:"\u7528\u6237\u540d\u6700\u591a12\u4f4d"},{pattern:/^[a-zA-z0-9_*!]+$/,message:"\u7528\u6237\u540d\u5fc5\u987b\u7531\u82f1\u6587\u3001\u6570\u5b57\u6216\u82f1\u6587\u5b57\u7b26_*!\u7ec4\u6210"}],children:Object(A.jsx)(C.a,{prefix:Object(A.jsx)(S.a,{className:"site-form-item-icon"}),placeholder:"\u7528\u6237\u540d"})}),Object(A.jsx)(z.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801\uff01"},{min:6,message:"\u5bc6\u7801\u6700\u5c116\u4f4d"},{max:16,message:"\u5bc6\u7801\u6700\u591a16\u4f4d"},{pattern:/^[a-zA-z0-9_*!]+$/,message:"\u5bc6\u7801\u5fc5\u987b\u7531\u82f1\u6587\u3001\u6570\u5b57\u6216\u82f1\u6587\u5b57\u7b26_*!\u7ec4\u6210"}],children:Object(A.jsx)(C.a,{prefix:Object(A.jsx)(N.a,{className:"site-form-item-icon"}),type:"password",placeholder:"\u5bc6\u7801"})}),Object(A.jsx)(z.a.Item,{children:Object(A.jsx)(g.a,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"\u767b\u5f55"})})]})})}}]),n}(a.Component),J=(n(297),v.a.SubMenu),F=v.a.Item,M=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onUserMenuClick=function(e){var t=e.key;"logout"===t?y.a.confirm({title:"\u662f\u5426\u786e\u8ba4\u6ce8\u9500\uff1f",onOk:function(){return Object(_.e)()}}):"manage"===t&&r.props.history.push("/admin")},r.switchLoginShow=function(){return r.setState({showLogin:!r.state.showLogin})},r.state={showLogin:!1},Object(_.a)((function(){return r.forceUpdate()})),r}return Object(j.a)(n,[{key:"render",value:function(){var e=Object(A.jsxs)(v.a,{onClick:this.onUserMenuClick,children:[Object(A.jsx)(v.a.Item,{children:"\u7ba1\u7406"},"manage"),Object(A.jsx)(v.a.Item,{children:"\u6ce8\u9500"},"logout")]}),t=this.props.history.location.pathname.split("/");if("admin"===t[1])return null;var n=""===t[t.length-1]?"home":t[t.length-1];"passages"===t[1]&&(n="passages");var r=null;return r=Object(_.b)()?Object(A.jsx)(x.a,{overlay:e,trigger:["click"],placement:"bottomRight",arrow:!0,children:Object(A.jsx)(g.a,{type:"primary",shape:"circle",children:Object(A.jsx)(w.a,{})})}):Object(A.jsx)(g.a,{type:"primary",shape:"circle",onClick:this.switchLoginShow,children:Object(A.jsx)(S.a,{})}),Object(A.jsx)(O.a,{offsetTop:0,children:Object(A.jsxs)("div",{children:[Object(A.jsx)(m.a,{className:"header",align:"middle",justify:"center",children:Object(A.jsx)(f.a,{children:Object(A.jsxs)(v.a,{className:"header-menu",mode:"horizontal",selectedKeys:[n],children:[Object(A.jsx)(F,{icon:Object(A.jsx)(k.a,{}),children:Object(A.jsx)(d.b,{to:"/",children:"\u6e90\u521d"})},"home"),Object(A.jsx)(F,{icon:Object(A.jsx)(P.a,{}),children:Object(A.jsx)(d.b,{to:"/passages",children:"\u5915\u62fe"})},"passages"),Object(A.jsx)(J,{title:"\u673a\u5de7",icon:Object(A.jsx)(I.a,{}),children:Object(A.jsx)(F,{children:Object(A.jsx)(d.b,{to:"/tools/favorites",children:"\u6536\u85cf\u5939"})},"favorites")},"tools")]})})}),Object(A.jsx)("div",{className:"userbtn",children:r}),Object(A.jsx)(E,{switchShow:this.switchLoginShow,showLogin:this.state.showLogin})]})})}}]),n}(a.Component),q=Object(p.g)(M),G=n.p+"static/media/beianIcon.0c577066.png",H=(n(301),function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return"admin"===this.props.history.location.pathname.split("/")[1]?null:Object(A.jsxs)(m.a,{className:"footer",justify:"center",gutter:{xs:8,sm:16,md:24},children:[Object(A.jsxs)(f.a,{children:[Object(A.jsx)("img",{src:G,alt:""}),Object(A.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011102004461",children:"\u9102\u516c\u7f51\u5b89\u5907 42011102004461\u53f7"})]}),Object(A.jsx)(f.a,{children:Object(A.jsx)("a",{href:"https://beian.miit.gov.cn",children:"\u8d63ICP\u59072021004310\u53f7-1"})}),Object(A.jsx)(f.a,{children:Object(A.jsx)(d.b,{to:"/about",children:"\xa92021 Horbin"})})]})}}]),n}(a.Component)),$=Object(p.g)(H),B=(n(189),n(144)),K=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(A.jsx)(B.a,{size:"large"})})}}]),n}(a.Component),R=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,666))})),V=Object(a.lazy)((function(){return Promise.all([n.e(2),n.e(10),n.e(14)]).then(n.bind(null,669))})),D=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(7),n.e(11)]).then(n.bind(null,670))})),Q=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(9),n.e(13)]).then(n.bind(null,667))})),W=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,668))})),X=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,665))})),Y=function(e){Object(b.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).initApp=function(){Object(_.c)(),u.b.config({top:50})},r.initApp(),r}return Object(j.a)(n,[{key:"render",value:function(){return Object(A.jsx)(d.a,{children:Object(A.jsxs)(a.Suspense,{fallback:Object(A.jsx)(K,{}),children:[Object(A.jsx)(q,{}),Object(A.jsx)("div",{style:{minHeight:"calc(100% - 5rem)"},children:Object(A.jsxs)(p.d,{children:[Object(A.jsx)(p.b,{path:"/passages",component:D}),Object(A.jsx)(p.b,{path:"/tools",component:Q}),Object(A.jsx)(p.b,{path:"/about",component:W}),Object(A.jsx)(p.b,{path:"/admin",component:R}),Object(A.jsx)(p.b,{path:"/",exact:!0,component:V}),Object(A.jsx)(p.b,{path:"/",component:X})]})}),Object(A.jsx)($,{})]})})}}]),n}(a.Component);s.a.render(Object(A.jsx)(r.a,{locale:o.a,children:Object(A.jsx)(Y,{})}),document.getElementById("root"))},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return d}));n(121);var r=n(39),a=n(141),c=n(61),s="user_key";var i={saveUser:function(e){localStorage.setItem(s,JSON.stringify(e))},getUser:function(){return JSON.parse(localStorage.getItem(s)||"{}")},removeUser:function(){localStorage.removeItem(s)}},o=[],u=function(e){o.push(e)},l=function(){o.forEach((function(e){e()}))},j=function(e,t){return new Promise((function(n){Object(a.d)(e,t).then((function(a){if(a&&"0"===a.status){r.b.success("\u767b\u5f55\u6210\u529f\uff0c\u6b22\u8fce\u56de\u6765\uff5e");var s=a.authority;c.a.userdata={username:e,password:t,authority:s},i.saveUser({username:e,password:t,authority:s}),l()}else{i.getUser().username?(i.removeUser(),c.a.userdata=null,console.log("update"),l(),r.b.error("\u7528\u6237\u4fe1\u606f\u5df2\u66f4\u65b0\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\uff01")):r.b.error("\u767b\u5f55\u5931\u8d25\uff0c\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef\uff01")}n(a)}))}))},b=function(){i.removeUser(),c.a.userdata=null,l(),r.b.success("\u6ce8\u9500\u6210\u529f")},h=function(){var e=i.getUser();return e.username?(c.a.userdata=e,j(e.username,e.password)):null},d=function(){return!(!c.a.userdata||!c.a.userdata.username)}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(121);var r=n(39),a=n(133),c=n.n(a);function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(a){("GET"===n?c.a.get(e,{params:t}):c.a.post(e,t)).then((function(e){a(e.data)})).catch((function(e){r.b.error("\u8bf7\u6c42\u51fa\u9519\uff1a"+e.message)}))}))}},61:function(e,t,n){"use strict";var r={userdata:{}};t.a=r}},[[312,5,6]]]);
//# sourceMappingURL=main.21a858f9.chunk.js.map