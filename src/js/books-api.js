import axios from 'axios';

const urlBooks = 'https://books-backend.p.goit.global/books/';
const urlCategories = 'https://books-backend.p.goit.global/books/category-list';
const urlTopBooks = 'https://books-backend.p.goit.global/books/top-books';

export async function getBooks(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
  } finally {
  }
}

export async function getBookByID(id) {
  const urlBookByID = urlBooks + id;
  return await getBooks(urlBookByID);
}

export async function getCategories() {
  return await getBooks(urlCategories);
}

export async function getTopBooks() {
  return await getBooks(urlTopBooks);
}

export async function getCategoryBooks(category) {
  return await getBooks(urlBooks + category);
}

export async function getCategoryBooksByCategory(category) {
  const urlCategory = urlBooks + 'category?category=' + category;
  return await getBooks(urlCategory);
}
