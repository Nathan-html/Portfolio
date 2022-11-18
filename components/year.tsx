import {NextComponentType} from "next";
import {Box, Heading, Text} from "@chakra-ui/react";
import * as React from "react";

const Year: NextComponentType = ({props}: any) => {
    return <Box margin={'0 1rem'} userSelect={'none'}>
        <Heading as='h3' size='md' sx={{opacity:' 0.5', marginBottom: "1rem"}}>{props.year}</Heading>
        <Text sx={{opacity:' 0.25', fontWeight: "900"}}>
            { props.state }
        </Text>
        <p>{props.title}</p>
        <p>{props.desc}</p>
        <Text sx={{opacity:' 0.5'}}>
            { props.place }
        </Text>
    </Box>
}

export default Year;
