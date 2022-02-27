import { extendType, nonNull, stringArg } from "nexus";

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("createProject", {
      type: "Project",
      args: { name: nonNull(stringArg()) },
      async resolve(_root, { name }, ctx, _info) {
        return await ctx.db.project.create({
          data: {
            name,
          },
        });
      },
    });
  },
});
