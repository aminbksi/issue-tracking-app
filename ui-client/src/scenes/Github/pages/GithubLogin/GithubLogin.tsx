import { FC } from "react";
import { observer } from "mobx-react-lite";
import { toQuery, githubConfig, ROUTES } from "core";
import React from "react";
import { useStore } from "shared";

import * as styled from "./GithubLogin.styled";
import PopupWin from "./components/PopupWindow/PopupWin";
import { useHistory } from "react-router-dom";

const popupHeight = 650;
const popupWidth = 500;

interface PropsInterface {
  disabled?: boolean;
}
const GithubLogin: FC<PropsInterface> = (props) => {
  const { githubStore } = useStore();
  const { disabled = false } = props;
  const history = useHistory();

  const handleLogout = () => {
    githubStore.logout();
  };

  const handleSucess = (data: any) => {
    githubStore.getAccessToken(data.code).then(() => {
      history.push(ROUTES.user);
    });
  };

  const handleLogin = () => {
    const query = toQuery({
      client_id: githubConfig.CLIENT_ID,
      scope: githubConfig.SCOPE,
      redirect_uri: githubConfig.REDIRECT_URI,
    });

    if (!window.top) {
      return;
    }
    const top =
      window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;
    const left =
      window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;

    const popup = PopupWin.open(
      "github-oauth-authorize",
      `https://github.com/login/oauth/authorize?${query}`,
      {
        height: popupHeight,
        width: popupWidth,
        top: top,
        left: left,
      }
    );

    popup.then(
      (data: any) => handleSucess(data),
      (error: any) => {
        throw new Error(error);
      }
    );
  };

  return (
    <React.Fragment>
      {!githubStore.accessToken ? (
        <styled.LoginButton
          disabled={disabled}
          className=""
          onClick={handleLogin}
        >
          Connect to Github
        </styled.LoginButton>
      ) : (
        <styled.LogoutButton onClick={handleLogout}>
          Log out
        </styled.LogoutButton>
      )}
    </React.Fragment>
  );
};

export default observer(GithubLogin);
