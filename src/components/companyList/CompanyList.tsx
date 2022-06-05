import React from "react";
import Company from "../companyItem/CompanyItem";

const Companies = () => {
  const companies = [
    {
      id: 1,
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
        companies.map((item) => (
          <>
            <Company key={item.id} {...item} />
          </>
        ))}
    </div>
  );
};

export default Companies;
