import axios from "axios";
import { Repository, RepositoryModelInterface } from "core/models/Repository";
import { cast, types } from "mobx-state-tree";

const UserStore = types
  .model("UserStore", {
    repositories: types.maybe(types.array(Repository)),
  })
  .actions((self) => ({
    setRepositories(repositories: Array<RepositoryModelInterface>) {
      self.repositories = cast(
        repositories.map((repository: any) => ({
          name: repository.name,
          hasIssues: repository.open_issues,
          isPrivate: repository.private,
          owner: repository.owner.login,
        }))
      );
    },
  }))
  .actions((self) => ({
    getRepositories: async (accessToken: string) => {
      const requestHeaders = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
      };
      await axios
        .get("http://localhost:3001/api/user/repos", requestHeaders)
        .then((response) => {
          self.setRepositories(response.data);
        });
    },
  }));
export { UserStore };
