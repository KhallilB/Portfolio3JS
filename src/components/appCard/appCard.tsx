import React from "react";
import { Card } from "@nextui-org/react";

import BoxArt from "./boxArt/boxArt";
import ScreenshotCarousel from "./screenshotCarousel/screenshotCarousel";

import "./appCard.css";

interface Props {
  canvasHeight: string;
  canvasWidth: string;
  image: string;
  isLive?: boolean;
  details: {
    title: string;
    website: string;
    screenshots?: string[];
    techStack: string[];
    summary: string;
    imageUrls: string[];
  };
}

const AppCard = (props: Props): JSX.Element => {
  return (
    <Card css={{ padding: "1em" }}>
      <Card.Body
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* Box Art w/ Overlay */}
        <div className="box_art_container">
          {props.isLive === false ? (
            <div
              className="overlay"
              style={{
                height: props.canvasHeight,
                width: props.canvasWidth,
                borderRadius: "0.5em",
              }}
            >
              <div className="tag">
                <h2>Coming Soon!</h2>
              </div>
            </div>
          ) : null}
          <BoxArt
            canvasHeight={props.canvasHeight}
            canvasWidth={props.canvasWidth}
            image={props.image}
            css={{ marginRight: "5rem" }}
          />
        </div>

        {/* Project Info */}
        <div className="app_details">
          <h3>{props.details.title}</h3>
          <p>{props.details.website}</p>
          <div className="screenshots">
            <h4>Screenshots</h4>
            <ScreenshotCarousel
              imageUrls={props.details.imageUrls}
              height={props.canvasHeight}
              width={props.canvasWidth}
            />
          </div>
          <div className="tech_stack">
            {props.details.techStack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <p>{props.details.summary}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AppCard;
