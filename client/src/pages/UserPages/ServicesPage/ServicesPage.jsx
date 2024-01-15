import React, { useEffect, useState } from 'react';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import ServiceCard from '../../../components/ServiceCard/ServiceCard';
// import img from "../../../assets/images/service-1.jpg"
import axiosInstance from '../../../axios-config/axios.config';
import { useSelector } from 'react-redux';

const ServicesPage = () => {


    const [allServices,setAllServices] = useState([])


    useEffect(() => {
        window.scrollTo(0, 0);
    })

    useEffect(() => {
        axiosInstance.get("/api/services/get-by-status")
            .then((res) => {
                if (res.status === 200) {
                    setAllServices(res.data.result)
                    // dispatch(getAllServices(res.data.result))
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    

    // const { allServices } = useSelector((state) => state.services)

    // const [allServices, setAllServices] = useState([])

    // useEffect(() => {
    //     axiosInstance.get("/api/services/get-by-status")
    //         .then((res) => {
    //             if (res.status === 200) {
    //                 setAllServices(res.data.result)
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         })
    // }, [])

    return (
        <div className='bg-[#FFF8F5]'>
            <Header></Header>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="text-center mt-8 mb-20">
                    <h2 className="mb-3 text-center text-3xl font-semibold leading-[1.2] sm:text-4xl md:text-[30px]">
                        What we offer
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {
                        allServices.map((item) => (
                            <ServiceCard
                                key={item?._id}
                                title={item?.serviceTitle}
                                details={item?.serviceDesc}
                                icon={item?.serviceImage}
                            ></ServiceCard>
                        ))
                    }
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ServicesPage;