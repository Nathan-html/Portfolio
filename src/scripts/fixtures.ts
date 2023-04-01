import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

prisma.user.count().then(async (usersCount: number) => {
  if (usersCount === 0) {
    await prisma.user.create({
      data: {
        name: process.env.ADMIN_NAME as string,
        email: process.env.ADMIN_EMAIL as string,
        password: 'test',
        role: 'OWNER',
      },
    })
    console.log(`1 users was been created`)
  } else {
    console.log(`${usersCount.toString()} users was already in the database`)
  }
})

prisma.achievement.count().then(async (achievementsCount: number) => {
  if (achievementsCount === 0) {
    const achievementsCreated = await prisma.achievement.createMany({
      data: [
        {
          title: 'Maquettage portfolio Noir et Blanc',
          tag: 'Design',
          desc: '',
          imageSrc:
            'https://cdn.pixabay.com/photo/2022/11/23/16/03/butterfly-7612383_960_720.jpg',
          imageAlt: 'placeholder',
        },
        {
          title: 'Diagram Creator',
          tag: 'Développement web',
          desc: '',
          imageSrc:
            'https://cdn.pixabay.com/photo/2022/11/29/16/34/bird-7624853_960_720.jpg',
          imageAlt: 'placeholder',
        },
        {
          title: 'PiCom',
          tag: 'Développement mobile',
          desc: '',
          imageSrc:
            'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg',
          imageAlt: 'placeholder',
        },
      ],
    })
    console.log(
      `${achievementsCreated.count.toString()} achievements was been created`
    )
  } else {
    console.log(
      `${achievementsCount.toString()} achievements was already in the database`
    )
  }
})

prisma.skill.count().then(async (skillsCount: number) => {
  if (skillsCount === 0) {
    const skillsCreated = await prisma.skill.createMany({
      data: [
        {
          name: 'Git',
          title:
            "Versionner une application grace a l'outils de control de versions Git",
          desc:
            "en association avec d'autre outils tel que github ou gitlab qui propose des services d'hébergement, " +
            'votre application sera accessible a tout votre équipe en savoir plus',
          imageSrc: '/images/stack/git.webp',
          imageAlt: 'Logo de Git',
        },
        {
          name: 'Figma',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          desc: '',
          imageSrc: '/images/stack/figma.webp',
          imageAlt: 'placeholder',
        },
        {
          name: 'Node.js',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          desc: '',
          imageSrc: '/images/stack/nodejs.webp',
          imageAlt: 'placeholder',
        },
        {
          name: 'React',
          title: '',
          desc: '',
          imageSrc: '/images/stack/react.webp',
          imageAlt: 'placeholder',
        },
        {
          name: 'Next.js',
          title: '',
          desc: '',
          imageSrc: '/images/stack/nextjs.webp',
          imageAlt: 'placeholder',
        },
      ],
    })
    console.log(`${skillsCreated.count.toString()} skills was been created`)
  } else {
    console.log(`${skillsCount.toString()} skills was already in the database`)
  }
})

prisma.historyitem.count().then(async (historyItemCount: number) => {
  if (historyItemCount === 0) {
    const historyItemCreated = await prisma.historyitem.create({
      data: {
        year: '2018',
        achievements: {
          create: {
            state: 'obtenu',
            title: 'BEP',
            desc: 'Métiers de l’électricité et de ses environnements connectés',
            place: "Lycée professionnel l'odyssée",
          },
        },
      },
    })
    console.log(`1 history item was been created`)
  } else {
    console.log(
      `${historyItemCount.toString()} history item was already in the database`
    )
  }
})
