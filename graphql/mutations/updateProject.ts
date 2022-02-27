import { extendType, nonNull, inputObjectType, arg } from "nexus";

export const UpdateProjectData = inputObjectType({
  name: "UpdateProjectData",
  definition(t) {
    t.string("colorHex");
    t.string("name");
  },
});

export const WhereId = inputObjectType({
  name: "WhereId",
  definition(t) {
    t.nonNull.int("id");
  },
});

export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateProject", {
      type: "Project",
      args: {
        where: nonNull(arg({ type: WhereId })),
        data: nonNull(arg({ type: UpdateProjectData })),
      },
      async resolve(_root, { where, data }, ctx, _info) {
        const { colorHex, name } = data;
        return await ctx.db.project.update({
          where,
          data: { colorHex, name: name ?? undefined },
        });
      },
    });
  },
});
