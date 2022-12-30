import { Box, Heading, Progress, Image } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/activities.module.css";

function blogs() {
  return (
    <Box
      pt={"8rem"}
      maxWidth={"100vw"}
      minH={"100vh"}
      fontFamily={"Montserrat"}
      display={"grid"}
      placeItems={"center"}
    >
      <Heading className={styles.heading}>Coming Soon...!</Heading>
      <Box>
        <Image
          src="./blogs.jpg"
          width={"100%"}
          height={"35vh"}
          objectFit={"cover"}
          backgroundPosition={"center"}
        />
      </Box>
    </Box>
  );
}

export default blogs;
