// src/routes/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AuthRoute = ({ component: Component, ...rest }) => {
    const { token } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default AuthRoute;
