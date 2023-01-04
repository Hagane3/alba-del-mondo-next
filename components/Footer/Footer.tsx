import classes from "./Footer.module.css";
import Image from "next/image";

import { MdAlternateEmail } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsFacebook,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

import logo from "../../public/images/logo_black.png";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.header}>
        <Image src={logo} alt="logo" />
        <p className={classes.title}>ALBA DEL MONDO</p>
        <p className={classes.subtitle}>early music ensamble</p>
      </div>
      <div className={classes.contact}>
        <p className={classes.title}>KONTAKT</p>
        <div className={classes.contactDetails}>
          <div className={classes.phone}>
            <span className={classes.icon}>
              <BsFillTelephoneFill />
            </span>
            <span>696 500 567</span>
          </div>
          <div className={classes.mail}>
            <span className={classes.icon}>
              <MdAlternateEmail />
            </span>
            <span>albadelmondo@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={classes.socials}>
        <p className={classes.title}>O NAS</p>
        <div className={classes.socialsDetails}>
          <span className={classes.icon}>
            <BsFacebook />
          </span>
          <span className={classes.icon}>
            <BsInstagram />
          </span>
          <span className={classes.icon}>
            <BsYoutube />
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
