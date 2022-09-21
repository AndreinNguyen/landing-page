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
          <link rel="shortcut icon" href="/favicon-32x32.png" />
          <link rel="apple-touch-icon" href="/favicon-32x32.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, viewport-fit=cover"
          />
          <meta
            name="description"
            content="Savvycom.ai is an ecosystem that seeks to promote and showcase innovative products made with blockchain and AI technologies. Our projects venture beyond the business sphere, aspiring to enact good changes on the societal level."
          />
          <meta name="theme-color" content="#14393c" />
          <meta name="twitter:image" content="/savvyai-logo.png" />
          <meta name="facebook:image" content="/savvyai-logo.png" />
          <meta
            name="facebook:description"
            content="Savvycom.ai is an ecosystem that seeks to promote and showcase innovative products made with blockchain and AI technologies. Our projects venture beyond the business sphere, aspiring to enact good changes on the societal level."
          />
          <meta
            name="twitter:description"
            content="Savvycom.ai is an ecosystem that seeks to promote and showcase innovative products made with blockchain and AI technologies. Our projects venture beyond the business sphere, aspiring to enact good changes on the societal level."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="😊 Savvycom.ai is an ecosystem that seeks to promote and showcase innovative products made with blockchain and AI technologies. Our projects venture beyond the business sphere, aspiring to enact good changes on the societal level."
          />
          <meta
            name="facebook:title"
            content="😊 Savvycom.ai is an ecosystem that seeks to promote and showcase innovative products made with blockchain and AI technologies. Our projects venture beyond the business sphere, aspiring to enact good changes on the societal level."
          />
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
