import{a as O,A as R,S as N,N as j,P as K}from"./assets/vendor-D7w5dY3u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const g="https://books-backend.p.goit.global/books/",V="https://books-backend.p.goit.global/books/category-list",W="https://books-backend.p.goit.global/books/top-books";async function b(e){try{return await O.get(e)}catch(t){console.error(t)}}async function H(e){const t=g+e;return await b(t)}async function Q(){return await b(V)}async function F(){return await b(W)}async function Y(e){return await b(g+e)}async function z(e){const t=g+"category?category="+e;return await b(t)}const S=document.querySelector(".modal-content");S.innerHTML="";function U(e){H(e).then(t=>{J(t)}).catch(t=>console.log(t))}function J(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};G(o)}catch(o){console.error("Error loading:",o)}}function G(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:p,details:P,shipping:A,returns:T}=e,D=`      
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
                <p class="ac-text">${P}</p>
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
                <p class="ac-text">${A}</p>
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
                <p class="ac-text">${T}</p>
              </div>
            </div>
          </div>
        </div>`;S.innerHTML=D,document.querySelector(".modal_close-btn").addEventListener("click",k),new R(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const w=document.getElementById("bookModalActionForm");w.addEventListener("submit",q),w.addEventListener("click",B)}function q(e){e.preventDefault(),te()}function B(e){switch(e.target.dataset.action){case"decrease":X(e.target);break;case"increase":Z(e.target);break;case"add-to-cart":ee(e.target);break}}function X(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function Z(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function ee(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function te(){console.log("Thanks for bying")}function M(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",C)),e.forEach(t=>t.addEventListener("keydown",ne))}let E="";function C(e){window.addEventListener("keydown",_),E=this.id,U(E),document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",oe)}function k(){window.removeEventListener("keydown",_),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",q),e.removeEventListener("click",B)}function oe(e){e.currentTarget===e.target&&k()}function _(e){e.code==="Escape"&&k()}function ne(e){e.code==="Enter"&&C()}const i={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};i.categoriesListenRef.addEventListener("click",se);let c=[],d=1,u=window.innerWidth,l=10;addEventListener("resize",()=>{(window.innerWidth>767&&u<768||window.innerWidth>1439&&u<1440||window.innerWidth<1440&&u>1439||window.innerWidth<768&&u>767)&&location.reload()});u<768?l=10:(u>767&&u<1440,l=24);F().then(e=>{h(e)}).catch(e=>console.log(e));Q().then(e=>{y(),ae(e)}).catch(e=>console.log(e));function y(){i.loader.style.display="block"}function $(){i.loader.style.display="none"}function se(e){const t=e.target.getAttribute("data-name");t==="top-books"?(y(),Y(t).then(o=>{h(o)}).catch(o=>console.log(o))):(y(),z(t).then(o=>{ie(o)}).catch(o=>console.log(o))),re(t)}function ae(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");i.categoriesListRef.insertAdjacentHTML("beforeend",o)}i.booksBoxRef=document.querySelector(".js-list-books");function h(e){i.booksBoxRef.innerHTML="",console.log(e.data),c=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)c.push(o[s])}console.log(c),d=1,v(),$(),M()}function ie(e){if(e.request.responseURL.includes("top-books")){h(e);return}i.booksBoxRef.innerHTML="",c=e.data,console.log(c),d=1,v(),$(),M()}function v(){let e="";const t=c.slice((d-1)*l,(d-1)*l+l);for(const o of t){let s=ce(o);e+=s}i.booksBoxRef.insertAdjacentHTML("beforeend",e),d*l<c.length?le():de(),i.totalBooks.textContent=c.length,i.currentBooksShowed.textContent=d*l>c.length?c.length:l*d}function re(e){const t=i.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function ce(e){return` <li class="item book-info modal-open" tabindex="0" id="${e._id}">
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img" loading="lazy">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button">Learn More</button>
</li>`}function le(){i.btnloadMore.style.display="block"}function de(){i.btnloadMore.style.display="none"}i.btnloadMore.addEventListener("click",e=>{d+=1,v()});const r=new N(".swiper",{modules:[j,K],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",x);window.addEventListener("resize",x);function x(){const e=window.innerWidth;e>=1440?(r[0].params.slidesPerView=3,r[0].update(),r[1].params.slidesPerView=3,r[1].update()):e>=768?(r[0].params.slidesPerView=2,r[0].update(),r[1].params.slidesPerView=2,r[1].update(),console.log("h")):e<768&&(r[0].params.slidesPerView=1,r[0].update(),r[1].params.slidesPerView=1,r[1].update())}const I=document.querySelector(".footer-form"),f=document.querySelector(".footer-input"),L=document.querySelector("#errorMessage");let m={email:""};I.addEventListener("input",ue);function ue(e){e.target.nodeName==="INPUT"&&(m.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(m))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));m.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else m.email="";I.addEventListener("submit",me);function me(e){e.preventDefault(),m.email===""||!f.checkValidity()?(f.classList.add("invalid"),L.style.display="block"):(m.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),f.classList.remove("invalid"),L.style.display="none")}
//# sourceMappingURL=index.js.map
