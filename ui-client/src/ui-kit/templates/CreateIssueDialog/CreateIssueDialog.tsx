import { FC, useState } from "react";
import { observer } from "mobx-react-lite";

import * as styled from "./CreateIssueDialog.styled";

interface PropsInterface {
  onClose: () => void;
  onSubmit: (title: string, description: string) => void;
}

const CreateIssueDialog: FC<PropsInterface> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onSubmit(title, description);
    onClose();
  };

  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  return (
    <styled.DialogOverlay>
      <styled.DialogContent>
        <styled.TopContainer>
          <h2>Create Issue</h2>
          <styled.CloseButton onClick={onClose}>×</styled.CloseButton>
        </styled.TopContainer>
        <styled.Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <styled.TextArea
          placeholder="Description"
          rows={4}
          value={description}
          onChange={handleDescriptionChange}
        />
        <styled.Button onClick={handleSubmit}>Create Issue</styled.Button>
      </styled.DialogContent>
    </styled.DialogOverlay>
  );
};

export default observer(CreateIssueDialog);
