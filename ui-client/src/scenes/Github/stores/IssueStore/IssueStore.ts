import axios from "axios";
import { Issue, IssueModelInterface, Label } from "core";
import { cast, types } from "mobx-state-tree";

const IssueStore = types
  .model("IssueStore", {
    issues: types.maybe(types.array(Issue)),
    repository: types.maybe(types.string),
    owner: types.maybe(types.string),
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
      self.owner = undefined;
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
          issue_number: issue.number,
          issueId: String(issue.id),
          repository: issue.repository,
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
      self.owner = owner;
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
          console.log(response.data);
          if (response.data.length > 0) {
            self.setIssues(response.data);
          }
        });
    },
    createLabel(accessToken: string, label: string, issue_number: number) {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const requestBody = {
        label: label,
        owner: self.owner,
        repo: self.repository,
        issue_number: issue_number,
      };
      axios
        .post(
          `http://localhost:3001/api/repo/issues/label`,
          requestBody,
          requestHeaders
        )
        .then(() => {
          this.getRepositoryIssues(
            self.owner ?? "",
            self.repository ?? "",
            accessToken
          );
        });
    },
    deleteLabel(accessToken: string, label: string, issue_number: number) {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const requestBody = {
        label: label,
        owner: self.owner,
        repo: self.repository,
        issue_number: issue_number,
      };
      axios
        .post(
          `http://localhost:3001/api/repo/issues/label/delete`,
          requestBody,
          requestHeaders
        )
        .then(() => {
          this.getRepositoryIssues(
            self.owner ?? "",
            self.repository ?? "",
            accessToken
          );
        });
    },
    createIssue(accessToken: string, title: string, body: string) {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const requestBody = {
        body,
        title,
        owner: self.owner,
        repo: self.repository,
      };
      axios
        .post(
          `http://localhost:3001/api/repo/issues/create`,
          requestBody,
          requestHeaders
        )
        .then(() => {
          this.getRepositoryIssues(
            self.owner ?? "",
            self.repository ?? "",
            accessToken
          );
        });
    },
    updateIssueOnGithub(
      accessToken: string,
      issue: IssueModelInterface,
      repo: string,
      user: string
    ) {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const requestBody = {
        issue,
        owner: user,
        repo,
      };
      axios
        .post(
          `http://localhost:3001/api/repo/issues/update`,
          requestBody,
          requestHeaders
        )
        .then(() => {
          this.getRepositoryIssues(
            self.owner ?? "",
            self.repository ?? "",
            accessToken
          );
        });
    },
    createIssueFromSystem(
      accessToken: string,
      issue: IssueModelInterface,
      repo: string,
      user: string
    ) {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const requestBody = {
        issue,
        owner: user,
        repo,
      };
      axios
        .post(
          `http://localhost:3001/api/repo/issues/create/github`,
          requestBody,
          requestHeaders
        )
        .then(() => {
          this.getRepositoryIssues(
            self.owner ?? "",
            self.repository ?? "",
            accessToken
          );
        });
    },
    addIssueToSystem(issue: IssueModelInterface, accessToken: string) {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      const requestBody = {
        issue,
        owner: self.owner,
        repo: self.repository,
      };
      axios.post(
        `http://localhost:3001/api/user/issues`,
        requestBody,
        requestHeaders
      );
    },
  }));
export { IssueStore };
