import React, { useEffect, useState } from "react";
import CaptionContent from "./CaptionContent";
import { useLazyQuery } from "@apollo/client";
import { GET_CAPTIONS } from "../../utils/apollo/entities/auth/operations/auth.queries";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading";
function HomeContentSection({ captionsData }) {
  const { caption } = captionsData;
  const [dataCaption, setDataCaption] = useState(caption);
  const [offset, setOffset] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const [loadMoreCaption, { data }] = useLazyQuery(GET_CAPTIONS, {
    variables: { limit: 10, offset: offset }
  });
  const fetchMoreData = () => {
    if (dataCaption.length >= 500) {
      setHasMore(false);
      return false;
    }
    loadMoreCaption();
    setOffset((prev) => prev + 10);
  };
  useEffect(() => {
    if (data && offset <= 490) {
      const cloneData = [...dataCaption];
      setDataCaption([...cloneData, ...data.caption]);
    }
  }, [data]);
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
                  dataLength={dataCaption.length}
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
                  {dataCaption.map((cap) => (
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
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="fs-17 pb-3">Related Questions</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <div className="sidebar-questions pt-3">
                    <div className="media media-card media--card media--card-2">
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Using web3 to call precompile contract
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">2 mins ago</span>
                          <span className="pr-1">. by</span>
                          <a href="#" className="author">
                            Sudhir Kumbhare
                          </a>
                        </small>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card media--card-2">
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Is it true while finding Time Complexity of the
                            algorithm [closed]
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">48 mins ago</span>
                          <span className="pr-1">. by</span>
                          <a href="#" className="author">
                            wimax
                          </a>
                        </small>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card media--card-2">
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            image picker and store them into firebase with
                            flutter
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">1 hour ago</span>
                          <span className="pr-1">. by</span>
                          <a href="#" className="author">
                            Antonin gavrel
                          </a>
                        </small>
                      </div>
                    </div>
                    {/* end media */}
                  </div>
                  {/* end sidebar-questions */}
                </div>
              </div>
              {/* end card */}
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="fs-17 pb-3">Related Tags</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <div className="tags pt-4">
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        analytics
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        computer
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        python
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        javascript
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        c#
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="collapse" id="showMoreTags">
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          java
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          swift
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          html
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          angular
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          flutter
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          machine-language
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>×</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                    </div>
                    {/* end collapse */}
                    <a
                      className="collapse-btn fs-13"
                      data-toggle="collapse"
                      href="#showMoreTags"
                      role="button"
                      aria-expanded="false"
                      aria-controls="showMoreTags"
                    >
                      <span className="collapse-btn-hide">
                        Show more
                        <i className="la la-angle-down ml-1 fs-11" />
                      </span>
                      <span className="collapse-btn-show">
                        Show less
                        <i className="la la-angle-up ml-1 fs-11" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
              <div className="ad-card">
                <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                  Advertisements
                </h4>
                <div className="ad-banner mb-4 mx-auto">
                  <span className="ad-text">290x500</span>
                </div>
              </div>
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
