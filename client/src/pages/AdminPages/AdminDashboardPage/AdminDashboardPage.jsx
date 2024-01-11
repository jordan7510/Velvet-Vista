import React from 'react';
import AdminHeader from '../../../components/AdminComponents/AdminHeader/AdminHeader';
import AdminSideBar from '../../../components/AdminComponents/AdminSideBar/AdminSideBar';
import { Outlet } from 'react-router-dom';
import { FaRegCircleUser } from "react-icons/fa6";
import AdminDashboardHeader from '../../../components/AdminComponents/AdminDashboardHeader/AdminDashboardHeader';

const AdminDashboardPage = () => {
    return (
        <div className='md:flex '>
            {/* <AdminHeader></AdminHeader> */}
            <AdminSideBar></AdminSideBar>

            <div className='bg-black w-[100%] h-screen overflow-y-scrol'>
                <div className='px-1'>
                    <AdminDashboardHeader></AdminDashboardHeader>
                </div>
                <div className='bg-blue-500 rounded-md m-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;