webpackJsonp([3],{"+9YK":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("lGuZ"),n=i("ROZO"),a=i("VU/8"),r=a(s.a,n.a,null,null,null);t.default=r.exports},0:function(e,t){},"5LIk":function(e,t){},M93x:function(e,t,i){"use strict";function s(e){i("hI6F")}var n=i("xJD8"),a=i("UxxM"),r=i("VU/8"),o=s,l=r(n.a,a.a,o,null,null);t.a=l.exports},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("7+uW"),n=i("M93x"),a=i("YaEn"),r=i("NBiq"),o=i.n(r),l=i("g3Gj"),u=(i.n(l),i("5LIk")),c=(i.n(u),i("4CPX"),i("9SBB"));i.n(c);s.a.config.productionTip=!1,s.a.use(o.a),new s.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}})},ROZO:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"video-player"},[i("video",{staticClass:"video-js"})])}],a={render:s,staticRenderFns:n};t.a=a},UxxM:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[e._m(0),e._v(" "),i("div",{staticClass:"routerWrapper"},[i("router-view")],1)])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"star"},[i("span",{staticClass:"badge badge-light"},[e._v("Github")]),e._v(" "),i("a",{attrs:{href:"http://github.com/savokiss/vue-videojs-demo",target:"_blank"}},[i("img",{attrs:{src:"https://img.shields.io/github/stars/savokiss/vue-videojs-demo.svg?style=social",alt:""}})])])}],a={render:s,staticRenderFns:n};t.a=a},YaEn:function(e,t,i){"use strict";var s=i("7+uW"),n=i("/ocq"),a=function(){return i.e(1).then(i.bind(null,"DUzT"))},r=function(){return i.e(0).then(i.bind(null,"1Smu"))};s.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"live",component:a},{path:"/playback",name:"playback",component:r}]})},g3Gj:function(e,t){},hI6F:function(e,t){},lGuZ:function(e,t,i){"use strict";var s=i("woOf"),n=i.n(s);window.videojs=i("63pp"),videojs=videojs.default||videojs,t.a={name:"video-player",props:{options:{type:Object,required:!0},start:{type:Number,default:function(){return 0}},playsinline:{type:Boolean,default:function(){return!1}},customEventName:{type:String,default:function(){return"statechanged"}}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this;this.player=null;var t=n()({autoplay:!1,controls:!0,preload:"auto",fluid:!1,muted:!1,width:"100%",height:"360",language:"en",controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}},this.options),i=this.playsinline;i&&(this.$el.children[0].setAttribute("playsinline",i),this.$el.children[0].setAttribute("webkit-playsinline",i));var s=function(t,i){if(t&&e.$emit(t,e.player),i){var s={};s[t]=i,e.$emit(e.customEventName,s)}};t.plugins&&delete t.plugins.__ob__,this.player=videojs(this.$el.children[0],t,function(){var t=this;e.$emit("ready",e.player);for(var i=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"],n=0;n<i.length;n++)!function(e){t.on(e,function(){s(e,!0)})}(i[n]);this.on("timeupdate",function(){s("timeupdate",this.currentTime())})})},dispose:function(){if(this.player&&videojs){if("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),videojs(this.$el.children[0]).dispose(),!this.$el.children.length){var e=document.createElement("video");e.className="video-js",this.$el.appendChild(e)}this.player=null}}},watch:{options:{deep:!0,handler:function(e,t){this.dispose(),e&&e.sources&&e.sources.length&&this.initialize()}}}}},vA7V:function(e,t){e.exports={_from:"videojs-swf@5.4.1",_id:"videojs-swf@5.4.1",_inBundle:!1,_integrity:"sha1-IHfvccdJ8seCPvSbq65N0qywj4c=",_location:"/videojs-swf",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"videojs-swf@5.4.1",name:"videojs-swf",escapedName:"videojs-swf",rawSpec:"5.4.1",saveSpec:null,fetchSpec:"5.4.1"},_requiredBy:["/videojs-flash"],_resolved:"https://registry.npmjs.org/videojs-swf/-/videojs-swf-5.4.1.tgz",_shasum:"2077ef71c749f2c7823ef49babae4dd2acb08f87",_spec:"videojs-swf@5.4.1",_where:"/Users/savokiss/workspace/player-demo/node_modules/videojs-flash",author:{name:"Brightcove"},bugs:{url:"https://github.com/videojs/video-js-swf/issues"},bundleDependencies:!1,copyright:"Copyright 2014 Brightcove, Inc. https://github.com/videojs/video-js-swf/blob/master/LICENSE",deprecated:!1,description:"The Flash-fallback video player for video.js (http://videojs.com)",devDependencies:{async:"~0.2.9",chg:"^0.3.2","flex-sdk":"4.6.0-0",grunt:"~0.4.0","grunt-bumpup":"~0.5.0","grunt-cli":"~0.1.0","grunt-connect":"~0.2.0","grunt-contrib-jshint":"~0.4.3","grunt-contrib-qunit":"~0.2.1","grunt-contrib-watch":"~0.1.4","grunt-npm":"~0.0.2","grunt-prompt":"~0.1.2","grunt-shell":"~0.6.1","grunt-tagrelease":"~0.3.1",qunitjs:"~1.12.0","video.js":"^5.9.2"},homepage:"http://videojs.com",keywords:["flash","video","player"],name:"videojs-swf",repository:{type:"git",url:"git+https://github.com/videojs/video-js-swf.git"},scripts:{version:"chg release -y && grunt dist && git add -f dist/ && git add CHANGELOG.md"},version:"5.4.1"}},xJD8:function(e,t,i){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.6acae840fd2918650341.js.map