import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../../hooks/store";
import { getToken } from "../../../requests/request";
import { login } from "../../../store/slices/authSlice";

import cl from "./AuthForm.module.scss";
const AuthForm = () => {
  type Formdata = {
    login: string | undefined;
  };

  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<Formdata>();

  const onSubmit: SubmitHandler<Formdata> = (user) => {
    getToken(user.login);
    dispatch(login());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.authForm}>
      <input defaultValue="" {...register("login", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default AuthForm;
