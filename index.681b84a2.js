var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},s=e.parcelRequire8424;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var s=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequire8424=s),s("jeON5");var n=s("2shzp"),r=s("iQIUW");n=s("2shzp");class l{#e="https://books-backend.p.goit.global/books/";getBookById(e){return console.log(`${this.#e}${e}`),n.default.get(`${this.#e}${e}`)}getTopBooks(){return n.default.get(`${this.#e}top-books`)}getCategoryList(){return n.default.get(`${this.#e}categoty-list`)}getBooksByCategory(e){return n.default.get(`${this.#e}category?category=${e}`)}}var a=s("bUb57");const i=document.querySelector(".homepage-books");i.addEventListener("click",(async function(e){e.preventDefault();const{target:t}=e;try{if(!t.classList.contains("js-btn-more"))return;{let e=t.dataset.category.split(" ").join("%20");const{data:o}=await c.getBooksByCategory(e);i.innerHTML=m(o);const{height:s}=i.lastElementChild.getBoundingClientRect();window.scrollBy({top:-s,behavior:"smooth"})}}catch(e){console.error(e),r.Notify.failure("Sorry, there was a server error, please reload the page")}}));const c=new l,d=document.querySelector(".btn-up-scroll");function u(e,t){return`<h2 class="title-theme-book">Best Sellers <span class="last-word-color">Books</span></h2>${e.map((({list_name:e,books:o})=>{const s=`<p class="theme-book">${e}</p>`;if(o.length){return`<div class="best-book-container">${s}<ul class="list-books">${o.splice(0,t).map((({_id:e,book_image:t,title:o,author:s})=>`<li class="item-book" data-id="${e}">\n            <div class="img-owerlay">\n            <img src="${t}" alt="${o}" class="img-book">\n            <div class="owerlay">\n                <p class="owerlay-content">quick view</p>\n            </div>\n            </div>\n            <p class="title-book">${p(o,17)}</p>\n            <p class="author">${p(s,34)}</p>\n            </li>`)).join("")}</ul>\n            <button type="button" class="button-more js-btn-more" data-category="${e}">See more</button></div>`}return'<div class="off-books"><p class="off-books-text">Sorry, there are no books in this category, please choose another category</p></div>'})).join("")}`}async function g(){const e=document.documentElement.scrollWidth;i.classList.add("loader");try{const{data:t}=await c.getTopBooks();if((0,a.countShoppingBook)(JSON.parse(localStorage.getItem("orderedBookID"))),!t.length)return i.classList.remove("loader"),void r.Notify.failure("Sorry, there was a server error, please reload the page");i.innerHTML=u(t,e<768?1:e<1440&&e>=768?3:5),i.classList.remove("loader")}catch(e){console.error(e),r.Notify.failure("Sorry, there was a server error, please reload the page")}}function m(e){if(e.length){const t=e.map((({_id:e,book_image:t,author:o,title:s})=>`<li class="item-book" data-id="${e}">\n        <div class="img-owerlay">\n        <img src="${t}" alt="${s}" class="img-book">\n        <div class="owerlay">\n        <p class="owerlay-content">quick view</p>\n        </div>\n        </div>\n        <p class="title-book">${p(s,17)}</p>\n        <p class="author">${p(o,34)}</p>\n        </li>`)).join("");return`<h2 class="title-theme-book">${function(e){const t=e.split(" ");return`${t.splice(0,t.length-1).join(" ")} <span class="last-word-color">${t.join("")}</span>`}(e[0].list_name)}</h2><ul class="list-books category">${t}</ul>`}return'<div class="off-books">\n        <p class="off-books-text">Sorry, there are no books in this category, please choose another category</p>\n        </div>'}function p(e,t){if(!(e.length>Number(t)))return e;switch(function(e,t){const o=t.lenght;let s=0,n=e.indexOf(subSt);for(;n>=0;)s++,n=e.indexOf(subSt,n+o);return s}(e," ")){case 0:return e.slice(0,Number(t))+"...";case 1:return e.slice(0,Number(t-1))+"...";default:return e.slice(0,Number(t-2))+"..."}}d.addEventListener("click",(function(){wndow.scrollTo({top:0,behavior:"smooth"}),d.classList.add("is-hidden-btn")})),g(),window.addEventListener("scroll",(function(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?d.classList.remove("is-hidden-btn"):d.classList.add("is-hidden-btn")}));const h=document.querySelector(".category-list-box"),y=new l;(async()=>{let e=await async function(){try{return(await n.default.get("https://books-backend.p.goit.global/books/category-list")).data}catch(e){return console.log(e),[]}}();h.innerHTML=function(e){let t='<h3 id="category-list-title" class="category-list-item">All categories</h3>';return e.forEach((e=>{const o=`<p id="${e.list_name}" class="category-list-item">${e.list_name}</p>`;t+=o})),t}(e)})(),h.addEventListener("click",(async function(e){const{target:t}=e;if(!t.classList.contains("category-list-item"))return;{let e=t.id.split(" ").join("%20");if("category-list-title"===e)i.innerHTML="",g();else{i.innerHTML="",i.classList.add("loader");const{data:t}=await y.getBooksByCategory(e);i.classList.remove("loader"),i.innerHTML=m(t);const{height:o}=i.lastElementChild.getBoundingClientRect();window.scrollBy({top:-o,behavior:"smooth"})}}})),s("76jN1"),s("8e037");a=s("bUb57");const b=new l;let k;const f=document.querySelector(".homepage-books"),v=document.querySelector(".back"),L=document.querySelector(".btn-modal-close"),S=document.querySelector(".add"),w=document.querySelector(".remove"),B=document.querySelector(".modal-message"),$={scrollPosition:0,disabledScroll(){$.scrollPosition=window.scrollY,document.body.classList.add("block-scroll"),document.body.style.cssText=`top: -${$.scrollPosition}px;`},enabledScroll(){document.body.classList.remove("block-scroll"),document.body.style.cssText="top: 0",window.scroll({top:$.scrollPosition})}};async function E(e){$.disabledScroll(),document.addEventListener("keydown",(e=>{"Escape"===e.key&&q()}),{once:!0});try{const t=await b.getBookById(e),{author:o,book_image:s,description:n,title:r,buy_links:l}=t.data,a=document.querySelector(".book-img"),i=document.querySelector("#name-book"),c=document.querySelector("#author"),d=document.querySelector("#description"),u=document.querySelector("#amazon"),g=document.querySelector("#apple"),m=document.querySelector("#barnes");a.innerHTML="";const p=`<img src="${s}" alt="${s}" class="img-modal">`;i.textContent=r,c.textContent=o,d.textContent=""===n?"No description":n,u.attributes[0].value=l[0].url,g.attributes[0].value=l[1].url,m.attributes[0].value=l[2].url,a.innerHTML=p,v.classList.toggle("is-hidden");const h=localStorage.getItem("orderedBookID"),y=JSON.parse(h);null!==y&&y.includes(e)?(w.classList.remove("is-hidden"),B.classList.remove("is-hidden")):S.classList.remove("is-hidden")}catch(e){console.error(e),Notify.failure("Sorry, there was a server error, please reload the page")}}function q(){$.enabledScroll(),v.classList.toggle("is-hidden"),w.classList.add("is-hidden"),S.classList.add("is-hidden"),B.classList.add("is-hidden")}f.addEventListener("click",(function(e){"img-book"===e.target.classList[0]||"owerlay"===e.target.classList[0]?(k=e.target.parentElement.parentElement.dataset.id,E(k)):"owerlay-content"===e.target.classList[0]?(k=e.target.parentElement.parentElement.parentElement.dataset.id,E(k)):"title-book"!==e.target.classList[0]&&"author"!==e.target.classList[0]||(k=e.target.parentElement.dataset.id,E(k))})),L.addEventListener("click",q),S.addEventListener("click",(function(){S.classList.add("is-hidden"),w.classList.remove("is-hidden"),B.classList.remove("is-hidden");const e=localStorage.getItem("orderedBookID");let t=JSON.parse(e);null===t&&(t=[]);t.push(k),localStorage.setItem("orderedBookID",JSON.stringify(t)),(0,a.countShoppingBook)(t)})),w.addEventListener("click",(function(){S.classList.remove("is-hidden"),w.classList.add("is-hidden"),B.classList.add("is-hidden");const e=localStorage.getItem("orderedBookID"),t=JSON.parse(e);let o=t.indexOf(k);t.splice(o,1),localStorage.removeItem("orderedBookID"),localStorage.setItem("orderedBookID",JSON.stringify(t)),(0,a.countShoppingBook)(t)})),s("iNkvP"),s("kU5er");const N=document.querySelector(".js-nav-homelink"),_=document.querySelector(".js-mobile-nav-homelink");N.classList.toggle("selected"),_.classList.toggle("mobile-selected");
//# sourceMappingURL=index.681b84a2.js.map
