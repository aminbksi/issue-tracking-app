import { Instance, types } from "mobx-state-tree";
import { GithubStore } from "./GithubStore";
import { IssueStore, UserStore } from "scenes/Github/stores";

const RootStore = types.model("RootStore", {
  githubStore: types.optional(GithubStore, {}),
  userStore: types.optional(UserStore, {}),
  issueStore: types.optional(IssueStore, {}),
});

export type RootStoreType = Instance<typeof RootStore>;

export { RootStore };
