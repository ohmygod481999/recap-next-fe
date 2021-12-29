import { InMemoryCache } from "@apollo/client";
import { authVar } from "./entities/auth";
import {
  captionAdminVar,
  captionDetailVar,
  captionsVar
} from "./entities/caption";

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        auth: {
          read() {
            return authVar();
          }
        },
        captions: {
          read() {
            return captionsVar();
          }
        },
        captionDetail: {
          read() {
            return captionDetailVar();
          }
        },
        captionAdmin: {
          read() {
            return captionAdminVar();
          }
        }
      }
    }
  }
});
