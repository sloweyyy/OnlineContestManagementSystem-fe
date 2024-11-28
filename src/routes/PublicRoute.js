import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.user);
    const role = user?.role;

    if (isAuthenticated) {
        if (role?.toLowerCase() === 'user') {
            return <Navigate to="/participant/home" replace />;
        } else if (role?.toLowerCase() === 'admin') {
            return <Navigate to="/admin/home" replace />;
        }
    }

    return children;
};

export default PublicRoute;
