import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow-y: scroll;
  margin: 80px 0 54px;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 10px 20px;
  padding-bottom: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 120px;
  background-color: #99b5ab;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: 1px solid #31473a;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Label = styled.div<{ type: string }>`
  display: inline-block;
  background-color: transparent;
  border: 1px solid #31473a;
  font-size: 13px;
  padding: 5px 8px;
  border-radius: 12px;

  color: black;
  font-weight: bold;
`;
// //   background-color: ${(props) =>
//     props.type === "public"
//       ? "#099913"
//       : props.type === "private"
//       ? "lightgray"
//       : props.type === "issue"
//       ? "#37ace6"
//       : props.type === "noIssue"
//       ? "#b086e3"
//       : props.type === "owner"
//       ? "#48d98e"
//       : props.type === "notOwner"
//       ? "#db3c1d"
//       : ""};
