import { useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "core";
import * as styled from "./Navbar.styled";
import { GithubLogin } from "scenes/Github/pages";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <styled.NavContainer>
      <styled.LeftContainer>
        <styled.Logo>Issue Tracking</styled.Logo>
        {location.pathname.includes("user") ? (
          <styled.HomeButton
            onClick={() => history.push({ pathname: ROUTES.base })}
          >
            Home
          </styled.HomeButton>
        ) : (
          <styled.HomeButton
            onClick={() => history.push({ pathname: ROUTES.user })}
          >
            Dashboard
          </styled.HomeButton>
        )}
      </styled.LeftContainer>
      <GithubLogin />
    </styled.NavContainer>
  );
};

export default Navbar;
