(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[13],{655:function(t,e,n){},656:function(t,e,n){},667:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return Z}));var a=n(40),i=n(41),r=n(43),s=n(42),c=n(0),o=n.n(c),u=n(22),l=n(123),d=n.n(l),p=n(142),f=(n(346),n(347)),j=(n(75),n(27)),h=(n(121),n(39)),b=(n(188),n(58)),v=(n(140),n(91)),O=n(671),y=n(672),m=n(55),x=function(){return Object(m.a)("/api/favourites/favtype",{type:"get"},"POST")},g=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return Object(m.a)("/api/favourites/favtype",{type:"update",title:t,rank:e,oldTitle:n},"POST")},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return Object(m.a)("/api/favourites/favitem",{type:"get",favType:t},"POST")},S=function(t){return Object(m.a)("/api/favourites/favitem",{type:"del",url:t},"POST")},T=function(t,e,n,a,i,r){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:void 0;return Object(m.a)("/api/favourites/favitem",{type:"update",url:t,favType:e,title:n,rank:a,iconUrl:i,description:r,oldUrl:s},"POST")},M=n(54),C=(n(186),n(122)),w=n(7),F=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).input=o.a.createRef(),t.onExit=function(){t.props.editFavType(t.input.current.state.value),t.input.current.setState({value:""})},t}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){this.input.current.focus()}},{key:"render",value:function(){var t=this;return Object(w.jsx)(C.a,{ref:this.input,onBlur:this.onExit,onPressEnter:function(){t.input.current.blur()}})}}]),n}(c.Component),L=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={onEdit:!1},t.editFavType=function(e){t.props.editFavType(t.props.title,e),t.setState({onEdit:!1})},t.onDoubleClick=function(){t.setState({onEdit:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.onEdit,e=this.props.title;return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{style:{display:t?"none":"block"},onDoubleClick:this.onDoubleClick,children:e}),Object(w.jsx)("div",{style:{display:t?"block":"none"},children:Object(w.jsx)(F,{editFavType:this.editFavType})})]})}}]),n}(c.Component),U=f.a.Sider,D=v.a.confirm,R=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).setSelectedMenu=function(t){i.setState({selectedMenu:t}),i.props.onFavTypeChange(t)},i.updateMenuList=function(){x().then((function(t){var e=i.state.selectedMenu,n=t.data;i.setState({menuList:n}),e&&n.find((function(t){return t.title===e}))||!n[0]||i.setSelectedMenu(n[0].title)}))},i.getRankFromTitle=function(t){return i.state.menuList.find((function(e){return e.title===t})).rank},i.onDragStart=function(t){var e=t.target.childNodes[0].childNodes[0].innerHTML;i.setState({dragingMenu:e})},i.onDropOver=function(t){t.preventDefault();var e=i.state.dragingMenu,n=t.target.innerHTML;e!==n&&i.setState({targetMenu:n})},i.onDrop=function(t){var e,n,a=i.state,r=a.targetMenu,s=a.dragingMenu;(e=s,n=r,Object(m.a)("/api/favourites/favtype",{type:"move",fType:e,tType:n},"POST")).then((function(t){"0"===t.status&&i.updateMenuList()})),i.setState({targetMenu:{},dragingMenu:{}})},i.getMenuNodes=function(t){var e=i.state,n=e.targetMenu,a=e.dragingMenu;return t.map((function(t){var e={};if(n===t.title){var r=i.getRankFromTitle(n);e=i.getRankFromTitle(a)>r?{borderTop:"2px dashed #1890ff"}:{borderBottom:"2px dashed #1890ff"}}return Object(w.jsx)(b.a.Item,{style:e,draggable:!0,onDragStart:i.onDragStart,onDragOver:i.onDropOver,onDrop:i.onDrop,children:Object(w.jsx)(L,{title:t.title,editFavType:i.editFavType})},t.title)}))},i.onAdd=function(){return i.setState({onAddStatus:!0})},i.onDel=function(){D({title:"\u662f\u5426\u786e\u5b9a\u5220\u9664?",onOk:function(){var t;(t=i.state.selectedMenu,Object(m.a)("/api/favourites/favtype",{type:"del",title:t},"POST")).then((function(t){"0"===t.status&&(h.b.success("\u5220\u9664\u6210\u529f\uff01"),i.updateMenuList())}))}})},i.onSelect=function(t){return i.setSelectedMenu(t.key)},i.editFavType=function(t,e){i.state.menuList.find((function(t){return t.title===e}))?h.b.error("\u5df2\u6709\u76f8\u540c\u7c7b\u522b\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\uff01"):e&&g(e,void 0,t).then((function(n){"0"===n.status&&(h.b.success("\u4fee\u6539\u6210\u529f\uff01"),i.updateMenuList(),t===i.state.selectedMenu&&i.setState({selectedMenu:e}))}))},i.addFavType=function(t){var e=i.state.menuList;if(e.find((function(e){return e.title===t})))h.b.error("\u5df2\u6709\u76f8\u540c\u7c7b\u522b\uff0c\u8bf7\u66f4\u6362\u4e00\u4e2a\uff01");else if(t){var n=e.length;g(t,n).then((function(a){"0"===a.status&&(h.b.success("\u6dfb\u52a0\u6210\u529f\uff01"),e.push({rank:n,title:t}),i.setState({menuList:e}))}))}i.setState({onAddStatus:!1})},i.state={theme:"light",menuList:[],onAddStatus:!1,selectedMenu:"",dragingMenu:{},targetMenu:{}},Object(M.a)((function(){return i.forceUpdate()})),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateMenuList()}},{key:"render",value:function(){var t=this.state,e=t.menuList,n=t.onAddStatus,a=t.selectedMenu,i=this.getMenuNodes(e);return Object(w.jsxs)(U,{breakpoint:"sm",width:"150px",collapsedWidth:"0px",zeroWidthTriggerStyle:{width:"20px",right:"-20px",top:"300px"},className:"favourites-sider",theme:this.state.theme,children:[Object(w.jsxs)(b.a,{className:"favourites-sider-menu",mode:"inline",selectedKeys:[a],onSelect:this.onSelect,children:[i,Object(w.jsx)(b.a.Item,{disabled:!0,style:{display:n?"block":"none"},children:Object(w.jsx)(F,{editFavType:this.addFavType})},"new-menu")]}),Object(w.jsxs)("div",{style:Object(M.b)()?{display:"block"}:{display:"none"},children:[Object(w.jsx)(j.a,{type:"link",style:{width:"50%"},onClick:this.onAdd,children:Object(w.jsx)(O.a,{style:{fontSize:"20px"}})}),Object(w.jsx)(j.a,{type:"link",style:{width:"50%"},onClick:this.onDel,children:Object(w.jsx)(y.a,{style:{fontSize:"20px"}})})]})]})}}]),n}(c.Component),E=(n(470),n(473)),A=(n(187),n(80)),I=(n(138),n(90)),N=(n(139),n(62)),P=(n(348),n(345)),z=n(661),q=(n(664),n(659)),W=(n(377),n(375)),H=n(673),B=n(663),J=(n(655),W.a.Meta),V=v.a.confirm,K=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onEdit=function(){var e=t.props,n=e.url,a=e.title,i=e.description,r=e.type,s=e.rank,c=e.iconUrl;t.props.onEdit(n,a,i,r,s,c)},t.onDel=function(){V({title:"\u662f\u5426\u786e\u5b9a\u5220\u9664?",onOk:function(){S(t.props.url).then((function(e){"0"===e.status&&(h.b.success("\u5220\u9664\u6210\u529f\uff01"),t.props.update())}))}})},t.onRankChange=function(e){var n=t.props.url;T(n,void 0,void 0,e)},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.props,e=t.url,n=t.title,a=t.iconUrl,i=t.description,r=t.rank;return Object(w.jsx)(W.a,{style:{maxWidth:"550px",minWidth:"200px"},headStyle:{minHeight:"36px"},actions:Object(M.b)()?[Object(w.jsx)(H.a,{onClick:this.onEdit},"edit"),Object(w.jsx)(y.a,{onClick:this.onDel},"delete")]:[],title:Object(w.jsx)(E.a,{disabled:!Object(M.b)(),defaultValue:r,onChange:this.onRankChange,style:{width:"100%",textAlign:"center"}}),hoverable:!0,children:Object(w.jsx)(J,{avatar:Object(w.jsx)(q.a,{size:32,shape:"square",style:{marginTop:"10px"},src:a||e+"favicon.ico",icon:Object(w.jsx)(B.a,{})}),title:n,description:i,onClick:function(){window.open(e)}})})}}]),n}(c.Component),G=P.a.Option,Q=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).getCardNodes=function(t){return t.map((function(t){return Object(w.jsx)(N.a,{xs:24,sm:24,md:12,lg:6,children:Object(w.jsx)(K,{url:t.url,title:t.title,iconUrl:t.iconUrl,description:t.description,type:t.type,rank:t.rank,update:i.props.update,onEdit:i.onEdit})},t.url)}))},i.updateItem=function(){i.formRef.current.validateFields().then((function(t){var e=t.url,n=t.title,a=t.description,r=t.type,s=t.rank,c=t.iconUrl;T(e,r,n,s,c,a,i.oldUrl).then((function(t){"0"===t.status&&(i.props.update(),i.afterUpdate(),h.b.success("\u66f4\u65b0\u6210\u529f\uff01"))}))})).catch((function(t){return h.b.error("\u8bf7\u6b63\u786e\u586b\u5199\u4fe1\u606f\uff01")}))},i.afterUpdate=function(){i.setState({showStatus:0}),i.formRef.current.resetFields(),i.oldUrl=""},i.onEdit=function(t,e,n,a,r,s){i.oldUrl=t,x().then((function(c){var o=c.data.map((function(t){return Object(w.jsx)(G,{value:t.title,children:t.title},t.title)}));i.formRef.current.setFieldsValue({url:t,title:e,description:n,type:a,rank:r,iconUrl:s}),i.setState({typeOptions:o,showStatus:1})}))},i.state={showStatus:0},i.formRef=o.a.createRef(),i.oldUrl="",Object(M.a)((function(){return i.forceUpdate()})),i}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.itemList,n=this.getCardNodes(e);return Object(w.jsxs)("div",{children:[Object(w.jsxs)(I.a,{gutter:[{xs:8,sm:16,md:16,lg:24},{xs:8,sm:16,md:16,lg:24}],children:[n,Object(w.jsx)("div",{style:Object(M.b)()?{display:"block"}:{display:"none"},children:Object(w.jsx)(j.a,{icon:Object(w.jsx)(z.a,{style:{fontSize:"50px",color:"#C0C0C0"}}),style:{height:"180px",width:"180px"},onClick:function(){t.onEdit("","","",t.props.favType,3)}})})]}),Object(w.jsx)(v.a,{forceRender:!0,title:"\u6536\u85cf\u9879\u4fe1\u606f",visible:1===this.state.showStatus,onOk:function(){t.updateItem()},onCancel:this.afterUpdate,children:Object(w.jsxs)(A.a,{ref:this.formRef,children:[Object(w.jsx)(A.a.Item,{name:"url",rules:[{required:!0,message:"\u8bf7\u8f93\u5165URL"}],children:Object(w.jsx)(C.a,{placeholder:"\u8bf7\u8f93\u5165URL"})}),Object(w.jsx)(A.a.Item,{name:"title",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],children:Object(w.jsx)(C.a,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"})}),Object(w.jsx)(A.a.Item,{name:"description",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76f8\u5173\u63cf\u8ff0"}],children:Object(w.jsx)(C.a,{placeholder:"\u8bf7\u8f93\u5165\u76f8\u5173\u63cf\u8ff0"})}),Object(w.jsx)(A.a.Item,{name:"iconUrl",children:Object(w.jsx)(C.a,{placeholder:"\u8bf7\u8f93\u5165IconURL\uff0c\u53ef\u4e3a\u7a7a"})}),Object(w.jsx)(A.a.Item,{name:"type",children:Object(w.jsx)(P.a,{children:this.state.typeOptions})}),Object(w.jsx)(A.a.Item,{name:"rank",children:Object(w.jsx)(E.a,{style:{margin:"auto 0"}})})]})})]})}}]),n}(c.Component),X=(n(656),f.a.Content),Y=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={theme:"light",itemList:[]},t.onFavTypeChange=function(){var e=Object(p.a)(d.a.mark((function e(n){var a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(n);case 2:a=e.sent,i=a.data,t.setState({itemList:i,favType:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state.favType;return Object(w.jsxs)(f.a,{className:"favourites",children:[Object(w.jsx)(R,{onFavTypeChange:this.onFavTypeChange}),Object(w.jsx)(f.a,{children:Object(w.jsx)(X,{className:"favourites-content",children:Object(w.jsx)(Q,{itemList:this.state.itemList,favType:this.state.favType,update:function(){return t.onFavTypeChange(e)}})})})]})}}]),n}(c.Component),Z=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{children:Object(w.jsx)(u.d,{children:Object(w.jsx)(u.b,{path:"/tools/favorites",component:Y})})})}}]),n}(c.Component)}}]);
//# sourceMappingURL=13.5192d37c.chunk.js.map