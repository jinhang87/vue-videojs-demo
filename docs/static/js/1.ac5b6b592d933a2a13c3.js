webpackJsonp([1],{"+zwN":function(e,t,s){t=e.exports=s("FZ+f")(!0),t.push([e.i,".switchBtn[data-v-561e1134]{text-align:center;position:absolute;right:0;top:10px}","",{version:3,sources:["/Users/savokiss/github/vue-videojs-demo/src/components/Switcher.vue"],names:[],mappings:"AACA,4BACE,kBAAmB,AACnB,kBAAmB,AACnB,QAAW,AACX,QAAU,CACX",file:"Switcher.vue",sourcesContent:["\n.switchBtn[data-v-561e1134] {\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  top: 10px;\n}\n"],sourceRoot:""}])},DUzT:function(e,t,s){"use strict";function a(e){s("IFBK")}Object.defineProperty(t,"__esModule",{value:!0});var r=s("u8nv"),i=s("hgNA"),n=s("VU/8"),c=a,o=n(r.a,i.a,!1,c,"data-v-25fa89ff",null);t.default=o.exports},Dv2A:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Switcher"},[s("button",{staticClass:"btn btn-primary switchBtn",on:{click:e.toggleLive}},[e._v(e._s(e.isLive?"to playback":"to live"))])])},r=[],i={render:a,staticRenderFns:r};t.a=i},IFBK:function(e,t,s){var a=s("RE6W");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("8b401cde",a,!0,{})},QlVa:function(e,t,s){var a=s("+zwN");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s("rjj0")("ffa3319c",a,!0,{})},RE6W:function(e,t,s){t=e.exports=s("FZ+f")(!0),t.push([e.i,".liveView[data-v-25fa89ff]{position:relative}.selectWrapper[data-v-25fa89ff]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:20px;line-height:30px;margin:20px;vertical-align:baseline}.inputWrapper[data-v-25fa89ff]{width:500px;margin:0 auto}.buttonWrapper[data-v-25fa89ff]{text-align:center}","",{version:3,sources:["/Users/savokiss/github/vue-videojs-demo/src/views/live.vue"],names:[],mappings:"AACA,2BACE,iBAAmB,CACpB,AACD,gCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,eAAgB,AAChB,iBAAkB,AAClB,YAAa,AACb,uBAAyB,CAC1B,AACD,+BACE,YAAa,AACb,aAAe,CAChB,AACD,gCACE,iBAAmB,CACpB",file:"live.vue",sourcesContent:["\n.liveView[data-v-25fa89ff] {\n  position: relative;\n}\n.selectWrapper[data-v-25fa89ff] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 20px;\n  line-height: 30px;\n  margin: 20px;\n  vertical-align: baseline;\n}\n.inputWrapper[data-v-25fa89ff] {\n  width: 500px;\n  margin: 0 auto;\n}\n.buttonWrapper[data-v-25fa89ff] {\n  text-align: center;\n}\n"],sourceRoot:""}])},hgNA:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"liveView"},[s("h3",[e._v("Vue Video.js Live Demo")]),e._v(" "),s("p",[e._v("Current Stream:\n    "),s("span",{staticClass:"badge badge-success"},[e._v(e._s(e.currentStream))])]),e._v(" "),s("p",[e._v("Current Tech:\n    "),s("span",{staticClass:"badge badge-info"},[e._v(e._s(e.currentTech))])]),e._v(" "),s("video-player",{ref:"videoPlayer",staticClass:"vjs-custom-skin",attrs:{options:e.playerOptions},on:{ready:e.onPlayerReadied,timeupdate:e.onTimeupdate}}),e._v(" "),s("div",{staticClass:"selectWrapper"},[e._v("\n    Switch Tech：\n    "),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTech,expression:"currentTech"}],staticClass:"form-check-input",attrs:{type:"radio",name:"tech",id:"html5",value:"Html5"},domProps:{checked:e._q(e.currentTech,"Html5")},on:{change:[function(t){e.currentTech="Html5"},e.changeTech]}}),e._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"html5"}},[e._v("\n        Html5\n      ")])]),e._v(" "),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTech,expression:"currentTech"}],staticClass:"form-check-input",attrs:{type:"radio",name:"tech",id:"flash",value:"Flash"},domProps:{checked:e._q(e.currentTech,"Flash")},on:{change:[function(t){e.currentTech="Flash"},e.changeTech]}}),e._v(" "),s("label",{staticClass:"form-check-label",attrs:{for:"flash"}},[e._v("\n        Flash\n      ")])])]),e._v(" "),s("h5",[e._v("Enter your streams link below")]),e._v(" "),s("div",{staticClass:"inputWrapper"},["RTMP"===e.currentStream?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:""}},[e._v("RTMP: ")]),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.streams.rtmp,expression:"streams.rtmp"}],staticClass:"form-control",attrs:{type:"text",placeholder:"RTMP url here"},domProps:{value:e.streams.rtmp},on:{input:function(t){t.target.composing||e.$set(e.streams,"rtmp",t.target.value)}}})])]):s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:""}},[e._v("HLS: ")]),e._v(" "),s("div",{staticClass:"col-sm-8"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.streams.hls,expression:"streams.hls"}],staticClass:"form-control",attrs:{type:"text",placeholder:"HLS url here"},domProps:{value:e.streams.hls},on:{input:function(t){t.target.composing||e.$set(e.streams,"hls",t.target.value)}}})])])]),e._v(" "),s("div",{staticClass:"buttonWrapper"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.enterStream}},[e._v("Apply")])]),e._v(" "),s("Switcher")],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},rdYc:function(e,t,s){"use strict";t.a={computed:{isLive:function(){return"live"===this.$route.name}},methods:{toggleLive:function(){this.isLive?this.$router.push("/playback"):this.$router.push("/")}}}},u8nv:function(e,t,s){"use strict";var a=s("xBuU");t.a={name:"live",components:{Switcher:a.a},data:function(){return{initialized:!1,currentTech:"",streams:{rtmp:"",hls:""},playerOptions:{overNative:!0,autoplay:!1,controls:!0,techOrder:["flash","html5"],sourceOrder:!0,flash:{hls:{withCredentials:!1},swf:"/vue-videojs-demo/static/media/video-js.swf"},html5:{hls:{withCredentials:!1}},sources:[{type:"rtmp/mp4",src:"rtmp://184.72.239.149/vod/&mp4:BigBuckBunny_115k.mov"},{withCredentials:!1,type:"application/x-mpegURL",src:"http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8"}],poster:"/vue-videojs-demo/static/images/logo.png"}}},computed:{player:function(){return this.$refs.videoPlayer.player},currentStream:function(){return"Flash"===this.currentTech?"RTMP":"HLS"}},methods:{onPlayerReadied:function(){this.initialized||(this.initialized=!0,this.currentTech=this.player.techName_)},onTimeupdate:function(e){console.log("currentTime",e.cache_.currentTime)},enterStream:function(){this.playerOptions.sources[1].src=this.streams.hls,this.playerOptions.sources[0].src=this.streams.rtmp,this.playerOptions.autoplay=!0},changeTech:function(){"Html5"===this.currentTech?this.playerOptions.techOrder=["html5"]:"Flash"===this.currentTech&&(this.playerOptions.techOrder=["flash"]),this.playerOptions.autoplay=!0}}}},xBuU:function(e,t,s){"use strict";function a(e){s("QlVa")}var r=s("rdYc"),i=s("Dv2A"),n=s("VU/8"),c=a,o=n(r.a,i.a,!1,c,"data-v-561e1134",null);t.a=o.exports}});
//# sourceMappingURL=1.ac5b6b592d933a2a13c3.js.map