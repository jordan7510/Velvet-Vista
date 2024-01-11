import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { ImSpinner3 } from "react-icons/im";
import "./CreateAccount.css"
import OAuth from '../OAauth/OAuth';

const CreateAccount = ({ handleSubmit, showPasswordError, loading }) => {
    return (
        <div className="w-full max-w-md rounded-lg bg-[#fff8f5] px-8 md:px-3 shadow-lg mx-5">
            <h1 className="text-2xl text-[#f63e7b] font-bold mt-4 mb-4 text-center">Create Account</h1>
            <form onSubmit={handleSubmit} className='max-w-[500px] min-w[300px]'>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-2 max-w-lg">
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm focus:border-[#f63e7b]"
                            placeholder="First name"
                            type="text"
                            name='firstName'
                            required
                        />
                    </div>

                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm focus:border-[#f63e7b]"
                            placeholder="Last name"
                            type="text"
                            name='lastName'
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm focus:border-[#f63e7b]"
                            placeholder="Email address"
                            type="email"
                            name='email'
                        />
                    </div>

                    {/* <div>
                        <input
                            className="w-full appearance-none rounded-md border-2 outline-none p-3 text-sm focus:border-[#f63e7b] focus:outline-none"
                            placeholder="Phone Number"
                            name='phone'
                            type="tel"
                            required
                        />
                       
                    </div> */}
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm focus:border-[#f63e7b]"
                            placeholder="Password"
                            type="password"
                            name='password'
                            required
                        />
                        {
                            showPasswordError ? (
                                <p className='text-red-500 text-xs'>Password must have 8 characters, At least one uppercase letter, lowercase letter, one digit & one special character (e.g., !@#$%^&*) .</p>
                            ) : null
                        }
                    </div>
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm focus:border-[#f63e7b]"
                            placeholder="Confirm password"
                            type="password"
                            name='conPassword'
                            required
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full disabled:opacity-80 flex items-center justify-center bg-[#f63e7b] px-5 py-3 font-medium text-white sm:w-full hover:opacity-90"
                    >
                        {
                            loading ? (<ImSpinner3 className='loading-icon' />) : ("Create Account")
                        }
                    </button>
                </div>
            </form>

            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">Or continue with</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <OAuth></OAuth>
            </div>
            <p className=" my-2 text-xs text-center sm:px-6 text-gray-600">Already have an account?
                <Link to={"/login"}>
                    <span className="underline text-gray-800 hover:text-[#f63e7b]"> Login</span>
                </Link>
            </p>

        </div>
    );
};

export default CreateAccount;