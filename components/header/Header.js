import Link from "next/link";
import React from "react";
import { getDomain } from "../../utils/helper/helpers";
function Header() {
  return (
    <header className="header-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="logo-box">
              <Link href="/" className="logo" style={{ cursor: "pointer" }}>
                <img
                  src={getDomain("/images/recap-rec.png")}
                  alt="logo"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <div className="user-action">
                <div
                  className="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Search"
                >
                  <i className="la la-search" />
                </div>
                <div
                  className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Main menu"
                >
                  <i className="la la-bars" />
                </div>
              </div>
            </div>
          </div>
          {/* end col-lg-2 */}
          <div className="col-lg-10">
            <div className="menu-wrapper border-left border-left-gray pl-4 justify-content-end">
              <nav className="menu-bar mr-auto">
                <ul>
                  <li>
                    <Link href={"/"}>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      Caption recommendation{" "}
                      <span className="badge bg-warning text-white">New</span>
                    </a>
                  </li>
                </ul>
                {/* end ul */}
              </nav>
              {/* end main-menu */}
              <form method="post" className="mr-4">
                <div className="form-group mb-0">
                  <input
                    className="form-control form--control form--control-bg-gray"
                    type="text"
                    name="search"
                    placeholder="Type your search words..."
                  />
                  <button className="form-btn" type="button">
                    <i className="la la-search" />
                  </button>
                </div>
              </form>
              <div className="nav-right-button">
                <a
                  href="#"
                  className="btn theme-btn theme-btn-outline mr-2"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  <i className="la la-sign-in mr-1" /> Login
                </a>
                <a
                  href="#"
                  className="btn theme-btn"
                  data-toggle="modal"
                  data-target="#signUpModal"
                >
                  <i className="la la-user mr-1" /> Sign up
                </a>
              </div>
              {/* end nav-right-button */}
            </div>
            {/* end menu-wrapper */}
          </div>
          {/* end col-lg-10 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
      <div className="off-canvas-menu custom-scrollbar-styled">
        <div
          className="off-canvas-menu-close icon-element icon-element-sm shadow-sm"
          data-toggle="tooltip"
          data-placement="left"
          title="Close menu"
        >
          <i className="la la-times" />
        </div>
        {/* end off-canvas-menu-close */}
        <ul className="generic-list-item off-canvas-menu-list pt-90px">
          <li>
            <a href="#">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="index.html">Home - landing</a>
              </li>
              <li>
                <a href="home-2.html">Home - main</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li>
                <a href="user-profile.html">user profile</a>
              </li>
              <li>
                <a href="notifications.html">Notifications</a>
              </li>
              <li>
                <a href="referrals.html">Referrals</a>
              </li>
              <li>
                <a href="setting.html">settings</a>
              </li>
              <li>
                <a href="ask-question.html">ask question</a>
              </li>
              <li>
                <a href="question-details.html">question details</a>
              </li>
              <li>
                <a href="about.html">about</a>
              </li>
              <li>
                <a href="revisions.html">revisions</a>
              </li>
              <li>
                <a href="category.html">category</a>
              </li>
              <li>
                <a href="companies.html">companies</a>
              </li>
              <li>
                <a href="company-details.html">company details</a>
              </li>
              <li>
                <a href="careers.html">careers</a>
              </li>
              <li>
                <a href="career-details.html">career details</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
              <li>
                <a href="faq.html">FAQs</a>
              </li>
              <li>
                <a href="pricing-table.html">pricing tables</a>
              </li>
              <li>
                <a href="error.html">page 404</a>
              </li>
              <li>
                <a href="terms-and-conditions.html">Terms &amp; conditions</a>
              </li>
              <li>
                <a href="privacy-policy.html">privacy policy</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">blog</a>
            <ul className="sub-menu">
              <li>
                <a href="blog-grid-no-sidebar.html">grid no sidebar</a>
              </li>
              <li>
                <a href="blog-left-sidebar.html">blog left sidebar</a>
              </li>
              <li>
                <a href="blog-right-sidebar.html">blog right sidebar</a>
              </li>
              <li>
                <a href="blog-single.html">blog detail</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="off-canvas-btn-box px-4 pt-5 text-center">
          <a
            href="#"
            className="btn theme-btn theme-btn-sm theme-btn-outline"
            data-toggle="modal"
            data-target="#loginModal"
          >
            <i className="la la-sign-in mr-1" /> Login
          </a>
          <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
          <a
            href="#"
            className="btn theme-btn theme-btn-sm"
            data-toggle="modal"
            data-target="#signUpModal"
          >
            <i className="la la-plus mr-1" /> Sign up
          </a>
        </div>
      </div>
      {/* end off-canvas-menu */}
      <div className="mobile-search-form">
        <div className="d-flex align-items-center">
          <form method="post" className="flex-grow-1 mr-3">
            <div className="form-group mb-0">
              <input
                className="form-control form--control pl-40px"
                type="text"
                name="search"
                placeholder="Type your search words..."
              />
              <span className="la la-search input-icon" />
            </div>
          </form>
          <div className="search-bar-close icon-element icon-element-sm shadow-sm">
            <i className="la la-times" />
          </div>
          {/* end off-canvas-menu-close */}
        </div>
      </div>
      {/* end mobile-search-form */}
      <div className="body-overlay" />
    </header>
  );
}

export default Header;
