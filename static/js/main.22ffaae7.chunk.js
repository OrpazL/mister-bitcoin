(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/meeseeks.9929554d.png"},19:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(74)},26:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=(n(26),n(2)),l=n(3),s=n(5),u=n(4),m=n(6),h=n(19),f=n.n(h),p=(n(28),n(9)),d=n.n(p),v=n(11);n(32);var E={getBitcoinRate:function(){return fetch("https://blockchain.info/tobtc?currency=USD&value=1").then(function(e){return e.json()})},getChartMarketPlace:function(){return fetch("https://api.blockchain.info/charts/market-price?&format=json&cors=true").then(function(e){return e.json()})},getChartConfirmedTransactions:function(){return fetch("https://api.blockchain.info/charts/median-confirmation-time?format=json&cors=true").then(function(e){return e.json()})}},b=(n(34),"user");function g(){return JSON.parse(localStorage.getItem(b))}function y(e){e.coins=e.coins||100,e.moves=e.moves||[],localStorage.setItem(b,JSON.stringify(e))}var C={getUser:g,saveUser:y,addMove:function(e,t){var n=function(e,t){return{toId:e._id,to:e.name,at:Date.now(),amount:t}}(e,t),a=g();a.moves.push(n),a.coins-=t,y(a)}};var j=n(36),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:C.getUser()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.moveSort()}},{key:"moveSort",value:function(){var e=this.state.user.moves,t=this.props.contactId,n=e.filter(function(e){return!t||e.toId===t}).map(function(e){return r.a.createElement("div",{key:e.at,className:"move-item"},!t&&r.a.createElement("div",null,r.a.createElement("span",null,"To:")," ",e.to),r.a.createElement("div",null,r.a.createElement("span",null,"At:")," ",j(e.at).format("llll")),r.a.createElement("div",null,r.a.createElement("span",null,"Amount:")," ",e.amount))});return t?n:[n[n.length-1],n[n.length-2],n[n.length-3]]}},{key:"render",value:function(){var e=this.props.contactId;return r.a.createElement("section",{className:"moves-list-container"},r.a.createElement("h4",null,e?"Your Moves:":"Your Last 3 Moves:"),this.moveSort())}}]),t}(a.Component),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},coinsInBTC:0},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({user:this.props.user}),e.next=3,E.getBitcoinRate().then(function(e){t.setState({coinsInBTC:(t.state.user.coins||0)*e})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,n=e.coinsInBTC;return r.a.createElement("section",{className:"home-page-container"},r.a.createElement("h1",null,"Hello ",t.name),r.a.createElement("div",null,"Coins: ",t.coins),r.a.createElement("div",null,"BTC: ",n),r.a.createElement(O,null))}}]),t}(a.Component),k=(n(38),[{_id:"5a56640269f443a5d64b32ca",name:"Ochoa Hyde",email:"ochoahyde@renovize.com",phone:"+1 (968) 593-3824"},{_id:"5a5664025f6ae9aa24a99fde",name:"Hallie Mclean",email:"halliemclean@renovize.com",phone:"+1 (948) 464-2888"},{_id:"5a56640252d6acddd183d319",name:"Parsons Norris",email:"parsonsnorris@renovize.com",phone:"+1 (958) 502-3495"},{_id:"5a566402ed1cf349f0b47b4d",name:"Rachel Lowe",email:"rachellowe@renovize.com",phone:"+1 (911) 475-2312"},{_id:"5a566402abce24c6bfe4699d",name:"Dominique Soto",email:"dominiquesoto@renovize.com",phone:"+1 (807) 551-3258"},{_id:"5a566402a6499c1d4da9220a",name:"Shana Pope",email:"shanapope@renovize.com",phone:"+1 (970) 527-3082"},{_id:"5a566402f90ae30e97f990db",name:"Faulkner Flores",email:"faulknerflores@renovize.com",phone:"+1 (952) 501-2678"},{_id:"5a5664027bae84ef280ffbdf",name:"Holder Bean",email:"holderbean@renovize.com",phone:"+1 (989) 503-2663"},{_id:"5a566402e3b846c5f6aec652",name:"Rosanne Shelton",email:"rosanneshelton@renovize.com",phone:"+1 (968) 454-3851"},{_id:"5a56640272c7dcdf59c3d411",name:"Pamela Nolan",email:"pamelanolan@renovize.com",phone:"+1 (986) 545-2166"},{_id:"5a5664029a8dd82a6178b15f",name:"Roy Cantu",email:"roycantu@renovize.com",phone:"+1 (929) 571-2295"},{_id:"5a5664028c096d08eeb13a8a",name:"Ollie Christian",email:"olliechristian@renovize.com",phone:"+1 (977) 419-3550"},{_id:"5a5664026c53582bb9ebe9d1",name:"Nguyen Walls",email:"nguyenwalls@renovize.com",phone:"+1 (963) 471-3181"},{_id:"5a56640298ab77236845b82b",name:"Glenna Santana",email:"glennasantana@renovize.com",phone:"+1 (860) 467-2376"},{_id:"5a56640208fba3e8ecb97305",name:"Malone Clark",email:"maloneclark@renovize.com",phone:"+1 (818) 565-2557"},{_id:"5a566402abb3146207bc4ec5",name:"Floyd Rutledge",email:"floydrutledge@renovize.com",phone:"+1 (807) 597-3629"},{_id:"5a56640298500fead8cb1ee5",name:"Grace James",email:"gracejames@renovize.com",phone:"+1 (959) 525-2529"},{_id:"5a56640243427b8f8445231e",name:"Tanner Gates",email:"tannergates@renovize.com",phone:"+1 (978) 591-2291"},{_id:"5a5664025c3abdad6f5e098c",name:"Lilly Conner",email:"lillyconner@renovize.com",phone:"+1 (842) 587-3812"}]);function S(e){return new Promise(function(t,n){e._id=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}(),k.push(e),t(e)})}var N={getContacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Promise(function(t,n){var a=k;if(e){var r=e.term;a=k.filter(function(e){return e.name.toLocaleLowerCase().includes(r)||e.phone.toLocaleLowerCase().includes(r)||e.email.toLocaleLowerCase().includes(r)})}t(a.sort(function(e,t){return e.name.toLocaleLowerCase()<t.name.toLocaleLowerCase()?-1:e.name.toLocaleLowerCase()>t.name.toLocaleLowerCase()?1:0}))})},getContactById:function(e){return new Promise(function(t,n){var a=k.find(function(t){return t._id===e});a?t(a):n("Contact id ".concat(e," not found!"))})},deleteContact:function(e){return new Promise(function(t,n){var a=k.findIndex(function(t){return t._id===e});-1!==a&&k.splice(a,1),t(k)})},filter:function(e){return e=e.toLocaleLowerCase(),new Promise(function(t,n){t(k.filter(function(t){return t.name.toLocaleLowerCase().includes(e)||t.phone.toLocaleLowerCase().includes(e)||t.email.toLocaleLowerCase().includes(e)}))})},saveContact:function(e){return e._id?function(e){return new Promise(function(t,n){var a=k.findIndex(function(t){return e._id===t._id});-1!==a&&(k[a]=e),t(e)})}(e):S(e)},getEmptyContact:function(){return{name:"",email:"",phone:""}}};n(40);var _=function(e){var t=e.setFilter;return r.a.createElement("input",{className:"contact-filter",placeholder:"Search",onInput:t})},x=(n(42),n(13)),L=n.n(x),I=function(e){var t=e.contact;return r.a.createElement("div",{className:"contact-preview-container"},r.a.createElement("img",{src:L.a,alt:"contact"}),r.a.createElement("div",{className:"contact-content"},r.a.createElement("div",{className:"contact-name"},t.name),r.a.createElement("div",{className:"contact-phone"},t.phone)))},U=n(44),A=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:null,contactsForDisplay:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getContacts().then(function(e){return t.setState({contacts:e,contactsForDisplay:e})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setFilter",value:function(e){var t=e.target.value,n=this.state.contacts.filter(function(e){return e.name.toUpperCase().includes(t.toUpperCase())||e.phone.includes(t)||e.email.toUpperCase().includes(t.toUpperCase())});this.setState({contactsForDisplay:n})}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.contactsForDisplay;return r.a.createElement("section",{className:"contact-page-container"},r.a.createElement(_,{setFilter:this.setFilter.bind(this)}),r.a.createElement("section",{className:"list-container"},t&&n.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(U.a,{to:"/contact/".concat(e._id)},r.a.createElement(I,{contact:e})))})),r.a.createElement(U.a,{to:"/contact/edit",className:"add-btn"},"\u271a"))}}]),t}(a.Component),z=(n(54),n(56),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:C.getUser(),contact:n.props.contact,transferAmount:null},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.contact,a=t.transferAmount;return r.a.createElement("section",{className:"transfer-fund-container"},r.a.createElement("h4",null,"Transfer coins to ",n.name,":"),r.a.createElement("div",{className:"action"},"Amount: ",r.a.createElement("input",{type:"number",onChange:function(t){return e.setState({transferAmount:t.target.value})}}),r.a.createElement("button",{disabled:!this.state.transferAmount,onClick:this.props.transferCoins.bind(this,n,a)},"Transfer")))}}]),t}(a.Component)),P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contact:null},n.deleteContact=function(){var e=n.state.contact;N.deleteContact(e._id).then(function(){n.props.history.go(-1)})},n.transferCoins=function(e,t){C.addMove(e,t)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t,n=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.contactId,e.next=3,N.getContactById(t).then(function(e){return n.setState({contact:e})});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.contact;return e&&r.a.createElement("section",{className:"contact-details-container"},r.a.createElement("section",{className:"contact-data"},r.a.createElement("img",{src:L.a,alt:"contact"}),r.a.createElement("div",{className:"contact-content"},r.a.createElement("div",{className:"contact-name"},e.name),r.a.createElement("div",{className:"contact-phone"},e.phone),r.a.createElement("div",{className:"contact-email"},e.email),r.a.createElement("div",{className:"contact-id"},e._id))),r.a.createElement("div",{className:"contact-actions"},r.a.createElement("button",null,r.a.createElement(U.a,{to:"/contact/edit/".concat(e._id)},"\u270e")),r.a.createElement("button",{onClick:this.deleteContact},"\u2718")),r.a.createElement("br",null),r.a.createElement(z,{contact:e,transferCoins:this.transferCoins}),r.a.createElement(O,{contactId:e._id}))}}]),t}(a.Component),M=n(14),D=(n(58),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contact:{}},n.saveContact=function(e){e.preventDefault();var t=n.state.contact;N.saveContact(t),n.props.history.go(-1)},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t,n=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.contactId,e.next=3,N.getContactById(t).then(function(e){return e?n.setState({contact:e}):""}).catch(function(e){return console.log("New Contact")});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.contact;return t&&r.a.createElement("section",{className:"contact-edit-container"},r.a.createElement("img",{src:L.a,alt:"contact"}),r.a.createElement("form",{onSubmit:this.saveContact},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Name:"),r.a.createElement("input",{value:t.name||"",type:"text",onChange:function(n){return e.setState({contact:Object(M.a)({},t,{name:n.target.value})})}}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Phone:"),r.a.createElement("input",{value:t.phone||"",type:"text",onChange:function(n){return e.setState({contact:Object(M.a)({},t,{phone:n.target.value})})}}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("span",null,"Email:"),r.a.createElement("input",{value:t.email||"",type:"email",onChange:function(n){return e.setState({contact:Object(M.a)({},t,{email:n.target.value})})}}))),r.a.createElement("div",{className:"btn-container"},r.a.createElement("button",null,"Save"))))}}]),t}(a.Component)),T=(n(60),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{name:null}},n.signUp=function(e){e.preventDefault(),C.saveUser(n.state.user),n.props.history.push("/")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"signup-page-container"},r.a.createElement("form",{onSubmit:this.signUp},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("h3",null,"Please enter your name:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({user:Object(M.a)({},e.state.user,{name:t.target.value})})}}))),r.a.createElement("button",null,"Sign up")))}}]),t}(a.Component)),R=(n(62),n(45)),B=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={updateInterval:null,marketPlaceRates:[],confirmedTransactionsRates:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadCharts(),this.setState({updateInterval:setInterval(this.loadCharts,5e3)})}},{key:"loadCharts",value:function(){var e=Object(v.a)(d.a.mark(function e(){var t=this;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getChartMarketPlace().then(function(e){if(t.state){var n=e.values.map(function(e){return e.y});t.setState({marketPlaceRates:n})}});case 2:return e.next=4,E.getChartConfirmedTransactions().then(function(e){if(t.state){var n=e.values.map(function(e){return e.y});t.setState({confirmedTransactionsRates:n})}});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.state.updateInterval)}},{key:"render",value:function(){return r.a.createElement("section",{className:"charts-page-container"},r.a.createElement("h1",null,"Market Places Rates"),r.a.createElement("div",{className:"chart"},r.a.createElement(R.Sparklines,{data:this.state.marketPlaceRates},r.a.createElement(R.SparklinesLine,{color:"blue"}))),r.a.createElement("h1",null,"Confirmed Transactions Rates"),r.a.createElement("div",{className:"chart"},r.a.createElement(R.Sparklines,{data:this.state.confirmedTransactionsRates},r.a.createElement(R.SparklinesLine,{color:"green"}))))}}]),t}(a.Component),F=(n(64),n(76)),H=function(e){return r.a.createElement("nav",null,r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement(F.a,{exact:!0,to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(F.a,{exact:!0,to:"/contact"},r.a.createElement("li",null,"Contact Page")),r.a.createElement(F.a,{exact:!0,to:"/stats"},r.a.createElement("li",null,"Stats"))))},J=n(75),W=n(77),G=n(78),q=n(79),Y=n(51),K=function(e){return e.user?r.a.createElement(J.a,e):r.a.createElement(W.a,{to:"/signup"})},Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currUser:C.getUser()},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(G.a,null,r.a.createElement("div",{className:"App"},this.state.currUser&&r.a.createElement(H,null),r.a.createElement("div",{className:"App-bg"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"})),r.a.createElement(Y.CSSTransition,{timeout:{enter:3e3,exit:3e3},classNames:"fade"},r.a.createElement(q.a,null,r.a.createElement(K,{user:this.state.currUser,path:"/",exact:!0,render:function(){return r.a.createElement(w,{user:e.state.currUser})}}),r.a.createElement(K,{user:this.state.currUser,path:"/stats",exact:!0,component:B}),r.a.createElement(K,{user:this.state.currUser,path:"/contact",exact:!0,component:A}),r.a.createElement(K,{user:this.state.currUser,path:"/contact/edit/:contactId?",exact:!0,component:D}),r.a.createElement(K,{user:this.state.currUser,path:"/contact/:contactId",exact:!0,component:P}),r.a.createElement(J.a,{path:"/signup",exact:!0,component:T})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.22ffaae7.chunk.js.map