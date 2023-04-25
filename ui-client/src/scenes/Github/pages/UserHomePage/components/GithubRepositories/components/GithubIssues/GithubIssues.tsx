import { observer } from "mobx-react-lite";
import * as styled from "./GithubIssues.styled";
import { useStore } from "shared";
import { useState } from "react";
import { CreateLabelDialog } from "ui-kit";

const GithubIssues = () => {
  const { issueStore, githubStore } = useStore();
  const [labelDialog, setLabelDialog] = useState<boolean>(false);
  const [issueNumber, setIssueNumber] = useState<number>();

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

  return (
    <>
      <styled.HomeContainer>
        {/* {issueStore.issues &&
          issueStore.issues.length > 0 &&
          issueStore.issues.map((issue) => {
            return <div>{issue.title}</div>;
          })} */}

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
                      <styled.Label color={label.color} key={index}>
                        {label.name}
                      </styled.Label>
                    ))}
                </styled.LabelContainer>
                {/* state={issue.state} */}
                <styled.Buttons>
                  <styled.Button
                    onClick={() => handleOpenDialog(issue.issue_number)}
                  >
                    Add Label
                  </styled.Button>
                  <styled.Button>Add to System</styled.Button>
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
      {labelDialog && (
        <CreateLabelDialog
          onClose={() => setLabelDialog(false)}
          onSubmit={(label) => handleCreateLabel(label)}
        />
      )}
    </>
  );
};

export default observer(GithubIssues);
