import App from 'next/app';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import {styletron} from '~/pages/styletron';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/auth.scss"

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
  <StyletronProvider value={styletron}>
    <BaseProvider theme={LightTheme}>
      <Component {...pageProps} />
    </BaseProvider>
  </StyletronProvider>
  )
}

export default MyApp
