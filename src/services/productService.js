import api from '../config/axiosConfig';

export async function getAllProduct(params) {
    try {
        const response = await api.post('/products/filter', params);
        return response.data?.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        throw error;
    }
}