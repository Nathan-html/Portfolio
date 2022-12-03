import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from "../styles/themes/theme";
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang='fr'>
            <Head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9XXV4DD3BB"/>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                        dataLayer.push(arguments)
                    }
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    gtag('js', new Date());
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    gtag('config', 'G-9XXV4DD3BB');
                </script>
            </Head>
            <body>
            {/* 👇 Here's the script */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
