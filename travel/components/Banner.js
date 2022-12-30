import { Container, Image, Box, Text, Heading } from "@chakra-ui/react";
import styles from "../styles/banner.module.css";
import { useRouter } from "next/router";
import React from "react";

function Banner() {
  const router = useRouter();
  return (
    <Container
      maxW={"100%"}
      minHeight={{ base: "65vh", md: "80vh", lg: "60vh" }}
      backgroundColor={"#F7F7F7"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={"Montserrat"}
    >
      <Box
        width={{ base: "100%", md: "100%", lg: "77rem" }}
        height={"20rem"}
        position={"relative"}
      >
        <Image
          src="/banner.jpg"
          width={{ base: "100%", md: "100%", lg: "77rem" }}
          height={"20rem"}
          p={{ base: "1", md: "1", lg: "5" }}
          border={"1px solid #fff"}
        />
        <Box
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={"5"}
          color={"#FFF"}
        >
          <Text
            fontSize={{ base: "1.3rem", md: "1.3rem", lg: "1.6rem" }}
            mr={{ base: "auto", md: "auto", lg: "0" }}
          >
            your guide to
          </Text>
          <Heading
            textTransform={"uppercase"}
            fontSize={{ base: "3xl", md: "3xl", lg: "5xl" }}
            fontWeight={"700"}
            letterSpacing={".2rem"}
          >
            the paradise
          </Heading>
          <button
            className={styles.button}
            m
            onClick={() => {
              router.push("/gallery");
            }}
          >
            Discover more
          </button>
        </Box>
      </Box>
    </Container>
  );
}

export default Banner;
