import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

export const apolloClient = new ApolloClient({
  uri: "https://recaps.hasura.app/v1/graphql",
  cache: cache,
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET
  }
});
