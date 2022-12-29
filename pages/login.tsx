import * as React from "react";
import Head from "next/head";
import {
    Flex,
    Stack,
    Image,
} from '@chakra-ui/react';
import LoginForm from "../components/form/loginForm";
import {getProviders} from "next-auth/react";

export default function LoginPage({ providers } : { providers: [{name: string, id: string}]}) {
    return <main>
        <Head>
            <title>connexion - nathan flacher</title>
        </Head>
        <Stack height={"100%"} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <LoginForm providers={providers} />
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    </main>
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}
