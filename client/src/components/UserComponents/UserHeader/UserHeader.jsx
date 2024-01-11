import React from 'react';
import { RxAvatar } from "react-icons/rx";
import { Dropdown, DropdownItem } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../../axios-config/axios.config';
import { userSignout } from '../../../redux/user/userSlice';
import Swal from 'sweetalert2';

const UserHeader = () => {
    const { currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleSignout = ()=>{
        axiosInstance.get("/api/auth/signout")
        .then((res)=>{
            if(res.status === 200){
                dispatch(userSignout())
            }
        })
        .catch((error)=>{
            console.log("error logout", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong. Please try again later.",
            });
        })
    }

    console.log("currentUser", currentUser.profilePicture);
    return (
        <div className='h-[10vh] w-full bg-slate-500 flex items-center justify-end px-5'>
            <div>
                <Dropdown
                    label={
                        <span className='flex items-center gap-2 mr-2'>

                                {
                                    currentUser ? (
                                        <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover'></img>
                                    ):(
                                        <RxAvatar className='text-3xl hover:cursor-pointer' />
                                    )
                                }

                                {currentUser ? currentUser.name : null}
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
    );
};

export default UserHeader;