import classes from "./About.module.css";
import Image from "next/image";
import image1 from "../../public/images/bridge1.png";
import SectionTitle from "../UI/SectionTitle/SectionTitle";

function About() {
  const tempClickHandler = () => {
    alert("Clicked");
  };

  return (
    <section className={classes.about}>
      <div className={classes.content}>
        <div className={classes.description}>
          <div className={classes.titleContainer}>
            <SectionTitle>O nas</SectionTitle>
          </div>
          <p>
            Zespół <strong>Alba del Mondo</strong> został założony w sierpniu
            2020 roku przez barytona Adama Kamienieckiego oraz klawesynistkę
            Lenę Nowakowską. Skupia się przede wszystkim na{" "}
            <strong>
              wykonawstwie dzieł z epoki baroku w nurcie historycznie
              poinformowanym.
            </strong>{" "}
            Skład zespołu, złożony z profesjonalnych muzyków – w większości
            absolwentów Akademii Muzycznej im. Grażyny i Kiejstuta Bacewiczów w
            Łodzi, poszerzany jest zgodnie z zapotrzebowaniem repertuarowym.
          </p>
          <p>
            Zespół wykonuje muzykę XVII- i XVIII-wieczną, pochodzącą z różnych
            zakątków Europy. Zespół regularnie występuje z różnorodnymi
            programami w ramach wielu festiwali i cykli koncertowych w całej
            Polsce. W sierpniu 2021 roku miała miejsce pierwsza trasa koncertowa
            zespołu (woj. świętokrzyskie) z programem{" "}
            <strong>"Muzyka na chwilę".</strong> Zespół jest również
            organizatorem corocznego{" "}
            <strong>
              Wschodniego Festiwalu Muzyki Barokowej MUSICA DELL'ANIMA w
              Zamościu
            </strong>{" "}
            oraz cyklu koncertów{" "}
            <strong>"Barokowe Wieczory w Pałacu Kindermanna” w Łodzi.</strong>
          </p>
        </div>
        <div className={classes.contact}>
          <button onClick={tempClickHandler}>Skontaktuj sie z nami</button>
        </div>
        <div className={classes.imgContainer}>
          <Image src={image1} alt="statue of woman" />
        </div>
      </div>
    </section>
  );
}

export default About;
