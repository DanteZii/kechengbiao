(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-make-phone-call-make-phone-call"],{"0672":function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:n.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n._v("请在下方输入电话号码")]),e("v-uni-input",{staticClass:"input uni-common-mt",attrs:{type:"number",name:"input"},on:{input:function(t){t=n.$handleEvent(t),n.bindInput(t)}}}),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{attrs:{type:"primary",disabled:n.disabled},on:{click:function(t){t=n.$handleEvent(t),n.makePhoneCall(t)}}},[n._v("拨打")])],1)],1)],1)},a=[],u={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(n){this.inputValue=n.target.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){uni.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("成功拨打电话")}})}}},l=u,o=(e("0a4c"),e("2877")),s=Object(o["a"])(l,i,a,!1,null,"94787598",null);s.options.__file="make-phone-call.vue";t["default"]=s.exports},"0a4c":function(n,t,e){"use strict";var i=e("c6f5"),a=e.n(i);a.a},"88f6":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n.input[data-v-94787598]{height:%?119?%;line-height:%?119?%;font-size:%?78?%;border-bottom:%?1?% solid #e2e2e2;text-align:center\n}",""])},c6f5:function(n,t,e){var i=e("88f6");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("122fddb4",i,!0,{sourceMap:!1,shadowMode:!1})}}]);