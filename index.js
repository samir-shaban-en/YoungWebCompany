import{S as M,N as C,a as j,A as K,P as H}from"./assets/vendor-CBzYmfC2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();new M(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[C],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){S(this)},slideChange:function(){S(this)}}});function S(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const W=document.querySelectorAll(".hero-btn");W.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const k="https://books-backend.p.goit.global/books/",Q="https://books-backend.p.goit.global/books/category-list",F="https://books-backend.p.goit.global/books/top-books";async function b(e){try{return await j.get(e)}catch(t){console.error(t)}}async function Y(e){const t=k+e;return await b(t)}async function U(){return await b(Q)}async function z(){return await b(F)}async function J(e){return await b(k+e)}async function G(e){const t=k+"category?category="+e;return await b(t)}const h=document.querySelector(".modal-content");h.innerHTML="";function X(e){Y(e).then(t=>{Z(t)}).catch(t=>console.log(t))}function Z(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};ee(o)}catch(o){console.error("Error loading:",o)}}function ee(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:p,details:N,shipping:O,returns:R}=e,V=`      
        <button class="modal_close-btn">
          <svg width="16" height="16">
            <use href="./img/symbol-defs.svg#icon-x"></use>
          </svg>
        </button>
          <picture class="modal-books_picture" id="bookPicture">
          <img
            class="modal-books_img"
            src="${o}"
            alt=""
          />
        </picture>
        <div class="modal-books_data"
          data-book-id="${t}"
          data-book-price="${a}"
          data-book-title="${s}"
        >
          <h2 class="modal-books_title">${s}</h2>
          <p class="modal-books_author">${n}</p>
          <p class="modal-books_price">$${a}</p>
  
          <form class="book-action-form" id="bookModalActionForm">
            <div class="modal-books_quantity-container"
              data-min-quantity="1" 
              data-max-quantity="999" 
              data-step="1"
            >
              <button class="btn btn-secondary"
                type="button"
                class="btn btn-secondary"
                data-action="decrease"
              >-</button>
              <input
                class="quantity-input"
                id="bookQuantity"
                value="${p}"
                min="1"
              />
              <button class="btn btn-secondary"
                type="button"
                class="btn btn-secondary"
                data-action="increase"
              >+</button>
            </div>
            <div class="modal-books_buttons-container">
              <button 
                class="btn"
                type="button"
                data-action="add-to-cart"
              >Add To Cart</button>
              <button
                type="submit"
                class="btn btn-secondary"
                data-action="buy-now"
              >Buy Now</button>
            </div>
          </form>
  
          <div class="accordion-container">
            <div class="ac">
              <h2 class="ac-header">
                <button type="button" class="ac-trigger">
                  Details
                  <svg class="chevron-icon">
                    <use href="./img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${N}</p>
              </div>
            </div>
  
            <div class="ac">
              <h2 class="ac-header">
                <button type="button" class="ac-trigger">
                  Shipping<svg class="chevron-icon">
                    <use href="./img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${O}</p>
              </div>
            </div>
  
            <div class="ac">
              <h2 class="ac-header">
                <button type="button" class="ac-trigger">
                  Returns<svg class="chevron-icon">
                    <use xlink:href="./img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${R}</p>
              </div>
            </div>
          </div>
        </div>`;h.innerHTML=V,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",ae),document.querySelector(".modal_close-btn").addEventListener("click",v),new K(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const L=document.getElementById("bookModalActionForm");L.addEventListener("submit",x),L.addEventListener("click",P)}function x(e){e.preventDefault(),se()}function P(e){switch(e.target.dataset.action){case"decrease":te(e.target);break;case"increase":oe(e.target);break;case"add-to-cart":ne(e.target);break}}function te(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function oe(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function ne(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function se(){console.log("Thanks for bying")}function _(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",$)),e.forEach(t=>t.addEventListener("keydown",ie))}let q="";function $(e){window.addEventListener("keydown",A),q=this.id,X(q)}function v(){window.removeEventListener("keydown",A),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",x),e.removeEventListener("click",P),h.innerHTML=""}function ae(e){e.currentTarget===e.target&&v()}function A(e){e.code==="Escape"&&v()}function ie(e){e.code==="Enter"&&$()}const i={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};i.categoriesListenRef.addEventListener("click",re);let l=[],u=1,d=window.innerWidth,c=10,f=0;addEventListener("resize",()=>{(window.innerWidth>767&&d<768||window.innerWidth>1439&&d<1440||window.innerWidth<1440&&d>1439||window.innerWidth<768&&d>767)&&location.reload()});d<768?c=10:(d>767&&d<1440,c=24);z().then(e=>{w(e)}).catch(e=>console.log(e));U().then(e=>{g(),ce(e)}).catch(e=>console.log(e));function g(){i.loader.style.display="block"}function I(){i.loader.style.display="none"}function re(e){const t=e.target.getAttribute("data-name");t==="top-books"?(g(),J(t).then(o=>{w(o)}).catch(o=>console.log(o))):(g(),G(t).then(o=>{le(o)}).catch(o=>console.log(o))),de(t)}function ce(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");i.categoriesListRef.insertAdjacentHTML("beforeend",o)}i.booksBoxRef=document.querySelector(".js-list-books");function w(e){i.booksBoxRef.innerHTML="",console.log(e.data),l=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)l.push(o[s])}console.log(l),u=1,f=0,E(),I(),_()}function le(e){if(e.request.responseURL.includes("top-books")){w(e);return}i.booksBoxRef.innerHTML="",l=e.data,console.log(l),u=1,f=0,E(),I(),_()}function E(){let e="";const t=l.slice((u-1)*c,(u-1)*c+c);for(const o of t){let s=ue(o);e+=s,f++}i.booksBoxRef.insertAdjacentHTML("beforeend",e),u*c<l.length?me():pe(),i.totalBooks.textContent=l.length,i.currentBooksShowed.textContent=f}function de(e){const t=i.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function ue(e){return` <li class="item book-info " tabindex="0" >
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function me(){i.btnloadMore.style.display="block"}function pe(){i.btnloadMore.style.display="none"}i.btnloadMore.addEventListener("click",e=>{u+=1,c=5,E()});const r=new M(".swiper",{modules:[C,H],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",T);window.addEventListener("resize",T);function T(){const e=window.innerWidth;e>=1440?(r[0].params.slidesPerView=3,r[0].update(),r[1].params.slidesPerView=3,r[1].update()):e>=768?(r[0].params.slidesPerView=2,r[0].update(),r[1].params.slidesPerView=2,r[1].update(),console.log("h")):e<768&&(r[0].params.slidesPerView=1,r[0].update(),r[1].params.slidesPerView=1,r[1].update())}const D=document.querySelector(".footer-form"),y=document.querySelector(".footer-input"),B=document.querySelector("#errorMessage");let m={email:""};D.addEventListener("input",be);function be(e){e.target.nodeName==="INPUT"&&(m.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(m))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));m.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else m.email="";D.addEventListener("submit",fe);function fe(e){e.preventDefault(),m.email===""||!y.checkValidity()?(y.classList.add("invalid"),B.style.display="block"):(m.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),y.classList.remove("invalid"),B.style.display="none")}
//# sourceMappingURL=index.js.map
