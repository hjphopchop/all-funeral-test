import React from "react";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Menu from "./components/menu/Menu";

function App() {
  const isAuth = true;
  return (
    <div className="main">
      {isAuth && <Menu />}
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
