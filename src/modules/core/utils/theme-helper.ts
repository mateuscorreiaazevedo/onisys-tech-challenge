import { useColorMode } from '@chakra-ui/react'

export const themeHelper = (light: string, dark: string) => {
  const { colorMode } = useColorMode()

  return colorMode === 'light' ? light : dark
}
