import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import Login from '../components/auth/Login';
import ProductList from '../components/product/ProductList';

export default function RouteConfig() {
    const { token } = useContext(AuthContext);

    // Danh sách route protected
    const protectedRoutes = [
        { path: 'product', element: <ProductList /> }
    ];

    return (
        <Routes>
            {/* Public */}
            <Route path="login" element={<Login />} />

            {token ? (
                // Người dùng đã đăng nhập, hiển thị các protected route
                <>
                    {protectedRoutes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                    {/* Route chính (root) sẽ chuyển hướng đến /product nếu đã đăng nhập */}
                    <Route index element={<Navigate to="product" replace />} />
                </>
            ) : (
                // Nếu chưa đăng nhập, chuyển hướng về trang login khi truy cập vào route bảo vệ
                <Route path="*" element={<Navigate to="/login" replace />} />
            )}

            {/* Catch-all 404 */}
            <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
    );
}
