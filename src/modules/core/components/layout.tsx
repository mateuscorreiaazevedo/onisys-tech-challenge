import { Box, Flex } from '@chakra-ui/react'
import { Header } from './header'
import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Layout ({ children }: Props) {
  return (
    <Box scrollBehavior="smooth">
      <Header />
      <Flex w="full" mx="auto" maxW="980px" as="section" py={'24'}>
        {children}
      </Flex>
      <Box as="footer">footer</Box>
    </Box>
  )
}
