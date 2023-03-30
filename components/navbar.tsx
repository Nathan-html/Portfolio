import {Avatar, Box, Button, Container, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode} from "@chakra-ui/react";
import {NextPage} from "next";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../public/logo.svg";
import {signOut, useSession} from "next-auth/react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { NextRouter, useRouter } from "next/router";
import { i18n } from "../next-i18next.config";
import { ParsedUrlQuery } from "querystring";

const Navbar: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { data: session } = useSession();
    const router: NextRouter = useRouter();
    const { pathname, asPath, query , locale } = router;
    return (
        <nav style={{
            zIndex: "101",
            position: "fixed",
            top: 0,
            display: "flex",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            width: "100%",
            backdropFilter: "blur(10px)"
        }}>
            <Container maxW='6xl' style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: '64px'}}>
                <Link href="/">
                    <Image src={ImageLogo} height={20} width={20} alt={"Mon logo, Nathan Flacher"} />
                </Link>
                <Box display={"flex"} alignItems={"center"}>
                    {/* Choose Locale */}
                    <Menu>
                        <MenuButton variant={"ghost"} as={Button} rightIcon={<BiChevronDown />}>
                            <img
                                loading="lazy"
                                src={`https://flagcdn.com/20x15/${locale?.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/40x30/${locale?.toLowerCase()}.png 2x, 
                                https://flagcdn.com/60x45/${locale?.toLowerCase()}.png 3x`}
                                width="20"
                                height="15"
                                alt={locale?.toLowerCase()} />
                        </MenuButton>
                        <MenuList>
                            {i18n.locales.map((locale: string, key: number) => (
                                <MenuItem key={key} gap={'0.5rem'} onClick={() => router.push({ pathname, query }, asPath, { locale: locale })}>
                                    <img
                                        loading="lazy"
                                        src={`https://flagcdn.com/20x15/${locale.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/40x30/${locale.toLowerCase()}.png 2x, 
                                        https://flagcdn.com/60x45/${locale.toLowerCase()}.png 3x`}
                                        width="20"
                                        height="15"
                                        alt={locale.toLowerCase()} />
                                        {locale.toUpperCase()}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    {/* Dark or Light mode */}
                    <Button onClick={toggleColorMode} variant={"ghost"}>
                        {colorMode === 'light' ? <RiSunFill /> : <RiMoonClearFill />}
                    </Button>
                    <Button variant={"ghost"}>
                        <Link href="/projects">
                            projects
                        </Link>
                    </Button>
                    <Button variant={"ghost"}>
                        <Link href="/achievements">
                            réalisations
                        </Link>
                    </Button>
                    {typeof session !== "undefined" && session !== null && (
                        session.user?.image ?
                            <Menu>
                                <MenuButton>
                                    <Avatar
                                        name={session.user?.name || ""}
                                        src={session.user?.image || "https://lh3.googleusercontent.com/a/AEdFTp6cfcwnk0M4own9sdGKeRUDILLnUSb_AuLGfXgR=s96-c"}
                                        size={{base: 'sm'}}
                                    />
                                </MenuButton>
                                <MenuList>
                                    <Box margin={"0 12px"}>
                                        <Text fontSize={"lg"} fontWeight={"semibold"}>{session.user?.name}</Text>
                                        <Text marginBottom={"12px"}>{session.user?.email}</Text>
                                    </Box>
                                    <Link href="/dashboard">
                                        <MenuItem>Tableau de bord</MenuItem>
                                    </Link>
                                    <hr />
                                    <MenuItem onClick={() => signOut()}>Déconnexion</MenuItem>
                                </MenuList>
                            </Menu> :
                            <a onClick={() => signOut()}>déconnexion</a>
                        )
                    }
                </Box>
            </Container>
        </nav>
    );
}

export default Navbar;
