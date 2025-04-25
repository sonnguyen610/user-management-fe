import React, { useEffect, useState } from 'react';
import NavBar from '../common/Navbar'
import { getAllProduct } from '../../services/productService';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        try {
            const data = await getAllProduct({});
            setProducts(data?.response);
            setTotalPage(data?.metadata?.totalPage);
        } catch (error) {
            setProducts([]);
        }
    };

    return (
        <div className="container mt-5">
            <NavBar />
            <h2>Danh sách Sản phẩm</h2>
            <div className="row">
            </div>
            {products.length > 0 && totalPage > 0 && (
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => setPage(prev => Math.max(prev - 1, 0))}
                        disabled={page === 0}
                    >
                        Previous
                    </button>

                    <span>Page {page + 1} / {totalPage}</span>

                    <button
                        className="btn btn-outline-primary"
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPage - 1))}
                        disabled={page >= totalPage - 1}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductList;
