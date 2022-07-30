import App from 'next/app';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '~/pages/styletron';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/auth.scss"
import { UserProvider, useUser } from '~/hooks'

type propsT = AppProps & {
  currentUser?: any
}

function MyApp({ Component, pageProps, router, ...props }: propsT) {

  const {
    currentUser
  } = props

  console.log("MyApp", currentUser)
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
      <UserProvider currentUser={currentUser} {...pageProps} >
        <Component {...pageProps} />
        </UserProvider>
      </BaseProvider>
    </StyletronProvider>
  )
}

MyApp.getInitialProps = async (context: any) => {

  const appProps = await App.getInitialProps(context)

  return {
    ...appProps
  }
}

export default MyApp
