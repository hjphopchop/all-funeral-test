import React from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Menu from "./components/menu/Menu";

function App() {
  const isAuth = true;
  return (
    <>
    <div className="main">
      {isAuth && <Menu />}
      <div className="content">
        <AppRouter />
      </div>
    </div>
    <footer>
    © 1992 - 2020 Честный Агент © Все права защищены. 8 (495) 150-21-12
    </footer>
    </>
  );
}

export default App;
