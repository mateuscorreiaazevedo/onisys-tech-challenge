import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'
import { ThemeProvider as Emotion } from '@emotion/react'
import { myTheme } from '@/styles'
import React from 'react'

type PropviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: PropviderProps) => {
  return (
    <ChakraProvider theme={myTheme}>
      <Emotion theme={myTheme}>
        <ColorModeScript />
        <CSSReset />
        {children}
      </Emotion>
    </ChakraProvider>
  )
}
