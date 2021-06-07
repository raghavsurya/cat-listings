import React from 'react'
import createAxiosInstance from './axios.config';

const axiosInstance = createAxiosInstance();


export const favouriteCat = async (id: string) => {
    const response = await axiosInstance.post('/favourites', {'image_id': id});
    return response;
}

export const unfavouriteCat = async (id: string) => {
    const response = await axiosInstance.delete(`/favourites/${id}`);
    return response;
}
