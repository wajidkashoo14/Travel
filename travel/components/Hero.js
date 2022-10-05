import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import data from "./data";
import { Box, Text, Button, Image, Heading } from "@chakra-ui/react";

function Hero() {
  const [index, setIndex] = useState(0);
  const { title, subTitle, img } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  const nextTour = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevTour = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <Box
      maxW={"100vw"}
      h={"70vh"}
      backgroundImage={img}
      objectFit={"cover"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      overflow={"hidden"}
      z-index={"-1"}
      mt={"-5rem"}
    >
      <Box
        maxW={"100vw"}
        minH={"100vh"}
        display={"flex"}
        flexDir={"column"}
        gap={"10"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={"2rem"}
          w={"100vw"}
          overflow={"hidden"}
        >
          <Box>
            <Button cursor={"pointer"} size="sm" onClick={prevTour}>
              <AiOutlineLeft fontSize={"1.5rem"} />
            </Button>
          </Box>
          <Box>
            <Button cursor={"pointer"} size="sm">
              <AiOutlineRight fontSize={"1.5rem"} onClick={nextTour} />
            </Button>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDir={"column"}
          gap={"10"}
          mt={"-10rem"}
        >
          <Heading color={"#fff"} fontSize={"5xl"}>
            {title}
          </Heading>
          <Button
            size="lg"
            style={{ padding: "1rem 3rem" }}
            fontSize="xl"
            bg={"#fff"}
            py={"10"}
          >
            {subTitle}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
