import {
  Box,
  Heading,
  Image,
  Text,
  Item,
  FormControl,
  Input,
  Button,
  Textarea,
  List,
  Flex,
  ListItem,
  ListIcon,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/id.module.css";
import data from "../../components/Hoteldata";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BsArrowRightCircleFill, BsPeople } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaAffiliatetheme } from "react-icons/fa";

export default function Hoteldetails() {
  const [Hotel, setHotel] = useState(null);
  const [img, setImg] = useState();
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    let hotel = data.find((hotel) => hotel.id == id);
    setHotel(hotel);
  }, []);
  if (!Hotel)
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        height={"100vh"}
        width={"100vw"}
        py={"8rem"}
      >
        <div className={styles.spinner}></div>
      </Box>
    );
  return (
    <Box
      maxW={"100vw"}
      py={"8rem"}
      minH={"80vh"}
      overflowX={"hidden"}
      fontFamily={"Montserrat"}
      fontWeight={"300"}
      mx={"10"}
    >
      <Box py={"10"}>
        <Heading className={styles.heading}>{Hotel.heading}</Heading>
        <Box display={"flex"} gap={"3"} alignItems={"center"} py={"2"}>
          <GoLocation />
          <Text>{Hotel.address}</Text>
        </Box>
      </Box>
      <Box
        maxW={"100vw"}
        minH={"60vh"}
        position={"relative"}
        alignItems={"center"}
        justifyContent={"center"}
        mx={"auto"}
      >
        <Box position={"absolute"} left={"5%"} top={"50%"} cursor={"pointer"}>
          <BsArrowLeftCircleFill color="#5191FA" fontSize={"2rem"} />
        </Box>
        <Box
          position={"absolute"}
          right={"5%"}
          top={"50%"}
          cursor={"pointer"}
          onClick={() => {
            setImg(img + 1);
          }}
        >
          <BsArrowRightCircleFill
            left={"5%"}
            top={"50%"}
            color="#5191FA"
            fontSize={"2rem"}
          />
        </Box>
        <Box display={"grid"} placeItems={"center"}>
          <Image
            src={Hotel.img[0]}
            width={"70%"}
            height={"60vh"}
            objectFit={"cover"}
            overflowX={"hidden"}
          />
        </Box>
      </Box>

      <Box minH={"30vh"} bg={"#fff"} mx={"5rem"} width={"75%"}>
        <Box>
          <Heading
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            className={styles.heading}
            mt={"5"}
            fontSize={"3xl"}
          >
            overview
          </Heading>
          <Text
            fontSize={"md"}
            fontWeight={"400"}
            color={"#50595c"}
            fontFamily={"Montserrat"}
            lineHeight={"6"}
            textAlign={"left"}
          >
            {Hotel.description}
          </Text>
        </Box>
        <Box borderBottom={"1px solid #d2c5ca"} py={"10"}>
          <Heading
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            className={styles.heading}
            mt={"5"}
            fontSize={"3xl"}
          >
            Hotel Facilities
          </Heading>
          <List>
            console.log(Hotel)
            {Hotel.hotelfacilities.map((facility) => {
              return (
                <Flex
                  gap={"2"}
                  p={"3"}
                  my={"1"}
                  key={Hotel.id}
                  boxShadow={"lg"}
                  _hover={{ boxShadow: "xl" }}
                  width={"15rem"}
                  cursor={"pointer"}
                  fontWeight={"400"}
                >
                  <FaAffiliatetheme color={"#5191FA"} />

                  <ListItem>{facility}</ListItem>
                </Flex>
              );
            })}
          </List>
        </Box>
        <Box>
          <Heading
            className={styles.heading}
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            mt={"3"}
            fontSize={"3xl"}
          >
            Hotel Theme
          </Heading>
          <Flex gap={"10"} borderBottom={"1px solid #d2c5ca"} py={"8  "}>
            {Hotel.hoteltheme.map((theme) => {
              return (
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={"2"}
                  p={"3"}
                  my={"1"}
                  boxShadow={"lg"}
                  _hover={{ boxShadow: "xl" }}
                  width={"16rem"}
                  cursor={"pointer"}
                  key={Hotel.id}
                  fontWeight={"400"}
                >
                  <MdOutlineSettingsSuggest
                    fontSize={"1.2rem"}
                    color={"#5191FA"}
                  />
                  {theme}
                </Box>
              );
            })}
          </Flex>
        </Box>
        <Box width={"25rem"}>
          <Heading
            className={styles.heading}
            fontWeight={"500"}
            textTransform={"uppercase"}
            py={"5"}
            mt={"5"}
            fontSize={"3xl"}
          >
            Rules
          </Heading>
          <Flex
            justifyContent={"space-between"}
            py={"10"}
            borderBottom={"1px solid #d2c5ca"}
            fontWeight={"400"}
          >
            <Text>Check In</Text>
            <Text>{Hotel.rules[0]}</Text>
          </Flex>
          <Flex
            gap={"10"}
            justifyContent={"space-between"}
            py={"10"}
            borderBottom={"1px solid #d2c5ca"}
            fontWeight={"400"}
          >
            <Text>Check Out</Text>
            <Text>{Hotel.rules[1]}</Text>
          </Flex>
        </Box>
        <Accordion defaultIndex={[0]} allowMultiple width={"45rem"} mt={"10"}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading
                    className={styles.heading}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    fontSize={"3xl"}
                  >
                    Write a review
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} p={"5"} borderRadius={"5"}>
              <FormControl>
                <Flex gap={"5"} mb={"10"}>
                  <Input
                    type="text"
                    placeholder="Name"
                    size={"lg"}
                    variant="flushed"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    size={"lg"}
                    variant="flushed"
                  />
                </Flex>
                <Textarea type="email" rows={"8"} />
              </FormControl>
              <Button
                size="lg"
                bg="#5191FA"
                color={"#fff"}
                variant="solid"
                _hover={{ bg: "blue.500", color: " white" }}
                mt={"6"}
              >
                Post Comment
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
