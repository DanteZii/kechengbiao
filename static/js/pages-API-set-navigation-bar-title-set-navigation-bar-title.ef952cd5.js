(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-set-navigation-bar-title-set-navigation-bar-title"],{f827:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",[e("v-uni-form",{on:{submit:function(i){i=t.$handleEvent(i),t.setNaivgationBarTitle(i)}}},[e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-view",{staticClass:"uni-list-cell"},[e("v-uni-view",{staticClass:"uni-list-cell-left"},[t._v("\n\t\t\t\t\t\t页面标题\n\t\t\t\t\t")]),e("v-uni-view",{staticClass:"uni-list-cell-db"},[e("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",placeholder:"请输入页面标题并点击设置即可",name:"title"}})],1)],1)],1),e("v-uni-view",{staticClass:"uni-padding-wrap"},[e("v-uni-view",{staticClass:"uni-btn-v"},[e("v-uni-button",{attrs:{type:"primary",formType:"submit"}},[t._v("设置")])],1)],1)],1)],1)],1)},a=[],s={data:function(){return{title:"setNaivgationBarTitle"}},methods:{setNaivgationBarTitle:function(t){var i=t.detail.value.title;uni.setNavigationBarTitle({title:i,success:function(){console.log("setNavigationBarTitle success")},fail:function(t){console.log("setNavigationBarTitle fail, err is",t)}})}}},l=s,u=e("2877"),v=Object(u["a"])(l,n,a,!1,null,null,null);v.options.__file="set-navigation-bar-title.vue";i["default"]=v.exports}}]);