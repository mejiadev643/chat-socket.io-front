import axios from "axios";

const config = {
    baseURL: import.meta.env.VITE_VUE_APP_API_URL + '/api' || 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
};

const instance = axios.create(config);
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async(error) => {
        if (error?.config?.rawResponse) {
            return Promise.reject(error);
          }
        if (error.response.status === 401) {
            console.log('Unauthorized');
        }
        return Promise.reject(error);
    }
);


export default instance;