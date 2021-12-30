import { useMutation, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import {
  DELETE_VOTE_MUTATION,
  UP_VOTE_MUTATION
} from "../../utils/apollo/entities/caption/operations/caption.mutations";
import TimeAgo from "../TimeAgo";
import { GET_CAPTIONS } from "../../utils/apollo/entities/caption/operations/caption.queries";
import { captionsVar } from "../../utils/apollo/entities/caption";
import Link from "next/link";
function CaptionContent({ captionsData, handleRefetch }) {
  const {
    content,
    created_at,
    tag,
    comments,
    votings,
    id,
    vote_number,
    author
  } = captionsData;
  const authDataCache = useReactiveVar(authVar);
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [dataUpVote, setDataUpVote] = useState(votings?.length);
  const [upVote, resultMutation] = useMutation(UP_VOTE_MUTATION);
  const [disUpVote, { data }] = useMutation(DELETE_VOTE_MUTATION);
  const _handleClassActiveUpVote = () => {
    if (!authDataCache.isLoggedIn) {
      return router.push("/login");
    }
    if (!active) {
      // call api to upvote
      upVote({
        variables: {
          caption_id: id,
          user_id: authDataCache.id
        }
      });
      setDataUpVote((prev) => prev + 1);
      setActive(!active);
    } else {
      disUpVote({
        variables: {
          user_id: authDataCache.id,
          caption_id: id
        }
      });
      setDataUpVote((prev) => prev - 1);
      setActive(!active);
    }
  };
  const handleReidrect = () => {
    if (!authDataCache || !authDataCache?.isLoggedIn) {
      router.push("/login");
    } else {
      router.push(`/caption/${id}`);
    }
  };
  useEffect(() => {
    if (authDataCache && votings) {
      setActive(() => {
        return votings.some((voting) => voting.user_id === authDataCache.id);
      });
    }
  }, [authDataCache]);
  console.log(vote_number);
  return (
    <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
      <div className="votes text-center votes-2">
        <div
          className={active ? "answer-block answered" : "answer-block "}
          style={{ cursor: "pointer" }}
          onClick={_handleClassActiveUpVote}
        >
          <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
            {votings ? dataUpVote : vote_number}{" "}
            <i className="la la-thumbs-o-up " />
          </span>
          <span className="vote-text d-block fs-13 lh-18">votes</span>
        </div>
        <div
          className="answer-block  my-2"
          style={{ cursor: "pointer" }}
          onClick={handleReidrect}
        >
          <span className="answer-counts d-block lh-20 fw-medium">
            {comments.length} <i className="la la-pen " />
          </span>
          <span className="answer-text d-block fs-13 lh-18">comments</span>
        </div>
        {/* <div className="view-block">
          <span className="view-counts d-block lh-20 fw-medium">12</span>
          <span className="view-text d-block fs-13 lh-18">views</span>
        </div> */}
      </div>
      <div className="media-body">
        <h5 className="mb-2 fw-medium">
          <Link href={authDataCache?.isLoggedIn ? `/caption/${id}` : "/login"}>
            <a
              style={{
                whiteSpace: "pre-line"
              }}
            >
              {content}
            </a>
          </Link>
        </h5>
        <p className="mb-2 truncate lh-20 fs-15"></p>
        <p className="mb-2 truncate lh-20 fs-15"></p>
        <div className="tags">
          {tag?.map((tagChild) => {
            const { id, name } = tagChild;
            return (
              <a key={id} href="#" className="tag-link">
                {name}
              </a>
            );
          })}
          {captionsData?.caption_tags?.map((tag) => {
            const { id, name } = tag.tag;
            return (
              <a key={id} href="#" className="tag-link">
                {name}
              </a>
            );
          })}
        </div>
        <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
          <a href="user-profile.html" className="media-img d-block">
            <img
              src={
                author?.photo_url || captionsData?.user?.user_detail
                  ? author?.photo_url ||
                    captionsData.user.user_detail.data.photo_url
                  : "images/img3.jpg"
              }
              alt="avatar"
            />
          </a>
          <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
            <div>
              <h5 className="pb-1">
                <a href="user-profile.html">
                  {author?.display_name || captionsData?.user?.user_detail
                    ? author?.display_name ||
                      captionsData.user.user_detail.data.display_name
                    : author?.email}
                </a>
              </h5>
              <div className="stats fs-12 d-flex align-items-center lh-18">
                <span className="text-black pr-2" title="Reputation score">
                  224
                </span>
                <span
                  className="pr-2 d-inline-flex align-items-center"
                  title="Gold badge"
                >
                  <span className="ball gold" />
                  16
                </span>
                <span
                  className="pr-2 d-inline-flex align-items-center"
                  title="Silver badge"
                >
                  <span className="ball silver" />
                  93
                </span>
                <span
                  className="pr-2 d-inline-flex align-items-center"
                  title="Bronze badge"
                >
                  <span className="ball" />
                  136
                </span>
              </div>
            </div>
            <small className="meta d-block text-right">
              <TimeAgo timestamp={created_at} />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptionContent;
