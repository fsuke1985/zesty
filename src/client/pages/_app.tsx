import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/auth.scss"
import { UserProvider } from '~/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const currentUser = {
    name: "kousuke futamura",
    age: 33
  }

  return (
    <UserProvider currentUser={currentUser} >
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
