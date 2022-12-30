import React from "react";
import {
  Container,
  Image,
  Box,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/signup.module.css";

function login() {
  return (
    <Container
      minHeight={"100vh"}
      maxW={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#E8EEF0"}
      zIndex={"-10"}
      pt={"8rem"}
      fontFamily={"Montserrat"}
    >
      <Box position={"relative"}>
        <Image
          src="login.jpg"
          minWidth={"80vw"}
          height={"75vh"}
          objectFit={"cover"}
          position={"relative"}
          zIndex={"1"}
        />
        <Box
          position={"absolute"}
          bg={"rgba(255,255,255,0.6)"}
          top={"0"}
          right={"0"}
          width={"800px"}
          height={"100%"}
          zIndex={"1000"}
          clipPath={"polygon(0 0, 100% 0, 100% 100%, 31% 100%)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
        >
          <Box
            width={"70%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={"6"}
            px={"8rem"}
          >
            <Heading
              textAlign={"center"}
              width={"100%"}
              fontSize={"3xl"}
              fontWeight={"600"}
              className={styles.heading}
            >
              Welcome back
            </Heading>
            <input
              size="lg"
              bg={"#fff"}
              type={"email"}
              placeholder={"Email"}
              className={styles.input}
            />

            <input
              size="lg"
              bg={"#fff"}
              type={"password"}
              placeholder={"Password"}
              className={styles.input}
            />
            <Button
              size={"lg"}
              width={"100%"}
              bg="#5191FA"
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
              fontSize={"1.3rem"}
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default login;
