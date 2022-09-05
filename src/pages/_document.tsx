/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Main, Head, NextScript } from 'next/document'

import { AppConfig } from '../utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <title>Savvy AI</title>
          <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
          <link href="/assets/Whyte-Regular.ttf&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
