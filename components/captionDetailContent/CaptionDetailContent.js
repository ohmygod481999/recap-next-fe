import { useMutation, useQuery, useReactiveVar } from "@apollo/client";
import React, { useState } from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import {
  ADD_COMMENT,
  captionMutations
} from "../../utils/apollo/entities/caption/operations/caption.mutations";
import TimeAgo from "../TimeAgo";
import CaptionDetailComment from "./CaptionDetailComment";
import { captionDetailVar } from "../../utils/apollo/entities/caption";
import RelationCaptions from "./RelationCaptions";
import { GET_RELATED_CAPTIONS } from "../../utils/apollo/entities/caption/operations/caption.queries";
import Loading from "../Loading";
function CaptionDetailContent({ singleCaptionData }) {
  const { caption_by_pk } = singleCaptionData;
  const { caption_tags, content, created_at, id } = caption_by_pk;
  const authCacheData = useReactiveVar(authVar);
  const captionDetailCache = useReactiveVar(captionDetailVar);
  console.log(captionDetailCache);
  const [comment, setCommentData] = useState("");
  const { data, loading, error } = useQuery(GET_RELATED_CAPTIONS, {
    variables: {
      id: id
    }
  });
  const [addComment, result] = useMutation(ADD_COMMENT, {
    update(cache, { data }) {
      const { insert_comment_one } = data;
      captionMutations.setCaptionDetail({
        ...captionDetailCache,
        comments: [...(captionDetailCache.comments || []), insert_comment_one]
      });
    }
  });

  const _handleChange = (e) => setCommentData(e.target.value);
  const _handleSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      addComment({
        variables: {
          caption_id: id,
          user_id: authCacheData.id,
          content: comment
        },
        optimisticResponse: {
          insert_comment_one: {
            __typename: "comment",
            content: comment,
            created_at: new Date().toISOString(),
            id: id,
            user: {
              id: authCacheData.id,
              __typename: "user",
              user_detail: {
                data: {
                  display_name: authCacheData.user.displayName,
                  photo_url: authCacheData.user.photoURL,
                },
                __typename: "UserRecord"
              }
            }
          }
        }
      });
      setCommentData("");
    }
  };
  if (loading) {
    console.log(loading);
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  return (
    <section
      className="question-area pt-40px pb-40px"
      style={{ width: "100vw" }}
    >
      <div className="container" style={{ width: "100vw" }}>
        <div className="row">
          <div className="col-lg-9">
            <div className="question-main-bar mb-50px">
              <div className="question-highlight">
                <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                  <div className="media-body">
                    <h5 className="fs-20">
                      <a href="#">{content}</a>
                    </h5>
                    <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                      <div className="pr-3">
                        <span>Post </span>
                        <TimeAgo timestamp={created_at} />
                      </div>
                      <div className="pr-3">
                        <span className="pr-1">Viewed</span>
                        <span className="text-black">89 times</span>
                      </div>
                    </div>
                    <div className="tags">
                      {caption_tags.map((tag) => (
                        <a key={tag.tag.id} href="#" className="tag-link">
                          {tag.tag.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {/* end media */}
              </div>
              {/* end question-highlight */}
              {captionDetailCache &&
                captionDetailCache.comments.map((cmt) => (
                  <CaptionDetailComment key={cmt.id} commentData={cmt} />
                ))}
              {/* <CaptionDetailComment commentDataId={id} /> */}
              <div className="post-form">
                <form method="post" className="pt-3" onSubmit={_handleSubmit}>
                  <div className="input-box">
                    <label className="fs-14 text-black lh-20 fw-medium">
                      Comment
                    </label>
                    <div className="form-group">
                      <textarea
                        // className="form-control form--control form-control-sm fs-13 user-text-editor"
                        className="form-control form--control form-control-sm fs-13"
                        name="message"
                        rows={6}
                        placeholder="Your answer here..."
                        value={comment}
                        onChange={_handleChange}
                      />
                    </div>
                  </div>
                  <button className="btn theme-btn theme-btn-sm" type="submit">
                    Post Your comment
                  </button>
                </form>
              </div>
            </div>
            {/* end question-main-bar */}
          </div>
          {/* end col-lg-9 */}
          <div className="col-lg-3">
            <div className="sidebar">
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="fs-17 pb-3">Related Captions</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <div className="sidebar-questions pt-3">
                    {loading && <Loading />}
                    {data &&
                      data?.relatedCaptions?.data.map((relation) => (
                        <RelationCaptions
                          key={relation.id}
                          relatedData={relation}
                        />
                      ))}
                  </div>
                  {/* end sidebar-questions */}
                </div>
              </div>
              {/* end card */}
              <div className="card card-item">
                <div className="card-body">
                  <h3 className="fs-17 pb-3">Trending Tags</h3>
                  <div className="divider">
                    <span />
                  </div>
                  <div className="tags pt-4">
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        analytics
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>??</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        computer
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>??</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        python
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>??</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        th??? th??nh
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>??</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        c#
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>??</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="collapse" id="showMoreTags">
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          java
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>??</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          swift
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>??</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          html
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>??</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          angular
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>??</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          flutter
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>??</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                      <div className="tag-item">
                        <a href="#" className="tag-link tag-link-md">
                          machine-language
                        </a>
                        <span className="item-multiplier fs-13">
                          <span>??</span>
                          <span>32924</span>
                        </span>
                      </div>
                      {/* end tag-item */}
                    </div>
                    {/* end collapse */}
                    <a
                      className="collapse-btn fs-13"
                      data-toggle="collapse"
                      href="#showMoreTags"
                      role="button"
                      aria-expanded="false"
                      aria-controls="showMoreTags"
                    >
                      <span className="collapse-btn-hide">
                        Show more
                        <i className="la la-angle-down ml-1 fs-11" />
                      </span>
                      <span className="collapse-btn-show">
                        Show less
                        <i className="la la-angle-up ml-1 fs-11" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
              <div className="ad-card" style={{ overflow: "hidden" }}>
                <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                  Advertisements
                </h4>
                <div className="ad-banner ">
                  <span className="ad-text">290x500</span>
                </div>
              </div>
              {/* end ad-card */}
            </div>
            {/* end sidebar */}
          </div>
          {/* end col-lg-3 */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
}

export default CaptionDetailContent;
