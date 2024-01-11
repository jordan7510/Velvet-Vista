import React from 'react';
import logo from "../../../assets/images/logo.png"
import { Link } from 'react-router-dom';
const AdminHeader = () => {
    return (
        <header className="py-2 dark:bg-[#fff8f5] dark:text-gray-100">
            <div className="container flex justify-center h-16 mx-auto">
                <div className="flex items-center justify-center gap-5">
                    <Link to="/">
                        <div className="flex items-center p-2">
                            <img className='h-[80px]' src={logo} alt='logo' />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;