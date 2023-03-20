import type { AppProps } from 'next/app'
import NextI18nextConfig from "../../next-i18next.config"
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App, NextI18nextConfig);
