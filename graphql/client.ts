import { withApollo as createWithApollo } from "next-apollo";
import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import cache from "./cache";

const httpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink = setContext(() => {
  const token = sessionStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export const withApollo = createWithApollo(apolloClient);

//   uri: "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn",
