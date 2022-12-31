import { Layout, Loading, ThemeProvider } from '@/modules/core'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Loading />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
