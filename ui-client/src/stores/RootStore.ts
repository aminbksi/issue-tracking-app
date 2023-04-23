import { Instance, types } from "mobx-state-tree";
import { GithubStore } from "./GithubStore";

const RootStore = types.model("RootStore", {
  githubStore: types.optional(GithubStore, {}),
});

export type RootStoreType = Instance<typeof RootStore>;

export { RootStore };
