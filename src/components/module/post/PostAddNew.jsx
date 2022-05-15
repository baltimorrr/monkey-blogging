import React, { useState } from "react";
import Field from "../../../components/field/Field";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import Button from "../../button/Button";
import Radio from "../../checkbox/Radio";
import Option from "../../dropdown/Option";
import Dropdown from "../../dropdown/Dropdown";
import { postStatus } from "../../../utils/constants";
import ImageUpload from "../../image/ImageUpload";

import { useForm } from "react-hook-form";
import slugify from "slugify";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    deleteObject,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";

const PostAddNew = () => {
    const { control, watch, setValue, handleSubmit, getValues } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            slug: "",
            status: 2,
            category: "",
            author: "",
        },
    });
    const watchStatus = watch("status");
    const watchCategory = watch("category");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState("");

    const addPostHandler = async (values) => {
        const cloneValues = { ...values };
        cloneValues.slug = slugify(values.slug || values.title); // slugify chinh no hoac title
        cloneValues.status = Number(values.status);
        const colRef = collection(db, "posts");
        await addDoc(colRef, {
            image,
        });
        console.log(cloneValues);
        // handleUploadImage(cloneValues.image)
    };

    const handleUploadImage = (file) => {
        const storage = getStorage();
        const storageRef = ref(storage, "images/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progressPercent =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progressPercent);
                console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        console.log("Nothing at all");
                }
            },
            (error) => {
                console.log("Error");
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setImage(downloadURL);
                });
            }
        );
    };

    const onSelectImage = (e) => {
        const file = e.target.files[0];
        console.log(e.target);
        if (!file) return;
        setValue("image_name", file.name);
        handleUploadImage(file);
    };

    const handleDeleteImage = () => {
        const storage = getStorage();
        const imageRef = ref(storage, "images/" + getValues("image_name"));
        deleteObject(imageRef)
            .then(() => {
                console.log("Remove image successfully");
                setImage("");
                setProgress(0);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h1 className="font-bold text-[36px] mb-10 text-primary tracking-[1px]">
                Add new post
            </h1>
            <form onSubmit={handleSubmit(addPostHandler)}>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Title</Label>
                        <Input
                            control={control}
                            placeholder="Enter your title"
                            name="title"
                        ></Input>
                    </Field>
                    <Field>
                        <Label>Slug</Label>
                        <Input
                            control={control}
                            placeholder="Enter your slug"
                            name="slug"
                        ></Input>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Image</Label>
                        <ImageUpload
                            onChange={onSelectImage}
                            progress={progress}
                            image={image}
                            handleDeleteImage={handleDeleteImage}
                        ></ImageUpload>
                    </Field>
                    <Field>
                        <Label>Status</Label>
                        <div className="flex items-center gap-x-5">
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === postStatus.APPROVED
                                }
                                onClick={() => setValue("status", "approved")}
                                value={postStatus.APPROVED}
                            >
                                Approved
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === postStatus.PENDING
                                }
                                onClick={() => setValue("status", "pending")}
                                value={postStatus.PENDING}
                            >
                                Pending
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={
                                    Number(watchStatus) === postStatus.REJECTED
                                }
                                onClick={() => setValue("status", "reject")}
                                value={postStatus.REJECTED}
                            >
                                Reject
                            </Radio>
                        </div>
                    </Field>
                    <Field>
                        <Label>Author</Label>
                        <Input
                            control={control}
                            placeholder="Find the author"
                            name="author"
                        ></Input>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Category</Label>
                        <Dropdown>
                            <Option>Knowledge</Option>
                            <Option>Blockchain</Option>
                            <Option>Setup</Option>
                            <Option>Nature</Option>
                            <Option>Developer</Option>
                        </Dropdown>
                    </Field>
                    <Field></Field>
                </div>
                <Button type="submit" className="mx-auto">
                    Add new post
                </Button>
            </form>
        </div>
    );
};

export default PostAddNew;
