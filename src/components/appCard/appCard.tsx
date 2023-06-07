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
}

const AppCard = (props: Props): JSX.Element => {
  return (
    <Card>
      <Card.Body
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flx-start",
          alignItems: "center",
        }}
      >
        {/* Box Art w/ Overlay */}
        <div className="box_art_container">
          {props.isLive === false ? (
            <div
              className="overlay"
              style={{ height: props.canvasHeight, width: props.canvasWidth }}
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
          <h3>Title</h3>
          <p>Website</p>
          <div className="screenshots">
            <h4>Screenshots</h4>
            <ScreenshotCarousel />
          </div>
          <p>Tech Stack</p>
          <p>App Summary</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AppCard;
