import React from "react";
import { Box, Button, Container, Flex } from "@chakra-ui/react";
import { TbBrandFacebook } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
function Conatactstrip() {
  return (
    <Container
      maxW={"100%"}
      p={"2 10"}
      height="3rem"
      backgroundColor={"#1A2B48"}
      color="#fff"
      display={"flex"}
      alignItems={"center"}
      justifyContent="space-between"
      px="3rem"
      py="3"
    >
      <Flex maxW="100%" alignItems={"center"}>
        <Flex gap={"10"} justifyContent="center" alignItems="center">
          <Flex
            alignItems="center"
            gap={"5"}
            borderRight="1px solid #fff"
            paddingRight={"3"}
          >
            <TbBrandFacebook />
            <FiInstagram />
            <BsTwitter />
          </Flex>
          <Box>
            <p>wajidkashoo@gmail.com</p>
          </Box>
        </Flex>
      </Flex>

      <Flex>
        <Flex>
          <Flex gap={"5"} justifyContent="center" alignItems="center">
            <Box>
              <Button color="white" variant="link">
                9696103894
              </Button>
            </Box>
            <Box>
              <Button
                color="white"
                style={{ backgroundColor: "transparent" }}
                variant="link"
              >
                Signin
              </Button>
            </Box>
            <Box>
              <Button color="white" variant="link">
                Signup
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Conatactstrip;
