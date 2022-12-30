import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaQuoteRight } from "react-icons/fa";

function Testimonialcard({ name, img, text }) {
  return (
    <Box
      width={{ base: "100%", md: "100%", lg: "50rem" }}
      p={"8"}
      position={"relative"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      // mt={{ base: "4rem", md: "3rem", lg: "0" }}
    >
      <Box display={"grid"} placeItems={"center"}>
        <Image
          src={img}
          boxSize="150px"
          objectFit="cover"
          borderRadius={"50%"}
          filter={"drop-shadow(0 0 0.45rem crimson)"}
        />
        <Text py={"4"} color={"#06283d"} fontWeight={"500"}>
          {name}
        </Text>
      </Box>

      <Box>
        <Text py={"10"} fontWeight={"300"}>
          {text}
        </Text>
      </Box>
      <Box>
        <FaQuoteRight
          fontSize={"2rem"}
          color={"#06283d"}
          onClick={(e) => {
            setIndex(index + 1);
          }}
        />
      </Box>
    </Box>
  );
}

export default Testimonialcard;
