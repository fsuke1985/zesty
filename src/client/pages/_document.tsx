import * as React from 'react';
import Document, {Head, Html, Main, NextScript} from 'next/document';
import {Provider as StyletronProvider} from 'styletron-react';
import {Server} from 'styletron-engine-atomic';
import {styletron} from '~/pages/styletron';

export type attrsT = {
    "data-hydrate"?: "keyframes" | "font-face";
    media?: string;
    class?: string;
  };
export type sheetT = {
    css: string;
    attrs: attrsT;
};

class MyDocument extends Document<{stylesheets: sheetT[]}> {
  static async getInitialProps(props: any) {
    const initialProps = await Document.getInitialProps(props)

    // eslint-disable-next-line react/display-name
    const page = props.renderPage((App: any) => (props: any) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return {...initialProps, ...page, stylesheets};
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{__html: sheet.css}}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;