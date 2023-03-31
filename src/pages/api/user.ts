import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const salt = 6;
    if (req.method === 'POST') {
        const { name, email, password } = req.body;
        const hash = await bcrypt.hash(password, salt);
        try {
            const result = await prisma.user.create({
                data: {
                    email: email as string,
                    name: name as string,
                    password: hash as string
                }
            })
            res.status(201).json(result);
        } catch (error) {
            console.error(error);
            res.status(400).json(error);
        }
    } else if (req.method === 'GET') {
        const email: string | null = req.query.email as string || null;
        const token: string | null = req.query.token as string || null;
        const take: number | null = req.query.take ? parseInt(req.query.take as string) : null;
        const skip: number | null = req.query.skip ? parseInt(req.query.skip as string) : null;
        if (take !== null && skip !== null) {
            try {
                const result = await prisma.user.findMany({
                    take,
                    skip
                });
                res.status(200).json(result);
            } catch (error) {
                res.status(400).json(error);
            }
        }
    } else {
        res.status(405).json('Method Not Allowed');
    }
}

export const config = {
    api: {
        bodyParser: true,
    },
}

