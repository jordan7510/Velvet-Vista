import React, { useEffect } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import img from "../../../assets/images/contactus.jpg"

const ContactUsPage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    
    return (
        <div>
            <Header></Header>

            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-[90vh] lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt="House"
                                    src={img}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="relative flex items-center bg-gray-100">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24 space-y-5">
                                <h2 className="text-2xl text-[#767a81] font-bold sm:text-3xl">
                                Connect with Us: Let's Start a Beautiful Conversation
                                </h2>

                                <p className="text-2xl font-bold text-[#f63e7b]" >+91-6381387364</p>
                                <p className="text-2xl font-bold text-[#f63e7b]" >cgupta7510@gmai.com</p>
                                <p className="mt-2 not-italic">
                                    Rajendra Nagar, Cuttack- 753010, Odisha, India
                                </p>

                                {/* <a
                                    href="#"
                                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                                >
                                    Get in Touch
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer></Footer>
        </div>
    );
};

export default ContactUsPage;