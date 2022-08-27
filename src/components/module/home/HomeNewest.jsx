import React from "react";
import Heading from "../../layout/Heading";
import PostItem from "../post/PostItem";
import PostNewestItem from "../post/PostNewestItem";
import PostNewestLarge from "../post/PostNewestLarge";

const HomeNewest = () => {
  return (
    <div className="home-block">
      <div className="container-main">
        <Heading className="heading">Latest posts</Heading>
        <div className="layout grid grid-cols-2 gap-10 mb-10 items-start">
          <PostNewestLarge></PostNewestLarge>
          <div className="sidebar px-7 py-5 bg-[#f3edff] rounded-2xl">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout grid-layout--primary">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
    </div>
  );
};

export default HomeNewest;
