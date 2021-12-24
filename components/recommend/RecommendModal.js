import { useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import styles from "../../styles/RecommendModal.module.css";
import TimeAgo from "../TimeAgo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function RecommendModal({ resultData }) {
  const authCacheData = useReactiveVar(authVar);
  const [active, setActive] = useState(548);
  const handleActive = () => {
    if (active === 548) {
      setActive(active + 1);
    } else {
      setActive(active - 1);
    }
  };

  return (
    <div className="col-lg-4" >
      <div className="sidebar" style={{
      position:"sticky",
      top: "150px"
    }}>
        <div className="card card-item p-2" >
          <div className="card-body">
            <div className={styles.wrapper}>
              <div className={styles.wrapperImage}>
                <img
                  src={authCacheData?.user?.photoURL}
                  alt="avatar"
                  className={styles.image}
                />
              </div>
              <div className="pl-3">
                <h3 className="fs-18 ">{authCacheData?.user?.displayName}</h3>
                <span className="fs-12" style={{ display: "block" }}>
                  <TimeAgo timestamp={new Date().toISOString()} />
                  <i
                    className="la la-clock-o ml-1"
                    style={{ display: "inline-block" }}
                  />
                  <i
                    className="la la-user ml-1"
                    style={{ display: "inline-block" }}
                  />
                </span>
              </div>
            </div>

            <div className="row no-gutters text-center">
              <div className="col-lg-12 mb-3 ">
                <div className="icon-box pt-3">
                  <p className="fs-15 fw-medium" style={{ textAlign: "left", color: "#050505", lineHeight: "20px", fontFamily:"Segoe UI Regular" }}>
                    {resultData?.caption}
                  </p>
                </div>
              </div>

              <div className="col-lg-12 mb-3 ">
                <div className={styles.mainImage}>
                  <img
                    src={URL.createObjectURL(resultData?.image)}
                    alt="image"
                    className={styles.imageContent}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ fontSize: "13.8px" }}>
                    <i className="la la-thumbs-o-up " />
                    <i className="la la-heart-o mr-1" />
                    <span>{active !== 0 && active + "k liked"} </span>
                  </div>
                  <div style={{ fontSize: "13.8px" }}>
                    <span>55k Comments</span>
                    <span> 1,8k Share</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-1">
                <div className="divider"></div>
                <div className={styles.feature}>
                  <div className={styles.feature_child} onClick={handleActive}>
                    <i
                      className="la la-thumbs-o-up mr-1"
                      style={{
                        color: `${active > 548 ? "#5199fd" : ""}`
                      }}
                    />
                    <span
                      style={{
                        color: `${active > 548 ? "#5199fd" : ""}`
                      }}
                    >
                      Like
                    </span>
                  </div>
                  <div className={styles.feature_child}>
                    <i className="la la-commenting-o mr-1" />
                    <span>comment</span>
                  </div>{" "}
                  <div className={styles.feature_child}>
                    <i className="la la-share-square-o mr-1" />
                    <span>share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card */}

          {/* end card */}
          {/* </div> */}
          {/* end sidebar */}
        </div>
      </div>
    </div>
  );
}

export default RecommendModal;
