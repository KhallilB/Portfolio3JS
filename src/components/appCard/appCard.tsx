import React from "react";
import { Card } from "@nextui-org/react";

import BoxArt from "./boxArt/boxArt";
// import ScreenshotCarousel from "./screenshotCarousel/screenshotCarousel";

interface Props {
  canvasHeight: string;
  canvasWidth: string;
  image: string;
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
        <BoxArt
          canvasHeight={props.canvasHeight}
          canvasWidth={props.canvasWidth}
          image={props.image}
          css={{ marginRight: "5rem" }}
        />
        <div className="app_details">
          <h3>Title</h3>
          <p>Website</p>
          <div className="screenshots">
            <h4>Screenshots</h4>
            {/* <ScreenshotCarousel /> */}
          </div>
          <p>Tech Stack</p>
          <p>App Summary</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AppCard;
