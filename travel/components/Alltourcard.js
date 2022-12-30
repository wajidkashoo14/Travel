import React, { useState } from "react";
import { Box, Image, Text, Heading, Link, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import styles from "../styles/pagination.module.css";

function Alltourcard({ cards }) {
  const router = useRouter();
  const [users, setUsers] = useState(cards);
  const [pageNumber, setPagenumber] = useState(0);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayCards = cards
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((card) => {
      const { id, img, heading, headingsecondary } = card;
      return (
        <Box
          display={"flex"}
          onClick={() => router.push(`./tourdetails/${id}`)}
          key={id}
          fontFamily={"Montserrat"}
        >
          <Box
            w={"300px"}
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
                src={img}
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
                {heading}
              </Heading>
            </Box>

            <Box px={"3"}>
              <Box display={"flex"} alignItems={"center"} gap={"3"}>
                <AiOutlineClockCircle />
                <Link href="#"> {headingsecondary}</Link>
              </Box>
              <Box display={"flex"} gap={"2"} alignItems={"center"} mt={"3"}>
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
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPagenumber(selected);
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"10"}
      flexWrap={"wrap"}
    >
      {displayCards}
      <Flex>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={styles.paginationActive}
        />
      </Flex>
    </Box>
  );
}

export default Alltourcard;
