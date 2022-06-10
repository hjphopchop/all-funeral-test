import React, { Children } from "react";
import Company from "../../components/companyItem/CompanyItem";
import cl from "./CompanyList.module.scss";

const CompanyList = () => {
  const companies = [
    {
      id: 12,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  return (
    <div className={cl.companies}>
      {companies &&
        Children.toArray(
          companies?.map((item) => <Company key={item.id} {...item} />)
        )}
    </div>
  );
};

export default CompanyList;
