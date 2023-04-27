import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #7c8363;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 20px 0;
  margin: 10px;
  flex-wrap: nowrap;
  width: 98.5%;
  border: 1px solid #31473a;
  z-index: 5;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 610px;
  gap: 30px;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Logo = styled.span`
  display: inline-block;
  color: black;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: inherit;
  white-space: nowrap;
`;

export const HomeButton = styled.button`
  padding: 10px 10px;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  background: transparent;
  border: 1px solid #31473a;

  color: black;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px;

  :hover {
    background: #99b5ab;
  }
`;
