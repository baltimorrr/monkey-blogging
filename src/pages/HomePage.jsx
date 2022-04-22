import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import { useAuth } from "../contexts/auth-context";
import { auth } from "../firebase/firebase-config";

const HomePage = () => {
    

    // redirect to sign in page if user doesn't log in
    // useEffect(() => {
    //     if (!userInfo?.email) navigate("/sign-in");
    // });
    return (
        <div>
            <Header />
        </div>
    );
};

export default HomePage;
