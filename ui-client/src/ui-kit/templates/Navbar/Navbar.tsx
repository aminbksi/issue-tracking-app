import { FC } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "core";
import * as styled from "./Navbar.styled";

interface PropsInterface {
  onSearch?: () => void;
}

const Navbar: FC<PropsInterface> = () => {
  const history = useHistory();
  return (
    <styled.NavContainer>
      <styled.LeftContainer>
        <styled.Logo>Issue Tracking</styled.Logo>
        <styled.HomeButton
          onClick={() => history.push({ pathname: ROUTES.base })}
        >
          Home
        </styled.HomeButton>
      </styled.LeftContainer>
    </styled.NavContainer>
  );
};

export default Navbar;
