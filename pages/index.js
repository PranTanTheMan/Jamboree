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
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
