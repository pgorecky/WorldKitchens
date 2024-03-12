import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";
axios.defaults.headers.post['Content-Type'] = 'application/json';
const auth_token = 'auth_token';

export const setAuthHeader = async (token) => {
    try {
        await localStorage.setItem(auth_token, token);
    } catch (error) {
        console.error('Error setting auth token: ', error);
    }
}

export const removeAuthHeader = () => {
    try {
        localStorage.removeItem(auth_token);
    } catch (error) {
        console.error('Error removing auth token: ', error);
    }
}

export const getAuthToken = () => {
    try {
        return localStorage.getItem(auth_token);
    } catch (error) {
        console.error('Error getting auth token:', error);
        return null;
    }
};

const request = (method, url, data) => {
    const authToken = getAuthToken();
    const headers = authToken ? {'Authorization': `Bearer ${authToken}`} : {};

    console.log(headers)
    try {
        return axios({
            method,
            url,
            headers,
            data
        });
    } catch (error) {
        throw error;
    }
};

export const postRequest = (url, data) => {
    return request("POST", url, data);
}

export const getRequest = (url) => {
    return request("GET", url, {});
}

export const deleteRequest = (url, data) => {
    return request("DELETE", url, data);
}