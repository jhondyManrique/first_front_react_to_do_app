import React from "react";
import ReactDOM from "react-dom/client";
import { Header, Article, Table, Span } from "./Components.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Article />
    <Table />
    <Span />
  </React.StrictMode>
);
