/* eslint-disable react/no-unknown-property */
import React from "react";

import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import chef from "../../assets/box-art/chef.jpeg";
import { RoundedBox } from "@react-three/drei";

const Deck = (): any => {
  const colorMap = useLoader(TextureLoader, chef);

  return (
    <mesh rotation-x={0.25} scale={[4, 4, 4]}>
      <RoundedBox args={[1, 1, 0.25]}>
        <meshStandardMaterial map={colorMap} />
      </RoundedBox>
    </mesh>
  );
};

export default Deck;
