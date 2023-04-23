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
    },
    logout() {
      self.accessToken = "";
      refreshAxiosToken(self.accessToken);
    },
  }));
export { GithubStore };
