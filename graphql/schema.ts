import { makeSchema } from "nexus";
import { join } from "path";

import Project from "./models/Project";
import Tag from "./models/Tag";
import Task from "./models/Task";
import User from "./models/User";
import Mutation from "./Mutation";
import createProject from "./mutations/createProject";
import createTag from "./mutations/createTag";
import createTask from "./mutations/createTask";
import createUser from "./mutations/createUser";
import updateProject from "./mutations/updateProject";
import updateTag from "./mutations/updateTag";
import updateTask from "./mutations/updateTask";
import updateUser from "./mutations/updateUser";
import Query from "./Query";

/**
 * use path.join() as we are in a nextjs environement
 * https://stackoverflow.com/a/68670795/4111389
 **/

export default makeSchema({
  shouldGenerateArtifacts: true,
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules/@types/nexus-typegen/index.d.ts"
    ),
    schema: join(process.cwd(), ".generated/schema.graphql"),
  },

  contextType: {
    export: "Context",
    alias: "ContextModule",
    module: join(process.cwd(), "graphql/context.ts"),
  },

  types: [
    Query,
    Mutation,
    createProject,
    createTag,
    createTask,
    createUser,
    Project,
    Tag,
    Task,
    updateProject,
    updateTag,
    updateTask,
    updateUser,
    User,
  ],
});
