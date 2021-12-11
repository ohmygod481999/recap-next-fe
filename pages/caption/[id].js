import React from "react";
import Head from "next/head";
import CaptionDetailContent from "../../components/captionDetailContent/CaptionDetailContent";
import Script from "next/script";
function CaptionDetail() {
  return (
    <div>
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="TechyDevs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Recap - Caption recommendation</title>
        {/* Google fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" sizes="16x16" href="template/images/favicon.png" />
      </Head>
      <CaptionDetailContent />
    </div>
  );
}

export default CaptionDetail;
