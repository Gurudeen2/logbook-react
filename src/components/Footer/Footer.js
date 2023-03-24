import React from "react";
import classes from "./Footer.module.css";
const Footer = (props) => {
  const divlink = "https://wa.me/08063641230";
  return (
    <div className={classes.footer}>
      <p>
        &copy; All Rights Reserved <br />
        Developed by
        <a href={devlink} target="_blank">
          DevTola
        </a>
      </p>
    </div>
  );
};
export default Footer;
