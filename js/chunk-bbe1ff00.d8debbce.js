(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbe1ff00"],{"2d3b":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[t.searchList.length>0?r("b",[t._v(t._s(t.getTotalPrice)+" всего вхождений найдено")]):t._e(),r("form",{staticClass:"flex flex-nowrap",on:{submit:function(e){return e.preventDefault(),t.search()}}},[r("label",{staticClass:"sr-only mb-1"},[t._v("Поиск статьи по слову")]),r("div",{staticClass:"form-item d-flex justify-content-between"},[r("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 w-50",attrs:{id:"inline-form-input-name",placeholder:"Липецк"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.search()}}},[t._v("Поиск")])],1)]),r("hr"),r("div",{staticClass:"content d-flex flex-row"},[r("div",{staticClass:"card-wrapper d-flex justify-content-start flex-wrap mt-2",class:{clear:!t.htmlArticle}},t._l(t.searchList,(function(e,s){return r("div",{staticClass:"card mb-4 d-flex flex-row align-items-center p-3",class:{active:e.title==t.selectedArticleTitle}},[r("div",{staticClass:"card-body p-0"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),r("p",{staticClass:"card-text"},[t._v("Найдено "+t._s(e.counter)+" вхождений")])]),r("a",{staticClass:"btn h-50 d-flex justify-content-center align-items-center btn-primary py-2",attrs:{href:"#"},on:{click:function(r){return t.getArticle(e.title)}}},[t._v("Посмотреть")])])})),0),t.htmlArticle?r("div",{staticClass:"articles mt-2"},[r("p",{staticClass:"title"},[r("b",[t._v(t._s(t.selectedArticleTitle))])]),r("div",{staticClass:"text",domProps:{innerHTML:t._s(t.htmlArticle)}})]):t._e()])])])},a=[],i=r("1da1"),c=(r("96cf"),r("498a"),r("d3b7"),r("b64b"),{data:function(){return{searchValue:"",selectedArticleTitle:"",htmlArticle:""}},computed:{searchList:function(){return this.$store.getters["getSearchList"]},getTotalPrice:function(){return this.$store.getters["getTotalPrice"]}},methods:{search:function(){""!==this.searchValue.trim()?this.$store.dispatch("search",{text:this.searchValue}):alert("Пустая строка")},getArticle:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.$store.commit("setPreloader",!0),r.next=4,fetch("https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=".concat(t,"&redirects=true"));case 4:return s=r.sent,console.log("https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=".concat(t,"&redirects=true")),r.next=8,s.json();case 8:a=r.sent,i=Object.keys(a.query.pages)[0],e.htmlArticle=a.query.pages[i].extract,e.selectedArticleTitle=t,r.next=17;break;case 14:throw r.prev=14,r.t0=r["catch"](0),r.t0;case 17:return r.prev=17,e.$store.commit("setPreloader",!1),r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[0,14,17,20]])})))()}},watch:{searchList:function(){0==this.searchList.length&&(alert("Ничего не нашлось"),this.searchValue="")}}}),n=c,l=(r("f0fd"),r("2877")),o=Object(l["a"])(n,s,a,!1,null,"3ff89626",null);e["default"]=o.exports},b64b:function(t,e,r){var s=r("23e7"),a=r("7b0b"),i=r("df75"),c=r("d039"),n=c((function(){i(1)}));s({target:"Object",stat:!0,forced:n},{keys:function(t){return i(a(t))}})},f0fd:function(t,e,r){"use strict";r("fdb7")},fdb7:function(t,e,r){}}]);
//# sourceMappingURL=chunk-bbe1ff00.d8debbce.js.map