import React from "react";

const PostMeta = ({ date = "Sep 4", authorName = "Rhaegar", className = "" }) => {
    return (
        <div className={`flex items-center gap-3 text-[14px] font-semibold text-[inherit] ${className}`}>
            <span>{date}</span>
            <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
            <span>{authorName}</span>
        </div>
    );
};

export default PostMeta;
