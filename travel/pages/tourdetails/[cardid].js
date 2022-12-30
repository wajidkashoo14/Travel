import {
  Box,
  Heading,
  Image,
  Text,
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
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaPlaneArrival } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaPlaneDeparture } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import styles from "../../styles/id.module.css";
import { MdCheckCircle } from "react-icons/md";
import data from "../../components/AllTourData";
import { BsRecordCircle } from "react-icons/bs";
import { FcApproval, FcDisapprove } from "react-icons/fc";

function Tourdetails() {
  const [Tour, setTour] = useState(null);
  const router = useRouter();
  const cardid = router.query.cardid;
  console.log(cardid);

  useEffect(() => {
    let tour = data.find((tour) => tour.id == cardid);
    setTour(tour);
  }, []);
  console.log(Tour);
  if (!Tour)
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
      pt={"8rem"}
      minH={"80vh"}
      fontWeight={"400"}
      overflowY={"hidden"}
      overflowX={"hidden"}
      fontFamily={"Montserrat"}
    >
      <Box
        maxW={"100vw"}
        h={{ base: "60vh", md: "60vh", lg: "80vh" }}
        position={"relative"}
      >
        <Image
          src={Tour.img}
          width={"100%"}
          h={{ base: "60vh", md: "60vh", lg: "80vh" }}
          objectFit={"cover"}
          overflowX={"hidden"}
          overflowY={"hidden"}
        />
        <Box
          display={{ base: "block", md: "block", lg: "flex" }}
          mt={{ base: "-1.8rem", md: "-1.8rem", lg: "-3rem" }}
          flexDir={"column"}
          gap={"3"}
          px={{ base: "2", md: "2", lg: "10" }}
        >
          <Box>
            <Heading
              fontSize={"3xl"}
              textTransform={"capitalize"}
              position={"absolute"}
              color={"#fff"}
              mt={"-2.2rem"}
            >
              {Tour.heading}
            </Heading>
          </Box>
          <Box display={"flex"} gap={"1"}>
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#FFDC00"} />
            <AiTwotoneStar color={"#Fff"} />
          </Box>
        </Box>
      </Box>
      <Box
        width={"100vw"}
        min-height={"35vh"}
        bg={"#F5F5F5"}
        display={"flex"}
        justifyContent={["center", "center", "flex-start", "flex-start"]}
        py={"5rem"}
        gap={["3rem", "3rem", "15rem"]}
        px={{ base: "1rem", md: "1rem", lg: "10rem" }}
        fontSize={"1.2rem"}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={"5"}
          alignItems={"flex-start"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <AiOutlineClockCircle color="#ff5216" />
            <Text>{Tour.heading}</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <FaPlaneArrival color="#ff5216" />
            <Text>Kashmir Srinagar</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <IoIosPeople color="#ff5216" />
            <Text>Max people:50</Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          flexDir={"column"}
          gap={"5"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <FaPlaneDeparture color="#ff5216" />
            <Text>Native Place</Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={"5"}
          >
            <BsPersonFill color="#ff5216" />
            <Text>Mi age: Any</Text>
          </Box>
        </Box>
      </Box>
      <Box
        width={["100%", "100%", "100vw"]}
        minH={"50vh"}
        bg={"#fff"}
        mx={{ base: "10px", md: "1rem", lg: "5rem" }}
        display={["block", "block", "flex"]}
        position={"relative"}
        textAlign={["left", "left", "left"]}
      >
        <Box
          width={{ base: "100%", md: "100%", lg: "55%" }}
          py={{ base: "0", md: "1rem", lg: "2rem" }}
          px={["2", "1", "0"]}
        >
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
            fontSize={{ base: "md", md: "sm", lg: "md" }}
            color={"#50595c"}
            fontFamily={"Montserrat"}
            lineHeight={{ base: "5", md: "5", lg: "6" }}
            fontWeight={"400"}
            minH={"20vh"}
            textAlign={{ base: "justify" }}
            width={["95%", "auto"]}
          >
            {Tour.overview}
          </Text>
        </Box>
        <Box
          height={{ base: "60vh", md: "60vh", lg: "80vh" }}
          width={{ base: "100%", md: "100%", lg: "400px" }}
          bg={"#fff"}
          p={{ base: "0", md: "2", lg: "10" }}
          top={"-20%"}
          boxShadow={"lg"}
          position={"absolute"}
          right={{ base: "0", md: "0", lg: "8%" }}
          borderRadius={"10px"}
          display={["none", "none", "block"]}
        >
          <Heading
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            py={"5"}
            className={styles.heading}
          >
            Enquiry Form
          </Heading>
          <FormControl display={"flex"} flexDir={"column"} gap={"5"}>
            <Input
              type="text"
              placeholder={"Name"}
              size={{ base: "sm", md: "sm", lg: "lg" }}
              variant="flushed"
              fontSize={"1rem"}
            />
            <Input
              type="number"
              placeholder={"Mobile Number"}
              size={{ base: "sm", md: "sm", lg: "lg" }}
              variant="flushed"
              fontSize={"1rem"}
            />
            <Input
              type="number"
              placeholder={"Number of persons"}
              size={{ base: "sm", md: "sm", lg: "lg" }}
              variant="flushed"
              fontSize={"1rem"}
            />
            <Input
              type="number"
              placeholder={"Number of days"}
              size={{ base: "sm", md: "sm", lg: "lg" }}
              variant="flushed"
              fontSize={"1rem"}
            />
            <Textarea
              type="text"
              placeholder={"Your Enquiry"}
              size={{ base: "sm", md: "sm", lg: "lg" }}
              variant="flushed"
              fontSize={"1rem"}
            />
          </FormControl>
          <Button
            size={{ base: "sm", md: "md", lg: "lg" }}
            bg="#5191FA"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
            mt={"10"}
          >
            Submit Enquiry
          </Button>
        </Box>
      </Box>
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        flexDir={"column"}
        gap={"5"}
        minH={"50vh"}
        borderBottom={"2px solid #c4c7c0"}
        width={{ base: "100%", md: "100%", lg: "80%" }}
        mx={{ base: "16px", md: "2rem", lg: "5rem" }}
      >
        <Heading
          fontWeight={"500"}
          className={styles.heading}
          fontSize={"3xl"}
          py={["2rem", "2rem", "0"]}
        >
          Highlights
        </Heading>
        <List
          fontSize={"md"}
          fontWeight={"400"}
          color={"#50595c"}
          display={["block", "block", "flex"]}
          flexDir={"column"}
          gap={["1", "1", "2"]}
          width={["90%", "auto"]}
        >
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            {`${Tour.nightstaysatsrinagar} Night stay at Hotel/Houseboat in
            Srinagar`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            {`${Tour.nightstaysatpahalgamorgulmarg} Night stay at Hotel in
            Pahalgam/Sonmarg/Gulmarg (as per preference).`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />1 Hour Shikara Ride.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            All Transfers from pick up till drop.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            Sightseeing transfers in Srinagar City only (Mughal Gardens, Dal
            Lake, Nigeen Lake, Cultural/Spiritual Tour or others as per
            preferences).
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            Sightseeing Transfers in Pahalgam, Sonmarg, and Gulmarg are bound to
            be Hired separately as per J&K Tourism Advisory.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            24x7 Tour Assistance.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            Dinner & Breakfast at all Hotels/Houseboats.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="#B4E976" />
            Complimentary Cake for Special Occasions Tour (birthday,
            anniversary, honeymoon, or others)
          </ListItem>
        </List>
      </Box>

      <Box
        minHeight={"5vh"}
        m={["2", "2", "7"]}
        borderBottom={"2px solid #c4c7c0"}
        width={{ base: "100%", md: "100%", lg: "60%" }}
        mx={{ base: "5px", md: "1rem", lg: "5rem" }}
        py={"3rem"}
      >
        {Tour.daysinfo?.map((day) => {
          return (
            <Accordion
              width={"100%"}
              minHeight={"6.5rem"}
              allowToggle
              key={Tour.id}
            >
              <AccordionItem
                key={Tour.id}
                minHeight={"5rem"}
                alignItems={"center"}
              >
                <Heading>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading fontSize={"1.rem"} fontWeight={"600"}>
                        {day.heading}
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Heading>
                <AccordionPanel
                  bg={"#fff"}
                  color={"#06283d"}
                  border={"1px solid #c4c7c0"}
                >
                  <List>
                    {day.visits?.map((item) => {
                      console.log("kaaz", day);
                      return (
                        <ListItem color={"#50595c"} key={Tour.id}>
                          <ListIcon as={BsRecordCircle} color="#52B6F2" />
                          {item}
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          );
        })}
      </Box>
      <Box
        width={{ base: "95%", md: "100%", lg: "60%" }}
        minH={"60vh"}
        mx={{ base: "1rem", md: "2rem", lg: "5rem" }}
        py={"3rem"}
        borderBottom={"2px solid #c4c7c0"}
      >
        <Heading
          fontSize={{ base: "xl", md: "xl", lg: "3xl" }}
          py={"5"}
          fontWeight={"500"}
          className={styles.heading}
        >
          Included/Excluded
        </Heading>
        <Flex
          gap={"5rem"}
          color={"#50595c"}
          display={{ base: "block", md: "block", lg: "flex" }}
        >
          <Flex gap={"4"} flexDir={"column"}>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval />
              <Text>02 Nights in Hotels/Houseboat as per Itinerary</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval color="green.500" />
              <Text>Breakfast & Dinner</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval color="green.500" />
              <Text>1 Hour Shikara Ride</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval color="green.500" />
              <Text>All Transfers</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval color="green.500" />
              <Text>Sightseeing in Srinagar</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval color="green.500" />
              <Text>Toll Taxes</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcApproval />
              <Text>Parking Charges</Text>
            </Flex>
          </Flex>
          <Flex gap={"4"} flexDir={"column"}>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Airfare & Train</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Lunch</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Pony Ride</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Gandola Ride</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Pahalgam Sightseeing</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Entrance Tickets</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Tour Guide</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Activities</Text>
            </Flex>
            <Flex gap={"2"} alignItems={"center"}>
              <FcDisapprove />
              <Text>Snow Jeep in Gulmarg</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Box
        mx={{ base: "5px", md: "2rem", lg: "5rem" }}
        py={"3rem"}
        width={{ base: "100%", md: "100%", lg: "60%" }}
      >
        <Heading
          py={"2"}
          className={styles.heading}
          fontSize={"3xl"}
          fontWeight={"500"}
          mx={{ base: "1rem", md: "1rem", lg: "0" }}
        >
          FAQs
        </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  className={styles.heading}
                  fontWeight={"500"}
                >
                  TERMS & CONDITIONS
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"#50595c"}>
              <UnorderedList>
                <ListItem>
                  From your first contact till your Tour ends, our Tour Advisors
                  are available for your assistance 24x7.
                </ListItem>
                <ListItem>
                  Customers are requested to pay 30% of the total booking amount
                  in advance & 70% upon arrival.
                </ListItem>
                <ListItem>
                  In case of a government-imposed lockdown, your booking amount
                  is safe with us and can be used in the future.
                </ListItem>
                <ListItem>
                  Multi Destinations will not charge you as Tour operators for
                  cancellations, but the Hotel Booking cancellations are subject
                  to the Hotel Policies mentioned below:
                </ListItem>
                <ListItem>
                  Cancellation within 15 days of arrival is retained @ 100% with
                  0% refund.
                </ListItem>
                <ListItem>
                  Cancellation within 15-30 days of arrival is retained @ 50%
                  with 50% refund.
                </ListItem>
                <ListItem>
                  Cancellation within 30-60 days of arrival is retained @ 25%
                  with 75% refund.
                </ListItem>
                <ListItem>
                  Kindly make the Advance Payments soon after finalizing your
                  desired Itinerary. This helps us to ensure that the
                  Hotels/Houseboats are not Sold Out.
                </ListItem>
                <ListItem>
                  All Visitors are bound to Hire Local Taxis for Sightseeing
                  within the vicinities of Sonmarg, Pahalgam, Gulmarg & other
                  destinations in Kashmir except Srinagar as per Kashmir Tourism
                  Advisory.
                </ListItem>
                <ListItem>
                  Your Prepaid Sim cards will not work on your Trip to Kashmir &
                  Ladakh, kindly arrange a Postpaid/Pre-on-Postpaid Sim on your
                  own beforehand.
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box
        mx={{ base: "0rem", md: "2rem", lg: "5rem" }}
        py={"3rem"}
        width={{ base: "100%", md: "100%", lg: "45rem" }}
      >
        <Accordion
          defaultIndex={[0]}
          allowMultiple
          y={"3rem"}
          width={{ base: "100%", md: "100%", lg: "45rem" }}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Heading
                    className={styles.heading}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    fontSize={"xl"}
                  >
                    Write a review
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <FormControl
                bg={"#F9F9F9"}
                p={{ base: "2", md: "2", lg: "5" }}
                borderRadius={"5"}
              >
                <Flex
                  gap={"5"}
                  mb={"10"}
                  display={["block", "block", "flex"]}
                  width={{ base: "100%", md: "100%", lg: "45rem" }}
                >
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
              </FormControl>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Tourdetails;
