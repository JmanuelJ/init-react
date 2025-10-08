import axios from 'axios';

const shopApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,

});

//interceptors

export { shopApi };