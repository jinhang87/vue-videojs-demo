webpackJsonp([1],{"7swF":function(e,t,s){var r=s("noTH");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("rjj0")("9f78321a",r,!0,{})},DUzT:function(e,t,s){"use strict";function r(e){s("RXEB")}Object.defineProperty(t,"__esModule",{value:!0});var a=s("u8nv"),n=s("Mgk7"),i=s("VU/8"),c=r,o=i(a.a,n.a,!1,c,"data-v-d34f8e18",null);t.default=o.exports},Mgk7:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"liveView"},[s("h3",[e._v("Vue Video.js Live Demo")]),e._v(" "),s("p",[e._v("Current Stream:\n    "),s("span",{staticClass:"badge badge-success"},[e._v(e._s(e.currentStream))])]),e._v(" "),s("p",[e._v("Current Tech:\n    "),s("span",{staticClass:"badge badge-info"},[e._v(e._s(e.currentTech))])]),e._v(" "),s("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions},on:{ready:e.onPlayerReadied,timeupdate:e.onTimeupdate}}),e._v(" "),s("div",{staticClass:"selectWrapper"},[e._v("\n    Switch Tech：\n    "),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTech,expression:"currentTech"}],staticClass:"form-check-input",attrs:{type:"radio",name:"tech",id:"html5",value:"Html5"},domProps:{checked:e._q(e.currentTech,"Html5")},on:{change:[function(t){e.currentTech="Html5"},e.changeTech]}}),e._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"html5"}},[e._v("\n        Html5\n      ")])]),e._v(" "),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTech,expression:"currentTech"}],staticClass:"form-check-input",attrs:{type:"radio",name:"tech",id:"flash",value:"Flash"},domProps:{checked:e._q(e.currentTech,"Flash")},on:{change:[function(t){e.currentTech="Flash"},e.changeTech]}}),e._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"flash"}},[e._v("\n        Flash\n      ")])])]),e._v(" "),s("h5",[e._v("Enter your streams link below")]),e._v(" "),s("div",{staticClass:"inputWrapper"},["RTMP"===e.currentStream?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:""}},[e._v("RTMP: ")]),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.streams.rtmp,expression:"streams.rtmp"}],staticClass:"form-control",attrs:{type:"text",placeholder:"RTMP url here"},domProps:{value:e.streams.rtmp},on:{input:function(t){t.target.composing||e.$set(e.streams,"rtmp",t.target.value)}}})])]):s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:""}},[e._v("HLS: ")]),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.streams.hls,expression:"streams.hls"}],staticClass:"form-control",attrs:{type:"text",placeholder:"HLS url here"},domProps:{value:e.streams.hls},on:{input:function(t){t.target.composing||e.$set(e.streams,"hls",t.target.value)}}})])])]),e._v(" "),s("div",{staticClass:"buttonWrapper"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.enterStream}},[e._v("Apply")])]),e._v(" "),s("Switcher")],1)},a=[],n={render:r,staticRenderFns:a};t.a=n},QfGZ:function(e,t,s){t=e.exports=s("FZ+f")(!0),t.push([e.i,".liveView[data-v-d34f8e18]{position:relative}.selectWrapper[data-v-d34f8e18]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:20px;line-height:30px;margin:20px;vertical-align:baseline}.inputWrapper[data-v-d34f8e18]{width:500px;margin:0 auto}.buttonWrapper[data-v-d34f8e18]{text-align:center}","",{version:3,sources:["D:/code/vue/vue-videojs-demo/src/views/live.vue"],names:[],mappings:"AACA,2BACE,iBAAmB,CACpB,AACD,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,eAAgB,AAChB,iBAAkB,AAClB,YAAa,AACb,uBAAyB,CAC1B,AACD,+BACE,YAAa,AACb,aAAe,CAChB,AACD,gCACE,iBAAmB,CACpB",file:"live.vue",sourcesContent:["\n.liveView[data-v-d34f8e18] {\r\n  position: relative;\n}\n.selectWrapper[data-v-d34f8e18] {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 20px;\r\n  line-height: 30px;\r\n  margin: 20px;\r\n  vertical-align: baseline;\n}\n.inputWrapper[data-v-d34f8e18] {\r\n  width: 500px;\r\n  margin: 0 auto;\n}\n.buttonWrapper[data-v-d34f8e18] {\r\n  text-align: center;\n}\r\n"],sourceRoot:""}])},RXEB:function(e,t,s){var r=s("QfGZ");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("rjj0")("5dcccd96",r,!0,{})},noTH:function(e,t,s){t=e.exports=s("FZ+f")(!0),t.push([e.i,".switchBtn[data-v-7454d917]{text-align:center;position:absolute;right:0;top:10px}","",{version:3,sources:["D:/code/vue/vue-videojs-demo/src/components/Switcher.vue"],names:[],mappings:"AACA,4BACE,kBAAmB,AACnB,kBAAmB,AACnB,QAAW,AACX,QAAU,CACX",file:"Switcher.vue",sourcesContent:["\n.switchBtn[data-v-7454d917] {\r\n  text-align: center;\r\n  position: absolute;\r\n  right: 0px;\r\n  top: 10px;\n}\r\n"],sourceRoot:""}])},rdYc:function(e,t,s){"use strict";t.a={computed:{isLive:function(){return"live"===this.$route.name}},methods:{toggleLive:function(){this.isLive?this.$router.push("/playback"):this.$router.push("/")}}}},tHzK:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Switcher"},[s("button",{staticClass:"btn btn-primary switchBtn",on:{click:e.toggleLive}},[e._v(e._s(e.isLive?"to playback":"to live"))])])},a=[],n={render:r,staticRenderFns:a};t.a=n},u8nv:function(e,t,s){"use strict";var r=s("xBuU");t.a={name:"live",components:{Switcher:r.a},data:function(){return{initialized:!1,currentTech:"",streams:{rtmp:"",hls:""},playerOptions:{overNative:!0,autoplay:!1,controls:!0,aspectRatio:"16:9",techOrder:["flash","html5"],sourceOrder:!0,flash:{hls:{withCredentials:!1},swf:"/vue-videojs-demo/static/media/video-js.swf"},html5:{hls:{withCredentials:!1}},sources:[{type:"rtmp/mp4",src:"rtmp://58.200.131.2:1935/livetv/hunantv"},{withCredentials:!1,type:"application/x-mpegURL",src:"http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8"}],poster:"/vue-videojs-demo/static/images/logo.png",timeDivider:!1,durationDisplay:!1,progressControl:!0,customControlSpacer:!0,fullscreenToggle:!0}}},computed:{player:function(){return this.$refs.videoPlayer.player},currentStream:function(){return"Flash"===this.currentTech?"RTMP":"HLS"}},methods:{onPlayerReadied:function(){this.initialized||(this.initialized=!0,this.currentTech=this.player.techName_)},onTimeupdate:function(e){console.log("currentTime",e.cache_.currentTime)},enterStream:function(){this.playerOptions.sources[1].src=this.streams.hls,this.playerOptions.sources[0].src=this.streams.rtmp,this.playerOptions.autoplay=!0},changeTech:function(){"Html5"===this.currentTech?this.playerOptions.techOrder=["html5"]:"Flash"===this.currentTech&&(this.playerOptions.techOrder=["flash"]),this.playerOptions.autoplay=!0}}}},xBuU:function(e,t,s){"use strict";function r(e){s("7swF")}var a=s("rdYc"),n=s("tHzK"),i=s("VU/8"),c=r,o=i(a.a,n.a,!1,c,"data-v-7454d917",null);t.a=o.exports}});
//# sourceMappingURL=1.72985a24fa45d7bfd571.js.map