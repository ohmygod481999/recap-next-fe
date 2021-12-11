import React from "react";

function HomeContentSection() {
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
                <div className="filter-option-box w-20">
                  <select className="select-container">
                    <option value="newest" selected="selected">
                      Newest{" "}
                    </option>
                    <option value="featured">Bountied (390)</option>
                    <option value="votes">Votes </option>
                    <option value="active">Active </option>
                    <option value="unanswered">Unanswered </option>
                  </select>
                </div>
                {/* end filter-option-box */}
              </div>
              {/* end filters */}
              <div className="questions-snippet border-top border-top-gray">
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block answered my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        3
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block answered-accepted my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        3
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        0
                      </span>
                      <span className="answer-text d-block fs-14 lh-18">
                        answer
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block answered my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        3
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <span className="badge bg-success mr-2 text-white fs-13">
                        +100
                      </span>
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        0
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        0
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        0
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        0
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        0
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        0
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        0
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block answered my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        3
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
                <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                  <div className="votes text-center votes-2">
                    <div className="vote-block">
                      <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
                        3
                      </span>
                      <span className="vote-text d-block fs-13 lh-18">
                        votes
                      </span>
                    </div>
                    <div className="answer-block answered my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                        3
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">
                        answers
                      </span>
                    </div>
                    <div className="view-block">
                      <span className="view-counts d-block lh-20 fw-medium">
                        12
                      </span>
                      <span className="view-text d-block fs-13 lh-18">
                        views
                      </span>
                    </div>
                  </div>
                  <div className="media-body">
                    <h5 className="mb-2 fw-medium">
                      <a href="question-details.html">
                        Bootstrap select pass value with disabled
                      </a>
                    </h5>
                    <p className="mb-2 truncate lh-20 fs-15">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        javascript
                      </a>
                      <a href="#" className="tag-link">
                        bootstrap-4
                      </a>
                      <a href="#" className="tag-link">
                        jquery
                      </a>
                      <a href="#" className="tag-link">
                        select
                      </a>
                    </div>
                    <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img3.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Arden Smith</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <span
                              className="text-black pr-2"
                              title="Reputation score"
                            >
                              224
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Gold badge"
                            >
                              <span className="ball gold" />
                              16
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Silver badge"
                            >
                              <span className="ball silver" />
                              93
                            </span>
                            <span
                              className="pr-2 d-inline-flex align-items-center"
                              title="Bronze badge"
                            >
                              <span className="ball" />
                              136
                            </span>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            asked
                          </span>
                          <span className="d-block lh-18 fs-12">
                            6 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end questions-snippet */}
              <div className="pager d-flex flex-wrap align-items-center justify-content-between pt-30px px-3">
                <div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination generic-pagination pr-1">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <i className="la la-arrow-left" />
                          </span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <i className="la la-arrow-right" />
                          </span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <p className="fs-13 pt-2">
                    Showing 1-10 results of 50,577 questions
                  </p>
                </div>
                <div className="filter-option-box w-20">
                  <select className="select-container">
                    <option selected value={10}>
                      10 per page
                    </option>
                    <option value={15}>15 per page</option>
                    <option value={20}>20 per page</option>
                    <option value={30}>30 per page</option>
                    <option value={40}>40 per page</option>
                    <option value={50}>50 per page</option>
                  </select>
                </div>
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
