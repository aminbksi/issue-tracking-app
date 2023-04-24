import { observer } from "mobx-react-lite";
import * as styled from "./GithubRepositories.styled";

const GithubRepositories = () => {
  return <styled.HomeContainer>Repositories</styled.HomeContainer>;
};

export default observer(GithubRepositories);
