import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

export const newTheme: ThemeConfig = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: (props: StyleFunctionProps) => ({
      'body, html': {
        overflowX: 'hidden',
        bg: props.colorMode === 'dark' ? 'body-dark' : 'gray.100',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        scrollBehavior: 'smooth',
      }
    })
  },
  colors: {
    primary: '#3487d8',
    secondary: '#ff99ca',
    'body-dark': '#333',
    'bg-light': '#fefefe',
    'bg-dark': '#242424',
    'card-light': 'rgba(255,255,255,0.5)',
    'card-dark': '#444',
    'input-dark': '#444',
    'input-light': '#f5f5f5'
  },
  fontSizes: {
    text: '12px',
    banner: '18px',
    heading: '24px',
    subtitle: '16px'
  }
})
