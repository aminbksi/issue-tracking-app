import { observer } from "mobx-react-lite";
import * as styled from "./SystemIssues.styled";
import { useStore } from "shared";
import { IssueModelInterface } from "core";
import { useEffect, useState } from "react";
import {
  CreateIssueDialog,
  CreateLabelDialog,
  DeleteLabelDialog,
} from "ui-kit";

const SystemIssues = () => {
  const { githubStore, systemStore } = useStore();

  const [openCreateIssueDialog, setOpenCreateIssueDialog] =
    useState<boolean>(false);
  const [labelDialog, setLabelDialog] = useState<boolean>(false);
  const [issueSystemId, setIssueSystemId] = useState<string>();
  const [deleteLabel, setDeleteLabel] = useState<boolean>(false);
  const [labelName, setLabelName] = useState<string>("");

  useEffect(() => {
    if (!githubStore.user) {
      githubStore.getUser();
    }

    systemStore.fetchSystemIssues();
  }, [githubStore, systemStore]);

  // TODO: Implement editing system issues
  //  Delete Label
  // Update github

  const handleOpenAddToSystemDialog = (issue: IssueModelInterface) => {};

  const handleOpenDialog = (id?: string) => {
    setIssueSystemId(id);
    setLabelDialog(true);
  };

  const handleOpenDelete = (name: string, issueNumId?: string) => {
    setDeleteLabel(true);
    setLabelName(name);
    setIssueSystemId(issueNumId);
  };

  const handleCreateIssue = async (title: string, description: string) => {
    setOpenCreateIssueDialog(false);
    await systemStore.createIssue(
      title,
      description,
      githubStore.user?.username ?? ""
    );
  };

  const handleCreateLabel = (label: string, color: string) => {
    systemStore.addLabel(label, color, issueSystemId ?? "");
    setIssueSystemId("");
  };

  const handleDeleteLabel = () => {
    setDeleteLabel(false);
    systemStore.deleteLabel(labelName, issueSystemId ?? "");
  };

  return (
    <>
      <div>
        <styled.Tab>
          All the issues in the system
          <styled.Buttons>
            <styled.TopButton onClick={() => setOpenCreateIssueDialog(true)}>
              Create an Issue
            </styled.TopButton>
          </styled.Buttons>
        </styled.Tab>
      </div>
      <styled.HomeContainer>
        {systemStore.issues && systemStore.issues?.length > 0 ? (
          systemStore.issues.map((issue, index) => (
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
                          handleOpenDelete(label.name, issue.issueSystemId)
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
                    onClick={() => handleOpenDialog(issue.issueSystemId)}
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
      {/* 
      
      {addIssueToSystem && (
        <AddIssueToSystemDialog
          onClose={() => setAddIssueToSystem(false)}
          onSubmit={handleAddIssueToSystem}
        />
      )} */}
      {deleteLabel && (
        <DeleteLabelDialog
          onClose={() => setDeleteLabel(false)}
          onSubmit={handleDeleteLabel}
        />
      )}
      {labelDialog && (
        <CreateLabelDialog
          onClose={() => setLabelDialog(false)}
          onSubmit={(label, color) => handleCreateLabel(label, color ?? "")}
          isColor
        />
      )}
      {openCreateIssueDialog && (
        <CreateIssueDialog
          onClose={() => setOpenCreateIssueDialog(false)}
          onSubmit={handleCreateIssue}
        />
      )}
    </>
  );
};

export default observer(SystemIssues);
