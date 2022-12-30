import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout ({ children }: Props) {
  return (
    <Box>
      <Box as="header">Header</Box>
      <Flex w='full' justifyContent='center' as="section" >
        {children}
      </Flex>
      <Box as="footer">footer</Box>
    </Box>
  )
}
