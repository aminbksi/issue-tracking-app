import { Instance, types } from "mobx-state-tree";

const Repository = types.model("Repository", {
  name: types.string,
  hasIssues: types.number,
  isPrivate: types.boolean,
  owner: types.string,
});

export interface RepositoryModelInterface extends Instance<typeof Repository> {}

export { Repository };
