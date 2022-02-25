import { extendType, nonNull, stringArg } from "nexus";

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("createTag", {
      type: "Tag",
      args: { name: nonNull(stringArg()) },
      async resolve(_root, { name }, ctx, _info) {
        return await ctx.db.tag.create({
          data: {
            name,
          },
        });
      },
    });
  },
});
