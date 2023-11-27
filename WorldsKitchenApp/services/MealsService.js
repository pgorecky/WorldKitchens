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

export const getMealById = async (id) => {
    try {
        const response = await request(
            'GET',
            `/dishes/${id}`,
            {});
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        throw error;
    }
}