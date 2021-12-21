import React from "react";
import Link from "next/link";
import TimeAgo from "../TimeAgo";
function RelationCaptions({ relatedData }) {
  const { content, created_at, author, id } = relatedData;
  return (
    <div className="media media-card media--card media--card-2">
      <div className="media-body">
        <h5>
          <Link href={`/caption/${id}`}>
            <a>{content}</a>
          </Link>
        </h5>
        <small className="meta">
          <TimeAgo timestamp={created_at} />
          <span className="pr-1">. by</span>
          <a href="#" className="author">
            {author.display_name || author.email}
          </a>
        </small>
      </div>
    </div>
  );
}

export default RelationCaptions;
