import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Members from "../components/Members/Members";
import Repertoire from "../components/Repertoire/Repertoire";
import Gallery from "../components/Gallery/Gallery";
import Event from "../components/Event/Event";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alba del Mondo</title>
        {/* <meta name="description">A website presenting a music band</meta> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Navbar />
      <Header />
      <About />
      <Members />
      <Repertoire />
      <Gallery />
      <Event />
      <Footer />
    </>
  );
}
