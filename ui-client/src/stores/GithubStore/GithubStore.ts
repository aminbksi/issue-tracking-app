import {
  Issue,
  IssueModelInterface,
  RequestModel,
  User,
  UserModelInterface,
} from "core";
import axios from "axios";
import { cast, types } from "mobx-state-tree";
import { getAccessToken, refreshAxiosToken } from "api";

const GithubStore = types
  .model("GithubStore", {
    request: types.optional(RequestModel, {}),
    accessToken: types.maybe(types.string),
    user: types.maybe(User),
    issues: types.maybe(types.array(Issue)),
  })
  .actions((self) => ({
    setUser(user: UserModelInterface) {
      self.user = user;
    },
    setIssues(issues: Array<IssueModelInterface>) {
      self.issues = cast(
        issues.map((issue) => ({
          title: issue.title,
          description: issue.description,
          labels: issue.labels,
          state: issue.state,
          issue_number: Number(issue.issue_number),
          issueId: issue.issueId,
        }))
      );
    },
  }))
  .actions((self) => ({
    init() {
      self.accessToken = getAccessToken();
    },
    setAccessToken(accessToken: string) {
      if (!accessToken) return;
      self.accessToken = accessToken;
    },
    getUser: async () => {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + self.accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      await axios
        .get("http://localhost:3001/api/user", requestHeaders)
        .then((response) => {
          self.setIssues(response.data.issues);
          self.setUser(
            cast({
              username: response.data.name,
            })
          );
        });
    },
  }))
  .actions((self) => ({
    getAccessToken: async (code: string) => {
      await axios
        .get("http://localhost:3001/api/getAccessToken", {
          params: {
            code,
          },
        })
        .then((response) => {
          refreshAxiosToken(response.data.accessToken);
          self.setAccessToken(response.data.accessToken);
        });

      //   self.getUser();
    },
    logout() {
      self.accessToken = "";
      refreshAxiosToken(self.accessToken);
    },
  }));
export { GithubStore };
