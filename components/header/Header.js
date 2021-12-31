import { useReactiveVar } from "@apollo/client";
import Link from "next/link";
import React, { useRef } from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import { getDomain } from "../../utils/helper/helpers";
import { auth } from "../../utils/firebase";
function Header() {
  const authCache = useReactiveVar(authVar);
  const refNavMenuMoblie = useRef(null);
  const refBodyLayout = useRef(null);
  const customHanldeModal = () => {
    if (
      refNavMenuMoblie &&
      refBodyLayout &&
      refNavMenuMoblie.current &&
      refBodyLayout.current
    ) {
      const el = refBodyLayout.current;
      const el2 = refNavMenuMoblie.current;
      el.classList.remove("active");
      el2.classList.remove("active");
    }
  };
  return (
    <header className="header-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2">
            <div className="logo-box">
              <Link href="/">
                <a className="logo" style={{ cursor: "pointer" }}>
                  <img
                    src={"/images/recap-rec.png"}
                    alt="logo"
                    style={{ cursor: "pointer" }}
                  />
                </a>
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
                    <Link href={"/recommend"}>
                      <a>
                        Caption recommendation
                        <span className="badge bg-warning text-white">New</span>
                      </a>
                    </Link>
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
                {authCache?.isLoggedIn && (
                  <Link href={"/user"}>
                    <a
                      className="btn theme-btn mr-2"
                      // onClick={e => e.preventDefault()}
                    >
                      <i className="la la-user mr-1" />{" "}
                      {authCache.user.displayName}
                    </a>
                  </Link>
                )}

                {authCache && authCache.isLoggedIn && (
                  <Link href={"/"}>
                    <a
                      className="btn theme-btn theme-btn-outline mr-2"
                      data-toggle="modal"
                      data-target="#loginModal"
                      onClick={() => auth.signOut()}
                    >
                      <i className="la la-sign-in mr-1" /> Logout
                    </a>
                  </Link>
                )}
                {authCache && !authCache.isLoggedIn && (
                  <Link href={"/login"}>
                    <a
                      className="btn theme-btn theme-btn-outline mr-2"
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      <i className="la la-sign-in mr-1" /> Login
                    </a>
                  </Link>
                )}

                {authCache && !authCache.isLoggedIn && (
                  <Link href={"/signup"}>
                    <a
                      className="btn theme-btn"
                      data-toggle="modal"
                      data-target="#signUpModal"
                    >
                      <i className="la la-user mr-1" /> Sign up
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="off-canvas-menu custom-scrollbar-styled"
        ref={refNavMenuMoblie}
      >
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
            <Link href={"/"}>
              <a
                onClick={() => {
                  customHanldeModal();
                }}
              >
                Home
              </a>
            </Link>
            {/* <ul className="sub-menu">
                <li>
                  <a href="index.html">Home - landing</a>
                </li>
                <li>
                  <a href="home-2.html">Home - main</a>
                </li>
              </ul> */}
          </li>
          <li>
            <Link href={`/recommend`}>
              <a> Caption recommenđation</a>
            </Link>
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
          {authCache && authCache.isLoggedIn && (
            <Link href={"/"}>
              <a
                className="btn theme-btn theme-btn-outline mr-2"
                data-toggle="modal"
                data-target="#loginModal"
                onClick={() => {
                  customHanldeModal();
                  auth.signOut();
                }}
              >
                <i className="la la-sign-in mr-1" /> Logout
              </a>
            </Link>
          )}
          {authCache && !authCache.isLoggedIn && (
            <Link href={"/login"}>
              <a
                className="btn theme-btn theme-btn-outline mr-2"
                data-toggle="modal"
                data-target="#loginModal"
                onClick={() => {
                  customHanldeModal();
                }}
              >
                <i className="la la-sign-in mr-1" /> Login
              </a>
            </Link>
          )}
          <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
          {authCache && !authCache.isLoggedIn && (
            <Link href={"/signup"}>
              <a
                className="btn theme-btn theme-btn-sm"
                data-toggle="modal"
                data-target="#signUpModal"
                onClick={() => {
                  customHanldeModal();
                }}
              >
                <i className="la la-plus mr-1" /> Sign up
              </a>
            </Link>
          )}
          {authCache?.isLoggedIn && (
            <Link href={"/user"}>
              <a
                // href="login.html"
                className="btn theme-btn theme-btn-sm"
                data-toggle="modal"
                data-target="#signUpModal"
                // onClick={e => e.preventDefault()}
                onClick={() => {
                  customHanldeModal();
                }}
              >
                <i className="la la-user mr-1" />
                User
              </a>
            </Link>
          )}
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
      <div className="body-overlay" ref={refBodyLayout} />
    </header>
  );
}

export default Header;
