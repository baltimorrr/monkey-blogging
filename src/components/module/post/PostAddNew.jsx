import React, { useEffect, useState } from "react";

import Field from "../../../components/field/Field";
import Label from "../../../components/label/Label";
import Input from "../../../components/input/Input";
import Button from "../../button/Button";
import Radio from "../../checkbox/Radio";
import Option from "../../dropdown/Option";
import Dropdown from "../../dropdown/Dropdown";
import Toggle from "../../toggle/Toggle";
import Select from "../../dropdown/Select";
import List from "../../dropdown/List";
import ImageUpload from "../../image/ImageUpload";

import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/auth-context";

import { collection, addDoc, where, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase/firebase-config";
import useFirebaseImage from "../../hooks/useFirebaseImage";

import slugify from "slugify";
import { postStatus } from "../../../utils/constants";
import { toast } from "react-toastify";

const PostAddNew = () => {
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      author: "",
      hot: false,
    },
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");

  const { userInfo } = useAuth();

  const { image, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});

  const addPostHandler = async (values) => {
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title, { lower: true }); // slugify chinh no hoac title
    cloneValues.status = Number(values.status);

    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      ...cloneValues,
      image,
      userId: userInfo.uid,
    });

    toast.success("Create new post success!");

    reset({
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      author: "",
      hot: false,
    });

    setSelectedCategory({});

    console.log(cloneValues);
  };

  const handleClickOption = (item) => {
    setValue("categoryId", item.id);
    setSelectedCategory(item);
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(results);
    }
    getData();
  }, []);

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
              onChange={handleSelectImage}
              progress={progress}
              image={image}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Field>

          <Field>
            <Label>Category</Label>
            <Dropdown>
              <Select placeholder="Select the category"></Select>
              <List>
                {categories.length > 0 &&
                  (categories || []).map((item) => (
                    <Option
                      key={item?.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item?.name}
                    </Option>
                  ))}
              </List>
            </Dropdown>

            {selectedCategory.name && (
              <span className="inline-block p-4 rounded-lg bg-green-100 text-sm text-green-600 font-medium">
                {selectedCategory.name}
              </span>
            )}
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
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Field>

          <Field>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                onClick={() => setValue("status", "approved")}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                onClick={() => setValue("status", "pending")}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                onClick={() => setValue("status", "reject")}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Field>
        </div>

        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </div>
  );
};

export default PostAddNew;
