import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
const prisma = new PrismaClient()

async function main() {
  if (
    typeof process.env.ADMIN_EMAIL === 'string' &&
    typeof process.env.ADMIN_NAME === 'string' &&
    typeof process.env.ADMIN_PASSWORD === 'string'
  ) {
    const hash = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      Number(process.env.AUTH_SALT) || 10
    )
    await prisma.user.upsert({
      where: { email: process.env.ADMIN_EMAIL },
      update: {},
      create: {
        email: process.env.ADMIN_EMAIL,
        name: process.env.ADMIN_NAME,
        password: hash,
        role: 'OWNER',
      },
    })
  } else {
    console.error(
      `Please add environment variables: 
            ${typeof process.env.ADMIN_EMAIL !== 'string' && 'ADMIN_EMAIL'} 
            ${typeof process.env.ADMIN_NAME !== 'string' && 'ADMIN_NAME'} 
            ${
              typeof process.env.ADMIN_PASSWORD !== 'string' && 'ADMIN_PASSWORD'
            }`
    )
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
