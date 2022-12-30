import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

function Gallerycard({ heading, text, img }) {
  return (
    <Box
      position={"relative"}
      cursor={"pointer"}
      overflow={"hidden"}
      transition={"all 0.2s"}
      h={"230px"}
      w={{ base: "100%", md: "100%", lg: "600px" }}
      fontFamily={"Montserrat"}
      mb={{ base: "2", md: "2", lg: "0" }}
    >
      <Image
        src={img}
        h={"230px"}
        w={{ base: "100%", md: "100%", lg: "600px" }}
        loading={"lazy"}
        objectFit={"cover"}
        backgroundPosition={"center"}
      />

      <Box
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        transform={"translate(-25%,-50%)"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1"}
        width={"600px"}
      >
        <Heading
          fontSize={"3xl"}
          color={"#fff"}
          fontWeight={"500"}
          textTransform={"uppercase"}
        >
          {heading}
        </Heading>
        <Text color={"#fff"} fontSize={"1.1rem"}>
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default Gallerycard;
