import React, { useEffect } from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import img from "../../assets/images/aboutus.jpg"

const AboutUsPage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <Header></Header>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    {/* <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                        Radiance <span className='text-[#F63E7B]'>Redefined</span>
                        </h2>
                    </div> */}

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="Party"
                                src={img}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-16">
                            <article className="space-y-4 text-gray-600">


                                <p className='text-lg'>
                                    At Velvet Vista, we believe that beauty is not just skin deep; it's a reflection of your inner glow. Our team of skilled professionals is dedicated to providing personalized and indulgent beauty treatments that go beyond mere aesthetics. We understand that each person is unique, and so are their beauty needs. That's why we tailor our services to suit your individual style, preferences, and skin type.
                                </p>

                                <p className='text-lg'>
                                    From rejuvenating facials and expert hairstyling to meticulous nail care and soothing spa therapies, our comprehensive range of services is designed to pamper you from head to toe.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default AboutUsPage;