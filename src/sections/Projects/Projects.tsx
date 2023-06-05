import React, { useState, useEffect } from "react";
import { Col } from "@nextui-org/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import AppCard from "../../components/appCard/appCard";

import chef from "../../assets/box-art/chef.jpeg";

const Projects = (): JSX.Element => {
  const [canvasHeight, setCanvasHeight] = useState("");
  const [canvasWidth, setCanvasWidth] = useState("");

  // Use breakpoints to determine box art height
  const { width } = useWindowDimensions();

  const updateBoxArtDimensions = (): void => {
    // Mobile
    if (width <= 640) {
      setCanvasHeight("8em");
      setCanvasWidth("8em");
    }

    // Mobile / Tablet
    if (width >= 641 && width <= 768) {
      setCanvasHeight("11em");
      setCanvasWidth("11em");
    }

    // Tablet / Desktop
    if (width >= 769 && width <= 1024) {
      setCanvasHeight("14em");
      setCanvasWidth("14em");
    }

    // Destop + Ultrawide
    if (width >= 1025) {
      setCanvasHeight("20em");
      setCanvasWidth("20em");
    }
  };

  useEffect(() => {
    updateBoxArtDimensions();
  }, [width]);
  return (
    <Col>
      <h1>Projects</h1>
      <div>
        <AppCard
          canvasHeight={canvasHeight}
          canvasWidth={canvasWidth}
          image={chef}
        />
      </div>
    </Col>
  );
};

export default Projects;
