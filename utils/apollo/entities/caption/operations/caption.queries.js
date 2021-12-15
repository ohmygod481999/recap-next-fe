import { gql } from "@apollo/client";

export const GET_CAPTIONS = gql`
  query getCaptions($limit: Int, $offset: Int) {
    caption(limit: $limit, offset: $offset) {
      content
      id
      created_at
      status
      comments {
        id
      }
      votings {
        id
        user_id
      }
      caption_tags {
        tag {
          name
          id
        }
      }
    }
  }
`;
export const GET_SINGLE_CAPTION = gql`
  query getSingleCAption($id: uuid!) {
    caption_by_pk(id: $id) {
      content
      created_at
      id
      status
      caption_tags {
        tag {
          id
          name
        }
      }
    }
  }
`;
export const GET_COMMENT_OF_SINGLE_CAPTION = gql`
  query getCommentOfSingleCaption($caption_id: uuid!) {
    comment(where: { caption_id: { _eq: $caption_id } }) {
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
export const GET_REPLY_OF_SINGLE_COMMENT = gql`
  query getReplyOfSingleComment($parent_comment_id: uuid!) {
    comment(where: { parent_comment_id: { _eq: $parent_comment_id } }) {
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
export const CAPTION_CACHE = gql`
  query {
    captions @client
  }
`;
