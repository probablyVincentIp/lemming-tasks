import { objectType } from "nexus";

export default objectType({
  name: "Task",
  definition(t) {
    t.int("id");
    t.string("title");
    t.nullable.string("description");
    t.int("createdByUserId");
    t.int("assignedToUserId");
    t.field("createdByUser", { type: "User" });
    t.field("assignedToUser", { type: "User" });
    t.list.field("tags", { type: "Tag" });
    t.nullable.field("project", { type: "Project" });
    t.nullable.int("projectId");
  },
});
