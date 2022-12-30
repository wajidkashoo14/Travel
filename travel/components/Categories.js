import { Box, Button, Image, Heading, Text, Container } from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

function Categories({ type, img }) {
  return (
    <Box
      position={"relative"}
      borderRadius={"8px"}
      cursor={"pointer"}
      overflow={"hidden"}
      transition={"all 0.2s"}
      minH={"400px"}
      maxW={"550px"}
    >
      <Image
        src={img}
        objectFit={"cover"}
        h={{ base: "100%", md: "400px", lg: "350px" }}
        loading={"lazy"}
      />
      <Heading
        position={"absolute"}
        top={"70%"}
        left={"5%"}
        fontSize={"2xl"}
        color={"#fff"}
        fontWeight={"700"}
      >
        {type}
      </Heading>
      <Box position={"absolute"} top={"10%"} right={"5%"}>
        <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
      </Box>
      <Box
        position={"absolute"}
        bottom={"15%"}
        left={"5%"}
        display={"flex"}
        gap={"3"}
      >
        <GoLocation fontSize={"1.5rem"} color={"#fff"} />
        <Text color={"#fff"} fontSize={"1.3rem"}>
          Kashmir
        </Text>
      </Box>
    </Box>
  );
}

export default Categories;
