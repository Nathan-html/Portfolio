import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
} from '@chakra-ui/react';
import Link from "next/link";
import {signIn} from "next-auth/react";
import {ChangeEvent, FormEvent, FormEventHandler, useState} from "react";

export default function SplitScreen() {
    const [user, setUser] = useState({email: "", password: ""});
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
            redirect: false
        });
        if (res && res.error) console.log(res);
    }
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <form onSubmit={handleForm}>
                        <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input
                                name={"email"}
                                type="email"
                                value={user.email}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => handleEmail(e)} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
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
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.500'} href="/forgot-password">Forgot password ?</Link>
                            </Stack>
                            <Button type={"submit"} colorScheme={'blue'} variant={'solid'}>
                                Sign in
                            </Button>
                        </Stack>
                    </form>
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
    );
}
