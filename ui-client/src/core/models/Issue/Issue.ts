import { Instance, types } from "mobx-state-tree";
import { Label } from "../Label";

const Issue = types.model("Issue", {
  title: types.maybe(types.string),
  description: types.maybe(types.string),
  labels: types.maybe(types.array(Label)),
  state: types.maybe(types.string),
  issue_number: types.maybe(types.number),
  issueId: types.maybe(types.string),
  issueSystemId: types.maybe(types.string),
  repository: types.maybe(types.string),
});

export interface IssueModelInterface extends Instance<typeof Issue> {}

export { Issue };
