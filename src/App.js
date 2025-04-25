import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import RouteConfig from './routes/RouteConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <RouteConfig />
            </Router>
        </AuthProvider>
    );
}

export default App;
