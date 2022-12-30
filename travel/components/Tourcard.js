import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  Link,
  Flex,
  Button,
  Slider,
} from "@chakra-ui/react";

import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/swipper.module.css";
import Cards from "../Tourdata";

function Tourcard({}) {
  const router = useRouter();
  return (
    <Box p={{ base: "0", md: "4", lg: "10" }} display={"flex"}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          320: {
            width: 320,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        className={styles.swipper}
      >
        {Cards.map((card) => {
          return (
            <SwiperSlide key={card.id}>
              <Box
                display={"flex"}
                onClick={() => router.push(`./tourdetails/${card.id}`)}
                className="card"
                py={{ base: "3rem", md: "2rem", lg: "5rem" }}
                mx={{ base: "0rem", md: "1rem", lg: "2rem" }}
                fontFamily={"Montserrat"}
                // overflowX={{ base: "scroll" }}
              >
                <Box
                  w={"300px"}
                  h={"430px"}
                  boxShadow={"md"}
                  display={"flex"}
                  flexDir={"column"}
                  position={"relative"}
                  cursor={"pointer"}
                >
                  <Box zIndex={"10"}>
                    <Image
                      src={card.img}
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
                      fontSize={"xl"}
                      fontWeight={"600"}
                    >
                      {card.heading}
                    </Heading>
                  </Box>

                  <Box px={"3"}>
                    <Box display={"flex"} alignItems={"center"} gap={"3"}>
                      <AiOutlineClockCircle />
                      <Link> {card.headingsecondary}</Link>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default Tourcard;
