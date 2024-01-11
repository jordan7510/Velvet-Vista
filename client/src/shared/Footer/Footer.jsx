import React from 'react';
import logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="px-4 pt-10 divide-y bg-[#f63e7b] text-white">
            <div className="container flex flex-col justify-between py-4 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <Link to={"/"} className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex object-contain items-center justify-center">
                            <img className='h-[90px]' src={logo} alt='icon logo'></img>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="uppercase text-white">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                 Features
                            </li>
                            <li>
                                 Integrations
                            </li>
                            <li>
                                 Pricing
                            </li>
                            <li>
                                 FAQ
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracki uppercase text-white">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                 Privacy
                            </li>
                            <li>
                                 Terms of Service
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-white">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                 Public API
                            </li>
                            <li>
                                 Documentation
                            </li>
                            <li>
                                 Guides
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-white">Social media</div>
                        <div className="flex justify-start space-x-3">
                    
                            <a rel="noopener noreferrer" target='_new' href="https://www.linkedin.com/in/cgupta7510" title="Instagram" className="flex items-center p-1">
                                <FaLinkedin className='text-2xl' />
                            </a>
                            <a rel="noopener noreferrer" target='_new' href="https://github.com/jordan7510" title="Instagram" className="flex items-center p-1">
                                <FaGithub className='text-2xl' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="py-6 text-sm text-center">© 2024 Velvet Vista All rights reserved.</div>
        </footer>
    );
};

export default Footer;