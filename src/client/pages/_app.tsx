import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/auth.scss"
import { useUser } from '~/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
