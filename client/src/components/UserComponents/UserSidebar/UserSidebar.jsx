import React, { useState } from 'react';
import logo from "../../../assets/images/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import "./UserSidebar.css"
import { BiMenuAltLeft } from "react-icons/bi";
import { IoClose } from "react-icons/io5";



const UserSidebar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showClose,setShowClose] = useState(false)


    const handleToggle = ()=>{
        setShowMenu(!showMenu)
    }

    return (

        <nav className={`w-[250px] duration-300 ease-in-out bg-white h-screen absolute ${showMenu ? "left-[-250px]": "left-0" } md:left-[0] z-20`}>
                <div className='flex justify-end'>
                    <IoClose onClick={handleToggle} className={`text-3xl relative ${showMenu ? "hidden" : null} mt-4 left-[-15px] md:hidden`}/>
                    <BiMenuAltLeft onClick={handleToggle} className={`text-3xl relative ${!showMenu ? "hidden" : null} left-10 mt-4 md:hidden`}/>
                </div>
            <div className='flex items-center justify-center'>
                <img className='h-[80px]' src={logo} alt='logo'></img>
            </div>
            <div className='my-5 px-5 duration-300 ease-in-out '>
                <ul className='px-2 sidebar-link'>
                    <NavLink to="/user/book">
                        <li className='py-3 flex items-center gap-2 text-gray-600 px-4 font-medium hover:text-[#F63E7B] hover:cursor-pointer'><FaShoppingCart />Book</li>
                    </NavLink>
                    <NavLink to="/user/appointments">
                        <li className='py-3 flex items-center gap-2 text-gray-600 px-4 font-medium hover:text-[#F63E7B] hover:cursor-pointer'><GrStorage />Appointments</li>
                    </NavLink>
                    <NavLink to="/user/reviews">
                        <li className='py-3 flex items-center gap-2 text-gray-600 px-4 font-medium hover:text-[#F63E7B] hover:cursor-pointer'><GoCodeReview />Reviews</li>
                    </NavLink>
                    <NavLink to="/user/profile">
                        <li className='py-3 flex items-center gap-2 text-gray-600 px-4 font-medium hover:text-[#F63E7B] hover:cursor-pointer'><GoCodeReview />Profile</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default UserSidebar;