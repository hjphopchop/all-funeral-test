import React from 'react'
import cl from "./HeaderPage.module.scss"
import arrow from "../../assets/img/Arrows.png";
import link from "../../assets/img/page/Link.png"
import reboot from "../../assets/img/page/Reboot.png"
import trash from "../../assets/img/page/Trash.png"
import { useNavigate} from 'react-router-dom';

const HeaderPage = () => {
    const navigate = useNavigate();
    const prev = () => {
      navigate(-1);
    };
  return (
    <header className={cl.header}>
        <div onClick={prev} className={cl.prev}>
          <img src={arrow} /> <span>К списку юридических лиц</span>
        </div>
        
        <div className={cl.headerIcons}>
          <img src={link}></img>
          <img src={reboot}></img>
          <img src={trash}></img>
        </div>
      </header>
  )
}

export default HeaderPage