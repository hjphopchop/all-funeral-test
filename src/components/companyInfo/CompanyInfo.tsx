import React from "react";
import cl from "./CompanyInfo.module.scss";
import pencil from "../../assets/img/page/Pencil.png";
import { companiesApi } from "../../services/companies";
import { useParams } from "react-router-dom";
import { contactsApi } from "../../services/contacts";

const CompanyInfo = () => {
  const param = useParams();
  console.log(param);
  const {
    data: company,
    isLoading,
    error,
  } = companiesApi.useGetCompanyQuery(param.id);
  const { data: contacts } = contactsApi.useGetContactsQuery("");
  console.log(contacts);

  if (error) {
    return <h1>Возможно когда-то и было, но сейчас нет</h1>;
  }
  if (isLoading) {
    return <h1>Загрузка</h1>;
  }

  return (
    company && (
      <div className={cl.companyInfo}>
        <div className={cl.companyInfoTitle}>
          <h3>{company.shortName} </h3>
          <img src={pencil} />
        </div>
        <div>
          <div className={cl.companyInfoTitle}>
            <p>Общая информация </p>
            <img src={pencil} />
          </div>
          <div className={cl.infoContent}>
            <div className={cl.infoContentLeft}>
              <div>Полное название:</div>
              <div>договор:</div>
              <div>форма:</div>
              <div>тип:</div>
            </div>

            <div>
              <div>{company.name}</div>
              <div>
                {company.contract.no} от {company.contract.issue_date}
              </div>
              <div>{company.businessEntity} </div>
              <div>
                {company.type[0]} {company.type[1]}
              </div>
            </div>
          </div>

          <div className={cl.companyInfoTitle}>
            <p>Контактные данные </p>
            <img src={pencil} />
          </div>
          <div className={cl.infoContent}>
            <div className={cl.infoContentLeft}>
              <div>ФИО:</div>
              <div>Телефон:</div>
              <div>Эл. почта:</div>
            </div>
            {contacts && (
              <div>
                <div>
                  {contacts.lastname} {contacts.firstname} {contacts.patronymic}
                </div>
                <div>{contacts.phone}</div>
                <div>{contacts.email}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CompanyInfo;
