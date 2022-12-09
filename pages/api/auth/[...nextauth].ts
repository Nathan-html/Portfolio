import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const NextAuthOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            id: "",
            type: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "exemple@gmail.com" },
                password: { label: "Mot de passe", type: "password" }
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
                    throw new Error("invalid credentials");
                };
                return {
                    id: 1,
                    email: process.env.ADMIN_EMAIL,
                    password: process.env.ADMIN_PASSWORD,
                    role: "admin"
                } as any;
            }
        })
    ],
    pages: {
        signIn: "/login",
        signOut: '/logout'
    };
}

export default NextAuth(NextAuthOptions)