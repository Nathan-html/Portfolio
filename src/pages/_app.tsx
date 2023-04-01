import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from '../styles/themes/theme'
import Navbar from '../components/navbar'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react'

// @ts-ignore
function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        {/*<CustomCursor />*/}
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(App)
