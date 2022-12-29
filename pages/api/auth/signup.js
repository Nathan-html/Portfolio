import {NextApiRequest} from "next";
import {NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        if (!req.body) res.status(400).json('Need Data')
        const {name, email, password} = req.body
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user.count() === 0) {
            const { password } = req.body
            const hash = await bcrypt.hash(password, Number(process.env.AUTH_SALT) || 10);
            try {
                const result = await prisma.user.create({
                    data: {
                        email: email,
                        name: name,
                        password: hash
                    }
                })
                res.status(201).json(result);
            } catch (error) {
                console.error(error);
                res.status(400).json(error);
            }
        } else {
            res.status(422).json('Already exists');
        }
    } else {
        res.status(405).json('Method Not Allowed');
    }
}