import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostTitle from "./PostTitle";
import PostMeta from "./PostMeta";

const PostItem = () => {
    return (
        <div className="flex flex-col items-start">
            <PostImage
                url="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
                className="h-[202px] mb-5 block w-full rounded-xl"
                to="/"
            />
            <PostCategory className="mb-2">ReactJS</PostCategory>
            <PostTitle className="text-[#232323] font-semibold">
                The complete guide to learn new languages for beginners
            </PostTitle>
            <PostMeta></PostMeta>
        </div>
    );
};

export default PostItem;
