import{a as Q,A as z,S as Y,N as U,P as J,i as B}from"./assets/vendor--MtLI3sW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();const v=document.getElementById("burger-btn"),w=document.getElementById("navModal"),S=document.getElementById("closeMenu");v==null||v.addEventListener("click",()=>{w.classList.add("open"),v.classList.add("burger-hidden"),document.body.style.overflow="hidden"});S==null||S.addEventListener("click",()=>{w.classList.remove("open"),v.classList.remove("burger-hidden"),document.body.style.overflow="auto"});window.addEventListener("click",e=>{e.target===w&&(w.classList.remove("open"),document.body.style.overflow="auto")});const Z=document.querySelectorAll(".nav-list a");Z.forEach(e=>{e.addEventListener("click",t=>{const o=e.getAttribute("data-link");w.classList.remove("open"),v.classList.remove("burger-hidden"),document.body.style.overflow="auto",setTimeout(()=>{window.location.href=o},200)})});const A="https://books-backend.p.goit.global/books/",G="https://books-backend.p.goit.global/books/category-list",X="https://books-backend.p.goit.global/books/top-books";async function E(e){try{return await Q.get(e)}catch(t){console.error(t)}}async function ee(e){const t=A+e;return await E(t)}async function te(){return await E(G)}async function oe(){return await E(X)}async function ne(e){return await E(A+e)}async function se(e){const t=A+"category?category="+e;return await E(t)}const I=document.querySelector(".modal-content");I.innerHTML="";function ae(e){ee(e).then(t=>{ie(t)}).catch(t=>console.log(t))}function ie(e){const t=e.data;try{const o={bookId:t._id,bookPicture:t.book_image,bookTitle:t.title,bookAuthor:t.author,bookPrice:t.price,bookQuantity:1,details:t.description,shipping:`We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,returns:`You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`};re(o)}catch(o){console.error("Error loading:",o)}}function re(e){const{bookId:t,bookPicture:o,bookTitle:s,bookAuthor:n,bookPrice:a,bookQuantity:l,details:y,shipping:i,returns:d}=e,m=`      
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
        </div>`;I.innerHTML=m,document.querySelector(".modal-books").classList.add("is-open"),document.body.style.overflow="hidden",document.querySelector(".modal").addEventListener("click",me),document.querySelector(".modal_close-btn").addEventListener("click",x),new z(document.querySelector(".modal-books .accordion-container"),{showMultiple:!0,duration:400,collapse:!0});const u=document.getElementById("bookModalActionForm");u.addEventListener("submit",T),u.addEventListener("click",R)}function T(e){e.preventDefault(),ue()}function R(e){switch(e.target.dataset.action){case"decrease":ce(e.target);break;case"increase":le(e.target);break;case"add-to-cart":de(e.target);break}}function ce(e){const t=e.closest("[data-min-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.minQuantity),n=parseInt(o.value);n>s&&(o.value=n-1)}function le(e){const t=e.closest("[data-max-quantity]"),o=t.querySelector(".quantity-input"),s=parseInt(t.dataset.maxQuantity),n=parseInt(o.value);n<s&&(o.value=n+1)}function de(e){const t=e.closest("[data-book-id]"),o=t.dataset.bookId,s=parseInt(t.querySelector(".quantity-input").value);console.log(`Book with ID'${o}' in q-ty '${s}' added to Cart`)}function ue(){console.log("Thanks for bying")}function O(){const e=document.querySelectorAll(".modal-open");e.forEach(t=>t.addEventListener("click",V)),e.forEach(t=>t.addEventListener("keydown",pe))}let D="";function V(e){window.addEventListener("keydown",j),D=this.id,ae(D)}function x(){window.removeEventListener("keydown",j),document.querySelector(".modal-books").classList.remove("is-open"),document.body.style.overflow="";const e=document.getElementById("bookModalActionForm");e.removeEventListener("submit",T),e.removeEventListener("click",R),I.innerHTML=""}function me(e){e.currentTarget===e.target&&x()}function j(e){e.code==="Escape"&&x()}function pe(e){e.code==="Enter"&&V()}const r={categoriesListenRef:document.querySelector(".js-listener-categories"),categoriesListRef:document.querySelector(".js-list-categories"),btnAddShopList:document.querySelector(".js-button-addlist"),btnloadMore:document.querySelector(".load-more"),loader:document.querySelector(".loader"),currentBooksShowed:document.querySelector(".current-number-books"),totalBooks:document.querySelector(".total-number-books")};r.categoriesListenRef.addEventListener("click",M);let f=[],h=1,b=window.innerWidth,p=10,L=0;addEventListener("resize",()=>{(window.innerWidth>767&&b<768||window.innerWidth>1439&&b<1440||window.innerWidth<1440&&b>1439||window.innerWidth<768&&b>767)&&location.reload()});b<768?p=10:(b>767&&b<1440,p=24);oe().then(e=>{$(e)}).catch(e=>console.log(e));te().then(e=>{C(),fe(e)}).catch(e=>console.log(e));function C(){r.loader.style.display="block"}function K(){r.loader.style.display="none"}function M(e){let t=e.target.getAttribute("data-name");t==="top-books"?(C(),ne(t).then(o=>{$(o)}).catch(o=>console.log(o))):(C(),se(t).then(o=>{be(o)}).catch(o=>console.log(o))),ge(t)}function fe(e){const o=e.data.map(s=>`<li class="item" data-name="${s.list_name}" tabindex="0">${s.list_name}
		</li>`).join("");r.categoriesListRef.insertAdjacentHTML("beforeend",o),window.innerWidth<1440&&ye()}function ye(){const e=r.categoriesListRef,t=e.querySelectorAll("li"),o=document.createElement("div");o.className="custom-dropdown";const s=document.createElement("div");s.className="selected",s.textContent="Select Category";const n=document.createElement("ul");n.className="dropdown-list",t.forEach(a=>{const l=document.createElement("li");l.textContent=a.textContent.trim(),l.setAttribute("data-name",a.getAttribute("data-name")),n.appendChild(l)}),o.appendChild(s),o.appendChild(n),e.parentNode.appendChild(o,e),e.style.display="none",s.addEventListener("click",()=>{n.style.display=n.style.display==="block"?"none":"block"}),document.addEventListener("click",a=>{o.contains(a.target)||(n.style.display="none")}),n.addEventListener("click",a=>{a.target.tagName==="LI"&&(s.textContent=a.target.textContent.trim(),a.target.getAttribute("data-name"),M(a),n.style.display="none")}),r.categoriesListenRef.removeEventListener("click",M)}r.booksBoxRef=document.querySelector(".js-list-books");function $(e){r.booksBoxRef.innerHTML="",console.log(e.data),f=[];for(const t of e.data){const o=t.books;for(let s=0;s<o.length;s+=1)f.push(o[s])}console.log(f),h=1,L=0,P(),K(),O()}function be(e){if(e.request.responseURL.includes("top-books")){$(e);return}r.booksBoxRef.innerHTML="",f=e.data,console.log(f),h=1,L=0,P(),K(),O()}function P(){let e="";const t=f.slice((h-1)*p,(h-1)*p+p);for(const o of t){let s=ve(o);e+=s,L++}r.booksBoxRef.insertAdjacentHTML("beforeend",e),h*p<f.length?he():ke(),r.totalBooks.textContent=f.length,r.currentBooksShowed.textContent=L}function ge(e){const t=r.categoriesListRef.children;for(const o of t)e!==null&&(o.classList.remove("active"),o.getAttribute("name")===e&&o.classList.add("active"))}function ve(e){return` <li class="item book-info " tabindex="0" >

			 <img class='book-img' src="${e.book_image}" alt="${e.title}" class="img">

  <div class="book-content">
	<p class="subject">${e.title.toLowerCase()}</p>
  <p class="price">$${e.price}</p>
  </div>
	<p class="author">${e.author}</p>
    
    <button class="button modal-open" id="${e._id}">Learn More</button>
