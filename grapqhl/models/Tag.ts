import { objectType } from "nexus";

export default objectType({
  name: "Tag",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("colorHex");
    t.list.field("tasks", { type: "Task" });
  },
});
