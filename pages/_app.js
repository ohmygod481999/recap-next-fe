import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import useAuth from "../utils/hooks/useAuth";
import { auth } from "../utils/firebase";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../utils/apollo/index";
import "../styles/CustomFirebase.global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
          <meta name="author" content="TechyDevs" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
          <link rel="icon" sizes="16x16" href="/images/favicon.png" />
          {/* inject:css */}
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/line-awesome.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/css/jquery-te-1.4.0.css" />

          <link rel="stylesheet" href="/css/upvotejs.min.css" />
          <link rel="stylesheet" href="/css/selectize.css" />
          <link rel="stylesheet" href="/css/style.css" />
        </Head>
        <Component {...pageProps} />
        <Script src="/js/jquery-3.4.1.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery-te-1.4.0.min.js" strategy="beforeInteractive" />

        <Script src="/js/upvote.vanilla.js" strategy="beforeInteractive" />
        <Script src="/js/upvote-script.js" strategy="beforeInteractive" />

        <Script
          src="/js/jquery.multi-file.min.js"
          strategy="beforeInteractive"
        />

        <Script src="/js/selectize.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="beforeInteractive" />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
