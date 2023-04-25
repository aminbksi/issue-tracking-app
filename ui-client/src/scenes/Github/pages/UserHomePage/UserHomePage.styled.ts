import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 80px 0 54px;
  pointer-events: auto;
`;

export const TabContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  cursor: pointer;
  z-index: 100;
`;

export const Tab = styled.div<{ active?: boolean }>`
  height: 100px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "gray" : "lightgray")};
  color: black;
  solid: 1px solid black;
`;
