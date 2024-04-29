!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire8424;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire8424=n),n.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),n.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n("ILISp");var a=n("bpxeT"),s=n("2TvXO"),c=n("dIxxU"),i=(a=n("bpxeT"),s=n("2TvXO"),n("h6c0i")),l=n("8MBJY"),u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){var o=d.default(e,t,"get");return p.default(e,o)};var d=f(n("1UHsN")),p=f(n("ffZzF"));function f(e){return e&&e.__esModule?e:{default:e}}var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=function(e,t,o){m.default(e,t),t.set(e,o)};var h,m=(h=n("5k7tO"))&&h.__esModule?h:{default:h};var v=n("a2hTj"),b=(c=n("dIxxU"),new WeakMap),y=function(){"use strict";function t(){e(l)(this,t),e(g)(this,b,{writable:!0,value:"https://books-backend.p.goit.global/books/"})}return e(v)(t,[{key:"getBookById",value:function(t){return console.log("".concat(e(u)(this,b)).concat(t)),c.default.get("".concat(e(u)(this,b)).concat(t))}},{key:"getTopBooks",value:function(){return c.default.get("".concat(e(u)(this,b),"top-books"))}},{key:"getCategoryList",value:function(){return c.default.get("".concat(e(u)(this,b),"categoty-list"))}},{key:"getBooksByCategory",value:function(t){return c.default.get("".concat(e(u)(this,b),"category?category=").concat(t))}}]),t}(),k=n("i8Q71"),w=document.querySelector(".homepage-books");w.addEventListener("click",(function(e){return T.apply(this,arguments)}));var L=new y,x=document.querySelector(".btn-up-scroll");function S(e,t){var o=e.map((function(e){var o=e.list_name,r=e.books,n='<p class="theme-book">'.concat(o,"</p>");if(r.length){var a=r.splice(0,t).map((function(e){var t=e._id,o=e.book_image,r=e.title,n=e.author;return'<li class="item-book" data-id="'.concat(t,'">\n            <div class="img-owerlay">\n            <img src="').concat(o,'" alt="').concat(r,'" class="img-book">\n            <div class="owerlay">\n                <p class="owerlay-content">quick view</p>\n            </div>\n            </div>\n            <p class="title-book">').concat(O(r,17),'</p>\n            <p class="author">').concat(O(n,34),"</p>\n            </li>")})).join("");return'<div class="best-book-container">'.concat(n,'<ul class="list-books">').concat(a,'</ul>\n            <button type="button" class="button-more js-btn-more" data-category="').concat(o,'">See more</button></div>')}return'<div class="off-books"><p class="off-books-text">Sorry, there are no books in this category, please choose another category</p></div>'})).join("");return'<h2 class="title-theme-book">Best Sellers <span class="last-word-color">Books</span></h2>'.concat(o)}function B(){return E.apply(this,arguments)}function E(){return(E=e(a)(e(s).mark((function t(){var o,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=document.documentElement.scrollWidth,e.prev=1,e.next=4,L.getTopBooks();case 4:if(r=e.sent.data,console.log("data=",r),(0,k.countShoppingBook)(JSON.parse(localStorage.getItem("orderedBookID"))),!r.length){e.next=11;break}w.innerHTML=S(r,o<768?1:o<1440&&o>=768?3:5),w.classList.remove("loader"),e.next=14;break;case 11:return w.classList.remove("loader"),i.Notify.failure("Sorry, there was a server error, please reload the page"),e.abrupt("return");case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0),i.Notify.failure("Sorry, there was a server error, please reload the page");case 20:return e.abrupt("return");case 21:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function _(e){if(e.length){var t=e.map((function(e){var t=e._id,o=e.book_image,r=e.author,n=e.title;return'<li class="item-book" data-id="'.concat(t,'">\n        <div class="img-owerlay">\n        <img src="').concat(o,'" alt="').concat(n,'" class="img-book">\n        <div class="owerlay">\n        <p class="owerlay-content">quick view</p>\n        </div>\n        </div>\n        <p class="title-book">').concat(O(n,17),'</p>\n        <p class="author">').concat(O(r,34),"</p>\n        </li>")})).join("");return'<h2 class="title-theme-book">'.concat((o=e[0].list_name,r=o.split(" "),n=r.splice(0,r.length-1),"".concat(n.join(" "),' <span class="last-word-color">').concat(r.join(""),"</span>")),'</h2><ul class="list-books category">').concat(t,"</ul>")}return'<div class="off-books">\n        <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>\n        </div>';var o,r,n}function T(){return(T=e(a)(e(s).mark((function t(o){var r,n,a,c,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),r=o.target,e.prev=2,r.classList.contains("js-btn-more")){e.next=7;break}return e.abrupt("return");case 7:return n=r.dataset.category.split(" ").join("%20"),e.next=10,L.getBooksByCategory(n);case 10:a=e.sent.data,w.innerHTML=_(a),c=w.lastElementChild.getBoundingClientRect(),l=c.height,window.scrollBy({top:-l,behavior:"smooth"});case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.error(e.t0),i.Notify.failure("Sorry, there was a server error, please reload the page");case 20:case"end":return e.stop()}}),t,null,[[2,16]])})))).apply(this,arguments)}function O(e,t){if(!(e.length>Number(t)))return e;switch(function(e,t){var o=t.lenght,r=0,n=e.indexOf(t);for(;n>=0;)r++,n=e.indexOf(t,n+o);return r}(e," ")){case 0:return e.slice(0,Number(t))+"...";case 1:return e.slice(0,Number(t-1))+"...";default:return e.slice(0,Number(t-2))+"..."}}x.addEventListener("click",(function(){wndow.scrollTo({top:0,behavior:"smooth"}),x.classList.add("is-hidden-btn")})),B(),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?x.classList.remove("is-hidden-btn"):x.classList.add("is-hidden-btn")}));var q=document.querySelector(".category-list-box"),I="https://books-backend.p.goit.global/books/category-list",M=new y;function N(){return j.apply(this,arguments)}function j(){return(j=e(a)(e(s).mark((function t(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.default.get("".concat(I));case 3:return o=e.sent,e.abrupt("return",o.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function C(e){var t='<h3 id="category-list-title" class="category-list-item">All categories</h3>';return e.forEach((function(e){var o='<p id="'.concat(e.list_name,'" class="category-list-item">').concat(e.list_name,"</p>");t+=o})),t}var H,D=(H=e(a)(e(s).mark((function t(){var o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:o=e.sent,q.innerHTML=C(o);case 4:case"end":return e.stop()}}),t)}))),function(){return H.apply(this,arguments)});function P(){return(P=e(a)(e(s).mark((function t(o){var r,n,a,c,i;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=o.target).classList.contains("category-list-item")){e.next=5;break}return e.abrupt("return");case 5:if("category-list-title"!==(n=r.id.split(" ").join("%20"))){e.next=10;break}w.innerHTML="",B(),e.next=19;break;case 10:return w.innerHTML="",w.classList.add("loader"),e.next=14,M.getBooksByCategory(n);case 14:a=e.sent.data,w.classList.remove("loader"),w.innerHTML=_(a),c=w.lastElementChild.getBoundingClientRect(),i=c.height,window.scrollBy({top:-i,behavior:"smooth"});case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}D(),q.addEventListener("click",(function(e){return P.apply(this,arguments)})),n("aEag2"),n("cIzEt");a=n("bpxeT"),s=n("2TvXO"),k=n("i8Q71");var J,U=new y,z=document.querySelector(".homepage-books"),R=document.querySelector(".back"),F=document.querySelector(".btn-modal-close"),X=document.querySelector(".add"),Y=document.querySelector(".remove"),Q=document.querySelector(".modal-message"),W={scrollPosition:0,disabledScroll:function(){W.scrollPosition=window.scrollY,document.body.classList.add("block-scroll"),document.body.style.cssText="top: -".concat(W.scrollPosition,"px;")},enabledScroll:function(){document.body.classList.remove("block-scroll"),document.body.style.cssText="top: 0",window.scroll({top:W.scrollPosition})}};function Z(e){return A.apply(this,arguments)}function A(){return(A=e(a)(e(s).mark((function t(o){var r,n,a,c,i,l,u,d,p,f,g,h,m,v,b,y,k;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W.disabledScroll(),document.addEventListener("keydown",(function(e){"Escape"===e.key&&G()}),{once:!0}),e.prev=2,e.next=5,U.getBookById(o);case 5:r=e.sent,n=r.data,a=n.author,c=n.book_image,i=n.description,l=n.title,u=n.buy_links,d=document.querySelector(".book-img"),p=document.querySelector("#name-book"),f=document.querySelector("#author"),g=document.querySelector("#description"),h=document.querySelector("#amazon"),m=document.querySelector("#apple"),v=document.querySelector("#barnes"),d.innerHTML="",b='<img src="'.concat(c,'" alt="').concat(c,'" class="img-modal">'),p.textContent=l,f.textContent=a,g.textContent=""===i?"No description":i,h.attributes[0].value=u[0].url,m.attributes[0].value=u[1].url,v.attributes[0].value=u[2].url,d.innerHTML=b,R.classList.toggle("is-hidden"),y=localStorage.getItem("orderedBookID"),null!==(k=JSON.parse(y))&&k.includes(o)?(Y.classList.remove("is-hidden"),Q.classList.remove("is-hidden")):X.classList.remove("is-hidden"),e.next=33;break;case 29:e.prev=29,e.t0=e.catch(2),console.error(e.t0),Notify.failure("Sorry, there was a server error, please reload the page");case 33:case"end":return e.stop()}}),t,null,[[2,29]])})))).apply(this,arguments)}function G(){W.enabledScroll(),R.classList.toggle("is-hidden"),Y.classList.add("is-hidden"),X.classList.add("is-hidden"),Q.classList.add("is-hidden")}z.addEventListener("click",(function(e){"img-book"===e.target.classList[0]||"owerlay"===e.target.classList[0]?Z(J=e.target.parentElement.parentElement.dataset.id):"owerlay-content"===e.target.classList[0]?Z(J=e.target.parentElement.parentElement.parentElement.dataset.id):"title-book"!==e.target.classList[0]&&"author"!==e.target.classList[0]||Z(J=e.target.parentElement.dataset.id)})),F.addEventListener("click",G),X.addEventListener("click",(function(){X.classList.add("is-hidden"),Y.classList.remove("is-hidden"),Q.classList.remove("is-hidden");var e=localStorage.getItem("orderedBookID"),t=JSON.parse(e);null===t&&(t=[]);t.push(J),localStorage.setItem("orderedBookID",JSON.stringify(t)),(0,k.countShoppingBook)(t)})),Y.addEventListener("click",(function(){X.classList.remove("is-hidden"),Y.classList.add("is-hidden"),Q.classList.add("is-hidden");var e=localStorage.getItem("orderedBookID"),t=JSON.parse(e),o=t.indexOf(J);t.splice(o,1),localStorage.removeItem("orderedBookID"),localStorage.setItem("orderedBookID",JSON.stringify(t)),(0,k.countShoppingBook)(t)})),n("9haEe"),n("d474f");var K=document.querySelector(".js-nav-homelink"),V=document.querySelector(".js-mobile-nav-homelink");K.classList.toggle("selected"),V.classList.toggle("mobile-selected")}();
//# sourceMappingURL=index.d076e08f.js.map
