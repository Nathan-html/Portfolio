import {Box, Button, Checkbox, FormControl, FormLabel, Heading, Input, Stack, Text} from "@chakra-ui/react";
import Link from "next/link";
import {getProviders, signIn} from "next-auth/react";
import * as React from "react";
import {FormikConfig, FormikProps, useFormik} from "formik";

/** properties of the form */
type LoginForm = {
    email: string;
    password: string;
}

/** provider returned by Next Auth */
type Provider = {
    name: string;
    id: string;
}

/** params used by the function bellow */
type LoginFormParams = {
    providers: [Provider]
}

export default function LoginForm ({ providers } : LoginFormParams) {
    const onSubmit = async (values: any) => {
        const res = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: `/`
        });
        console.log("res", res)
        // if (typeof res !== "undefined") setRes(res);
        // if (res && res.error) console.log(res);
        console.log("values", values)
    }

    const loginFormConfig: FormikConfig<LoginForm> = {
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: onSubmit
    }

    const loginFormProps: FormikProps<LoginForm> = useFormik<LoginForm>(loginFormConfig);

    return <Stack spacing={4} w={'full'} maxW={'md'}>
        <form onSubmit={loginFormProps.handleSubmit}>
            <Heading fontSize={'2xl'}>Connectez-vous à votre compte</Heading>
            <Text marginBottom={"1rem"}>Mes <Link href={"./terms"}><a>conditions d&#39;utilisation</a></Link> / <Link href={"./privacy"}><a>règles de confidentialité</a></Link></Text>
            <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" {...loginFormProps.getFieldProps("email")}/>
            </FormControl>
            <FormControl id="password">
                <FormLabel>Mot de passe</FormLabel>
                <Input type="password" {...loginFormProps.getFieldProps("password")}/>
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
            {Object.values(providers).map((provider: Provider) => (
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
}