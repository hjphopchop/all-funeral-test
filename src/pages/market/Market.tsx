import React from "react";
import Submenu from "../../components/submenu/Submenu";
import cl from "./Market.module.scss";
import building from "../../assets/img/Building.png";
import { Route, Routes, Link } from "react-router-dom";
import CompanyList from "../../components/companyList/CompanyList";
import Company from "../company/Company";
import Services from "../services/Services";

const Market = () => {
  return (
    <>
      <Submenu title={"Честный агент"} jobTitle={"Менеджер Процесса"}>
        <ul className={cl.submenuItems}>
          <li>
            <Link to={"services"} className={cl.submenuItem}>
              <img src={building}></img>{" "}
              <span className={cl.submenuItemText}>услуги</span>
            </Link>
          </li>
          <li>
            <Link to={"companies"} className={cl.submenuItem}>
              <img src={building}></img>{" "}
              <span className={cl.submenuItemText}>Организации</span>
            </Link>
          </li>
        </ul>
      </Submenu>
      <Routes>
        <Route path="services" element={<Services />} />
        <Route path="companies" element={<CompanyList />} />
        <Route path="companies/:id" element={<Company />} />
      </Routes>
    </>
  );
};

export default Market;
