import { observer } from "mobx-react-lite";
import * as styled from "./GithubIssues.styled";
import { useStore } from "shared";
import { useState } from "react";
import {
  AddIssueToSystemDialog,
  CreateLabelDialog,
  DeleteLabelDialog,
} from "ui-kit";
import { IssueModelInterface } from "core";

const GithubIssues = () => {
  const { issueStore, githubStore } = useStore();
  const [labelDialog, setLabelDialog] = useState<boolean>(false);
  const [issueNumber, setIssueNumber] = useState<number>();
  const [deleteLabel, setDeleteLabel] = useState<boolean>(false);
  const [labelName, setLabelName] = useState<string>("");
  const [addIssueToSystem, setAddIssueToSystem] = useState<boolean>(false);
  const [selectedIssue, setSelectedIssue] = useState<IssueModelInterface>();

  const handleCreateLabel = (label: string) => {
    issueStore.createLabel(
      githubStore.accessToken ?? "",
      label,
      issueNumber ?? 0
    );
  };

  const handleOpenDialog = (issueNum?: number) => {
    setIssueNumber(issueNum);
    setLabelDialog(true);
  };

  const handleOpenDelete = (name: string, issueNum?: number) => {
    setDeleteLabel(true);
    setLabelName(name);
    setIssueNumber(issueNum);
  };

  const handleDeleteLabel = () => {
    setDeleteLabel(false);
    issueStore.deleteLabel(
      githubStore.accessToken ?? "",
      labelName,
      issueNumber ?? 0
    );
  };

  const handleOpenAddToSystemDialog = (issue: IssueModelInterface) => {
    setAddIssueToSystem(true);
    setSelectedIssue(issue);
  };

  const handleAddIssueToSystem = () => {
    if (!selectedIssue) return;
    // TODO: already exists in system notification
    issueStore.addIssueToSystem(selectedIssue, githubStore.accessToken ?? "");
  };

  return (
    <>
      <styled.HomeContainer>
        {issueStore.issues && issueStore.issues.length > 0 ? (
          issueStore.issues.map((issue, index) => (
            <styled.IssueContainer key={index}>
              <styled.IssueCard>
                <styled.TopCard>
                  <styled.IssueTitle>{issue.title}</styled.IssueTitle>
                  <styled.StateLabel type={issue.state}>
                    {issue.state}
                  </styled.StateLabel>
                </styled.TopCard>
                <styled.Description>{issue.description}</styled.Description>
                <styled.LabelContainer>
                  {issue.labels &&
                    issue.labels.map((label, index) => (
                      <styled.Label
                        onClick={() =>
                          handleOpenDelete(label.name, issue.issue_number)
                        }
                        color={label.color}
                        key={index}
                      >
                        {label.name}
                      </styled.Label>
                    ))}
                </styled.LabelContainer>
                <styled.Buttons>
                  <styled.Button
                    onClick={() => handleOpenDialog(issue.issue_number)}
                  >
                    Add Label
                  </styled.Button>
                  <styled.Button
                    onClick={() => handleOpenAddToSystemDialog(issue)}
                  >
                    Add to System
                  </styled.Button>
                </styled.Buttons>
              </styled.IssueCard>
            </styled.IssueContainer>
          ))
        ) : (
          <styled.NoIssues>
            There are no issues in this repository yet, you can add them by
            clicking on the button above
          </styled.NoIssues>
        )}
      </styled.HomeContainer>
      {deleteLabel && (
        <DeleteLabelDialog
          onClose={() => setDeleteLabel(false)}
          onSubmit={handleDeleteLabel}
        />
      )}
      {labelDialog && (
        <CreateLabelDialog
          onClose={() => setLabelDialog(false)}
          onSubmit={(label) => handleCreateLabel(label)}
        />
      )}
      {addIssueToSystem && (
        <AddIssueToSystemDialog
          onClose={() => setAddIssueToSystem(false)}
          onSubmit={handleAddIssueToSystem}
        />
      )}
    </>
  );
};

export default observer(GithubIssues);
