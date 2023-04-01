import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/themes/theme'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="fr">
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        {/* Google Analytics */}
        <Script
          src={
            'https://www.googletagmanager.com/gtag/js?id=' +
            process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS
          }
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                `}
        </Script>
        <NextScript />
      </body>
    </Html>
  )
}
