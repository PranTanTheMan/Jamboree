import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "#FAF19A",
    primary: "#EF5200",
    bgColor: "#EF5200",
    headerColor: "#E3E3E3",
    track: "rgba(241, 241, 241, 0)",
  },
  fonts: {
    body: "'Neue Machina', sans-serif",
    heading: "'Neue Machina', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Neue Machina",
        color: "white",
        backgroundColor: "bgColor",
        padding: 0,
        margin: 0,
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
        backgroundColor: "transparent",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        backgroundColor: "white",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
