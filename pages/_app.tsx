import { ChakraProvider } from "@chakra-ui/react"
import Head from "next/head"

import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wilgnne K.</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
