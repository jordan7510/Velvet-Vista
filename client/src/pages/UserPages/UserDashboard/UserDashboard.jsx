import React from 'react';
import UserSidebar from '../../../components/UserComponents/UserSidebar/UserSidebar';
import UserHeader from '../../../components/UserComponents/UserHeader/UserHeader';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
    
    return (
        <div className='flex'>
            <UserSidebar></UserSidebar>
            <div className='w-full md:ml-[250px]'>
                <UserHeader></UserHeader>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default UserDashboard;