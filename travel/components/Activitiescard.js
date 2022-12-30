import React from "react";
import { useRouter } from "next/router";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
function Activitiescard({ cards }) {
  const router = useRouter();
  return (
    <Box display={"flex"} gap={"10"} flexWrap={"wrap"}>
      {cards.map((cardItem) => {
        const { id, img, heading, address } = cardItem;

        return (
          <Box
            key={id}
            display={"flex"}
            onClick={() => router.push(`./activities/${id}`)}
            fontFamily={"Montserrat"}
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
                  src={img}
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
                  <Text fontSize={".9rem"}> {address}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Activitiescard;
