import React from "react";
import { NavLink } from "react-router-dom";

const PostCategory = ({
    children,
    type = "primary",
    className = "",
    to = "/",
}) => {
    return (
        <div
            type={type}
            className={`${className} post-category inline-block px-2 py-2 rounded-lg text-[#6b6b6b] text-[14px] font-semibold ${
                type === "primary" ? "bg-[#f3edff]" : "bg-[#f3f3f3]"
            } ${type === "secondary" ? "bg-[#fff]" : "bg-[#f3f3f3]"}`}
        >
            <NavLink to={to}>{children}</NavLink>
        </div>
    );
};

export default PostCategory;
