import {getRequest, postRequest} from "./axios_config";

const BASE_MEALS_ENDPOINT = '/dishes'
const MEALS_BY_REGION_ENDPOINT = BASE_MEALS_ENDPOINT + '/byRegion'

export const getMealsByRegion = async (region) => {
    try {
        const response = await getRequest(MEALS_BY_REGION_ENDPOINT + `/${region}`, {})
        return response.data;
    } catch (error) {
        console.error('Error fetching meals by region:', error);
        throw error;
    }
};

export const getMealById = async (id) => {
    try {
        const response = await getRequest(BASE_MEALS_ENDPOINT + `/${id}`, {});
        return response.data;
    } catch (error) {
        console.error('Error meal details:', error);
        throw error;
    }
}

export const checkIfIsLiked = async (id) => {
    try {
        const response = await getRequest(BASE_MEALS_ENDPOINT + `/${id}/isLiked`, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        throw error;
    }
}

export const likeDish = (id) => {
    return postRequest(BASE_MEALS_ENDPOINT + `/${id}/like`, {})
}

export const unlikeDish = (id) => {
    return postRequest(BASE_MEALS_ENDPOINT + `/${id}/unlike`, {})
}