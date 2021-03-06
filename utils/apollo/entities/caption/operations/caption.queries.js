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
        votings {
          id
          user_id
        }
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
export const GET_ALL_CAPTIONS = gql`
  query getAllCaptions($limit: Int, $content: String, $tag_id: [uuid!]) {
    caption(
      limit: $limit
      where: {
        content: { _regex: $content }
        caption_tags: { tag_id: { _in: $tag_id } }
      }
    ) {
      content
      created_at
      id
      status
      votings {
        id
        user_id
      }
      caption_tags {
        tag {
          id
          name
        }
      }
      comments {
        id
      }
      user {
        id
        user_detail {
          data {
            display_name
            email
            photo_url
          }
        }
      }
    }
  }
`;
export const GET_CAPTION_OF_USER = gql`
  query getCaptionOfUser($author_id: uuid) {
    caption(where: { author_id: { _eq: $author_id } }) {
      status
      content
      created_at
      id
      caption_tags {
        tag {
          id
          name
        }
      }
      user {
        id
        user_detail {
          data {
            display_name
            photo_url
            email
          }
        }
      }
    }
  }
`;
export const ALL_CAPTION_CACHE = gql`
  query {
    allCaptions @client
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
              data {
                display_name
                email
                photo_url
              }
            }
          }
        }

        user {
          id
          user_detail {
            data {
              display_name
              email
              photo_url
            }
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
          data {
            display_name
            email
            photo_url
          }
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
          data {
            display_name
            email
            photo_url
          }
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
              data {
                display_name
                email
                photo_url
              }
            }
          }
        }
        user {
          id
          user_detail {
            data {
              display_name
              email
              photo_url
            }
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
export const GET_CAPTION_FOR_ADMIN = gql`
  query getCaptionForAdmin($status: Int) {
    caption(where: { status: { _eq: $status } }) {
      status
      content
      created_at
      id
      caption_tags {
        tag {
          id
          name
        }
      }
      user {
        id
        user_detail {
          data {
            display_name
            photo_url
            email
          }
        }
      }
    }
  }
`;

export const GET_CAPTION_FOR_ADMIN_CACHE = gql`
  query getCaptionForAdminCache($status: Int) {
    captionAdmin @client {
      status
      content
      created_at
      id
      caption_tags {
        tag {
          id
          name
        }
      }
      user {
        id
        user_detail {
          data {
            display_name
            photo_url
            email
          }
        }
      }
    }
  }
`;
export const GET_TOP_USERS = gql`
  query getTopUsers {
    getTopUsers {
      data {
        id
        caption_count
        info {
          display_name
          phone_number
          photo_url
          tenant_id
          email
        }
      }
    }
  }
`;
