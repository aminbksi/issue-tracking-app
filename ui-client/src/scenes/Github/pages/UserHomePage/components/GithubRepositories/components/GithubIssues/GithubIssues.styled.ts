import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 20px;
`;

export const Tab = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6da1c9;
  color: black;
  font-size: 20px;
  font-weight: 700; /* bold */
`;

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const IssueCard = styled.div`
  display: flex;
  flex-direction: column;
  //   align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const IssueTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 20px;
`;

export const Label = styled.span<{ color?: string }>`
  display: inline-block;
  padding: 6px 10px;
  background-color: #${(props) => props.color};
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const StateLabel = styled(Label)<{ type?: string }>`
  background-color: ${(props) => (props.type !== "open" ? "#dc3545" : "green")};
  color: #fff;
`;

export const Button = styled.button`
  padding: 8px 8px;
  font-size: 13px;
  line-height: 1;
  background: #648eb7;
  border: 1px solid gray;

  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px;

  :hover {
    background: #035199;
  }
`;

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Description = styled.div`
  font-size: 14px;
  margin: 10px 10px 20px 10px;
`;

export const NoIssues = styled.div`
  font-size: 14px;
  margin: 10px 10px 20px 10px;
  text-align: center;
  color: gray;
  font-style: italic;
`;
