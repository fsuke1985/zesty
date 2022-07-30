import App from 'next/app';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '~/pages/styletron';
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
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
      <UserProvider currentUser={currentUser} >
        <Component {...pageProps} />
        </UserProvider>
      </BaseProvider>
    </StyletronProvider>
  )
}

export default MyApp
