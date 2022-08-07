import "../styles/globals.css";
import "../styles/contact.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Fonts from "../components/font";
import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import { ContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
   
    <ChakraProvider theme={theme}>
      
      <Fonts />
       <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>

    </ChakraProvider>
  );
}

export default MyApp;
