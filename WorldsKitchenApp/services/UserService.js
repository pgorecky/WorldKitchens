import {request} from "./axios_config";

export const getMyProfileDetails = async () => {
    try {
        const response = await request(
            'GET',
            '/me',
            {});
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        throw error;
    }
};

export const getMyProfileMeals = async () => {
    try {
        const response = await request(
            'GET',
            '/dishes/my',
            {});
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        throw error;
    }
};

export const getLikedMeals = async () => {
    try {
        const response = await request(
            'GET',
            '/dishes/likedDishes',
            {});
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        throw error;
    }
};