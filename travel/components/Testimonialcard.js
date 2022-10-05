import { Box, Image, Text } from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";
import React from "react";

function Testimonialcard() {
  return (
    <Box
      w={"350px"}
      h={"350px"}
      p={"8"}
      border={"2px solid #E5E5E5"}
      position={"relative"}
    >
      <Box position={"absolute"} top={"10%"} right={"10%"} fontSize={"1.6rem"}>
        <FaQuoteRight color="#5191FA" />
      </Box>
      <Box display={"flex"} alignContent={"flex-start"} gap={"2"}>
        <Box>
          <Image src="avatar.jpg" w={"80px"} h={"80px"} borderRadius={"50%"} />
        </Box>
        <Box my={"auto"} alignItems={"center"} justifyContent={"center"}>
          <Text>Wajid Kashoo</Text>
          <Box display={"flex"}>
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Text py={"5"} textAlign={"left"} fontWeight={"300"}>
          I had an amazing trip - all thanks to the travel agency. No hurdles at
          all. Everything was managed very smoothly, they had planned it very
          well. They go out of their way to help us out and take utmost care of
          their customers. Best travel agency! I highly recommend them.
        </Text>
      </Box>
    </Box>
  );
}

export default Testimonialcard;
