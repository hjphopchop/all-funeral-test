import React from "react";
import { useForm } from "react-hook-form";
import { companiesApi } from "../../../services/companies";
import cl from "./CompanyForm.module.scss";

const CompanyForm = ({ company }: any) => {
  const [updateCompany] = companiesApi.useUpdateCompanyMutation();

  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      shortName: company.shortName,
      name: company.name,

      businessEntity: company.businessEntity,
      type: [company.type[0], company.type[1]],
    },
  });

  const onSubmit = (company: any) => {
    company.type = company.type.replace(/\s/g, "").split(",");

    updateCompany(company);

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
