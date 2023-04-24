import { observer } from "mobx-react-lite";
import * as styled from "./UserHomePage.styled";
import { useStore } from "shared";
import { useState } from "react";
import { LoadingPage } from "ui-kit";

const UserHomePage = () => {
  const [actived, setActived] = useState<boolean>(true);
  const { githubStore } = useStore();

  return (
    <styled.HomeContainer>
      <styled.TabContainer>
        <styled.Tab active={actived} onClick={() => setActived(true)}>
          System
        </styled.Tab>
        <styled.Tab active={!actived} onClick={() => setActived(false)}>
          Github
        </styled.Tab>
      </styled.TabContainer>
      {!githubStore.user ? <LoadingPage /> : githubStore.user?.username}
    </styled.HomeContainer>
  );
};

export default observer(UserHomePage);
