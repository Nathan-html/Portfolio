import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google';
import LinkedInProvider from 'next-auth/providers/linkedin';
import {PrismaClient} from "@prisma/client";
import bcrypt, {compare, hash} from "bcrypt";

const prisma = new PrismaClient();

const NextAuthOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID as string,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "exemple@gmail.com" },
                password: { label: "Mot de passe", type: "password" }
            },
            async authorize(credentials): Promise<any | null> {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user = await prisma.user.findUnique({ where: { email: email } });
                if (!user) {
                    throw new Error("Please create an account");
                } else {
                    console.log('test 1', await hash('test', 10))
                    console.log("test", await compare("test", await hash('test', 10)))
                    const valid = await compare(password as string, user.password as string);
                    console.log("password", user.password)
                    console.log("password 2", await bcrypt.hash(password, Number(process.env.AUTH_SALT)))
                    console.log("valid", valid)
                    if (!valid || email !== user.email) {
                        throw new Error("email or password don't match");
                    } else {
                        return user
                    }
                }
            }
        })
    ],
    pages: {
        signIn: "/login",
        signOut: '/logout'
    }
}

export default NextAuth(NextAuthOptions)