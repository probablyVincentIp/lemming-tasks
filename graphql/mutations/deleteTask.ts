import { extendType, nonNull, arg, inputObjectType } from "nexus";

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteTask", {
      type: "Boolean",
      args: {
        where: nonNull(arg({ type: "WhereId" })),
      },
      async resolve(_root, { where }, ctx, _info) {
        const res = await ctx.db.task.delete({
          where,
        });
        return !!res;
      },
    });
  },
});
