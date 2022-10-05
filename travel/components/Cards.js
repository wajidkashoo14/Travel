import { Container, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Tourcard from "./Tourcard";

function Cards() {
  return (
    <Container maxW={"80vw"} height={"60vh"} bg={"#fff"}>
      <Heading my={"5"}>Best rated Tours</Heading>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
      >
        <Tourcard />
        <Tourcard />
        <Tourcard />
        <Tourcard />
      </Box>
    </Container>
  );
}

export default Cards;
