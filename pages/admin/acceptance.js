import Head from "next/head";
import React, { useEffect } from "react";
import CaptionContentSection from "../../components/captionContentSection/CaptionContentSection";
import { apolloClient } from "../../utils/apollo";
import { captionAdminMutations } from "../../utils/apollo/entities/caption/operations/caption.mutations";
import { GET_CAPTION_FOR_ADMIN } from "../../utils/apollo/entities/caption/operations/caption.queries";
function acceptance({ data }) {
  captionAdminMutations.setCaptionAdmin(data);
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
      <section className="hero-area pt-40px pb-30px bg-white shadow-sm overflow-hidden">
        <span className="stroke-shape stroke-shape-1" />
        <span className="stroke-shape stroke-shape-2" />
        <span className="stroke-shape stroke-shape-3" />
        <span className="stroke-shape stroke-shape-4" />
        <span className="stroke-shape stroke-shape-5" />
        <span className="stroke-shape stroke-shape-6" />
        <div className="container">
          <div className="hero-content">
            <h2 className="section-title fs-24 mb-1">Duyệt bài.</h2>
            <p className="section-desc pb-4">
              Bạn là admin? Chọn những bài không vi phạm tiêu chuẩn cồng đồng để
              duyệt bạn nhé.
            </p>
            <ul
              className="nav nav-tabs generic-tabs generic-tabs-layout-2 generic--tabs-layout-2"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="jobs-tab"
                  data-toggle="tab"
                  href="#jobs"
                  role="tab"
                  aria-controls="jobs"
                  aria-selected="true"
                >
                  Caption chưa duyệt
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="companies-tab"
                  data-toggle="tab"
                  href="#companies"
                  role="tab"
                  aria-controls="companies"
                  aria-selected="false"
                >
                  Caption rejected
                </a>
              </li>
            </ul>
          </div>
          {/* end hero-content */}
        </div>
        {/* end container */}
      </section>
      <CaptionContentSection />
    </div>
  );
}
export const getServerSideProps = async (ctx) => {
  const { data } = await apolloClient.query({
    query: GET_CAPTION_FOR_ADMIN,
    variables: {
      status: 0
    }
  });
  return {
    props: {
      data
    }
  };
};

export default acceptance;
