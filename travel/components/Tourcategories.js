import { Box, Container, Heading, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Categories from "./Categories";
import styles from "../styles/discription.module.css";
import { GoLocation } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

function Tourcategories() {
  return (
    <Container
      maxW={"100%"}
      backgroundColor={"#F7F7F7"}
      px={{ base: "1rem", md: "1rem", lg: "5rem" }}
      py={{ base: "0", md: "3rem", lg: "8rem" }}
      fontFamily={"Montserrat"}
    >
      <Heading
        textAlign={"center"}
        py={{ base: "0", md: "5", lg: "8" }}
        className={styles.heading}
      >
        Tour categories
      </Heading>
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        gap={{ base: "2rem", md: "10", lg: "8" }}
        flexWrap={"wrap"}
        maxW={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"5rem"}
      >
        <Flex
          maxWidth={"100%"}
          gap={{ base: "2rem", md: "10", lg: "8" }}
          display={{ base: "block", md: "block", lg: "flex" }}
        >
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={{ base: "350px", md: "350px", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "600px" }}
            my={{ base: "1rem" }}
          >
            <Image
              src="./home.jpg"
              h={{ base: "350px", md: "350px", lg: "400px" }}
              w={{ base: "100%", md: "100%", lg: "600px" }}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box
              position={"absolute"}
              bottom={{ base: "5%", md: "5%", lg: "5%" }}
              left={"3%"}
            >
              <Heading
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                color={"#fff"}
                fontWeight={"700"}
              >
                Save 15% On 2023 Adventures
              </Heading>

              <Text
                color={"#fff"}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
              >
                Book your 2023 gateway today and save
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={{ base: "350px", md: "350px", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "600px" }}
            my={{ base: "1rem" }}
          >
            <Image
              src="./cycling.jpg"
              h={{ base: "350px", md: "350px", lg: "400px" }}
              w={{ base: "100%", md: "100%", lg: "600px" }}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box position={"absolute"} bottom={"5%"} left={"3%"}>
              <Heading
                fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                color={"#fff"}
                fontWeight={"700"}
              >
                Your Guide to Cycling Adventures
              </Heading>

              <Box display={"flex"} gap={"2"}>
                <Text
                  color={"#fff"}
                  fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
                >
                  Book our collection of relaxing,flat rides and challenging
                  hairpin climbs
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>

        <Box
          position={"relative"}
          borderRadius={"8px"}
          cursor={"pointer"}
          overflow={"hidden"}
          transition={"all 0.2s"}
          h={{ base: "350px", md: "350px", lg: "400px" }}
          w={{ base: "100%", md: "100%", lg: "1250px" }}
          my={{ base: "1rem" }}
        >
          <Image
            src="https://www.peakadventuretour.com/blog/wp-content/uploads/2019/02/Dal-Lake-Srinagar.jpg"
            h={{ base: "350px", md: "350px", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "1250px" }}
            loading={"lazy"}
            borderRadius={"8px"}
          />
          <Box position={"absolute"} top={"10%"} right={"5%"}>
            <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
          </Box>
          <Box position={"absolute"} bottom={"5%"} left={["3%", "3%", "2%"]}>
            <Heading
              fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
              color={"#fff"}
              fontWeight={"700"}
            >
              Your Guide to Cultural Adventures
            </Heading>

            <Box display={"flex"} gap={"3"}>
              <Text
                color={"#fff"}
                fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
              >
                Discover ancient ruins,town squares and local delicacies with
                the experts
              </Text>
            </Box>
          </Box>
        </Box>
        <Flex gap={"10"} display={{ base: "block", md: "block", lg: "flex" }}>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={{ base: "350px", md: "350px", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "390px" }}
            mb={{ base: "5" }}
          >
            <Image
              src="./tourthree.jpg"
              h={"400px"}
              w={{ base: "100%", md: "100%", lg: "600px" }}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box position={"absolute"} bottom={"5%"} left={"3%"}>
              <Heading fontSize={"3xl"} color={"#fff"} fontWeight={"700"}>
                Win a LifeOfAdventure
              </Heading>

              <Box display={"flex"} gap={"3"}>
                <Text
                  color={"#fff"}
                  fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
                >
                  Win 1 trip.EveryYear.ForLife.EnterNow
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={{ base: "350px", md: "350px", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "390px" }}
            mb={{ base: "5" }}
          >
            <Image
              src="./tourtwo.jpg"
              h={"400px"}
              w={{ base: "100%", md: "100%", lg: "600px" }}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box position={"absolute"} bottom={"5%"} left={"3%"}>
              <Heading fontSize={"3xl"} color={"#fff"} fontWeight={"700"}>
                Last Minute Vacations
              </Heading>

              <Box display={"flex"} gap={"3"}>
                <Text
                  color={"#fff"}
                  fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
                >
                  Spontaneous adventures at your fingertips
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            position={"relative"}
            borderRadius={"8px"}
            cursor={"pointer"}
            overflow={"hidden"}
            transition={"all 0.2s"}
            h={{ base: "350px", md: "350px", lg: "400px" }}
            w={{ base: "100%", md: "100%", lg: "390px" }}
            mb={{ base: "5" }}
          >
            <Image
              src="./tourfive.jpg"
              h={"400px"}
              w={{ base: "100%", md: "100%", lg: "600px" }}
              loading={"lazy"}
              borderRadius={"8px"}
            />
            <Box position={"absolute"} top={"10%"} right={"5%"}>
              <AiOutlineHeart fontSize={"1.5rem"} color={"#fff"} />
            </Box>
            <Box position={"absolute"} bottom={"5%"} left={"3%"}>
              <Heading fontSize={"3xl"} color={"#fff"} fontWeight={"700"}>
                Kashmir Holidays
              </Heading>

              <Box display={"flex"} gap={"3"}>
                <Text
                  color={"#fff"}
                  fontSize={{ base: "1rem", md: "1rem", lg: "1.1rem" }}
                >
                  {` if there is a heaven on earth It's here!`}
                </Text>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}

export default Tourcategories;
