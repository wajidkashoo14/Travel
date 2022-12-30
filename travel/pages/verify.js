import {
  Box,
  Image,
  Container,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/signup.module.css";

function verify() {
  return (
    <Container
      minHeight={"100vh"}
      minW={"100vw"}
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
          bg={"rgba(255,255,255,0.8)"}
          top={"0"}
          left={"0"}
          right={"0"}
          textAlign={"center"}
          width={"800px"}
          height={"100%"}
          zIndex={"1000"}
          mx={"auto"}
          clipPath={"polygon(1% 0, 100% 0, 88% 100%, 12% 100%)"}
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
              OTP Verification
            </Heading>
            <Text color={"#06283d"}>Enter the OTP sent to 9596103894</Text>
            <input
              size="lg"
              bg={"#fff"}
              type={"number"}
              className={styles.input}
            />

            <Text color={"#06283d"}>
              {`Don't recieve OTP ?`} <Link color={"#F15457"}> Resend OTP</Link>
            </Text>

            <Button
              size={"lg"}
              width={"100%"}
              bg="#5191FA"
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
              fontSize={"1.3rem"}
            >
              Verify
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default verify;
