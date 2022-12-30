import React, { useState } from "react";
import data from "../components/Activitiesdata";
import Activitiescard from "../components/Activitiescard";
import {
  Box,
  Container,
  Image,
  Flex,
  Heading,
  Text,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/activities.module.css";

function Activities() {
  const [Activity, setActivity] = useState(data);

  if (!Activity)
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
        width={"100vw"}
        py={"8rem"}
      >
        <div className={styles.spinner}></div>
      </Box>
    );

  return (
    <Box
      pt={"8rem"}
      maxWidth={"100vw"}
      minH={"100vh"}
      pb={"8rem"}
      fontFamily={"Montserrat"}
    >
      <Flex width={"100%"} flexDir={"column"}>
        <Box maxWidth={"100vw"} height={"40vh"}>
          <Image
            src="./activitiescover.jpg"
            width={"100%"}
            height={"35vh"}
            objectFit={"cover"}
            backgroundPosition={"top"}
            loading={"lazy"}
          />
        </Box>
      </Flex>

      <Box
        mx={"10"}
        display={"flex"}
        flexWrap={"wrap"}
        minH={"100vh"}
        gap={"10"}
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
          >
            <Heading
              fontSize={"lg"}
              textAlign={"center"}
              className={styles.heading}
            >
              Search Activities
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
            mb={"5"}
            className={styles.heading}
          >
            {`${Activity.length} Activities found`}
          </Text>
          <Activitiescard cards={Activity} display={"flex"} flexWrap={"wrap"} />
        </Flex>
      </Box>
    </Box>
  );
}

export default Activities;
