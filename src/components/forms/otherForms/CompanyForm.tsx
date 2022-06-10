import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { companiesApi } from "../../../services/companies";
import { Company } from "../../../types/company";
import cl from "./OtherForms.module.scss";

interface CompanyProps{
  company:Company
}
const CompanyForm:FC<CompanyProps> = ({ company }) => {
  const param = useParams();
  console.log(param)
  const [updateCompany] = companiesApi.useUpdateCompanyMutation();
  

  const { register, handleSubmit } = useForm({
    defaultValues: {
      shortName: company.shortName,
      name: company.name,

      businessEntity: company.businessEntity,
      type: [company.type[0], company.type[1]],
    },
  });

  const onSubmit = (company:any) => {
    const id = param.id
    updateCompany({company,id});
    
    console.log(company);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <label htmlFor="shortName">Название</label>
      <input {...register("shortName", { required: true })} />
      <label htmlFor="name">полное название</label>
      <input {...register("name", { required: true })} />
      <label htmlFor="businessEntity">форма компании</label>
      <input {...register("businessEntity", { required: true })} />
      <label htmlFor="type">тип </label>
      <input {...register("type", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default CompanyForm;
