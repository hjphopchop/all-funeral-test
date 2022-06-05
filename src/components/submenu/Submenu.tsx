import React, { FC, ReactNode } from "react";
import cl from "./Submenu.module.scss";

interface SubmenuProps {
  title: string;
  jobTitle: string;
  children: ReactNode;
}
const Submenu: FC<SubmenuProps> = ({ title, jobTitle, children }) => {
  return (
    <div className={cl.submenu}>
      <div className={cl.submenuHeader}>
        <h3>{title}</h3>
        <p className={cl.subMenuJobTitle}>{jobTitle}</p>
      </div>
      {children}
    </div>
  );
};

export default Submenu;
