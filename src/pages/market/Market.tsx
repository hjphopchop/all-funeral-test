import React from "react";
import Submenu from "../../components/submenu/Submenu";
import cl from "./Market.module.scss";
import building from "../../assets/img/Building.png";

const Market = () => {
  return (
    <div>
      <Submenu title={"Честный агент"} jobTitle={"Менеджер Процесса"}>
        <ul className={cl.submenuItems}>
          <li className={cl.submenuItem}>
            <img src={building}></img> <span>услуги</span>
          </li>
          <li className={cl.submenuItem}>
            <img src={building}></img> <span>Организации</span>
          </li>
        </ul>
      </Submenu>
      Market
    </div>
  );
};

export default Market;
