import React from "react";
import { Header } from "./components/common/Header";
import { TableContructor } from "./components/TableContructor";
import { Navigator } from "./components/common/Navigator";
import { AboutApp } from "./components/AboutApp";

const App = () => {
  const handleNavigation = () => {
    if (window.location.pathname === "/home") {
      return (
        <>
          <Header />
          <TableContructor />
        </>
      );
    } else if (window.location.pathname === "/aboutApp") {
      return (
        <>
          <AboutApp />
        </>
      );
    }
  };

  return (
    <div className="fluid-container">
      {handleNavigation()}
      <Navigator />
    </div>
  );
};

export default App;
