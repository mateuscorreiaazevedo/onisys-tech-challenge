import { Box, Center, Input } from '@chakra-ui/react'
import React from 'react'
import { themeHelper } from '..'

export const SearchBar = () => {
  return (
    <>
      <Input
        bg={themeHelper('input-light', 'input-dark')}
        className="input"
        w="full"
        placeholder="Pesquisar artigos, notícias, etc..."
      />
      <Box
        shadow="base"
        transition="all .4s"
        className="box-answer"
        bg={themeHelper('input-light', 'input-dark')}
        position="absolute"
        left={-2}
        top={16}
        h={0}
        w="100vw"
        visibility="hidden"
      >
        <Center className="content" visibility="hidden" transition="all .25s ease-in">
          Olá
        </Center>
      </Box>
    </>
  )
}
