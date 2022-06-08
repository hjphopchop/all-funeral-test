import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/store";
import { companiesApi } from "../../../services/companies";
import { addImage } from "../../../store/slices/imagesSlice";
import cl from "./OtherForms.module.scss";

const PhotoForm = () => {
  const { register, handleSubmit } = useForm();
  const [addPhoto] = companiesApi.useAddPhotoMutation();

  const dispatch = useAppDispatch();

  const onSubmit = async (data: any) => {
    console.log(data);
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res: any = await addPhoto(formData);
    console.log(res);
    dispatch(addImage(res?.data?.thumbpath));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
        <input type="file" {...register("file")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default PhotoForm;
