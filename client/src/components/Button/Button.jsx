import React from 'react';

const Button = ({ btnText }) => {
    return (
        <div>
            <button className="bg-[#f63e7b] px-8 py-3 text-lg font-semibold rounded text-white">{btnText}</button>
        </div>
    );
};

export default Button;