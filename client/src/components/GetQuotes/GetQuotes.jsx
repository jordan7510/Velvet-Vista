import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axios-config/axios.config';
import TextAreaLimitedWords from '../TextAreaLimitedWords/TextAreaLimitedWords';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const GetQuotes = ({allServices}) => {

    // const [allServices, setAllServices] = useState([])
    // const {allServices} = useSelector((state)=>state.services)

    const getTodayDate=()=> {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

  
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


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.firstName.value +" "+ form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const serviceName = form.serviceName.value;
        const date = form.date.value;
        const serviceTime = form.serviceTime.value;
        const message = form.message.value;



        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please check email pattern.",
            });
            return
        }

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter valid phone number.",
            });
            return
        }

        const payLoad = {
            requestBy: name,
            email: email,
            phone: phone,
            serviceName: serviceName,
            serviceDate:date,
            timeSlot:serviceTime,
            message: message
        }

        console.log("payLoad", payLoad);

        axiosInstance.post("/api/quotes", payLoad)
        .then((res)=>{
            if(res.status === 200){
                form.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your quote has been submitted. We will get back to you soon.",
                    showConfirmButton: false,
                    timer: 3500
                  });
            }
            console.log(res);
        })
        .catch((error)=>{
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.response.data.message}`,
            });
        })

    }



    return (
        <section className="bg-[#fff8f5]" >
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="max-w-xl text-lg">
                        Welcome to Velvet Vista, where beauty meets excellence! Ready to experience personalized beauty services? Fill out the form below with your name, contact details, desired services, and any additional comments. Our dedicated team will swiftly provide you with a tailored quote, bringing you one step closer to a more radiant you. Thank you for choosing Velvet Vista for your beauty needs. We look forward to enhancing your natural beauty with our expert touch!
                        </p>

                        <div className="mt-8">
                            <p className="text-2xl font-bold text-[#f63e7b]" >+91-6381387364</p>
                            <p className="mt-2 not-italic">
                                Rajendra Nagar, Cuttack-753010, Odisha, India
                            </p>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <input
                                        className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                        placeholder="First name"
                                        type="text"
                                        name='firstName'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                        placeholder="Last name"
                                        type="text"
                                        name='lastName'
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        name='email'
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                        placeholder="Phone Number"
                                        type="tel"
                                        name='phone'
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div>
                                    <select required name='serviceName' className="w-full rounded-lg border-2 outline-none p-3 text-sm ">
                                        <option className='p-3 my-2' value="" >Select service</option>
                                        {
                                            allServices?.map((item) => (
                                                <option key={item._id} className='p-3 my-2' value={item.serviceTitle}>{item.serviceTitle}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div>
                                    <input
                                    className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                    type="date"
                                    required
                                    name='date'
                                    min={getTodayDate()}
                                    />
                                </div>
                                
                                <div>
                                    <select required name='serviceTime' className="w-full rounded-lg border-2 outline-none p-3 text-sm">
                                        <option className='p-3 my-2' value="">Select Time-slot</option>
                                        <option className='p-3 my-2' value="10am - 11am">10am - 11am</option>
                                        <option className='p-3 my-2' value="11am - 12am">11am - 12am</option>
                                        <option className='p-3 my-2' value="12am - 1pm">12am - 1pm</option>
                                        <option className='p-3 my-2' value="2pm - 3pm">2pm - 3pm</option>
                                        <option className='p-3 my-2' value="3pm - 4pm">3pm - 4pm</option>
                                        <option className='p-3 my-2' value="4pm - 5pm">4pm - 5pm</option>
                                        <option className='p-3 my-2' value="5pm - 6pm">5pm - 6pm</option>
                                        <option className='p-3 my-2' value="6pm - 7pm">6pm - 7pm</option>
                                        <option className='p-3 my-2' value="7pm - 8pm">7pm - 8pm</option>
                                    </select>
                                </div>
                            </div>

                          

                            <div>
                                <textarea
                                    className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                    name='message'
                                    placeholder="Message (optional)"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-md bg-[#f63e7b] px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Get Quote
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetQuotes;