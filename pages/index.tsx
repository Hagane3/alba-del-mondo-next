import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Members from "../components/Members/Members";
import Repertoire from "../components/Repertoire/Repertoire";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alba del Mondo</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Members />
      <Repertoire />
      <Gallery />
    </>
  );
}
