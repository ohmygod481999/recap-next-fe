import { useMutation, useReactiveVar } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { authVar } from "../../utils/apollo/entities/auth";
import {
    captionMutations,
    REPLY_COMMENT,
} from "../../utils/apollo/entities/caption/operations/caption.mutations";
import { gql } from "@apollo/client";
import { GET_REPLY_OF_SINGLE_COMMENT } from "../../utils/apollo/entities/caption/operations/caption.queries";
import { captionDetailVar } from "../../utils/apollo/entities/caption";

function FormReplyComment({ dataId }) {
    const authCacheData = useReactiveVar(authVar);
    const captionDetailCache = useReactiveVar(captionDetailVar);
    
    const [replyComment, { data }] = useMutation(REPLY_COMMENT, {
        update(cache, { data }) {
            const { insert_comment_one } = data;

            captionMutations.setCaptionDetail({
                ...captionDetailCache,
                comments: captionDetailCache.comments.map((parentComment) => {
                    if (parentComment.id !== dataId) return parentComment;
                    return {
                        ...parentComment,
                        comments: [
                            ...(parentComment.comments || []),
                            insert_comment_one,
                        ],
                    };
                }),
            });
        },
    });
    const [replyData, setReplyData] = useState("");
    const _handleChange = (e) => setReplyData(e.target.value);
    const _handleSubmit = (e) => {
        e.preventDefault();
        replyComment({
            variables: {
                parent_comment_id: dataId,
                user_id: authCacheData.id,
                content: replyData,
            },
            optimisticResponse: {
              insert_comment_one: {
                  __typename: "comment",
                  content: replyData,
                  created_at: new Date().toISOString(),
                  id: "sample_id",
                  user: {
                      id: authCacheData.id,
                      __typename: "user",
                      user_detail: {
                          displayName: authCacheData.user.displayName,
                          photoURL: authCacheData.user.photoURL,
                          __typename: "UserRecord",
                      },
                  },
              },
          },
        });
        setReplyData("");
    };

    return (
        <div className="comment-form">
            <div className="comment-link-wrap text-center">
                <a
                    className="collapse-btn comment-link"
                    data-toggle="collapse"
                    href={`#addCommentCollapseTwo${dataId}`}
                    role="button"
                    aria-expanded="false"
                    aria-controls={`addCommentCollapseTwo${dataId}`}
                    title="Use comments to ask for more information or suggest improvements. AvodataIdanswering questions in comments."
                >
                    Reply this comment
                </a>
            </div>
            <div
                className="collapse border-top border-top-gray mt-2 pt-3"
                id={`addCommentCollapseTwo${dataId}`}
            >
                <form
                    method="post"
                    className="row pb-3"
                    onSubmit={_handleSubmit}
                >
                    <div className="col-lg-12">
                        <div className="input-box">
                            <div className="form-group">
                                <textarea
                                    className="form-control form--control form-control-sm fs-13"
                                    name="message"
                                    rows={5}
                                    placeholder="Your comment here..."
                                    value={replyData}
                                    onChange={_handleChange}
                                />
                                <div className="d-flex flex-wrap align-items-center pt-2">
                                    <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                        [named hyperlinks] (https://example.com)
                                    </div>
                                    <div className="mr-3 fw-bold fs-13">
                                        **bold**
                                    </div>
                                    <div className="mr-3 font-italic fs-13">
                                        _italic_
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end col-lg-12 */}
                    <div className="col-lg-12">
                        <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                            <div></div>
                            <button
                                className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                                type="submit"
                            >
                                Post Comment
                            </button>
                        </div>
                    </div>
                    {/* end col-lg-12 */}
                </form>
            </div>
            {/* end collapse */}
        </div>
    );
}

export default FormReplyComment;
