import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";

function Categories() {
  return (
    <Box
      position={"relative"}
      borderRadius={"5px"}
      cursor={"pointer"}
      overflow={"hidden"}
      transition={"all 0.2s"}
    >
      <Image
        src="valley.jpg"
        objectFit={"cover"}
        h={{ base: "100%", md: "165px", lg: "166px" }}
      />
      <Button
        color={"#fff"}
        position={"absolute"}
        px={"2"}
        colorScheme="#fff"
        py={"1"}
        variant="outline"
        borderBottomRightRadius={"3px"}
        borderTopRightRadius={"3px"}
        top={"38%"}
        left={"25%"}
        _hover={{ opacity: "0.8" }}
      >
        Kashmir tour packages
      </Button>
    </Box>
  );
}

export default Categories;
