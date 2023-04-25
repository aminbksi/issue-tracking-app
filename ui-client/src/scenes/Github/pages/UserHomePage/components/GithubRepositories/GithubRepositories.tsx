import { observer } from "mobx-react-lite";
import * as styled from "./GithubRepositories.styled";
import { useStore } from "shared";
import { GithubIssues } from "./components";
import { Repositories } from "./components/Repositories";
import { useState } from "react";
import { CreateIssueDialog } from "ui-kit";

const GithubRepositories = () => {
  const { githubStore, issueStore } = useStore();
  const [openCreateIssueDialog, setOpenCreateIssueDialog] =
    useState<boolean>(false);

  const handleClickRepository = async (repository: string, owner: string) => {
    await issueStore.getRepositoryIssues(
      owner,
      repository,
      githubStore.accessToken ?? ""
    );
    issueStore.selectRepository();
  };

  const handleCreateIssue = (title: string, description: string) => {
    console.log(title, description);
    setOpenCreateIssueDialog(false);
    issueStore.createIssue(githubStore.accessToken ?? "", title, description);
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
              <styled.Button onClick={() => setOpenCreateIssueDialog(true)}>
                Create an Issue
              </styled.Button>
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
      {openCreateIssueDialog && (
        <CreateIssueDialog
          onClose={() => setOpenCreateIssueDialog(false)}
          onSubmit={handleCreateIssue}
        />
      )}
    </>
  );
};

export default observer(GithubRepositories);
