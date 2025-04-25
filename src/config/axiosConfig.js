import axios from "axios";

const API_URL = "http://localhost:8080/api";

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.warn("Unauthorized: Redirecting to login.");
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                    break;
                case 403:
                    console.warn("Forbidden: Access denied.");
                    alert("Access denied.");
                    break;
                default:
                    console.error(`Unauthorized: ${error.response.status}`);
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default api;
