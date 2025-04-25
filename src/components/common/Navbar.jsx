import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/management">Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ship">Ship</Link>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-success ms-auto" onClick={handleLogout}>Đăng xuất</button>
            </div>
        </nav>
    );
}

export default Navbar;
