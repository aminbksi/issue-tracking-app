import styled from "styled-components";

export const MainContainer = styled.div``;
export const Container = styled.div`
  overflow-y: scroll;
`;

export const Tab = styled.div`
  height: 80px;
  background-color: #7c8363;
  border-radius: 8px;
  margin: 5px 10px 10px 10px;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 0 10px 0 15px;
  align-items: center;
  font-size: 20px;
  font-weight: 700; /* bold */
`;

export const Button = styled.button`
  padding: 8px 8px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  background: transparent;
  border: 1px solid #31473a;

  color: black;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px;

  :hover {
    background: #99b5ab;
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
