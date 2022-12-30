import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/aboutus.module.css";
import cards from "../components/Hoteldata";
import Hotelcard from "../components/Hotelcard";

function Hotels() {
  const [hotelCards, sethotelCards] = useState(cards);
  return (
    <Box
      pt={"8rem"}
      maxWidth={"100vw"}
      minH={"100vh"}
      fontFamily={"Montserrat"}
      pb={"8rem"}
    >
      <Flex width={"100%"} flexDir={"column"}>
        <Box maxWidth={"100vw"} height={"40vh"}>
          <Image
            src="https://www.greavesindia.com/wp-content/uploads/2016/11/pir_panjal_range_1920x1080.jpg"
            width={"100%"}
            height={"35vh"}
            objectFit={"cover"}
            backgroundPosition={"center"}
            loading={"lazy"}
          />
        </Box>
      </Flex>

      <Box
        // mx={"10"}
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        minH={"100vh"}
        maxW={"100vw"}
      >
        <Flex
          width={"20%"}
          height={"350px"}
          borderRadius={"5"}
          boxShadow={"lg"}
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
              Search Hotels
            </Heading>
            <Input
              type="text"
              placeholder="Where are you going ?"
              fontSize={"1rem"}
              size="lg"
              variant="flushed"
            />
            <Input
              type="date"
              placeholder="From-To"
              size="lg"
              variant="flushed"
            />
            <Input type="date" placeholder="To" size="lg" variant="flushed" />
            <Button
              size="lg"
              bg="#5191FA"
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
            >
              Search
            </Button>
          </FormControl>
        </Flex>
        <Flex maxWidth={"70vw"} flexWrap={"wrap"}>
          <Text
            fontSize={"3xl"}
            fontWeight={"500"}
            mb={"8"}
            className={styles.heading}
            ml={"10"}
          >
            {`${hotelCards.length} Hotels found`}
          </Text>
          <Hotelcard cards={hotelCards} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Hotels;