</li>`}function he(){r.btnloadMore.style.display="block"}function ke(){r.btnloadMore.style.display="none"}r.btnloadMore.addEventListener("click",e=>{h+=1,p=4,P()});document.querySelector(".scroll-btn");const c=new Y(".swiper",{modules:[U,J],spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".my-swiper ",type:"bullets"}});window.addEventListener("DOMContentLoaded",W);document.querySelector(".right");document.querySelector(".left");window.addEventListener("resize",W);console.log(c);function W(){const e=window.innerWidth;console.log(e),e>=1440?(c[1].params.slidesPerView=3,c[1].update(),c[2].params.slidesPerView=3,c[2].update()):e>=768?(c[1].params.slidesPerView=2,c[1].update(),c[2].params.slidesPerView=2,c[2].update()):e<768&&(c[1].params.slidesPerView=1,c[1].update(),c[2].params.slidesPerView=1,c[2].update())}const H=document.querySelector(".footer-form"),q=document.querySelector(".footer-input"),N=document.querySelector("#errorMessage");let k={email:""};H.addEventListener("input",we);function we(e){e.target.nodeName==="INPUT"&&(k.email=e.target.value),localStorage.setItem("email-state",JSON.stringify(k))}if(localStorage.getItem("email-state")!==null){let e=JSON.parse(localStorage.getItem("email-state"));k.email=e.email,document.querySelector('[name="footer-input"]').value=e.email}else k.email="";H.addEventListener("submit",Ee);function Ee(e){e.preventDefault(),k.email===""||!q.checkValidity()?(q.classList.add("invalid"),N.style.display="block"):(k.email="",document.querySelector('[name="footer-input"]').value="",localStorage.removeItem("email-state"),q.classList.remove("invalid"),N.style.display="none",B.show({message:"Email submitted successfully!",position:"topRight",backgroundColor:"#59A10D",titleColor:"#fff",messageColor:"#fff",close:!0}))}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("contact-modal"),t=document.getElementById("closeModalBtn"),o=document.querySelectorAll(".open-modal"),s=document.querySelector(".contact-modal-form");if(!s||!e||!t)return;o.forEach(i=>{i.addEventListener("click",d=>{d.preventDefault(),e.style.display="flex",document.body.style.overflow="hidden"})}),t.addEventListener("click",n),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()}),e.addEventListener("click",i=>{i.target===e&&n()});function n(){e.style.display="none",document.body.style.overflow=""}s.addEventListener("submit",function(i){i.preventDefault(),s.querySelectorAll("input, textarea").forEach(F=>F.classList.remove("input-error"));const m=s.querySelector("#name"),u=s.querySelector("#email"),_=s.querySelector("#message");let g=!0;m.value.trim()?l(m.value)||(y(m,"Please enter a valid name"),g=!1):(y(m,"Name is required"),g=!1),u.value.trim()?a(u.value)||(y(u,"Enter a valid email"),g=!1):(y(u,"Email is required"),g=!1),_.value.length>500&&(y(_,"Message is too long (max 500 characters)"),g=!1),g&&(B.success({title:"Success",message:"Form submitted successfully!",position:"topRight",timeout:3e3}),s.reset(),n())});function a(i){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)}function l(i){const d=i.trim(),m=/^[A-Za-zА-Яа-яЁё\s\-]+$/,u=/[aeiouаеёиоуыэюя]/i;return d.length>=2&&m.test(d)&&u.test(d)}function y(i,d){i.classList.add("input-error"),i.placeholder=d,B.error({title:"Error",message:d,position:"topRight",timeout:3e3})}});
//# sourceMappingURL=index.js.map
