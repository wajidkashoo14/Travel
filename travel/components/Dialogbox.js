import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Dialogbox() {
  return (
    <Container maxW={"80vw"} height={"65vh"} bg={"#fff"} mt={"12rem"}>
      <Box border={"3px solid #5191FA "} maxW={"90vw"} height={"35vh"}>
        <Box
          p={"4"}
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={"3xl"} letterSpacing={"0.7px"} mb={"5px"}>
            Travel Booking made Simple!
          </Heading>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            As simple as 1 2 3
          </Heading>
        </Box>

        <Box ml={"10"}>
          <Text>1. Tell us your Preferences & Budget.</Text>
          <Text>2. Get Detailed Itineraries with Prices.</Text>
          <Text>3. Compare, Customise & Book immediately.</Text>
        </Box>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={"3"}
        >
          <Button
            size="lg"
            bg="#FF9900"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
            style={{ padding: "1rem 2rem" }}
          >
            Contact us
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          size="lg"
          bg="#4CADC9"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "2rem 3rem" }}
          my={"8"}
          fontSize={"1.5rem"}
        >
          Tap to check our google reviews
        </Button>
      </Box>
    </Container>
  );
}

export default Dialogbox;
