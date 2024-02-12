import {postRequest} from "./axios_config";

const REGISTER_ENDPOINT = '/register';
const LOGIN_ENDPOINT = '/login';

export const registerRequest = (data) => {
    return postRequest(REGISTER_ENDPOINT, data)
}

export const loginRequest = (data) => {
    return postRequest(LOGIN_ENDPOINT, data)
}