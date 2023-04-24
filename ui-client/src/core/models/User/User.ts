import { Instance, types } from "mobx-state-tree";
import { Issue } from "../Issue";

const User = types.model("User", {
  username: types.string,
  issues: types.maybe(types.array(Issue)),
});

export interface UserModelInterface extends Instance<typeof User> {}

export { User };
