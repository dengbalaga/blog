(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{15:function(e,a,t){},25:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},31:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},32:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),o=t.n(r),s=(t(30),t(31),t(32),t(8)),c=t(9),m=t(11),i=t(10),d=t(12),p=t(1),u=(t(15),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={deps:[]},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"refreshList",value:function(){var e=this;fetch("/newsarticle").then((function(e){return e.json()})).then((function(a){e.setState({deps:a})}))}},{key:"render",value:function(){var e=this.state.deps;return l.a.createElement("div",{className:" wrapper-featured"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("h1",{className:"font-article-title mt-5 mb-4"},"News & Events")),e.map((function(e){return l.a.createElement("div",{className:"col-md-4 news",key:e.id},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"pb-3"},l.a.createElement("div",null,l.a.createElement("img",{className:"card-img-top",src:e.imagepathlink}),l.a.createElement("h5",{className:"mt-4 pl-4 pr-4"},e.title),l.a.createElement(p.b,{className:"font-blue pl-4 pr-4",to:"/newsdetail/".concat(e.Id)}," LEARN MORE")))))})))))}}]),a}(n.Component)),b=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav-bg"},l.a.createElement("div",{className:"text-black followus pt-1 pb-1"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-md-9"},l.a.createElement("span",null,"Follow us")," \xa0 ",l.a.createElement("img",{src:"https://alumni.sti.edu/img/facebook.png",className:"mb-1"})," ",l.a.createElement("img",{src:"https://alumni.sti.edu/img/linkedin.png",className:"mb-1"})),l.a.createElement("div",{className:"col-md-6 col-md-3 right-align"},l.a.createElement("div",null,l.a.createElement("span",{className:" right"})))))),l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-white navbar-wrapper"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{src:"https://alumni.sti.edu/img/logo-white-latest.png",className:"d-sm-block d-md-none logo-ftop"}),l.a.createElement("img",{src:"https://alumni.sti.edu/img/logo-yellow.png",className:"d-none d-lg-block logo-ftop"}),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(p.b,{className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"ABOUT STIAA"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"History / Vision & Mission"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"STIAA Officers"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Alumni Pledge"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Recognized Local Chapters"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Membership Benefits"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Registration"))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"ACTIVITIES"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"STI Distinguished Alumni Awards"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Alumni Reconnect Campaign"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Alumni Seminars"))),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"CONNECT"),l.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Alumni Feature"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Honors & Awardees"),l.a.createElement(p.b,{className:"dropdown-item",to:"/news"},"Alumni News"),l.a.createElement(p.b,{className:"dropdown-item",to:"/careertips"},"Career Tips & Advisory"))),l.a.createElement("li",{className:"na v-item"},l.a.createElement(p.b,{className:"nav-link",to:"/news"},"STORE")))))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u,null))}}]),a}(n.Component),v=t(6);var w=function(){return l.a.createElement(p.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(b,null),l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/",component:E,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.bc5709ba.chunk.js.map