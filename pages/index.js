import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FiLock } from "react-icons/fi";
import { Text } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title> Jamboree | Homepage </title>
        <meta name="description" content="Jamboree is the most secure and coziest way of hanging out with your friends and colleagues." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
