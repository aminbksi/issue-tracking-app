import { observer } from "mobx-react-lite";
import * as styled from "./Home.styled";

const Home = () => {
  return (
    <styled.HomeContainer>
      <styled.BottomContainer>
        <styled.BottomDiv>
          <styled.InnerDiv>
            <styled.BottomTitle>Issue tracking app</styled.BottomTitle>
            <styled.ButtonContainer></styled.ButtonContainer>
          </styled.InnerDiv>
        </styled.BottomDiv>
      </styled.BottomContainer>
    </styled.HomeContainer>
  );
};

export default observer(Home);
