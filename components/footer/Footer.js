import React from "react";
import { getDomain } from "../../utils/helper/helpers";
function Footer() {
  return (
    <section className="footer-area pt-80px position-relative">
      <span className="vertical-bar-shape vertical-bar-shape-1" />
      <span className="vertical-bar-shape vertical-bar-shape-2" />
      <span className="vertical-bar-shape vertical-bar-shape-3" />
      <span className="vertical-bar-shape vertical-bar-shape-4" />
      <div className="container">
        {/* end row */}
      </div>
      {/* end container */}
      <hr className="border-top-gray my-4" />
      <div className="container">
        <div className="row align-items-center pb-4 copyright-wrap">
          <div className="col-lg-6">
            <p className="copyright-desc copyright--desc fs-14">
              Copyright © 2021 <a href="https://www.facebook.com/profile.php?id=100009515692070">Recap</a>{" "}
              Inc.
            </p>
          </div>
          {/* end col-lg-6 */}
          <div className="col-lg-6">
            <ul className="generic-list-item generic-list-item-hover-underline generic-list-item-inline text-right">
              <li>
                <a href="#">Vương Bảo Long</a>
              </li>
              <li>
                <a href="#">Trần Minh Tú</a>
              </li>
              <li>
                <a href="#">Nguyễn Thị Nhiên</a>
              </li>
              <li>
                <a href="#">Đỗ Thanh Dịu</a>
              </li>
              <li>
                <a href="#">Lê Đức Kiên</a>
              </li>
            </ul>
          </div>
          {/* end col-lg-6 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}

export default Footer;
