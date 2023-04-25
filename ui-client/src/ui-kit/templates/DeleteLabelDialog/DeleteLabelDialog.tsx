import { FC } from "react";
import * as styled from "./DeleteLabelDialog.styled";
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
          <h2>Delete Label</h2>

          <styled.CloseButton onClick={onClose}>×</styled.CloseButton>
        </styled.TopContainer>
        <h4>Are you sure you want to delete the label?</h4>
        <styled.Buttons>
          <styled.DeleteButton onClick={handleSubmit}>
            Delete
          </styled.DeleteButton>
          <styled.CancelButton onClick={onClose}>Cancel</styled.CancelButton>
        </styled.Buttons>
      </styled.DialogContent>
    </styled.DialogOverlay>
  );
};

export default observer(DeleteLabelDialog);
