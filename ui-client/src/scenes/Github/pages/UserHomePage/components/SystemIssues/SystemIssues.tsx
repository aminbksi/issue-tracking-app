import { observer } from "mobx-react-lite";
import * as styled from "./SystemIssues.styled";
import { useStore } from "shared";
import { IssueModelInterface } from "core";

const SystemIssues = () => {
  const { githubStore } = useStore();

  // TODO: Implement editing system issues
  //   Create Issue
  //  Add Label
  //  Delete Label
  // Update github
  // Fetch System issues after adding issue to system

  const handleOpenAddToSystemDialog = (issue: IssueModelInterface) => {};

  const handleOpenDialog = (issueNum?: number) => {};

  const handleOpenDelete = (name: string, issueNum?: number) => {};

  return (
    <>
      <styled.HomeContainer>
        {githubStore.issues && githubStore.issues?.length > 0 ? (
          githubStore.issues.map((issue, index) => (
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
                    Update on Github
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
      {/* {deleteLabel && (
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
      )} */}
    </>
  );
};

export default observer(SystemIssues);
