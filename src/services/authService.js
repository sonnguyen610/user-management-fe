import api from '../config/axiosConfig';

export async function login(username, password) {
    try {
        const response = await api.post('/auth/login', { username, password });
        const token = response.data?.data?.token;
        if (!token) {
            throw new Error('token không tồn tại trong response');
        }
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Đăng nhập thất bại';
        throw new Error(message);
    }
}

export function getToken() {
    return localStorage.getItem('token');
}

export function logoutService() {
    localStorage.removeItem('token');
}
