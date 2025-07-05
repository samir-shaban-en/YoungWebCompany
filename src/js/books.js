import {
  getCategoryBooksByCategory,
  getCategories,
  getTopBooks,
  getCategoryBooks,
} from './books-api';
import { startOpenModal } from './book-modal.js';

const refs = {
  categoriesListenRef: document.querySelector('.js-listener-categories'),
  categoriesListRef: document.querySelector('.js-list-categories'),
  btnAddShopList: document.querySelector('.js-button-addlist'),
  btnloadMore: document.querySelector('.load-more'),
  loader: document.querySelector('.loader'),
  currentBooksShowed: document.querySelector('.current-number-books'),
  totalBooks: document.querySelector('.total-number-books'),
};
refs.categoriesListenRef.addEventListener('click', getName);

let booksData = []; //global
let currentPage = 1;

let currentRenderWidth = window.innerWidth;
let amountRenderedBooks = 10;

addEventListener('resize', () => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
    (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    location.reload();
  }
});

if (currentRenderWidth < 768) {
  amountRenderedBooks = 10;
} else if (currentRenderWidth > 767 && currentRenderWidth < 1440) {
  amountRenderedBooks = 24;
} else {
  amountRenderedBooks = 24;
}

getTopBooks()
  .then(response => {
    markupTopBooks(response);
  })
  .catch(error => console.log(error));

getCategories()
  .then(response => {
    startPreloader();
    makeCategories(response);
  })
  .catch(error => console.log(error));

function startPreloader() {
  refs.loader.style.display = 'block';
}
function stopPreloader() {
  refs.loader.style.display = 'none';
}

function getName(event) {
  const categoryName = event.target.getAttribute('data-name');
  let urlCategory = '';
  if (categoryName === 'top-books') {
    startPreloader();
    getCategoryBooks(categoryName)
      .then(response => {
        markupTopBooks(response);
      })
      .catch(error => console.log(error));
  } else {
    startPreloader();
    getCategoryBooksByCategory(categoryName)
      .then(response => {
        setAllBooksAfterClick(response);
      })
      .catch(error => console.log(error));
  }
  setStatusActive(categoryName);
}

function makeCategories(response) {
  const categoriesArray = response.data;
  const markupCategor = categoriesArray
    .map(
      category =>
        `<li class="item" data-name="${category.list_name}" tabindex="0">${category.list_name}
		</li>`
    )
    .join('');
  refs.categoriesListRef.insertAdjacentHTML('beforeend', markupCategor);
}

refs.booksBoxRef = document.querySelector('.js-list-books');

function markupTopBooks(response) {
  refs.booksBoxRef.innerHTML = '';

  console.log(response.data);
  booksData = [];
  for (const category of response.data) {
    const books = category.books;
    for (let i = 0; i < books.length; i += 1) {
      booksData.push(books[i]);
    }
  }
  console.log(booksData);
  currentPage = 1;
  showBooks();
  stopPreloader();
  startOpenModal();
}

function setAllBooksAfterClick(response) {
  if (response.request.responseURL.includes('top-books')) {
    markupTopBooks(response);
    return;
  }
  refs.booksBoxRef.innerHTML = '';
  booksData = response.data;
  console.log(booksData);
  currentPage = 1;
  showBooks();
  stopPreloader();
  startOpenModal();
}
function showBooks() {
  let sumAllBooks = '';
  const sliceBooks = booksData.slice(
    (currentPage - 1) * amountRenderedBooks,
    (currentPage - 1) * amountRenderedBooks + amountRenderedBooks
  );

  for (const book of sliceBooks) {
    let markupInner = renderBook(book);
    sumAllBooks += markupInner;
  }
  refs.booksBoxRef.insertAdjacentHTML('beforeend', sumAllBooks);
  if (currentPage * amountRenderedBooks < booksData.length) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
  refs.totalBooks.textContent = booksData.length;

  refs.currentBooksShowed.textContent =
    currentPage * amountRenderedBooks > booksData.length
      ? booksData.length
      : amountRenderedBooks * currentPage;
}

function setStatusActive(categoryName) {
  const categoriesChild = refs.categoriesListRef.children;
  for (const catName of categoriesChild) {
    if (categoryName !== null) {
      catName.classList.remove('active');
      if (catName.getAttribute('name') === categoryName) {
        catName.classList.add('active');
      }
    }
  }
}

function renderBook(book) {
  return ` <li class="item book-info modal-open" tabindex="0" id="${book._id}">
	<div class="book-cover">
			 <img src="${book.book_image}" alt="${book.title}" class="img" loading="lazy">
	</div>
  <div class="book-content">
	<p class="subject">${book.title.toLowerCase()}</p>
  <p class="price">$${book.price}</p>
  </div>
	<p class="author">${book.author}</p>
    
    <button class="button">Learn More</button>
</li>`;
}
export function showLoadMoreButton() {
  refs.btnloadMore.style.display = 'block';
}

export function hideLoadMoreButton() {
  refs.btnloadMore.style.display = 'none';
}

refs.btnloadMore.addEventListener('click', event => {
  currentPage += 1;
  showBooks();
});
