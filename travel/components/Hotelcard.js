import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  Link,
  Flex,
  Button,
  transition,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoLocation } from "react-icons/go";
import ReactPaginate from "react-paginate";
import styles from "../styles/pagination.module.css";

function Tourcard({ cards }) {
  const router = useRouter();
  const [users, setUsers] = useState(cards);
  const [pageNumber, setPagenumber] = useState(0);

  const usersPerPage = 9;
  const pagesVisited = pageNumber * usersPerPage;
  const displayCards = cards
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((card) => {
      const { id, img, heading, address } = card;
      return (
        <Box display={"flex"} gap={"10"} flexWrap={"wrap"} key={id}>
          <Box
            key={id}
            display={"flex"}
            onClick={() => router.push(`./hotels/${id}`)}
            _hover={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              transition: "all 0.3s",
            }}
          >
            <Box
              w={"300px"}
              h={"400px"}
              border={"1px solid #D7C7CC"}
              boxShadow={"md"}
              cursor={"pointer"}
              display={"flex"}
              flexDir={"column"}
              gap={"5"}
              borderRadius={"8px"}
            >
              <Box zIndex={"10"}>
                <Image
                  src={img[0]}
                  objectFit={"cover"}
                  h={"250px"}
                  w={"100%"}
                  loading={"lazy"}
                />
              </Box>
              <Box px={"3"} zIndex={"1000"} width={"300px"}>
                <Heading
                  zIndex={"10000"}
                  color={"#06283d"}
                  fontSize={"1rem"}
                  maxWidth={"300px"}
                  wordBreak={"break-word"}
                  fontWeight={"600"}
                >
                  {heading}
                </Heading>
              </Box>

              <Box px={"3"}>
                <Box display={"flex"} gap={"3"}>
                  <GoLocation fontSize={"1.2rem"} />
                  <Text fontSize={".9rem"} color={"#5e5e5e"}>
                    {" "}
                    {address}
                  </Text>
                </Box>
              </Box>
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

export default Tourcard;
