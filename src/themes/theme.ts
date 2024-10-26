"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    background: {
      default: "#fffff",
    },
    customBackground: {
      header: "#000B2F",
    },
    customColor: {
      darkBlue: "#000B2F",
    },
    text: {
      primary: "#000B2F",
      secondary: "#ffffff",
    },
  },
});

export default theme;
