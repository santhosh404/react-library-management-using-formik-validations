import axios from "axios"

const BASE_URL = 'https://66484edb2bb946cf2fa02367.mockapi.io/api/v1'

//Getting all the books
export const getAllBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Getting the single book by id
export const getSingleBook = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/books/${id}`);
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Add the book to db
export const addBook = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/books`, { ...payload });
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Edit the book by id
export const updateBook = async (id, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/books/${id}`, { ...payload });
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Delete the book by id
export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/books/${id}`);
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}