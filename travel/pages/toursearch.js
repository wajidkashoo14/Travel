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
      maxW={["100vw", "95vw", "100vw", "100vw"]}
      display={["block", "block", "flex"]}
      justifyContent={"space-evenly"}
      backgroundColor={"#F7F7F7"}
      overflowX={"hidden"}
      gap={"1rem"}
      flexWrap={"wrap"}
      position={"relative"}
    >
      <Flex
        width={"20%"}
        height={"350px"}
        borderRadius={"5"}
        boxShadow={"lg"}
        top={"25%"}
        left={"2%"}
        position={"absolute"}
      >
        <FormControl
          display={"flex"}
          flexDir={"column"}
          gap={"5"}
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
            size="lg"
            variant="filled"
            zIndex={"10000"}
          >
            <option value="">Adventure Tour</option>
            <option value="option2">City Tour</option>
            <option value="option3">Group Tour</option>
          </Select>
          <Input type="date" placeholder="From" size="lg" />
          <Input type="date" placeholder="To" size="lg" />
          <Button
            size="lg"
            bg="#5191FA"
            mt={"2rem"}
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
          >
            Search
          </Button>
        </FormControl>
      </Flex>
      <Box>
        <Heading
          fontSize={"2xl"}
          className={styles.heading}
          py={"5"}
          fontWeight={"500"}
        >{`${filteredData.length} tours found`}</Heading>
        <Box
          display={["block", "block", "flex", "flex"]}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={"1.5rem"}
        >
          {filteredData.map((item) => {
            return (
              <Box
                display={["block", "block", "flex"]}
                onClick={() => router.push(`./tourdetails/${item.id}`)}
                key={item.id}
                fontFamily={"Montserrat"}
                px={["1", "1", "0"]}
                overflowX={"hidden"}
                w={["100vw", "100vw", "300px", "300px"]}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  transition: "all 0.3s",
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
    </Container>
  );
}

export default Toursearch;
