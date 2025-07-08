import{a as F,A as Q,S as z,N as Y,P as U,i as B}from"./assets/vendor--MtLI3sW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const v=document.getElementById("burger-btn"),w=document.getElementById("navModal"),S=document.getElementById("closeMenu");v==null||v.addEventListener("click",()=>{w.classList.add("open"),v.classList.add("burger-hidden"),document.body.style.overflow="hidden"});S==null||S.addEventListener("click",()=>{w.classList.remove("open"),v.classList.remove("burger-hidden"),document.body.style.overflow="auto"});window.addEventListener("click",e=>{e.target===w&&(w.classList.remove("open"),document.body.style.overflow="auto")});const J=document.querySelectorAll(".nav-list a");J.forEach(e=>{e.addEventListener("click",t=>{const o=e.getAttribute("data-link");w.classList.remove("open"),v.classList.remove("burger-hidden"),document.body.style.overflow="auto",setTimeout(()=>{window.location.href=o},200)})});const A="https://books-backend.p.goit.global/books/",Z="https://books-backend.p.goit.global/books/category-list",G="https://books-backend.p.goit.global/books/top-books";async function E(e){try{return await F.get(e)}catch(t){console.error(t)}}async function X(e){const t=A+e;return await E(t)}async function ee(){return await E(Z)}async function te(){return await E(G)}async function oe(e){return await E(A+e)}async function ne(e){const t=A+"category?category="+e;return await E(t)}const I=document.querySelector(".modal-content");I.innerHTML="";function se(e){X(e).then(t=>{ae(t)}).catch(t=>console.log(t))}function ae(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};ie(o)}catch(o){console.error("Error loading:",o)}}function ie(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:l,details:y,shipping:i,returns:d}=e,p=`      
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
                    <use href="#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${y}</p>
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
                <p class="ac-text">${i}</p>
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
                <p class="ac-text">${d}</p>
              </div>
            </div>
          </div>
        </div>`;I.innerHTML=p,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",me),document.querySelector(".modal_close-btn").addEventListener("click",x),new Q(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const m=document.getElementById("bookModalActionForm");m.addEventListener("submit",R),m.addEventListener("click",T)}function R(e){e.preventDefault(),de()}function T(e){switch(e.target.dataset.action){case"decrease":re(e.target);break;case"increase":ce(e.target);break;case"add-to-cart":le(e.target);break}}function re(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function ce(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function le(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function de(){console.log("Thanks for bying")}function ue(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",O)),e.forEach(t=>t.addEventListener("keydown",pe))}let D="";function O(e){window.addEventListener("keydown",V),D=this.id,se(D)}function x(){window.removeEventListener("keydown",V),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",R),e.removeEventListener("click",T),I.innerHTML=""}function me(e){e.currentTarget===e.target&&x()}function V(e){e.code==="Escape"&&x()}function pe(e){e.code==="Enter"&&O()}const r={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};r.categoriesListenRef.addEventListener("click",M);let f=[],k=1,b=window.innerWidth,u=10,L=0;addEventListener("resize",()=>{(window.innerWidth>767&&b<768||window.innerWidth>1439&&b<1440||window.innerWidth<1440&&b>1439||window.innerWidth<768&&b>767)&&location.reload()});b<768?u=10:(b>767&&b<1440,u=24);const fe=u;te().then(e=>{$(e)}).catch(e=>console.log(e));ee().then(e=>{C(),ye(e)}).catch(e=>console.log(e));function C(){r.loader.style.display="block"}function j(){r.loader.style.display="none"}function M(e){let t=e.target.getAttribute("data-name");u=fe,t==="top-books"?(C(),oe(t).then(o=>{$(o)}).catch(o=>console.log(o))):(C(),ne(t).then(o=>{ge(o)}).catch(o=>console.log(o))),ve(t)}function ye(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");r.categoriesListRef.insertAdjacentHTML("beforeend",o),window.innerWidth<1440&&be()}function be(){const e=r.categoriesListRef,t=e.querySelectorAll("li"),o=document.createElement("div");o.className="custom-dropdown";const s=document.createElement("div");s.className="selected",s.textContent="Select Category";const n=document.createElement("ul");n.className="dropdown-list",t.forEach(a=>{const l=document.createElement("li");l.textContent=a.textContent.trim(),l.setAttribute("data-name",a.getAttribute("data-name")),n.appendChild(l)}),o.appendChild(s),o.appendChild(n),e.parentNode.appendChild(o,e),e.style.display="none",s.addEventListener("click",()=>{n.style.display=n.style.display==="block"?"none":"block"}),document.addEventListener("click",a=>{o.contains(a.target)||(n.style.display="none")}),n.addEventListener("click",a=>{a.target.tagName==="LI"&&(s.textContent=a.target.textContent.trim(),a.target.getAttribute("data-name"),M(a),n.style.display="none")}),r.categoriesListenRef.removeEventListener("click",M)}r.booksBoxRef=document.querySelector(".js-list-books");function $(e){r.booksBoxRef.innerHTML="",console.log(e.data),f=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)f.push(o[s])}console.log(f),k=1,L=0,_(),j()}function ge(e){if(e.request.responseURL.includes("top-books")){$(e);return}r.booksBoxRef.innerHTML="",f=e.data,console.log(f),k=1,L=0,_(),j()}function _(){let e="";const t=f.slice((k-1)*u,(k-1)*u+u);for(const o of t){let s=ke(o);e+=s,L++}r.booksBoxRef.insertAdjacentHTML("beforeend",e),k*u<f.length?he():we(),r.totalBooks.textContent=f.length,r.currentBooksShowed.textContent=L,ue()}function ve(e){const t=r.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function ke(e){return` <li class="item book-info " tabindex="0" >

			 <img class='book-img' src="${e.book_image}" alt="${e.title}" class="img">

  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function he(){r.btnloadMore.style.display="block"}function we(){r.btnloadMore.style.display="none"}r.btnloadMore.addEventListener("click",e=>{k+=1,u=4,_()});document.querySelector(".scroll-btn");const c=new z(".swiper",{modules:[Y,U],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",K);document.querySelector(".right");document.querySelector(".left");window.addEventListener("resize",K);console.log(c);function K(){const e=window.innerWidth;console.log(e),e>=1440?(c[1].params.slidesPerView=3,c[1].update(),c[2].params.slidesPerView=3,c[2].update()):e>=768?(c[1].params.slidesPerView=2,c[1].update(),c[2].params.slidesPerView=2,c[2].update()):e<768&&(c[1].params.slidesPerView=1,c[1].update(),c[2].params.slidesPerView=1,c[2].update())}const W=document.querySelector(".footer-form"),q=document.querySelector(".footer-input"),N=document.querySelector("#errorMessage");let h={email:""};W.addEventListener("input",Ee);function Ee(e){e.target.nodeName==="INPUT"&&(h.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(h))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));h.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else h.email="";W.addEventListener("submit",Le);function Le(e){e.preventDefault(),h.email===""||!q.checkValidity()?(q.classList.add("invalid"),N.style.display="block"):(h.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),q.classList.remove("invalid"),N.style.display="none",B.show({message:"Email submitted successfully!",position:"topRight",backgroundColor:"#59A10D",titleColor:"#fff",messageColor:"#fff",close:!0}))}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact-modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),s=document.querySelector(".contact-modal-form");if(!s||!e||!t)return;o.forEach(i=>{i.addEventListener("click",d=>{d.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",n),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),e.addEventListener("click",i=>{i.target===e&&n()});function n(){e.style.display="none",document.body.style.overflow=""}s.addEventListener("submit",function(i){i.preventDefault(),s.querySelectorAll("input, textarea").forEach(H=>H.classList.remove("input-error"));const p=s.querySelector("#name"),m=s.querySelector("#email"),P=s.querySelector("#message");let g=!0;p.value.trim()?l(p.value)||(y(p,"Please enter a valid name"),g=!1):(y(p,"Name is required"),g=!1),m.value.trim()?a(m.value)||(y(m,"Enter a valid email"),g=!1):(y(m,"Email is required"),g=!1),P.value.length>500&&(y(P,"Message is too long (max 500 characters)"),g=!1),g&&(B.success({title:"Success",message:"Form submitted successfully!",position:"topRight",timeout:3e3}),s.reset(),n())});function a(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}function l(i){const d=i.trim(),p=/^[A-Za-zА-Яа-яЁё\s\-]+$/,m=/[aeiouаеёиоуыэюя]/i;return d.length>=2&&p.test(d)&&m.test(d)}function y(i,d){i.classList.add("input-error"),i.placeholder=d,B.error({title:"Error",message:d,position:"topRight",timeout:3e3})}});
//# sourceMappingURL=index.js.map
