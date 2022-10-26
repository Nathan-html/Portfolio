import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from "../styles/themes/theme";

export default function Document() {
    return (
        <Html lang='fr'>
            <Head />
            <body>
            {/* 👇 Here's the script */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}
