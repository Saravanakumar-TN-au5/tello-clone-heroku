(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,a){t.exports={container:"Home_container__2A7pZ","new-list":"Home_new-list__3yP09","add-list-btn":"Home_add-list-btn__1X8RG","add-list":"Home_add-list__14yAb","head-input":"Home_head-input__Zm11X","save-btn":"Home_save-btn__3bPqy","close-btn":"Home_close-btn__vANFX"}},18:function(t,e,a){t.exports={container:"Header_container__Sa3HT",brand:"Header_brand__X4ZV6"}},30:function(t,e,a){t.exports=a(61)},35:function(t,e,a){},4:function(t,e,a){t.exports={container:"Task_container__Oj-un",head:"Task_head__2cT3Y",status:"Task_status__3jG6u",pending:"Task_pending__EUMbZ",inprogress:"Task_inprogress__1r4Gv",completed:"Task_completed__2hdFL",rejected:"Task_rejected__1vbK-","edit-icon":"Task_edit-icon__1A0gm",statuses:"Task_statuses__3KL7E",tick:"Task_tick__2WthY","save-btn":"Task_save-btn__3bNXt","close-btn":"Task_close-btn__2y0HG"}},42:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(t,e,a){},6:function(t,e,a){t.exports={container:"List_container__1Z8bw",head:"List_head__29tWp","head-input":"List_head-input__10oyd","add-btn":"List_add-btn__14oNO","add-task":"List_add-task__En5FA","save-btn":"List_save-btn__27QU7","close-btn":"List_close-btn__2BeJb"}},61:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(14),c=a.n(i),r=(a(35),a(7)),o=a(8),u=a(10),d=a(9),l=a(5),p=(a(42),a(43),a(18)),m=a.n(p);var f=function(t){return s.a.createElement("header",{className:m.a.container},s.a.createElement("div",{className:m.a.brand},"Tello"))},_=a(11),h=a.n(_),k=a(6),b=a.n(k),v=a(4),T=a.n(v),E=a(12),y=a.n(E),S={setLists:function(){return function(t){y.a.get("".concat("http://tello-app.herokuapp.com","/lists")).then((function(e){t({type:"SET_LISTS",payload:e.data})}))}},updateListHead:function(t,e,a){return function(n){y.a.patch("".concat("http://tello-app.herokuapp.com","/updateListName"),{id:t,name:e}).then((function(t){n({type:"UPDATE_LIST_HEAD",payload:t.data}),a()}))}},updateTaskName:function(t,e,a){return function(n){y.a.patch("".concat("http://tello-app.herokuapp.com","/updateTaskName"),{id:e,name:a}).then((function(e){n({type:"UPDATE_TASK_NAME",payload:{listid:t,task:e.data}})}))}},updateTaskStatus:function(t,e,a){return function(n){y.a.patch("".concat("http://tello-app.herokuapp.com","/updateTaskStatus"),{id:e,status:a}).then((function(e){n({type:"UPDATE_TASK_STATUS",payload:{listid:t,task:e.data}})}))}},createTask:function(t,e,a){return function(n){y.a.post("".concat("http://tello-app.herokuapp.com","/createTask"),{listId:t,name:e}).then((function(e){n({type:"CREATE_TASK",payload:{listId:t,task:e.data}}),a()}))}},createList:function(t,e){return function(a){y.a.post("".concat("http://tello-app.herokuapp.com","/createList"),{name:t}).then((function(t){a({type:"CREATE_LIST",payload:t.data}),e()}))}}},O=S.setLists,j=S.updateListHead,N=S.updateTaskName,L=S.updateTaskStatus,A=S.createTask,I=S.createList,g=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={editicon:s.a.createRef(),edit:!1,status:["pending","inprogress","completed","rejected"],updatedStatus:"",updatedName:""},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({updatedStatus:this.props.task.status})}},{key:"componentDidUpdate",value:function(t,e){t!==this.props&&this.setState({edit:!1})}},{key:"onSave",value:function(){var t=this.props.task,e=t._id,a=t.name,n=t.status,s=this.props.listId;this.state.updatedName.length&&a!==this.state.updatedName&&this.props.updateName(s,e,this.state.updatedName),this.state.updatedStatus&&n!==this.state.updatedStatus&&this.props.updateStatus(s,e,this.state.updatedStatus)}},{key:"render",value:function(){var t=this,e=this.props.task,a=e.name,n=e.status;return s.a.createElement("div",{className:T.a.container,onMouseOver:this.state.edit?function(){return""}:function(){return t.state.editicon.current.style.display="block"},onMouseOut:this.state.edit?function(){return""}:function(){return t.state.editicon.current.style.display="none"}},this.state.edit?"":s.a.createElement("div",{className:T.a["edit-icon"],ref:this.state.editicon,onClick:function(){return t.setState({edit:!0})}},s.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true"})),s.a.createElement("div",{className:T.a.status},this.state.edit?s.a.createElement("section",{className:T.a.statuses},this.state.status.map((function(e){return e===t.state.updatedStatus?s.a.createElement("div",{className:T.a[e],key:e,onClick:function(e){return t.setState({updatedStatus:e.target.textContent})}},e,s.a.createElement("span",{className:T.a.tick},"\u2714")):s.a.createElement("div",{className:T.a[e],key:e,onClick:function(e){return t.setState({updatedStatus:e.target.textContent})}},e)}))):s.a.createElement("div",{className:T.a[n]},n)),s.a.createElement("div",{className:T.a.head},this.state.edit?s.a.createElement("textarea",{cols:"30",onChange:function(e){return t.setState({updatedName:e.target.value})}},a):s.a.createElement("span",null,a)),this.state.edit?s.a.createElement("div",null,s.a.createElement("button",{type:"button",className:T.a["save-btn"],onClick:function(){return t.onSave()}},"Save"),s.a.createElement("button",{type:"button",className:T.a["close-btn"],onClick:function(){return t.setState({edit:!1})}},"\u2716")):"")}}]),a}(n.Component),C=Object(l.b)(null,(function(t){return{updateName:function(e,a,n){return t(N(e,a,n))},updateStatus:function(e,a,n){return t(L(e,a,n))}}}))(g),H=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={headInput:s.a.createRef(),addTaskInput:s.a.createRef(),editHead:!1,addTask:!1,newTask:""},t}return Object(o.a)(a,[{key:"editHead",value:function(){var t=this;this.setState({editHead:!0},(function(){t.state.headInput.current.focus(),t.state.headInput.current.select()}))}},{key:"saveHead",value:function(t,e){var a=this;this.props.updateHead(e,t.target.value,(function(){a.setState({editHead:!1})}))}},{key:"addTask",value:function(){var t=this;this.setState({addTask:!0},(function(){t.state.addTaskInput.current.focus()}))}},{key:"createTask",value:function(){var t=this;this.props.createTask(this.props.listItem._id,this.state.newTask,(function(){return t.setState({addTask:!1})}))}},{key:"render",value:function(){var t=this,e=this.props.listItem,a=e._id,n=e.name,i=e.tasks;return s.a.createElement("section",{className:b.a.container},s.a.createElement("div",{className:b.a.head,onClick:function(){return t.editHead()}},this.state.editHead?s.a.createElement("input",{type:"text",className:b.a["head-input"],defaultValue:n,ref:this.state.headInput,onBlur:function(e){return t.saveHead(e,a)}}):n),s.a.createElement("div",null,i?i.map((function(t){return s.a.createElement(C,{task:t,key:t._id,listId:a})})):""),this.state.addTask?s.a.createElement("div",{className:b.a["add-task"]},s.a.createElement("input",{type:"text",className:b.a["head-input"],ref:this.state.addTaskInput,onChange:function(e){return t.setState({newTask:e.target.value})}}),s.a.createElement("button",{type:"button",className:b.a["save-btn"],onClick:function(){return t.createTask()}},"Add task"),s.a.createElement("button",{type:"button",className:b.a["close-btn"],onClick:function(){return t.setState({addTask:!1})}},"\u2716")):s.a.createElement("div",{className:b.a["add-btn"],onClick:function(){return t.addTask()}},"+ Add task"))}}]),a}(n.Component),w=Object(l.b)(null,(function(t){return{updateHead:function(e,a,n){return t(j(e,a,n))},createTask:function(e,a,n){return t(A(e,a,n))}}}))(H),x=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={addListInput:s.a.createRef(),addList:!1,newList:""},t}return Object(o.a)(a,[{key:"onAddList",value:function(){var t=this;this.setState({addList:!0},(function(){t.state.addListInput.current.focus()}))}},{key:"createList",value:function(){var t=this;this.props.createList(this.state.newList,(function(){return t.setState({addList:!1})}))}},{key:"render",value:function(){var t=this;return s.a.createElement("section",{className:h.a.container},this.props.lists.map((function(t){return s.a.createElement(w,{listItem:t,key:t._id})})),s.a.createElement("section",{className:h.a["new-list"]},this.state.addList?s.a.createElement("div",{className:h.a["add-list"]},s.a.createElement("input",{type:"text",className:h.a["head-input"],ref:this.state.addListInput,onChange:function(e){return t.setState({newList:e.target.value})}}),s.a.createElement("button",{type:"button",className:h.a["save-btn"],onClick:function(){return t.createList()}},"Add list"),s.a.createElement("button",{type:"button",className:h.a["close-btn"],onClick:function(){return t.setState({addList:!1})}},"\u2716")):s.a.createElement("div",{onClick:function(){return t.onAddList()},className:h.a["add-list-btn"]},"+ Add list")))}}]),a}(n.Component),D=Object(l.b)((function(t){return{lists:t.lists}}),(function(t){return{createList:function(e,a){return t(I(e,a))}}}))(x),U=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.setLists()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null),s.a.createElement(D,null))}}]),a}(n.Component),R=Object(l.b)(null,(function(t){return{setLists:function(){return t(O())}}}))(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(13),P=a(3),K=a(1),X={lists:[]},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0,a=Object(K.a)({},t);switch(e.type){case"SET_LISTS":return a.lists=e.payload,a;case"UPDATE_LIST_HEAD":var n=e.payload,s=n._id,i=n.name,c=a.lists.findIndex((function(t){return t._id===s}));return a.lists=[].concat(Object(P.a)(a.lists.slice(0,c)),[Object(K.a)(Object(K.a)({},a.lists[c]),{},{name:i})],Object(P.a)(a.lists.slice(c+1))),a;case"UPDATE_TASK_NAME":var r=e.payload,o=r.listid,u=r.task,d=a.lists.findIndex((function(t){return t._id===o})),l=a.lists[d].tasks.findIndex((function(t){return t._id===u._id}));return a.lists[d]=Object(K.a)(Object(K.a)({},a.lists[d]),{},{tasks:[].concat(Object(P.a)(a.lists[d].tasks.slice(0,l)),[Object(K.a)(Object(K.a)({},a.lists[d].tasks[l]),{},{name:u.name})],Object(P.a)(a.lists[d].tasks.slice(l+1)))}),a.lists=Object(P.a)(a.lists),a;case"UPDATE_TASK_STATUS":var p=e.payload.listid,m=e.payload.task,f=a.lists.findIndex((function(t){return t._id===p})),_=a.lists[f].tasks.findIndex((function(t){return t._id===m._id}));return a.lists[f]=Object(K.a)(Object(K.a)({},a.lists[f]),{},{tasks:[].concat(Object(P.a)(a.lists[f].tasks.slice(0,_)),[Object(K.a)(Object(K.a)({},a.lists[f].tasks[_]),{},{status:m.status})],Object(P.a)(a.lists[f].tasks.slice(_+1)))}),a.lists=Object(P.a)(a.lists),a;case"CREATE_TASK":var h=a.lists.findIndex((function(t){return t._id===e.payload.listId}));return a.lists=[].concat(Object(P.a)(a.lists.slice(0,h)),[Object(K.a)(Object(K.a)({},a.lists[h]),{},{tasks:[].concat(Object(P.a)(a.lists[h].tasks),[e.payload.task])})],Object(P.a)(a.lists.slice(h+1))),a;case"CREATE_LIST":return a.lists=[].concat(Object(P.a)(a.lists),[e.payload]),a;default:return a}},B=a(29),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||M.c,G=Object(M.d)(Z,F(Object(M.a)(B.a)));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l.a,{store:G},s.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a42982e5.chunk.js.map