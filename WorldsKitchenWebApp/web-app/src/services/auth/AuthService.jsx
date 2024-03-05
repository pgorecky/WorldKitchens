import {postRequest} from "../API_CONFIG";

const LOGIN_ENDPOINT = '/login';
const SIGNUP_ENDPOINT = '/signup';
export const loginRequest = (credentials) => {
    return postRequest(LOGIN_ENDPOINT, credentials)
}

export const signupRequest = (credentials) => {
    return postRequest(SIGNUP_ENDPOINT, credentials)
}