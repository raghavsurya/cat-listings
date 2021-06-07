const axios = require('axios').default;

const createAxiosInstance = () => {
    return axios.create({
        baseURL: 'https://api.thecatapi.com/v1',
        headers: { 'x-api-key': '5e83ff11-1625-437e-8e8c-93efffbfc6f4' } //make this as env variable
    });
}


export default createAxiosInstance;