import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";

interface Props {
  canvasHeight: string;
  canvasWidth: string;
  image: string;
  css: object;
}

const BoxArt = (props: Props): JSX.Element => {
  const colorMap = useLoader(TextureLoader, props.image);

  return (
    <Suspense>
      <div
        id="canvas-container"
        style={{
          position: "relative",
          height: props.canvasHeight,
          width: props.canvasWidth,
          border: "solid orange 1px",
          ...props.css,
        }}
      >
        <Canvas>
          <ambientLight intensity={0.4} />
          <mesh rotation-x={0.25} scale={[4, 4, 4]}>
            <RoundedBox args={[1, 1, 0.25]}>
              <meshStandardMaterial map={colorMap} />
            </RoundedBox>
          </mesh>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            enableRotate={false}
          />
        </Canvas>
      </div>
    </Suspense>
  );
};

export default BoxArt;
