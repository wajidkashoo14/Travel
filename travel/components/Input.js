import { Button, Container, Box, Select, Heading } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import Modal from "./Modal";
import cards from "../components/AllTourData";
import { useRouter } from "next/router";
import Link from "next/link";
import { SearchContext } from "./SearchContext/SearchContext";

function Input() {
  const { filteredData, setFiliteredData } = useContext(SearchContext);
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedTourType, setSelectedTourType] = useState("");
  const [data, setData] = useState(cards);

  const handleDestinationDropdownChange = (e) => {
    setSelectedDestination(e.target.value);
  };

  const handleTourTypeDropdownChange = (e) => {
    setSelectedTourType(e.target.value);
  };

  const handleSearchClick = () => {
    router.push("/toursearch");

    let newFilteredData = data;

    if (selectedDestination && selectedTourType) {
      newFilteredData = newFilteredData.filter(
        (item) =>
          item.title === selectedDestination &&
          item.tourType === selectedTourType
      );
      return setFiliteredData(newFilteredData);
    }
  };

  console.log("filteredData");

  return (
    <Container
      marginTop={{ base: "-30rem", md: "-30rem", lg: "-20rem" }}
      gap={"8rem"}
      display={{ base: "block", md: "block", lg: "flex" }}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={"Montserrat"}
      zIndex={["10", "10", "100000", "10000"]}
      textAlign={"center"}
    >
      {openModal && <Modal closeModal={setOpenModal} />}
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: "2", md: "5", lg: "5" }}
        w={{ base: "90vw", md: "90vw", lg: "60vw" }}
        borderRadius={"5"}
        height={{ base: "14rem", md: "14rem", lg: "5rem" }}
        py={{ base: "1rem", md: "1rem", lg: "3.5rem" }}
        px={{ base: "1rem", md: "1rem", lg: "2rem" }}
        backgroundColor={"rgba(255,255,255,0.5)"}
        position={"relative"}
        zIndex={["10", "10", "100000", "100000"]}
      >
        <Select
          placeholder="Where are you going"
          size="lg"
          variant="filled"
          zIndex={["10", "10", "10000", "10000"]}
          fontSize={"1rem"}
          fontWeight={"400"}
          onChange={handleDestinationDropdownChange}
          my={{ base: "3", md: "1", lg: "0" }}
        >
          <option value="Gulmarg">Gulmarg</option>
          <option value="Pahalgam">Pahalgam</option>
          <option value="Sonmarg">Sonmarg</option>
          <option value="Doodhpathri">Doodhpathri</option>
          <option value="Sinthan top">Sinthan top</option>
          <option value="Srinagar">Srinagar</option>
          <option value="Kargil">Kargil</option>
          <option value="Leh">Leh</option>
          <option value="Nubra Valley">Nubra Valley</option>
          <option value="Pangong Tso">Pangong Tso</option>
          <option value="Tso Moriri">Tso Moriri</option>
        </Select>
        <Select
          placeholder="Tour type"
          size="lg"
          variant="filled"
          zIndex={"10000"}
          fontSize={"1rem"}
          my={{ base: "3", md: "1", lg: "0" }}
          onChange={handleTourTypeDropdownChange}
        >
          <option value="Adventure Tour">Adventure Tour</option>
          <option value="City Tour">City Tour</option>
          <option value="Group Tour">Group Tour</option>
          <option value="Best Sellers">Best Sellers</option>
          <option value="City trips">City trips</option>
          <option value="Ecotourism<3">Ecotourism</option>
          <option value="Escorted Tour">Escorted Tour</option>
          <option value="Honeymoon & Couples">Honeymoon & Couples</option>
          <option value="Mountain Adventures">Mountain Adventures</option>
          <option value="Skiing Trips">Skiing Trips</option>
          <option value="Spiritual Tour">Spiritual Tour</option>
        </Select>
        <Link href="/toursearch">
          <Button
            width={{ base: "100%", md: "100%", lg: "50%" }}
            size="lg"
            fontSize={{ sm: "8rem", md: "1rem", lg: "1rem" }}
            bg="#5191FA"
            color={"#fff"}
            variant="solid"
            _hover={{ bg: "blue.500", color: " white" }}
            style={{ padding: "1rem 2rem" }}
            onClick={handleSearchClick}
            zIndex={"1000"}
          >
            Search
          </Button>
        </Link>
      </Box>
      <Button
        size={{ base: "md", md: "sm", lg: "md" }}
        bg="#5191FA"
        color={"#fff"}
        variant="solid"
        _hover={{ bg: "blue.500", color: " white" }}
        // mt={{ base: "5rem", md: "10rem", lg: "-10rem" }}
        onClick={() => setOpenModal(true)}
        zIndex={"1000"}
        mb={{ base: "-5rem", md: "0", lg: "10rem" }}
        textAlign={"center"}
      >
        Make an enquiry
      </Button>
    </Container>
  );
}

export default Input;
