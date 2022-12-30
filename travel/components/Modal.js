import {
  Box,
  Flex,
  Button,
  Input,
  StylesProvider,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/modal.module.css";

function Modal({ closeModal }) {
  return (
    <Box
      width={{ base: "100vw", md: "90vw", lg: "100vw" }}
      minH={"100vh"}
      position={"fixed"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      background={"rgba(0,0,0,0.8)"}
      zIndex={"500000"}
      top={"0"}
      left={"0"}
      fontFamily={"Montserrat"}
    >
      <Flex
        width={{ base: "90%", md: "90%", lg: "40rem" }}
        height={["70vh", "70vh", "80vh"]}
        flexDir={"column"}
        position={"relative"}
        background={"#fff"}
        gap={"8"}
        p={{ base: "2", md: "2", lg: "5" }}
        borderRadius={".5rem"}
      >
        <Button
          position={"absolute"}
          top={"5%"}
          right={"5%"}
          onClick={() => closeModal(false)}
          zIndex={"1000000"}
          fontSize={{ base: ".7rem", md: ".8rem", lg: "1.5rem" }}
          size={{ base: "sm", md: "sm", lg: "md" }}
        >
          X
        </Button>
        <Box display={"flex"} flexDir={"column"} gap={"5"} mt={"6"}>
          <Heading
            className={styles.heading}
            fontSize={{ base: "xl", md: "xl", lg: "2xl" }}
          >
            Send an enquiry
          </Heading>
          <Input placeholder="Name" size={{ base: "sm", md: "sm", lg: "md" }} />
          <Input
            placeholder="Mobile Number"
            size={{ base: "sm", md: "sm", lg: "md" }}
          />
          <Input
            placeholder="Email"
            type={"Email"}
            size={{ base: "sm", md: "sm", lg: "md" }}
          />
          <Input
            placeholder="Number of Persons "
            size={{ base: "sm", md: "sm", lg: "md" }}
          />
          <Input
            placeholder="Number of days "
            type={"number"}
            size={{ base: "sm", md: "sm", lg: "md" }}
          />
          <Textarea
            placeholder="Any special requirements"
            type={"number"}
            size="md"
          />
          <Button
            size={{ base: "md", md: "md", lg: "lg" }}
            bg="#5191FA"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
            style={{ padding: "1rem 2rem" }}
            textTransform={"uppercase"}
          >
            send now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default Modal;
