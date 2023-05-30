/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

// import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import Deck from "./components/deck/deck";
import { OrbitControls } from "@react-three/drei";

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

      <Suspense>
        <div
          id="canvas-container"
          style={{
            position: "relative",
            height: "20em",
            width: "20em",
            border: "solid orange 1px",
          }}
        >
          <Canvas>
            <ambientLight intensity={0.4} />
            <Deck />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              enableRotate={false}
            />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
