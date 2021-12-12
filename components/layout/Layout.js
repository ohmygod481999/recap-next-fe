import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import RunToTop from "../../components/runToTop/RunToTop";
import useAuth from "../../utils/hooks/useAuth";
function Layout({ children }) {
  useAuth();
  return (
    <div>
      {/* loading */}
      {/* <div id="preloader">
        <div className="loader">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx={25}
              cy={25}
              r={20}
              fill="none"
              strokeWidth={5}
            />
          </svg>
        </div>
      </div> */}

      <Header />
      {children}
      <RunToTop />
      <Footer />
    </div>
  );
}

export default Layout;
