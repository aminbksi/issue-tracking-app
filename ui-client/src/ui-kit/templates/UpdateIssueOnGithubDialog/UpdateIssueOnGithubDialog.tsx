import { FC, useState } from "react";
import * as styled from "./UpdateIssueOnGithubDialog.styled";
import { observer } from "mobx-react-lite";

interface PropsInterface {
  onClose: () => void;
  onSubmit: (repo?: string) => void;
  isUpdate: boolean;
}

const UpdateIssueOnGithubDialog: FC<PropsInterface> = ({
  onClose,
  onSubmit,
  isUpdate,
}) => {
  const [repository, setRepository] = useState("");
  const handleSubmit = () => {
    onSubmit(repository);
    onClose();
  };
  const handleRepositoryChange = (event: any) => {
    setRepository(event.target.value);
  };

  return (
    <styled.DialogOverlay>
      <styled.DialogContent>
        <styled.TopContainer>
          {!isUpdate ? (
            <h2>Update Issue on Github</h2>
          ) : (
            <h2>Create Issue on Github</h2>
          )}

          <styled.CloseButton onClick={onClose}>×</styled.CloseButton>
        </styled.TopContainer>
        {!isUpdate ? (
          <h4>With this action you will Update this issue on Github</h4>
        ) : (
          <h4>With this action you will Create this issue on Github</h4>
        )}
        {isUpdate && (
          <styled.Input
            type="text"
            placeholder="Repository name"
            value={repository}
            onChange={handleRepositoryChange}
          />
        )}
        <styled.Buttons>
          <styled.YesButton onClick={handleSubmit}>Yes</styled.YesButton>
          <styled.NoButton onClick={onClose}>No</styled.NoButton>
        </styled.Buttons>
      </styled.DialogContent>
    </styled.DialogOverlay>
  );
};

export default observer(UpdateIssueOnGithubDialog);
