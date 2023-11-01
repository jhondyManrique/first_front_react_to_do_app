import { NavLink } from "react-router-dom";

export const Button = ({ nameButton, onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {nameButton}
    </button>
  );
};

export const LinkButton = ({ link, name }) => {
  return (
    <NavLink className="btn btn-primary" to={link}>
      {name}
    </NavLink>
  );
};
