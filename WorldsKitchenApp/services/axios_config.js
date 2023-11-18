import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAuthToken = async () => {
    try {
        return await AsyncStorage.getItem('auth_token');
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

axios.defaults.baseURL = 'http://192.168.1.23:8080';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = async (method, url, data) => {
    let headers = {};

    try {
        const authToken = await getAuthToken();
        if (authToken !== null && authToken !== "null") {
            headers = {'Authorization': `Bearer ${authToken}`};
        }
    } catch (error) {
        console.error('Error setting request headers:', error);
    }

    try {
        return await axios({
            method: method,
            url: url,
            headers: headers,
            data: data
        });
    } catch (error) {
        console.error('Error making request:', error);
        throw error;
    }
};