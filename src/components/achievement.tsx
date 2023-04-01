import { NextComponentType, NextPage } from 'next'
import { Box, Text } from '@chakra-ui/react'
import Image, { StaticImageData } from 'next/image'

type Props = {
  key: number
  img: string | StaticImageData
  alt: string
  tag: string
  title: string
  desc: string
}

function Achievement({ key, alt, img, tag, title, desc }: Props) {
  return (
    <Box key={key} margin={'0.5rem'} userSelect={'none'}>
      <Box
        shadow={'lg'}
        sx={{ aspectRatio: '1/1' }}
        borderRadius={'1rem'}
        overflow={'hidden'}
        position={'relative'}
      >
        <Image
          draggable="false"
          objectFit={'cover'}
          alt={alt}
          src={img}
          layout="fill"
          style={{ userSelect: 'none' }}
        />
      </Box>
      <Box borderTop={'0'} borderRadius={'1rem'} padding={'0.5rem'}>
        <Text opacity={'0.5'} fontSize={'0.75rem'} as={'b'}>
          {tag}
        </Text>
        <Text fontSize={'1.25rem'}>{title}</Text>
        <Text fontSize={'0.78rem'}>{desc}</Text>
      </Box>
    </Box>
  )
}

export default Achievement
