import React from 'react';
const AppointmentsCard = ({ appointment, pendingText, confirmText, doneText }) => {
    console.log("appointment", appointment);
    return (
        <div className='max-w-[340px] max-h-[230px] bg-white rounded-lg px-5 py-3 mx-2 mb-2'>
            <div className='flex items-center justify-between my-4'>
                <img className='h-20 rounded-full' src={appointment?.serviceDetails?.serviceImage} alt=""></img>

                <span className='flex flex-col gap-1 items-center justify-center'>
                    {
                        !appointment.isConfirmed ? (
                            <span className='border px-4 py-2 rounded-md text-red-500 bg-red-100 font-semibold'>{pendingText}</span>
                        ) : null
                    }

                    {
                        appointment.isConfirmed ? (
                            <span className='border px-4 py-1 rounded-md text-blue-500 bg-green-100 font-semibold'>{confirmText}</span>
                        ) : null
                    }

                    {
                        appointment.isDone ? (
                            <span className='border px-9 py-1 rounded-md text-green-500 bg-green-100 font-semibold'>{doneText}</span>
                        ) : null
                    }
                </span>

            </div>
            <div className='text-center'>
                <p className='text-xl font-semibold my-2'>{appointment?.serviceDetails?.serviceTitle}</p>
                <p>{appointment?.serviceDetails?.serviceDesc}</p>
            </div>
        </div>
    );
};

export default AppointmentsCard;