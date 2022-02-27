import { extendType, nonNull, arg, inputObjectType } from "nexus";

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteProject", {
      type: "Boolean",
      args: {
        where: nonNull(arg({ type: "WhereId" })),
      },
      async resolve(_root, { where }, ctx, _info) {
        const res = await ctx.db.project.delete({
          where,
        });
        return !!res;
      },
    });
  },
});
