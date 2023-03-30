import styled from "@emotion/styled";
import { NextPage } from "next";

const Container = styled.div`
    background-color: white;
    z-index: 101;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
`

const Title = styled.h1`
    text-align: center;
`

const Game: NextPage = () => {
    return <Container>
        <Title>Welcome to jumpy jumpy</Title>
        <button>play</button>
        <button>settings</button>
    </Container>
}

export default Game;