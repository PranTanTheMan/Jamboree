import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Flex, Text, Spacer, Icon } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <footer>
        <Flex
          bg={`primary`}
          p={"1.5rem 5%"}
          w={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            className="Logo"
            fontWeight={"600"}
            fontSize={"36px"}
            color="headerColor"
          >
            Jamboree
          </Text>
          <Spacer />
          <Text fontWeight={"400"} fontSize={"24px"} color={"headerColor"}>
            Copyright <Icon as={AiOutlineCopyrightCircle} /> 2022 Jamboree. All
            right reserved
          </Text>
        </Flex>
      </footer>
    </>
  );
}
