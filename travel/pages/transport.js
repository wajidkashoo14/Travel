import { Container } from "@chakra-ui/react";
import React from "react";
import Transportcard from "../components/Transportcard";

function Transport() {
  return (
    <Container
      minH={"100vh"}
      maxW={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexWrap={"wrap"}
      gap={"10"}
      py={"10rem"}
      overflowX={"hidden"}
    >
      <Transportcard name={"Innova Crysta"} img={"./innovacrysta.webp"} />
      <Transportcard name={"Innova"} img={"./innova.webp"} />
      <Transportcard name={"Etios"} img={"./etios.webp"} />
      <Transportcard name={"Swift Dezire"} img={"./swiftdesire.webp"} />
      <Transportcard name={"Ertiga"} img={"./ertiga.jpeg"} />
      <Transportcard name={"Indica"} img={"./indica.webp"} />
      <Transportcard name={"Scorpio"} img={"./scorpio.webp"} />
      <Transportcard name={"xylo"} img={"./xylo.webp"} />
      <Transportcard name={"Tavera"} img={"./tavera.png"} />
      <Transportcard name={"Winger"} img={"/winger.webp"} />
      <Transportcard name={"Volvo"} img={"/volvo.jpg"} />
      <Transportcard name={"Minibus"} img={"/minibus.jpg"} />
    </Container>
  );
}

export default Transport;
