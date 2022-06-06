import React from "react";
import cl from "./CompanyInfo.module.scss";
import pencil from "../../assets/img/page/Pencil.png";

const CompanyInfo = () => {
  return (
    <div className={cl.companyInfo}>
      <div className={cl.companyInfoTitle}>
        <h3>Перспективные захоронения </h3>
        <img src={pencil} />
      </div>
      <div>
        <div className={cl.companyInfoTitle}>
          <p>Общая информация </p>
          <img src={pencil} />
        </div>
        <div className={cl.infoContent}>
          <div className={cl.infoContentLeft}>
            <div>Полное название:</div>
            <div>договор:</div>
            <div>форма:</div>
            <div>тип:</div>
          </div>

          <div>
            <div>ООО Фирма “Перспективные захоронения”</div>
            <div>12345 от 12.03.2015</div>
            <div>ООО</div>
            <div>Агент, Подрядчик</div>
          </div>
        </div>

        <div className={cl.companyInfoTitle}>
          <p>Контактные данные </p>
          <img src={pencil} />
        </div>
        <div className={cl.infoContent}>
          <div className={cl.infoContentLeft}>
            <div>Полное название:</div>
            <div>договор:</div>
            <div>форма:</div>
            <div>тип:</div>
          </div>

          <div>
            <div>ООО Фирма “Перспективные захоронения”</div>
            <div>12345 от 12.03.2015</div>
            <div>ООО</div>
            <div>Агент, Подрядчик</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
