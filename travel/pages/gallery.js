import {
  Container,
  SimpleGrid,
  Box,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Gallerycard from "../components/Gallerycard";

function Gallery() {
  return (
    <Box
      pt={"8rem"}
      minH={"100vh"}
      maxW={"100vw"}
      margin={"0"}
      fontFamily={"Montserrat"}
    >
      <Box position={"relative"} maxW={"100vw"}>
        <Image
          src="./gallerybanner.jpg"
          w={"100vw"}
          h={{ base: "55vh", md: "55vh", lg: "70vh" }}
          objectFit={"cover"}
        />
        <Heading
          position={"absolute"}
          left={"50%"}
          top={{ base: "10%", md: "20%", lg: "50%" }}
          transform={"translate(-50%,180%)"}
          mt={{ base: "0", md: "-10rem", lg: "-10rem" }}
          textAlign={"center"}
          color={"#fff"}
          fontSize={{ base: "3xl", md: "xl", lg: "5xl" }}
          textTransform={"uppercase"}
          textShadow="-1px -1px 0px #4680d7,
              3px 3px 0px #4680d7,
              6px 6px 0px #4680d7"
        >
          Your Guide to Kashmir
        </Heading>
      </Box>
      <Box
        textAlign={"center"}
        px={{ base: "1rem", md: "1rem", lg: "10rem" }}
        py={"3rem"}
        fontSize={{ base: "1rem", md: "1rem", lg: "1.2rem" }}
        display={"flex"}
        flexDirection={"column"}
        gap={"5"}
      >
        <Text>
          {` Join our expert guides on award-winning adventures, as we continue to
          lead the way across the globe.`}
        </Text>
        <Text>
          {`Whether you experience natural highs summitting the peaks of
          Kilimanjaro; feel goosebumps watching whales across the Antarctica
          Peninsula or enjoy the great tastes of Portugal while savouring a
          glass of Vinho Verde rest assured our expert guides will take you on a
          journey filled with incredible experiences that you’ll cherish
          forever.`}
        </Text>
        <Text>
          {` Our adventures span all seven continents, with itineraries in 100
          different countries and will immerse you in new and unique places that
          rouse the senses, activate the body, expand the mind, and nourish the
          soul.`}
        </Text>
        <Text>
          {`Our award-winning guides lead the way and take you beyond the
          guidebook with their exceptional local knowledge, enthusiasm and keen
          expertise on every one of our adventures.`}
        </Text>
        <Text>{`Join us, and let Exodus be Your Guide to the World.`}</Text>
      </Box>
      <Box
        maxWidth={{ base: "100%", md: "100%", lg: "93%" }}
        height={{ base: "15rem", md: "15rem", lg: "20rem" }}
        position={"relative"}
        mx={{ base: "1rem", md: "1rem", lg: "5rem" }}
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src="/banner.jpg"
          width={{ base: "100%", md: "100%", lg: "94%" }}
          height={{ base: "15rem", md: "15rem", lg: "20rem" }}
          p={{ base: "2", md: "2", lg: "5" }}
          border={"1px solid #fff"}
        />
        <Box
          position={"absolute"}
          left={{ base: "55%", md: "10%", lg: "50%" }}
          top={"50%"}
          transform={"translate(-50%,-50%)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={"5"}
          color={"#FFF"}
          width={"100%"}
        >
          <Heading
            textTransform={"uppercase"}
            fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
            fontWeight={"700"}
          >
            {`Watch our Tour Leader's stories here`}
          </Heading>
        </Box>
      </Box>
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10"}
        width={{ base: "100%", md: "100%", lg: "100vw" }}
        minH={"100vh"}
        px={{ base: ".2rem", md: "1rem", lg: "5rem" }}
        py={"3rem"}
        flexWrap={"wrap"}
      >
        <Gallerycard
          heading="Goosebumps"
          text="Discover more"
          img="./galleryone.jpg"
        />
        <Gallerycard
          heading="Racing Hearts"
          text="Discover more"
          img="./gallerytwo.jpg"
        />
        <Gallerycard
          heading="Close Encounters"
          text="Discover more"
          img="https://img.ev.mu/images/attractions/1602/960x640/12030.jpg"
        />
        <Gallerycard
          heading="Natural Highs"
          text="Discover more"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pahalgam_Valley.jpg/1200px-Pahalgam_Valley.jpg"
        />
        <Gallerycard
          heading="Dinner Party Stories"
          text="Discover more"
          img="https://www.culturalindia.net/iliimages/Kashmiri-Food-1.jpg"
        />
        <Gallerycard
          heading="Perfect timing"
          text="Discover more"
          img="https://i1.wp.com/livewire.thewire.in/wp-content/uploads/2020/11/download-2.jpeg?fit=780%2C487&ssl=1"
        />
      </Box>
    </Box>
  );
}

export default Gallery;
