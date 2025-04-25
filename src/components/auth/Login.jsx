import React, {useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';
import { AuthContext } from "../../context/AuthContext";
import ToastNotify from '../common/ToastNotify';

export default function Login() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [toast, setToast] = useState({ show: false, message: '', type: 'danger' });

    useEffect(() => {
    }, []);

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await login(credentials.username, credentials.password);
            navigate('/product')
        } catch (err) {
            setToast({ show: true, message: err.message || 'Đăng nhập thất bại!', type: 'danger' });
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: 400 }}>
            {toast.show && <ToastNotify message={toast.message} type={toast.type} />}
            <h2 className="mb-4">Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </div>
    );
}
