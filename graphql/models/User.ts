import { objectType } from "nexus";

export default objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("name");
    t.list.field("createdTasks", { type: "Task" });
    t.list.field("assignedTasks", { type: "Task" });
  },
});
