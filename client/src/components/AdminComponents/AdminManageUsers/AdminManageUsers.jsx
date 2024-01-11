import React from 'react';
import ServicesTable from '../ManageServices/ServicesTable/ServicesTable';

const AdminManageUsers = () => {
    return (
        <div className='h-[89vh] overflow-y-scroll bg-white p-5'>
            <div className='flex  items-center justify-between p-4 bg-gray-300 rounded-t-lg'>
                <p className='text-xl font-bold'>Manage services</p>
                <button className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                    Services
                </button>
            </div>
            <ServicesTable></ServicesTable>
        </div>
    );
};

export default AdminManageUsers;