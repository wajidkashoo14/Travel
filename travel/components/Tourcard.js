import { Box, Container, Image, Link, Text } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";

import React from "react";

function Tourcard() {
  return (
    <Box w={"300px"} h={"350px"}>
      <Box position={"relative"}>
        <Image src="parimahal.jpg" objectFit={"cover"} h={"175px"} w={"100%"} />
        <Text
          background={"#ED0925"}
          color={"#fff"}
          position={"absolute"}
          top={"8"}
          left={"0"}
          px={"2"}
          py={"1"}
          borderBottomRightRadius={"3px"}
          borderTopRightRadius={"3px"}
        >
          Featured
        </Text>
      </Box>
      <Box border={"2px solid #E5E5E5"} px={"2"} py={"2"}>
        <Box display={"flex"} py={"5"} gap={"2"} alignItems={"center"}>
          <GoLocation />
          <Text>Kashmir</Text>
        </Box>
        <Box>
          <Link> Kashmir 3D 2N Tour</Link>
        </Box>
        <Box display={"flex"} gap={"1"} alignItems={"center"} mt={"3"}>
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <AiTwotoneStar color={"#FFDC00"} />
          <Text>5 reviews</Text>
        </Box>
        <Box display={"flex"} gap={"1"} alignItems={"center"} mt={"3"}>
          <AiOutlineClockCircle />
          <Text>3 days 2 nights</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Tourcard;
