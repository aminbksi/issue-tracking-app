import { RequestModel } from "core";
import axios from "axios";
import { types } from "mobx-state-tree";
import { getAccessToken, refreshAxiosToken } from "api";

const GithubStore = types
  .model("GithubStore", {
    request: types.optional(RequestModel, {}),
    accessToken: "",
  })
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
          console.log(response);
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
