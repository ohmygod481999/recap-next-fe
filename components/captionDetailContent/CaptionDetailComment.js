import { useMutation, useReactiveVar } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import {
  DELETE_VOTE_COMMENT,
  UP_VOTE_COMMENT
} from "../../utils/apollo/entities/caption/operations/caption.mutations";
import TimeAgo from "../TimeAgo";
import FormReplyComment from "./FormReplyComment";
import ReplyComment from "./ReplyComment";

function CaptionDetailComment({ commentData }) {
  const { content, created_at, id, user, comments, votings } = commentData;
  const { photo_url, display_name } = user && user.user_detail ? user.user_detail.data : {};
  const authCache = useReactiveVar(authVar);
  const [like, setLike] = useState(votings ? votings.length : 0);
  const [active, setActive] = useState(false);
  const [upVoteComment, reuslt] = useMutation(UP_VOTE_COMMENT, {
    variables: {
      comment_id: id,
      user_id: authCache?.id
    }
  });
  const [DisUpVoteComment, reuslt2] = useMutation(DELETE_VOTE_COMMENT, {
    variables: {
      user_id: authCache?.id,
      comment_id: id
    }
  });
  const handleUpVote = (e) => {
    if (active) {
      DisUpVoteComment();
      setLike((prev) => prev - 1);
      setActive(false);
    } else {
      upVoteComment();
      setLike((prev) => prev + 1);
      setActive(true);
    }
  };
  useEffect(() => {
    if (authCache) {
      setActive(() => {
        return (votings || []).some((voting) => voting.user_id === authCache.id);
      });
    }
  }, [authCache]);

  return (
    <>
      <div className="answer-wrap d-flex">
        <div className="answer-body-wrap flex-grow-1 pl-0">
          <div className="answer-body"></div>
          {/* end answer-body */}
          <div className="question-post-user-action">
            <div className="media media-card user-media align-items-center">
              <a href="#" className="media-img d-block">
                <img src={photo_url} alt="avatar" />
              </a>
              <div className="media-body d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="pb-1">
                    <a href="user-profile.html">{display_name}</a>
                  </h5>
                  <div className="stats fs-12 d-flex align-items-center lh-18 ">
                    <p className="text-black">{content}</p>
                  </div>
                  <div
                    className="stats fs-12 d-flex align-items-center lh-18 "
                    style={{ marginTop: "0.5rem" }}
                  >
                    <span
                      className="text-red active"
                      style={{
                        color: active ? "green" : "black ",
                        cursor: "pointer"
                      }}
                      onClick={handleUpVote}
                    >
                      {like} <i className={`la ${active ? "la-heart" : "la-heart-o"} mr-1`} />
                      {active ? "đã thích" : "yêu thích"}
                    </span>
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
                  <ReplyComment key={cmt.id} data={cmt} parentId={id} />
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
