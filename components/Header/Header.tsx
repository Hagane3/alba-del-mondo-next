import Image from "next/image";
import classes from "./Header.module.css";
import logo from "../../public/images/logo_transp.png";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.titles}>
        <Image className={classes.logo} src={logo} alt="big logo picture" />
        <h1>Alba del Mondo</h1>
        <h2>early music ensamble</h2>
      </div>
      <div className={classes.arrow}>
        <BsFillArrowDownCircleFill color="#ffffff5e" size="4rem" />
      </div>
    </header>
  );
}

export default Header;
