(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-product-list-product-list"],{4145:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,"",""])},"4a48":function(i,t,e){"use strict";e.r(t);var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"page"},[e("page-head",{attrs:{title:i.title}}),e("v-uni-view",{staticClass:"uni-product-list"},i._l(i.productList,function(t,a){return e("v-uni-view",{key:a,staticClass:"uni-product"},[e("v-uni-view",{staticClass:"image-view"},[i.renderImage?e("v-uni-image",{staticClass:"uni-product-image",attrs:{src:t.image}}):i._e()],1),e("v-uni-view",{staticClass:"uni-product-title"},[i._v(i._s(t.title))]),e("v-uni-view",{staticClass:"uni-product-price"},[e("v-uni-text",{staticClass:"uni-product-price-favour"},[i._v("￥"+i._s(t.originalPrice))]),e("v-uni-text",{staticClass:"uni-product-price-original"},[i._v("￥"+i._s(t.favourPrice))]),e("v-uni-text",{staticClass:"uni-product-tip"},[i._v(i._s(t.tip))])],1)],1)}))],1)},o=[],n={data:function(){return{title:"product-list",productList:[],renderImage:!1}},methods:{loadData:function(){var i=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",e=[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}];"refresh"===t&&(this.productList=[]),e.forEach(function(t){i.productList.push(t)})}},onLoad:function(){var i=this;this.loadData(),setTimeout(function(){i.renderImage=!0},300)},onPullDownRefresh:function(){this.loadData("refresh"),setTimeout(function(){uni.stopPullDownRefresh()},2e3)},onReachBottom:function(){this.loadData()}},u=n,r=(e("8380"),e("2877")),c=Object(r["a"])(u,a,o,!1,null,"1d515b69",null);c.options.__file="product-list.vue";t["default"]=c.exports},"5eb3":function(i,t,e){var a=e("4145");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var o=e("4f06").default;o("24cba804",a,!0,{sourceMap:!1,shadowMode:!1})},8380:function(i,t,e){"use strict";var a=e("5eb3"),o=e.n(a);o.a}}]);