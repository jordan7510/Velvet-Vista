import img1 from "../../assets/images/letushandle.jpg"

const LetUsHandle = () => {

    return (
        <section className="bg-[#fff8f5]">
            <div className=" flex flex-col justify-center px-6 mx-auto sm:py-8 lg:py-8 lg:flex-row-reverse lg:justify-evenly">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-3xl lg:text-3xl font-bold">Let us handle your</h1>
                    <h1 className="text-3xl lg:text-3xl font-bold">beauty needs <span className="text-[#f63e7b]">Professionally</span></h1>
                    <p className="text-gray-600 mt-6 mb-8 text-lg sm:mb-12">Entrust us with your beauty needs, and experience professional care like never before. Our skilled team is dedicated to delivering exceptional beauty services, ensuring you leave feeling pampered, confident, and truly radiant. Discover the art of professional beauty with us.</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <div className="flex items-center gap-10">
                            <div >
                                <p className="text-4xl font-extrabold text-[#f63e7b] py-5 ">500+</p>
                                <p className="text-gray-600">Happy Customers</p>
                            </div>
                            <div>
                                <p className="text-4xl font-extrabold text-[#f63e7b] py-5 ">16+</p>
                                <p  className="text-gray-600">Total services</p>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div className="flex overflow-hidden items-center justify-center p-6 mt-8 lg:mt-0 h-full sm:h-full lg:h-full xl:h-full 2xl:h-full">
                    <img src={img1} alt="" className="hover:scale-105 rounded-md duration-300 object-contain h-96 sm:h-96 lg:h-96 xl:h-96 2xl:h-96" />
                </div>
            </div>
        </section>

    );
};

export default LetUsHandle;
