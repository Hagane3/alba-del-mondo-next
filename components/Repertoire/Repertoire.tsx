import { useState } from "react";

import SectionTitle from "../UI/SectionTitle/SectionTitle";
import Dot from "../UI/Dot/Dot";
import Image from "next/image";
import REPERTOIRE from "../../data/REPERTOIRE";

import classes from "./Repertoire.module.css";

const Repertoire = () => {
  const [id, setId] = useState(4);

  const changeRepertoireHandler = (id: number) => {
    setId(id);
  };

  return (
    <section id="repertoire" className={classes.repertoire}>
      <SectionTitle>Repertuar</SectionTitle>
      <div className={classes.repertoireImg}>
        <Image src={REPERTOIRE[id].image} alt="repertoire picture" />
      </div>
      <div className={classes.descriptionHeader}>
        <p className={classes.primaryTitle}>{REPERTOIRE[id].title}</p>
        <p className={classes.secondaryTitle}>{REPERTOIRE[id].subtitle}</p>
      </div>
      <div className={classes.description}>
        <p>{REPERTOIRE[id].description}</p>
        <div className={classes.dotsContainer}>
          {REPERTOIRE.map((item, index) => {
            return (
              <Dot
                key={item.id}
                id={item.id}
                changeRepertoire={changeRepertoireHandler}
                activeId={id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
