import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="TechyDevs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Recaps - Captions recommendation</title>
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" sizes="16x16" href="/template/images/favicon.png" />
        {/* inject:css */}
        <link rel="stylesheet" href="/template/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/template/css/line-awesome.css" />
        <link rel="stylesheet" href="/template/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/template/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/template/css/jquery-te-1.4.0.css" />

        <link rel="stylesheet" href="/template/css/upvotejs.min.css" />
        <link rel="stylesheet" href="/template/css/selectize.css" />
        <link rel="stylesheet" href="/template/css/style.css" />
      </Head>
      <Component {...pageProps} />
      <Script
        src="/template/js/jquery-3.4.1.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/template/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/template/js/owl.carousel.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/template/js/jquery-te-1.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/template/js/upvote.vanilla.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/template/js/upvote-script.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/template/js/jquery.multi-file.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="/template/js/selectize.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/template/js/main.js" strategy="beforeInteractive" />
    </Layout>
  );
}

export default MyApp;
