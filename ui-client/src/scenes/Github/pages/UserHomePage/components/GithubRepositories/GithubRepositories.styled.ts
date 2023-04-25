import styled from "styled-components";

export const MainContainer = styled.div``;
export const Container = styled.div`
  overflow-y: scroll;
  padding: 20px;
`;

export const Tab = styled.div`
  height: 80px;
  background-color: #6da1c9;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700; /* bold */
`;

export const Button = styled.button`
  padding: 8px 8px;
  font-size: 13px;
  line-height: 1;
  background: transparent;
  border: 1px solid white;

  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px;

  :hover {
    background: #035199;
  }
`;

export const InnerTab = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const TabText = styled.div`
  font-size: 23px;
  font-weight: 800;
  margin: 0 5px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
