import Hero from "../components/Hero";
import Input from "../components/Input";
import Cards from "../components/Cards";
import Tourcategories from "../components/Tourcategories";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Discription from "../components/Discription";
import Explore from "../components/Explore";
import Banner from "../components/Banner";
import {
  Box,
  Container,
  Image,
  Flex,
  Heading,
  Text,
  ListItem,
  List,
  UnorderedList,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box scrollBehavior={"smooth"}>
      <Hero />
      <Input />
      <Discription />
      <Cards />
      <Banner />
      <Tourcategories />
      <Explore />
      <Subscribe />
      <Testimonials />
      <Contact />
    </Box>
  );
}
