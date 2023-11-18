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