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
    
    <footer>
    © 1992 - 2020 Честный Агент © Все права защищены. 8 (495) 150-21-12
    </footer>
    </>
  );
}

export default App;
