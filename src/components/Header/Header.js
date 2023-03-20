import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  const { pathname } = useLocation();
  const activeLink = pathname === "/registercm" ? classes.active : "";

  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <ul className={classes.navbar}>
        <li>
          <Link to="/registercm"  className={activeLink}>
            Register CM
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
