import { objectType } from "nexus";

export default objectType({
  name: "Project",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("colorHex");
    t.list.field("tasks", { type: "Task" });
  },
});
