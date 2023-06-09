import React, { useState, useEffect } from "react";
import { Col, Container } from "@nextui-org/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import AppCard from "../../components/appCard/appCard";
import SnapScroll from "../../components/util/snapScroll";

import chef from "../../assets/box-art/chef.jpeg";
import cars from "../../assets/box-art/cars.jpeg";
import fitness from "../../assets/box-art/fitness.jpeg";

import "./Projects.css";

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
    <Container responsive>
      <Col>
        <h1>Projects</h1>
        <SnapScroll
          sections={["project_1", "project_2", "project_3"]}
          containerStyle={{ maxHeight: "80vh" }}
          sectionStyle={{ height: "80vh" }}
        >
          <AppCard
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            image={chef}
            isLive={false}
          />

          <AppCard
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            image={cars}
            isLive={false}
          />

          <AppCard
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            image={fitness}
            isLive={false}
          />
        </SnapScroll>
      </Col>
    </Container>
  );
};

export default Projects;
