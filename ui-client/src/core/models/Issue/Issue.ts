import { types } from "mobx-state-tree";

const Issue = types.model("Issue", {
  title: types.maybe(types.string),
  description: types.maybe(types.string),
  comments: types.maybe(types.array(types.string)),
  labels: types.maybe(types.array(types.string)),
  project: types.maybe(types.string),
});

export { Issue };
