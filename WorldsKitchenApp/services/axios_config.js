import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://192.168.1.23:8080/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = async () => {
    try {
        const authToken = await AsyncStorage.getItem('auth_token');
        return authToken;
    } catch (error) {
        console.error('Error getting auth token:', error);
        return null;
    }
};


export const setAuthHeader = async (token) => {
    try {
        await AsyncStorage.setItem('auth_token', token);
    } catch (error) {
        console.error('Error setting auth token:', error);
    }
};

export const removeAuthHeader = async () => {
    try {
        await AsyncStorage.removeItem('auth_token')
    } catch (error) {
        console.error('Error removing auth token')
    }
}

export const request = async (method, url, data) => {
    const authToken = await getAuthToken();
    const headers = authToken ? {'Authorization': `Bearer ${authToken}`} : {};
    try {
        return await axios({
            method: method,
            url: url,
            headers: headers,
            data: data
        });
    } catch (error) {
        console.error('Error making request:', error, url);
        throw error;
    }
};

export const postRequest = (url: string, data: any) => {
    return request("POST", url, data);
}

export const getRequest = (url: string, data: any) => {
    return request("GET", url, data);
}

export const deleteRequest = (url: string, data: any) => {
    return request("DELETE", url, data);
}