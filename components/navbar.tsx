import {Box, Container} from "@chakra-ui/react";
import {NextPage} from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
    return (
        <nav style={{
            zIndex: "101",
            overflowY: "hidden",
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
            <Container maxW='6xl' style={{display: "flex", justifyContent: "space-between", padding: "1rem"}}>
                <Link href="/"><a><h2>NF</h2></a></Link>
                <Box>
                    <Link href="/projects"><a>projects</a></Link>
                </Box>
            </Container>
        </nav>
    );
}

export default Navbar;
