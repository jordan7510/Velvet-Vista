import Footer from "../../../shared/Footer/Footer";
import GetQuotes from "../../../components/GetQuotes/GetQuotes";
import Header from "../../../shared/Header/Header";
import HeroSection from "../../../components/HeroSection/HeroSection";
import LetUsHandle from "../../../components/LetUsHandle/LetUsHandle";
import OurServices from "../../../components/OurServices/OurServices";
import TestimonialSlider from "../../../components/TestimonialSlider/TestimonialSlider";
import UseFetchHook from "../../../hooks/UseFetchHook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axiosInstance from "../../../axios-config/axios.config";
import { getAllServices } from "../../../redux/service/serviceSlice";
const LandingPage = () => {

    const dispatch = useDispatch()
    const {allServices} = useSelector((state)=>state.services)

    useEffect(() => {
        axiosInstance.get("/api/services/get-by-status")
            .then((res) => {
                if (res.status === 200) {
                    dispatch(getAllServices(res.data.result))
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])


    console.log("allServices",allServices);


    return (
        <div className="mx-auto">
            <Header></Header>
            <HeroSection></HeroSection>
            <OurServices></OurServices>
            <LetUsHandle></LetUsHandle>
            {/* <Testimonial></Testimonial> */}
            <TestimonialSlider></TestimonialSlider>
            <GetQuotes></GetQuotes>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;