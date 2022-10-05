import { Container, Button, Box, Heading } from "@chakra-ui/react";
import React from "react";
import Destinationcard from "./Destinationcard";

function TrendingDestinations() {
  return (
    <Container maxW={"80%"} height={"55vh"} bg={"#fff"} textAlign={"center"}>
      <Heading my={"5"}>Trending Destinations</Heading>
      <Box display={"flex"} flexWrap={"wrap"} gap={"8"}>
        <Destinationcard />
        <Destinationcard />
        <Destinationcard />
        <Destinationcard />
        <Destinationcard />
        <Destinationcard />
      </Box>
      <Box
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          mt={"10"}
          size="lg"
          bg="#FF9900"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
        >
          More Destinations
        </Button>
      </Box>
    </Container>
  );
}

export default TrendingDestinations;
