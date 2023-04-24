import { RequestModel, User, UserModelInterface } from "core";
import axios from "axios";
import { cast, types } from "mobx-state-tree";
import { getAccessToken, refreshAxiosToken } from "api";

const GithubStore = types
  .model("GithubStore", {
    request: types.optional(RequestModel, {}),
    accessToken: types.maybe(types.string),
    user: types.maybe(User),
  })
  .actions((self) => ({
    setUser(user: UserModelInterface) {
      self.user = user;
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
          self.setUser(
            cast({
              username: response.data.name,
              issues: response.data.issues,
            })
          );

          console.log(self.user);
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
