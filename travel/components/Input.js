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
    router.push(
      `/toursearch?destination=${selectedDestination}&&type=${selectedTourType}`
    );

    if (selectedDestination || selectedTourType) {
      const match = data.filter(
        (item) =>
          item.title?.find((title) => title === selectedDestination) ||
          item.tourType?.find((type) => type === selectedTourType)
      );
      setFiliteredData(match);
    }
  };

  return (
    <Container
      marginTop={{ base: "-30rem", md: "-30rem", lg: "-20rem" }}
      gap={"8rem"}
      display={{ base: "block", md: "block", lg: "flex" }}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={"Montserrat"}
      zIndex={["1000", "1000", "100000", "10000"]}
      textAlign={"center"}
    >
      {openModal && <Modal closeModal={setOpenModal} />}
      <Box
        display={{ base: "block", md: "block", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ base: "0", md: "5", lg: "5" }}
        w={{ base: "90vw", md: "90vw", lg: "60vw" }}
        borderRadius={"5"}
        height={{ base: "14rem", md: "14rem", lg: "5rem" }}
        py={{ base: "1rem", md: "1rem", lg: "3.5rem" }}
        px={{ base: "1rem", md: "1rem", lg: "2rem" }}
        backgroundColor={"rgba(255,255,255,0.5)"}
        position={"relative"}
        zIndex={["1000", "1000", "100000", "1000"]}
        mx={["auto", "auto", "1"]}
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
          <option value="gulmarg">Gulmarg</option>
          <option value="pahalgam">Pahalgam</option>
          <option value="sonmarg">Sonmarg</option>
          <option value="doodhpathri">Doodhpathri</option>
          <option value="sinthan top">Sinthan top</option>
          <option value="srinagar">Srinagar</option>
          <option value="kargil">Kargil</option>
          <option value="leh">Leh</option>
          <option value="nubra-valley">Nubra Valley</option>
          <option value="pangong-tso">Pangong Tso</option>
          <option value="tso-moriri">Tso Moriri</option>
          <option value="ladakh">Ladakh</option>
          <option value="vaishnodevi">Vaishnodevi</option>
          <option value="katra">Kartra</option>
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
          <option value="adventure-tour">Adventure Tour</option>
          <option value="city-tour">City Tour</option>
          <option value="group-tour">Group Tour</option>
          <option value="best-sellers">Best Sellers</option>
          <option value="city-trips">City trips</option>
          <option value="ecotourism<3">Ecotourism</option>
          <option value="escorted-tour">Escorted Tour</option>
          <option value="honeymoon-&-couples">Honeymoon & Couples</option>
          <option value="mountain-adventures">Mountain Adventures</option>
          <option value="skiing-trips">Skiing Trips</option>
          <option value="spiritual-tour">Spiritual Tour</option>
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
        zIndex={["100", "100000", "100000"]}
        mb={{ base: "-5rem", md: "0", lg: "10rem" }}
        textAlign={"center"}
      >
        Make an enquiry
      </Button>
    </Container>
  );
}

export default Input;
