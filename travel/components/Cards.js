import { Container, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Tourcard from "./Tourcard";
import styles from "../styles/discription.module.css";
function Cards() {
  return (
    <Container
      maxW="100vw"
      minHeight={{ base: "90vh", md: "85", lg: "100vh" }}
      backgroundColor={"#F7F7F7"}
      display={"flex"}
      justifyContent={"center"}
      flexDir="column"
    >
      <Heading
        textAlign={"center"}
        fontSize={{ base: "1.2rem", md: "1.2rem", lg: "2.2rem" }}
        className={styles.heading}
      >
        Best rated Tours
      </Heading>

      <Tourcard />
    </Container>
  );
}

export default Cards;
