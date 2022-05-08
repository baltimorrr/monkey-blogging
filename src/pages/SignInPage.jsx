import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Field from "../components/field/Field";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import InputPasswordToggle from "../components/input/InputPasswordToggle";

const schema = yup.object({
    email: yup
        .string()
        .email("Please enter valid email address")
        .required("Please enter your email address"),
    password: yup
        .string()
        .min(8, "Your password must be at least 8 characters or greater")
        .required("Please enter your password"),
});

const SignInPage = () => {
    const [togglePassword, setTogglePassword] = useState(false);
    const { userInfo } = useAuth();
    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { isValid, isSubmitting, errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false,
                delay: 0,
            });
        }
    }, [errors]);

    useEffect(() => {
        // if(!userInfo.email) navigate("/sign-up")
        console.log(userInfo)
        if(userInfo?.email) navigate("/")
    }, [userInfo])

    const handleSignIn = async (values) => {
        if (!isValid) return;
        await signInWithEmailAndPassword(auth, values.email, values.password);
    };
    return (
        <AuthenticationPage>
            <form
                className="max-w-[600px] mx-auto my-0"
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Field>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        control={control}
                    ></Input>
                </Field>
                <Field>
                    <Label htmlFor="password">Password</Label>
                    <InputPasswordToggle control={control} />
                </Field>
                <div className="mb-5">
                    You haven't had an account?{" "}
                    <NavLink
                        className="inline-block text-primary"
                        to={"/sign-up"}
                    >
                        Register an account
                    </NavLink>{" "}
                </div>
                <Button
                    type="submit"
                    style={{
                        maxWidth: 300,
                        margin: "0 auto",
                    }}
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                >
                    Sign In
                </Button>
            </form>
        </AuthenticationPage>
    );
};

export default SignInPage;
