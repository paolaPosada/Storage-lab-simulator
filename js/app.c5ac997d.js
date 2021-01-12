(function(t){function e(e){for(var s,n,l=e[0],o=e[1],d=e[2],c=0,m=[];c<l.length;c++)n=l[c],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==i[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Storage-lab-simulator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"1a12":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("div",{staticClass:"navbar-collapse  w-100 order-2 order-md-0 dual-collapse2"},[a("router-link",{attrs:{to:"/"}},[t._v("Disk Comparation")]),t._v("| "),a("router-link",{attrs:{to:"/Disk"}},[t._v("How it works?")]),t._v("| "),a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])},l=[],o={name:"Navbar"},d=o,u=(a("5dfc"),a("2877")),c=Object(u["a"])(d,n,l,!1,null,null,null),m=c.exports,p={name:"App",components:{Navbar:m}},v=p,f=(a("034f"),Object(u["a"])(v,i,r,!1,null,null,null)),k=f.exports,_=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-5",attrs:{id:"home"}},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-striped table-highlight"},[t._m(0),a("tbody",[a("tr",[a("td",[t._v("Nombre")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.name,expression:"disk1.name"}],staticClass:"form-control",attrs:{type:"text",value:"Disk 1"},domProps:{value:t.disk1.name},on:{input:function(e){e.target.composing||t.$set(t.disk1,"name",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.name,expression:"disk2.name"}],staticClass:"form-control",attrs:{type:"text",value:"Disk 2"},domProps:{value:t.disk2.name},on:{input:function(e){e.target.composing||t.$set(t.disk2,"name",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.name,expression:"disk3.name"}],staticClass:"form-control",attrs:{type:"text",value:"Disk 3"},domProps:{value:t.disk3.name},on:{input:function(e){e.target.composing||t.$set(t.disk3,"name",e.target.value)}}})])]),a("tr",[a("td",[t._v("RPM")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.rpm,expression:"disk1.rpm"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"30000",oninput:"validity.valid||(value='');",placeholder:"6200 rpm",required:""},domProps:{value:t.disk1.rpm},on:{input:function(e){e.target.composing||t.$set(t.disk1,"rpm",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.rpm,expression:"disk2.rpm"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"30000",oninput:"validity.valid||(value='');",placeholder:"7300 rpm",required:""},domProps:{value:t.disk2.rpm},on:{input:function(e){e.target.composing||t.$set(t.disk2,"rpm",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.rpm,expression:"disk3.rpm"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"30000",oninput:"validity.valid||(value='');",placeholder:"15000 rpm",required:""},domProps:{value:t.disk3.rpm},on:{input:function(e){e.target.composing||t.$set(t.disk3,"rpm",e.target.value)}}})])]),a("tr",[a("td",[t._v("Average seek")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.average_seek,expression:"disk1.average_seek"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"50",oninput:"validity.valid||(value='');",placeholder:"4 ms",required:""},domProps:{value:t.disk1.average_seek},on:{input:function(e){e.target.composing||t.$set(t.disk1,"average_seek",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.average_seek,expression:"disk2.average_seek"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"50",oninput:"validity.valid||(value='');",placeholder:"9 ms",required:""},domProps:{value:t.disk2.average_seek},on:{input:function(e){e.target.composing||t.$set(t.disk2,"average_seek",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.average_seek,expression:"disk3.average_seek"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"50",oninput:"validity.valid||(value='');",placeholder:"12 ms",required:""},domProps:{value:t.disk3.average_seek},on:{input:function(e){e.target.composing||t.$set(t.disk3,"average_seek",e.target.value)}}})])]),a("tr",[a("td",[t._v("Max transfer")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.max_transfer,expression:"disk1.max_transfer"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1000",oninput:"validity.valid||(value='');",placeholder:"125 MB/s",required:""},domProps:{value:t.disk1.max_transfer},on:{input:function(e){e.target.composing||t.$set(t.disk1,"max_transfer",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.max_transfer,expression:"disk2.max_transfer"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1000",oninput:"validity.valid||(value='');",placeholder:"105 MB/s",required:""},domProps:{value:t.disk2.max_transfer},on:{input:function(e){e.target.composing||t.$set(t.disk2,"max_transfer",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.max_transfer,expression:"disk3.max_transfer"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1000",oninput:"validity.valid||(value='');",placeholder:"84 MB/s",required:""},domProps:{value:t.disk3.max_transfer},on:{input:function(e){e.target.composing||t.$set(t.disk3,"max_transfer",e.target.value)}}})])]),a("tr",[a("td",[t._v("Platters")]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk1.platters,expression:"disk1.platters"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"10",oninput:"validity.valid||(value='');",placeholder:"6"},domProps:{value:t.disk1.platters},on:{input:function(e){e.target.composing||t.$set(t.disk1,"platters",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk2.platters,expression:"disk2.platters"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"10",oninput:"validity.valid||(value='');",placeholder:"5"},domProps:{value:t.disk2.platters},on:{input:function(e){e.target.composing||t.$set(t.disk2,"platters",e.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.disk3.platters,expression:"disk3.platters"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"10",oninput:"validity.valid||(value='');",placeholder:"4"},domProps:{value:t.disk3.platters},on:{input:function(e){e.target.composing||t.$set(t.disk3,"platters",e.target.value)}}})])])])])]),a("div",[a("button",{staticClass:"btn btn-success",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:t.calcule}},[t._v("Calcule")])]),a("div",[a("b-modal",{attrs:{id:"modal-xl","cancel-disabled":"false",size:"xl",title:"Calculated results"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.ok;return[a("b-button",{attrs:{variant:"success"},on:{click:function(t){return s()}}},[t._v(" OK ")])]}}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("table",{staticClass:"table table-bordered "},[a("thead",[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Disk")]),a("th",[t._v(t._s(t.disk1.name))]),a("th",[t._v(t._s(t.disk2.name))]),a("th",[t._v(t._s(t.disk3.name))])])]),a("tbody",[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("T seek")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.Tseek)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.Tseek)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.Tseek)+" ms")])]),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("T rotation")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.Trotation)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.Trotation)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.Trotation)+" ms")])]),a("tr",[a("td",{attrs:{rowspan:"3"}},[t._v("Random")]),a("td",[t._v("Ttransfer")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.random.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.random.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.random.Ttransfer)+" ms")])]),a("tr",[a("td",[t._v("Ti/o")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.random.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.random.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.random.Tio)+" ms")])]),a("tr",[a("td",[t._v("Rio")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.random.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.random.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.random.Rio)+" MB/s")])]),a("tr",[a("td",{attrs:{rowspan:"3"}},[t._v("Secuential")]),a("td",[t._v("Ttransfer")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.secuential.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.secuential.Ttransfer)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.secuential.Ttransfer)+" ms")])]),a("tr",[a("td",[t._v("Tio")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.secuential.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.secuential.Tio)+" ms")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.secuential.Tio)+" ms")])]),a("tr",[a("td",[t._v("Rio")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk1.result.secuential.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk2.result.secuential.Rio)+" MB/s")]),a("td",{staticStyle:{"font-style":"italic"}},[t._v(t._s(t.disk3.result.secuential.Rio)+" MB/s")])])])])])],1)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th"),a("th",[t._v("Disk 1")]),a("th",[t._v("Disk 2")]),a("th",[t._v("Disk 3")])])}],h=(a("d3b7"),{name:"Home",components:{},data:function(){return{showModal:!1,disk1:{name:"Disk 1",capacity:22,rpm:1,average_seek:1,max_transfer:1,platters:0,cache:0,result:{random:{},secuential:{}}},disk2:{name:"Cheetah",capacity:22,rpm:15e3,average_seek:4,max_transfer:125,platters:4,cache:16,result:{random:{},secuential:{}}},disk3:{name:"Barracuda",capacity:800,rpm:7200,average_seek:9,max_transfer:105,platters:4,cache:32,result:{random:{},secuential:{}},arr:[]}}},methods:{calcule:function(){var t=this;fetch("https://storage-sim-back.herokuapp.com/api/disk/compare/",{method:"POST",body:JSON.stringify([this.disk1,this.disk2,this.disk3]),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){t.showModal=!0,console.log(e.result[0]),t.disk1.result=e.result[0],t.disk2.result=e.result[1],t.disk3.result=e.result[2],t.arr=[t.disk1,t.disk2,t.disk3]}))}},mounted:function(){}}),b=h,x=Object(u["a"])(b,y,g,!1,null,null,null),w=x.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],C={name:"About"},P=C,$=Object(u["a"])(P,S,T,!1,null,null,null),M=$.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"How it works"},[a("h1",[t._v("This is an how it works page")])])}],j={name:"Disk"},D=j,B=Object(u["a"])(D,N,O,!1,null,null,null),R=B.exports;s["default"].use(_["a"]);var q=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:M},{path:"/Disk",name:"Disk",component:R}],E=new _["a"]({routes:q}),A=E,H=a("5f5b"),J=a("b1e0");a("f9e3"),a("2dd8");s["default"].config.productionTip=!1,s["default"].use(H["a"]),s["default"].use(J["a"]),new s["default"]({router:A,render:function(t){return t(k)}}).$mount("#app")},"5dfc":function(t,e,a){"use strict";a("1a12")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.c5ac997d.js.map