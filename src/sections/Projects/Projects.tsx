import React, { useState, useEffect, useRef, type CSSProperties } from "react";
import { Col } from "@nextui-org/react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import AppCard from "../../components/appCard/appCard";

import chef from "../../assets/box-art/chef.jpeg";
import "./Projects.css";

const Projects = (): JSX.Element => {
  const [canvasHeight, setCanvasHeight] = useState("");
  const [canvasWidth, setCanvasWidth] = useState("");
  const [isVisible, setVisible] = React.useState(true);

  const domRef = useRef<HTMLDivElement>(null);
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

  const projectsContainerStyle: CSSProperties = {
    maxHeight: "80vh",
    overflowY: "scroll",
    scrollSnapType: "y mandatory",
  };

  const projectStyle: CSSProperties = {
    height: "80vh",
    border: "solid 1px orange",
    scrollSnapAlign: "start",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });

      if (domRef.current !== null) {
        observer.observe(domRef.current);
      }

      return () => {
        if (domRef.current !== null) {
          observer.unobserve(domRef.current);
        }
      };
    });
  });

  useEffect(() => {
    updateBoxArtDimensions();
  }, [width]);

  return (
    <Col>
      <h1>Projects</h1>
      <div style={projectsContainerStyle}>
        <div
          className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
          ref={domRef}
        >
          <div style={projectStyle}>
            <AppCard
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              image={chef}
            />
          </div>
          <div style={projectStyle}>
            <AppCard
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              image={chef}
            />
          </div>
          <div style={projectStyle}>
            <AppCard
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              image={chef}
            />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Projects;
