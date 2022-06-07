import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { companiesApi } from "../../services/companies";
import cl from "./CompanyForm.module.scss";

const CompanyForm = ({ company }: any) => {
  const [updateCompany] = companiesApi.useUpdateCompanyMutation();

  const { register, handleSubmit } = useForm<any>({
    defaultValues: {
      shortName: company.shortName,
      name: company.name,
      contractNumber: company.contract.no,
      contractDate: company.contract.issue_date,
      businessEntity: company.businessEntity,
      Type1: company.type[0],
      Type2: company.type[1],
    },
  });

  const onSubmit = (company: any) => {
    updateCompany({ ...company });
    console.log(company);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <label htmlFor="shortName">Название</label>
      <input {...register("shortName", { required: true })} />
      <label htmlFor="name">полное название</label>
      <input {...register("name", { required: true })} />
      <label htmlFor="contractNumber">номер договора</label>
      <input {...register("contractNumber", { required: true })} />
      <label htmlFor="contractDate">дата договора</label>
      <input {...register("contractDate", { required: true })} />
      <label htmlFor="businessEntity">форма компании</label>
      <input {...register("businessEntity", { required: true })} />
      <label htmlFor="Type1">тип 1</label>
      <input {...register("Type1", { required: true })} />
      <label htmlFor="Type2">тип 2</label>
      <input {...register("Type2", { required: true })} />
      <input type="submit" />
    </form>
  );
};

export default CompanyForm;
