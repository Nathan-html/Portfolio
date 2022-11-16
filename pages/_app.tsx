import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import theme from "../styles/themes/theme";
import Navbar from "../components/navbar";
import CustomCursor from "../components/cursor";
import {appWithTranslation} from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <CustomCursor />
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default appWithTranslation(App)
