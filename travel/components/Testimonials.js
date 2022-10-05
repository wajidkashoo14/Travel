import { Container, Heading, Box } from "@chakra-ui/react";
import React from "react";
import Testimonialcard from "./Testimonialcard";

function Testimonials() {
  return (
    <Container maxW={"80%"} height={"80vh"} bg={"#fff"}>
      <Heading my={"10"}>Testimonials</Heading>
      <Box display={"flex"} gap={"5"}>
        <Testimonialcard />
        <Testimonialcard />
        <Testimonialcard />
      </Box>
    </Container>
  );
}

export default Testimonials;
