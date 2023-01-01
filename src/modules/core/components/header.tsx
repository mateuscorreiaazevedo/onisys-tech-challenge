import {
  Center,
  Flex,
  Heading,
  Highlight,
  HStack,
  Spacer,
  Switch,
  useColorMode,
  Link as A,
  Tooltip
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
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
          <Heading fontSize="heading" w="44" color={themeHelper('gray.700', 'cyan.100')}>
            <Highlight query="Tech" styles={{ color: 'secondary', fontWeight: 'normal' }}>
              Tech Challenge
            </Highlight>
          </Heading>
        </Link>
        <Spacer />
        <HStack w="full">
          <SearchBar />
          <Switch
            px={4}
            onChange={toggleColorMode}
            colorScheme="blackAlpha"
            isChecked={colorMode === 'dark'}
          />
          <Center fontSize="2xl" gap={4}>
            <Tooltip label="GitHub" hasArrow>
              <A href="https://github.com/mateuscorreiaazevedo" target="_blank">
                <BsGithub />
              </A>
            </Tooltip>
            <Tooltip label="Linkedin" hasArrow>
              <A href="https://linkedin.com/in/mateuscorreiaazevedo" target="_blank">
                <BsLinkedin />
              </A>
            </Tooltip>
          </Center>
        </HStack>
      </Flex>
    </Center>
  )
}
