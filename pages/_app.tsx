import '../styles/globals.css'
import 'github-markdown-css/github-markdown.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
