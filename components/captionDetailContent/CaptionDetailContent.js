import React from "react";

function CaptionDetailContent() {
  return (
    <section className="question-area pt-40px pb-40px">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="question-main-bar mb-50px">
              <div className="question-highlight">
                <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                  <div className="media-body">
                    <h5 className="fs-20">
                      <a href="question-details.html">
                        Hãy yêu một người có thể vì bạn mà làm tất cả… Chứ đừng
                        yêu một người chỉ biết diễn tả tương lai!
                      </a>
                    </h5>
                    <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                      <div className="pr-3">
                        <span>Post</span>
                        <span className="text-black">1 hour ago</span>
                      </div>
                      <div className="pr-3">
                        <span className="pr-1">Active</span>
                        <a href="#" className="text-black">
                          19 days ago
                        </a>
                      </div>
                      <div className="pr-3">
                        <span className="pr-1">Viewed</span>
                        <span className="text-black">89 times</span>
                      </div>
                    </div>
                    <div className="tags">
                      <a href="#" className="tag-link">
                        thả thính
                      </a>
                      <a href="#" className="tag-link">
                        xàm
                      </a>
                    </div>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end question-highlight */}
              <div className="answer-wrap d-flex">
                <div className="answer-body-wrap flex-grow-1 pl-0">
                  <div className="answer-body"></div>
                  {/* end answer-body */}
                  <div className="question-post-user-action">
                    <div className="media media-card user-media align-items-center">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img4.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Vương Bảo Long</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <p className="text-black">Bựa waaa 🤣</p>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            answered
                          </span>
                          <span className="d-block lh-18 fs-12">
                            8 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                    {/* end media */}
                  </div>
                  {/* end question-post-user-action */}
                  <div className="comments-wrap">
                    <ul className="comments-list">
                      <li>
                        <div className="comment-actions">
                          <span className="comment-score">1</span>
                        </div>
                        <div className="comment-body flex-grow-1">
                          <div className="media media-card user-media align-items-center p-0 pb-2">
                            <a
                              href="user-profile.html"
                              className="media-img d-block"
                            >
                              <img src="images/img4.jpg" alt="avatar" />
                            </a>
                            <div className="media-body d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="pb-1">
                                  <a href="user-profile.html">Phạm Minh Đức</a>
                                </h5>
                                <div className="stats fs-12 d-flex align-items-center lh-18">
                                  <p className="text-black">Bựa bt mà ông 🥱</p>
                                </div>
                              </div>
                              <small className="meta d-block text-right">
                                <span className="text-black d-block lh-18">
                                  answered
                                </span>
                                <span className="d-block lh-18 fs-12">
                                  8 hours ago
                                </span>
                              </small>
                            </div>
                          </div>
                          {/* end media */}
                        </div>
                      </li>
                      <li>
                        <div className="comment-actions">
                          <span className="comment-score">1</span>
                        </div>
                        <div className="comment-body flex-grow-1">
                          <div className="media media-card user-media align-items-center p-0 pb-2">
                            <a
                              href="user-profile.html"
                              className="media-img d-block"
                            >
                              <img src="images/img4.jpg" alt="avatar" />
                            </a>
                            <div className="media-body d-flex align-items-center justify-content-between">
                              <div>
                                <h5 className="pb-1">
                                  <a href="user-profile.html">Vương Bảo Long</a>
                                </h5>
                                <div className="stats fs-12 d-flex align-items-center lh-18">
                                  <p className="text-black">
                                    Tôi thấy bựa vkl ý
                                  </p>
                                </div>
                              </div>
                              <small className="meta d-block text-right">
                                <span className="text-black d-block lh-18">
                                  answered
                                </span>
                                <span className="d-block lh-18 fs-12">
                                  8 hours ago
                                </span>
                              </small>
                            </div>
                          </div>
                          {/* end media */}
                        </div>
                      </li>
                    </ul>
                    <div className="comment-form">
                      <div className="comment-link-wrap text-center">
                        <a
                          className="collapse-btn comment-link"
                          data-toggle="collapse"
                          href="#addCommentCollapseTwo"
                          role="button"
                          aria-expanded="false"
                          aria-controls="addCommentCollapseTwo"
                          title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."
                        >
                          Add a comment
                        </a>
                      </div>
                      <div
                        className="collapse border-top border-top-gray mt-2 pt-3"
                        id="addCommentCollapseTwo"
                      >
                        <form method="post" className="row pb-3">
                          <div className="col-lg-12">
                            <div className="input-box">
                              <div className="form-group">
                                <textarea
                                  className="form-control form--control form-control-sm fs-13"
                                  name="message"
                                  rows={5}
                                  placeholder="Your comment here..."
                                  defaultValue={""}
                                />
                                <div className="d-flex flex-wrap align-items-center pt-2">
                                  <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                    [named hyperlinks] (https://example.com)
                                  </div>
                                  <div className="mr-3 fw-bold fs-13">
                                    **bold**
                                  </div>
                                  <div className="mr-3 font-italic fs-13">
                                    _italic_
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col-lg-12 */}
                          <div className="col-lg-12">
                            <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                              <div></div>
                              <button
                                className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                type="submit"
                              >
                                Post Comment
                              </button>
                            </div>
                          </div>
                          {/* end col-lg-12 */}
                        </form>
                      </div>
                      {/* end collapse */}
                    </div>
                  </div>
                  {/* end comments-wrap */}
                </div>
                {/* end answer-body-wrap */}
              </div>
              {/* end answer-wrap */}
              <div className="answer-wrap d-flex">
                <div className="answer-body-wrap flex-grow-1 pl-0">
                  <div className="answer-body"></div>
                  {/* end answer-body */}
                  <div className="question-post-user-action">
                    <div className="media media-card user-media align-items-center">
                      <a href="user-profile.html" className="media-img d-block">
                        <img src="images/img4.jpg" alt="avatar" />
                      </a>
                      <div className="media-body d-flex align-items-center justify-content-between">
                        <div>
                          <h5 className="pb-1">
                            <a href="user-profile.html">Ngô Đạt</a>
                          </h5>
                          <div className="stats fs-12 d-flex align-items-center lh-18">
                            <p className="text-black">Hay đấy</p>
                          </div>
                        </div>
                        <small className="meta d-block text-right">
                          <span className="text-black d-block lh-18">
                            answered
                          </span>
                          <span className="d-block lh-18 fs-12">
                            8 hours ago
                          </span>
                        </small>
                      </div>
                    </div>
                    {/* end media */}
                  </div>
                  {/* end question-post-user-action */}
                  <div className="comments-wrap">
                    <ul className="comments-list"></ul>
                    <div className="comment-form">
                      <div className="comment-link-wrap text-center">
                        <a
                          className="collapse-btn comment-link"
                          data-toggle="collapse"
                          href="#addCommentCollapseTwo"
                          role="button"
                          aria-expanded="false"
                          aria-controls="addCommentCollapseTwo"
                          title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."
                        >
                          Add a comment
                        </a>
                      </div>
                      <div
                        className="collapse border-top border-top-gray mt-2 pt-3"
                        id="addCommentCollapseTwo"
                      >
                        <form method="post" className="row pb-3">
                          <div className="col-lg-12">
                            <div className="input-box">
                              <div className="form-group">
                                <textarea
                                  className="form-control form--control form-control-sm fs-13"
                                  name="message"
                                  rows={5}
                                  placeholder="Your comment here..."
                                  defaultValue={""}
                                />
                                <div className="d-flex flex-wrap align-items-center pt-2">
                                  <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                    [named hyperlinks] (https://example.com)
                                  </div>
                                  <div className="mr-3 fw-bold fs-13">
                                    **bold**
                                  </div>
                                  <div className="mr-3 font-italic fs-13">
                                    _italic_
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* end col-lg-12 */}
                          <div className="col-lg-12">
                            <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                              <div></div>
                              <button
                                className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                type="submit"
                              >
                                Post Comment
                              </button>
                            </div>
                          </div>
                          {/* end col-lg-12 */}
                        </form>
                      </div>
                      {/* end collapse */}
                    </div>
                  </div>
                  {/* end comments-wrap */}
                </div>
                {/* end answer-body-wrap */}
              </div>
              {/* end answer-wrap */}
              <div className="post-form">
                <form method="post" className="pt-3">
                  <div className="input-box">
                    <label className="fs-14 text-black lh-20 fw-medium">
                      Comment
                    </label>
                    <div className="form-group">
                      <textarea
                        className="form-control form--control form-control-sm fs-13 user-text-editor"
                        name="message"
                        rows={6}
                        placeholder="Your answer here..."
                        defaultValue={"Your answer here..."}
                      />
                    </div>
                  </div>
                  <button className="btn theme-btn theme-btn-sm" type="submit">
                    Post Your comment
                  </button>
                </form>
              </div>
            </div>
            {/* end question-main-bar */}
          </div>
          {/* end col-lg-9 */}
          <div className="col-lg-3">
            <div className="sidebar">
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="fs-17 pb-3">Related Captions</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <div className="sidebar-questions pt-3">
                    <div className="media media-card media--card media--card-2">
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Là con gái, đừng yêu ai đó nhiều quá, đừng hi vọng
                            quá nhiều. Và đừng chờ đợi ai đó quá lâu.
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
                            Tình yêu giống con người khi mặc áo, ít lớp thì lạnh
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
                            Tình mình cứ ngỡ là new chap, ai ngờ lại là new trap
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
                  <h3 className="fs-17 pb-3">Trending Tags</h3>
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
                        thả thính
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

export default CaptionDetailContent;
