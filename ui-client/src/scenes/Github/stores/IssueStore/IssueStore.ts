import axios from "axios";
import { Issue, IssueModelInterface, Label } from "core";
import { cast, types } from "mobx-state-tree";

const IssueStore = types
  .model("IssueStore", {
    issues: types.maybe(types.array(Issue)),
    repository: types.maybe(types.string),
    selectedRepository: types.maybe(types.boolean),
    labels: types.maybe(types.array(Label)),
  })
  .actions((self) => ({
    selectRepository() {
      self.selectedRepository = true;
    },
    unselectRepository() {
      self.selectedRepository = false;
      self.repository = undefined;
      self.issues = undefined;
    },
    setIssues(issues: Array<IssueModelInterface>) {
      self.issues = cast(
        issues.map((issue: any) => ({
          title: issue.title,
          comments: issue.comments,
          description: issue.body,
          labels: issue.labels,
          state: issue.state,
        }))
      );
    },
  }))
  .actions((self) => ({
    getRepositoryIssues: async (
      owner: string,
      repository: string,
      accessToken: string
    ) => {
      self.repository = repository;
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
        params: {
          owner,
          repo: repository,
        },
      };
      await axios
        .get("http://localhost:3001/api/repo/issues", requestHeaders)
        .then((response) => {
          if (response.data.length > 0) {
            self.setIssues(response.data);
          }
        });
    },
  }));
export { IssueStore };
