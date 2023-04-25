import styled from "styled-components";

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const DialogContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #73000c;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: gray;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #504e4e;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #504e4e;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3px;
`;
