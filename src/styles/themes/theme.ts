import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
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
