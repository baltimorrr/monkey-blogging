import React from "react";
import Layout from "../components/layout/Layout";
import HomeBanner from "../components/module/home/HomeBanner";
import HomeFeature from "../components/module/home/HomeFeature";
import HomeNewest from "../components/module/home/HomeNewest";

const HomePage = () => {
    

    // redirect to sign in page if user doesn't log in
    // useEffect(() => {
    //     if (!userInfo?.email) navigate("/sign-in");
    // });
    return (
        <div>
            <Layout>
                <HomeBanner />
                <HomeFeature />
                <HomeNewest />
            </Layout>
        </div>
    );
};

export default HomePage;
