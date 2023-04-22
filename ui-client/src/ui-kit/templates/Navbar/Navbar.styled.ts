import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #0083ff;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e5e5e5;
  padding: 20px 0;
  flex-wrap: nowrap;
  width: 100%;
  z-index: 5;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 510px;
  gap: 30px;
  align-items: center;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Logo = styled.span`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`;

export const HomeButton = styled.button`
  padding: 10px 10px;
  font-size: 1.25rem;
  line-height: 1;
  background: transparent;
  border: 1px solid white;

  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin: 0 10px;

  :hover {
    background: #035199;
  }
`;
