import{a as V,A as j,S as K,N as H,P as W}from"./assets/vendor-D7w5dY3u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const S="https://books-backend.p.goit.global/books/",F="https://books-backend.p.goit.global/books/category-list",Q="https://books-backend.p.goit.global/books/top-books";async function v(e){try{return await V.get(e)}catch(t){console.error(t)}}async function Y(e){const t=S+e;return await v(t)}async function U(){return await v(F)}async function z(){return await v(Q)}async function J(e){return await v(S+e)}async function G(e){const t=S+"category?category="+e;return await v(t)}const q=document.querySelector(".modal-content");q.innerHTML="";function X(e){Y(e).then(t=>{Z(t)}).catch(t=>console.log(t))}function Z(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};ee(o)}catch(o){console.error("Error loading:",o)}}function ee(e){const{bookId:t,bookPicture:o,bookTitle:n,bookAuthor:s,bookPrice:a,bookQuantity:l,details:i,shipping:p,returns:h}=e,f=`      
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
          data-book-title="${n}"
        >
          <h2 class="modal-books_title">${n}</h2>
          <p class="modal-books_author">${s}</p>
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
                value="${l}"
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
                <p class="ac-text">${i}</p>
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
                <p class="ac-text">${p}</p>
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
                <p class="ac-text">${h}</p>
              </div>
            </div>
          </div>
        </div>`;q.innerHTML=f,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",ae),document.querySelector(".modal_close-btn").addEventListener("click",B),new j(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const g=document.getElementById("bookModalActionForm");g.addEventListener("submit",A),g.addEventListener("click",_)}function A(e){e.preventDefault(),se()}function _(e){switch(e.target.dataset.action){case"decrease":te(e.target);break;case"increase":oe(e.target);break;case"add-to-cart":ne(e.target);break}}function te(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),n=parseInt(t.dataset.minQuantity),s=parseInt(o.value);s>n&&(o.value=s-1)}function oe(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),n=parseInt(t.dataset.maxQuantity),s=parseInt(o.value);s<n&&(o.value=s+1)}function ne(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,n=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${n}' added to Cart`)}function se(){console.log("Thanks for bying")}function x(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",P)),e.forEach(t=>t.addEventListener("keydown",ie))}let I="";function P(e){window.addEventListener("keydown",D),I=this.id,X(I)}function B(){window.removeEventListener("keydown",D),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",A),e.removeEventListener("click",_),q.innerHTML=""}function ae(e){e.currentTarget===e.target&&B()}function D(e){e.code==="Escape"&&B()}function ie(e){e.code==="Enter"&&P()}const r={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};r.categoriesListenRef.addEventListener("click",re);let u=[],b=1,m=window.innerWidth,d=10,w=0;addEventListener("resize",()=>{(window.innerWidth>767&&m<768||window.innerWidth>1439&&m<1440||window.innerWidth<1440&&m>1439||window.innerWidth<768&&m>767)&&location.reload()});m<768?d=10:(m>767&&m<1440,d=24);z().then(e=>{M(e)}).catch(e=>console.log(e));U().then(e=>{L(),ce(e)}).catch(e=>console.log(e));function L(){r.loader.style.display="block"}function T(){r.loader.style.display="none"}function re(e){const t=e.target.getAttribute("data-name");t==="top-books"?(L(),J(t).then(o=>{M(o)}).catch(o=>console.log(o))):(L(),G(t).then(o=>{le(o)}).catch(o=>console.log(o))),de(t)}function ce(e){const o=e.data.map(n=>`<li class="item" data-name="${n.list_name}" tabindex="0">${n.list_name}
		</li>`).join("");r.categoriesListRef.insertAdjacentHTML("beforeend",o)}r.booksBoxRef=document.querySelector(".js-list-books");function M(e){r.booksBoxRef.innerHTML="",console.log(e.data),u=[];for(const t of e.data){const o=t.books;for(let n=0;n<o.length;n+=1)u.push(o[n])}console.log(u),b=1,w=0,C(),T(),x()}function le(e){if(e.request.responseURL.includes("top-books")){M(e);return}r.booksBoxRef.innerHTML="",u=e.data,console.log(u),b=1,w=0,C(),T(),x()}function C(){let e="";const t=u.slice((b-1)*d,(b-1)*d+d);for(const o of t){let n=ue(o);e+=n,w++}r.booksBoxRef.insertAdjacentHTML("beforeend",e),b*d<u.length?me():pe(),r.totalBooks.textContent=u.length,r.currentBooksShowed.textContent=w}function de(e){const t=r.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function ue(e){return` <li class="item book-info " tabindex="0" >
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function me(){r.btnloadMore.style.display="block"}function pe(){r.btnloadMore.style.display="none"}r.btnloadMore.addEventListener("click",e=>{b+=1,d=5,C()});const c=new K(".swiper",{modules:[H,W],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",O);window.addEventListener("resize",O);console.log(c);function O(){const e=window.innerWidth;console.log(e),e>=1440?(c[1].params.slidesPerView=3,c[1].update(),c[2].params.slidesPerView=3,c[2].update()):e>=768?(c[1].params.slidesPerView=2,c[1].update(),c[2].params.slidesPerView=2,c[2].update()):e<768&&(c[1].params.slidesPerView=1,c[1].update(),c[2].params.slidesPerView=1,c[2].update())}const N=document.querySelector(".footer-form"),E=document.querySelector(".footer-input"),$=document.querySelector("#errorMessage");let y={email:""};N.addEventListener("input",fe);function fe(e){e.target.nodeName==="INPUT"&&(y.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(y))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));y.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else y.email="";N.addEventListener("submit",be);function be(e){e.preventDefault(),y.email===""||!E.checkValidity()?(E.classList.add("invalid"),$.style.display="block"):(y.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),E.classList.remove("invalid"),$.style.display="none")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),n=document.querySelector(".modal-form");if(!n)return;o.forEach(i=>{i.addEventListener("click",p=>{p.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",s),document.addEventListener("keydown",i=>{i.key==="Escape"&&s()}),e.addEventListener("click",i=>{i.target===e&&s()});function s(){e.style.display="none",document.body.style.overflow=""}n.addEventListener("submit",function(i){i.preventDefault(),n.querySelectorAll("input, textarea").forEach(R=>R.classList.remove("input-error"));const h=n.querySelector("#name"),f=n.querySelector("#email"),g=n.querySelector("#message");let k=!0;h.value.trim()||(l(h,"Name is required"),k=!1),f.value.trim()?a(f.value)||(l(f,"Enter a valid email"),k=!1):(l(f,"Email is required"),k=!1),g.value.length>500&&(l(g,"Message is too long (max 500 characters)"),k=!1),k&&(alert("Form submitted successfully!"),n.reset(),s())});function a(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}function l(i,p){i.classList.add("input-error"),i.placeholder=p}});
//# sourceMappingURL=index.js.map
