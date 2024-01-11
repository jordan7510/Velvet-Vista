import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {

   const { currentAdmin } = useSelector((state) => state.admin)

    return currentAdmin ? children : <Navigate to="/admin" />
};

export default AdminPrivateRoute;