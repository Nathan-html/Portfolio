import { StaticImageData } from 'next/image'
import laTania from '../../public/images/black-ski-la-tania.png'
import portfolioFigma from '../../public/images/portfolio.png'
import portfolioNextJS from '../../public/images/portfolio-nextjs.png'
import wgy from '../../public/images/WGY.png'

type Achievement = {
  img: string | StaticImageData
  alt: string
  tag: string
  title: string
  desc: string
  link?: string
}

const achievements: Achievement[] = [
  {
    img: portfolioFigma,
    alt: 'placeholder',
    tag: 'Figma',
    title: 'Maquettage de mon portfolio',
    desc: 'mon portfolio en N&B',
  },
  {
    img: portfolioNextJS,
    alt: 'placeholder',
    tag: 'Next.js (TypeScript)',
    title: 'Site avec administration',
    desc: 'mon portfolio en N&B',
  },
  {
    img: wgy,
    alt: 'placeholder',
    tag: 'API Express | webapp Create React App',
    title: 'We Guide You',
    desc: '',
  },
  {
    img: laTania,
    alt: "Station la tania de l'école de ski, black ski.",
    tag: 'Wordpress',
    title: "Station la tania de l'ESA black ski.",
    desc: "Création d'un site Wordpress",
    link: 'https://latania-ecole-ski.black-ski.com/fr/',
  },
]

export default achievements
