import { extendType, nonNull, stringArg, inputObjectType, arg } from "nexus";

export const createTaskData = inputObjectType({
  name: "createTaskData",
  definition(t) {
    t.string("description");
    t.nonNull.string("title");
  },
});

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("createTask", {
      type: "Task",
      args: { data: nonNull(arg({ type: createTaskData })) },
      async resolve(_root, { data }, ctx, _info) {
        const { title, description } = data;

        return await ctx.db.task.create({
          data: {
            title,
            description: description ?? undefined,
            creationDate: new Date(),
            createdByUserId: 1,
            projectId: 1,
          },
        });
      },
    });
  },
});
