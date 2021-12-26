import React, { useEffect, useState } from "react";
import CaptionContent from "./CaptionContent";
import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";

import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading";
import { GET_CAPTIONS } from "../../utils/apollo/entities/caption/operations/caption.queries";
import { captionsVar } from "../../utils/apollo/entities/caption";
import { GET_TAGS } from "../../utils/apollo/entities/tag/operations/tag.queries";
function HomeContentSection() {
  const captionsDataCache = useReactiveVar(captionsVar);
  const { data } = captionsDataCache.getNewFeed;
  const [limit, setLimit] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const tagQuery = useQuery(GET_TAGS);
  const allTags = tagQuery.data ? tagQuery.data.tag : [];
  console.log(tagQuery);
  console.log(data);
  const [loadMoreCaption, result] = useLazyQuery(GET_CAPTIONS, {
    variables: { limit: limit, offset: 0 }
  });

  const fetchMoreData = () => {
    if (data.length >= 500) {
      setHasMore(false);
      return false;
    }
    loadMoreCaption();
    setLimit((prev) => prev + 10);
  };
  useEffect(() => {
    if (result?.data && limit <= 490) {
      captionsVar(result.data);
    }
  }, [result.data]);
  return (
    <section className="question-area pt-80px pb-30px">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 pr-0">
            <div className="sidebar pb-45px position-sticky top-0">
              <ul className="generic-list-item generic-list-item-highlight fs-15">
                <li className="lh-26 active">
                  <a href="index.html">
                    <i className="la la-home mr-1 text-black" /> Home
                  </a>
                </li>
              </ul>
            </div>
            {/* end sidebar */}
          </div>
          {/* end col-lg-2 */}
          <div className="col-lg-7 px-0">
            <div className="question-main-bar border-left border-left-gray pb-50px">
              <div className="filters pb-4 pl-3 d-flex align-items-center justify-content-between">
                <div className="mr-3">
                  <h3 className="fs-18 fw-medium">Caption mới nhất</h3>
                  {/* <p class="pt-1 fs-14 fw-medium lh-20">21,287 questions</p> */}
                </div>
              </div>
              {/* end filters */}
              <div className="questions-snippet border-top border-top-gray">
                <InfiniteScroll
                  dataLength={data.length}
                  next={fetchMoreData}
                  hasMore={hasMore}
                  loader={<Loading />}
                  style={{ overflow: "hidden !important" }}
                  endMessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                >
                  {data.map((cap) => (
                    <CaptionContent key={cap.id} captionsData={cap} />
                  ))}
                </InfiniteScroll>
              </div>
            </div>
            {/* end question-main-bar */}
          </div>
          {/* end col-lg-7 */}
          <div className="col-lg-3">
            <div className="sidebar">
              {/* end card */}
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="fs-17 pb-3">Tags</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <div className="tags pt-4">
                    {allTags.map((tag, index) => (
                      <div key={index} className="tag-item">
                        <a
                          href="#"
                          className="tag-link tag-link-md"
                          onClick={(e) => e.preventDefault()}
                        >
                          {tag.name}
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>{Math.floor(Math.random() * 1000)}</span>
                        </span>
                      </div>
                    ))}
                    {/* end tag-item */}
                  </div>
                </div>
              </div>
              {/* end card */}

              {/* end ad-card */}
            </div>
            {/* end sidebar */}
          </div>
          {/* end col-lg-3 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}

export default HomeContentSection;
