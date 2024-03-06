import Head from "next/head";
import { Header } from "../src/components/header";
import { RouterProvider } from "../app/router/router";
import { UAProvider } from "../app/store/UAProvider";
import s from './styles.module.css'
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
          <UAProvider>
            <Component {...pageProps} />
          </UAProvider>
        </RouterProvider>
      </div>
    </div>
  );
}
