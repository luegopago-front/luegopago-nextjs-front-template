import React from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import { toast } from 'react-toastify'
import { SWRConfig } from 'swr'

import setupAxios from '@/common/axios.interceptor'

import '@/styles/globals.css'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  setupAxios()

  /**
   * Default Layout: Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)
   */
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Recarga tu celular, paga tus servicios y mucho más."
        />
        <meta name="keywords" content="Keywords" />
        <title>Luegopago Pagos y Recargas</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/icon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/icon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-72x72.png"></link>
        <meta name="theme-color" content="#6064FF" />
      </Head>
      <Script src="https://unpkg.com/@elastic/apm-rum@5.12.0/dist/bundles/elastic-apm-rum.umd.min.js" />
      <SWRConfig
        value={{
          errorRetryCount: 1,
          onError: () => {
            toast.error(
              'Hubo un error al realizar la solicitud, intente nuevamente.'
            )
          },
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </SWRConfig>
    </>
  )
}
