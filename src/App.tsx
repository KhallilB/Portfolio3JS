/* eslint-disable react/no-unknown-property */
import React from "react";

// import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import AppCard from "./components/appCard/appCard";

import chef from "./assets/box-art/chef.jpeg";

const style = {
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function App(): JSX.Element {
  return (
    <div className="app_container" style={style}>
      {/* <WelcomeMessage /> */}

      <AppCard canvasHeight="20em" canvasWidth="20em" image={chef} />
    </div>
  );
}

export default App;
