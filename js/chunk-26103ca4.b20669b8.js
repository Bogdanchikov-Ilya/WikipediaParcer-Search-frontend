(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26103ca4"],{"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),s=r("577e"),i=r("d039"),c=r("ad6d"),o="toString",u=RegExp.prototype,l=u[o],p=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=o;(p||h)&&n(RegExp.prototype,o,(function(){var t=a(this),e=s(t.source),r=t.flags,n=s(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},8203:function(t,e,r){},9173:function(t,e,r){"use strict";r("8203")},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("form",{staticClass:"flex flex-nowrap",on:{submit:function(e){return e.preventDefault(),t.handleSubmit()}}},[r("label",{staticClass:"sr-only mb-1"},[t._v("Ключевое слово")]),r("div",{staticClass:"form-item d-flex justify-content-between"},[r("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0 w-50",attrs:{id:"inline-form-input-name",placeholder:"Липецк"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.handleSubmit()}}},[t._v("Скопировать")])],1)]),t.time?r("div",{staticClass:"info d-flex flex-column mt-5"},[r("p",{staticClass:"mb-3"},[t._v("Импорт завершен")]),r("ul",[r("li",[t._v("Найдена статья по адресу - "),r("span",[r("a",{attrs:{href:t.url}},[t._v(t._s(t.url))])])]),r("li",[t._v("Время обработки - "),r("span",[t._v(t._s(t.time)+" ms")])]),r("li",[t._v("Размер статьи - "),r("span",[t._v(t._s(t.size)+" Кб")])]),r("li",[t._v("Количество слов - "),r("span",[t._v(t._s(t.wordCounter))])])])]):t._e(),r("hr"),r("table",{staticClass:"table mt-5"},[t._m(0),r("tbody",t._l(t.articles,(function(e){return r("tr",[r("th",[t._v(t._s(e.title))]),r("td",[r("a",{attrs:{href:e.url}},[t._v(t._s(e.url))])]),r("td",[t._v(t._s(e.size)+" Kb")]),r("td",[t._v(t._s(e.count_words))])])})),0)])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("Название статьи")]),r("th",{attrs:{scope:"col"}},[t._v("Ссылка")]),r("th",{attrs:{scope:"col"}},[t._v("Размер статьи")]),r("th",{attrs:{scope:"col"}},[t._v("Количество слов")])])])}],s=r("1da1"),i=(r("96cf"),r("d3b7"),r("498a"),r("ac1f"),r("841c"),r("25f0"),{data:function(){return{searchValue:"",title:"",body:"",url:"",size:"",wordCounter:""}},computed:{articles:function(){return this.$store.getters["articles/getArticles"]},time:function(){return this.$store.getters["articles/getTime"]}},created:function(){this.$store.dispatch("articles/getAll")},methods:{searchWikipedia:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=".concat(t),e.next=3,fetch(r);case 3:if(n=e.sent,n.ok){e.next=6;break}throw Error(n.statusText);case 6:return e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})))()},handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n,a,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.commit("setPreloader",!0),r=t.searchValue,n=r.trim(),e.prev=3,e.next=6,t.searchWikipedia(n);case 6:return a=e.sent,t.title=a.query.search[0].title,t.url="https://ru.wikipedia.org/?curid=".concat(a.query.search[0].pageid),s=a.query.search[0].pageid.toString(),t.size=a.query.search[0].size/1024,t.wordCounter=a.query.search[0].wordcount,e.next=14,t.takeText(a.query.search[0].title);case 14:i=e.sent,c=document.createElement("div"),c.innerHTML=i.query.pages[s].extract,t.body=c.innerText,t.$store.dispatch("articles/create",{title:t.title,body:t.body,url:t.url,size:t.size,wordCounter:t.wordCounter}),a.length<1&&alert("Ничего не найдено!"),e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](3),console.log(e.t0),alert("Ошибка поиска");case 26:t.searchValue="";case 27:case"end":return e.stop()}}),e,null,[[3,22]])})))()},takeText:function(t){return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=".concat(t,"&redirects=true"));case 3:return r=e.sent,console.log("https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&titles=".concat(t,"&redirects=true")),e.next=7,r.json();case 7:return n=e.sent,console.log(n),e.abrupt("return",n);case 12:throw e.prev=12,e.t0=e["catch"](0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}}),c=i,o=(r("9173"),r("2877")),u=Object(o["a"])(c,n,a,!1,null,"3ac12aae",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-26103ca4.b20669b8.js.map