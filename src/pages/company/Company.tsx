import React from "react";
import CompanyInfo from "../../components/infoBlocks/CompanyInfo";
import ContactsInfo from "../../components/infoBlocks/ContactsInfo";
import HeaderPage from "../../components/headerPage/HeaderPage";
import PhotoBlock from "../../components/photoBlock/PhotoBlock";
import cl from "./Company.module.scss";
import { useParams } from "react-router-dom";
import { companiesApi } from "../../services/companies";

const Company = () => {
  const param = useParams();
  const { data: company } = companiesApi.useGetCompanyQuery(param.id);

  console.log(company);
  return (

    <div className={cl.company}>
      <HeaderPage />
      <main className={cl.main}>
        <CompanyInfo  company={company} />
        <ContactsInfo  contact={company?.contactId} />
        <PhotoBlock  photos={company?.photos}/>
      </main>
    </div>
  );
};

export default Company;
