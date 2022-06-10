import React from "react";
import cl from "./Menu.module.scss";
import home from "../../assets/img//sideMenu/Home.png";
import market from "../../assets/img//sideMenu/Market.png";
import search from "../../assets/img//sideMenu/Search.png";
import settings from "../../assets/img//sideMenu/Settings.png";
import chat from "../../assets/img//sideMenu/Chat.png";
import exit from "../../assets/img//sideMenu/Exit.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/store";
import { logout } from "../../store/slices/authSlice";

const Menu = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={cl.menu}>
      <ul className={cl.menuList}>
        <li>
          <Link to={"/"}>
            <img src={home} alt="home"></img>
          </Link>
        </li>
        <li>
          <Link to={"/market"}>
            <img src={market} alt="market"></img>
          </Link>
        </li>
        <li>
          <img src={search} alt="search"></img>
        </li>
      </ul>
      <ul className={cl.menuList}>
        <li>
          <img src={settings} alt="settings"></img>
        </li>
        <li>
          <img src={chat} alt="chat"></img>
        </li>
        <li>
          <button onClick={handleLogout}>
            <img src={exit} alt="exit"></img>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
