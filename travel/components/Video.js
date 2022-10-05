import { Container, AspectRatio, Heading } from "@chakra-ui/react";
import React from "react";

function Video() {
  return (
    <Container
      maxW={"80%"}
      height={"80vh"}
      bg={"#fff"}
      mt={"10rem"}
      mx={"auto"}

      //   display={"flex"}
      //   justifyContent={"center"}
      //   alignItems={"center"}
    >
      <Heading my={"3"}>Visual Tour of Kashmir</Heading>
      <AspectRatio maxW="1080px" h={"35rem"} ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
    </Container>
  );
}

export default Video;
