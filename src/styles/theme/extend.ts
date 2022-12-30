import { theme, extendTheme, type ThemeConfig } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

export const newTheme: ThemeConfig = extendTheme({
  ...theme,
  initialColorMode: 'light',
  useSystemColorMode: true,
  styles: {
    global: (props: StyleFunctionProps) => ({
      'body, html': {
        overflowX: 'hidden',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'cyan.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900'
      }
    })
  },
  colors: {
    primary: '#3487d8',
    secondary: '#ff99ca',
    'bg-card': (props: StyleFunctionProps) => (
      props.colorMode === 'light' ? 'gray.100' : 'gray.700'
    ),
    text: (props: StyleFunctionProps) => (
      props.colorMode === 'light' ? 'gray.700' : 'cyan.50'
    )
  },
  fontSizes: {
    text: '12px',
    banner: '18px',
    heading: '24px',
    subtitle: '16px'
  }
})
