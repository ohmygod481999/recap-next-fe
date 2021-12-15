import { gql } from "@apollo/client";

export const GET_AUTH = gql`
  query GetAuth {
    auth @client {
      user {
        uid
        displayName
        email
        emailVerified
        phoneNumber
        photoURL
      }
      isAdmin
      accessToken
      isLoggedIn
      id
    }
  }
`;
export const GET_CAPTIONS = gql`
  query getCaptions($limit: Int, $offset: Int) {
    caption(limit: $limit, offset: $offset) {
      content
      id
      created_at
      status
      caption_tags {
        tag {
          name
          id
        }
      }
    }
  }
`;
export const GET_USER_BY_FIREBASE_ID = gql`
  query GetUserByFirebaseId($fb_id: String!) {
    users(where: { firebase_uid: { _eq: $fb_id } }) {
      id
    }
  }
`;
