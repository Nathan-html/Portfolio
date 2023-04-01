type Image = {
  src: string
  alt: string
}

type Skill = {
  name: string
  title: string
  desc: string
  img: Image
}

const skills: Skill[] = [
  {
    name: 'Git',
    title:
      "Versionner une application grace a l'outils de control de versions Git",
    desc:
      "en association avec d'autre outils tel que github ou gitlab qui propose des services d'hébergement, " +
      'votre application sera accessible a tout votre équipe en savoir plus',
    img: {
      src: '/images/stack/git.webp',
      alt: 'Logo de Git',
    },
  },
  {
    name: 'Figma',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: '',
    img: {
      src: '/images/stack/figma.webp',
      alt: '',
    },
  },
  {
    name: 'Node.js',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    desc: '',
    img: {
      src: '/images/stack/nodejs.webp',
      alt: '',
    },
  },
  {
    name: 'React',
    title: '',
    desc: '',
    img: {
      src: '/images/stack/react.webp',
      alt: '',
    },
  },
  {
    name: 'Next.js',
    title: '',
    desc: '',
    img: {
      src: '/images/stack/nextjs.webp',
      alt: '',
    },
  },
]

export default skills
