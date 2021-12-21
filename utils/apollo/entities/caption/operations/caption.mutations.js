import { gql } from "@apollo/client";
import { captionsVar, captionDetailVar } from "..";

export const UP_VOTE_MUTATION = gql`
  mutation upVoteMutation($caption_id: uuid, $user_id: uuid) {
    insert_voting_one(object: { caption_id: $caption_id, user_id: $user_id }) {
      id
      comment_id
    }
  }
`;
export const DELETE_VOTE_MUTATION = gql`
  mutation deleteVote($user_id: uuid, $caption_id: uuid) {
    delete_voting(
      where: { user_id: { _eq: $user_id }, caption_id: { _eq: $caption_id } }
    ) {
      affected_rows
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($caption_id: uuid, $user_id: uuid, $content: String) {
    insert_comment_one(
      object: { caption_id: $caption_id, user_id: $user_id, content: $content }
    ) {
      content
      created_at
      id
      user {
        id
        user_detail {
          displayName
          photoURL
        }
      }
    }
  }
`;
export const REPLY_COMMENT = gql`
  mutation replyComment(
    $parent_comment_id: uuid
    $user_id: uuid
    $content: String
  ) {
    insert_comment_one(
      object: {
        parent_comment_id: $parent_comment_id
        user_id: $user_id
        content: $content
      }
    ) {
      content
      created_at
      id
      user {
        id
        user_detail {
          displayName
          photoURL
        }
      }
    }
  }
`;
export const CREATE_CAPTION = gql`
  mutation createCaption(
    $author_id: uuid!
    $content: String
    $category_id: uuid!
  ) {
    insert_caption_one(
      object: {
        author_id: $author_id
        category_id: $category_id
        content: $content
        status: 0
      }
    ) {
      id
    }
  }
`;
export const ADD_TAGS = gql`
  mutation addTags($objects: [caption_tag_insert_input]!) {
    insert_caption_tag(objects: $objects) {
      affected_rows
    }
  }
`;
export const UP_VOTE_COMMENT = gql`
  mutation upVoteComment($comment_id: uuid, $user_id: uuid) {
    insert_voting(objects: { comment_id: $comment_id, user_id: $user_id }) {
      affected_rows
    }
  }
`;
export const DELETE_VOTE_COMMENT = gql`
  mutation deleteVoteComment($user_id: uuid, $comment_id: uuid) {
    delete_voting(
      where: { user_id: { _eq: $user_id }, comment_id: { _eq: $comment_id } }
    ) {
      affected_rows
    }
  }
`;
const createSetCaptionDetail = (captionDetailVar) => {
  return (captionDetail) => {
    captionDetailVar({
      ...captionDetail
    });
  };
};

export const captionMutations = {
  setCaptionDetail: createSetCaptionDetail(captionDetailVar)
};
