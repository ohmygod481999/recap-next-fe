import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_REPLY_OF_SINGLE_COMMENT } from "../../utils/apollo/entities/caption/operations/caption.queries";
import TimeAgo from "../TimeAgo";

function ReplyComment({ data, parentId, fakeReplyData, handleFakeReplyData }) {
  const { content, created_at, user, id } = data;
  
  return (
    <div>
      <li>
        <div className="comment-actions">
          <span className="comment-score"></span>
        </div>
        <div className="comment-body flex-grow-1">
          <div className="media media-card user-media align-items-center p-0 pb-2">
            <a href="user-profile.html" className="media-img d-block">
              <img src={user?.user_detail.photoURL} alt="avatar" />
            </a>
            <div className="media-body d-flex align-items-center justify-content-between">
              <div>
                <h5 className="pb-1">
                  <a href="user-profile.html">
                    {user?.user_detail.displayName}
                  </a>
                </h5>
                <div className="stats fs-12 d-flex align-items-center lh-18">
                  <p className="text-black">{content}</p>
                </div>
              </div>
              <small className="meta d-block text-right">
                <span className="text-black d-block lh-18">answered</span>
                <span className="d-block lh-18 fs-12">
                  <TimeAgo timestamp={created_at} />
                </span>
              </small>
            </div>
          </div>
          {/* end media */}
        </div>
      </li>
    </div>
  );
}

export default ReplyComment;
