import { Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

function Hero() {
  return (
    <Box
      maxW={"100%"}
      height={"100vh"}
      bg={"#fff"}
      textAlign={"center"}
      overflow={"hidden"}
      fontFamily={"Montserrat"}
    >
      <div className={styles.hero}>
        <video
          className={styles.video}
          src="mountains.mp4"
          muted
          loop
          autoPlay
        />
      </div>
    </Box>
  );
}

export default Hero;
