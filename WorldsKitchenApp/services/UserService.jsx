import {getRequest} from "./axios_config";

const MY_PROFILE_DETAILS_ENDPOINT = '/me';
const MY_DISHES_ENDPOINT = '/dishes/my';
const MY_LIKED_DISHES_ENDPOINT = '/dishes/likedDishes';
const MY_RECENT_ACTIVITY_ENDPOINT = '/activity/my';

export const getMyProfileDetails = async () => {
    try {
        const response = await getRequest(MY_PROFILE_DETAILS_ENDPOINT, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching meal details:', error);
        throw error;
    }
};

export const getMyProfileMeals = async () => {
    try {
        const response = await getRequest(MY_DISHES_ENDPOINT, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching meal details:', error);
        throw error;
    }
};

export const getLikedMeals = async () => {
    try {
        const response = await getRequest(MY_LIKED_DISHES_ENDPOINT, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching meal details:', error);
        throw error;
    }
};

export const getMyRecentActivity = async () => {
    try {
        const response = await getRequest(MY_RECENT_ACTIVITY_ENDPOINT, {});
        return response.data;
    } catch (error) {
        console.error('Error fetching meal details:', error);
        throw error;
    }
};