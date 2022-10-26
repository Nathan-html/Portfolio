import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";
import theme from "../styles/themes/theme";

function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default App
