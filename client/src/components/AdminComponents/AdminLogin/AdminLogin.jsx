import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axios-config/axios.config';
import { useDispatch, useSelector } from 'react-redux';
import { adminSiginStart, adminSiginSuccess, adminSignFailure } from '../../../redux/admin/adminSlice';
import Spinner from '../../Spinner/Spinner';
import Swal from 'sweetalert2';

const AdminLogin = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.admin)

    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        dispatch(adminSiginStart())
        axiosInstance.post('/api/admin/auth/signin', formData)
            .then((res) => {
                console.log("sign in ", res);
                if (res.status === 200) {
                    console.log("res.data", res.data);
                    if (res.data.isAdmin) {
                        dispatch(adminSiginSuccess(res.data))
                        form.reset();
                        navigate("/admin/dashboard/home")
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "You are not authorised.",
                        });
                        dispatch(adminSignFailure())
                    }

                }
            })
            .catch((error) => {
                dispatch(adminSignFailure())
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.message}`,
                });
                console.error(error);
            })

    }

    return (
        <div className="mx-auto mt-16 max-w-sm p-8 space-y-3 rounded-xl bg-[#fff8f5] text-gray-800 shadow-xl">
            <h1 className="text-2xl mb-6 text-[#f63e7b] font-bold text-center">Admin Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="space-y-1 text-sm">
                    <input required onChange={handleChange} type="text" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none bg-white text-gray-800 focus:border-[#f63e7b]" />
                </div>

                <div className="space-y-1 text-sm">
                    <input required onChange={handleChange} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none bg-white text-gray-800 focus:border-[#f63e7b]" />
                    {/* <div className="flex justify-end text-xs text-gray-600">
                        <a className="hover:text-[#f63e7b]" rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div> */}
                </div>

                <button className="flex flex-col items-center justify-center w-full p-3  rounded-sm text-white bg-[#f63e7b]">
                    {
                        loading ? <Spinner /> : "Login"
                    }
                </button>

            </form>

        </div>
    );
};

export default AdminLogin;