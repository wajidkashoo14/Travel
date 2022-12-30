import { Container, Heading, Text, Box, Input, Button } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/discription.module.css";

function Contact() {
  return (
    <Container
      maxW={{ base: "100%", md: "100%", lg: "80%" }}
      height={"80vh"}
      bg={"#fff"}
      id={"contact"}
      fontFamily={"Montserrat"}
    >
      <Box py={"6"} borderBottom={"2px solid #E5E5E5"}>
        <Heading
          className={styles.heading}
          fontSize={{ base: "2xl", md: "2xl", lg: "5xl" }}
        >{` Get in Touch!`}</Heading>
        <Text fontSize={{ base: ".8rem", md: ".8rem", lg: "1rem" }}>
          Get Assistance From Expert Tour Advisors!
        </Text>
      </Box>
      <Box display={"flex"} flexDir={"column"} gap={"5"} py={"10"}>
        <Input placeholder="Name" />
        <Input placeholder="Mobile Number" />
        <Input placeholder="Number of Persons (optional)" />
        <Input placeholder="Number of days (optional)" type={"number"} />
      </Box>
      <Button
        textTransform={"uppercase"}
        bg="#5191FA"
        color={"#fff"}
        variant="solid"
        _hover={{ bg: "blue.500", color: " white" }}
        fontSize={".8rem"}
        fontWeight={"400"}
        padding={{ base: "1rem 1rem", md: "1rem 1rem", lg: "1rem 2rem " }}
        borderRadius={"3px"}
      >
        Request Itineraries with quotes
      </Button>
    </Container>
  );
}

export default Contact;
