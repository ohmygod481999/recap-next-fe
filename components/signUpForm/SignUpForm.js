import React from "react";

function signUpForm() {
  return (
    <section className="sign-up-area pt-80px pb-80px position-relative">
      <div className="container">
        <form action="#" className="card card-item">
          <div className="card-body row p-0">
            <div className="col-lg-6">
              <div className="form-content py-4 pr-60px pl-60px border-right border-right-gray h-100 d-flex align-items-center justify-content-center">
                <img
                  src="/template/images/undraw-remotely.svg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
            {/* end col-lg-6 */}
            <div className="col-lg-5 mx-auto">
              <div className="form-action-wrapper py-5">
                <div className="form-group">
                  <h3 className="fs-22 pb-3 fw-bold">
                    Join the Disilab Community
                  </h3>
                  <div className="divider">
                    <span />
                  </div>
                  <p className="pt-3">
                    Give us some of your information to get free access to
                    Disilab.
                  </p>
                </div>
                <div className="form-group">
                  <label className="fs-14 text-black fw-medium lh-18">
                    Display name
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form--control"
                    placeholder="Enter name"
                  />
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <label className="fs-14 text-black fw-medium lh-18">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form--control"
                    placeholder="Email address"
                  />
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <label className="fs-14 text-black fw-medium lh-18">
                    Password
                  </label>
                  <div className="input-group mb-1">
                    <input
                      className="form-control form--control password-field"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn theme-btn-outline theme-btn-outline-gray toggle-password"
                        type="button"
                      >
                        <svg
                          className="eye-on"
                          xmlns="http://www.w3.org/2000/svg"
                          height="22px"
                          viewBox="0 0 24 24"
                          width="22px"
                          fill="#7f8897"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                        </svg>
                        <svg
                          className="eye-off"
                          xmlns="http://www.w3.org/2000/svg"
                          height="22px"
                          viewBox="0 0 24 24"
                          width="22px"
                          fill="#7f8897"
                        >
                          <path
                            d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                            fill="none"
                          />
                          <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="fs-13 lh-18">
                    Passwords must contain at least eight characters, including
                    at least 1 letter and 1 number.
                  </p>
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <div className="d-flex align-items-center">
                    <div className="custom-control custom-checkbox fs-13 mr-4">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="opt-in"
                      />
                      <label
                        className="custom-control-label custom--control-label lh-18"
                        htmlFor="opt-in"
                      >
                        Opt-in to receive occasional product updates, user
                        research invitations, company announcements, and
                        digests.
                      </label>
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
                      <p className="pb-2 fs-14">
                        We know you hate spam, and we do too. That’s why we make
                        it easy for you to update your email preferences or
                        unsubscribe at anytime.
                      </p>
                      <p className="fs-14">
                        We never share your email address with third parties for
                        marketing purposes.
                      </p>
                    </div>
                    {/* end generic-popover */}
                  </div>
                </div>
                {/* end form-group */}
                <div className="form-group">
                  <button
                    id="send-message-btn"
                    className="btn theme-btn w-100"
                    type="submit"
                  >
                    Sign up <i className="la la-arrow-right icon ml-1" />
                  </button>
                </div>
                {/* end form-group */}
                <p className="fs-13 lh-18 pb-3">
                  By clicking “Sign up”, you agree to our{" "}
                  <a
                    href="terms-and-conditions.html"
                    className="text-color hover-underline"
                  >
                    terms of conditions
                  </a>
                  ,{" "}
                  <a
                    href="privacy-policy.html"
                    className="text-color hover-underline"
                  >
                    privacy policy
                  </a>
                </p>
                <div className="social-icon-box">
                  <div className="pb-3 d-flex align-items-center">
                    <hr className="flex-grow-1 border-top-gray" />
                    <span className="mx-2 text-gray-2 fw-medium text-uppercase fs-14">
                      or
                    </span>
                    <hr className="flex-grow-1 border-top-gray" />
                  </div>
                  <button
                    className="btn theme-btn google-btn d-flex align-items-center justify-content-center w-100 mb-2"
                    type="button"
                  >
                    <span className="btn-icon">
                      <svg
                        focusable="false"
                        width="16px"
                        height="16px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        />
                      </svg>
                    </span>
                    <span className="flex-grow-1">Sign up with Google</span>
                  </button>
                  <button
                    className="btn theme-btn facebook-btn d-flex align-items-center justify-content-center w-100 mb-2"
                    type="button"
                  >
                    <span className="btn-icon">
                      <svg
                        focusable="false"
                        width="16px"
                        height="16px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        />
                      </svg>
                    </span>
                    <span className="flex-grow-1">Sign up with Facebook</span>
                  </button>
                  <button
                    className="btn theme-btn twitter-btn d-flex align-items-center justify-content-center w-100"
                    type="button"
                  >
                    <span className="btn-icon">
                      <svg
                        focusable="false"
                        width="16px"
                        height="16px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        />
                      </svg>
                    </span>
                    <span className="flex-grow-1">Sign up with Twitter</span>
                  </button>
                </div>
              </div>
              {/* end form-action-wrapper */}
            </div>
            {/* end col-lg-5 */}
          </div>
          {/* end row */}
        </form>
        <p className="text-black text-center fs-15">
          Already have an account?{" "}
          <a href="login.html" className="text-color hover-underline">
            Log in
          </a>
        </p>
      </div>
      {/* end container */}
      <div className="position-absolute top-0 left-0 w-100 h-100 z-index-n1">
        <svg
          className="w-100 h-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="#2d86eb"
            opacity="0.06"
          />
        </svg>
      </div>
    </section>
  );
}

export default signUpForm;