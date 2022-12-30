import { theme, Theme } from '@chakra-ui/react'

export const myTheme: Theme = {
  ...theme,
  styles: {
    global: (props) => ({
      'body, html': {
        background: props.colorMode === 'dark' ? 'gray.900' : 'cyan.100',
        color: props.colorMode === 'dark' ? 'white' : 'gray.900',
        overflowX: 'hidden'
      }
    })
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Inter, system-ui, sans-serif'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 600,
    bold: 700
  },
  fontSizes: {
    ...theme.fontSizes,
    '8xl': '54px'
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      50: '#F4FBFB',
      900: '#282828'
    },
    blue: {
      ...theme.colors.blue,
      700: '#3498d8'
    }
  },
  sizes: {
    ...theme.sizes,
    60: '60px'
  },
  breakpoints: {
    ...theme.breakpoints,
    sm: '425px',
    md: '768px',
    lg: '900px'
  }
}
