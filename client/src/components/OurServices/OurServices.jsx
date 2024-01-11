import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "../../axios-config/axios.config";
import ServiceCard from "../ServiceCard/ServiceCard";

const OurServices = () => {

    const { allServices } = useSelector((state) => state.services)
    const slicedServices = allServices.slice(0, 6)

    return (
            <div className="max-w-screen-xl my-10 mx-auto p-5 sm:p-10 md:p-8">
                <div className="text-center mb-16">
                    <h2 className="mb-3 text-center text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px]">
                        Our awesome <span className='text-[#F63E7B]'>Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {
                        slicedServices.map((item) => (
                            <ServiceCard
                                key={item?._id}
                                title={item?.serviceTitle}
                                details={item?.serviceDesc}
                                icon={item?.serviceImage}
                            ></ServiceCard>
                        ))
                    }
                </div>

                <div className="text-center mt-16">
                    <Link to="/services" className="bg-[#f63e7b] px-8 py-3 text-lg font-semibold rounded text-white">Explore More</Link>
                </div>
            </div>
      
    );
};

export default OurServices;