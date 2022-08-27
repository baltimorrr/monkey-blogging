import React from "react";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";

const PostFeatureItem = () => {
  return (
    <div className="w-full rounded-2xl relative h-[272px]">
      <PostImage
        url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        className="rounded-lg"
        to="/"
      />
      <div className="post-overlay absolute inset-0 rounded-2xl mix-blend-multiply opacity-60"></div>
      <div className="post-content absolute inset-0 z-10 p-5 text-white">
        <div className="post-top flex justify-between items-center mb-4">
          <PostCategory>Knowledge</PostCategory>
          <PostMeta></PostMeta>
          {/* <div className="post-info flex items-center gap-3 text-[14px] font-semibold text-white ml-auto">
                        <span className="post-time">Mar 23</span>
                        <span className="post-dot inline-block w-1 h-1 bg-current rounded-full"></span>
                        <span className="post-author">Andiex Le</span>
                    </div> */}
        </div>
        <PostTitle size="big" className="font-semibold">
          How to set up your study room for beginners
        </PostTitle>
      </div>
    </div>
  );
};

export default PostFeatureItem;
