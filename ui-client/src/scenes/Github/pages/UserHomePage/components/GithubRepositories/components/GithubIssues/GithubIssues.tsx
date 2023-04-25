import { observer } from "mobx-react-lite";
import * as styled from "./GithubIssues.styled";
import { useStore } from "shared";

const GithubIssues = () => {
  const { issueStore } = useStore();

  return (
    <>
      <styled.HomeContainer>
        {/* {issueStore.issues &&
          issueStore.issues.length > 0 &&
          issueStore.issues.map((issue) => {
            return <div>{issue.title}</div>;
          })} */}

        {issueStore.issues && issueStore.issues.length > 0 ? (
          issueStore.issues.map((issue, index) => (
            <styled.IssueContainer key={index}>
              <styled.IssueCard>
                <styled.TopCard>
                  <styled.IssueTitle>{issue.title}</styled.IssueTitle>
                  <styled.StateLabel type={issue.state}>
                    {issue.state}
                  </styled.StateLabel>
                </styled.TopCard>
                <styled.Description>{issue.description}</styled.Description>
                <styled.LabelContainer>
                  {issue.labels &&
                    issue.labels.map((label, index) => (
                      <styled.Label color={label.color} key={index}>
                        {label.name}
                      </styled.Label>
                    ))}
                </styled.LabelContainer>
                {/* state={issue.state} */}
                <styled.Buttons>
                  <styled.Button>Add Label</styled.Button>
                  <styled.Button>Add to System</styled.Button>
                </styled.Buttons>
              </styled.IssueCard>
            </styled.IssueContainer>
          ))
        ) : (
          <styled.NoIssues>
            There are no issues in this repository yet, you can add them by
            clicking on the button above
          </styled.NoIssues>
        )}
      </styled.HomeContainer>
    </>
  );
};

export default observer(GithubIssues);
