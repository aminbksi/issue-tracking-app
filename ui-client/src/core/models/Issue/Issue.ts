import { Instance, types } from "mobx-state-tree";
import { Label } from "../Label";

const Issue = types.model("Issue", {
  title: types.maybe(types.string),
  description: types.maybe(types.string),
  comments: types.maybe(types.number),
  labels: types.maybe(types.array(Label)),
  state: types.maybe(types.string),
  issue_number: types.maybe(types.number),
});

export interface IssueModelInterface extends Instance<typeof Issue> {}

export { Issue };
