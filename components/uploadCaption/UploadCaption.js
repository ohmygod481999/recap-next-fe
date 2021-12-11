import React from "react";

function UploadCaption() {
  return (
    <section className="question-area pt-80px pb-40px">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card card-item">
              <form method="post" className="card-body">
                <div className="input-box">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <label className="fs-14 text-black fw-medium mb-0">
                        Tags
                      </label>
                      <p className="fs-13 pb-3 lh-20">
                        Thêm tags để mô tả caption của bạn là về gì:
                      </p>
                    </div>
                    <button
                      type="button"
                      className="popover-trigger btn border border-gray py-1 lh-18 px-2"
                      data-container="body"
                      data-toggle="popover"
                      data-placement="top"
                    >
                      <svg
                        aria-hidden="true"
                        className="svg-icon-color-gray"
                        width={14}
                        height={14}
                      >
                        <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08zm.73-3.07l-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 00-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 017.7 6.07c.15-.1.21-.21.3-.33a1.14 1.14 0 00.02-1.48c-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.19.3-.16.63-.16.94H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 011.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01z" />
                      </svg>
                    </button>
                    <div className="generic-popover d-none">
                      <h4 className="fs-16 pb-1">How to tag</h4>
                      <p className="pb-2 fs-14">
                        Tags help the right people find and answer your
                        question.
                      </p>
                      <ul className="generic-list-item generic-list-item-bullet">
                        <li className="lh-18 text-black-50">
                          Identify your tags by completing the sentence, My
                          question is about…
                        </li>
                        <li className="lh-18 text-black-50">
                          Include tags that are crucial to your question only,
                          like <div className="tag-link">c#</div>
                        </li>
                        <li className="lh-18 text-black-50">
                          Only include version numbers, like{" "}
                          <div className="tag-link">c#-4.0</div>, when
                          absolutely necessary
                        </li>
                        <li className="lh-18 text-black-50">
                          Use existing{" "}
                          <a
                            href="#"
                            className="d-inline-block text-color hover-underline"
                            target="_blank"
                          >
                            popular tags
                          </a>
                        </li>
                      </ul>
                      <p className="pb-1 fs-14">If you can’t find a tag:</p>
                      <p className="fs-14 text-black-50">
                        <a
                          href="#"
                          className="text-color hover-underline"
                          target="_blank"
                        >
                          Create new tags
                        </a>{" "}
                        or post without it and{" "}
                        <a
                          href="#"
                          className="text-color hover-underline"
                          target="_blank"
                        >
                          ask the community
                        </a>
                        to create one for you.
                      </p>
                    </div>
                    {/* end generic-popover */}
                  </div>
                  <div className="form-group">
                    <input
                      className="input-tags input--tags"
                      type="text"
                      name="tags"
                      placeholder="e.g. javascript"
                    />
                  </div>
                </div>
                {/* end input-box */}
                <div className="input-box">
                  <label className="fs-14 text-black fw-medium mb-0">
                    Phân loại
                  </label>
                  <p className="fs-13 pb-3 lh-20">
                    Please choose the appropriate section so the question can be
                    searched easily.
                  </p>
                  <div className="form-group">
                    <select
                      className="select-container select--container"
                      data-placeholder="Select a Category"
                    >
                      <option selected value>
                        Select a Category
                      </option>
                      <option value={1}>Caption</option>
                      <option value={2}>Thả thính</option>
                      <option value={3}>Lời chúc</option>
                    </select>
                  </div>
                </div>
                {/* end input-box */}
                <div className="input-box">
                  <label className="fs-14 text-black fw-medium mb-0">
                    Nội dung
                  </label>
                  <p className="fs-13 pb-3 lh-20">
                    Include all the information someone would need to answer
                    your question
                  </p>
                  <div className="form-group">
                    <textarea
                      className="form-control form--control"
                      rows={4}
                      cols={40}
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* end input-box */}
                <div className="input-box pt-2">
                  <div className="form-group">
                    <div className="custom-control custom-checkbox fs-13 mb-1">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="notifiedMe"
                      />
                      <label
                        className="custom-control-label custom--control-label"
                        htmlFor="notifiedMe"
                      >
                        Get notified by email when someone comment this
                        question.
                      </label>
                    </div>
                  </div>
                  <div className="btn-box">
                    <button type="submit" className="btn theme-btn">
                      Đăng caption
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* end card */}
          </div>
          {/* end col-lg-8 */}
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="card card-item p-4">
                <h3 className="fs-17 pb-3">Quy trình hoạt động</h3>
                <div className="divider">
                  <span />
                </div>
                <p className="fs-14 lh-22 pb-2 pt-3">
                  Các bước để đăng bài lên trang chủ.
                </p>
                <div id="accordion" className="generic-accordion pt-4">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <button
                        className="btn btn-link fs-15"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span>
                          <span className="text-color pr-2 fs-16">1.</span> Đăng
                          caption
                        </span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet-2 fs-14">
                          <li className="lh-18 text-black-50">
                            Sẽ vào danh sách chờ admin duyệt
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <button
                        className="btn btn-link collapsed fs-15"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <span>
                          <span className="text-color pr-2 fs-16">2.</span>{" "}
                          Admin duyệt bài
                        </span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p className="fs-14 lh-22 text-black-50">
                          Show what you’ve tried and tell us what you found (on
                          this site or elsewhere) and why it didn’t meet your
                          needs. You can get better answers when you provide
                          research.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <button
                        className="btn btn-link collapsed fs-15"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <span>
                          <span className="text-color pr-2 fs-16">3.</span> Hiển
                          thị lên trang chủ
                        </span>
                        <i className="la la-angle-down collapse-icon" />
                      </button>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p className="fs-14 lh-22 text-black-50">
                          When appropriate, share the minimum amount of code
                          others need to reproduce your problem (also called a
                          <a href="#" className="text-color hover-underline">
                            minimum
                          </a>
                          ,{" "}
                          <a href="#" className="text-color hover-underline">
                            reproducible example
                          </a>
                          )
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end card */}
                </div>
                {/* end accordion */}
              </div>
              {/* end card */}
            </div>
            {/* end sidebar */}
          </div>
          {/* end col-lg-4 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}

export default UploadCaption;
