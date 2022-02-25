import { extendType, nonNull, stringArg } from "nexus";

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("createTask", {
      type: "Task",
      args: { name: nonNull(stringArg()) },
      async resolve(_root, { name }, ctx, _info) {
        return await ctx.db.task.create({
          data: {
            title: "foo",
            createdByUser: {
              create: { name: "vincent" },
            },
            creationDate: new Date(),
            project: {
              create: { name: "default" },
            },
          },
        });
      },
    });
  },
});
