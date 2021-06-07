import React from 'react';
import AxiosInstance from './axios.config'
import createAxiosInstance from './axios.config';

const axiosInstance = createAxiosInstance();

type FileUploadProps = {
    file: File 
}

export default async (fileUploadProps: FileUploadProps) => {
        let data = new FormData();
        data.append('file', fileUploadProps.file);
        const response = await axiosInstance.post('/images/upload', data);
        return response;
  }
