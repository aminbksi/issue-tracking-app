import { observer } from "mobx-react-lite";
import React, { FC, lazy } from "react";

const Navbar = lazy(() => import("../ui-kit/templates/Navbar/Navbar"));
const Footer = lazy(() => import("../ui-kit/templates/Footer/Footer"));

interface PropsInterface {
  children?: React.ReactNode;
}

const AppLayers: FC<PropsInterface> = ({ children }) => {
  const handleLoginGithub = () => {};
  return (
    <div>
      <main id="main">
        <div className="main-content">{children}</div>
        <Navbar onLogin={handleLoginGithub} />
      </main>
      <Footer />
    </div>
  );
};

export default observer(AppLayers);
