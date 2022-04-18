import React from "react";
import LoadingSpinner from "../loading/LoadingSpinner";

const Button = ({
    type = "button",
    onClick = () => {},
    children,
    ...props
}) => {
    const { isLoading } = props;
    const child = !!isLoading ? <LoadingSpinner /> : children;
    return (
        <button
            type={type}
            onClick={onClick}
            {...props}
            className={`${
                props.height ? `h-[${props.height}]` : "h-[66px]"
            } cursor-pointer px-6 leading-none text-white bg-gradient-to-br from-primary to-secondary rounded-lg font-semibold text-[18px] w-full disabled:opacity-50 disabled:pointer-events-none flex justify-center items-center`}
        >
            {child}
        </button>
    );
};

export default Button;
