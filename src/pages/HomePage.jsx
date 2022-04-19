import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { auth } from "../firebase/firebase-config";

const HomePage = () => {
    const handleSignOut = () => {
        signOut(auth);
    };
    const { userInfo } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo?.email) navigate("/sign-in");
    });
    return (
        <div>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    );
};

export default HomePage;
