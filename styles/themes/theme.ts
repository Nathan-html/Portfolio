import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    // styles: {
    //     global: {
    //         // styles for the `body`
    //         body: {
    //             bg: bg
    //         },
    //         h1: {
    //             color: 'white'
    //         },
    //         h2: {
    //             color: 'white'
    //         },
    //         h3: {
    //             color: 'white'
    //         },
    //         p: {
    //             color: 'white'
    //         },
    //         a: {
    //             color: 'white'
    //         }
    //     },
    // },
    // components: {
    //     Box: {
    //         baseStyle: {
    //             backgroundColor: 'black', // Normally, it is "semibold"
    //         },
    //     }
    // },
    colors: {
        brand: {
            900: '#1a365d',
            800: '#153e75',
            700: '#2a69ac',
        },
        backgroundColor: '#FC8181'
    },
    initialColorMode: 'system',
    useSystemColorMode: true,
})

export default theme;
