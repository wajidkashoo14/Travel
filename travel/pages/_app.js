import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { SearchContext } from "../components/SearchContext/SearchContext";
import React, { useState } from "react";

const theme = extendTheme({
  fonts: {
    heading: `Montserrat`,
    text: `Montserrat`,
    body: `'Source Sans Pro', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  const [filteredData, setFiliteredData] = useState([]);
  return (
    <ChakraProvider theme={theme}>
      <SearchContext.Provider value={{ filteredData, setFiliteredData }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
