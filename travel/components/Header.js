import React from "react";
import Conatactstrip from "./Conatactstrip";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <Box>
      <Conatactstrip />
      <Navbar />
    </Box>
  );
}

export default Header;
