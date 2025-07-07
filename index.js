import{a as H,A as F,S as Q,N as Y,P as U}from"./assets/vendor-DmJSAuM9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const y=document.getElementById("burger-btn"),h=document.getElementById("navModal"),S=document.getElementById("closeMenu");y==null||y.addEventListener("click",()=>{h.classList.add("open"),y.classList.add("burger-hidden"),document.body.style.overflow="hidden"});S==null||S.addEventListener("click",()=>{h.classList.remove("open"),y.classList.remove("burger-hidden"),document.body.style.overflow="auto"});window.addEventListener("click",e=>{e.target===h&&(h.classList.remove("open"),document.body.style.overflow="auto")});const z=document.querySelectorAll(".nav-list a");z.forEach(e=>{e.addEventListener("click",t=>{const o=e.getAttribute("data-link");h.classList.remove("open"),y.classList.remove("burger-hidden"),document.body.style.overflow="auto",setTimeout(()=>{window.location.href=o},200)})});const M="https://books-backend.p.goit.global/books/",J="https://books-backend.p.goit.global/books/category-list",G="https://books-backend.p.goit.global/books/top-books";async function w(e){try{return await H.get(e)}catch(t){console.error(t)}}async function X(e){const t=M+e;return await w(t)}async function Z(){return await w(J)}async function ee(){return await w(G)}async function te(e){return await w(M+e)}async function oe(e){const t=M+"category?category="+e;return await w(t)}const A=document.querySelector(".modal-content");A.innerHTML="";function ne(e){X(e).then(t=>{se(t)}).catch(t=>console.log(t))}function se(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};ae(o)}catch(o){console.error("Error loading:",o)}}function ae(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:r,details:c,shipping:p,returns:E}=e,f=`      
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
                <p class="ac-text">${E}</p>
              </div>
            </div>
          </div>
        </div>`;A.innerHTML=f,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",de),document.querySelector(".modal_close-btn").addEventListener("click",I),new F(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const v=document.getElementById("bookModalActionForm");v.addEventListener("submit",D),v.addEventListener("click",N)}function D(e){e.preventDefault(),le()}function N(e){switch(e.target.dataset.action){case"decrease":ie(e.target);break;case"increase":re(e.target);break;case"add-to-cart":ce(e.target);break}}function ie(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function re(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function ce(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function le(){console.log("Thanks for bying")}function T(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",R)),e.forEach(t=>t.addEventListener("keydown",ue))}let _="";function R(e){window.addEventListener("keydown",O),_=this.id,ne(_)}function I(){window.removeEventListener("keydown",O),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",D),e.removeEventListener("click",N),A.innerHTML=""}function de(e){e.currentTarget===e.target&&I()}function O(e){e.code==="Escape"&&I()}function ue(e){e.code==="Enter"&&R()}const i={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};i.categoriesListenRef.addEventListener("click",C);let u=[],b=1,m=window.innerWidth,d=10,L=0;addEventListener("resize",()=>{(window.innerWidth>767&&m<768||window.innerWidth>1439&&m<1440||window.innerWidth<1440&&m>1439||window.innerWidth<768&&m>767)&&location.reload()});m<768?d=10:(m>767&&m<1440,d=24);ee().then(e=>{x(e)}).catch(e=>console.log(e));Z().then(e=>{B(),me(e)}).catch(e=>console.log(e));function B(){i.loader.style.display="block"}function V(){i.loader.style.display="none"}function C(e){let t=e.target.getAttribute("data-name");t==="top-books"?(B(),te(t).then(o=>{x(o)}).catch(o=>console.log(o))):(B(),oe(t).then(o=>{fe(o)}).catch(o=>console.log(o))),ye(t)}function me(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");i.categoriesListRef.insertAdjacentHTML("beforeend",o),window.innerWidth<1060&&pe()}function pe(){const e=i.categoriesListRef,t=e.querySelectorAll("li"),o=document.createElement("div");o.className="custom-dropdown";const s=document.createElement("div");s.className="selected",s.textContent="Select Category";const n=document.createElement("ul");n.className="dropdown-list",t.forEach(a=>{const r=document.createElement("li");r.textContent=a.textContent.trim(),r.setAttribute("data-name",a.getAttribute("data-name")),n.appendChild(r)}),o.appendChild(s),o.appendChild(n),e.parentNode.insertBefore(o,e),e.style.display="none",s.addEventListener("click",()=>{n.style.display=n.style.display==="block"?"none":"block"}),document.addEventListener("click",a=>{o.contains(a.target)||(n.style.display="none")}),n.addEventListener("click",a=>{a.target.tagName==="LI"&&(s.textContent=a.target.textContent.trim(),a.target.getAttribute("data-name"),C(a),n.style.display="none")}),i.categoriesListenRef.removeEventListener("click",C)}i.booksBoxRef=document.querySelector(".js-list-books");function x(e){i.booksBoxRef.innerHTML="",console.log(e.data),u=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)u.push(o[s])}console.log(u),b=1,L=0,$(),V(),T()}function fe(e){if(e.request.responseURL.includes("top-books")){x(e);return}i.booksBoxRef.innerHTML="",u=e.data,console.log(u),b=1,L=0,$(),V(),T()}function $(){let e="";const t=u.slice((b-1)*d,(b-1)*d+d);for(const o of t){let s=be(o);e+=s,L++}i.booksBoxRef.insertAdjacentHTML("beforeend",e),b*d<u.length?ge():ve(),i.totalBooks.textContent=u.length,i.currentBooksShowed.textContent=L}function ye(e){const t=i.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function be(e){return` <li class="item book-info " tabindex="0" >
	<div class="book-cover">
			 <img src="${e.book_image}" alt="${e.title}" class="img">
	</div>
  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function ge(){i.btnloadMore.style.display="block"}function ve(){i.btnloadMore.style.display="none"}i.btnloadMore.addEventListener("click",e=>{b+=1,d=5,$()});const l=new Q(".swiper",{modules:[Y,U],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",j);window.addEventListener("resize",j);console.log(l);function j(){const e=window.innerWidth;console.log(e),e>=1440?(l[1].params.slidesPerView=3,l[1].update(),l[2].params.slidesPerView=3,l[2].update()):e>=768?(l[1].params.slidesPerView=2,l[1].update(),l[2].params.slidesPerView=2,l[2].update()):e<768&&(l[1].params.slidesPerView=1,l[1].update(),l[2].params.slidesPerView=1,l[2].update())}const K=document.querySelector(".footer-form"),q=document.querySelector(".footer-input"),P=document.querySelector("#errorMessage");let g={email:""};K.addEventListener("input",ke);function ke(e){e.target.nodeName==="INPUT"&&(g.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(g))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));g.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else g.email="";K.addEventListener("submit",he);function he(e){e.preventDefault(),g.email===""||!q.checkValidity()?(q.classList.add("invalid"),P.style.display="block"):(g.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),q.classList.remove("invalid"),P.style.display="none")}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact-modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),s=document.querySelector(".contact-modal-form");if(!s||!e||!t)return;o.forEach(c=>{c.addEventListener("click",p=>{p.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",n),document.addEventListener("keydown",c=>{c.key==="Escape"&&n()}),e.addEventListener("click",c=>{c.target===e&&n()});function n(){e.style.display="none",document.body.style.overflow=""}s.addEventListener("submit",function(c){c.preventDefault(),s.querySelectorAll("input, textarea").forEach(W=>W.classList.remove("input-error"));const E=s.querySelector("#name"),f=s.querySelector("#email"),v=s.querySelector("#message");let k=!0;E.value.trim()||(r(E,"Name is required"),k=!1),f.value.trim()?a(f.value)||(r(f,"Enter a valid email"),k=!1):(r(f,"Email is required"),k=!1),v.value.length>500&&(r(v,"Message is too long (max 500 characters)"),k=!1),k&&(alert("Form submitted successfully!"),s.reset(),n())});function a(c){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)}function r(c,p){c.classList.add("input-error"),c.placeholder=p}});
//# sourceMappingURL=index.js.map
