import { observer } from "mobx-react-lite";
import * as styled from "./UserHomePage.styled";
import { useStore } from "shared";
import { useState } from "react";
import { SystemIssues } from "./components/SystemIssues";
import { GithubRepositories } from "./components/GithubRepositories";

const UserHomePage = () => {
  const [actived, setActived] = useState<boolean>(true);
  const { userStore, githubStore } = useStore();

  const handleGithubFetch = () => {
    setActived(false);
    userStore.getRepositories(githubStore.accessToken ?? "");
  };

  return (
    <styled.HomeContainer>
      <styled.TabContainer>
        <styled.Tab active={actived} onClick={() => setActived(true)}>
          System
        </styled.Tab>
        <styled.Tab active={!actived} onClick={handleGithubFetch}>
          Github
        </styled.Tab>
      </styled.TabContainer>
      {actived ? <SystemIssues /> : <GithubRepositories />}
    </styled.HomeContainer>
  );
};

export default observer(UserHomePage);
