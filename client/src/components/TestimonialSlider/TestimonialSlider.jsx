import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from "react-redux";
import Rating from "react-rating";
import { useEffect } from "react";
import axiosInstance from "../../axios-config/axios.config";
import { reviewGet } from "../../redux/reviews/reviewsSlice";

const TestimonialsSlider = () => {

    const dispatch = useDispatch()
    const { allReviews } = useSelector((state) => state.review)
    
    const breakpoints = {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    };

    useEffect(() => {
        axiosInstance.get("api/reviews/get-by-status")
            .then((res) => {
                if (res.data) {
                    dispatch(reviewGet(res.data))
                }
            })
            .catch((error) => {
                console.error("error fetching reviews", error);
            })
    }, [])


    return (

        <div className='my-24'>
            <h3 className='text-4xl text-center font-bold pb-16'>Customer <span className='text-[#f63e7b]'>Feedbacks</span></h3>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                breakpoints={breakpoints}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >
                {
                    allReviews.map((item) => (
                        <SwiperSlide key={item._id} className=" mx-5">
                            <div className='bg-[#FFF8F5] shadow-md'>
                                <blockquote
                                    className="flex rounded-2xl min-h-[300px] h-full flex-col cursor-pointer justify-between p-3 shadow-sm sm:p-3 lg:p-6"
                                >
                                    <div>
                                        <div className="flex gap-0.5 text-green-500">
                                            <Rating
                                                initialRating={item?.reviewRating}
                                                readonly
                                                fullSymbol={<FaStar className="text-[#F63E7B] text-2xl" />}
                                                emptySymbol={<FaStar className="text-gray-400 text-2xl" />}

                                            />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-2xl break-words font-bold text-rose-600 sm:text-3xl">{item?.reviewTitle}</p>

                                            <p className="mt-4 break-words leading-relaxed text-gray-700">
                                                {item.reviewMsg}
                                            </p>
                                        </div>
                                    </div>
                                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                                        &mdash; {item.reviewBy}
                                    </footer>
                                </blockquote>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
};

export default TestimonialsSlider;


