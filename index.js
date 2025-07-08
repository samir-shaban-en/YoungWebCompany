import{a as H,A as F,S as Q,N as z,P as Y,i as q}from"./assets/vendor--MtLI3sW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const E=document.getElementById("burger-btn"),h=document.getElementById("navModal"),U=document.getElementById("closeMenu");E.addEventListener("click",()=>{h.classList.add("open"),E.classList.add("burger-hidden"),document.body.style.overflow="hidden"});U.addEventListener("click",()=>{h.classList.remove("open"),E.classList.remove("burger-hidden"),document.body.style.overflow="auto"});window.addEventListener("click",e=>{e.target===h&&(h.classList.remove("open"),document.body.style.overflow="auto")});const J=document.querySelectorAll(".nav-list a");J.forEach(e=>{e.addEventListener("click",t=>{e.getAttribute("data-link"),h.classList.remove("open"),E.classList.remove("burger-hidden"),document.body.style.overflow="auto"})});const M="https://books-backend.p.goit.global/books/",Z="https://books-backend.p.goit.global/books/category-list",G="https://books-backend.p.goit.global/books/top-books";async function w(e){try{return await H.get(e)}catch(t){console.error(t)}}async function X(e){const t=M+e;return await w(t)}async function ee(){return await w(Z)}async function te(){return await w(G)}async function oe(e){return await w(M+e)}async function ne(e){const t=M+"category?category="+e;return await w(t)}const A=document.querySelector(".modal-content");A.innerHTML="";function se(e){X(e).then(t=>{ae(t)}).catch(t=>console.log(t))}function ae(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};ie(o)}catch(o){console.error("Error loading:",o)}}function ie(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:l,details:f,shipping:i,returns:d}=e,p=`      
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
                <p class="ac-text">${f}</p>
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
        </div>`;A.innerHTML=p,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",me),document.querySelector(".modal_close-btn").addEventListener("click",I),new F(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const m=document.getElementById("bookModalActionForm");m.addEventListener("submit",N),m.addEventListener("click",R)}function N(e){e.preventDefault(),de()}function R(e){switch(e.target.dataset.action){case"decrease":re(e.target);break;case"increase":ce(e.target);break;case"add-to-cart":le(e.target);break}}function re(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function ce(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function le(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function de(){console.log("Thanks for bying")}function ue(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",T)),e.forEach(t=>t.addEventListener("keydown",pe))}let P="";function T(e){window.addEventListener("keydown",O),P=this.id,se(P)}function I(){window.removeEventListener("keydown",O),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",N),e.removeEventListener("click",R),A.innerHTML=""}function me(e){e.currentTarget===e.target&&I()}function O(e){e.code==="Escape"&&I()}function pe(e){e.code==="Enter"&&T()}const r={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};r.categoriesListenRef.addEventListener("click",C);let g=[],v=1,y=window.innerWidth,u=10,L=0;addEventListener("resize",()=>{(window.innerWidth>767&&y<768||window.innerWidth>1439&&y<1440||window.innerWidth<1440&&y>1439||window.innerWidth<768&&y>767)&&location.reload()});y<768?u=10:(y>767&&y<1440,u=24);const fe=u;te().then(e=>{x(e)}).catch(e=>console.log(e));ee().then(e=>{B(),ye(e)}).catch(e=>console.log(e));function B(){r.loader.style.display="block"}function V(){r.loader.style.display="none"}function C(e){let t=e.target.getAttribute("data-name");u=fe,t==="top-books"?(B(),oe(t).then(o=>{x(o)}).catch(o=>console.log(o))):(B(),ne(t).then(o=>{ge(o)}).catch(o=>console.log(o))),ve(t)}function ye(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");r.categoriesListRef.insertAdjacentHTML("beforeend",o),window.innerWidth<1440&&be()}function be(){const e=r.categoriesListRef,t=e.querySelectorAll("li"),o=document.createElement("div");o.className="custom-dropdown";const s=document.createElement("div");s.className="selected",s.textContent="Select Category";const n=document.createElement("ul");n.className="dropdown-list",t.forEach(a=>{const l=document.createElement("li");l.textContent=a.textContent.trim(),l.setAttribute("data-name",a.getAttribute("data-name")),n.appendChild(l)}),o.appendChild(s),o.appendChild(n),e.parentNode.appendChild(o,e),e.style.display="none",s.addEventListener("click",()=>{n.style.display=n.style.display==="block"?"none":"block"}),document.addEventListener("click",a=>{o.contains(a.target)||(n.style.display="none")}),n.addEventListener("click",a=>{a.target.tagName==="LI"&&(s.textContent=a.target.textContent.trim(),a.target.getAttribute("data-name"),C(a),n.style.display="none")}),r.categoriesListenRef.removeEventListener("click",C)}r.booksBoxRef=document.querySelector(".js-list-books");function x(e){r.booksBoxRef.innerHTML="",g=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)g.push(o[s])}v=1,L=0,$(),V()}function ge(e){if(e.request.responseURL.includes("top-books")){x(e);return}r.booksBoxRef.innerHTML="",g=e.data,v=1,L=0,$(),V()}function $(){let e="";const t=g.slice((v-1)*u,(v-1)*u+u);for(const o of t){let s=ke(o);e+=s,L++}r.booksBoxRef.insertAdjacentHTML("beforeend",e),v*u<g.length?he():we(),r.totalBooks.textContent=g.length,r.currentBooksShowed.textContent=L,ue()}function ve(e){const t=r.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function ke(e){return` <li class="item book-info " tabindex="0" >

			 <img class='book-img' src="${e.book_image}" alt="${e.title}" class="img">

  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function he(){r.btnloadMore.style.display="block"}function we(){r.btnloadMore.style.display="none"}r.btnloadMore.addEventListener("click",e=>{v+=1,u=4,$()});document.querySelector(".scroll-btn");const c=new Q(".swiper",{modules:[z,Y],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",j);document.querySelector(".right");document.querySelector(".left");window.addEventListener("resize",j);function j(){const e=window.innerWidth;e>=1440?(c[1].params.slidesPerView=3,c[1].update(),c[2].params.slidesPerView=3,c[2].update()):e>=768?(c[1].params.slidesPerView=2,c[1].update(),c[2].params.slidesPerView=2,c[2].update()):e<768&&(c[1].params.slidesPerView=1,c[1].update(),c[2].params.slidesPerView=1,c[2].update())}const K=document.querySelector(".footer-form"),S=document.querySelector(".footer-input"),D=document.querySelector("#errorMessage");let k={email:""};K.addEventListener("input",Ee);function Ee(e){e.target.nodeName==="INPUT"&&(k.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(k))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));k.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else k.email="";K.addEventListener("submit",Le);function Le(e){e.preventDefault(),k.email===""||!S.checkValidity()?(S.classList.add("invalid"),D.style.display="block"):(k.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),S.classList.remove("invalid"),D.style.display="none",q.show({message:"Email submitted successfully!",position:"topRight",backgroundColor:"#59A10D",titleColor:"#fff",messageColor:"#fff",close:!0}))}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact-modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),s=document.querySelector(".contact-modal-form");if(!s||!e||!t)return;o.forEach(i=>{i.addEventListener("click",d=>{d.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",n),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),e.addEventListener("click",i=>{i.target===e&&n()});function n(){e.style.display="none",document.body.style.overflow=""}s.addEventListener("submit",function(i){i.preventDefault(),s.querySelectorAll("input, textarea").forEach(W=>W.classList.remove("input-error"));const p=s.querySelector("#name"),m=s.querySelector("#email"),_=s.querySelector("#message");let b=!0;p.value.trim()?l(p.value)||(f(p,"Please enter a valid name"),b=!1):(f(p,"Name is required"),b=!1),m.value.trim()?a(m.value)||(f(m,"Enter a valid email"),b=!1):(f(m,"Email is required"),b=!1),_.value.length>500&&(f(_,"Message is too long (max 500 characters)"),b=!1),b&&(q.success({title:"Success",message:"Form submitted successfully!",position:"topRight",timeout:3e3}),s.reset(),n())});function a(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}function l(i){const d=i.trim(),p=/^[A-Za-zА-Яа-яЁё\s\-]+$/,m=/[aeiouаеёиоуыэюя]/i;return d.length>=2&&p.test(d)&&m.test(d)}function f(i,d){i.classList.add("input-error"),i.placeholder=d,q.error({title:"Error",message:d,position:"topRight",timeout:3e3})}});
//# sourceMappingURL=index.js.map
