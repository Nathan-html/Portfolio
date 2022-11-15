import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import theme from "../styles/themes/theme";
import Navbar from "../components/navbar";

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Navbar />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default App
