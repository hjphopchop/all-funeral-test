import React from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Menu from "./components/menu/Menu";
import { useTypedSelector } from "./hooks/store";

function App() {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  return (
    <>
      {isAuth && <Menu />}
      <div className="content">
        <AppRouter />
      </div>

      <footer className="footer">
        <div>© 1992 - 2020 Честный Агент © Все права защищены.</div>
        <div>8 (495) 150-21-12</div>
      </footer>
    </>
  );
}

export default App;
