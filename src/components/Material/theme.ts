import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export let theme = createTheme();

theme = createTheme(theme, {
  breakpoints: {
    values: {
      // xs: "0",
      // sm: "600px",
      // md: "800px",
      // lg: "1200px",
      // xl: "1536px",
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "305px",
          height: "180px",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          color: "#434343",
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          border: "2px solid #ffffff",
          boxShadow: "0 2px 5px 0",

          "&:hover": {
            backgroundColor: "#fbf4da",
            border: "2px solid #a2884f",
            color: "#a2884f",
          },
          "&:focus": {
            backgroundColor: "#f3f1e8",
            border: "2px solid #7c6f52",
            color: "#7c6f52",
          },
          [theme.breakpoints.down("sm")]: {
            width: "255px",
          },
          [theme.breakpoints.only("md")]: {
            width: "305px",
          },
          [theme.breakpoints.only("lg")]: {
            width: "355px",
          },
          [theme.breakpoints.only("xl")]: {
            width: "355px",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: "20px",
          width: "350px",
          // borderColor: "#a2994f",
          backgroundColor: "#fff",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#fbf4da",
          },
          [theme.breakpoints.down("sm")]: {
            width: "300px",
          },
          [theme.breakpoints.only("md")]: {
            width: "350px",
          },
          [theme.breakpoints.only("lg")]: {
            width: "400px",
          },
          [theme.breakpoints.only("xl")]: {
            width: "450px",
          },
        },
      },
    },
  },
});

export const useStyle = makeStyles((theme: any) => ({
  bt1: {
    backgroundColor: "red",
  },
}));
