import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useLoadingPage } from '..'

export function Loading () {
  const { isLoading } = useLoadingPage()
  return (
    <>
      {isLoading && (
        <Center
          h="100vh"
          position="fixed"
          inset={0}
          bg="whiteAlpha.300"
          zIndex="dropdown"
          backdropFilter="auto"
          backdropBlur="sm"
        >
          <Spinner size="xl" thickness="4px" />
        </Center>
      )}
    </>
  )
}
