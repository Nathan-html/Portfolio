import * as React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import {
    Avatar,
    AvatarGroup,
    Box, Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Text
} from "@chakra-ui/react";
import {PulseLoader} from "react-spinners";
import UAParser from "ua-parser-js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image'
import ImageNathanFlacher from "../public/images/pictures/nathan-flacher-mobile.jpg";
import SkillCard from "../components/skillCard";
import Year from "../components/year";
import Link from "next/link";
import Achievement from "../components/achievement";
import years from "../data/years";
import skills from "../data/skills";
import {useSession} from "next-auth/react";
import achievements from "../data/achievements";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

// @ts-ignore
const Home: NextPage = ({deviceType}) => {

    const { data: session } = useSession()

    const yearProps = (value: any) => {
        return {props: value}
    }

    const achievementProps = (value: any, key: number) => {
        const render = {...value, key: key}
        return {
            props: render
        }
    }

    const skillProps = (value: any) => {
        return {props: value}
    }

    // Page for admin
    if (session) {
        return <p>dashboard</p>
    } else {
        // @ts-ignore
        return <Container maxW='5xl'>
            <Head>
                <title>Développeur sur Lyon</title>
                <meta name="description"
                      content="Nathan Flacher, Développeur web et logiciel sur Lyon. JS, TS, Node.js, electron.js..."/>
            </Head>

            <Heading as='h1' size={{md: '4xl'}}
                     sx={{textAlign: "center", fontFamily: "Amiri", fontWeight: "500", margin: "3rem 0"}}>
                Nathan Flacher<br/>
                Développeur web et logiciel sur Lyon
            </Heading>

            <Grid templateColumns='1fr 1.5fr 1fr' gap={"4rem"}
                  sx={{overflow: "hidden", margin: "3rem", alignItems: "center"}}>
                <Grid w='100%' gap={"2rem"}>
                    <Box>
                        <Heading as="h3" sx={{opacity: "0.25", fontWeight: "500"}} size='md'>Bio</Heading>
                        <Text>Je suis un développeur passionné par le JavaScript, aimant également l’art 🎨 et le volley
                            🏐</Text>
                    </Box>
                    <Box>
                        <Heading as="h3" sx={{opacity: "0.25", fontWeight: "500"}} size='md'>Contact</Heading>
                        <Text>Lyon, France</Text>
                        <Text><a href="mailto:contact@nathan-flacher.com">contact@nathan-flacher.com</a></Text>
                        <Text><a href="tel:06 95 41 73 00">06 95 41 73 00</a></Text>
                    </Box>
                    <Box>
                        <Heading as="h3" sx={{opacity: "0.25", fontWeight: "500"}} size='md'>Services</Heading>
                        <Text>Développement web</Text>
                        <Text>Développement mobile</Text>
                        <Text>Design</Text>
                    </Box>
                </Grid>
                <GridItem w='100%'>
                    <Box borderRadius="999" border='2px' borderColor='gray.200' height='500px' margin="1rem"
                         padding="1rem">
                        <Box borderRadius="999" height={"100%"} width={"100%"} position='relative' overflow={"hidden"}>
                            {/*<Skeleton margin="16px" borderRadius="999" height='500px'>*/}
                            <Image
                                alt="me "
                                title=""
                                // loader={myLoader}
                                src={ImageNathanFlacher}
                                placeholder="blur"
                                layout="fill"
                                objectFit="cover"
                                style={{
                                    borderRadius: "999px",
                                    userSelect: "none"
                                }}
                            />
                        </Box>
                        {/*</Skeleton>*/}
                    </Box>
                </GridItem>
                <Grid w='100%' gap={"4rem"} sx={{justifyContent: "end"}}>
                    <Box sx={{justifySelf: "end", textAlign: "end"}}>
                        <Heading as="h3" sx={{opacity: "0.25", fontWeight: "500"}} size='md'>Années
                            d’expérience</Heading>
                        <Text>2</Text>
                    </Box>
                    <Box sx={{justifySelf: "end", textAlign: "end"}}>
                        <Heading as="h3" sx={{opacity: "0.25", fontWeight: "500"}} size='md'>Projets finis</Heading>
                        <Text>4</Text>
                    </Box>
                </Grid>
            </Grid>

            <hr style={{margin: "2rem"}}/>

            <Heading as='h2' size='xl' sx={{fontFamily: "Amiri", fontWeight: "500", marginLeft: "1rem"}}>Mes
                compétences <i><span style={{fontSize: "1.5rem"}}>les plus utilisées</span></i></Heading>

            <Grid
                h='200px'
                templateColumns='repeat(3, 1fr)'
            >
                <GridItem margin={"0.5rem"}><SkillCard skill={skills[0]}/></GridItem>
                <GridItem margin={"0.5rem"}><SkillCard skill={skills[1]}/></GridItem>
                <GridItem margin={"0.5rem"}><SkillCard skill={skills[2]}/></GridItem>
            </Grid>
            <Box margin={'0.5rem 0 1rem 0.5rem'}>
                <AvatarGroup>
                    {skills.map((avatar, key) => key >= 3 && (
                        <Avatar
                            key={key}
                            name={avatar.name}
                            src={avatar.img}
                            size={{base: 'sm', md: 'md'}}
                            position={'relative'}
                            zIndex={2}
                            sx={{border: "0.125rem solid grey",}}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                bg: 'white',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}
                        />
                    ))}
                    <Box sx={{margin: "0 1rem", display: "flex", alignItems: "center", gap: "0.25rem"}}>
                        <PulseLoader size={8} color='grey'/>
                        <Text sx={{fontSize: "10px", lineHeight: "10px"}}>En cours<br/>d’amélioration</Text>
                    </Box>
                </AvatarGroup>
            </Box>

            <hr style={{margin: "2rem"}}/>

            <Heading as='h2' size='xl' sx={{
                fontFamily: "Amiri",
                fontWeight: "500",
                textAlign: "center"
            }}>Mes <i>meilleures</i> réalisations</Heading>
            <Carousel
                ssr
                partialVisbile
                deviceType={deviceType}
                itemClass="image-item"
                responsive={responsive}
            >
                {achievements.map((achievement: any, key: number) => {
                    return <Achievement key={key} {...achievementProps(achievement, key)} />
                })}
            </Carousel>

            <hr style={{margin: "2rem"}}/>

            <Heading as='h2' size='xl' sx={{fontFamily: "Amiri", fontWeight: "500", textAlign: "center"}}>Mon
                historique</Heading>
            <Box marginTop={"2rem"}>
                <Carousel
                    ssr
                    partialVisbile
                    deviceType={deviceType}
                    itemClass="image-item"
                    responsive={responsive}
                >
                    {years.map((value: any, key: number) => {
                        return (
                            <Year key={key} {...yearProps(value)}/>
                        );
                    })}
                </Carousel>
            </Box>

            <hr style={{margin: "2rem"}}/>

            <Box sx={{margin: "4rem", display: "flex", flexDirection: "column", gap: "2rem"}}>
                <Heading as='h2' size='xl' sx={{fontFamily: "Amiri", fontWeight: "500", textAlign: "center"}}>
                    Vous souhaitez avoir plus d’informations sur mon profil ou faire appel à mes services
                </Heading>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <Link href={"/contact"}>
                        <Button colorScheme='black' variant='outline'>
                            contacter moi
                        </Button>
                    </Link>
                </Box>
            </Box>

            <hr style={{margin: "2rem"}}/>

            <footer style={{display: "flex", justifyContent: "space-between", margin: "2rem 0"}}>
                <Text>©2022 | Nathan-Flacher</Text>
                <Text>contact@nathan-flacher.com</Text>
            </footer>
        </Container>
    }
}

Home.getInitialProps = ({ req }) => {
    let userAgent: any;
    if (req) {
        userAgent = req.headers["user-agent"];
    } else {
        userAgent = navigator.userAgent;
    }
    const parser: UAParser.UAParserInstance = new UAParser();
    parser.setUA(userAgent);
    const result: UAParser.IResult = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
};

export default Home;
