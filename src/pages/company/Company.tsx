import React from "react";
import { useParams } from "react-router-dom";

const Company = () => {
  const params = useParams();
  return <div>страница компании {params.id}</div>;
};

export default Company;
