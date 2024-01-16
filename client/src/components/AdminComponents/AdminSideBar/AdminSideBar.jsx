import { useState } from "react";
import image from "../../../assets/images/logo.png"

import {
    BsFillHouseDoorFill,
    BsCalendarCheckFill
} from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuFileSpreadsheet } from "react-icons/lu";

import "./AdmiinSideBar.css"



const AdminSideBar = () => {



    return (
        <div className="md:h-screen space-y-2 md:w-72 w-full bg-slate-900 text-gray-800 px-2 pt-2 overflow-hidden">

            <div className="bg-white rounded-md px-2 md:block hidden">
                <h2 className="text-lg font-semibold text-center px-2 py-5">Admin Panel</h2>
            </div>

            <div className="">
                <ul className="pt-2 pb-4 flex flex-col gap-2 text-sm px-1 admin-navlinks">
                    <NavLink to={"/admin/dashboard/home"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><BsFillHouseDoorFill /></span>Home </p>
                        </li>
                    </NavLink>
                    <NavLink to={"/admin/dashboard/manage-service"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><FaBriefcase /></span>services</p>
                        </li>
                    </NavLink>
                    <NavLink to={"/admin/dashboard/appointments"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><BsCalendarCheckFill /></span>Appointments</p>
                        </li>
                    </NavLink>
                    {/* <NavLink to={"/admin/dashboard/manage-customers"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><FaUser /></span>Manage Customers</p>
                        </li>
                    </NavLink> */}
                    <NavLink to={"/admin/dashboard/manage-reviews"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><MdReviews /></span>Reviews</p>
                        </li>
                    </NavLink>

                    <NavLink to={"/admin/dashboard/manage-quotes"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><LuFileSpreadsheet /></span>Quotations</p>
                        </li>
                    </NavLink>

                    {/* <NavLink to={"/admin/dashboard/manage-users"}>
                        <li className=" bg-gray-100 text-gray-900 px-4 py-3 hover:cursor-pointer hover:bg-[#f63e7b] rounded-md hover:text-white">
                            <p className="flex items-center gap-3"><span className="text-xl"><FaUser /></span>Manage Users</p>
                        </li>
                    </NavLink> */}
                </ul>
            </div>

        </div>


    );
};

export default AdminSideBar;