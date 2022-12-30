import { Box, Button, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import React from "react";
import styles from "../styles/discription.module.css";

function Discription() {
  return (
    <Container
      maxW={"100vw"}
      mt={{ base: "25vh", md: "25vh", lg: "0" }}
      backgroundColor={"#F7F7F7"}
      pt={{ base: "5rem", md: "5rem", lg: "9rem" }}
      px={{ base: "1rem", md: "3rem", lg: "7rem" }}
      fontFamily={"Montserrat"}
    >
      <Heading
        maxW={"100%"}
        className={styles.heading}
        textAlign={"center"}
        fontSize={{ base: "1.2rem", md: "1.2rem", lg: "2.2rem" }}
        mb={"1rem"}
      >
        EXCITING TOURS FOR ADVENTUROUS PEOPLE
      </Heading>
      <Flex mt={{ base: "1rem", md: "2rem", lg: "3rem" }} gap={"5rem"}>
        <Box width={"100%"}>
          <Heading
            maxW={"100%"}
            fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}
            my={"4"}
            className={styles.heading__secondary}
            textAlign={"center"}
          >
            {`YOU'RE GOING TO FALL IN LOVE WITH NATURE`}
          </Heading>
          <Text
            maxW={"100%"}
            textAlign={{ base: "justify", md: "justify", lg: "center" }}
            fontWeight={"400"}
            fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
            mx={{ base: ".5rem", md: "1.2rem", lg: "6rem" }}
            lineHeight={{ base: "1.3rem", md: "1.2rem", lg: "1.6rem" }}
          >
            {` The Union Territory of Jammu and Kashmir is a great tourist
            destination. Picturesque and enchanting, Kashmir is cradled high in
            the lofty green Himalayas and hailed all over the world for its
            incredible natural beauty. Surrounded by mountain peaks, lush green
            valleys, glistening lakes, temples and spectacular Mughal-era
            gardens, it has inspired poets through centuries. Kashmir is
            crisscrossed by chinar tree-lined roads and quaint wooden bridges;
            and is home to bustling bazaars, sufi shrines and forts. Add to
            this, the charms of flavourful Kashmiri cuisine and apples and
            walnuts from the lush orchards surrounding it.`}
          </Text>
          <Heading
            className={styles.heading__secondary}
            fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}
            mt={"10"}
            mb={"5"}
            textAlign={"center"}
          >
            LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
          </Heading>
          <Text
            maxW={"100%"}
            textAlign={{ base: "justify", md: "justify", lg: "center" }}
            fontWeight={"400"}
            fontSize={{ base: "1rem", md: "1rem", lg: "1rem" }}
            mx={{ base: ".5rem", md: "1.2rem", lg: "6rem" }}
            lineHeight={{ base: "1.3rem", md: "1.2rem", lg: "1.6rem" }}
          >
            {` In winter, Kashmir takes on a white glow, covered in soft snow and
            skiers making a beeline for its famous slopes. And in summer, as the
            snow melts, and the flowers in the meadows bloom, it resembles an
            artist's canvas.`}
          </Text>

          <button className={styles.button}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={"1"}>
              Learn more <AiOutlineArrowRight />
            </Flex>
          </button>
        </Box>
      </Flex>
    </Container>
  );
}

export default Discription;
