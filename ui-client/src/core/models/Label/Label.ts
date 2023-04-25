import { Instance, types } from "mobx-state-tree";

const Label = types.model("Label", {
  name: types.string,
  color: types.string,
});

export interface LabelModelInterface extends Instance<typeof Label> {}

export { Label };
