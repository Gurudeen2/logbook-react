import Card from "../UI/Card";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <p>
        &copy; All Rights Reserved <a href="wa.me/08063641230">DevTola</a>
      </p>
    </div>
  );
};
export default Footer;
