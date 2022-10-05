import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";

function Tourcategories() {
  return (
    <Container maxW={"80%"} height={"80vh"} bg={"#fff"}>
      <Heading textAlign={"center"} my={"8"}>
        Tour categories
      </Heading>
      <Box display={"flex"} flexWrap={"wrap"} gap={"5"} w={"100%"}>
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </Box>
    </Container>
  );
}

export default Tourcategories;
