import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 95px 0 54px;
  pointer-events: auto;
`;

export const TabContainer = styled.div`
  display: flex;
  height: 120px;
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
  border-radius: 8px;
  margin: 10px 10px 10px 5px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#31473A" : "#7C8363")};
  color: black;
  border: 1px solid #31473a;
`;

export const LeftTab = styled.div<{ active?: boolean }>`
  height: 100px;
  flex-grow: 1;
  display: flex;
  border-radius: 8px;
  margin: 10px 5px 10px 10px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;

  cursor: pointer;
  background-color: ${(props) => (props.active ? "#31473A" : "#7C8363")};
  color: black;
  border: 1px solid #31473a;
`;
