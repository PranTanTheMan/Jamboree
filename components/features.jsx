import React from "react";
import { Box, Flex, Text, Icon, HStack, Button } from "@chakra-ui/react";
import { FiLock } from "react-icons/fi";
import { BsFileEarmark, BsTelephone, BsChat } from "react-icons/bs";
import Image from 'next/image'
import { AiOutlineCamera } from "react-icons/ai";

export default function Features() {
  return (
    <>
      <Box
        bgColor={"#F1F1F1"}
        pt={"3rem"}
        id="Features"
        pb={"13rem"}
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Icon as={FiLock} color="primary" fontSize={"75px"} />
          <Text color={"primary"} fontSize={"72px"} fontWeight={"600"}>
            Private rooms
          </Text>
          <Text
            w={"400px"}
            color={"primary"}
            fontWeight={"400"}
            fontSize={"24px"}
            textAlign={"center"}
          >
            Grab your smores, and talk freely. No logging, just all the privacy
            you need
          </Text>
        </Flex>

        <Flex justifyContent={"flex-start"} alignItems={"flex-end"} className="feature-2">
          <Flex
            flexDirection={"column"}
            pt={"146px"}
            pl={"75px"}
            alignItems={"center"}
            pr={"10rem"}
          >
            <Icon as={BsFileEarmark} color="primary" fontSize={"75px"} />
            <Text
              w={"515px"}
              color={"primary"}
              fontSize={"72px"}
              fontWeight={"600"}
              textAlign={"center"}
            >
              Share the unthinkable
            </Text>
            <Text
              w={"400px"}
              color={"primary"}
              fontWeight={"400"}
              fontSize={"24px"}
              textAlign={"center"}
            >
              Jamboree offers free unlimited data sharing. Share all your secret
              moments with no interfering with your privacy
            </Text>
          </Flex>
          <Image
            className="share-image"
            width="600px"
            height="337px"
            src="/Group950.png"
            alt="pogger-image"
          />
        </Flex>
        <Flex alignItems={"center"} py={"10rem"} flexDirection={"column"}>
          <img
            width={"1000px"}
            height={"435px"}
            src="https://media.discordapp.net/attachments/1004992490547458162/1005712619908366376/emojis.png"
            alt="emojis"
          />
          <Text
            pt={"4rem"}
            fontWeight={"600"}
            color="primary"
            fontSize={"64px"}
          >
            A variety of emojis
          </Text>
        </Flex>
        <HStack flexDirection={"row"} spacing={"50px"} px={"65px"}>
          <Box
            width={"725px"}
            height={"780px"}
            bgColor={"primary"}
            borderRadius={"30px"}
          >
            <Flex flexDirection={"column"} alignItems={"center"} w={"100%"}>
              <Flex justifyContent={"center"}>
                <Icon
                  as={BsTelephone}
                  mr={"50px"}
                  fontSize={"7rem"}
                  my={"60px"}
                />
                <Icon as={AiOutlineCamera} fontSize={"7rem"} my={"60px"} />
              </Flex>
              <Text
                w={"531px"}
                fontWeight={"600"}
                fontSize={"64px"}
                textAlign={"center"}
                color="white"
                mb={"20px"}
              >
                Start with a small call
              </Text>
              <Text
                w={"609px"}
                color={"white"}
                fontWeight={"400"}
                fontSize={"36px"}
                textAlign={"center"}
                mb={"20px"}
              >
                Free, Uninterrupted, high quality calls
              </Text>
              <Button
                bgColor={"secondary"}
                color={"primary"}
                borderRadius={"39px"}
                width={"300px"}
                height={"75px"}
                _hover={{
                  bgColor: "#eadf7f",
                }}
              >
                Get Started
              </Button>
            </Flex>
          </Box>
          <Box
            width={"725px"}
            height={"780px"}
            bgColor={"primary"}
            borderRadius={"30px"}
          >
            <Flex flexDirection={"column"} alignItems={"center"} w={"100%"}>
              <Flex justifyContent={"center"}>
                <Icon as={BsChat} fontSize={"7rem"} my={"60px"} />
              </Flex>
              <Text
                w={"531px"}
                fontWeight={"600"}
                fontSize={"64px"}
                textAlign={"center"}
                color="white"
                mb={"20px"}
              >
                Start with a message
              </Text>
              <Text
                w={"609px"}
                color={"white"}
                fontWeight={"400"}
                fontSize={"36px"}
                textAlign={"center"}
                mb={"80px"}
              >
                Private, unlogged messages
              </Text>
              <Button
                bgColor={"secondary"}
                color={"primary"}
                borderRadius={"39px"}
                width={"300px"}
                height={"75px"}
                _hover={{
                  bgColor: "#eadf7f",
                }}
              >
                Get Started
              </Button>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
