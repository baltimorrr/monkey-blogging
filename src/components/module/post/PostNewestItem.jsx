import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestItem = () => {
    return (
        <div className="mb-7 flex items-center gap-5 pb-7 border-b border-solid border-b-[#ddd]">
            <PostImage
                url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
                className="block shrink-0 w-[180px] h-[130px] rounded-xl"
                to="/"
            />
            <div className="post-content flex-1">
                <PostCategory type="secondary" className="mb-2">
                    Knowledge
                </PostCategory>
                <PostTitle className="mb-2 text-[#232323]">
                    The complete guide to learn new languages for beginners
                </PostTitle>
                <PostMeta></PostMeta>
            </div>
        </div>
    );
};

export default PostNewestItem;
