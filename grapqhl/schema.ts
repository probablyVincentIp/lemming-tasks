import { makeSchema } from "nexus";
import path from "path";
import Project from "./models/Project";
import Tag from "./models/Tag";
import Task from "./models/Task";
import User from "./models/User";
import Mutation from "./Mutation";
import createUser from "./mutations/createUser";

import Query from "./Query";
export default makeSchema({
  shouldGenerateArtifacts: true,
  outputs: {
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated/schema.graphql"),
  },

  contextType: {
    export: "Context",
    alias: "ContextModule",
    module: require.resolve(path.join(process.cwd(), "graphql/context.ts")),
  },
  // sourceTypes: {
  //   modules: [
  //     {
  //       module: require.resolve(".prisma/client/index.d.ts"),
  //       alias: "db",
  //     },
  //   ],
  // },
  types: [Query, Mutation, createUser, User, Task, Project, Tag],
});
