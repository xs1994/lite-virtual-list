(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{341:function(e,t,n){},376:function(e,t,n){"use strict";n(341)},395:function(e,t,n){"use strict";n.r(t);for(var a=n(319),i=n.n(a),s=[],l=0;l<100;l++)s.push({id:l,index:l,value:i.a.Random.cparagraph(1,5)});var c={name:"variable-size",data:function(){return{items:s,deleteId:null}},methods:{deleteItem:function(e){this.deleteId=e.id},deleteSuccess:function(e){console.log(e),alert("删除成功")}}},d=(n(376),n(28)),u=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"variable"},[n("lite-virtual-list",{attrs:{type:"variable",screen:[3,3],deleteId:e.deleteId,data:e.items,virtualHieght:"500px",size:100,remain:8,distance:100},on:{deleteSuccess:e.deleteSuccess},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return n("div",{staticClass:"item"},[n("div",[n("span",{staticClass:"index"},[e._v(" #"+e._s(a.id+1)+" ")]),e._v(" "),n("span",[e._v(" "+e._s(a.value))])]),e._v(" "),n("button",{on:{click:function(t){return e.deleteItem(a)}}},[e._v("删除")])])}}])})],1)}),[],!1,null,"9082aebc",null);t.default=u.exports}}]);