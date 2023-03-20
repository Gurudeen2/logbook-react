import React from "react";
import { Link } from "react-router-dom";
// import imgMeal from "../../assets/images/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <div style={{ textAlign: "right" }}>
        <Link> Register CM</Link>
      </div>
      {/* <HeaderCartButton onShowCart={props.onShowCart} /> */}
    </header>
  );
};

export default Header;
