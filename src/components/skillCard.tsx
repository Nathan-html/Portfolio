import { NextComponentType } from 'next'
import { Box, Heading } from '@chakra-ui/react'
import Image from 'next/image'

interface Props {
  skill: any
}

const SkillCard = ({ skill }: Props) => {
  return (
    <Box
      borderRadius="1rem"
      height="100%"
      border="1px solid black"
      padding="1rem"
    >
      <Image
        src={skill.img.src}
        alt={skill.img.alt}
        height="42px"
        width="42px"
      />
      <Heading
        as="h3"
        size={{ md: 'xl' }}
        sx={{ margin: '0.25rem 0' }}
        style={{ fontWeight: '500', fontFamily: 'Amiri' }}
      >
        {skill.name}
      </Heading>
      <p>{skill.title}</p>
    </Box>
  )
}

export default SkillCard
