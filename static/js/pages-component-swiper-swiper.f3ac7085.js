(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-swiper-swiper"],{"0c6e":function(i,t,n){t=i.exports=n("2350")(!1),t.push([i.i,"\n.swiper[data-v-526b932a],.swiper-item[data-v-526b932a]{height:%?300?%\n}\n.swiper-item[data-v-526b932a]{display:block;line-height:%?300?%;text-align:center\n}\n.swiper-list[data-v-526b932a]{margin-top:%?40?%;margin-bottom:0\n}\n.uni-common-mt[data-v-526b932a]{margin-top:%?60?%;position:relative\n}\n.info[data-v-526b932a]{position:absolute;right:%?20?%\n}",""])},"17c2":function(i,t,n){var a=n("0c6e");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("51011340",a,!0,{sourceMap:!1,shadowMode:!1})},a2f2:function(i,t,n){"use strict";n.r(t);var a=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:i.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"page-section swiper"},[n("v-uni-view",{staticClass:"page-section-spacing"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-red"},[i._v("A")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-green"},[i._v("B")])],1),n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item uni-bg-blue"},[i._v("C")])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"swiper-list"},[n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("指示点")]),n("v-uni-switch",{attrs:{checked:i.indicatorDots},on:{change:function(t){t=i.$handleEvent(t),i.changeIndicatorDots(t)}}})],1),n("v-uni-view",{staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",{staticClass:"uni-list-cell-db"},[i._v("自动播放")]),n("v-uni-switch",{attrs:{checked:i.autoplay},on:{change:function(t){t=i.$handleEvent(t),i.changeAutoplay(t)}}})],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-text",[i._v("幻灯片切换时长(ms)")]),n("v-uni-text",{staticClass:"info"},[i._v(i._s(i.duration))])],1),n("v-uni-slider",{attrs:{value:i.duration,min:"500",max:"2000"},on:{change:function(t){t=i.$handleEvent(t),i.durationChange(t)}}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-text",[i._v("自动播放间隔时长(ms)")]),n("v-uni-text",{staticClass:"info"},[i._v(i._s(i.interval))])],1),n("v-uni-slider",{attrs:{value:i.interval,min:"2000",max:"10000"},on:{change:function(t){t=i.$handleEvent(t),i.intervalChange(t)}}})],1)],1)},e=[],s={data:function(){return{title:"swiper",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(i){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(i){this.autoplay=!this.autoplay},intervalChange:function(i){this.interval=i.target.value},durationChange:function(i){this.duration=i.target.value}}},o=s,u=(n("e9c2"),n("2877")),l=Object(u["a"])(o,a,e,!1,null,"526b932a",null);l.options.__file="swiper.vue";t["default"]=l.exports},e9c2:function(i,t,n){"use strict";var a=n("17c2"),e=n.n(a);e.a}}]);