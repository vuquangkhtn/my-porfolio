import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" as="font" />
          <link
            href="https://fonts.googleapis.com/css?family=Maven+Pro:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="static/user.png" />
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
