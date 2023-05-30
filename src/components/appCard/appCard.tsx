import React from "react";

import { Card } from "@nextui-org/react";

import BoxArt from "./boxArt/boxArt";

interface Props {
  canvasHeight: string;
  canvasWidth: string;
  image: string;
}

const AppCard = (props: Props): JSX.Element => {
  return (
    <Card className="app_card_container">
      <Card.Body>
        <BoxArt
          canvasHeight={props.canvasHeight}
          canvasWidth={props.canvasWidth}
          image={props.image}
        />
      </Card.Body>
    </Card>
  );
};

export default AppCard;
