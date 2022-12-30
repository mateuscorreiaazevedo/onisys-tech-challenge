import { ColorMode, extendTheme, theme } from '@chakra-ui/react'

export const newTheme = extendTheme({
  ...theme,
  styles: {
    global: (props: ColorMode) => ({
      'body, html': {
        background: props === 'dark' ? 'gray.900' : 'cyan.50',
        color: props === 'dark' ? 'white' : 'gray.900',
        overflowX: 'hidden'
      }
    })
  },
  colors: {
    primary: '#3487d8',
    secondary: '#ff99ca',
  }
})
