import React from "react";

import { Card } from "@nextui-org/react";

import BoxArt from "./boxArt/boxArt";
import AppInfo from "./appInfo/appInfo";

interface Props {
  canvasHeight: string;
  canvasWidth: string;
  image: string;
}

const AppCard = (props: Props): JSX.Element => {
  return (
    <Card>
      <Card.Body css={{ display: "flex", flexDirection: "row" }}>
        <BoxArt
          canvasHeight={props.canvasHeight}
          canvasWidth={props.canvasWidth}
          image={props.image}
          css={{ marginRight: "5em" }}
        />
        <div className="app_details">
          <AppInfo />
        </div>
      </Card.Body>
    </Card>
  );
};

export default AppCard;
