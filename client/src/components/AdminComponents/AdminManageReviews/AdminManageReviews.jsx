import React, { useEffect, useState } from 'react';
import ReviewsTable from './ReviewsTable';
import axiosInstance from '../../../axios-config/axios.config';
import Swal from 'sweetalert2';

const AdminManageReviews = () => {

    const [reviews, setReviews] = useState([])
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        axiosInstance.get("/api/reviews")
            .then((res) => {
                if (res.status === 200) {
                    setReviews(res.data)
                }
            })
            .catch((error) => {
                console.error("error while fetching reviews", error);
            })
    }, [refetch])

    const handleDelete = (id) => {

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
                axiosInstance.delete(`/api/reviews/delete-review/${id}`)
                    .then((res => {
                        console.log("dlete response", res);
                        if (res.status === 200) {
                            setRefetch(!refetch)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Review deleted successfully.",
                                icon: "success"
                            });
                        }

                    }))
                    .catch((error) => {
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
        <div className='h-[87vh] overflow-y-scroll bg-white p-5'>
            <div className='flex  items-center justify-between p-4 bg-gray-300 rounded-t-lg'>
                <p className='text-xl font-bold'>Manage reviews</p>
            </div>

            {
                reviews.length === 0 ? (
                    <p className='text-center mt-10'>No reviews available </p>
                )
                    :
                    (
                        <ReviewsTable
                            handleDelete={handleDelete}
                            setRefetch={setRefetch}
                            refetch={refetch}
                            reviews={reviews}
                        />
                    )
            }
        </div>

    );
};

export default AdminManageReviews;