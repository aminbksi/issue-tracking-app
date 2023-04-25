import { FC, useState } from "react";
import * as styled from "./CreateLabelDialog.styled";
import { observer } from "mobx-react-lite";

interface PropsInterface {
  onClose: () => void;
  onSubmit: (labelName: string) => void;
}

const CreateLabelDialog: FC<PropsInterface> = ({ onClose, onSubmit }) => {
  const [labelName, setLabelName] = useState("");

  const handleSubmit = () => {
    onSubmit(labelName);
    onClose();
  };

  const handleInputChange = (event: any) => {
    setLabelName(event.target.value);
  };

  return (
    <styled.DialogOverlay>
      <styled.DialogContent>
        <styled.TopContainer>
          <h2>Add Label</h2>

          <styled.CloseButton onClick={onClose}>×</styled.CloseButton>
        </styled.TopContainer>
        <styled.Input
          type="text"
          placeholder="Label Name"
          value={labelName}
          onChange={handleInputChange}
        />
        <styled.Button onClick={handleSubmit}>Add</styled.Button>
      </styled.DialogContent>
    </styled.DialogOverlay>
  );
};

export default observer(CreateLabelDialog);
