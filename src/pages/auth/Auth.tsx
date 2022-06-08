import React from "react";
import cl from "./Auth.module.scss";
import logo from "../../assets/img/logo.png";
import AuthForm from "../../components/forms/authForm/AuthForm";


const Auth = () => {

  return (
    <div className={cl.auth}>
      <div className={cl.authItems}>
        <img src={logo}></img>
        <div className={cl.formBlock}>
          <h1 className={cl.authTitle}>Cemetery Workstation</h1>
          <p>Please sign in</p>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
