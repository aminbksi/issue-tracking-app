import { FC } from "react";
import * as styled from "./AddIssueToSystemDialog.styled";
import { observer } from "mobx-react-lite";

interface PropsInterface {
  onClose: () => void;
  onSubmit: () => void;
}

const DeleteLabelDialog: FC<PropsInterface> = ({ onClose, onSubmit }) => {
  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  return (
    <styled.DialogOverlay>
      <styled.DialogContent>
        <styled.TopContainer>
          <h2>Add this issue to System</h2>

          <styled.CloseButton onClick={onClose}>×</styled.CloseButton>
        </styled.TopContainer>
        <h4>Are you sure you want to add this issue to system?</h4>
        <styled.Buttons>
          <styled.YesButton onClick={handleSubmit}>Yes</styled.YesButton>
          <styled.NoButton onClick={onClose}>No</styled.NoButton>
        </styled.Buttons>
      </styled.DialogContent>
    </styled.DialogOverlay>
  );
};

export default observer(DeleteLabelDialog);
