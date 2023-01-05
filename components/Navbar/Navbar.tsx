import { useState } from "react";

import { Link } from "react-scroll";

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
          <li>
            <Link
              to="about"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              to="members"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Skład
            </Link>
          </li>
          <li>
            <Link
              to="repertoire"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Repertuar
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              to="event"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Festiwal
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.desktopMenu}>
        <ul>
          <li>
            <Link
              to="about"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              O nas
            </Link>
          </li>
          <li>
            <Link
              to="members"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Skład
            </Link>
          </li>
          <li>
            <Link
              to="repertoire"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Repertuar
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              to="event"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Festiwal
            </Link>
          </li>
          <li>
            <Link
              to="footer"
              activeClass={classes.active}
              spy={true}
              smooth={true}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
