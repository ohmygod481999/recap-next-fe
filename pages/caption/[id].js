import React, { useEffect } from "react";
import Head from "next/head";
import CaptionDetailContent from "../../components/captionDetailContent/CaptionDetailContent";
import Script from "next/script";
import { GET_SINGLE_CAPTION } from "../../utils/apollo/entities/caption/operations/caption.queries";
import { apolloClient } from "../../utils/apollo";
import { captionMutations } from "../../utils/apollo/entities/caption/operations/caption.mutations";
function CaptionDetail({ data }) {
  useEffect(() => {
    const { caption_by_pk } = data;
    captionMutations.setCaptionDetail(caption_by_pk);
  }, []);
  console.log(data);
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
      <CaptionDetailContent singleCaptionData={data} />
    </div>
  );
}
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: GET_SINGLE_CAPTION,
    variables: {
      id: params.id
    }
  });

  return {
    props: {
      data
    }
  };
};
export default CaptionDetail;
