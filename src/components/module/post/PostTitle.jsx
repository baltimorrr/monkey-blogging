import React from "react";
import { NavLink } from "react-router-dom";

const PostTitle = ({ children, className, size, to = "/" }) => {
    return (
        <h3
            className={`${
                size === "big" ? "text-[22px]" : "text-[18px]"
            } font-medium leading-[1.5] block text-white mb-[10px] ${className}`}
        >
            <NavLink to={to}>{children}</NavLink>
        </h3>
    );
};

export default PostTitle;
