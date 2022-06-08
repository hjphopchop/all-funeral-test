import React, { useState } from "react";
import cl from "./infoBlocks.module.scss";
import pencil from "../../assets/img/page/Pencil.png";
import { companiesApi } from "../../services/companies";
import { useParams } from "react-router-dom";
import Modal from "../modal/Modal";
import CompanyForm from "../forms/otherForms/CompanyForm";

const CompanyInfo: any = () => {
  const param = useParams();
  const { data: company } = companiesApi.useGetCompanyQuery(param.id);

  console.log(company);
  const [isOpen, setIsopen] = useState(false);

  const handleOpen = () => {
    setIsopen(true);
  };

  const handleClose = () => {
    setIsopen(false);
  };

  return (
    company && (
      <div className={cl.info}>
        <div className={cl.InfoTitle}>
          <h3>{company.shortName} </h3>
          <button onClick={handleOpen}>
            <img src={pencil} />
          </button>
        </div>
        <div>
          <div className={cl.InfoTitle}>
            <p>Общая информация </p>
            <button onClick={handleOpen}>
              <img src={pencil} />
            </button>
          </div>
          <div className={cl.infoContent}>
            <div className={cl.infoContentLeft}>
              <div className={cl.ifoContentItem}>Полное название:</div>
              <div className={cl.ifoContentItem}>договор:</div>
              <div className={cl.ifoContentItem}>форма:</div>
              <div className={cl.ifoContentItem}>тип:</div>
            </div>

            <div>
              <div className={cl.ifoContentItem}>{company.name}</div>
              <div className={cl.ifoContentItem}>
                {company.contract.no} от {company.contract.issue_date}
              </div>
              <div className={cl.ifoContentItem}>{company.businessEntity} </div>
              <div className={cl.ifoContentItem}>
                {company.type[0]} {company.type[1]}
              </div>
            </div>
          </div>
        </div>

        <Modal handleClose={handleClose} isOpen={isOpen}>
          <CompanyForm company={company} />
        </Modal>
      </div>
    )
  );
};

export default CompanyInfo;
