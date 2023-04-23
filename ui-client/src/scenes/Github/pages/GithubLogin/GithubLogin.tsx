import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import PopupWindow from "./components/PopupWindow/PopupWindow";
import { toQuery, githubConfig } from "core";

import * as styled from "./GithubLogin.styled";
import React from "react";

const popupHeight = 650;
const popupWidth = 500;

interface PropsInterface {
  disabled?: boolean;
}
const GithubLogin: FC<PropsInterface> = (props) => {
  const { disabled = false } = props;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const handleSuccess = (data: any) => {
    if (!data.code) {
      return handleFailure(new Error("'code' not found"));
    }

    console.log(data);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  const handleFailure = (error: any) => {};

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

    const popup = PopupWindow.open(
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
      (data: any) => handleSuccess(data),
      (error: any) => handleFailure(error)
    );
  };

  return (
    <React.Fragment>
      {!loggedIn ? (
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
