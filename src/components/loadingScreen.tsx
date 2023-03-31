import {Box, Heading} from "@chakra-ui/react";
import {ClockLoader, PuffLoader} from "react-spinners";

export default function LoadingScreen () {
    return <main>
        <Box sx={{
            background: "white",
            position: "fixed",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            gap: "2rem"
        }}>
            <Heading as="h2" sx={{fontFamily: "Amiri", fontWeight: "500", fontStyle: "italic"}}>Veuillez patienter</Heading>
            <PuffLoader
                color="black"
                loading
                size={200}
            />
        </Box>
    </main>
}
