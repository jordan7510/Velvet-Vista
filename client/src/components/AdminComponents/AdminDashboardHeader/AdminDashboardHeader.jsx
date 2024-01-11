import { Dropdown, DropdownItem } from 'flowbite-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../axios-config/axios.config';
import { adminSignOut } from '../../../redux/admin/adminSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const AdminDashboardHeader = () => {
    const { currentAdmin } = useSelector((state) => state.admin)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("currentAdmin", currentAdmin);

    const handleSignout = () => {
        dispatch(adminSignOut())
        navigate("/admin")
    }

    return (
        <header className="bg-slate-600">
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 ">
                <div className="flex items-center sm:justify-between sm:gap-4">
                    {/* <div className="relative hidden sm:block">
                        <label className="sr-only" htmlFor="search"> Search </label>

                        <input
                            className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                            id="search"
                            type="search"
                            placeholder="Search website..."
                        />

                        <button
                            type="button"
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                        >
                            <span className="sr-only">Search</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div> */}

                    <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                        <div className="flex gap-4">
                            {/* <button
                                type="button"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
                            >
                                <span className="sr-only">Search</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button> */}

                            {/* <a
                                href="#"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                            >
                                <span className="sr-only">Academy</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    />
                                </svg>
                            </a> */}

                            <a
                                href="#"
                                className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                            >
                                <span className="sr-only">Notifications</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </a>
                        </div>
                        <Dropdown
                            label={
                                <span className='flex items-center gap-2 mr-2'>

                                    {
                                        currentAdmin ? (
                                            <img src={currentAdmin.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover'></img>
                                        ) : (
                                            <RxAvatar className='text-3xl hover:cursor-pointer' />
                                        )
                                    }

                                    {currentAdmin ? currentAdmin.name : null}
                                </span>
                            }
                            dismissOnClick={false}
                        >
                            {/* <DropdownItem className='hover:text-[#F63E7B]'>Dashboard</DropdownItem>
                            <DropdownItem className='hover:text-[#F63E7B]'>Settings</DropdownItem>
                            <DropdownItem className='hover:text-[#F63E7B]'>Earnings</DropdownItem> */}
                            <DropdownItem onClick={handleSignout} className='hover:text-[#F63E7B]'>Sign out</DropdownItem>
                        </Dropdown>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default AdminDashboardHeader;