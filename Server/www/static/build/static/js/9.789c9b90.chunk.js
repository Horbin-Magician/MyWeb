(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[9],{360:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var a=n(39),r=n(40),i=n(42),s=n(41),c=n(0),o=n(529),u=n(7),l=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},children:[Object(u.jsx)(o.a,{style:{fontSize:"50px",color:"red"}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\u6ca1\u6709\u627e\u5230\u8be5\u9875\u9762\uff0c\u8bf7\u68c0\u67e5\u8def\u5f84\u662f\u5426\u6709\u8bef\uff01"]})}}]),n}(c.Component)},414:function(t,e,n){},415:function(t,e,n){},532:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return G}));var a=n(39),r=n(40),i=n(42),s=n(41),c=n(0),o=n.n(c),u=n(22),l=n(122),d=n.n(l),p=n(140),j=(n(333),n(334)),f=(n(74),n(27)),b=(n(134),n(51)),h=(n(186),n(59)),O=(n(136),n(88)),v=n(538),m=n(539),x=n(135),y=n(53),g=(n(184),n(118)),k=n(7),S=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).input=o.a.createRef(),t.onExit=function(){t.props.editFavType(t.input.current.state.value),t.input.current.setState({value:""})},t}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(){this.input.current.focus()}},{key:"render",value:function(){var t=this;return Object(k.jsx)(g.a,{ref:this.input,onBlur:this.onExit,onPressEnter:function(){t.input.current.blur()}})}}]),n}(c.Component),C=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={onEdit:!1},t.editFavType=function(e){t.props.editFavType(t.props.title,e),t.setState({onEdit:!1})},t.onDoubleClick=function(){t.setState({onEdit:!0})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.onEdit,e=this.props.title;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:{display:t?"none":"block"},onDoubleClick:this.onDoubleClick,children:e}),Object(k.jsx)("div",{style:{display:t?"block":"none"},children:Object(k.jsx)(S,{editFavType:this.editFavType})})]})}}]),n}(c.Component),M=j.a.Sider,T=O.a.confirm,w=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).setSelectedMenu=function(t){r.setState({selectedMenu:t}),r.props.onFavTypeChange(t)},r.updateMenuList=function(){Object(x.g)().then((function(t){var e=r.state.selectedMenu,n=t.data;r.setState({menuList:n}),e&&n.find((function(t){return t.title===e}))||!n[0]||r.setSelectedMenu(n[0].title)}))},r.getRankFromTitle=function(t){return r.state.menuList.find((function(e){return e.title===t})).rank},r.onDragStart=function(t){var e=t.target.childNodes[0].childNodes[0].innerHTML;r.setState({dragingMenu:e})},r.onDropOver=function(t){t.preventDefault();var e=r.state.dragingMenu,n=t.target.innerHTML;e!==n&&r.setState({targetMenu:n})},r.onDrop=function(t){var e=r.state,n=e.targetMenu,a=e.dragingMenu;Object(x.i)(a,n).then((function(t){"0"===t.status&&r.updateMenuList()})),r.setState({targetMenu:{},dragingMenu:{}})},r.getMenuNodes=function(t){var e=r.state,n=e.targetMenu,a=e.dragingMenu;return t.map((function(t){var e={};if(n===t.title){var i=r.getRankFromTitle(n);e=r.getRankFromTitle(a)>i?{borderTop:"2px dashed #1890ff"}:{borderBottom:"2px dashed #1890ff"}}return Object(k.jsx)(h.a.Item,{style:e,draggable:!0,onDragStart:r.onDragStart,onDragOver:r.onDropOver,onDrop:r.onDrop,children:Object(k.jsx)(C,{title:t.title,editFavType:r.editFavType})},t.title)}))},r.onAdd=function(){return r.setState({onAddStatus:!0})},r.onDel=function(){T({title:"\u662f\u5426\u786e\u5b9a\u5220\u9664?",onOk:function(){Object(x.d)(r.state.selectedMenu).then((function(t){"0"===t.status&&(b.b.success("\u5220\u9664\u6210\u529f\uff01"),r.updateMenuList())}))}})},r.onSelect=function(t){return r.setSelectedMenu(t.key)},r.editFavType=function(t,e){r.state.menuList.find((function(t){return t.title===e}))?b.b.error("\u5df2\u6709\u76f8\u540c\u7c7b\u522b\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\uff01"):e&&Object(x.m)(e,void 0,t).then((function(n){"0"===n.status&&(b.b.success("\u4fee\u6539\u6210\u529f\uff01"),r.updateMenuList(),t===r.state.selectedMenu&&r.setState({selectedMenu:e}))}))},r.addFavType=function(t){var e=r.state.menuList;if(e.find((function(e){return e.title===t})))b.b.error("\u5df2\u6709\u76f8\u540c\u7c7b\u522b\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\uff01");else if(t){var n=e.length;Object(x.m)(t,n).then((function(a){"0"===a.status&&(b.b.success("\u6dfb\u52a0\u6210\u529f\uff01"),e.push({rank:n,title:t}),r.setState({menuList:e}))}))}r.setState({onAddStatus:!1})},r.state={theme:"light",menuList:[],onAddStatus:!1,selectedMenu:"",dragingMenu:{},targetMenu:{}},Object(y.a)((function(){return r.forceUpdate()})),r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.updateMenuList()}},{key:"render",value:function(){var t=this.state,e=t.menuList,n=t.onAddStatus,a=t.selectedMenu,r=this.getMenuNodes(e);return Object(k.jsxs)(M,{breakpoint:"sm",width:"150px",collapsedWidth:"0px",zeroWidthTriggerStyle:{width:"20px",right:"-20px",top:"300px"},className:"favourites-sider",theme:this.state.theme,children:[Object(k.jsxs)(h.a,{className:"favourites-sider-menu",mode:"inline",selectedKeys:[a],onSelect:this.onSelect,children:[r,Object(k.jsx)(h.a.Item,{disabled:!0,style:{display:n?"block":"none"},children:Object(k.jsx)(S,{editFavType:this.addFavType})},"new-menu")]}),Object(k.jsxs)("div",{style:Object(y.b)()?{display:"block"}:{display:"none"},children:[Object(k.jsx)(f.a,{type:"link",style:{width:"50%"},onClick:this.onAdd,children:Object(k.jsx)(v.a,{style:{fontSize:"20px"}})}),Object(k.jsx)(f.a,{type:"link",style:{width:"50%"},onClick:this.onDel,children:Object(k.jsx)(m.a,{style:{fontSize:"20px"}})})]})]})}}]),n}(c.Component),F=(n(359),n(394)),L=(n(185),n(78)),U=(n(137),n(90)),D=(n(138),n(56)),R=(n(335),n(331)),E=n(528),A=(n(530),n(525)),I=(n(345),n(343)),N=n(540),z=n(529),q=(n(414),I.a.Meta),W=O.a.confirm,H=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).onEdit=function(){var e=t.props,n=e.url,a=e.title,r=e.description,i=e.type,s=e.rank,c=e.iconUrl;t.props.onEdit(n,a,r,i,s,c)},t.onDel=function(){W({title:"\u662f\u5426\u786e\u5b9a\u5220\u9664?",onOk:function(){Object(x.c)(t.props.url).then((function(e){"0"===e.status&&(b.b.success("\u5220\u9664\u6210\u529f\uff01"),t.props.update())}))}})},t.onRankChange=function(e){var n=t.props.url;Object(x.l)(n,void 0,void 0,e)},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.url,n=t.title,a=t.iconUrl,r=t.description,i=t.rank;return Object(k.jsx)(I.a,{style:{maxWidth:"550px",minWidth:"200px"},headStyle:{minHeight:"36px"},actions:Object(y.b)()?[Object(k.jsx)(N.a,{onClick:this.onEdit},"edit"),Object(k.jsx)(m.a,{onClick:this.onDel},"delete")]:[],title:Object(k.jsx)(F.a,{disabled:!Object(y.b)(),defaultValue:i,onChange:this.onRankChange,style:{width:"100%",textAlign:"center"}}),hoverable:!0,children:Object(k.jsx)(q,{avatar:Object(k.jsx)(A.a,{size:32,shape:"square",style:{marginTop:"10px"},src:a||e+"favicon.ico",icon:Object(k.jsx)(z.a,{})}),title:n,description:r,onClick:function(){window.open(e)}})})}}]),n}(c.Component),B=R.a.Option,J=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(t){var r;return Object(a.a)(this,n),(r=e.call(this,t)).getCardNodes=function(t){return t.map((function(t){return Object(k.jsx)(D.a,{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:6},children:Object(k.jsx)(H,{url:t.url,title:t.title,iconUrl:t.iconUrl,description:t.description,type:t.type,rank:t.rank,update:r.props.update,onEdit:r.onEdit})},t.url)}))},r.updateItem=function(){r.formRef.current.validateFields().then((function(t){var e=t.url,n=t.title,a=t.description,i=t.type,s=t.rank,c=t.iconUrl;Object(x.l)(e,i,n,s,c,a,r.oldUrl).then((function(t){"0"===t.status&&(r.props.update(),r.afterUpdate(),b.b.success("\u66f4\u65b0\u6210\u529f\uff01"))}))})).catch((function(t){return b.b.error("\u8bf7\u6b63\u786e\u586b\u5199\u4fe1\u606f\uff01")}))},r.afterUpdate=function(){r.setState({showStatus:0}),r.formRef.current.resetFields(),r.oldUrl=""},r.onEdit=function(t,e,n,a,i,s){r.oldUrl=t,Object(x.g)().then((function(c){var o=c.data.map((function(t){return Object(k.jsx)(B,{value:t.title,children:t.title},t.title)}));r.formRef.current.setFieldsValue({url:t,title:e,description:n,type:a,rank:i,iconUrl:s}),r.setState({typeOptions:o,showStatus:1})}))},r.state={showStatus:0},r.formRef=o.a.createRef(),r.oldUrl="",Object(y.a)((function(){return r.forceUpdate()})),r}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.props.itemList,n=this.getCardNodes(e);return Object(k.jsxs)("div",{children:[Object(k.jsxs)(U.a,{gutter:[{xs:8,sm:16,md:16,lg:24},{xs:8,sm:16,md:16,lg:24}],children:[n,Object(k.jsx)("div",{style:Object(y.b)()?{display:"block"}:{display:"none"},children:Object(k.jsx)(f.a,{icon:Object(k.jsx)(E.a,{style:{fontSize:"50px",color:"#C0C0C0"}}),style:{height:"180px",width:"180px"},onClick:function(){t.onEdit("","","",t.props.favType,3)}})})]}),Object(k.jsx)(O.a,{forceRender:!0,title:"\u6536\u85cf\u9879\u4fe1\u606f",visible:1===this.state.showStatus,onOk:function(){t.updateItem()},onCancel:this.afterUpdate,children:Object(k.jsxs)(L.a,{ref:this.formRef,children:[Object(k.jsx)(L.a.Item,{name:"url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165URL"}],children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165URL"})}),Object(k.jsx)(L.a.Item,{name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"})}),Object(k.jsx)(L.a.Item,{name:"description",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76f8\u5173\u63cf\u8ff0"}],children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165\u76f8\u5173\u63cf\u8ff0"})}),Object(k.jsx)(L.a.Item,{name:"iconUrl",children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165IconURL\uff0c\u53ef\u4e3a\u7a7a"})}),Object(k.jsx)(L.a.Item,{name:"type",children:Object(k.jsx)(R.a,{children:this.state.typeOptions})}),Object(k.jsx)(L.a.Item,{name:"rank",children:Object(k.jsx)(F.a,{style:{margin:"auto 0"}})})]})})]})}}]),n}(c.Component),V=(n(415),j.a.Content),K=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={theme:"light",itemList:[]},t.onFavTypeChange=function(){var e=Object(p.a)(d.a.mark((function e(n){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.f)(n);case 2:a=e.sent,r=a.data,t.setState({itemList:r,favType:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state.favType;return Object(k.jsxs)(j.a,{className:"favourites",children:[Object(k.jsx)(w,{onFavTypeChange:this.onFavTypeChange}),Object(k.jsx)(j.a,{children:Object(k.jsx)(V,{className:"favourites-content",children:Object(k.jsx)(J,{itemList:this.state.itemList,favType:this.state.favType,update:function(){return t.onFavTypeChange(e)}})})})]})}}]),n}(c.Component),P=n(360),G=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(u.d,{children:[Object(k.jsx)(u.b,{path:"/tools/favorites",component:K}),Object(k.jsx)(u.b,{path:"/",component:P.default})]})})}}]),n}(c.Component)}}]);
//# sourceMappingURL=9.789c9b90.chunk.js.map