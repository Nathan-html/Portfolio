import {Avatar, Box, Container, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {NextPage} from "next";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../public/logo.svg";
import {signOut, useSession} from "next-auth/react";
import * as React from "react";

const Navbar: NextPage = () => {
    const { data: session } = useSession()
    console.log(session?.user?.image)
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
                <Box display={"flex"} gap={4} alignItems={"center"}>
                    <Link href="/projects">
                        <a>projects</a>
                    </Link>
                    <Link href="/achievements">
                        <a>réalisations</a>
                    </Link>
                    {session ?
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
                                        <hr />
                                    </Box>
                                    <MenuItem onClick={() => signOut()}>déconnexion</MenuItem>
                                </MenuList>
                            </Menu> :
                        <a onClick={() => signOut()}>déconnexion</a> :
                        <Link href="/login">
                            <a>connexion</a>
                        </Link>

                    }

                </Box>
            </Container>
        </nav>
    );
}

export default Navbar;
