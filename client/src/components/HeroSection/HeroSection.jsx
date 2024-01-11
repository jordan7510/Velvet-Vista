import { Link } from "react-router-dom";
import image1 from "../../assets/images/hero.jpg"
const HeroSection = () => {
    return (
        <section className="bg-[#fff8f5] mt-[77px]">
            <div className=" flex flex-col justify-center px-6 mx-auto sm:py-8 lg:py-8 lg:flex-row lg:justify-evenly">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-bold">BEAUTY SALON</h1>
                    <h1 className="text-3xl lg:text-5xl font-bold">FOR EVERY <span className="text-[#f63e7b]">WOMEN</span></h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Experience a haven dedicated to enhancing your natural beauty. From rejuvenating facials to precision hairstyling and expert nail care, our services cater to the diverse needs of every woman.</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        {/* <button className="bg-[#f63e7b] px-8 py-3 text-lg font-semibold rounded text-white">Book Appointment</button> */}
                        <Link to="/login" className="bg-[#f63e7b] px-8 py-3 text-lg font-semibold rounded text-white">Book Appointment</Link>

                    </div>
                </div>
                <div className=" overflow-hidden flex items-center justify-center p-6 mt-8 lg:mt-0 h-full sm:h-full lg:h-full xl:h-full 2xl:h-full">
                    <img src={image1} alt="" className="hover:scale-105 rounded-md duration-300 object-contain h-96 sm:h-96 lg:h-96 xl:h-96 2xl:h-96" />
                </div>
            </div>
        </section>

    );
};

export default HeroSection;

