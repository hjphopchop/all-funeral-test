import React from "react";
import Submenu from "../../components/submenu/Submenu";
import cl from "./Market.module.scss";
import building from "../../assets/img/Building.png";
import { Route, Routes, Link, Navigate, Outlet } from "react-router-dom";
import CompanyList from "../../components/companyList/CompanyList";
import Company from "../company/Company";

const Market = () => {
  return (
    <div className={cl.market}>
      <div className={cl.marketItems}>
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
          <Route path="services" element={<p>services</p>} />
          <Route path="companies" element={<CompanyList />} />
          <Route path="companies/:id" element={<Company />} />
        </Routes>
      </div>
    </div>
  );
};

export default Market;
