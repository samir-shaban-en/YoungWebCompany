import{S as q,N as B,a as V,A as j,P as K}from"./assets/vendor-CBzYmfC2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();new q(".hero-swiper",{loop:!1,speed:600,grabCursor:!0,slidesPerView:1,spaceBetween:20,modules:[B],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},breakpoints:{768:{speed:700},1440:{speed:800}},on:{init:function(){E(this)},slideChange:function(){E(this)}}});function E(e){const t=document.querySelector(".swiper-btn-prev"),o=document.querySelector(".swiper-btn-next");e.isBeginning?t.classList.add("button-dis"):t.classList.remove("button-dis"),e.isEnd?o.classList.add("button-dis"):o.classList.remove("button-dis")}const W=document.querySelectorAll(".hero-btn");W.forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector(".books");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})});const g="https://books-backend.p.goit.global/books/",H="https://books-backend.p.goit.global/books/category-list",Q="https://books-backend.p.goit.global/books/top-books";async function b(e){try{return await V.get(e)}catch(t){console.error(t)}}async function F(e){const t=g+e;return await b(t)}async function Y(){return await b(H)}async function z(){return await b(Q)}async function U(e){return await b(g+e)}async function J(e){const t=g+"category?category="+e;return await b(t)}const C=document.querySelector(".modal-content");C.innerHTML="";function G(e){F(e).then(t=>{X(t)}).catch(t=>console.log(t))}function X(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};Z(o)}catch(o){console.error("Error loading:",o)}}function Z(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:p,details:D,shipping:N,returns:O}=e,R=`      
        <button class="modal_close-btn">
          <svg width="16" height="16">
            <use xlink:href="./img/symbol-defs.svg#icon-x"></use>
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
                    <use xlink:href="./img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${D}</p>
              </div>
            </div>
  
            <div class="ac">
              <h2 class="ac-header">
                <button type="button" class="ac-trigger">
                  Shipping<svg class="chevron-icon">
                    <use xlink:href="./img/symbol-defs.svg#icon-chevron-up"></use>
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
                  Returns<svg class="chevron-icon">
                    <use xlink:href="./img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${O}</p>
              </div>
            </div>
          </div>
        </div>`;C.innerHTML=R,document.querySelector(".modal_close-btn").addEventListener("click",k),new j(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const w=document.getElementById("bookModalActionForm");w.addEventListener("submit",M),w.addEventListener("click",x)}function M(e){e.preventDefault(),ne()}function x(e){switch(e.target.dataset.action){case"decrease":ee(e.target);break;case"increase":te(e.target);break;case"add-to-cart":oe(e.target);break}}function ee(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function te(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function oe(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function ne(){console.log("Thanks for bying")}function P(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",_)),e.forEach(t=>t.addEventListener("keydown",ae))}let L="";function _(e){window.addEventListener("keydown",$),L=this.id,G(L),document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",se)}function k(){window.removeEventListener("keydown",$),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",M),e.removeEventListener("click",x)}function se(e){e.currentTarget===e.target&&k()}function $(e){e.code==="Escape"&&k()}function ae(e){e.code==="Enter"&&_()}const i={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};i.categoriesListenRef.addEventListener("click",ie);let c=[],d=1,u=window.innerWidth,l=10;addEventListener("resize",()=>{(window.innerWidth>767&&u<768||window.innerWidth>1439&&u<1440||window.innerWidth<1440&&u>1439||window.innerWidth<768&&u>767)&&location.reload()});u<768?l=10:(u>767&&u<1440,l=24);z().then(e=>{h(e)}).catch(e=>console.log(e));Y().then(e=>{y(),re(e)}).catch(e=>console.log(e));function y(){i.loader.style.display="block"}function A(){i.loader.style.display="none"}function ie(e){const t=e.target.getAttribute("data-name");t==="top-books"?(y(),U(t).then(o=>{h(o)}).catch(o=>console.log(o))):(y(),J(t).then(o=>{ce(o)}).catch(o=>console.log(o))),le(t)}function re(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");i.categoriesListRef.insertAdjacentHTML("beforeend",o)}i.booksBoxRef=document.querySelector(".js-list-books");function h(e){i.booksBoxRef.innerHTML="",console.log(e.data),c=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)c.push(o[s])}console.log(c),d=1,v(),A(),P()}function ce(e){if(e.request.responseURL.includes("top-books")){h(e);return}i.booksBoxRef.innerHTML="",c=e.data,console.log(c),d=1,v(),A(),P()}function v(){let e="";const t=c.slice((d-1)*l,(d-1)*l+l);for(const o of t){let s=de(o);e+=s}i.booksBoxRef.insertAdjacentHTML("beforeend",e),d*l<c.length?ue():me(),i.totalBooks.textContent=c.length,i.currentBooksShowed.textContent=d*l>c.length?c.length:l*d}function le(e){const t=i.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function de(e){return` <li class="item book-info modal-open" tabindex="0" id="${e._id}">
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img" loading="lazy">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button">Learn More</button>
</li>`}function ue(){i.btnloadMore.style.display="block"}function me(){i.btnloadMore.style.display="none"}i.btnloadMore.addEventListener("click",e=>{d+=1,v()});const r=new q(".swiper",{modules:[B,K],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",I);window.addEventListener("resize",I);function I(){const e=window.innerWidth;e>=1440?(r[0].params.slidesPerView=3,r[0].update(),r[1].params.slidesPerView=3,r[1].update()):e>=768?(r[0].params.slidesPerView=2,r[0].update(),r[1].params.slidesPerView=2,r[1].update(),console.log("h")):e<768&&(r[0].params.slidesPerView=1,r[0].update(),r[1].params.slidesPerView=1,r[1].update())}const T=document.querySelector(".footer-form"),f=document.querySelector(".footer-input"),S=document.querySelector("#errorMessage");let m={email:""};T.addEventListener("input",pe);function pe(e){e.target.nodeName==="INPUT"&&(m.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(m))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));m.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else m.email="";T.addEventListener("submit",be);function be(e){e.preventDefault(),m.email===""||!f.checkValidity()?(f.classList.add("invalid"),S.style.display="block"):(m.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),f.classList.remove("invalid"),S.style.display="none")}
//# sourceMappingURL=index.js.map
