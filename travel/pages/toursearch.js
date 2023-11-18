import {
  Container,
  Box,
  Image,
  Text,
  Heading,
  Link,
  Flex,
  FormControl,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SearchContext } from "../components/SearchContext/SearchContext";
import styles from "../styles/aboutus.module.css";

function Toursearch() {
  const { filteredData, setFiliteredData } = useContext(SearchContext);
  const router = useRouter();

  return (
    <Container
      pt={"10rem"}
      minHeight={"100vh"}
      maxW={["100vw", "100vw", "100vw", "100vw"]}
      backgroundColor={"#F7F7F7"}
      gap={"1rem"}
      overflow={"hidden"}
      mx={["8", "8", "0"]}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"flex-start"}
        gap={"4rem"}
        minH={"100vh"}
        flexDir={["column", "column", "row"]}
      >
        <Flex
          width={["100%", "100%", "20%"]}
          height={["275px", "275px", "350px"]}
          borderRadius={"5"}
          boxShadow={"lg"}
          display={["none", "none", "flex"]}
        >
          <FormControl
            display={"flex"}
            flexDir={"column"}
            gap={["3", "3", "5"]}
            p={"5"}
            border={"1px solid #cacfd0"}
            fontFamily={"Montserrat"}
          >
            <Heading
              className={styles.heading}
              fontSize={"lg"}
              textAlign={"center"}
            >
              Search Tours
            </Heading>
            <Select
              placeholder="Tour type"
              size={["md", "md", "lg"]}
              variant="filled"
              zIndex={"1000"}
            >
              <option value="">Adventure Tour</option>
              <option value="option2">City Tour</option>
              <option value="option3">Group Tour</option>
            </Select>
            <Input type="date" placeholder="From" size={["md", "md", "lg"]} />
            <Input type="date" placeholder="To" size={["md", "md", "lg"]} />
            <Button
              size={["md", "md", "lg"]}
              bg="#5191FA"
              mt={["1rem", "1rem", "2rem"]}
              color={"#fff"}
              variant="solid"
              _hover={{ bg: "blue.500", color: " white" }}
            >
              Search
            </Button>
          </FormControl>
        </Flex>
        <Box minH={"100vh"} width={["100vw", "100vw", "80%", "80%"]}>
          <Heading
            fontSize={"2xl"}
            className={styles.heading}
            pb={"5"}
            fontWeight={"500"}
            // ml={["5", "5"]}
          >{`${filteredData.length} tours found`}</Heading>
          <Box
            display={"flex"}
            flexDir={["column", "column", "row"]}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            gap={["2rem", "2rem", "4rem"]}
            width={["100vw", "100vw", "100%", "100%"]}
            minH={"100vh"}
            overflowY={"hidden"}
          >
            {filteredData.map((item) => {
              return (
                <Box
                  display={"flex"}
                  flexDir={["column", "column", "row"]}
                  onClick={() => router.push(`./tourdetails/${item.id}`)}
                  key={item.id}
                  fontFamily={"Montserrat"}
                  overflowX={"hidden"}
                  w={["90vw", "100vw", "300px", "300px"]}
                  _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box
                    w={["100vw", "100vw", "200px", "300px"]}
                    h={"430px"}
                    boxShadow={"md"}
                    display={"flex"}
                    flexDir={"column"}
                    position={"relative"}
                    cursor={"pointer"}
                    _hover={{
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      transition: "all 0.3s",
                    }}
                    fontFamily={"Montserrat"}
                  >
                    <Box zIndex={"10"}>
                      <Image
                        src={item.img}
                        objectFit={"cover"}
                        h={"250px"}
                        w={"100%"}
                        loading={"lazy"}
                      />
                      <Text
                        background={"#ED0925"}
                        color={"#fff"}
                        position={"absolute"}
                        top={"15%"}
                        left={"0%"}
                        px={"2"}
                        py={"1"}
                        borderBottomRightRadius={"3px"}
                        borderTopRightRadius={"3px"}
                      >
                        Festive offer
                      </Text>
                    </Box>
                    <Box px={"3"} zIndex={"1000"} py={"5"} width={"400px"}>
                      <Heading
                        zIndex={"10000"}
                        color={"#06283d"}
                        fontSize={"lg"}
                        fontWeight={"600"}
                        width={"300px"}
                      >
                        {item.heading}
                      </Heading>
                    </Box>

                    <Box px={"3"}>
                      <Box display={"flex"} alignItems={"center"} gap={"3"}>
                        <AiOutlineClockCircle />
                        <Link> {item.headingsecondary}</Link>
                      </Box>
                      <Box
                        display={"flex"}
                        gap={"2"}
                        alignItems={"center"}
                        mt={"3"}
                      >
                        <AiTwotoneStar color={"#FFDC00"} />
                        <AiTwotoneStar color={"#FFDC00"} />
                        <AiTwotoneStar color={"#FFDC00"} />
                        <AiTwotoneStar color={"#FFDC00"} />
                        <AiTwotoneStar color={"#FFDC00"} />
                        <Text>5 reviews</Text>
                      </Box>
                      <Box
                        display={"flex"}
                        gap={"1"}
                        alignItems={"center"}
                        mt={"3"}
                      ></Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Toursearch;
