import React from "react";
import { Header } from "./components/common/Header";
import { Home } from "./components/Home";
import { Navigator } from "./components/common/Navigator";
import { AboutApp } from "./components/AboutApp";

const App = () => {
  const handleNavigation = () => {
    if (window.location.pathname === "/home") {
      return (
        <>
          <Header />
          <Home />
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
    <div>
      {handleNavigation()}
      <Navigator />
    </div>
  );
};

export default App;
