import { useRouter } from 'next/router'
import React from 'react'

export const useLoadingPage = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && setIsLoading(true)
    const handleComplete = (url: string) => url === router.asPath && setTimeout(() => setIsLoading(false), 200)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return {
    isLoading
  }
}
