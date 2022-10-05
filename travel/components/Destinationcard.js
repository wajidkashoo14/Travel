import { Box, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Destinationcard() {
  return (
    <Box
      height={"150px"}
      boxShadow={"lg"}
      borderRadius={"10px"}
      display={"flex"}
      w={"345px"}
      cursor={"pointer"}
    >
      <Box>
        <Image
          src="valley.jpg"
          objectFit={"cover"}
          w={{ base: "100%", md: "165px", lg: "166px" }}
          h={"100%"}
          borderLeftRadius={"10px"}
        />
      </Box>
      <Box
        p={"5"}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        ml={"2rem"}
      >
        <Heading fontSize={"xl"}>Ladakh</Heading>
        <Text>2 Activities</Text>
        <Text>5 Hotels</Text>
        <Text>6 Tours</Text>
      </Box>
    </Box>
  );
}

export default Destinationcard;
