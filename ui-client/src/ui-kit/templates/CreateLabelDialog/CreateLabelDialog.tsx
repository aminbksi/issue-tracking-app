import { FC, useState } from "react";
import * as styled from "./CreateLabelDialog.styled";
import { observer } from "mobx-react-lite";

interface PropsInterface {
  onClose: () => void;
  onSubmit: (labelName: string, color?: string) => void;
  isColor?: boolean;
}

const CreateLabelDialog: FC<PropsInterface> = ({
  onClose,
  onSubmit,
  isColor,
}) => {
  const [labelName, setLabelName] = useState("");
  const [colorHex, setColorHex] = useState("");

  const handleSubmit = () => {
    onSubmit(labelName, colorHex);
    onClose();
  };

  const handleLabelInputChange = (event: any) => {
    setLabelName(event.target.value);
  };

  const handleColorInputChange = (event: any) => {
    setColorHex(event.target.value);
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
          onChange={handleLabelInputChange}
        />
        {isColor && (
          <styled.Input
            type="text"
            placeholder="Color Hex"
            value={colorHex}
            onChange={handleColorInputChange}
          />
        )}
        <styled.Button onClick={handleSubmit}>Add</styled.Button>
      </styled.DialogContent>
    </styled.DialogOverlay>
  );
};

export default observer(CreateLabelDialog);
