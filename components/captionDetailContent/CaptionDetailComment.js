import React from "react";
import TimeAgo from "../TimeAgo";
import FormReplyComment from "./FormReplyComment";
import ReplyComment from "./ReplyComment";

function CaptionDetailComment({ commentData }) {
  const { content, created_at, id, user, comments } = commentData;
  const { photoURL, displayName } = user.user_detail;
  
  return (
    <>
      <div className="answer-wrap d-flex">
        <div className="answer-body-wrap flex-grow-1 pl-0">
          <div className="answer-body"></div>
          {/* end answer-body */}
          <div className="question-post-user-action">
            <div className="media media-card user-media align-items-center">
              <a href="user-profile.html" className="media-img d-block">
                <img src={photoURL} alt="avatar" />
              </a>
              <div className="media-body d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="pb-1">
                    <a href="user-profile.html">{displayName}</a>
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
          {/* end question-post-user-action */}

          <div className="comments-wrap">
            <ul className="comments-list">
              {comments &&
                comments.map((cmt) => (
                  <ReplyComment
                    key={cmt.id}
                    data={cmt}
                    parentId={id}
                  />
                ))}
            </ul>
            <FormReplyComment dataId={id} />
          </div>
          {/* end comments-wrap */}
        </div>
        {/* end answer-body-wrap */}
      </div>
    </>
  );
}

export default CaptionDetailComment;
