import React, { useEffect, useState } from "react";
import Input from "../components/input/Input";
import Label from "../components/label/Label";
import Field from "../components/field/Field";
import Button from "../components/button/Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";
import InputPasswordToggle from "../components/input/InputPasswordToggle";

const schema = yup.object({
    fullname: yup.string().required("Please enter your fullname"),
    email: yup
        .string()
        .email("Please enter valid email address")
        .required("Please enter your email address"),
    password: yup
        .string()
        .min(8, "Your password must be at least 8 characters or greater")
        .required("Please enter your password"),
});

const SignUpPage = () => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        watch,
        reset,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    const [togglePassword, setTogglePassword] = useState(false);

    useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message, {
                pauseOnHover: false,
                delay: 0,
            });
        }
    }, [errors]);

    const handleSignUp = async (values) => {
        if (!isValid) return;
        const user = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
        );

        const colRef = collection(db, "users");
        await addDoc(colRef, {
            fullname: values.fullname,
            email: values.email,
            password: values.password,
        });

        await updateProfile(auth.currentUser, {
            displayName: values.fullname,
        });

        toast.success("Register successfully");
        navigate("/");
    };

    return (
        <AuthenticationPage>
            <form
                className="max-w-[600px] mx-auto my-0"
                onSubmit={handleSubmit(handleSignUp)}
            >
                <Field>
                    <Label
                        htmlFor="fullname"
                        className="text-grayDark font-semibold cursor-pointer"
                    >
                        Fullname
                    </Label>
                    <Input
                        type="text"
                        name="fullname"
                        placeholder="Enter your fullname"
                        control={control}
                    ></Input>
                </Field>
                <Field>
                    <Label
                        htmlFor="email"
                        className="text-grayDark font-semibold cursor-pointer"
                    >
                        Email
                    </Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        control={control}
                    ></Input>
                </Field>
                <Field>
                    <Label
                        htmlFor="password"
                        className="text-grayDark font-semibold cursor-pointer"
                    >
                        Password
                    </Label>
                    <InputPasswordToggle control={control} />
                </Field>
                <div className="mb-5">
                    Have you already have an account?{" "}
                    <NavLink
                        className="inline-block text-primary"
                        to={"/sign-in"}
                    >
                        Login
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
                    Sign Up
                </Button>
            </form>
        </AuthenticationPage>
    );
};

export default SignUpPage;
