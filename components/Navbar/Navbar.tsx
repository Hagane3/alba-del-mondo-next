import { useState } from "react";

import Image from "next/image";
import logo from "../../public/images/logo_transp.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import classes from "./Navbar.module.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={classes.nav}>
      <Image className={classes.logo} src={logo} alt="logo picture" />
      <div className={classes.mobileIcons}>
        <AiOutlineMenu
          size="2rem"
          style={{ color: "#ffffff" }}
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`${classes.mobileMenu} ${
          isMenuOpen ? classes.showMobileMenu : classes.hideMobileMenu
        }`}
      >
        <AiOutlineClose
          onClick={toggleMenu}
          size="2rem"
          style={{
            color: "#ffffff",
            position: "absolute",
            top: "1rem",
            right: "1rem",
          }}
        />
        <ul>
          <li>O nas</li>
          <li>Skład</li>
          <li>Repertuar</li>
          <li>Galeria</li>
          <li>Festiwal</li>
          <li>Kontakt</li>
        </ul>
      </div>
      <div className={classes.desktopMenu}>
        <ul>
          <li>O nas</li>
          <li>Skład</li>
          <li>Repertuar</li>
          <li>Galeria</li>
          <li>Festiwal</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
