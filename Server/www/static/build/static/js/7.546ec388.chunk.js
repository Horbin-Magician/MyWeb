(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[7],{338:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var a=n(39),i=n(40),r=n(42),s=n(41),c=n(0),o=n(499),u=n(7),l=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},children:[Object(u.jsx)(o.a,{style:{fontSize:"50px",color:"red"}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"\u6ca1\u6709\u627e\u5230\u8be5\u9875\u9762\uff0c\u8bf7\u68c0\u67e5\u8def\u5f84\u662f\u5426\u6709\u8bef\uff01"]})}}]),n}(c.Component)},385:function(t,e,n){},386:function(t,e,n){},504:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return G}));var a=n(39),i=n(40),r=n(42),s=n(41),c=n(0),o=n.n(c),u=n(22),l=n(118),d=n.n(l),p=n(135),j=(n(335),n(336)),h=(n(72),n(27)),f=(n(131),n(52)),b=(n(178),n(59)),O=(n(133),n(88)),v=n(510),x=n(509),m=n(132),y=n(53),g=(n(177),n(114)),k=n(7),S=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).input=o.a.createRef(),t.onExit=function(){t.props.editFavType(t.input.current.state.value),t.input.current.setState({value:""})},t}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){this.input.current.focus()}},{key:"render",value:function(){var t=this;return Object(k.jsx)(g.a,{ref:this.input,onBlur:this.onExit,onPressEnter:function(){t.input.current.blur()}})}}]),n}(c.Component),C=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={onEdit:!1},t.editFavType=function(e){t.props.editFavType(t.props.title,e),t.setState({onEdit:!1})},t.onDoubleClick=function(){t.setState({onEdit:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.onEdit,e=this.props.title;return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:{display:t?"none":"block"},onDoubleClick:this.onDoubleClick,children:e}),Object(k.jsx)("div",{style:{display:t?"block":"none"},children:Object(k.jsx)(S,{editFavType:this.editFavType})})]})}}]),n}(c.Component),M=j.a.Sider,T=O.a.confirm,w=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).setSelectedMenu=function(t){i.setState({selectedMenu:t}),i.props.onFavTypeChange(t)},i.updateMenuList=function(){Object(m.d)().then((function(t){var e=i.state.selectedMenu,n=t.data;i.setState({menuList:n}),e&&n.find((function(t){return t.title===e}))||!n[0]||i.setSelectedMenu(n[0].title)}))},i.getRankFromTitle=function(t){return i.state.menuList.find((function(e){return e.title===t})).rank},i.onDragStart=function(t){var e=t.target.childNodes[0].childNodes[0].innerHTML;i.setState({dragingMenu:e})},i.onDropOver=function(t){t.preventDefault();var e=i.state.dragingMenu,n=t.target.innerHTML;e!==n&&i.setState({targetMenu:n})},i.onDrop=function(t){var e=i.state,n=e.targetMenu,a=e.dragingMenu;Object(m.f)(a,n).then((function(t){"0"===t.status&&i.updateMenuList()})),i.setState({targetMenu:{},dragingMenu:{}})},i.getMenuNodes=function(t){var e=i.state,n=e.targetMenu,a=e.dragingMenu;return t.map((function(t){var e={};if(n===t.title){var r=i.getRankFromTitle(n);e=i.getRankFromTitle(a)>r?{borderTop:"2px dashed #1890ff"}:{borderBottom:"2px dashed #1890ff"}}return Object(k.jsx)(b.a.Item,{style:e,draggable:!0,onDragStart:i.onDragStart,onDragOver:i.onDropOver,onDrop:i.onDrop,children:Object(k.jsx)(C,{title:t.title,editFavType:i.editFavType})},t.title)}))},i.onAdd=function(){return i.setState({onAddStatus:!0})},i.onDel=function(){T({title:"\u662f\u5426\u786e\u5b9a\u5220\u9664?",onOk:function(){Object(m.b)(i.state.selectedMenu).then((function(t){"0"===t.status&&(f.b.success("\u5220\u9664\u6210\u529f\uff01"),i.updateMenuList())}))}})},i.onSelect=function(t){return i.setSelectedMenu(t.key)},i.editFavType=function(t,e){i.state.menuList.find((function(t){return t.title===e}))?f.b.error("\u5df2\u6709\u76f8\u540c\u7c7b\u522b\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\uff01"):e&&Object(m.i)(e,void 0,t).then((function(n){"0"===n.status&&(f.b.success("\u4fee\u6539\u6210\u529f\uff01"),i.updateMenuList(),t===i.state.selectedMenu&&i.setState({selectedMenu:e}))}))},i.addFavType=function(t){var e=i.state.menuList;if(e.find((function(e){return e.title===t})))f.b.error("\u5df2\u6709\u76f8\u540c\u7c7b\u522b\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\uff01");else if(t){var n=e.length;Object(m.i)(t,n).then((function(a){"0"===a.status&&(f.b.success("\u6dfb\u52a0\u6210\u529f\uff01"),e.push({rank:n,title:t}),i.setState({menuList:e}))}))}i.setState({onAddStatus:!1})},i.state={theme:"light",menuList:[],onAddStatus:!1,selectedMenu:"",dragingMenu:{},targetMenu:{}},Object(y.a)((function(){return i.forceUpdate()})),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateMenuList()}},{key:"render",value:function(){var t=this.state,e=t.menuList,n=t.onAddStatus,a=t.selectedMenu,i=this.getMenuNodes(e);return Object(k.jsxs)(M,{breakpoint:"sm",width:"150px",collapsedWidth:"0px",zeroWidthTriggerStyle:{width:"20px",right:"-20px",top:"300px"},className:"favourites-sider",theme:this.state.theme,children:[Object(k.jsxs)(b.a,{className:"favourites-sider-menu",mode:"inline",selectedKeys:[a],onSelect:this.onSelect,children:[i,Object(k.jsx)(b.a.Item,{disabled:!0,style:{display:n?"block":"none"},children:Object(k.jsx)(S,{editFavType:this.addFavType})},"new-menu")]}),Object(k.jsxs)("div",{style:Object(y.b)()?{display:"block"}:{display:"none"},children:[Object(k.jsx)(h.a,{type:"link",style:{width:"50%"},onClick:this.onAdd,children:Object(k.jsx)(v.a,{style:{fontSize:"20px"}})}),Object(k.jsx)(h.a,{type:"link",style:{width:"50%"},onClick:this.onDel,children:Object(k.jsx)(x.a,{style:{fontSize:"20px"}})})]})]})}}]),n}(c.Component),F=(n(337),n(371)),L=(n(179),n(83)),U=(n(129),n(86)),D=(n(130),n(56)),R=(n(500),n(495)),E=n(501),A=(n(503),n(496)),I=(n(372),n(370)),N=n(508),z=n(499),q=(n(385),I.a.Meta),W=O.a.confirm,H=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onEdit=function(){var e=t.props,n=e.url,a=e.title,i=e.description,r=e.type,s=e.rank,c=e.iconUrl;t.props.onEdit(n,a,i,r,s,c)},t.onDel=function(){W({title:"\u662f\u5426\u786e\u5b9a\u5220\u9664?",onOk:function(){Object(m.a)(t.props.url).then((function(e){"0"===e.status&&(f.b.success("\u5220\u9664\u6210\u529f\uff01"),t.props.update())}))}})},t.onRankChange=function(e){var n=t.props.url;Object(m.h)(n,void 0,void 0,e)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.url,n=t.title,a=t.iconUrl,i=t.description,r=t.rank;return Object(k.jsx)(I.a,{style:{maxWidth:"550px",minWidth:"200px"},headStyle:{minHeight:"36px"},actions:Object(y.b)()?[Object(k.jsx)(N.a,{onClick:this.onEdit},"edit"),Object(k.jsx)(x.a,{onClick:this.onDel},"delete")]:[],title:Object(k.jsx)(F.a,{disabled:!Object(y.b)(),defaultValue:r,onChange:this.onRankChange,style:{width:"100%",textAlign:"center"}}),hoverable:!0,children:Object(k.jsx)(q,{avatar:Object(k.jsx)(A.a,{size:32,shape:"square",style:{marginTop:"10px"},src:a||e+"favicon.ico",icon:Object(k.jsx)(z.a,{})}),title:n,description:i,onClick:function(){window.open(e)}})})}}]),n}(c.Component),B=R.a.Option,J=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).getCardNodes=function(t){return t.map((function(t){return Object(k.jsx)(D.a,{xs:{span:24},sm:{span:24},md:{span:12},lg:{span:6},children:Object(k.jsx)(H,{url:t.url,title:t.title,iconUrl:t.iconUrl,description:t.description,type:t.type,rank:t.rank,update:i.props.update,onEdit:i.onEdit})},t.url)}))},i.updateItem=function(){i.formRef.current.validateFields().then((function(t){var e=t.url,n=t.title,a=t.description,r=t.type,s=t.rank,c=t.iconUrl;Object(m.h)(e,r,n,s,c,a,i.oldUrl).then((function(t){"0"===t.status&&(i.props.update(),i.afterUpdate(),f.b.success("\u66f4\u65b0\u6210\u529f\uff01"))}))})).catch((function(t){return f.b.error("\u8bf7\u6b63\u786e\u586b\u5199\u4fe1\u606f\uff01")}))},i.afterUpdate=function(){i.setState({showStatus:0}),i.formRef.current.resetFields(),i.oldUrl=""},i.onEdit=function(t,e,n,a,r,s){i.oldUrl=t,Object(m.d)().then((function(c){var o=c.data.map((function(t){return Object(k.jsx)(B,{value:t.title,children:t.title},t.title)}));i.formRef.current.setFieldsValue({url:t,title:e,description:n,type:a,rank:r,iconUrl:s}),i.setState({typeOptions:o,showStatus:1})}))},i.state={showStatus:0},i.formRef=o.a.createRef(),i.oldUrl="",Object(y.a)((function(){return i.forceUpdate()})),i}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.itemList,n=this.getCardNodes(e);return Object(k.jsxs)("div",{children:[Object(k.jsxs)(U.a,{gutter:[{xs:8,sm:16,md:16,lg:24},{xs:8,sm:16,md:16,lg:24}],children:[n,Object(k.jsx)("div",{style:Object(y.b)()?{display:"block"}:{display:"none"},children:Object(k.jsx)(h.a,{icon:Object(k.jsx)(E.a,{style:{fontSize:"50px",color:"#C0C0C0"}}),style:{height:"180px",width:"180px"},onClick:function(){t.onEdit("","","",t.props.favType,3)}})})]}),Object(k.jsx)(O.a,{forceRender:!0,title:"\u6536\u85cf\u9879\u4fe1\u606f",visible:1===this.state.showStatus,onOk:function(){t.updateItem()},onCancel:this.afterUpdate,children:Object(k.jsxs)(L.a,{ref:this.formRef,children:[Object(k.jsx)(L.a.Item,{name:"url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165URL"}],children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165URL"})}),Object(k.jsx)(L.a.Item,{name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"})}),Object(k.jsx)(L.a.Item,{name:"description",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76f8\u5173\u63cf\u8ff0"}],children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165\u76f8\u5173\u63cf\u8ff0"})}),Object(k.jsx)(L.a.Item,{name:"iconUrl",children:Object(k.jsx)(g.a,{placeholder:"\u8bf7\u8f93\u5165IconURL\uff0c\u53ef\u4e3a\u7a7a"})}),Object(k.jsx)(L.a.Item,{name:"type",children:Object(k.jsx)(R.a,{children:this.state.typeOptions})}),Object(k.jsx)(L.a.Item,{name:"rank",children:Object(k.jsx)(F.a,{style:{margin:"auto 0"}})})]})})]})}}]),n}(c.Component),V=(n(386),j.a.Content),K=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={theme:"light",itemList:[]},t.onFavTypeChange=function(){var e=Object(p.a)(d.a.mark((function e(n){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.c)(n);case 2:a=e.sent,i=a.data,t.setState({itemList:i,favType:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.favType;return Object(k.jsxs)(j.a,{className:"favourites",children:[Object(k.jsx)(w,{onFavTypeChange:this.onFavTypeChange}),Object(k.jsx)(j.a,{children:Object(k.jsx)(V,{className:"favourites-content",children:Object(k.jsx)(J,{itemList:this.state.itemList,favType:this.state.favType,update:function(){return t.onFavTypeChange(e)}})})})]})}}]),n}(c.Component),P=n(338),G=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{path:"/tools/favorites",component:K}),Object(k.jsx)(u.a,{path:"/",component:P.default})]})})}}]),n}(c.Component)}}]);
//# sourceMappingURL=7.546ec388.chunk.js.map