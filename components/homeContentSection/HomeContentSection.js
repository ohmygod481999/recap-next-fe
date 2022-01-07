import React, { useEffect, useState, useMemo } from "react";
import CaptionContent from "./CaptionContent";
import { useLazyQuery, useQuery, useReactiveVar } from "@apollo/client";

import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading";
import {
  GET_CAPTIONS,
  GET_TOP_USERS
} from "../../utils/apollo/entities/caption/operations/caption.queries";
import { captionsVar } from "../../utils/apollo/entities/caption";
import { GET_TAGS } from "../../utils/apollo/entities/tag/operations/tag.queries";
import Link from "next/link";
import Pagingnation from "../Pagingnation";
function HomeContentSection() {
  const captionsDataCache = useReactiveVar(captionsVar);
  const [limit, setLimit] = useState(20);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const tagQuery = useQuery(GET_TAGS);
  const allTags = tagQuery.data ? tagQuery.data.tag : [];
  const { data } = captionsDataCache.getNewFeed;
  const usersData = useQuery(GET_TOP_USERS);
  const [loadMoreCaption, result] = useLazyQuery(GET_CAPTIONS, {
    variables: { limit: limit, offset: 0 }
  });
  const PageSize = 5;
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return usersData?.data?.getTopUsers?.data.slice(
      firstPageIndex,
      lastPageIndex
    );
  }, [currentPage, usersData?.data?.getTopUsers?.data]);
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
                  <Link href={"/"}>
                    <a>
                      <i className="la la-home mr-1 text-black" /> Home
                    </a>
                  </Link>
                </li>

                <li className="lh-26">
                  <Link href="/captions">
                    <a>
                      <i className="la la-list mr-1 text-black" /> All captions
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* end sidebar */}
          </div>
          {/* end col-lg-2 */}
          <div className="col-lg-7 px-0">
            <div className="question-main-bar border-left border-left-gray pb-50px">
              <div className="question-tabs mb-5px">
                <ul
                  className="nav nav-tabs generic-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <div className="anim-bar" />
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="questions-tab"
                      data-toggle="tab"
                      href="#questions"
                      role="tab"
                      aria-controls="questions"
                      aria-selected="true"
                    >
                      Captions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="users-tab"
                      data-toggle="tab"
                      href="#users"
                      role="tab"
                      aria-controls="users"
                      aria-selected="false"
                    >
                      Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="users-tab"
                      data-toggle="tab"
                      href="#users"
                      role="tab"
                      aria-controls="users"
                      aria-selected="false"
                    ></a>
                  </li>
                </ul>
              </div>
              <div className="tab-content pt-40px" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="questions"
                  role="tabpanel"
                  aria-labelledby="questions-tab"
                >
                  <div className="questions-snippet border-top border-top-gray">
                    <InfiniteScroll
                      dataLength={data.length}
                      next={fetchMoreData}
                      hasMore={data.length >= limit}
                      loader={<Loading />}
                      style={{ overflow: "hidden !important" }}
                      endMessage={
                        <p className="mt-2" style={{ textAlign: "center" }}>
                          <b>You have seen it all</b>
                        </p>
                      }
                    >
                      {data.map((cap) => (
                        <CaptionContent key={cap.id} captionsData={cap} />
                      ))}
                    </InfiniteScroll>
                  </div>
                </div>{" "}
                <div
                  className="tab-pane fade"
                  id="users"
                  role="tabpanel"
                  aria-labelledby="users-tab"
                >
                  {/* end filters */}
                  <div className="users-main-bar">
                    <div className="users-snippet">
                      <div className="row">
                        {usersData?.data &&
                          (
                            currentData || usersData?.data?.getTopUsers?.data
                          ).map((user) => {
                            const { id, info } = user;
                            return (
                              <div key={id} className="col-lg-6">
                                <div className="media media-card p-3">
                                  <a
                                    href="#"
                                    className="media-img d-inline-block"
                                  >
                                    <img
                                      src={info.photo_url}
                                      alt="company logo"
                                    />
                                  </a>
                                  <div className="media-body">
                                    <h5 className="fs-16 fw-medium mb-1">
                                      {info.display_name}
                                    </h5>
                                    <small className="meta d-block lh-24 pb-1 mb-1">
                                      <span>Thành viên tích cực</span>
                                    </small>
                                    <p className="fw-medium fs-15 text-black-50 lh-18">
                                      {info.email}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end users-snippet */}
                    <div className="pager d-flex align-items-center justify-content-between pt-10px pb-30px">
                      <div>
                        <nav aria-label="Page navigation example">
                          <Pagingnation
                            onPageChange={(page) => setCurrentPage(page)}
                            totalCount={
                              usersData?.data?.getTopUsers?.data.length
                            }
                            siblingCount={1}
                            currentPage={currentPage}
                            pageSize={PageSize}
                          />
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* end users-main-bar */}
                </div>
                {/* end tab-pane */}
              </div>

              {/* end filters */}
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
