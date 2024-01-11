import { useEffect, useState } from "react";
import ReviewsTable from "./ReviewsTable.jsx"
import { FaXmark } from "react-icons/fa6";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import axiosInstance from "../../../axios-config/axios.config.jsx";
import Swal from "sweetalert2";

const UserReviews = () => {

    const [ismodalshow, setIsModalshow] = useState(true)
    const [rating, setRating] = useState(0)
    const { currentUser } = useSelector((state) => state.user)
    const [refetch, setRefetch] = useState(false)
    const [userReview, setUserReview] = useState([])


    useEffect(() => {
        axiosInstance.get(`/api/reviews/${currentUser._id}`)
            .then((res) => {
                if (res.data) {
                    setUserReview(res.data)
                }
            })
            .catch((error) => {
                console.error("Error while fetching reviews", error);
            })
    }, [refetch])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewRating = rating
        const title = form.reviewTitle.value;
        const msg = form.reviewMsg.value;

        const reviewPayload = {
            reviewTitle: title,
            reviewMsg: msg,
            reviewRating: reviewRating,
            reviewBy: currentUser.name,
            reviewByID: currentUser._id
        }

        if (reviewRating === 0) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select rating.",
            });
            return
        }

        axiosInstance.post("/api/reviews/add-review", reviewPayload)
            .then((res) => {
                console.log("add review response", res);
                if (res.status === 200) {
                    form.reset();
                    setRefetch(!refetch);
                    setIsModalshow(!ismodalshow);
                    setRating(0);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Review addedd successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }


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
                    .then((res) => {
                        console.log("delete success res", res)
                        setRefetch(!refetch)
                        setUserReview([])
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your review has been deleted.",
                            icon: "success"
                        });

                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        });

    }

    return (
        <div className='bg-slate-200 w-full h-[90vh] overflow-y-auto px-2 py-4'>
            <p className="text-center text-2xl font-semibold mt-2 mb-4">Manage review</p>

            {/*================================ Add Review modal============================= */}
            <div className={`w-full px-4  md:max-w-md absolute z-20 left-1/2  transition-all duration-300 ease-in-out transform -translate-x-1/2 ${ismodalshow ? 'top-[-495px]' : ""}${!ismodalshow ? 'top-[100px]' : ""}`}>
                <div className="relative flex flex-col items-center gap-4 rounded-md shadow-md sm:p-4 bg-slate-700">
                    <div>
                        {/* Close button */}
                        <button
                            onClick={() => setIsModalshow(!ismodalshow)}
                            className="absolute top-2 right-2 text-2xl text-white ">
                            <FaXmark></FaXmark>
                        </button>
                    </div>

                    <div className='w-[100%]'>
                        <h2 className="text-xl md:text-3xl md:font-semibold text-center text-white">Your opinion matters!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center py-3 space-y-3">
                                <span className="text-center text-md md:text-md text-white">How was your experience?</span>
                                <div>
                                    <Rating
                                        emptySymbol={<FaStar className="text-white text-3xl" />}
                                        fullSymbol={<FaStar className="text-[#F63E7B] text-3xl" />}
                                        onChange={(rate) => setRating(rate)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 px-4 gap-2 sm:grid-cols-1 mb-2">
                                <div>
                                    <input
                                        className="w-full rounded-md outline-1 p-3 text-gray-100 bg-gray-900 text-sm"
                                        placeholder="Review Title"
                                        type="text"
                                        name='reviewTitle'
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea rows="3" name="reviewMsg" required placeholder="Message..." className="p-4 rounded-md resize-none text-gray-100 bg-gray-900 w-full"></textarea>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full bg-slate-600 hover:opacity-90 px-5 py-3 text-white sm:w-full rounded-md hover:text-[#F63E7B] font-semibold"
                                    >
                                        Add Review
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*================================ Add Review modal============================= */}


            <div>
                {
                    userReview.length === 0 ?
                        (
                            <p className="text-center">No review added.
                                <button onClick={() => setIsModalshow(!ismodalshow)} className="bg-slate-600 ml-2 text-white px-2 py-1 rounded-md hover:opacity-90">Add review</button>
                            </p>
                        ) :
                        (
                            <div>
                                <ReviewsTable
                                    userReview={userReview}
                                    handleDelete={handleDelete}
                                ></ReviewsTable>
                            </div>
                        )
                }

            </div>

        </div>
    );
};

export default UserReviews;