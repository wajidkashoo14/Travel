import { Container, Flex, Heading, Link, Text, Box } from "@chakra-ui/react";
import React from "react";
import { GrFacebook } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <Container
      maxW={"80%"}
      height={"80vh"}
      bg={"#fff"}
      display={"flex"}
      alignItems={"center"}
      gap={"8rem"}
    >
      <Flex flexDir={"column"} maxW={"350px"}>
        <Heading
          textTransform={"uppercase"}
          fontSize={"1.2rem"}
          py={"1.5rem"}
          borderBottom={"2px solid #E5E5E5"}
          width={"150px"}
          mb={"1.5rem"}
        >
          About us
        </Heading>
        <Box px={"5"} borderLeft={"3px solid #5191FA"}>
          <Text fontSize={".9rem"} fontWeight={"300"} borderL>
            We understand that different travelers come with different
            expectations and tastes, & we are forthright in acknowledging that.
            Therefore, our Tour Advisors encourage brief conversations with our
            customers before booking with us so that we may help travelers
            Handcraft Tour Packages that are just “right for them”.
          </Text>
          <Text fontSize={".9rem"}>
            <Link color={"#2378C0"}>Read more</Link> to know what makes Multi
            Destinations so Unique.
          </Text>
        </Box>
      </Flex>

      <Flex flexDir={"column"}>
        <Heading
          textTransform={"uppercase"}
          fontSize={"1.2rem"}
          py={"2rem"}
          borderBottom={"2px solid #E5E5E5"}
          width={"150px"}
          mb={"1.5rem"}
        >
          quick links
        </Heading>
        <Flex flexDir={"column"} gap={"7"}>
          <Link>Tours</Link>
          <Link>Hotels</Link>
          <Link>Transport</Link>
          <Link>Activities</Link>
          <Link>Blogs</Link>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} px={"5"}>
        <Heading
          textTransform={"uppercase"}
          fontSize={"1.2rem"}
          py={"2rem"}
          borderBottom={"2px solid #E5E5E5"}
          width={"150px"}
          mb={"1.5rem"}
        >
          need help ?
        </Heading>
        <Flex flexDir={"column"} gap={"10"}>
          <Box borderLeft={"3px solid #5191FA"} px={"5"}>
            <Text>call us</Text>
            <Text color={"#5191FA"}>+91-9596103894</Text>
            <Text color={"#5191FA"}>+91-9596103894</Text>
          </Box>
          <Box borderLeft={"3px solid #5191FA"} px={"5"}>
            <Text>Email us</Text>
            <Text color={"#5191FA"}>Wkashoo@gmail.com</Text>
          </Box>
          <Box gap={"6"} borderLeft={"3px solid #5191FA"} px={"5"}>
            <Text py={"2"}>Follow us</Text>
            <Box display={"flex"} gap={"6"} fontSize={"1.2rem"}>
              <Link>
                <GrFacebook />
              </Link>
              <Link>
                <SiInstagram />
              </Link>
              <Link>
                <BsYoutube />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Footer;
