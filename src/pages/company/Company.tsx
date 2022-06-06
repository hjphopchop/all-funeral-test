import React from "react";
import CompanyInfo from "../../components/companyInfo/CompanyInfo";
import HeaderPage from "../../components/headerPage/HeaderPage";
import cl from "./Company.module.scss";


const Company = () => {
  return (
    <div className={cl.company}>
      <HeaderPage />
      <main className={cl.main}>
        <CompanyInfo/>
      </main>

      <div>44554</div>
      <div>44554</div>
      <div>44554</div>
    </div>
  );
};

export default Company;
