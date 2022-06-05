import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export interface CompanyProps {
  id: number;
}
const Company: FC<CompanyProps> = ({ id }) => {
  const clickBtn = () => {
    router(`${id}`);
  };
  const router = useNavigate();
  return (
    <>
      <div>Company {id}</div>

      <button onClick={clickBtn}>открыть</button>
    </>
  );
};

export default Company;
