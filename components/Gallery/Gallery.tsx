import { useState } from "react";

import SectionTitle from "../UI/SectionTitle/SectionTitle";
import classes from "./Gallery.module.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import GALLERY from "../../data/GALLERY";

function Gallery() {
  const [id, setId] = useState(1);

  const increaseMobileIdHandler = () => {
    if (id === GALLERY.length - 1) {
      setId(0);
    } else {
      setId((prevState) => prevState + 1);
    }
  };

  const decreaseMobileIdHandler = () => {
    if (id === 0) {
      setId(GALLERY.length - 1);
    } else {
      setId((prevState) => prevState - 1);
    }
  };

  const increaseDesktopIdHandler = () => {
    if (id === GALLERY.length - 3) {
      setId(0);
    } else {
      setId((prevState) => prevState + 1);
    }
  };

  const decreaseDesktopIdHandler = () => {
    if (id === 0) {
      setId(GALLERY.length - 3);
    } else {
      setId((prevState) => prevState - 1);
    }
  };
  return (
    <section className={classes.gallery}>
      <div className={classes.mobileImageContainer}>
        <SectionTitle>Galeria</SectionTitle>
        <div className={classes.imageDiv}>
          <Image src={GALLERY[id]} alt="" />
        </div>
        <div className={classes.arrowContainer}>
          <AiOutlineLeft
            className={classes.arrow}
            onClick={decreaseMobileIdHandler}
          />
          <AiOutlineRight
            className={classes.arrow}
            onClick={increaseMobileIdHandler}
          />
        </div>
      </div>
      <div className={classes.desktopImageContainer}>
        <div className={classes.title}>
          <SectionTitle>Galeria</SectionTitle>
        </div>
        <div className={classes.imageContainer}>
          <Image src={GALLERY[id]} alt="image" />
        </div>
        <div className={classes.imageContainer}>
          <Image src={GALLERY[id + 1]} alt="image" />
        </div>
        <div className={classes.imageContainer}>
          <Image src={GALLERY[id + 2]} alt="image" />
        </div>
        <div className={classes.arrowContainer}>
          <AiOutlineLeft
            className={classes.arrow}
            onClick={decreaseDesktopIdHandler}
          />
          <AiOutlineRight
            className={classes.arrow}
            onClick={increaseDesktopIdHandler}
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
