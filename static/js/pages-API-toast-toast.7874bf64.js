(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-toast-toast"],{"8bb6":function(t,n,a){"use strict";a.r(n);var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("page-head",{attrs:{title:t.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast1Tap(n)}}},[t._v("点击弹出默认toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast2Tap(n)}}},[t._v("点击弹出设置duration的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast3Tap(n)}}},[t._v("点击弹出显示loading的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.toast4Tap(n)}}},[t._v("点击弹出显示自定义图片的toast")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(n){n=t.$handleEvent(n),t.hideToast(n)}}},[t._v("点击隐藏toast")])],1)],1)],1)},i=[],e={data:function(){return{title:"toast"}},methods:{toast1Tap:function(){uni.showToast({title:"默认"})},toast2Tap:function(){uni.showToast({title:"duration 3000",duration:3e3})},toast3Tap:function(){uni.showToast({title:"loading",icon:"loading",duration:5e3})},toast4Tap:function(){uni.showToast({title:"logo",image:"../../../static/uni@2x.png"})},hideToast:function(){uni.hideToast()}}},s=e,u=a("2877"),l=Object(u["a"])(s,o,i,!1,null,null,null);l.options.__file="toast.vue";n["default"]=l.exports}}]);