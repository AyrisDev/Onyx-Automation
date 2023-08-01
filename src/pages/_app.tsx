import { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import PageLayout from "components/PageLayout";
import Navbar from "components/Navigation/Navbar";
import Footer from "components/Footer/footer";
import { Russo_One } from "next/font/google";
import { GetStaticProps } from "next";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <PageLayout>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </PageLayout>
    </NextIntlClientProvider>
  );
}
