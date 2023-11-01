import React from "react";
import { Home } from "./components/Home";
import { Navigator } from "./components/common/Navigator";
import { AddForm } from "./components/FormAdd";
import { AboutApp } from "./components/AboutApp";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={AboutApp} />
        <Route path="/add" exact Component={AddForm} />
      </Routes>
      <Navigator />
    </Router>
  );
};

export default App;
