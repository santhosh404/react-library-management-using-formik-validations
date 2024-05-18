import axios from "axios"

const BASE_URL = 'https://66484edb2bb946cf2fa02367.mockapi.io/api/v1'

//Getting all the authors
export const getAllAuthors = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/authors`);
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Getting the single author by id
export const getSingleAuthor = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/authors/${id}`);
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Add the author to db
export const addAuthor = async (payload) => {
    try {
        const response = await axios.post(`${BASE_URL}/authors`, { ...payload });
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Edit the author by id
export const updateAuthor = async (id, payload) => {
    try {
        const response = await axios.put(`${BASE_URL}/authors/${id}`, { ...payload });
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}


//Delete the author by id
export const deleteAuthor = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/authors/${id}`);
        if (response.data) {
            return response.data;
        }
    }
    catch (err) {
        throw err;
    }
}