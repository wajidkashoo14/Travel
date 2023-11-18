import { Container, Flex, Heading, Text, Box, color } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/footer.module.css";
import { GrFacebook } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

function Footer() {
  return (
    <Container
      minH={"50vh"}
      maxW={"100%"}
      bg={"#06283d"}
      display={{ base: "block", md: "block", lg: "flex" }}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"#fff"}
      py={"6"}
      fontFamily={"Montserrat"}
    >
      <Box
        width={{ base: "100%", md: "100%", lg: "80%" }}
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10rem"}
        py={"2rem"}
        borderBottom={"1px solid #986D7B"}
        minHeight={"60vh"}
      >
        <Flex
          flexDir={"column"}
          maxW={{ base: "100%", md: "100%", lg: "350px" }}
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #80A1AE"}
            width={{ base: "100%", md: "100%", lg: "100%" }}
            mb={"1.5rem"}
            textAlign={{ base: "left", md: "left", lg: "center" }}
            mx={{ base: "2", md: "3", lg: "0" }}
          >
            About us
          </Heading>
          <Box>
            <Text
              fontSize={".9rem"}
              fontWeight={"300"}
              textAlign={"left"}
              color={"#BECFD6"}
              p={{ base: "3", md: "3", lg: "0" }}
            >
              We understand that different travelers come with different
              expectations and tastes, & we are forthright in acknowledging
              that. Therefore, our Tour Advisors encourage brief conversations
              with our customers before booking with us so that we may help
              travelers Handcraft Tour Packages that are just “right for them”.
            </Text>
            <Text
              fontSize={".9rem"}
              color={"#BECFD6"}
              p={{ base: "3", md: "3", lg: "0" }}
            >
              <Link color={"#2378C0"} href="/aboutus">
                Read more
              </Link>
              to know what makes Multi Destinations so Unique.
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={{ base: "flex-start", md: "center" }}
          mt={{ base: "1rem", md: "3rem", lg: "0" }}
          bg={"#06283d"}
          ml={"3"}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1.5rem"}
            borderBottom={"2px solid #80A1AE"}
            width={{ base: "100%", md: "100%", lg: "150px" }}
            mb={"1.5rem"}
          >
            quick links
          </Heading>
          <Flex gap={"4"} flexDir={"column"} color={"#BECFD6"}>
            <Link className={styles.link} href="tours">
              <a className={styles.a}> Tours</a>
            </Link>
            <Link className={styles.link} href="hotels">
              <a className={styles.a}> Hotels</a>
            </Link>
            <Link className={styles.link} href="/transport">
              <a className={styles.a}> Transport</a>
            </Link>

            <Link className={styles.link} href="/activities">
              <a className={styles.a}> Activities</a>
            </Link>

            <Link className={styles.link} href="/blogs">
              <a className={styles.a}>Blogs</a>
            </Link>
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Heading
            textTransform={"uppercase"}
            fontSize={"1.2rem"}
            py={"1rem"}
            borderBottom={"2px solid #80A1AE"}
            width={{ base: "100%", md: "100%", lg: "100%" }}
            mb={".8rem"}
            textAlign={{ base: "left", md: "left", lg: "center" }}
            mt={"10"}
            mx={{ base: "2", md: "3", lg: "0" }}
          >
            Contact
          </Heading>
          <Flex flexDir={"column"} gap={"4"}>
            <Box
              px={{ base: "2", md: "2", lg: "4" }}
              color={"#BECFD6"}
              mt={"3"}
            >
              <Text>call us</Text>
              <Text color={"#5191FA"}>+91-9596103894</Text>
              <Text color={"#5191FA"}>+91-9596103894</Text>
            </Box>
            <Box px={{ base: "2", md: "2", lg: "5" }} color={"#BECFD6"}>
              <Text>Email us</Text>
              <Text color={"#5191FA"}>Wkashoo@gmail.com</Text>
            </Box>
            <Box
              gap={"6"}
              px={{ base: "2", md: "2", lg: "5" }}
              color={"#BECFD6"}
            >
              <Text py={"2"}>Follow us</Text>
              <Box display={"flex"} gap={"6"} fontSize={"1.2rem"}>
                <Link
                  className={styles.link}
                  href="https://wajidtravelapp.netlify.app/"
                >
                  <GrFacebook />
                </Link>
                <Link
                  className={styles.link}
                  href="https://wajidtravelapp.netlify.app/"
                >
                  <SiInstagram />
                </Link>
                <Link
                  className={styles.link}
                  href="https://wajidtravelapp.netlify.app/"
                >
                  <BsYoutube />
                </Link>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Text mt={"5"} color={"#80A1AE"}>
        Designed and developed by <Link href="#">Wajid Kashoo</Link>
      </Text>
    </Container>
  );
}

export default Footer;
