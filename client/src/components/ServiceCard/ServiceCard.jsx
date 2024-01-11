import React from 'react';

const ServiceCard = ({ icon, title, details }) => {
    return (
            <div className="rounded overflow-hidden shadow-lg">

                <div className="relative">
                    <div>
                        <img
                            className="w-full"
                            src={icon}
                            alt="Sunset in the mountains"
                        />
                        <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <p className="font-semibold text-lg inline-block transition duration-500 ease-in-out">
                        {title}
                    </p>
                    <p className="text-gray-500 text-[18px]">{details}</p>
                </div>
            </div>
       
    );
};

export default ServiceCard;