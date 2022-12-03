import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from "../styles/themes/theme";
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang='fr'>
            <body>
            {/* 👇 Here's the script */}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
    
                gtag('config', 'GA_MEASUREMENT_ID');
            `}
            </Script>
            </body>
        </Html>
    )
}
