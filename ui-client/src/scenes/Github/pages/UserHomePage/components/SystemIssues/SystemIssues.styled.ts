import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  padding: 20px;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px 400px 20px;
`;

export const Tab = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  margin: 5px 10px 10px;
  border-radius: 8px;
  background-color: #7c8363;
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
  padding: 20px;
  background-color: #99b5ab;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  border: 1px solid #31473a;

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
  background-color: ${(props) =>
    props.type !== "open" ? "#dc3545" : "#31473A"};
  color: #fff;
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
    background: #7c8363;
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

export const TopButton = styled.button`
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
