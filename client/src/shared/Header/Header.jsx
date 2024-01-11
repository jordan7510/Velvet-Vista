import { useState } from "react";
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

export default function Header() {

    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-[#fff8f5] fixed top-0 z-20 shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">

                <div>
                    <div className="flex items-center justify-between py-2 md:py-2 md:block">
                        <Link to={"/"}>
                            <div className="flex items-center">
                                <img className="h-[60px] w-[100px]" src={logo} alt='logo' />
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        className={`flex-1 justify-self-center md:static absolute duration-300 w-full bg-[#fff8f5] pb-3 mt-4 md:block md:pb-0 md:mt-0 ${navbar ? "top-12 left-0  pl-7" : "-top-[300px]"
                            }`}
                    >
                        <ul className="items-center justify-center  space-y-2 md:flex md:space-x-1 md:space-y-0">
                            <li className="text-gray-600 hover:text-blue-600">
                                <Link to={"/"}>
                                    <p className="flex items-center md:pl-4  mb-1 border-b-2 dark:border-transparent text-black hover:text-[#f63e7b] hover:cursor-pointer">Home</p>
                                </Link>
                            </li>
                            <Link to="/services">
                                <li className="text-gray-600 hover:text-blue-600">
                                    <p className="flex items-center md:pl-4   mb-1 border-b-2 dark:border-transparent text-black hover:text-[#f63e7b] hover:cursor-pointer">Services</p>
                                </li>
                            </Link>

                            <Link to="/about">
                                <li className="text-gray-600 hover:text-blue-600">
                                    <p className="flex items-center md:pl-4   mb-1 border-b-2 dark:border-transparent text-black hover:text-[#f63e7b] hover:cursor-pointer">About</p>
                                </li>
                            </Link>

                            <Link to="/contact-us">
                                <li className="text-gray-600 hover:text-blue-600">
                                    <p className="flex items-center md:pl-4  mb-1 border-b-2 dark:border-transparent text-black hover:text-[#f63e7b] hover:cursor-pointer">Contact us</p>
                                </li>
                            </Link>


                            <li className="text-gray-600 hover:text-blue-600  md:pl-6">
                                <Link to={"/login"}>
                                    <button className="px-4 py-1 font-semibold rounded dark:bg-[#f63e7b] dark:text-white">Log in</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </nav>
    );
}