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
  background-color: #edf4f2;
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
  background-color: transparent;

  &:focus {
    outline: none;
    border-bottom-color: #007bff;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #7c8363;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #31473a;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #31473a;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
