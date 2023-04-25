import { observer } from "mobx-react-lite";
import * as styled from "./GithubRepositories.styled";
import { useStore } from "shared";
import { GithubIssues } from "./components";
import { Repositories } from "./components/Repositories";

const GithubRepositories = () => {
  const { githubStore, issueStore } = useStore();

  const handleClickRepository = async (repository: string, owner: string) => {
    await issueStore.getRepositoryIssues(
      owner,
      repository,
      githubStore.accessToken ?? ""
    );
    issueStore.selectRepository();
  };

  return (
    <>
      <div>
        {issueStore.selectedRepository ? (
          <styled.Tab>
            <styled.InnerTab>
              Issues for
              <styled.TabText>
                {`${issueStore.repository?.toUpperCase()}  `}
              </styled.TabText>
              Repository
            </styled.InnerTab>

            <styled.Buttons>
              <styled.Button onClick={issueStore.unselectRepository}>
                Go back
              </styled.Button>
              <styled.Button>Create an Issue</styled.Button>
            </styled.Buttons>
          </styled.Tab>
        ) : (
          <styled.Tab>
            All the repositories your account associated with
          </styled.Tab>
        )}
      </div>
      <styled.Container>
        {issueStore.selectedRepository ? (
          <GithubIssues />
        ) : (
          <Repositories onClickRepository={handleClickRepository} />
        )}
      </styled.Container>
    </>
  );
};

export default observer(GithubRepositories);
