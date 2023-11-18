import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  FormControl,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/aboutus.module.css";
import cards from "../components/AllTourData";
import Alltourcard from "../components/Alltourcard";

function Tours() {
  const [tourCards, setTourCards] = useState(cards);
  return (
    <Box
      py={"8rem"}
      maxWidth={"100vw"}
      minH={"100vh"}
      fontFamily={("Montserrat", "sans-serif")}
      overflowX={"hidden"}
      mx={["8", "8", "0"]}
    >
      <Flex
        width={"100%"}
        flexDir={"column"}
        display={["none", "none", "flex"]}
      >
        <Box maxWidth={"100vw"} height={"40vh"}>
          <Image
            src="./tourscover.jpg"
            width={"100%"}
            height={"35vh"}
            objectFit={"cover"}
            backgroundPosition={"center"}
            loading={"lazy"}
          />
        </Box>
      </Flex>

      <Box
        mx={["0", "2", "10"]}
        display={"flex"}
        flexDir={["column", "column", "row"]}
        justifyContent={"center"}
        flexWrap={"wrap"}
        minH={"100vh"}
        // gap={"10"}
        maxW={"100vw"}
      >
        <Flex
          width={"20%"}
          height={"350px"}
          borderRadius={"5"}
          boxShadow={"lg"}
          display={["none", "none", "flex"]}
        >
          <FormControl
            display={"flex"}
            flexDir={"column"}
            gap={"5"}
            p={"5"}
            border={"1px solid #cacfd0"}
            fontFamily={"Montserrat"}
          >
            <Heading
              className={styles.heading}
              fontSize={"lg"}
              textAlign={"center"}
            >
              Search Tours
            </Heading>
            <Select
              placeholder="Tour type"
              size="lg"
              variant="filled"
              zIndex={"10000"}
            >
              <option value="">Adventure Tour</option>
              <option value="option2">City Tour</option>
              <option value="option3">Group Tour</option>
            </Select>
            <Input type="date" placeholder="From" size="lg" />
            <Input type="date" placeholder="To" size="lg" />
            <Button
              size="lg"
              bg="#5191FA"
              mt={"2rem"}
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
            >
              Search
            </Button>
          </FormControl>
        </Flex>
        <Flex maxWidth={["100vw", "100vw", "70vw"]} flexWrap={"wrap"}>
          <Text
            fontSize={["xl", "xl", "3xl"]}
            fontWeight={"500"}
            mb={"8"}
            ml={["0", "0", "10"]}
            className={styles.heading}
          >
            {`${tourCards.length} Tours found`}
          </Text>
          <Alltourcard cards={tourCards} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Tours;
