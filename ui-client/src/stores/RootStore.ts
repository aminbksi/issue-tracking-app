import { Instance, types } from "mobx-state-tree";

const RootStore = types.model("RootStore", {});

export type RootStoreType = Instance<typeof RootStore>;

export { RootStore };
