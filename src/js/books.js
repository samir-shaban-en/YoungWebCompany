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
let booksShowed = 0;

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
  let categoryName = event.target.getAttribute('data-name');

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

  if (window.innerWidth < 1440) createMobileCategories();
}

function createMobileCategories() {
  const ul = refs.categoriesListRef;
  const liItems = ul.querySelectorAll('li');

  const customDropdown = document.createElement('div');
  customDropdown.className = 'custom-dropdown';

  const selected = document.createElement('div');
  selected.className = 'selected';
  selected.textContent = 'Select Category';

  const dropdownList = document.createElement('ul');
  dropdownList.className = 'dropdown-list';

  liItems.forEach(li => {
    const newLi = document.createElement('li');
    newLi.textContent = li.textContent.trim();
    newLi.setAttribute('data-name', li.getAttribute('data-name'));
    dropdownList.appendChild(newLi);
  });
  customDropdown.appendChild(selected);
  customDropdown.appendChild(dropdownList);

  ul.parentNode.appendChild(customDropdown, ul);

  ul.style.display = 'none';

  selected.addEventListener('click', () => {
    dropdownList.style.display =
      dropdownList.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', e => {
    if (!customDropdown.contains(e.target)) {
      dropdownList.style.display = 'none';
    }
  });

  dropdownList.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
      selected.textContent = e.target.textContent.trim();
      const value = e.target.getAttribute('data-name');
      getName(e);
      dropdownList.style.display = 'none';

      // Здесь можно вызвать функцию, отправить AJAX или использовать значение дальше
    }
  });

  refs.categoriesListenRef.removeEventListener('click', getName);
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

  currentPage = 1;
  booksShowed = 0;
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

  currentPage = 1;
  booksShowed = 0;
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
    booksShowed++;
  }
  refs.booksBoxRef.insertAdjacentHTML('beforeend', sumAllBooks);
  if (currentPage * amountRenderedBooks < booksData.length) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
  refs.totalBooks.textContent = booksData.length;

  refs.currentBooksShowed.textContent = booksShowed;
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
  return ` <li class="item book-info " tabindex="0" >

			 <img class='book-img' src="${book.book_image}" alt="${book.title}" class="img">

  <div class="book-content">
	<p class="subject">${book.title.toLowerCase()}</p>
  <p class="price">$${book.price}</p>
  </div>
	<p class="author">${book.author}</p>
    
    <button class="button modal-open" id="${book._id}">Learn More</button>
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
  amountRenderedBooks = 4;
  showBooks();
});
