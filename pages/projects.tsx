import {NextPage} from "next";
import {Box, Heading, HStack, Skeleton, Stack} from "@chakra-ui/react";
import LoadingScreen from "../components/loadingScreen";

const Projects: NextPage = () => {
    return <>
        <LoadingScreen />
        <Heading as='h1' size='4xl' sx={{textAlign: "center", margin: "0 18vw"}}>
            Mes Realisations
        </Heading>
        <HStack sx={{display: "flex", justifyContent: "center", alignItems: "center", margin: "0 20vw"}}>
            <Box w='100%' height='18vw'>
                <HStack>
                    <Skeleton w='100%' sx={{aspectRatio: "1.5/1"}}>
                    </Skeleton>
                    <Stack w='100%' >
                        <Skeleton w='30%' height = "0.75rem">
                        </Skeleton>
                        <Skeleton w='50%' height = "1rem">
                        </Skeleton>
                        <Skeleton w='100%' height = "5rem">
                        </Skeleton>
                    </Stack>
                </HStack>
            </Box>
        </HStack>
    </>
}

export default Projects;
