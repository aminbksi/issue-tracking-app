import { observer } from "mobx-react-lite";
import * as styled from "./SystemIssues.styled";
import { useStore } from "shared";

const SystemIssues = () => {
  const { githubStore } = useStore();

  return (
    <styled.HomeContainer>
      {githubStore.user?.issues && githubStore.user?.issues?.length > 0 ? (
        githubStore.user.issues.map((issue) => {
          return (
            <div>
              <div>{issue.title}</div>
              <div>here</div>
            </div>
          );
        })
      ) : (
        <div>no issues added for tracking!</div>
      )}
    </styled.HomeContainer>
  );
};

export default observer(SystemIssues);
