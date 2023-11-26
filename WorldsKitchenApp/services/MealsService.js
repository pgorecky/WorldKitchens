import {request} from "./axios_config";

export const getMealsByRegion = async (region) => {
    try {
        const response = await request(
            'GET',
            `/dishes/byRegion/${region}`,
            {});
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        throw error;
    }
};