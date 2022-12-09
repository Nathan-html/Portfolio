import {NextComponentType} from "next";
import {Box, Heading, Text} from "@chakra-ui/react";
import * as React from "react";
import {Achievement} from "../models/year";

const Year: NextComponentType = ({props}: any) => {
    return <Box margin={'0 1rem'} userSelect={'none'}>
        <Heading as='h3' size='md' sx={{opacity:' 0.5', marginBottom: "1rem"}}>{props.year}</Heading>
        {props.achievements.map((achievement: Achievement, key: number) => {
            return <Box key={key}>
                {key > 0 &&
                    <hr style={{margin: "0.5rem 0"}}/>
                }
                {achievement.state !== "none" &&
                    <Text sx={{opacity:' 0.25', fontWeight: "900"}}>
                        { achievement.state }
                    </Text>
                }
                {achievement.title !== "none" && <p>{achievement.title}</p> }
                {achievement.desc !== "none" && <p>{achievement.desc}</p> }
                {achievement.place !== "none" &&
                    <Text sx={{opacity:' 0.5'}}>
                        { achievement.place }
                    </Text>
                }
            </Box>
        })}
    </Box>
}

export default Year;
