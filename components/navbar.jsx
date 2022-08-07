import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FiLock } from "react-icons/fi";
import {
  Flex,
  Text,
  Button,
  Spacer,
  Box,
  HStack,
  Link,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Flex
        bg={`headerColor`}
        p={"1.5rem 5%"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        id="navbar"
      >
        <a className="Logo" href="/">
          Jamboree
        </a>
        <Spacer />
        <HStack className="pages" spacing={"85px"}>
          <a className="navbar-link" href="#Features">
            Features
          </a>
          <a className="navbar-link" href="/contact">
            Contact
          </a>
          <Button w={"255px"} h={"51px"} bgColor="primary" borderRadius={32.5}>
            <Text
              fontWeight={"600"}
              fontSize={"16px"}
              lineHeight={"17px"}
              color={"#E7E7E7"}
            >
              Open Chatroom
            </Text>
          </Button>
        </HStack>
      </Flex>
    </>
  );
}
