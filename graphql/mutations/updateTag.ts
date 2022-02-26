import { extendType, nonNull, stringArg, inputObjectType, arg } from "nexus";

export const UpdateTagData = inputObjectType({
  name: "UpdateTagData",
  definition(t) {
    t.string("colorHex");
    t.string("name");
  },
});

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateTag", {
      type: "Tag",
      args: {
        where: nonNull(arg({ type: "WhereId" })),
        data: nonNull(arg({ type: UpdateTagData })),
      },
      async resolve(_root, { where, data }, ctx, _info) {
        const { name, colorHex } = data;
        return await ctx.db.tag.update({
          where,
          data: {
            colorHex,
            name: name ?? undefined,
          },
        });
      },
    });
  },
});
