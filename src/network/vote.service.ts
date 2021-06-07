import React from 'react'
import createAxiosInstance from './axios.config';

const axiosInstance = createAxiosInstance();


export const voteCat = async (id: string) => {
    const response = await axiosInstance.post('/votes', {'image_id': id, 'value': 1});
    return response;
}

export const unvoteCat = async (id: string) => {
    const response = await axiosInstance.post('/votes', {'image_id': id, 'value': 0});
    return response;
}