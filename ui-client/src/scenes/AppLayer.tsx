import React, { FC, lazy } from "react";

const Navbar = lazy(() => import("../ui-kit/templates/Navbar/Navbar"));
const Footer = lazy(() => import("../ui-kit/templates/Footer/Footer"));

interface PropsInterface {
  children?: React.ReactNode;
}

const AppLayers: FC<PropsInterface> = ({ children }) => {
  return (
    <div>
      <main id="main">
        <div className="main-content">{children}</div>
        <Navbar />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayers;
