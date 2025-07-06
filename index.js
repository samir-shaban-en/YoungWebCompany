import{a as j,A as K,S as W,N as H,P as F}from"./assets/vendor-D7w5dY3u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const q="https://books-backend.p.goit.global/books/",Q="https://books-backend.p.goit.global/books/category-list",Y="https://books-backend.p.goit.global/books/top-books";async function v(e){try{return await j.get(e)}catch(t){console.error(t)}}async function U(e){const t=q+e;return await v(t)}async function z(){return await v(Q)}async function J(){return await v(Y)}async function G(e){return await v(q+e)}async function X(e){const t=q+"category?category="+e;return await v(t)}const B=document.querySelector(".modal-content");B.innerHTML="";function Z(e){U(e).then(t=>{ee(t)}).catch(t=>console.log(t))}function ee(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};te(o)}catch(o){console.error("Error loading:",o)}}function te(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:r,details:c,shipping:p,returns:h}=e,f=`      
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
                value="${r}"
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
                <p class="ac-text">${c}</p>
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
        </div>`;B.innerHTML=f,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",ie),document.querySelector(".modal_close-btn").addEventListener("click",C),new K(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const g=document.getElementById("bookModalActionForm");g.addEventListener("submit",$),g.addEventListener("click",_)}function $(e){e.preventDefault(),ae()}function _(e){switch(e.target.dataset.action){case"decrease":oe(e.target);break;case"increase":ne(e.target);break;case"add-to-cart":se(e.target);break}}function oe(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function ne(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function se(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function ae(){console.log("Thanks for bying")}function P(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",D)),e.forEach(t=>t.addEventListener("keydown",re))}let A="";function D(e){window.addEventListener("keydown",N),A=this.id,Z(A)}function C(){window.removeEventListener("keydown",N),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",$),e.removeEventListener("click",_),B.innerHTML=""}function ie(e){e.currentTarget===e.target&&C()}function N(e){e.code==="Escape"&&C()}function re(e){e.code==="Enter"&&D()}const i={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};i.categoriesListenRef.addEventListener("click",S);let u=[],b=1,m=window.innerWidth,d=10,w=0;addEventListener("resize",()=>{(window.innerWidth>767&&m<768||window.innerWidth>1439&&m<1440||window.innerWidth<1440&&m>1439||window.innerWidth<768&&m>767)&&location.reload()});m<768?d=10:(m>767&&m<1440,d=24);J().then(e=>{M(e)}).catch(e=>console.log(e));z().then(e=>{L(),ce(e)}).catch(e=>console.log(e));function L(){i.loader.style.display="block"}function T(){i.loader.style.display="none"}function S(e){let t=e.target.getAttribute("data-name");t==="top-books"?(L(),G(t).then(o=>{M(o)}).catch(o=>console.log(o))):(L(),X(t).then(o=>{de(o)}).catch(o=>console.log(o))),ue(t)}function ce(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");i.categoriesListRef.insertAdjacentHTML("beforeend",o),window.innerWidth<1060&&le()}function le(){const e=i.categoriesListRef,t=e.querySelectorAll("li"),o=document.createElement("div");o.className="custom-dropdown";const s=document.createElement("div");s.className="selected",s.textContent="Select Category";const n=document.createElement("ul");n.className="dropdown-list",t.forEach(a=>{const r=document.createElement("li");r.textContent=a.textContent.trim(),r.setAttribute("data-name",a.getAttribute("data-name")),n.appendChild(r)}),o.appendChild(s),o.appendChild(n),e.parentNode.insertBefore(o,e),e.style.display="none",s.addEventListener("click",()=>{n.style.display=n.style.display==="block"?"none":"block"}),document.addEventListener("click",a=>{o.contains(a.target)||(n.style.display="none")}),n.addEventListener("click",a=>{a.target.tagName==="LI"&&(s.textContent=a.target.textContent.trim(),a.target.getAttribute("data-name"),S(a),n.style.display="none")}),i.categoriesListenRef.removeEventListener("click",S)}i.booksBoxRef=document.querySelector(".js-list-books");function M(e){i.booksBoxRef.innerHTML="",console.log(e.data),u=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)u.push(o[s])}console.log(u),b=1,w=0,x(),T(),P()}function de(e){if(e.request.responseURL.includes("top-books")){M(e);return}i.booksBoxRef.innerHTML="",u=e.data,console.log(u),b=1,w=0,x(),T(),P()}function x(){let e="";const t=u.slice((b-1)*d,(b-1)*d+d);for(const o of t){let s=me(o);e+=s,w++}i.booksBoxRef.insertAdjacentHTML("beforeend",e),b*d<u.length?pe():fe(),i.totalBooks.textContent=u.length,i.currentBooksShowed.textContent=w}function ue(e){const t=i.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function me(e){return` <li class="item book-info " tabindex="0" >
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function pe(){i.btnloadMore.style.display="block"}function fe(){i.btnloadMore.style.display="none"}i.btnloadMore.addEventListener("click",e=>{b+=1,d=5,x()});const l=new W(".swiper",{modules:[H,F],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",R);window.addEventListener("resize",R);console.log(l);function R(){const e=window.innerWidth;console.log(e),e>=1440?(l[1].params.slidesPerView=3,l[1].update(),l[2].params.slidesPerView=3,l[2].update()):e>=768?(l[1].params.slidesPerView=2,l[1].update(),l[2].params.slidesPerView=2,l[2].update()):e<768&&(l[1].params.slidesPerView=1,l[1].update(),l[2].params.slidesPerView=1,l[2].update())}const O=document.querySelector(".footer-form"),E=document.querySelector(".footer-input"),I=document.querySelector("#errorMessage");let y={email:""};O.addEventListener("input",be);function be(e){e.target.nodeName==="INPUT"&&(y.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(y))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));y.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else y.email="";O.addEventListener("submit",ye);function ye(e){e.preventDefault(),y.email===""||!E.checkValidity()?(E.classList.add("invalid"),I.style.display="block"):(y.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),E.classList.remove("invalid"),I.style.display="none")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),s=document.querySelector(".modal-form");if(!s)return;o.forEach(c=>{c.addEventListener("click",p=>{p.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",n),document.addEventListener("keydown",c=>{c.key==="Escape"&&n()}),e.addEventListener("click",c=>{c.target===e&&n()});function n(){e.style.display="none",document.body.style.overflow=""}s.addEventListener("submit",function(c){c.preventDefault(),s.querySelectorAll("input, textarea").forEach(V=>V.classList.remove("input-error"));const h=s.querySelector("#name"),f=s.querySelector("#email"),g=s.querySelector("#message");let k=!0;h.value.trim()||(r(h,"Name is required"),k=!1),f.value.trim()?a(f.value)||(r(f,"Enter a valid email"),k=!1):(r(f,"Email is required"),k=!1),g.value.length>500&&(r(g,"Message is too long (max 500 characters)"),k=!1),k&&(alert("Form submitted successfully!"),s.reset(),n())});function a(c){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)}function r(c,p){c.classList.add("input-error"),c.placeholder=p}});
//# sourceMappingURL=index.js.map
