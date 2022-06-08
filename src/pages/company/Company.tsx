import React from "react";
import CompanyInfo from "../../components/infoBlocks/CompanyInfo";
import ContactsInfo from "../../components/infoBlocks/ContactsInfo";
import HeaderPage from "../../components/headerPage/HeaderPage";
import PhotoBlock from "../../components/photoBlock/PhotoBlock";
import cl from "./Company.module.scss";


const Company = () => {
  return (
    <div className={cl.company}>
      <HeaderPage />
      <main className={cl.main}>
        <CompanyInfo />
        <ContactsInfo/>
        <PhotoBlock/>
      </main>
    </div>
  );
};

export default Company;
