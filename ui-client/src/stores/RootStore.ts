import { Instance, types } from "mobx-state-tree";
import { GithubStore } from "./GithubStore";
import { IssueStore, SystemStore, UserStore } from "scenes/Github/stores";

const RootStore = types.model("RootStore", {
  githubStore: types.optional(GithubStore, {}),
  userStore: types.optional(UserStore, {}),
  issueStore: types.optional(IssueStore, {}),
  systemStore: types.optional(SystemStore, {}),
});

export type RootStoreType = Instance<typeof RootStore>;

export { RootStore };
