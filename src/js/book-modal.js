import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import { getBookByID } from './books-api';

const modalContainerRef = document.querySelector('.modal-content');
modalContainerRef.innerHTML = '';

function getBookDetails(id) {
  getBookByID(id)
    .then(response => {
      CreateModal(response);
    })
    .catch(error => console.log(error));
}

function CreateModal(response) {
  const book = response.data;
  try {
    const bookObj = {
      bookId: book._id,
      bookPicture: book.book_image,
      bookTitle: book.title,
      bookAuthor: book.author,
      bookPrice: book.price,
      bookQuantity: 1,
      details: book.description,
      shipping: `We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.`,
      returns: `You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition.
                To start a return, please contact our support team — we’ll guide
                you through the process quickly and hassle-free.`,
    };
    bookModalMarkup(bookObj);
  } catch (error) {
    console.error('Error loading:', error);
  }
}

function bookModalMarkup(obj) {
  const {
    bookId,
    bookPicture,
    bookTitle,
    bookAuthor,
    bookPrice,
    bookQuantity,
    details,
    shipping,
    returns,
  } = obj;

  const modalMarkup = `      
        <button class="modal_close-btn">
          <svg width="16" height="16">
            <use href="/img/symbol-defs.svg#icon-x"></use>
          </svg>
        </button>
          <picture class="modal-books_picture" id="bookPicture">
          <img
            class="modal-books_img"
            src="${bookPicture}"
            alt=""
          />
        </picture>
        <div class="modal-books_data"
          data-book-id="${bookId}"
          data-book-price="${bookPrice}"
          data-book-title="${bookTitle}"
        >
          <h2 class="modal-books_title">${bookTitle}</h2>
          <p class="modal-books_author">${bookAuthor}</p>
          <p class="modal-books_price">$${bookPrice}</p>
  
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
                value="${bookQuantity}"
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
                    <use href="/img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${details}</p>
              </div>
            </div>
  
            <div class="ac">
              <h2 class="ac-header">
                <button type="button" class="ac-trigger">
                  Shipping<svg class="chevron-icon">
                    <use href="/img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${shipping}</p>
              </div>
            </div>
  
            <div class="ac">
              <h2 class="ac-header">
                <button type="button" class="ac-trigger">
                  Returns<svg class="chevron-icon">
                    <use xlink:href="/img/symbol-defs.svg#icon-chevron-up"></use>
                  </svg>
                </button>
              </h2>
              <div class="ac-panel">
                <p class="ac-text">${returns}</p>
              </div>
            </div>
          </div>
        </div>`;

  modalContainerRef.innerHTML = modalMarkup;
  document.querySelector('.modal-books').classList.add('is-open');
  document.body.style.overflow = 'hidden';

  document.querySelector('.modal').addEventListener('click', onBackdropClick);
  document
    .querySelector('.modal_close-btn')
    .addEventListener('click', onCloseModal);
  new Accordion(document.querySelector('.modal-books .accordion-container'), {
    showMultiple: true,
    duration: 400,
    collapse: true,
  });
  const form = document.getElementById('bookModalActionForm');
  form.addEventListener('submit', formSubmit);
  form.addEventListener('click', modalButtonsEvents);
}

function formSubmit(event) {
  event.preventDefault();
  buyNow();
}

function modalButtonsEvents(event) {
  const action = event.target.dataset.action;

  switch (action) {
    case 'decrease':
      quantityDecrease(event.target);
      break;
    case 'increase':
      quantityIncrease(event.target);
      break;
    case 'add-to-cart':
      addToCart(event.target);
      break;
  }
}

function quantityDecrease(button) {
  const container = button.closest('[data-min-quantity]');
  const input = container.querySelector('.quantity-input');
  const minQuantity = parseInt(container.dataset.minQuantity);
  const currentValue = parseInt(input.value);

  if (currentValue > minQuantity) input.value = currentValue - 1;
}

function quantityIncrease(button) {
  const container = button.closest('[data-max-quantity]');
  const input = container.querySelector('.quantity-input');
  const maxQuantity = parseInt(container.dataset.maxQuantity);
  const currentValue = parseInt(input.value);

  if (currentValue < maxQuantity) input.value = currentValue + 1;
}

function addToCart(button) {
  const modalData = button.closest('[data-book-id]');
  const bookId = modalData.dataset.bookId;
  const quantity = parseInt(modalData.querySelector('.quantity-input').value);

  console.log(`Book with ID'${bookId}' in q-ty '${quantity}' added to Cart`);
}

function buyNow() {
  console.log('Thanks for bying');
}

export function startOpenModal() {
  const openModalBtn = document.querySelectorAll('.modal-open');
  openModalBtn.forEach(btn => btn.addEventListener('click', onOpenModal));
  openModalBtn.forEach(btn => btn.addEventListener('keydown', enterModal));
}

let id = '';
function onOpenModal(event) {
  window.addEventListener('keydown', onEscKeyPress);

  id = this.id;
  getBookDetails(id);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.querySelector('.modal-books').classList.remove('is-open');
  document.body.style.overflow = '';
  const form = document.getElementById('bookModalActionForm');
  form.removeEventListener('submit', formSubmit);
  form.removeEventListener('click', modalButtonsEvents);
  modalContainerRef.innerHTML = '';
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;
  if (isEscKey) {
    onCloseModal();
  }
}
function enterModal(event) {
  const ENTER_KEY_CODE = 'Enter';
  const isEnterKey = event.code === ENTER_KEY_CODE;
  if (isEnterKey) {
    onOpenModal();
  }
}
