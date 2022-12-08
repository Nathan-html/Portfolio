import NextAuth, {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const NextAuthOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            name: "",
            id: "",
            type: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "exemple@gmail.com" },
                password: { label: "Mot de passe", type: "password" }
            },
            authorize (credentials, req) {
                const {email, password} = credentials as {
                    email: string,
                    password: string
                }
                if (email !== process.env.ADMIN_EMAIL && password !== process.env.ADMIN_PASSWORD) {
                    throw new Error("invalid credentials")
                }
                return {id: 1, email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD}
            }
        })
    ],
    pages: {
        signIn: "/login",
        signOut: '/logout'
    }
}

export default NextAuth(NextAuthOptions)