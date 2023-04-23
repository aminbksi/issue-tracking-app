import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background: #0163bf;
  z-index: 5;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 15px;
  margin: 0 10px;
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HomeButton = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  background: transparent;
  border: 1px solid white;

  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 10px 10px;

  :hover {
    background-color: #013b72;
  }
`;
