import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow-y: scroll;
  margin: 80px 0 54px;
`;

export const BottomContainer = styled.div`
  margin-bottom: 5px;
`;

export const BottomDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

export const InnerDiv = styled.div`
  position: relative;
  width: 50%;
  min-height: 1px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const BottomTitle = styled.h1`
  font-size: 84px;
  line-height: 1.17;
  letter-spacing: -1.5px;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 2px;
  justify-content: flex-end;
  margin-bottom: 30px;
  pointer-events: auto;
`;
