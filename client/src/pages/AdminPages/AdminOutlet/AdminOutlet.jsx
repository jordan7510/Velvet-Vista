import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminOutlet = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminOutlet;