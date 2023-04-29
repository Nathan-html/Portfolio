import { Box, Heading, useColorMode } from '@chakra-ui/react'
import { PuffLoader } from 'react-spinners'

export default function LoadingScreen() {
  // Detect if the user is in dark mode or light mode
  const { colorMode } = useColorMode()
  return (
    <main>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 100,
          gap: '2rem',
        }}
      >
        <Heading
          as="h2"
          sx={{ fontFamily: 'Amiri', fontWeight: '500', fontStyle: 'italic' }}
        >
          Veuillez patienter
        </Heading>
        <PuffLoader
          // Change the color of the component to match the app theme
          color={colorMode === 'light' ? 'black' : 'white'}
          loading
          size={200}
        />
      </Box>
    </main>
  )
}
