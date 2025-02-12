import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ allowedRoles }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);
  const role = user?.role;

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  if (allowedRoles.includes(role)) {
    return <Outlet />;
  }

  if (role?.toLowerCase() === 'user') {
    return <Navigate to="/participant/home" replace />;
  } else if (role?.toLowerCase() === 'admin') {
    return <Navigate to="/admin/home" replace />;
  }

  return <Navigate to="/sign-in" />;
};

export default PrivateRoute;
