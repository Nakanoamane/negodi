(function(e){function t(t){for(var n,a,r=t[0],c=t[1],l=t[2],u=0,g=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&g.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(g.length)g.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},i={index:0},o=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/negodi/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0281":function(e,t,s){e.exports=s.p+"img/dairy_cow.2b181a7d.png"},"02f5":function(e,t,s){},"034f":function(e,t,s){"use strict";s("85ec")},"13ba":function(e,t,s){"use strict";s("5cf0")},"17a2":function(e,t,s){e.exports=s.p+"img/eye_left.3a62319c.png"},2528:function(e,t,s){e.exports=s.p+"img/overall.c3a5f238.png"},3542:function(e,t,s){e.exports=s.p+"img/white.bf253049.png"},3776:function(e,t,s){e.exports=s.p+"img/beige.cf3d7397.png"},"3c6e":function(e,t,s){e.exports=s.p+"img/mouse.78c2855d.png"},4021:function(e,t,s){e.exports=s.p+"img/key_holder.f2a436b0.png"},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],a=(s("034f"),s("2877")),r={},c=Object(a["a"])(r,i,o,!1,null,null,null),l=c.exports,d=s("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"top"},[s("h1",[e._v("でがネゴぢ")]),s("div",{staticClass:"image"},[s("img",{attrs:{alt:e.negodis[e.negodi].name,src:e.negodis[e.negodi].src,width:"300",height:"300"}})])]),s("ul",{staticClass:"link"},[s("li",[s("router-link",{attrs:{to:"/about"}},[s("span",{staticClass:"btn-big"},[e._v("ネゴぢとは")])])],1),s("li",[s("router-link",{attrs:{to:"/generator"}},[s("span",{staticClass:"btn-big"},[e._v("ネゴぢジェネレーター")])])],1)])])},g=[],p={name:"Home",data(){return{negodi:0,negodis:[{name:"ベージュネゴぢ",src:s("3776")},{name:"くろネゴぢ",src:s("dc9b")},{name:"ブラウンネゴぢ",src:s("800b")},{name:"チェン柄ネゴぢ",src:s("741c")},{name:"店員ネゴぢ",src:s("7027")},{name:"エリザベスカラーネゴぢ",src:s("9a95")},{name:"乳牛ネゴぢ",src:s("0281")},{name:"エメラルドネゴぢ",src:s("f504")},{name:"ガーリーネゴぢ",src:s("b662")},{name:"ハナ柄ネゴぢ",src:s("ecb1")},{name:"頭巾ネゴぢ",src:s("880b")},{name:"キーホルダーネゴぢ",src:s("4021")},{name:"オーバーオールネゴぢ",src:s("2528")},{name:"パンダネゴぢ",src:s("84dd")},{name:"ピンクネゴぢ",src:s("d8dd")},{name:"ロシアンネゴぢ",src:s("604a")},{name:"おくるみネゴぢ",src:s("e186")},{name:"しろネゴぢ",src:s("3542")},{name:"ユン柄ネゴぢ",src:s("c61f")}]}},mounted(){setInterval(()=>{this.negodi=this.negodi<this.negodis.length-1?this.negodi+1:0},3e3)}},m=p,f=(s("13ba"),Object(a["a"])(m,u,g,!1,null,"5c1006ed",null)),v=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("Header"),n("transition-group",{attrs:{name:"fade",appear:""}},[n("h2",{key:0},[e._v("...ネゴぢとは？")]),n("img",{key:1,staticClass:"origin",attrs:{alt:"元祖でがネゴぢ",src:s("9c8c"),width:"300",height:"300"}}),n("div",{key:2,staticClass:"call"},[n("p",[e._v("みんなの意見を募集中！")]),n("input",{attrs:{id:"hashTags",value:"#ネゴぢとは #でがネゴぢ #ネゴぢ"}}),n("button",{on:{click:e.copyTags}},[e._v(e._s(e.copied?"コピーしました":"タグをコピー"))])])])],1)},b=[],y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("h1",[e._v("でがネゴぢ")]),s("button",{staticClass:"menuBtn",class:{active:e.isDisplay},on:{click:function(t){e.isDisplay=!e.isDisplay}}},[s("fa-icon",{attrs:{icon:"bars"}})],1),s("transition",{attrs:{name:"accordion",appear:""}},[e.isDisplay?s("ul",{staticClass:"menu"},[s("li",[s("router-link",{attrs:{to:"/"}},[e._v("ホーム")])],1),s("li",[s("router-link",{attrs:{to:"/about"}},[e._v("ネゴぢとは")])],1),s("li",[s("router-link",{attrs:{to:"/generator"}},[e._v("ネゴぢジェネレーター")])],1)]):e._e()])],1)},_=[],w={name:"Header",data(){return{isDisplay:!1}}},x=w,C=(s("bcd1"),Object(a["a"])(x,y,_,!1,null,"c3fb7d2e",null)),k=C.exports,P={name:"About",components:{Header:k},data(){return{copied:!1}},methods:{copyTags(){let e=document.getElementById("hashTags");e.select(),document.execCommand("Copy"),this.copied=!0}}},E=P,S=(s("5fc1"),Object(a["a"])(E,h,b,!1,null,"7f035f66",null)),I=S.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"generator"},[s("Header"),"edit"===e.part?s("div",{staticClass:"editor"},[s("div",{staticClass:"preview",attrs:{id:"preview"}},[s("div",{staticClass:"previewInner",style:{backgroundColor:e.negodi.colors.bg,backgroundImage:"url("+e.negodi.src.bg+")"},attrs:{id:"previewInner"}},[s("div",{staticClass:"previewItem",attrs:{id:"body"}}),s("div",{staticClass:"previewItem",attrs:{id:"rightEye"}}),s("div",{staticClass:"previewItem",attrs:{id:"leftEye"}}),s("div",{staticClass:"previewItem",attrs:{id:"nose"}}),s("div",{staticClass:"previewItem",attrs:{id:"mouse"}}),e.negodi.statuses.name?s("p",{staticClass:"negodiName previewItem",style:{color:e.negodi.colors.name,fontSize:e.negodi.sizes.name+"px"}},[e._v(e._s(e.negodi.texts.name)+"ネゴぢ")]):e._e(),e.negodi.statuses.author?s("p",{staticClass:"author previewItem",style:{color:e.negodi.colors.author,fontSize:e.negodi.sizes.author+"px",top:e.imageSize-30+"px"}},[e._v("by "+e._s(e.negodi.texts.author))]):e._e()])]),s("div",{staticClass:"editMenu"},[s("ul",{staticClass:"editMenu_list"},e._l(e.steps,(function(t,n){return s("li",{key:n,class:{active:e.step===n},on:{click:function(t){e.step=n}}},[e._v(e._s(t))])})),0),s("div",{staticClass:"editMenu_steps"},[0===e.step?s("div",{staticClass:"editMenu_step"},[s("button",{staticClass:"color switchBtn",class:{active:!e.negodi.statuses.bodySrc},on:{click:e.switchBodyType}},[e._v("色")]),s("button",{staticClass:"image switchBtn",class:{active:e.negodi.statuses.bodySrc},on:{click:e.switchBodyType}},[e._v("画像")]),s("table",[e.negodi.statuses.bodySrc?e._e():s("tr",[s("td",[e._v("色")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.body,expression:"negodi.colors.body"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.body},on:{change:function(t){return e.setPreview("body")},input:function(t){t.target.composing||e.$set(e.negodi.colors,"body",t.target.value)}}})])]),e.negodi.statuses.bodySrc?s("tr",[s("td",[e._v("画像")]),e._m(0),s("input",{attrs:{type:"file",accept:"image/*",id:"negodiBodyImage"},on:{change:function(t){return e.selectedFile("body",t)}}})]):e._e()])]):e._e(),1===e.step?s("div",{staticClass:"editMenu_step"},[s("table",[s("tr",[s("td",[e._v("すべて")]),s("td",[s("input",{attrs:{type:"color"},on:{change:e.selectFaceColor}})])]),s("tr",[s("td",[e._v("右目")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.rightEye,expression:"negodi.colors.rightEye"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.rightEye},on:{change:function(t){return e.setPreview("rightEye")},input:function(t){t.target.composing||e.$set(e.negodi.colors,"rightEye",t.target.value)}}})])]),s("tr",[s("td",[e._v("左目")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.leftEye,expression:"negodi.colors.leftEye"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.leftEye},on:{change:function(t){return e.setPreview("leftEye")},input:function(t){t.target.composing||e.$set(e.negodi.colors,"leftEye",t.target.value)}}})])]),s("tr",[s("td",[e._v("はな")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.nose,expression:"negodi.colors.nose"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.nose},on:{change:function(t){return e.setPreview("nose")},input:function(t){t.target.composing||e.$set(e.negodi.colors,"nose",t.target.value)}}})])]),s("tr",[s("td",[e._v("くち")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.mouse,expression:"negodi.colors.mouse"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.mouse},on:{change:function(t){return e.setPreview("mouse")},input:function(t){t.target.composing||e.$set(e.negodi.colors,"mouse",t.target.value)}}})])])])]):e._e(),2===e.step?s("div",{staticClass:"editMenu_step"},[s("table",[s("tr",[s("td",[e._v("色")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.bg,expression:"negodi.colors.bg"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.bg},on:{input:function(t){t.target.composing||e.$set(e.negodi.colors,"bg",t.target.value)}}})])]),s("tr",[s("td",[e._v("画像")]),s("td",[s("label",{staticClass:"inputFileLabel",attrs:{for:"negodiBgImage"}},[e._v("画像を選ぶ")]),s("button",{staticClass:"deleteBtn",on:{click:e.clearBgImage}},[e._v("画像を削除")])]),s("input",{attrs:{type:"file",accept:"image/*",id:"negodiBgImage"},on:{change:function(t){return e.selectedFile("bg",t)}}})])])]):e._e(),3===e.step?s("div",{staticClass:"editMenu_step"},[s("label",{staticClass:"inputNameLabel"},[e._v("ネゴぢの名前")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.texts.name,expression:"negodi.texts.name"}],staticClass:"inputName name",attrs:{type:"input"},domProps:{value:e.negodi.texts.name},on:{input:function(t){t.target.composing||e.$set(e.negodi.texts,"name",t.target.value)}}}),e._m(1),s("button",{staticClass:"statusBtn",class:{active:e.negodi.statuses.name},on:{click:function(t){e.negodi.statuses.name=!e.negodi.statuses.name}}},[e._v(" "+e._s(e.negodi.statuses.name?"表示中":"非表示中")+" ")]),s("table",[s("tr",[s("td",[e._v("色")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.name,expression:"negodi.colors.name"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.name},on:{input:function(t){t.target.composing||e.$set(e.negodi.colors,"name",t.target.value)}}})])]),s("tr",[s("td",[e._v("サイズ")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.sizes.name,expression:"negodi.sizes.name"}],attrs:{type:"input"},domProps:{value:e.negodi.sizes.name},on:{input:function(t){t.target.composing||e.$set(e.negodi.sizes,"name",t.target.value)}}})])])]),s("label",{staticClass:"inputNameLabel"},[e._v("作者の名前")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.texts.author,expression:"negodi.texts.author"}],staticClass:"inputName",attrs:{type:"input"},domProps:{value:e.negodi.texts.author},on:{input:function(t){t.target.composing||e.$set(e.negodi.texts,"author",t.target.value)}}}),s("button",{staticClass:"statusBtn",class:{active:e.negodi.statuses.author},on:{click:function(t){e.negodi.statuses.author=!e.negodi.statuses.author}}},[e._v(" "+e._s(e.negodi.statuses.author?"表示中":"非表示中")+" ")]),s("table",[s("tr",[s("td",[e._v("色")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.colors.author,expression:"negodi.colors.author"}],attrs:{type:"color"},domProps:{value:e.negodi.colors.author},on:{input:function(t){t.target.composing||e.$set(e.negodi.colors,"author",t.target.value)}}})])]),s("tr",[s("td",[e._v("サイズ")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.negodi.sizes.author,expression:"negodi.sizes.author"}],attrs:{type:"number"},domProps:{value:e.negodi.sizes.author},on:{input:function(t){t.target.composing||e.$set(e.negodi.sizes,"author",t.target.value)}}})])])])]):e._e(),4===e.step?s("div",{staticClass:"editMenu_step"},[s("button",{staticClass:"generateBtn",on:{click:e.generateResult}},[e._v("ネゴぢを出力する "),s("fa-icon",{attrs:{icon:"angle-double-right"}})],1)]):e._e()]),s("div",{staticClass:"editMenu_changeStep"},[s("span",{staticClass:"back",class:{active:e.step>0},on:{click:function(t){return e.changeStep("back")}}},[s("fa-icon",{attrs:{icon:"angle-left"}}),e._v(" 前へ ")],1),s("span",[e._v(e._s(e.steps[e.step]))]),s("span",{staticClass:"next",class:{active:e.step<e.steps.length-1},on:{click:function(t){return e.changeStep("next")}}},[e._v(" 次へ "),s("fa-icon",{attrs:{icon:"angle-right"}})],1)])])]):e._e(),"result"===e.part?s("div",{staticClass:"result"},[s("h2",[e._v(e._s(e.negodi.texts.name)+"ネゴぢ"),s("br"),e._v("爆誕！")]),s("img",{attrs:{src:e.result,alt:e.negodi.texts.name+"ネゴぢ",width:e.imageSize,height:e.imageSize}}),s("a",{attrs:{href:e.result,download:e.negodi.texts.name+"ネゴぢ.png"}},[s("p",[e._v("ダウンロードして使ってね")])]),s("button",{staticClass:"back",on:{click:function(t){return e.backToEdit()}}},[s("fa-icon",{attrs:{icon:"angle-double-left"}}),e._v(" 編集に戻る")],1),s("button",{staticClass:"new"},[s("router-link",{attrs:{to:"/"}},[e._v("新しいネゴぢを作る")])],1)]):e._e()],1)},B=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("td",[s("label",{staticClass:"inputFileLabel",attrs:{for:"negodiBodyImage"}},[e._v("画像を選ぶ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"inputNameNegodi"},[s("span",[e._v("ネゴぢ")])])}],$=s("951f"),N=s.n($),O={name:"Generator",components:{Header:k},data(){return{part:"edit",step:0,steps:["からだ","かお","背景","文字","完成"],imageSize:350,imageX:0,imageY:0,negodi:{colors:{body:"#fa9e5c",rightEye:"#ffffff",leftEye:"#ffffff",nose:"#ffffff",mouse:"#ffffff",name:"#fa9e5c",author:"#fa9e5c",bg:"#ffffff"},src:{body:"",bg:""},parts:{body:s("d035"),rightEye:s("e0a7"),leftEye:s("17a2"),nose:s("5c43"),mouse:s("3c6e")},texts:{name:"オリジナル",author:"ネゴぢファン"},sizes:{name:20,author:16},statuses:{name:!0,author:!0,bodySrc:!1},layers:{body:s("d035"),rightEye:s("e0a7"),leftEye:s("17a2"),nose:s("5c43"),mouse:s("3c6e")}},result:""}},mounted(){const e=document.getElementById("preview").getBoundingClientRect();this.imageSize=e.width,this.setPreviewAll()},methods:{changeStep(e){this.step="next"===e?this.step<this.steps.length-1?this.step+1:this.step:this.step>0?this.step-1:this.step},selectedFile(e,t){this.negodi.src[e]=window.URL.createObjectURL(t.target.files[0]),"body"===e&&this.setPreview(e,this.negodi.src[e])},selectFaceColor(e){this.negodi.colors.rightEye=e.target.value,this.negodi.colors.leftEye=e.target.value,this.negodi.colors.nose=e.target.value,this.negodi.colors.mouse=e.target.value,this.setPreviewAll()},setPreviewAll(){this.negodi.statuses.bodySrc&&this.negodi.src.body?this.setPreview("body",this.negodi.src.body):this.setPreview("body"),this.setPreview("rightEye"),this.setPreview("leftEye"),this.setPreview("nose"),this.setPreview("mouse")},setPreview(e,t=null){let s=document.createElement("canvas");s.width=this.imageSize,s.height=this.imageSize,s.classList.add("previewItem");let n=s.getContext("2d");if(t)this.setImage(n,e,t);else{let t=this.negodi.colors[e];this.setColor(n,e,t)}let i=document.getElementById(e);i.innerHTML="",i.appendChild(s)},setColor(e,t,s){let n=new Image;n.onload=()=>{e.fillStyle=s,e.fillRect(this.imageX,this.imageY,this.imageSize,this.imageSize),e.globalCompositeOperation="destination-in",e.drawImage(n,this.imageX,this.imageY,this.imageSize,this.imageSize)},n.src=this.negodi.layers[t]},setImage(e,t,s){let n=new Image;n.onload=()=>{e.drawImage(n,this.imageX,this.imageY,this.imageSize,this.imageSize),e.globalCompositeOperation="destination-in";let s=new Image;s.onload=()=>{e.drawImage(s,this.imageX,this.imageY,this.imageSize,this.imageSize)},s.src=this.negodi.layers[t]},n.src=s},clearBgImage(){this.negodi.background.src=""},generateResult(){const e=this;N()(document.getElementById("previewInner")).then((function(t){e.result=t.toDataURL("image/png"),e.part="result"}))},switchBodyType(){this.negodi.statuses.bodySrc=!this.negodi.statuses.bodySrc,this.setPreviewAll()},backToEdit(){let e=new Promise(e=>{this.part="edit",e()});e.then(()=>{this.setPreviewAll()})}}},j=O,M=(s("c2e6"),Object(a["a"])(j,z,B,!1,null,"40164d3c",null)),T=M.exports;n["a"].use(d["a"]);const L=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:I},{path:"/generator",name:"Generator",component:T}],H=new d["a"]({mode:"hash",base:"/negodi/",routes:L});var A=H,F=s("ecee"),R=s("ad3d"),D=s("c074"),X=s("b702");F["c"].add(D["a"],X["a"]),n["a"].component("fa-icon",R["a"]),n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(e){return e(l)}}).$mount("#app")},"5c43":function(e,t,s){e.exports=s.p+"img/nose.23ec7f32.png"},"5cf0":function(e,t,s){},"5fc1":function(e,t,s){"use strict";s("02f5")},"604a":function(e,t,s){e.exports=s.p+"img/russian.b8f802cd.png"},7027:function(e,t,s){e.exports=s.p+"img/clerk.42187dda.png"},"741c":function(e,t,s){e.exports=s.p+"img/chen.c0c4bd84.png"},"800b":function(e,t,s){e.exports=s.p+"img/brown.a6070e66.png"},"84dd":function(e,t,s){e.exports=s.p+"img/panda.35d3e017.png"},"85ec":function(e,t,s){},"880b":function(e,t,s){e.exports=s.p+"img/hood.fad46c9d.png"},"9a95":function(e,t,s){e.exports=s.p+"img/collar.633d2085.png"},"9c8c":function(e,t,s){e.exports=s.p+"img/origin.f6f76b7f.png"},a2a4:function(e,t,s){},a450:function(e,t,s){},b662:function(e,t,s){e.exports=s.p+"img/girly.fdfe29a8.png"},bcd1:function(e,t,s){"use strict";s("a2a4")},c2e6:function(e,t,s){"use strict";s("a450")},c61f:function(e,t,s){e.exports=s.p+"img/yun.33734c57.png"},d035:function(e,t,s){e.exports=s.p+"img/body.f1f39dac.png"},d8dd:function(e,t,s){e.exports=s.p+"img/pink.74c10df4.png"},dc9b:function(e,t,s){e.exports=s.p+"img/black.3a198b61.png"},e0a7:function(e,t,s){e.exports=s.p+"img/eye_right.0a98f16a.png"},e186:function(e,t,s){e.exports=s.p+"img/swaddle.11601720.png"},ecb1:function(e,t,s){e.exports=s.p+"img/hana.e1103430.png"},f504:function(e,t,s){e.exports=s.p+"img/emerald.eb27e91f.png"}});
//# sourceMappingURL=index.6cac18b8.js.map