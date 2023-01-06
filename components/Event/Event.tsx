import classes from "./Event.module.css";
import Image from "next/image";

import eventImage from "../../public/images/event.webp";

function Event() {
  return (
    <section id="event" className={classes.event}>
      <div className={classes.description}>
        <p className={classes.title}>Musica Dell’Anima</p>
        <div className={classes.content}>
          <p className={classes.first}>
            Wschodni Festiwal Muzyki Barokowej
            <strong>MUSICA DELL &quot; ANIMA w Zamościu</strong> to inicjatywa
            kulturalna zapoczątkowana w 2021 roku przez Adama Kamienieckiego i
            współorganizowana wraz z zespołem muzyki dawnej
            <strong>Alba del Mondo.</strong>
            Wydarzenie obejmuje koncerty prezentujące w dużej mierze rzadko
            wykonywane przez polskich artystów dzieła z epoki baroku. To właśnie
            na nią przypada okres największego i najszybszego rozwoju Padwy
            Północy.
          </p>
          <p className={classes.second}>
            <strong>
              Dzięki zróżnicowanemu programowi już pierwsze dwie edycje
              festiwalu obejmowały muzykę włoską, francuską, niemiecką oraz
              angielską - zarówno kameralną, jak i solową.
            </strong>
            Historyczne miasto Zamość stwarza nie tylko idealne warunki pod
            względem wykonawczym, dysponując zabytkowymi (renesansowymi i
            barokowymi) świątyniami, lecz stanowi także wspaniałą oprawę
            wizualną dla tego rodzaju muzyki. W ramach festiwalu powołana
            została także <strong>Zamojska Orkiestra Barokowa</strong>, której
            celem jest lokalna realizacja muzycznych idei i przygotowywanie
            festiwalowych premier.
          </p>
        </div>
      </div>
      <div className={classes.image}>
        <Image src={eventImage} alt="bridge" />
      </div>
    </section>
  );
}

export default Event;
