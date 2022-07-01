import React from "react";
import Heading from "../../layout/Heading";

import "../../../styles/heading.scss";
import PostFeatureItem from "../post/PostFeatureItem";

const HomeFeature = () => {
    return (
        <div className="home-block">
            <div className="container-main">
                <Heading className="heading">Famous Posts</Heading>
                <div className="grid-layout">
                    <PostFeatureItem></PostFeatureItem>
                    <PostFeatureItem></PostFeatureItem>
                    <PostFeatureItem></PostFeatureItem>
                </div>
            </div>
        </div>
    );
};

export default HomeFeature;
