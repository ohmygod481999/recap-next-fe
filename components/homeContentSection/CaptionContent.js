import React from "react";
import TimeAgo from "../TimeAgo";

function CaptionContent({ captionsData }) {
  const { content, created_at, caption_tags } = captionsData;
  return (
    <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
      <div className="votes text-center votes-2">
        <div className="vote-block">
          <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">
            3
          </span>
          <span className="vote-text d-block fs-13 lh-18">votes</span>
        </div>
        <div className="answer-block answered my-2">
          <span className="answer-counts d-block lh-20 fw-medium">3</span>
          <span className="answer-text d-block fs-13 lh-18">answers</span>
        </div>
        <div className="view-block">
          <span className="view-counts d-block lh-20 fw-medium">12</span>
          <span className="view-text d-block fs-13 lh-18">views</span>
        </div>
      </div>
      <div className="media-body">
        <h5 className="mb-2 fw-medium">
          <a href="question-details.html">{content}</a>
        </h5>
        <p className="mb-2 truncate lh-20 fs-15"></p>
        <div className="tags">
          {caption_tags.map((tag) => {
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
            <img src="images/img3.jpg" alt="avatar" />
          </a>
          <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
            <div>
              <h5 className="pb-1">
                <a href="user-profile.html">Arden Smith</a>
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
