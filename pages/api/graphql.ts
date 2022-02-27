import { ApolloServer, gql } from "apollo-server-micro";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
import schema from "../../graphql/schema";
import Cors from "micro-cors";
import { createContext } from "../../graphql/context";

const cors = Cors();

const server = new ApolloServer({
  context: createContext,
  schema,
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});
const startServer = server.start();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
});
