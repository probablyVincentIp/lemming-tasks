import { extendType, nonNull, arg, inputObjectType } from "nexus";
export const UpdateTaskData = inputObjectType({
  name: "UpdateTaskData",
  definition(t) {
    t.string("description");
    t.string("title");
  },
});
export default extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateTask", {
      type: "Task",
      args: {
        where: nonNull(arg({ type: "WhereId" })),
        data: nonNull(arg({ type: UpdateTaskData })),
      },
      async resolve(_root, { where, data }, ctx, _info) {
        const { description, title } = data;
        return await ctx.db.task.update({
          where,
          data: {
            description,
            title: title ?? undefined,
            dueDate: undefined,
            tags: undefined,
            isCompleted: undefined,
            project: undefined,
            assignedToUserId: undefined,
          },
        });
      },
    });
  },
});
