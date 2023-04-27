import axios from "axios";
import { Issue, IssueModelInterface } from "core";
import { cast, types } from "mobx-state-tree";

const SystemStore = types
  .model("GithubStore", {
    issues: types.maybe(types.array(Issue)),
  })

  .actions((self) => ({
    setIssues(issues: Array<IssueModelInterface>) {
      self.issues = cast(
        issues.map((issue) => ({
          title: issue.title,
          description: issue.description,
          labels: issue.labels,
          state: issue.state,
          issue_number: Number(issue.issue_number),
          issueId: issue.issueId,
          issueSystemId: issue.issueSystemId,
          repository: issue.repository,
        }))
      );
    },
    fetchSystemIssues() {
      axios
        .get(`http://localhost:3001/api/repo/issues/system`)
        .then((response) => {
          this.setIssues(response.data);
        });
    },
  }))
  .actions((self) => ({
    createIssue: async (title: string, body: string, owner: string) => {
      const requestBody = {
        body,
        title,
        owner: owner,
      };
      axios
        .post(
          `http://localhost:3001/api/repo/issues/create/system`,
          requestBody
        )
        .then(() => {
          self.fetchSystemIssues();
        });
    },
    addLabel: async (title: string, color: string, issueSystemId: string) => {
      const requestBody = {
        label: {
          name: title,
          color,
        },
        issueSystemId,
      };
      axios
        .post(`http://localhost:3001/api/repo/issues/system/label`, requestBody)
        .then(() => {
          self.fetchSystemIssues();
        });
    },
    deleteLabel(label: string, issueSystemId: string) {
      const requestBody = {
        label,
        issueSystemId,
      };
      axios
        .post(
          `http://localhost:3001/api/issues/label/delete/system`,
          requestBody
        )
        .then(() => {
          self.fetchSystemIssues();
        });
    },
  }));

export { SystemStore };
