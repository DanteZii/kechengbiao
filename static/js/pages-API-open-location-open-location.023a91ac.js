(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-open-location-open-location"],{"53dd":function(i,t,a){t=i.exports=a("2350")(!1),t.push([i.i,"\n.uni-list-cell-left[data-v-8a1d92da]{padding:0 %?30?%\n}",""])},ba0a:function(i,t,a){var n=a("53dd");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var s=a("4f06").default;s("20adf949",n,!0,{sourceMap:!1,shadowMode:!1})},c1a0:function(i,t,a){"use strict";a.r(t);var n=function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:i.title}}),a("v-uni-view",{staticClass:"uni-common-mt"},[a("v-uni-form",{on:{submit:function(t){t=i.$handleEvent(t),i.openLocation(t)}}},[a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[i._v("经度")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"116.39747",name:"longitude"}})],1)],1),a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[i._v("纬度")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"39.9085",name:"latitude"}})],1)],1),a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[i._v("位置名称")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"天安门",name:"name"}})],1)],1),a("v-uni-view",{staticClass:"uni-list-cell"},[a("v-uni-view",{staticClass:"uni-list-cell-left"},[a("v-uni-view",{staticClass:"uni-label"},[i._v("详细位置")])],1),a("v-uni-view",{staticClass:"uni-list-cell-db"},[a("v-uni-input",{staticClass:"uni-input",attrs:{type:"text",disabled:!0,value:"北京市东城区东长安街",name:"address"}})],1)],1)],1),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[a("v-uni-button",{attrs:{type:"primary",formType:"submit"}},[i._v("查看位置")])],1)],1)],1)],1)],1)},s=[],e={data:function(){return{title:"openLocation"}},methods:{openLocation:function(i){console.log(i);var t=i.target.value;uni.openLocation({longitude:Number(t.longitude),latitude:Number(t.latitude),name:t.name,address:t.address})}}},l=e,u=(a("dd40"),a("2877")),v=Object(u["a"])(l,n,s,!1,null,"8a1d92da",null);v.options.__file="open-location.vue";t["default"]=v.exports},dd40:function(i,t,a){"use strict";var n=a("ba0a"),s=a.n(n);s.a}}]);