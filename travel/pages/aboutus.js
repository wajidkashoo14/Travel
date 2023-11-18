import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/aboutus.module.css";

function aboutus() {
  return (
    <Box
      pt={"8rem"}
      maxWidth={"100vw"}
      minH={"100vh"}
      fontFamily={"Montserrat"}
    >
      <Flex width={"100%"} flexDir={"column"}>
        <Box maxWidth={"100vw"} height={"40vh"}>
          <Image
            src="./home.jpg"
            width={"100%"}
            height={"35vh"}
            objectFit={"cover"}
            backgroundPosition={"center"}
          />
        </Box>
        <Box
          p={["1", "1", "8"]}
          display={"flex"}
          flexDir={"column"}
          gap={"2"}
          pr={["0", "0", "18rem"]}
          mx={["1rem", "1rem", "5rem"]}
        >
          <Heading
            fontSize={["xl", "xl", "3xl"]}
            fontWeight={"500"}
            className={styles.heading}
            fontFamily={"Montserrat"}
            py={["1", "1", "3"]}
          >
            About us
          </Heading>
          <Text color={"#5e5e5e"}>
            MULTI DESTINATIONS believes in making Travelling Simpler.
          </Text>
          <Text color={"#5e5e5e"}>How, You may Wonder?</Text>
          <Text color={"#5e5e5e"}>
            We understand that different travellers come with different
            expectations and tastes, & we are forthright in acknowledging that.
          </Text>

          <Text color={"#5e5e5e"}>
            Therefore, our Tour Advisors encourage brief conversations with our
            customers before booking with us so that we may help travellers
            Handcraft Tour Packages that are just “right for them”.
          </Text>
          <Heading
            fontSize={["xl", "xl", "2xl"]}
            fontWeight={"500"}
            className={styles.heading}
            py={"3"}
            fontFamily={"Montserrat"}
          >
            we love to keep it simple and authentic
          </Heading>
          <Text color={"#5e5e5e"}>
            Our Tour Advisors will understand your Touring Expectations and
            share detailed Itineraries with Quotes as E-books in your
            Whatsapp/E-mail so that you can compare from different Tour Plans of
            different budgets and tastes before you Handpick what suits you and
            create your customised Trip.
          </Text>
          <Text color={"#5e5e5e"}>
            The Final Tour decided upon will be shared in detail as a Final
            E-book and rest assured your Tour will go as documented in the Final
            Tour Itinerary E-Book.
          </Text>
          <Text color={"#5e5e5e"}>That’s Simple and Authentic! Right?</Text>
          <Heading
            fontSize={["xl", "xl", "2xl"]}
            fontWeight={"500"}
            className={styles.heading}
            py={"3"}
          >
            what we offer?
          </Heading>
          <UnorderedList color={"#5e5e5e"}>
            <ListItem>Tour Packages explore</ListItem>
            <ListItem>Hotel Reservations explore</ListItem>
            <ListItem>
              Adventure Tours (Trekking, Hiking, Camping, Bike Trips, Jeep
              Safari) explore
            </ListItem>
            <ListItem>
              Transportation (Group & Personal Rentals) explore
            </ListItem>
            <ListItem>
              Activities (Skiing, Rafting, Paragliding, Pony Rides, Shikara
              Rides) explore
            </ListItem>
            <ListItem>Spiritual Tours</ListItem>
            <ListItem>Visa Services</ListItem>
            <ListItem>Tour Guides</ListItem>
            <ListItem>Personalised Travel Services</ListItem>
          </UnorderedList>
          <Text color={"#5e5e5e"}>
            across all the popular destinations in Jammu, Kashmir, Ladakh and
            other Popular Cities.
          </Text>
          <Heading
            fontSize={["xl", "xl", "2xl"]}
            fontWeight={"500"}
            className={styles.heading}
            py={"3"}
          >
            how we roll?
          </Heading>
          <Text color={"#5e5e5e"}>With a network of more than:</Text>
          <UnorderedList color={"#5e5e5e"}>
            <ListItem>100+ Travel Agents</ListItem>
            <ListItem>450+ Hotels</ListItem>
            <ListItem>250+ Taxi Rentals</ListItem>
            <ListItem>24/7 customer service</ListItem>
          </UnorderedList>
          <Text color={"#5e5e5e"}>
            across all the popular destinations in Jammu, Kashmir, Ladakh and
            other Popular Cities.
          </Text>
          <Heading
            fontSize={["xl", "xl", "2xl"]}
            fontWeight={"500"}
            className={styles.heading}
            py={"3"}
          >
            About Us! what makes us so unique
          </Heading>
          <Text color={"#5e5e5e"}>The answer is, our Philosophy.</Text>
          <Text color={"#5e5e5e"}>
            We ask Travellers to Review us once their Tour Ends & needless to
            say, we love 5 stars. So, we would love to get a 5 Star review from
            you. But that’s only possible when we make your Tour Picture Perfect
            Amazing.
          </Text>
          <Text color={"#5e5e5e"}>
            So, the pressure is on us to give a delightful and hassle free
            experience. Trust us to surpass your expectations at a Generous
            cost. Please Check our Tour reviews to see what people say about us.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default aboutus;
