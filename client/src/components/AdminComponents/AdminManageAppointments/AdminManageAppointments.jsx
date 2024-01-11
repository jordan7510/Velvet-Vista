import React, { useEffect, useState } from 'react';
import ServicesTable from '../ManageServices/ServicesTable/ServicesTable';
import AppointmentsTable from './AppointmentsTable/AppointmentsTable';
import axiosInstance from '../../../axios-config/axios.config';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../../../redux/appointments/appointmentsSlice';


const AdminManageAppointments = () => {
    const dispatch = useDispatch()
    const [refetch, setRefetch] = useState(false)
    const [allAppointments, setAllAppointments] = useState([])

    useEffect(() => {
        axiosInstance.get("/api/appointments")
            .then((res) => {
                console.log(res.data);
                if (res.status === 200) {
                    setAllAppointments(res.data)
                    dispatch(getAppointments(res.data))
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }, [refetch])


    return (
        <div className='h-[89vh] overflow-y-scroll bg-white p-5'>
            <div className='flex  items-center justify-between p-4 bg-gray-300 rounded-t-lg'>
                <p className='text-xl font-bold'>Manage Appointments</p>
            </div>
            <AppointmentsTable
                allAppointments={allAppointments}
                refetch={refetch}
                setRefetch={setRefetch}
            ></AppointmentsTable>

        </div >
    );
};

export default AdminManageAppointments;