(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d643b"],{"728b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("v-container",{staticClass:" mt-4"},[s("v-row",{staticClass:"row"},[s("v-card",{staticClass:"col-md-12 scroolPage"},[t.dataPost.length?s("v-row",{attrs:{"no-gutters":""}},t._l(t.dataPost,(function(t){return s("Posts",{key:t,attrs:{title:t.title,views:t.views,imagepost:t.imagepost,link:t.link,_id:t._id,urlpost:t.urlpost,datecreate:t.datecreate}})})),1):s("div",{attrs:{cols:"1"}},[s("v-layout",{attrs:{wrap:"",row:"","justify-space-around":""}},t._l(8,(function(t){return s("v-flex",{key:t},[s("v-sheet",{staticClass:"pa-3"},[s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{width:"300",type:"card"}})],1)],1)})),1)],1),s("v-row",{attrs:{wrap:"",row:"","justify-space-around":""}})],1)],1)],1)],1)},o=[],n=s("0c3a"),r={name:"Home",components:{Posts:n["a"]},data:function(){return{dataPost:[]}},methods:{getData:function(){var t=this;this.$http.get("/posts/all/trend").then((function(a){t.dataPost=a.data})).catch((function(t){alert(t.message)}))}},mounted:function(){this.$Progress.start(),this.getData()}},i=r,c=s("2877"),l=s("6544"),d=s.n(l),u=s("b0af"),p=s("a523"),w=s("0e8f"),f=s("a722"),h=s("0fd9"),v=s("8dd9"),m=s("3129"),g=Object(c["a"])(i,e,o,!1,null,null,null);a["default"]=g.exports;d()(g,{VCard:u["a"],VContainer:p["a"],VFlex:w["a"],VLayout:f["a"],VRow:h["a"],VSheet:v["a"],VSkeletonLoader:m["a"]})}}]);
//# sourceMappingURL=chunk-2d0d643b.2972fd85.js.map