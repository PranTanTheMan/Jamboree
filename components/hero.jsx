import React from "react";
import { VStack, Text, Flex, Box, Button } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <img
          className="dumb-star"
          src="https://media.discordapp.net/attachments/1004992490547458162/1005616220109819934/dumb-star.png"
        ></img>
        <div className="sub-hero">
          <h1>One time, never again</h1>
          <h2> Say what's on your mind</h2>
          <br></br>
          <Button
            bgColor={"secondary"}
            color={"primary"}
            borderRadius={"53px"}
            w={"315px"}
            h={"75px"}
            fontSize={"20px"}
            fontWeight={"600"}
            transition="all 0.5s ease-in-out"
            _hover={{
              bgColor: "#eadf7f",
              transition: "all 0.5s ease-in-out",
              transform: "scale(0.99)",
            }}
          >
            Start Chatting
          </Button>
        </div>
      </div>
    </>
  );
}
