(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-switch-switch"],{"8b40":function(i,t,n){"use strict";n.r(t);var e=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:i.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title"},[i._v("默认样式")]),n("v-uni-view",[n("v-uni-switch",{attrs:{checked:""},on:{change:function(t){t=i.$handleEvent(t),i.switch1Change(t)}}}),n("v-uni-switch",{on:{change:function(t){t=i.$handleEvent(t),i.switch2Change(t)}}})],1),n("v-uni-view",{staticClass:"uni-title"},[i._v("推荐展示样式")])],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("开启中")]),n("v-uni-switch",{attrs:{checked:""}})],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("关闭")]),n("v-uni-switch")],1)],1)],1)},s=[],c={data:function(){return{title:"switch"}},methods:{switch1Change:function(i){console.log("switch1 发生 change 事件，携带值为",i.target.value)},switch2Change:function(i){console.log("switch2 发生 change 事件，携带值为",i.target.value)}}},l=c,a=n("2877"),u=Object(a["a"])(l,e,s,!1,null,null,null);u.options.__file="switch.vue";t["default"]=u.exports}}]);