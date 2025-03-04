import { Html, Head, Main, NextScript } from 'next/document'

/**
 * @file Custom Next.js Document
 * @description Custom document for setting up global HTML structure in the Next.js application.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
