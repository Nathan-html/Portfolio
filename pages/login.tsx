import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image, Alert, AlertIcon, AlertTitle, AlertDescription, Box, Text,
} from '@chakra-ui/react';
import Link from "next/link";
import { getProviders, signIn } from "next-auth/react"
import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";
import Head from "next/head";
import * as React from "react";

export default function SplitScreen({ providers } : { providers: [{name: string, id: string}]}) {
    const [user, setUser] = useState({email: "", password: ""});
    const [res, setRes] = useState({});
    function handleEmail(event: ChangeEvent<HTMLInputElement>) {
        setUser({...user, email: event.target.value});
    }
    function handlePassword(event: ChangeEvent<HTMLInputElement>) {
        setUser({...user, password: event.target.value});
    }
    const handleForm: FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            email: user.email,
            password: user.password,
            redirect: false,
            callbackUrl: `${window.location.origin}`
        });
        if (typeof res !== "undefined") setRes(res);
        if (res && res.error) console.log(res);
    }
    return <main>
        <Head>
            <title>connexion - nathan flacher</title>
        </Head>
        <Stack height={'calc(100vh - 64px)'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <form onSubmit={handleForm}>
                        <Heading fontSize={'2xl'}>Connectez-vous à votre compte</Heading>
                        <Text marginBottom={"1rem"}>Mes <Link href={"./terms"}><a>conditions d&#39;utilisation</a></Link> / <Link href={"./privacy"}><a>règles de confidentialité</a></Link></Text>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input
                                name={"email"}
                                type="email"
                                value={user.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleEmail(e)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Mot de passe</FormLabel>
                            <Input
                                name={"password"}
                                type="password"
                                value={user.password}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handlePassword(e)} />
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Rester connecter</Checkbox>
                                <Link color={'blue.500'} href="/forgot-password">Mot de passe oublié ?</Link>
                            </Stack>
                            <Button type={"submit"} colorScheme={'blue'} variant={'solid'}>
                                Se connecter
                            </Button>
                        </Stack>
                    </form>
                    <Box display={"flex"} gap={2}>
                        {Object.values(providers).map((provider: {name: string, id: string}) => (
                            provider.name !== 'Credentials' && (
                                <div key={provider.name}>
                                    <Button onClick={() => signIn(provider.id)}>
                                        via {provider.name}
                                    </Button>
                                </div>
                            )
                        ))}
                    </Box>
                </Stack>
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
    </main>;
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}
