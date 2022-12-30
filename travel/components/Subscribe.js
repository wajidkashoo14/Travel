import { Container, Input, Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

function Subscribe() {
  return (
    <Container
      maxW={{ base: "90%", md: "100%", lg: "80%" }}
      minH={{ base: "50vh", md: "60vh", lg: "25vh" }}
      bgGradient="linear(to-r, #0f659a, #06283d)"
      display={{ base: "block", md: "block", lg: "flex" }}
      justifyContent={"space-around"}
      alignItems={"center"}
      mx={{ base: "auto", md: "1rem", lg: "10rem" }}
      borderRadius={"1rem"}
      my={{ base: "4rem", md: "3rem", lg: "6rem" }}
      fontFamily={"Montserrat"}
      py={{ base: "1", md: "1", lg: "0" }}
    >
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10"}
        mt={{ base: "5", md: "5", lg: "0" }}
      >
        <AiOutlineMessage fontSize={"3rem"} color={"#B7C4CF"} />
        <Text
          fontSize={{ base: "1.5rem", md: "1.5rem", lg: "1.4rem" }}
          color={"#fff"}
          mt={{ base: "5", md: "5", lg: "0" }}
        >
          Latest offers on Trending Destinations
        </Text>
      </Box>
      <Box display={{ base: "block", md: "block", lg: "flex" }} gap={"5"}>
        <Input
          type={"email"}
          placeholder="Your Email"
          size="lg"
          backgroundColor={"#fff"}
          my={{ base: "5", md: "10", lg: "0" }}
        />
        <Button
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
        >
          Subscribe
        </Button>
      </Box>
    </Container>
  );
}

export default Subscribe;
