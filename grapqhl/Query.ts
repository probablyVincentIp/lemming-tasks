import { intArg, nonNull, queryType } from "nexus";

export default queryType({
  definition(t) {
    t.field("nexusfoobar", {
      type: "String",
      resolve: () => "hi",
    });

    t.field("tag", {
      type: "Tag",
      args: { id: nonNull(intArg()) },
      resolve: async function (_root, { id }, ctx, _info) {
        return await ctx.db.tag.findFirst({
          where: {
            id,
          },
        });
      },
    });

    t.field("project", {
      type: "Project",
      args: { id: nonNull(intArg()) },
      resolve: async function (_root, { id }, ctx, _info) {
        return await ctx.db.project.findFirst({
          where: {
            id,
          },
        });
      },
    });

    t.field("task", {
      type: "Task",
      args: { id: nonNull(intArg()) },
      resolve: async function (_root, { id }, ctx, _info) {
        return await ctx.db.task.findFirst({
          where: {
            id,
          },
        });
      },
    });

    t.field("user", {
      type: "User",
      args: { id: nonNull(intArg()) },
      resolve: async function (_root, { id }, ctx, _info) {
        return await ctx.db.user.findFirst({
          where: {
            id,
          },
        });
      },
    });
  },
});
