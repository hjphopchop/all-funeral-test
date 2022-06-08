import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./CompanyItem.module.scss";

export interface CompanyProps {
  id: number;
}
const Company: FC<CompanyProps> = ({ id }) => {
  const clickBtn = () => {
    router(`${id}`);
  };
  const router = useNavigate();
  return (
    <div className={cl.company}>
      <h2>Company {id}</h2>

      <button onClick={clickBtn}>открыть</button>
    </div>
  );
};

export default Company;
