import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/store";
import { companiesApi } from "../../../services/companies";
import { addImage } from "../../../store/slices/imagesSlice";

const PhotoForm = () => {
  const { register, handleSubmit } = useForm();
  const [addPhoto] = companiesApi.useAddPhotoMutation();

  const dispatch = useAppDispatch();


  const onSubmit = async (data:any) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);

    const res:any = await addPhoto(formData);
    dispatch(addImage(res?.data?.thumbpath))

  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default PhotoForm;
