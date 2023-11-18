import React, { useState, useEffect } from "react";
import data from "../../components/Activitiesdata";
import { useRouter } from "next/router";
import styles from "../../styles/spinner.module.css";
import { GoLocation } from "react-icons/go";
import { FcApproval } from "react-icons/fc";
import { FcDisapprove } from "react-icons/fc";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  ListItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  UnorderedList,
} from "@chakra-ui/react";
import style from "../../styles/aboutus.module.css";
function Activitiesid() {
  const [Activity, setActivity] = useState(null);
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    let activity = data.find((activity) => activity.id == id);
    setActivity(activity);
  }, []);
  if (!Activity)
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
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
      fontWeight={"400"}
      mx={["0", "0", "10"]}
    >
      <Box maxW={"100vw"} minH={"60vh"} mx={"auto"}>
        <Image
          src={Activity.img}
          width={"100%"}
          height={"60vh"}
          objectFit={"cover"}
          overflowX={"hidden"}
          alt=""
        />
        <Box px={["1rem", "1rem", "5rem"]} pt={"10"}>
          <Heading className={style.heading} fontSize={["xl", "xl", "3xl"]}>
            {Activity.heading}
          </Heading>
          <Box display={"flex"} gap={"3"} alignItems={"center"} py={"2"}>
            <GoLocation />
            <Text>{Activity.address}</Text>
          </Box>
        </Box>
      </Box>

      <Box
        bg={"#fff"}
        mx={["1rem", "1rem", "5rem"]}
        width={["90%", "100%", "75%"]}
      >
        <Box py={"3rem"}>
          <Heading
            fontWeight={"500"}
            py={["1", "2", "5"]}
            className={style.heading}
          >
            overview
          </Heading>
          <Text
            fontSize={"md"}
            color={"#50595c"}
            fontFamily={"Montserrat"}
            lineHeight={"6"}
            textAlign={"left"}
          >
            {Activity.overview}
          </Text>
        </Box>
        <Box borderBottom={"1px solid #d2c5ca"}>
          <UnorderedList>
            {Activity.list?.map((item) => {
              return (
                <Box
                  gap={"2"}
                  p={"3"}
                  key={Activity.id}
                  width={["90%", "90%", "30rem"]}
                  cursor={"pointer"}
                >
                  <ListItem>{item}</ListItem>
                </Box>
              );
            })}
          </UnorderedList>
        </Box>

        <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={["6", "6", "10"]}
          p={"3"}
          my={"1"}
          cursor={"pointer"}
          key={Activity.id}
        >
          <Box>
            {Activity.included?.map((item) => {
              return (
                <Box
                  gap={"10"}
                  display={"flex"}
                  my={["3", "3", "5"]}
                  key={Activity.id}
                >
                  <FcApproval />
                  <Text>{item}</Text>
                </Box>
              );
            })}
          </Box>
          <Box>
            {Activity.excluded?.map((item) => {
              return (
                <Flex gap={"10"} key={Activity.id} my={"5"}>
                  <FcDisapprove />
                  <Text>{item}</Text>
                </Flex>
              );
            })}
          </Box>
        </Box>
        {/* <Box display={"flex"} flexDir={"column"}>
          <Accordion
            defaultIndex={[0]}
            allowMultiple
            width={["100%", "100%", "45rem"]}
            mt={"10"}
          >
            <AccordionItem>
              <h2>
                {Activity.questions?.map((question) => {
                  return (
                    <AccordionButton key={Activity.id}>
                      <Box flex="1" textAlign="left">
                        <Heading
                          className={styles.heading}
                          fontWeight={"500"}
                          textTransform={"uppercase"}
                          fontSize={"xl"}
                        >
                          {question}
                        </Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  );
                })}
              </h2>

              {Activity.answers?.map((answer) => {
                return (
                  <AccordionPanel pb={4} color={"#F9F9F9"} key={Activity.id}>
                    {answer}
                  </AccordionPanel>
                );
              })}
            </AccordionItem>
          </Accordion>
        </Box> */}
      </Box>
    </Box>
  );
}
export default Activitiesid;
