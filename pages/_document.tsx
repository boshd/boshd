import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang;

    return (
      <Html lang={lang ? lang : "en-US"}>
        <Head>
          <meta charSet="utf-8" />
          <meta content="Kareem Arab" name="author" />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta name="theme-color" content="#08070b" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

          <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet" />

          <style>
            @import url('https://fonts.googleapis.com/css2?family=Nabla&family=Newsreader:opsz@6..72&display=swap');
          </style>
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
