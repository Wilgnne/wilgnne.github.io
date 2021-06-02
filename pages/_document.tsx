import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html style={{ height: "100%" }}>
        <Head>
          <meta name="description" content="Wilgnne K." />
          <link rel="icon" href={'/favicon.ico'} />
        </Head>
        <body 
          style={{ 
            height: "100%",
            background: "linear-gradient(to bottom right, #44BCA8, #2A1AB1)",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument