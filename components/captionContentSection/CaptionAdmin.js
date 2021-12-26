import { useMutation, useReactiveVar } from "@apollo/client";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../../styles/CaptionAdmin.module.css";
import { captionAdminVar } from "../../utils/apollo/entities/caption";
import {
  ADMIN_CAPTION,
  captionAdminMutations
} from "../../utils/apollo/entities/caption/operations/caption.mutations";
import { GET_CAPTION_FOR_ADMIN } from "../../utils/apollo/entities/caption/operations/caption.queries";
import Loading, { ModalLoading } from "../Loading";
import TimeAgo from "../TimeAgo";
function CaptionAdmin({ captionData, captionRejected, handleLoading }) {
  const { content, created_at, id, user, caption_tags } = captionData;
  const captionAdminCache = useReactiveVar(captionAdminVar);
  const [decentralization, { data, loading }] = useMutation(ADMIN_CAPTION, {
    update(cache, result) {
      captionAdminMutations.setCaptionAdmin({
        caption: [
          ...captionAdminCache.caption.filter((caption) => caption.id !== id)
        ]
      });
    }
  });
  const _handleApprove = () => {
    decentralization({
      variables: {
        id: id,
        status: 1
      }
    });
  };
  const _handleReject = () => {
    decentralization({
      variables: {
        id: id,
        status: 2
      },
      refetchQueries: [
        {
          query: GET_CAPTION_FOR_ADMIN,
          variables: {
            status: 2
          }
        }
      ]
    });
  };

  if (loading) return <ModalLoading />;
  return (
    <>
      {}
      {Object.values(captionData).length !== 0 && (
        <div className="media media-card media--card align-items-center">
          <div className="media-body border-left-0">
            <h5 className="pb-1">
              <Link href={"#"}>
                <a>{content} </a>
              </Link>
            </h5>
            <div className={styles.wrapper}>
              <div className={styles.wrapperImage}>
                <img
                  src={user?.user_detail?.data?.photoURL || "/images/img1.jpg"}
                  alt="avatar"
                  className={styles.image}
                />
              </div>
              <div className="pl-3">
                <h3 className="fs-14">
                  {user?.user_detail?.data.displayName ||
                    user.user_detail.data.email}
                </h3>
                <span className="fs-12" style={{ display: "block" }}>
                  <TimeAgo timestamp={created_at} />
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
            <div className={styles.wrapp_tags}>
              <div className="tags pt-2">
                {caption_tags &&
                  caption_tags.map((tagChild) => {
                    const { id, name } = tagChild.tag;
                    return (
                      <a key={id} href="#" className="tag-link">
                        {name}
                      </a>
                    );
                  })}
              </div>
              <div>
                <button
                  className="btn theme-btn mr-1"
                  style={{ lineHeight: 1.5 }}
                  onClick={_handleApprove}
                >
                  Approve
                </button>
                <button
                  className="btn theme-btn "
                  style={{ lineHeight: 1.5, background: "#dc3545" }}
                  onClick={_handleReject}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {captionRejected && (
        <div className="media media-card media--card align-items-center">
          <div className="media-body border-left-0">
            <h5 className="pb-1">
              <Link href={"#"}>
                <a>{captionRejected.content} </a>
              </Link>
            </h5>
            <div className={styles.wrapper}>
              <div className={styles.wrapperImage}>
                <img
                  src={
                    captionRejected?.user?.user_detail?.data?.photoURL ||
                    "/images/img1.jpg"
                  }
                  alt="avatar"
                  className={styles.image}
                />
              </div>
              <div className="pl-3">
                <h3 className="fs-14">
                  {captionRejected?.user?.user_detail?.data.displayName ||
                    captionRejected?.user.user_detail.data.email}
                </h3>
                <span className="fs-12" style={{ display: "block" }}>
                  <TimeAgo timestamp={captionRejected.created_at} />
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
            <div className={styles.wrapp_tags}>
              <div className="tags pt-2">
                {captionRejected.caption_tags &&
                  captionRejected.caption_tags.map((tagChild) => {
                    const { id, name } = tagChild.tag;
                    return (
                      <a key={id} href="#" className="tag-link">
                        {name}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CaptionAdmin;
