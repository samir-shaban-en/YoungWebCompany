import axios from 'axios';

export function getCategoryList() {

    return axios.get("https://books-backend.p.goit.global/books/category-list")
        .then(response => 
            response.data
    )
}


export function getTopBooks() {

    return axios.get("https://books-backend.p.goit.global/books/top-books")
        .then(response => 
            response.data
    )
}

export function getBooksByCategory(query) {

    return axios.get(`https://books-backend.p.goit.global/books/category?category=${query}`)
        .then(response => 
            response.data
    )
}

export function getBooksById(id) {

    return axios.get(`https://books-backend.p.goit.global/books/${id}`)
        .then(response => 
            response.data
    )
}





