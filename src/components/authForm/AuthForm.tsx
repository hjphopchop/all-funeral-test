import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import cl from "./AuthForm.module.scss";
const AuthForm = () => {
  type Formdata = {
    login: string | undefined;
  };
  const { register, handleSubmit } = useForm<Formdata>();
  const onSubmit: SubmitHandler<Formdata> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.authForm}>
      <input defaultValue="" {...register("login", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default AuthForm;
