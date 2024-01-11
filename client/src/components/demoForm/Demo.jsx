import React from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
    return (
        <div className="rounded-lg bg-[#fff8f5] px-3 shadow-lg lg:col-span-3 lg:px-6 lg:py-6">
            <h1 className="text-2xl text-[#f63e7b] font-bold mb-4 text-center">Create Account</h1>
            <form>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 mb-2">
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm"
                            placeholder="First name"
                            type="text"
                            name='firstName'
                        />
                    </div>

                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm"
                            placeholder="Last name"
                            type="text"
                            name='lastName'
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            name='email'
                        />
                    </div>

                    <div>
                        <input
                            className="w-full appearance-none rounded-md border-2 outline-none p-3 text-sm focus:outline-none"
                            placeholder="Phone Number"
                            type="number"

                        />
                    </div>
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm"
                            placeholder="Password"
                            type="password"
                            name='password'
                        />
                    </div>
                    <div>
                        <input
                            className="w-full rounded-md border-2 outline-none p-3 text-sm"
                            placeholder="Confirm password"
                            type="password"
                            name='conPassword'
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="inline-block w-full bg-[#f63e7b] px-5 py-3 font-medium text-white sm:w-full"
                    >
                        Create account
                    </button>
                </div>

                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-600">Or continue with</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current hover:text-[#f63e7b]">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
             
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
                    <Link to={"/login"}>
                        <span className="underline text-gray-800 hover:text-[#f63e7b]"> Login</span>
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default Demo;