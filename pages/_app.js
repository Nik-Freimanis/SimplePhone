import Head from "next/head";
import { Header } from "../src/components/header";
import { RouterProvider } from "../app/router/router";
import '../styles/globals.css'



export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <Header />
        <RouterProvider>
            <Component {...pageProps} />
        </RouterProvider>
      </div>
    </div>
  );
}
