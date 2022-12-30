import {
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  AspectRatio,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/contact.module.css";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function contact() {
  return (
    <Container
      bg={"#C8C9C3"}
      maxW={"100vw"}
      py={"10rem"}
      display={"grid"}
      placeItems={"center"}
      paddingBottom={"6rem"}
      fontFamily={"Montserrat"}
    >
      <Flex
        bg={"#EDEDEB"}
        w={"80vw"}
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"10"}
        boxShadow={"lg"}
      >
        <Box>
          <Image
            src="login.jpg"
            minWidth={"40vw"}
            height={"90vh"}
            objectFit={"cover"}
            position={"relative"}
            zIndex={"1"}
          />
        </Box>
        <Box
          w={"600rem"}
          bg={"#fff"}
          height={"100vh"}
          ml={"-15rem"}
          zIndex={"1000"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexWrap={"nowrap"}
            gap={"10"}
            flexDir={"column"}
            width={"90%"}
            border={"1px solid black"}
            p={"3rem 6rem"}
          >
            <Heading className={styles.heading}>Contact us</Heading>
            <Flex gap={"5"}>
              <Input
                placeholder="Your Name"
                type="text"
                width={"50%"}
                size={"lg"}
                fontSize={"1rem"}
              />
              <Input
                placeholder="Email"
                type="email"
                width={"50%"}
                size={"lg"}
                fontSize={"1rem"}
              />
            </Flex>

            <Input
              placeholder="Mobile Number"
              type="number"
              size={"lg"}
              fontSize={"1rem"}
            />

            <Textarea
              className={styles.textarea}
              placeholder="Type a Message"
              h={"30vh"}
              fontSize={"1rem"}
            />
            <Button
              width={"100%"}
              size="lg"
              bg="#5191FA"
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Flex>
      <Flex
        h={"10rem "}
        width={"80vw"}
        bg={"#FFFFFF"}
        justifyContent={"space-around"}
        alignItems={"center"}
        mt={"10rem"}
        p={"10"}
      >
        <Flex
          display={"flex"}
          gap={"5"}
          alignItems={"center"}
          fontSize={"1.3rem"}
          textTransform={"uppercase"}
        >
          <AiOutlineMobile color={"#5191FA"} />
          9596103894
        </Flex>
        <Flex
          display={"flex"}
          gap={"5"}
          alignItems={"center"}
          fontSize={"1.3rem"}
          textTransform={"uppercase"}
        >
          <AiOutlineMail color={"#5191FA"} />
          Wkashoo@gmail.com
        </Flex>
        <Flex
          display={"flex"}
          gap={"5"}
          alignItems={"center"}
          fontSize={"1.3rem"}
          textTransform={"uppercase"}
        >
          <GoLocation color={"#5191FA"} />
          karan nagar srinagar j& k
        </Flex>
      </Flex>
      <Box
        mt={"10rem"}
        zIndex={"100"}
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13217.550807480318!2d74.78689678412671!3d34.08520713954979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ff699d0988d%3A0x872b77bb52a66cfd!2sKaran%20Nagar%2C%20Srinagar!5e0!3m2!1sen!2sin!4v1666418211597!5m2!1sen!2sin"
          className={styles.map}
          //   allowfullscreen="yes"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
}

export default contact;
