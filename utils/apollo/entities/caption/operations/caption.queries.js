import { gql } from "@apollo/client";

export const GET_CAPTIONS = gql`
  query getCaptions($limit: Int!, $offset: Int!) {
    getNewFeed(limit: $limit, offset: $offset) {
      data {
        id
        content
        created_at
        tag {
          id
          name
        }
        vote_number
        comments {
          id
        }
        author {
          display_name
          photo_url
          custom_claims {
            isAdmin
          }
          email
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
      comments {
        id
        content
        votings {
          id
          user_id
        }
        comments {
          id
          content
          user {
            id
            user_detail {
              displayName
              email
              photoURL
            }
          }
        }

        user {
          id
          user_detail {
            displayName
            email
            photoURL
          }
        }
      }
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

export const GET_CAPTION_DETAIL_CACHE = gql`
  query GetCaptionDetailCache {
    captionDetail @client {
      id
      content
      comments {
        id
        content
        comments {
          id
          content
          votings {
            id
            user_id
          }
          user {
            id
            user_detail {
              displayName
              email
              photoURL
            }
          }
        }
        user {
          id
          user_detail {
            displayName
            email
            photoURL
          }
        }
      }
    }
  }
`;
export const GET_RELATED_CAPTIONS = gql`
  query relatedCaptions($id: ID!) {
    relatedCaptions(id: $id) {
      data {
        author {
          display_name
          email
          photo_url
        }
        content
        created_at
        id
      }
    }
  }
`;
export const GET_TAGS = gql`
  query getTags {
    tag {
      id
      name
    }
  }
`;
