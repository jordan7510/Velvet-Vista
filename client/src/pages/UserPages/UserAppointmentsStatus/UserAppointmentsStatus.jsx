import React, { useEffect, useState } from 'react';
import AppointmentsCard from '../../../components/AppointmentsCard/AppointmentsCard';
import axiosInstance from '../../../axios-config/axios.config';
import { useSelector } from 'react-redux';
const UserAppointmentsStatus = () => {

    const { currentUser } = useSelector((state) => state.user)
    const [appointments, setAppointments] = useState([])
    console.log("currentUser", currentUser);

    useEffect(() => {
        axiosInstance.get(`/api/appointments/${currentUser._id}`)
            .then((res) => {
                if (res.status === 200) {
                    setAppointments(res.data)
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    console.log("appointments", appointments);

    return (
        <div className='bg-slate-200  w-full h-[90vh] overflow-y-auto px-5 py-5'>

            {
               appointments.length === 0 ? (
                <p className='text-center'>No appointments booked.</p>
               ):null 
            }

            <div className='flex flex-wrap'>
                {
                    appointments.map((appointment) => (
                        <AppointmentsCard
                            key={appointment._id}
                            appointment={appointment}
                            image={appointment?.serviceDetails?.serviceImage}
                            pendingText="Pending"
                            confirmText="Confirmed"
                            doneText="Done"
                            serviceName={appointment.serviceName}
                            serviceDetails="lorem ksdfjsdfhgjskdsnv dhfjsdhfjksd  sfjsdfhsmbnskhfjksdf shdfsdh"
                        ></AppointmentsCard>
                    ))
                }
            </div>

        </div>
    );
};

export default UserAppointmentsStatus;