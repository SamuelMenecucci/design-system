import { extendTheme, ThemeOverride } from "@chakra-ui/react";
import type {
  ComponentStyleConfig,
  ComponentMultiStyleConfig,
  Theme,
  Colors,
} from "@chakra-ui/theme";

const ButtonStyle: ComponentStyleConfig = {
  baseStyle: {
    // width: { sm: "255px", md: "305px", lg: "355px", xl: "405px" },
    width: [255, 305, 355],
    padding: "90px 0",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    color: "#434343",
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    border: "2px solid #ffffff",
    boxShadow: "0 2px 5px 0",

    _hover: {
      backgroundColor: "#fbf4da",
      border: "2px solid #a2884f",
      color: "#a2884f",
    },
    _focus: {
      backgroundColor: "#f3f1e8",
      border: "2px solid #7c6f52",
      color: "#7c6f52",
    },
  },
};

const InputStyle: ComponentStyleConfig = {
  baseStyle: {
    field: {
      width: { sm: "300px", md: "350px", lg: "400px", xl: "450px" },
      bgColor: "#fff",
      border: "2px solid #a2994f",
      _hover: {
        bgColor: "#fbf4da",
      },
    },
  },

  defaultProps: {
    variant: null,
  },
};

//alterar os breakpoints do chakra UI
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const colors = {
  primary: "#000",
  teste: "#ffffff",
};

export const theme = extendTheme({
  breakpoints,
  colors,
  components: {
    Button: ButtonStyle,
    Input: InputStyle,
  },
} as ThemeOverride);
