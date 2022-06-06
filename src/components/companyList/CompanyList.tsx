import React, { Children } from "react";
import Company from "../companyItem/CompanyItem";

const Companies = () => {
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
    <div>
      {companies &&
        Children.toArray(
          companies?.map((item) => <Company key={item.id} {...item} />)
        )}
    </div>
  );
};

export default Companies;
