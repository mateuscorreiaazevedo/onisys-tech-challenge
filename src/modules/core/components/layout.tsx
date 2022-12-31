import { Box, Flex } from '@chakra-ui/react'
import { Header } from './header'
import React from 'react'
import Head from 'next/head'
import { Footer } from './footer'

type Props = {
  children: React.ReactNode
}

export default function Layout ({ children }: Props) {
  return (
    <>
      <Head>
        <title>Tech-Challenge | Mateus Azevedo</title>
      </Head>
      <Box scrollBehavior="smooth">
        <Header />
        <Flex w="full" mx="auto" maxW="980px" as="section" py={'24'}>
          {children}
        </Flex>
        <Footer />
      </Box>
    </>
  )
}
