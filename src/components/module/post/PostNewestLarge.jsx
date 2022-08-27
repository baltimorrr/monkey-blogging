import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostNewestLarge = () => {
  return (
    <div>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt=""
        className="rounded-xl"
        to="/"
      />
      <PostCategory className="my-[10px]">Knowledge</PostCategory>
      <PostTitle size="big" className="text-[#232323] font-semibold">
        The complete guide to learn new languages for beginners{" "}
      </PostTitle>
      <PostMeta></PostMeta>
    </div>
  );
};

export default PostNewestLarge;
