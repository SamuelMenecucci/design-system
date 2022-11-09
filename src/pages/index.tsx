import type { NextPage } from "next";
import Head from "next/head";
import { Material } from "../components/Material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { Chakra } from "../components/Chakra/Button";
import { theme } from "../components/Chakra/theme";
import { theme as materialTheme, useStyle } from "../components/Material/theme";
import { ChakraProvider, Box, Heading, Flex } from "@chakra-ui/react";
import { InputSearch } from "../components/Chakra/InputSearch";
import { InputSearchMaterial } from "../components/Material/InputSearch";
import { Box as MaterialBox } from "@mui/material";

function Home() {
  let classes = useStyle();

  return (
    <>
      <ThemeProvider theme={materialTheme}>
        <MaterialBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          rowGap="20px"
        >
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Material UI</h1>
          <Material classe={classes.bt1} />
          <InputSearchMaterial />
        </MaterialBox>
      </ThemeProvider>

      <ChakraProvider theme={theme}>
        <Box
          mt={100}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          rowGap="20px"
        >
          <Heading as="h1">Chakra - UI</Heading>
          <Chakra />
        </Box>

        <Box
          marginTop="20px"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          rowGap="20px"
        >
          <InputSearch />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Home;
