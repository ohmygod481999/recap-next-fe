import { useReactiveVar } from "@apollo/client";
import React from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import styles from "../../styles/RecommendModal.module.css";
import TimeAgo from "../TimeAgo";
function RecommendModal({ resultData }) {
  const authCacheData = useReactiveVar(authVar);
  return (
    <div className="col-lg-4">
      <div className="sidebar">
        <div className="card card-item p-2">
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
                <h3 className="fs-17 ">{authCacheData?.user?.displayName}</h3>
                <TimeAgo timestamp={new Date().toISOString()} />
              </div>
            </div>

            <div className="divider">
              <span style={{ width: "100%" }} />
            </div>
            <div className="row no-gutters text-center">
              <div className="col-lg-12 mb-3 ">
                <div className="icon-box pt-3">
                  <p className="fs-15 fw-medium" style={{ textAlign: "left" }}>
                    {resultData?.caption}
                  </p>
                </div>
              </div>

              <div className="col-lg-12 ">
                <div className={styles.mainImage}>
                  <img
                    src={URL.createObjectURL(resultData?.image)}
                    alt="image"
                    className={styles.imageContent}
                  />
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
