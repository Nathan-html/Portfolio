import { NextPage } from "next";
import {Box, Text} from "@chakra-ui/react";
import Image from 'next/image'

// @ts-ignore
const Achievement: NextPage = ({props}: any) => {
    return (
        <Box key={props.key} margin={"0.5rem"} userSelect={"none"}>
            <Box sx={{aspectRatio: "1/1"}} border={"1px black solid"} borderRadius={"1rem 1rem 0 0"} overflow={"hidden"} position={"relative"}>
                <Image alt={props.alt} src={props.img} layout='fill' style={{userSelect: "none"}} />
            </Box>
            <Box border={"1px black solid"} borderTop={"0"} borderRadius={"0 0 1rem 1rem"} padding={"0.5rem 1rem 1.5rem 1rem"}>
                <Text opacity={"0.5"} fontSize={"0.75rem"} as={"b"}>{props.tag}</Text>
                <Text fontSize={"1.25rem"}>{props.title}</Text>
            </Box>
        </Box>
    );
}

export default Achievement;
