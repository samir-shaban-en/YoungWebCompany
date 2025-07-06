import{a as j,A as K,S as W,N as H,P as F}from"./assets/vendor-D7w5dY3u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const q="https://books-backend.p.goit.global/books/",Q="https://books-backend.p.goit.global/books/category-list",Y="https://books-backend.p.goit.global/books/top-books";async function v(e){try{return await j.get(e)}catch(t){console.error(t)}}async function U(e){const t=q+e;return await v(t)}async function z(){return await v(Q)}async function J(){return await v(Y)}async function G(e){return await v(q+e)}async function X(e){const t=q+"category?category="+e;return await v(t)}const B=document.querySelector(".modal-content");B.innerHTML="";function Z(e){U(e).then(t=>{ee(t)}).catch(t=>console.log(t))}function ee(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};te(o)}catch(o){console.error("Error loading:",o)}}function te(e){const{bookId:t,bookPicture:o,bookTitle:a,bookAuthor:n,bookPrice:s,bookQuantity:r,details:c,shipping:p,returns:h}=e,f=`      
        <button class="modal_close-btn">
          <svg width="16" height="16">
            <use href="#icon-x"></use>
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
          data-book-price="${s}"
          data-book-title="${a}"
        >
          <h2 class="modal-books_title">${a}</h2>
          <p class="modal-books_author">${n}</p>
          <p class="modal-books_price">$${s}</p>
  
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
                    <use href="#icon-chevron-up"></use>
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
                    <use href="#icon-chevron-up"></use>
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
                    <use href="#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${h}</p>
              </div>
            </div>
          </div>
        </div>`;B.innerHTML=f,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",ie),document.querySelector(".modal_close-btn").addEventListener("click",C),new K(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const g=document.getElementById("bookModalActionForm");g.addEventListener("submit",$),g.addEventListener("click",_)}function $(e){e.preventDefault(),se()}function _(e){switch(e.target.dataset.action){case"decrease":oe(e.target);break;case"increase":ne(e.target);break;case"add-to-cart":ae(e.target);break}}function oe(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),a=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>a&&(o.value=n-1)}function ne(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),a=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<a&&(o.value=n+1)}function ae(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,a=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${a}' added to Cart`)}function se(){console.log("Thanks for bying")}function P(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",D)),e.forEach(t=>t.addEventListener("keydown",re))}let x="";function D(e){window.addEventListener("keydown",N),x=this.id,Z(x)}function C(){window.removeEventListener("keydown",N),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",$),e.removeEventListener("click",_),B.innerHTML=""}function ie(e){e.currentTarget===e.target&&C()}function N(e){e.code==="Escape"&&C()}function re(e){e.code==="Enter"&&D()}const i={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};i.categoriesListenRef.addEventListener("click",S);let u=[],b=1,m=window.innerWidth,d=10,w=0;addEventListener("resize",()=>{(window.innerWidth>767&&m<768||window.innerWidth>1439&&m<1440||window.innerWidth<1440&&m>1439||window.innerWidth<768&&m>767)&&location.reload()});m<768?d=10:(m>767&&m<1440,d=24);J().then(e=>{M(e)}).catch(e=>console.log(e));z().then(e=>{L(),ce(e)}).catch(e=>console.log(e));function L(){i.loader.style.display="block"}function T(){i.loader.style.display="none"}function S(e){let t=e.target.getAttribute("data-name");t==="top-books"?(L(),G(t).then(o=>{M(o)}).catch(o=>console.log(o))):(L(),X(t).then(o=>{de(o)}).catch(o=>console.log(o))),ue(t)}function ce(e){const o=e.data.map(a=>`<li class="item" data-name="${a.list_name}" tabindex="0">${a.list_name}
		</li>`).join("");i.categoriesListRef.insertAdjacentHTML("beforeend",o),window.innerWidth<1060&&le()}function le(){const e=i.categoriesListRef,t=e.querySelectorAll("li"),o=document.createElement("div");o.className="custom-dropdown";const a=document.createElement("div");a.className="selected",a.textContent="Select Category";const n=document.createElement("ul");n.className="dropdown-list",t.forEach(s=>{const r=document.createElement("li");r.textContent=s.textContent.trim(),r.setAttribute("data-name",s.getAttribute("data-name")),n.appendChild(r)}),o.appendChild(a),o.appendChild(n),e.parentNode.insertBefore(o,e),e.style.display="none",a.addEventListener("click",()=>{n.style.display=n.style.display==="block"?"none":"block"}),document.addEventListener("click",s=>{o.contains(s.target)||(n.style.display="none")}),n.addEventListener("click",s=>{s.target.tagName==="LI"&&(a.textContent=s.target.textContent.trim(),s.target.getAttribute("data-name"),S(s),n.style.display="none")}),i.categoriesListenRef.removeEventListener("click",S)}i.booksBoxRef=document.querySelector(".js-list-books");function M(e){i.booksBoxRef.innerHTML="",console.log(e.data),u=[];for(const t of e.data){const o=t.books;for(let a=0;a<o.length;a+=1)u.push(o[a])}console.log(u),b=1,w=0,A(),T(),P()}function de(e){if(e.request.responseURL.includes("top-books")){M(e);return}i.booksBoxRef.innerHTML="",u=e.data,console.log(u),b=1,w=0,A(),T(),P()}function A(){let e="";const t=u.slice((b-1)*d,(b-1)*d+d);for(const o of t){let a=me(o);e+=a,w++}i.booksBoxRef.insertAdjacentHTML("beforeend",e),b*d<u.length?pe():fe(),i.totalBooks.textContent=u.length,i.currentBooksShowed.textContent=w}function ue(e){const t=i.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function me(e){return` <li class="item book-info " tabindex="0" >
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function pe(){i.btnloadMore.style.display="block"}function fe(){i.btnloadMore.style.display="none"}i.btnloadMore.addEventListener("click",e=>{b+=1,d=5,A()});const l=new W(".swiper",{modules:[H,F],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",R);window.addEventListener("resize",R);console.log(l);function R(){const e=window.innerWidth;console.log(e),e>=1440?(l[1].params.slidesPerView=3,l[1].update(),l[2].params.slidesPerView=3,l[2].update()):e>=768?(l[1].params.slidesPerView=2,l[1].update(),l[2].params.slidesPerView=2,l[2].update()):e<768&&(l[1].params.slidesPerView=1,l[1].update(),l[2].params.slidesPerView=1,l[2].update())}const O=document.querySelector(".footer-form"),E=document.querySelector(".footer-input"),I=document.querySelector("#errorMessage");let y={email:""};O.addEventListener("input",be);function be(e){e.target.nodeName==="INPUT"&&(y.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(y))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));y.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else y.email="";O.addEventListener("submit",ye);function ye(e){e.preventDefault(),y.email===""||!E.checkValidity()?(E.classList.add("invalid"),I.style.display="block"):(y.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),E.classList.remove("invalid"),I.style.display="none")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),a=document.querySelector(".modal-form");if(!a)return;o.forEach(c=>{c.addEventListener("click",p=>{p.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",n),document.addEventListener("keydown",c=>{c.key==="Escape"&&n()}),e.addEventListener("click",c=>{c.target===e&&n()});function n(){e.style.display="none",document.body.style.overflow=""}a.addEventListener("submit",function(c){c.preventDefault(),a.querySelectorAll("input, textarea").forEach(V=>V.classList.remove("input-error"));const h=a.querySelector("#name"),f=a.querySelector("#email"),g=a.querySelector("#message");let k=!0;h.value.trim()||(r(h,"Name is required"),k=!1),f.value.trim()?s(f.value)||(r(f,"Enter a valid email"),k=!1):(r(f,"Email is required"),k=!1),g.value.length>500&&(r(g,"Message is too long (max 500 characters)"),k=!1),k&&(alert("Form submitted successfully!"),a.reset(),n())});function s(c){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)}function r(c,p){c.classList.add("input-error"),c.placeholder=p}});
//# sourceMappingURL=index.js.map
