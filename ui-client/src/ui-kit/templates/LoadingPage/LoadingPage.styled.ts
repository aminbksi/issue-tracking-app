import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Dot = styled.div<{ delay?: number }>`
  margin: 0 10px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #333;
  animation: ${keyframes`
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  `} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;
