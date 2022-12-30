import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'
import { ThemeProvider as Emotion } from '@emotion/react'
import { newTheme } from '@/styles'
import React from 'react'

type PropviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: PropviderProps) => {
  return (
    <ChakraProvider theme={newTheme}>
      <Emotion theme={newTheme}>
        <ColorModeScript />
        <CSSReset />
        {children}
      </Emotion>
    </ChakraProvider>
  )
}
