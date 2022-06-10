import React from "react";
import { Outlet } from "react-router-dom";
import Submenu from "../../components/submenu/Submenu";
import building from "../../assets/img/Building.png";
import { Link } from "react-router-dom";
import cl from "./MarketLayout.module.scss";

const MarketLayout = () => {
  return (
    <div className={cl.marketLayout}>
      <Submenu title={"Честный агент"} jobTitle={"Менеджер Процесса"}>
        <ul className={cl.submenuItems}>
          <li>
            <Link to={"services"} className={cl.submenuItem}>
              <img src={building} alt="building" />
              <span className={cl.submenuItemText}>услуги</span>
            </Link>
          </li>
          <li>
            <Link to={"companies"} className={cl.submenuItem}>
              <img src={building} alt="building" />
              <span className={cl.submenuItemText}>Организации</span>
            </Link>
          </li>
        </ul>
      </Submenu>
      <Outlet />
    </div>
  );
};

export default MarketLayout;
