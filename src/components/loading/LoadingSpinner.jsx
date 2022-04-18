import React from "react";

const LoadingSpinner = ({ size = "40px", borderSize = "5px" }) => {
    return (
        <div
            className={`w-[40px] h-[40px] border-[5px] border-white border-t-[5px] border-t-transparent border-b-[5px] border-solid border-b-transparent rounded-full inline-block animate-spin`}
        ></div>
    );
};

export default LoadingSpinner;
