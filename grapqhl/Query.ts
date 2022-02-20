import { queryType } from "nexus";

export default queryType({
  definition(t) {
    t.field("nexusfoobar", {
      type: "String",
      resolve: () => "hi",
    });
  },
});
