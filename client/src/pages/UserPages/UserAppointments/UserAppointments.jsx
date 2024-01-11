import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegCreditCard } from "react-icons/fa";
import { TbBrandPaypalFilled } from "react-icons/tb";
import Swal from 'sweetalert2';
import axiosInstance from '../../../axios-config/axios.config';

const UserAppointments = () => {
    const { allServices } = useSelector((state) => state.services)
    const { currentUser } = useSelector((state) => state.user)

    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const serviceName = form.serviceName.value;
        const serviceId = form.serviceName.value;
        const date = form.date.value;
        const serviceTime = form.serviceTime.value;
        const paymentOption = form.payWith.value;



        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please check email pattern.",
            });
            return
        }


        const payLoad = {
            fullName: fullName,
            userId: currentUser._id,
            email: email,
            serviceId: serviceId,
            serviceDate: date,
            timeSlot: serviceTime,
            paymentOption: paymentOption
        }

        console.log("payLoad", payLoad);

        axiosInstance.post("/api/appointments", payLoad)
            .then((res) => {
                if (res.status === 200) {
                    form.reset();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your appointment has been submitted.",
                        showConfirmButton: false,
                        timer: 3500
                    });
                }
                console.log(res);
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.message}`,
                });
            })

    }



    return (
        <div className='bg-slate-200 w-full h-[90vh] overflow-y-auto'>

            <p className="text-center text-2xl font-semibold mt-2 mb-2">Book appointment</p>

            <div className=" mx-auto max-w-sm lg:col-span-3 lg:p-4">
                <form onSubmit={handleSubmit} className="space-y-4 px-4">

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                        <div>
                            <input
                                className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                placeholder="Name"
                                type="text"
                                name='fullName'
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
                            <select required name='serviceName' className="w-full rounded-lg border-2 outline-none p-3 text-sm ">
                                <option className='p-3 my-2' value="" >Select service</option>
                                {
                                    allServices.map((item) => (
                                        <option key={item._id} className='p-3 my-2' value={item._id}>{item.serviceTitle}</option>
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

                        <div className='px-3 my-1 text-sm space-y-2'>
                            <p className=''>Pay with</p>
                            <div className='space-x-10 flex gap-10'>
                                <div className='flex items-center gap-3'>
                                    <input value='Debit Card' required type="radio" name='payWith' /><FaRegCreditCard />Debit Card
                                </div>
                                <div className='flex items-center gap-3'>
                                    <input value="PayPal" required type="radio" name='payWith' /><TbBrandPaypalFilled />PayPal
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <input
                                className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                type="tel"
                                placeholder='Enter card number'
                                name='cardNumber'
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <div>
                                <input
                                    className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                    type="tel"
                                    placeholder='MM/YY'
                                    name='cardExpiry'
                                />
                            </div>
                            <div>
                                <input
                                    className="w-full rounded-lg border-2 outline-none p-3 text-sm"
                                    type="tel"
                                    placeholder='CVV'
                                    name='cardCvv'
                                />
                            </div>
                        </div> */}

                    </div>

                    <div className="mt-4 text-right">
                        <button
                            type="submit"
                            className="inline-block w-full rounded-md bg-[#f63e7b] px-5 py-2 font-medium text-white sm:w-auto"
                        >
                            Pay & Book
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UserAppointments;