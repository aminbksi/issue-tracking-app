import { observer } from "mobx-react-lite";
import * as styled from "./Repositories.styled";
import { useStore } from "shared";
import { FC } from "react";

interface PropsInterface {
  onClickRepository: (name: string, owner: string) => void;
}
const Repositories: FC<PropsInterface> = ({ onClickRepository }) => {
  const { userStore, githubStore } = useStore();
  return (
    <>
      <styled.CardContainer>
        {userStore.repositories &&
          userStore.repositories?.length > 0 &&
          userStore.repositories.map((repository, index) => {
            return (
              <styled.Card
                key={index}
                onClick={() =>
                  onClickRepository(repository.name, repository.owner)
                }
              >
                <styled.Title>{repository.name}</styled.Title>
                <styled.LabelContainer>
                  <styled.Label
                    type={repository.hasIssues > 0 ? "issue" : "noIssue"}
                  >
                    {repository.hasIssues > 0 ? "Has Issues" : "No issues"}
                  </styled.Label>
                  <styled.Label
                    type={repository.isPrivate ? "private" : "public"}
                  >
                    {repository.isPrivate ? "Private" : "Public"}
                  </styled.Label>
                  <styled.Label
                    type={
                      repository.owner === githubStore.user?.username
                        ? "owner"
                        : "notOwner"
                    }
                  >
                    {repository.owner === githubStore.user?.username
                      ? "Your Repository"
                      : "You're not the owner"}
                  </styled.Label>
                </styled.LabelContainer>
              </styled.Card>
            );
          })}
      </styled.CardContainer>
    </>
  );
};

export default observer(Repositories);
