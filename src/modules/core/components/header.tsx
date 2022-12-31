import {
  Center,
  Flex,
  Heading,
  Highlight,
  HStack,
  Spacer,
  Switch,
  useColorMode
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { themeHelper } from '..'
import { SearchBar } from './searchbar'

export const Header = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <Center
      as="header"
      w="full"
      h={16}
      bg={themeHelper('bg-light', 'bg-dark')}
      borderBottom="1px solid"
      borderColor={themeHelper('gray.200', 'gray.700')}
      position="fixed"
      zIndex="dropdown"
    >
      <Flex w="full" maxW="940px" mx={4} h="full" align="center" gap={4}>
        <Link href="/">
          <Heading fontSize="heading" w="44">
            <Highlight query="Tech" styles={{ color: 'secondary', fontWeight: 'normal' }}>
              Tech Challenge
            </Highlight>
          </Heading>
        </Link>
        <Spacer />
        <HStack
          w="full"
          css={`
            .input:focus ~ .box-answer {
              height: 60vh;
              visibility: visible;
            }
            .input:focus ~ .box-answer .content {
              visibility: visible;
            }
          `}
        >
          <SearchBar />
          <Switch
            onChange={toggleColorMode}
            colorScheme="blackAlpha"
            isChecked={colorMode === 'dark'}
          />
        </HStack>
      </Flex>
    </Center>
  )
}
