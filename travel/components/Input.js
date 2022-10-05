import { Button, Container, Box, Select } from "@chakra-ui/react";
import React from "react";

function Input() {
  return (
    <Container
      maxWidth={"60vw"}
      mx={"auto"}
      height={"5rem"}
      marginTop={"2.5rem"}
      backgroundColor={"#fff"}
      boxShadow={"lg"}
      py={"3.5rem"}
      px={"2rem"}
      my={"-3rem"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"5"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"5"}
        w={"100%"}
      >
        <Select placeholder="Where are you going" size="lg" variant="filled">
          <option value="option1">Gulmarg</option>
          <option value="option2">Pahalgam</option>
          <option value="option3">Sonmarg</option>
        </Select>
        <Select placeholder="Tour type" size="lg" variant="filled">
          <option value="">Adventure Tour</option>
          <option value="option2">City Tour</option>
          <option value="option3">Group Tour</option>
        </Select>

        <Button
          size="lg"
          bg="#5191FA"
          color={"#fff"}
          variant="solid"
          _hover={{ bg: "blue.500", color: " white" }}
          style={{ padding: "1rem 2rem" }}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}

export default Input;
