import { Box, Center, Flex, Highlight, Spacer } from '@chakra-ui/react'
import { themeHelper } from '..'
import React from 'react'

export const Footer = () => {
  return (
    <Center
      bg={themeHelper('bg-light', 'bg-dark')}
      as="footer"
      w="full"
      h="20"
      borderTop="1px solid"
      borderColor={themeHelper('gray.200', 'input-dark')}
      shadow="xl"
    >
      <Flex w="full" maxW="980px" fontSize="banner" letterSpacing="1px" fontWeight="semibold">
        <Box>
          <Highlight
            query="Mateus Azevedo"
            styles={{
              color: 'primary',
              textShadow: '0 0 5px rgba(0,0,0,0.1)'
            }}
          >
            Powered by: Mateus Azevedo
          </Highlight>
        </Box>
        <Spacer />
        <Box>Onisys | Tech Challenge</Box>
      </Flex>
    </Center>
  )
}
