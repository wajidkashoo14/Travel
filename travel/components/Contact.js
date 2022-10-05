import { Container, Heading, Text, Box, Input, Button } from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Container maxW={"80%"} height={"80vh"} bg={"#fff"}>
      <Box py={"6"} borderBottom={"2px solid #E5E5E5"}>
        <Heading>Let's Get in Touch!</Heading>
        <Text>Get Assistance From Expert Tour Advisors!</Text>
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
        padding={"1rem 2rem "}
        borderRadius={"3px"}
      >
        Request Itineraries with quotes
      </Button>
    </Container>
  );
}

export default Contact;
