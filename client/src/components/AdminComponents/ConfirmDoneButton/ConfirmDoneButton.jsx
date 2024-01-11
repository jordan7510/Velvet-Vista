import React from 'react';
import axiosInstance from '../../../axios-config/axios.config';
import Swal from 'sweetalert2';

const ConfirmDoneButton = ({ row, refetch, setRefetch }) => {


    const handleConfirm = () => {
        console.log("service id", row.original._id);

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.patch(`/api/appointments/edit/${row.original._id}`, { isConfirmed: true })
                    .then((res) => {
                        console.log("confirm res", res);
                        if (res.status === 200) {
                            setRefetch(!refetch)
                            Swal.fire("Saved!", "", "success");
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    })
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const handleMarkDone = () => {
        console.log("service id", row.original._id);
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.patch(`/api/appointments/edit/${row.original._id}`, { isDone: true })
                    .then((res) => {
                        console.log("confirm res", res);
                        if (res.status === 200) {
                            setRefetch(!refetch)
                            Swal.fire("Saved!", "", "success");
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    })
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
        // axiosInstance.patch(`/api/appointments/edit/${row.original._id}`, { isDone: true })
        //     .then((res) => {
        //         console.log("confirm res", res);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     })
    }

    const handleDelete = () => {
        console.log("service id", row.original._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/api/appointments/delete/${row.original._id}`)
                .then((res)=>{
                    console.log(res);
                    if(res.status === 200){
                        setRefetch(!refetch)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
                .catch((error)=>{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                      });
                    console.error(error);
                })

            }
        });
    }




    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            {
                !row.original.isConfirmed ? (
                    <button onClick={handleConfirm} className="bg-blue-500 text-white px-2 py-1 rounded-md hover:opacity-90">Confirm</button>
                ) : !row.original.isDone ? (
                    <button onClick={handleMarkDone} className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:opacity-90">Mark Done</button>
                ) : row.original.isDone ? (
                    <span className="bg-green-500 text-white px-2 py-2 rounded-md hover:opacity-90">Done</span>
                ) : null
            }
            <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 rounded-md hover:opacity-90">Delete</button>
        </div>
    );
};

export default ConfirmDoneButton;