import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";
import Header from "../components/Header/Header";
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
    </>
  );
}
