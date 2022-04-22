import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <NavLink to="/">
                <img
                    src="/logo.png"
                    alt="monkey-blogging"
                    className="inline-block mb-10 w-[200px]"
                />
            </NavLink>
            <h1 className="text-[50px] font-bold mb-10 ">Oops! Page not found</h1>
            <NavLink to="/" className="inline-block py-[15px] px-[30px] text-white bg-primary rounded-md font-medium">
                Back to home
            </NavLink>
        </div>
    );
};

export default NotFoundPage;
