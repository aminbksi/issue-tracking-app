import * as styled from "./LoadingPage.styled";

const Loading = () => {
  return (
    <styled.LoadingContainer>
      <styled.Dot delay={0} />
      <styled.Dot delay={0.2} />
      <styled.Dot delay={0.4} />
    </styled.LoadingContainer>
  );
};

export default Loading;
